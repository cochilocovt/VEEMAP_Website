import {
  AbsoluteFill,
  Composition,
  Easing,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const FPS = 24;
const DURATION_IN_FRAMES = 8 * FPS;
const SOURCE_WIDTH = 1692;
const SOURCE_HEIGHT = 929;

type LayerName = 'vision' | 'motion' | 'hmi' | 'condition';

type LayerSpec = {
  name: LayerName;
  start: number;
  end: number;
  installed: { x: number; y: number; scale: number };
  exploded: { x: number; y: number; scale: number };
  origin: string;
};

const layers: LayerSpec[] = [
  {
    name: 'vision',
    start: 0.1,
    end: 0.3,
    installed: { x: 20, y: 62, scale: 0.82 },
    exploded: { x: -330, y: 48, scale: 0.9 },
    origin: '650px 285px',
  },
  {
    name: 'motion',
    start: 0.3,
    end: 0.5,
    installed: { x: 90, y: 84, scale: 0.72 },
    exploded: { x: -65, y: -255, scale: 0.78 },
    origin: '850px 285px',
  },
  {
    name: 'hmi',
    start: 0.5,
    end: 0.7,
    installed: { x: 300, y: 78, scale: 0.58 },
    exploded: { x: 600, y: 18, scale: 0.66 },
    origin: '970px 430px',
  },
  {
    name: 'condition',
    start: 0.7,
    end: 0.9,
    installed: { x: -10, y: 0, scale: 0.74 },
    exploded: { x: 205, y: -145, scale: 0.82 },
    origin: '1245px 115px',
  },
];

const move = (frame: number, layer: LayerSpec) => {
  const progress = frame / (DURATION_IN_FRAMES - 1);
  const eased = interpolate(progress, [layer.start, layer.end], [0, 1], {
    easing: Easing.bezier(0.65, 0, 0.2, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return {
    x: interpolate(eased, [0, 1], [layer.exploded.x, layer.installed.x]),
    y: interpolate(eased, [0, 1], [layer.exploded.y, layer.installed.y]),
    scale: interpolate(eased, [0, 1], [layer.exploded.scale, layer.installed.scale]),
    highlight: Math.sin(Math.min(1, eased) * Math.PI),
  };
};

function MachineScene({ portrait = false }: { portrait?: boolean }) {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const progress = frame / (DURATION_IN_FRAMES - 1);
  const finalOpacity = interpolate(progress, [0.87, 0.9], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const portraitScale = interpolate(
    progress,
    [0, 0.28, 0.48, 0.68, 0.86, 0.92, 1],
    [1.48, 1.52, 1.55, 1.48, 1.42, 0.64, 0.64],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );
  const portraitX = interpolate(
    progress,
    [0, 0.28, 0.48, 0.68, 0.86, 0.92, 1],
    [-265, -245, -405, -535, -420, -2, -2],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );
  const portraitY = interpolate(
    progress,
    [0, 0.28, 0.48, 0.68, 0.86, 0.92, 1],
    [260, 235, 240, 250, 210, 655, 655],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
  );

  const fitScale = portrait ? portraitScale : Math.min(width / SOURCE_WIDTH, height / SOURCE_HEIGHT);
  const sceneX = portrait ? portraitX : (width - SOURCE_WIDTH * fitScale) / 2;
  const sceneY = portrait ? portraitY : (height - SOURCE_HEIGHT * fitScale) / 2;

  return (
    <AbsoluteFill style={{ backgroundColor: '#000', overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          left: sceneX,
          top: sceneY,
          width: SOURCE_WIDTH,
          height: SOURCE_HEIGHT,
          transform: `scale(${fitScale})`,
          transformOrigin: 'top left',
        }}
      >
        <Img
          src={staticFile('images/commissioning/chassis.png')}
          style={{ position: 'absolute', inset: 0, width: SOURCE_WIDTH, height: SOURCE_HEIGHT }}
        />

        {layers.map((layer) => {
          const state = move(frame, layer);
          return (
            <Img
              key={layer.name}
              src={staticFile(`images/commissioning/${layer.name}-layer.png`)}
              style={{
                position: 'absolute',
                inset: 0,
                width: SOURCE_WIDTH,
                height: SOURCE_HEIGHT,
                transformOrigin: layer.origin,
                transform: `translate3d(${state.x}px, ${state.y}px, 0) scale(${state.scale})`,
                filter: `drop-shadow(0 0 ${18 * state.highlight}px rgba(250,76,20,${0.92 * state.highlight}))`,
              }}
            />
          );
        })}

        <Img
          src={staticFile('images/machine-assembled-dark.png')}
          style={{
            position: 'absolute',
            inset: 0,
            width: SOURCE_WIDTH,
            height: SOURCE_HEIGHT,
            opacity: finalOpacity,
          }}
        />
      </div>
    </AbsoluteFill>
  );
}

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="VEEMAPAssemblyDesktop"
        component={MachineScene}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1920}
        height={1080}
      />
      <Composition
        id="VEEMAPAssemblyPortrait"
        component={() => <MachineScene portrait />}
        durationInFrames={DURATION_IN_FRAMES}
        fps={FPS}
        width={1080}
        height={1920}
      />
    </>
  );
}
