export interface ClientLogo {
  id: string;
  name: string;
  sector: 'automotive' | 'ev' | 'electronics' | 'consumer_goods' | 'medical_pharma' | 'industrial_machinery';
  logoPath: string;
  aspectRatio: 'landscape' | 'square' | 'wide';
  rawSources: string[];
}

export interface SectorTab {
  id: string;
  label: string;
  count: number;
}

export const SECTOR_TABS: SectorTab[] = [
  { id: 'all', label: 'All Clients', count: 48 },
  { id: 'automotive', label: 'Automotive', count: 22 },
  { id: 'ev', label: 'EV Solutions', count: 3 },
  { id: 'electronics', label: 'Electronics', count: 5 },
  { id: 'consumer_goods', label: 'Consumer Goods', count: 7 },
  { id: 'medical_pharma', label: 'Medical & Pharma', count: 5 },
  { id: 'industrial_machinery', label: 'Technology Partners', count: 6 },
];

export const CLIENTS: ClientLogo[] = [
  {
    "id": "maruti-suzuki",
    "name": "Maruti Suzuki India Limited",
    "sector": "automotive",
    "logoPath": "/clients/automotive/maruti-suzuki.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "MARUTI"
    ]
  },
  {
    "id": "honda",
    "name": "Honda Motor Co. / HMSI",
    "sector": "automotive",
    "logoPath": "/clients/automotive/honda.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "HONDA"
    ]
  },
  {
    "id": "fcc",
    "name": "F.C.C. Co., Ltd.",
    "sector": "automotive",
    "logoPath": "/clients/automotive/fcc.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "F.C.C.(TPKR)",
      "F.C.C.(BGR)",
      "F.C.C.(PUNE)",
      "F.C.C.(AMD)",
      "F.C.C.(MANESAR)",
      "F.C.C. (CHE)",
      "F.C.C. (HW)"
    ]
  },
  {
    "id": "continental",
    "name": "Continental AG",
    "sector": "automotive",
    "logoPath": "/clients/automotive/continental.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "CONTINENTAL"
    ]
  },
  {
    "id": "aisin",
    "name": "Aisin Corporation",
    "sector": "automotive",
    "logoPath": "/clients/automotive/aisin.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "AISIN"
    ]
  },
  {
    "id": "anand-mando",
    "name": "Anand Mando Automotive",
    "sector": "automotive",
    "logoPath": "/clients/automotive/anand-mando.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "ANAND MANDO"
    ]
  },
  {
    "id": "marelli",
    "name": "Marelli (Magneti Marelli)",
    "sector": "automotive",
    "logoPath": "/clients/automotive/marelli.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "MAGNETI MARELLI"
    ]
  },
  {
    "id": "hella",
    "name": "Hella India Automotive",
    "sector": "automotive",
    "logoPath": "/clients/automotive/hella.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "HELLA"
    ]
  },
  {
    "id": "ts-tech",
    "name": "TS Tech Co., Ltd.",
    "sector": "automotive",
    "logoPath": "/clients/automotive/ts-tech.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "TS TECH"
    ]
  },
  {
    "id": "uno-minda",
    "name": "Uno Minda Limited",
    "sector": "automotive",
    "logoPath": "/clients/automotive/uno-minda.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "UNO MINDA"
    ]
  },
  {
    "id": "mindarika",
    "name": "Mindarika Pvt. Ltd. (MKL)",
    "sector": "automotive",
    "logoPath": "/clients/automotive/mindarika.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "MKL-UNO MINDA"
    ]
  },
  {
    "id": "shriram-pistons",
    "name": "Shriram Pistons & Rings Ltd.",
    "sector": "automotive",
    "logoPath": "/clients/automotive/shriram-pistons.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "SHRIRAM PISTON"
    ]
  },
  {
    "id": "ask-automotive",
    "name": "ASK Automotive Limited",
    "sector": "automotive",
    "logoPath": "/clients/automotive/ask-automotive.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "ASK"
    ]
  },
  {
    "id": "asti",
    "name": "ASTI Electronics India",
    "sector": "automotive",
    "logoPath": "/clients/automotive/asti.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "ASTI"
    ]
  },
  {
    "id": "belrise",
    "name": "Belrise Industries Limited",
    "sector": "automotive",
    "logoPath": "/clients/automotive/belrise.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "BELRISE"
    ]
  },
  {
    "id": "denso",
    "name": "Denso Kirloskar (DNKI)",
    "sector": "automotive",
    "logoPath": "/clients/automotive/denso.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "DNKI"
    ]
  },
  {
    "id": "munjal-kiriu",
    "name": "Munjal Kiriu Industries",
    "sector": "automotive",
    "logoPath": "/clients/automotive/munjal-kiriu.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "MUNJAL KIRIU"
    ]
  },
  {
    "id": "napino",
    "name": "Napino Auto & Electronics",
    "sector": "automotive",
    "logoPath": "/clients/automotive/napino.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "NAPINO"
    ]
  },
  {
    "id": "allied-jb",
    "name": "Allied JB Friction Pvt. Ltd.",
    "sector": "automotive",
    "logoPath": "/clients/automotive/allied-jb.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "ALLIED JB"
    ]
  },
  {
    "id": "victora",
    "name": "Victora Tool Engineers",
    "sector": "automotive",
    "logoPath": "/clients/automotive/victora.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "VICTORA"
    ]
  },
  {
    "id": "kamal-rubber",
    "name": "Kamal Rubber Industries",
    "sector": "automotive",
    "logoPath": "/clients/automotive/kamal-rubber.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "KAMAL RUBBER"
    ]
  },
  {
    "id": "wipe-india",
    "name": "Wiper Systems India",
    "sector": "automotive",
    "logoPath": "/clients/automotive/wipe-india.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "WIPE INDIA"
    ]
  },
  {
    "id": "sterling-gtake",
    "name": "Sterling Gtake E-Mobility",
    "sector": "ev",
    "logoPath": "/clients/ev/sterling-gtake.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "STERLING GTAKE E MOBILITY"
    ]
  },
  {
    "id": "exide",
    "name": "Exide Industries (EV Storage)",
    "sector": "ev",
    "logoPath": "/clients/ev/exide.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "EXIDE"
    ]
  },
  {
    "id": "livguard",
    "name": "Livguard Energy Technologies",
    "sector": "ev",
    "logoPath": "/clients/ev/livguard.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "LIVGUARD"
    ]
  },
  {
    "id": "panasonic",
    "name": "Panasonic Life Solutions",
    "sector": "electronics",
    "logoPath": "/clients/electronics/panasonic.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "PANASONIC"
    ]
  },
  {
    "id": "syrma-sgs",
    "name": "Syrma SGS Technology Ltd.",
    "sector": "electronics",
    "logoPath": "/clients/electronics/syrma-sgs.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "SYRMA SGS"
    ]
  },
  {
    "id": "legrand",
    "name": "Legrand Group",
    "sector": "electronics",
    "logoPath": "/clients/electronics/legrand.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "LEGRAND"
    ]
  },
  {
    "id": "proterial-hitachi",
    "name": "Proterial (Hitachi Metals)",
    "sector": "electronics",
    "logoPath": "/clients/electronics/proterial-hitachi.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "HITACHI METALS"
    ]
  },
  {
    "id": "amd",
    "name": "AMD",
    "sector": "electronics",
    "logoPath": "/clients/electronics/amd.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "AMD"
    ]
  },
  {
    "id": "perfetti-van-melle",
    "name": "Perfetti Van Melle",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/perfetti-van-melle.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "PERFETTI"
    ]
  },
  {
    "id": "aptar-beauty",
    "name": "Aptar Beauty + Home",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/aptar-beauty.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "APTAR-BEAUTY"
    ]
  },
  {
    "id": "alpla",
    "name": "ALPLA Group",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/alpla.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "ALPLA"
    ]
  },
  {
    "id": "manjushree-technopack",
    "name": "Manjushree Technopack Ltd.",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/manjushree-technopack.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "MANJU SHREE"
    ]
  },
  {
    "id": "rieke",
    "name": "Rieke Packaging Systems",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/rieke.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "RIEKE"
    ]
  },
  {
    "id": "takahata",
    "name": "Takahata Precision",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/takahata.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "TAKAHATA"
    ]
  },
  {
    "id": "palam-plastics",
    "name": "Palam Plastics",
    "sector": "consumer_goods",
    "logoPath": "/clients/consumer_goods/palam-plastics.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "PALAM PLASTIC"
    ]
  },
  {
    "id": "stryker",
    "name": "Stryker Corporation",
    "sector": "medical_pharma",
    "logoPath": "/clients/medical_pharma/stryker.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "STRYKER"
    ]
  },
  {
    "id": "hollister",
    "name": "Hollister Incorporated",
    "sector": "medical_pharma",
    "logoPath": "/clients/medical_pharma/hollister.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "HOLLISTER"
    ]
  },
  {
    "id": "aptar-pharma",
    "name": "Aptar Pharma",
    "sector": "medical_pharma",
    "logoPath": "/clients/medical_pharma/aptar-pharma.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "APTAR-PHARMA"
    ]
  },
  {
    "id": "sterimed",
    "name": "Sterimed Medical Devices",
    "sector": "medical_pharma",
    "logoPath": "/clients/medical_pharma/sterimed.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "STERIMED"
    ]
  },
  {
    "id": "kokoku",
    "name": "Kokoku Intech Co., Ltd.",
    "sector": "medical_pharma",
    "logoPath": "/clients/medical_pharma/kokoku.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "KOKOKU"
    ]
  },
  {
    "id": "keyence",
    "name": "Keyence Corporation",
    "sector": "industrial_machinery",
    "logoPath": "/clients/industrial_machinery/keyence.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "KEYENCE",
      "KEYENCE+MARUTI"
    ]
  },
  {
    "id": "makino",
    "name": "Makino Milling Machine",
    "sector": "industrial_machinery",
    "logoPath": "/clients/industrial_machinery/makino.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "MAKINO"
    ]
  },
  {
    "id": "bucher-hydraulics",
    "name": "Bucher Hydraulics",
    "sector": "industrial_machinery",
    "logoPath": "/clients/industrial_machinery/bucher-hydraulics.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "BUCHER HYDRAULIC"
    ]
  },
  {
    "id": "bettinelli-cds",
    "name": "Bettinelli CDS Cam Driven Systems",
    "sector": "industrial_machinery",
    "logoPath": "/clients/industrial_machinery/bettinelli-cds.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "BETTINELLI (CDS)"
    ]
  },
  {
    "id": "sce",
    "name": "Standard Control Engineers (SCE)",
    "sector": "industrial_machinery",
    "logoPath": "/clients/industrial_machinery/sce.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "SCE"
    ]
  },
  {
    "id": "sasaa-venture",
    "name": "Sasaa Venture",
    "sector": "industrial_machinery",
    "logoPath": "/clients/industrial_machinery/sasaa-venture.svg",
    "aspectRatio": "landscape",
    "rawSources": [
      "SASAA VANTURE"
    ]
  }
];
