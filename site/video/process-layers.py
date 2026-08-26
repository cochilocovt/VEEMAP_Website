from pathlib import Path

from PIL import Image, ImageChops


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "public" / "images" / "commissioning"
SOURCE_DIR = ROOT / "video" / "source-layers"
CANVAS = (1692, 929)

REGIONS = {
    "vision": (560, 130, 760, 440),
    "motion": (590, 20, 1180, 575),
    "hmi": (780, 190, 1210, 710),
    "condition": (1200, 5, 1305, 260),
    "foreground": (390, 0, 1692, 929),
}


def checkerboard_to_alpha(name: str) -> None:
    source = SOURCE_DIR / f"{name}.png"
    output = ASSET_DIR / f"{name}-layer.png"
    image = Image.open(source).convert("RGB").resize(CANVAS, Image.Resampling.LANCZOS)

    luminance = image.convert("L")
    alpha = luminance.point(lambda value: max(0, min(255, (228 - value) * 24)))

    maximum = image.getchannel("R")
    minimum = image.getchannel("R")
    for channel in (image.getchannel("G"), image.getchannel("B")):
        maximum = ImageChops.lighter(maximum, channel)
        minimum = ImageChops.darker(minimum, channel)
    saturation = ImageChops.subtract(maximum, minimum).point(lambda value: min(255, value * 7))
    alpha = ImageChops.lighter(alpha, saturation)
    alpha = alpha.point(lambda value: 0 if value < 96 else min(255, int((value - 96) * 1.8)))

    region = Image.new("L", CANVAS)
    region.paste(255, REGIONS[name])
    alpha = ImageChops.multiply(alpha, region)

    result = image.convert("RGBA")
    result.putalpha(alpha)
    result.save(output, optimize=True)
    print(f"{output.name}: {result.size}, alpha={alpha.getextrema()}")


if __name__ == "__main__":
    for layer_name in REGIONS:
        checkerboard_to_alpha(layer_name)
