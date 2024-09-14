const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const MockAdapter = require("@bot-whatsapp/database/mock");

const flowSecundario = addKeyword(["2", "siguiente"]).addAnswer([
  "Se ha terminado el flujo, vuelva a mandar un hola para ver el menú.",
]);

const flowYokohoma = addKeyword(["Yokahama"]).addAnswer(
  [
    "📏 Estas son los precios *netos* de las medidas y modelos disponibles en YOKAHAMA",
    "*Modelo*            *Medida*      *Existencia*",
    "101ZL SPEC-2BWTL    11R22.5            8",
    "101ZL SPEC-2BWTL    11R24.5            1",
    "RY537 TL          295/80R22.5          2",
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowRoadmaster = addKeyword(["Roadmaster"]).addAnswer(
  [
    "📏 Estas son los precios *netos* de las medidas y modelos disponibles en ROADMASTER",
    "*Opción 1:*",
    "_Modelo:_ RM 170",
    "_Medida:_ 235/75R17.5",
    "_Existencia:_ 6",
    "_Uso:_ Lineal",
    "_Precio:_ $3,750.00",

    "\n*Opción 2:*",
    "_Modelo:_ RM 170 ",
    "_Medida:_ 245/70R19.5",
    "_Existencia:_ 21",
    "_Uso:_ Lineal",
    "_Precio:_ $3,828.00",
    
    "\n*Opción 3:*",
    "_Modelo:_ RM 272",
    "_Medida:_ 215/75R17.5",
    "_Existencia:_ 10",
    "_Uso:_ Lineal",
    "_Precio:_ $3,950.00",

    // "RM 230          11R24.5             11",
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowHankook = addKeyword(["hankook"]).addAnswer(
  [
    "📏 Estas son los precios *netos* de las medidas y modelos disponibles en Hankook",
    "---------- *HANKOOK* ----------",
    "*Opción 1:*",
    "_Modelo:_ AH35",
    "_Medida:_ 225/70R19.5",
    "_Existencia:_ 7",
    "_Uso:_ Lineal",
    "_Precio:_ $5,000.00",
    
    "\n*Opción 2:*",
    "_Modelo:_ TL21",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 6",
    "_Uso:_ Arrastre",
    "_Precio:_ $5,550.00",
    
    "\n*Opción 3:*",
    "_Modelo:_ AL21",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 2",
    "_Uso:_ Dirección",
    "_Precio:_ $8,400.00",

    // "AH37             11R24.5            0",
    // "H724            185/60R14           4",
    // "DYNAPRO AT2     235/85R16           2",
    // "AL21 LINEAL      11R24.5           12",
    // "AH35           215/75R17.5          7",
    // "AL21           295/75R22.5          8",
    // "DM04 T           11R24.5            1",
    // "RA33            265/60R18           8",
    // "--------------- AURORA -----------------",
    // "UZ02 T           11R24.5            1",
    // "--------------- AUFINE -----------------",
    // "AF18 MIXTO       11R24.5            1",
    // "------------- CONTINENTAL --------------",
    // "CONTINENTAL LT  225/75R16           2",
    // "--------------- GOODYEAR ---------------",
    // "WRANGLER        P235/75R15          4",
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowFirestone = addKeyword(["Firestone"]).addAnswer(
  [
    "📏 Estas son los precios de las medidas y modelos disponibles en Firestone *mas IVA*",
    "*Opción 1:*",
    "_Modelo:_ FD663",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 24",
    "_Uso:_ Tracción",
    "_Precio:_ $8,081.92",

    "\n*Opción 2:*",
    "_Modelo:_ FD663",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 83",
    "_Uso:_ Tracción",
    "_Precio:_ $8,587.57",

    "\n*Opción 3:*",
    "_Modelo:_ FS 591",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 32",
    "_Uso:_ Dirección",
    "_Precio:_ $7,391.23",

    "\n*Opción 4:*",
    "_Modelo:_ FS 591",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 99",
    "_Uso:_ Dirección",
    "_Precio:_ $7,643.11",

    "\n*Opción 5:*",
    "_Modelo:_ FS 591",
    "_Medida:_ 285/75R24.5",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $7,815.73",

    "\n*Opción 6:*",
    "_Modelo:_ FS 591",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 18",
    "_Uso:_ Dirección",
    "_Precio:_ $8,766.84",
    
    "\n*Opción 7:*",
    "_Modelo:_ FS 561",
    "_Medida:_ 225/70R19.5",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $6,385.08",
    
    "\n*Opción 8:*",
    "_Modelo:_ FT 492",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 13",
    "_Uso:_ Dirección",
    "_Precio:_ $7,167.63",
    
    "\n*Opción 9:*",
    "_Modelo:_ FS 561",
    "_Medida:_ 215/75R17.5",
    "_Existencia:_ 20",
    "_Uso:_ Dirección",
    "_Precio:_ $4,685.11",
    
    "\n*Opción 10:*",
    "_Modelo:_ FD 694",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 16",
    "_Uso:_ Dirección",
    "_Precio:_ $8,656.93",
    
    "\n*Opción 11:*",
    "_Modelo:_ FD 694",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 16",
    "_Uso:_ Dirección",
    "_Precio:_ $9,178.15",
    
    "\n*Opción 12:*",
    "_Modelo:_ FT 492",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $6,983.23",
    
    "\n*Opción 13:*",
    "_Modelo:_ FT 492",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 0",
    "_Uso:_ Dirección",
    "_Precio:_ $6,815.71",
    
    "\n*Opción 14:*",
    "_Modelo:_ FS 400",
    "_Medida:_ 315/80R22.5",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $8,830.72",

    // "FD691            11R22.5            4",
    // "FS 561           11R22.5           14",
    // "FS 820           11R22.5            1",
    // "TRANSFORCE       195 R15            0",
    //"FR710             185/60R15          0"
    //"FT140             205/55R16          0"
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowDoubleCoin = addKeyword(["DoubleCoin", "double coin"]).addAnswer(
  [
    "📏 Estas son los precios *netos* de las medidas y modelos disponibles en DOUBLE COIN",
    "*Modelo*       *Medida*      *Existencia*",
    "RT 606          11R22.5                 5",
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowChina = addKeyword(["china"]).addAnswer(
  [
    "📏 Estas son los precios *netos* de las medidas y modelos disponibles disponibles",
    "---------- *TURNPIKE* ----------",
    "*Opción 1:*",
    "_Modelo:_ GA257",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 54",
    "_Uso:_ Dirección",
    "_Precio:_ $4,500.00",

    "\n*Opción 2:*",
    "_Modelo:_ D691",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 2",
    "_Uso:_ Tracción",
    "_Precio:_ $4,370.00",

    "\n*Opción 3:*",
    "_Modelo:_ GA257",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 47",
    "_Uso:_ Dirección",
    "_Precio:_ $4,100.00",

    "\n*Opción 4:*",
    "_Modelo:_ M879",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 10",
    "_Uso:_ Mixta",
    "_Precio:_ $3,400.00",

    "\n*Opción 5:*",
    "_Modelo:_ GA 336",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 4",
    "_Uso:_ Mixta",
    "_Precio:_ $4,100.00",

    "\n*Opción 6:*",
    "_Modelo:_ GA 336",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 8",
    "_Uso:_ Mixta",
    "_Precio:_ $4,500.00",

    "\n*Opción 7:*",
    "_Modelo:_ GA 277",
    "_Medida:_ 235/75R17.5",
    "_Existencia:_ 6",
    "_Uso:_ ",
    "_Precio:_ 2,950.00",

    "\n*Opción 8:*",
    "_Modelo:_ GA 277",
    "_Medida:_ 215/75R17.5",
    "_Existencia:_ 5",
    "_Uso:_ ",
    "_Precio:_ 2,750.00",

    "\n*Opción 9:*",
    "_Modelo:_ GD 267",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 50",
    "_Uso:_ Tracción",
    "_Precio:_ $4,450.00",

    "\n*Opción 10:*",
    "_Modelo:_ GD 267",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 38",
    "_Uso:_ Tracción",
    "_Precio:_ $4,770.00",

    "\n*Opción 11:*",
    "_Modelo:_ GD 267",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 0",
    "_Uso:_ Tracción",
    "_Precio:_ $4,400.00",

    "\n*Opción 12:*",
    "_Modelo:_ GD 267",
    "_Medida:_ 285/75R24.5",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ $4,200.00",

    "\n*Opción 13:*",
    "_Modelo:_ GD 277",
    "_Medida:_ 215/75R17.5",
    "_Existencia:_ 5",
    "_Uso:_ Lineal",
    "_Precio:_ $2,750.00",

    "\n*Opción 14:*",
    "_Modelo:_ GA 277",
    "_Medida:_ 235/75R17.5",
    "_Existencia:_ 6",
    "_Uso:_ Lineal",
    "_Precio:_ $2,950.00",

    "\n",
    "---------- *BLACKLION* ----------",
    "*Opción 1:*",
    "_Modelo:_ BD171",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 0",
    "_Uso:_ Tracción",
    "_Precio:_ ",

    "*\nOpción 2:*",
    "_Modelo:_ BD171",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 2",
    "_Uso:_ Tracción",
    "_Precio:_ ",

    "*\nOpción 3:*",
    "_Modelo:_ BD189",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    "\n",
    "---------- *TOLEDO* ----------",
    "*Opción 1:*",
    "_Modelo:_ DR520",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 58",
    "_Uso:_ Tracción",
    "_Precio:_ ",
    
    "*\nOpción 2:*",
    "_Modelo:_ DR520",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 0",
    "_Uso:_ Tracción",
    "_Precio:_ ",

    "\n*Opción 3:*",
    "_Modelo:_ DR120",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 22",
    "_Uso:_ Dirección",
    "_Precio:_ $3,250.00",
    
    "\n*Opción 4:*",
    "_Modelo:_ DR120",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 22",
    "_Uso:_ Dirección",
    "_Precio:_ $3,250.00",

    "\n*Opción 5:*",
    "_Modelo:_ DR120",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 42",
    "_Uso:_ Dirección",
    "_Precio:_ $3,290.00",
    "\n",
    "---------- *MIRAGE* ----------",
    "*Opción 1:*",
    "_Modelo:_ MG111",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 79",
    "_Uso:_ Dirección",
    "_Precio:_ $3,100.00",

    "\n*Opción 2:*",
    "_Modelo:_ MG111",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 11",
    "_Uso:_ Dirección",
    "_Precio:_ $4,550.00",
    
    "\n*Opción 3:*",
    "_Modelo:_ MG312",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 0",
    "_Uso:_ Tracción",
    "_Precio:_ $4,305.00",
    "\n",
    "---------- *PACE* ----------",
    "*Opción 1:*",
    "_Modelo:_ PM216",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 53",
    "_Uso:_ Dirección",
    "_Precio:_ $3,560.00",
    
    "*\nOpción 2:*",
    "_Modelo:_ PM216",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 0",
    "_Uso:_ Dirección",
    "_Precio:_ ",

    "*\nOpción 3:*",
    "_Modelo:_ PM216",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 0",
    "_Uso:_ Dirección",
    "_Precio:_ $3,340.00",

    "\n*Opción 4:*",
    "_Modelo:_ PM516",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 28",
    "_Uso:_ Tracción",
    "_Precio:_ $4,060.00",

    "\n",
    "---------- *LANDY* ----------",
    "*Opción 1:*",
    "_Modelo:_ DD398",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ $4,370.00",

    "\n*Opción 2:*",
    "_Modelo:_ DT966",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $4,370.00",

    "\n*Opción 3:*",
    "_Modelo:_ DS968",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 1",
    "_Uso:_ Dirección",
    "_Precio:_ $4,100.00",

    // "DT966         255/70R22.5          5",
    // "DT966         275/70R22.5          1",
    // "DS966           11R24.5            1",
    "\n",
    "---------- COMPASAL ----------",

    "\n*Opción 1:*",
    "_Modelo:_ CPS21 16C",
    "_Medida:_ 255/70R22.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*Opción 2:*",
    "_Modelo:_ CPS60 M",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 1",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 3:*",
    "_Modelo:_ CPD86",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 4:*",
    "_Modelo:_ CPS21",
    "_Medida:_ 235/75R17.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    "\n",
    // "CPS21 16C     255/70R22.5          0",
    // "CPS60 M         11R24.5            1",
    "---------- *INDUSTRIAL* ----------",
    "*Opción 1:*",
    "_Modelo:_ TRACSA SOL 1012",
    "_Medida:_ 12-16.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "*\nOpción 2:*",
    "_Modelo:_ SUPERGUIDER SKS1",
    "_Medida:_ 11L-16",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "*\nOpción 3:*",
    "_Modelo:_ TOP TRUST R4 12C TL",
    "_Medida:_ 19.5L24",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    "*\nOpción 4:*",
    "_Modelo:_ ENKIL",
    "_Medida:_ 19.5L-24",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*Opción 5:*",
    "_Modelo:_ R24 XGLA2",
    "_Medida:_ 14.00 R24",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    "*\nOpción 6:*",
    "_Modelo:_ CAMSO SOLIDEAL",
    "_Medida:_ 6.50-10",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    "*\nOpción 7:*",
    "_Modelo:_ 12 PRO STONETRAC",
    "_Medida:_ 12.5/80-18",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "*\nOpción 8:*",
    "_Modelo:_ STONETRAC 12PRO",
    "_Medida:_ 11L-16",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    "\n",
    // "ENKIL           19.5L-24           0",
    // "R24 XGLA2        14.00 R24.5            0",
    "---------- MARCAS VARIAS ----------",
    "\n*Opción 1:*",
    "_Modelo:_ BT 168N",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 36",
    "_Uso:_ Mixta",
    "_Precio:_ $4,150.00",

    "\n*Opción 2:*",
    "_Modelo:_ KASPEN HS205",
    "_Medida:_ 285/75R24.5",
    "_Existencia:_ 10",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 3:*",
    "_Modelo:_ EUDEMON UD120",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 1",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 4:*",
    "_Modelo:_ MAXTREC SU-800",
    "_Medida:_ 265/70R17",
    "_Existencia:_ 4",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 5:*",
    "_Modelo:_ POTENZA S001",
    "_Medida:_ 225/40R18",
    "_Existencia:_ 1",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 6:*",
    "_Modelo:_ AMULET AT 501",
    "_Medida:_ 225/70R19.5",
    "_Existencia:_ 8",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 7:*",
    "_Modelo:_ KAPSEM HS205",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 10",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 8:*",
    "_Modelo:_ GOODRIDE CR989",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 6",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 9:*",
    "_Modelo:_ GOODRIDE CR989",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 4",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 10:*",
    "_Modelo:_ TOYO NEVA",
    "_Medida:_ 225/65R16C",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 11:*",
    "_Modelo:_ DOUBLE STAR DSR668",
    "_Medida:_ 11R25.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 12:*",
    "_Modelo:_ ROADX RH630",
    "_Medida:_ 305/75R24.5",
    "_Existencia:_ 12",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "\n*Opción 13:*",
    "_Modelo:_ ROUTE CONTROL S",
    "_Medida:_ 1124.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    // "HS205         285/75R24.5         10",
    // "UD120           11R24.5            1",
    // "SU-800         265/70R17           4",
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowBridgestone = addKeyword(["bridgestone"]).addAnswer(
  [
    "📏 Estas son los precios de las medidas y modelos disponibles en bridgestone *mas IVA*",
    "\n*Opción 1:*",
    "_Modelo:_ M726",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 50",
    "_Uso:_ Tracción",
    "_Precio:_ $9,602.10",

    "\n*Opción 2:*",
    "_Modelo:_ M726",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 70",
    "_Uso:_ Tracción",
    "_Precio:_ $10,147.86",

    "\n*Opción 3:*",
    "_Modelo:_ M726",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 19",
    "_Uso:_ Tracción",
    "_Precio:_ $8,712.47",

    "\n*Opción 4:*",
    "_Modelo:_ M729",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ $9,778.08",

    "\n*Opción 5:*",
    "_Modelo:_ M726",
    "_Medida:_ 285/75R24.5",
    "_Existencia:_ 2",
    "_Uso:_ Tracción",
    "_Precio:_ $10,345.29",

    "\n*Opción 6:*",
    "_Modelo:_ R123",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $8,151.77",

    "\n*Opción 7:*",
    "_Modelo:_ R163ZTL3",
    "_Medida:_ 295/80R22.5",
    "_Existencia:_ 4",
    "_Uso:_ Dirección",
    "_Precio:_ $9,809.80",

    "\n*Opción 8:*",
    "_Modelo:_ R213",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $9,026.74",

    "\n*Opción 9:*",
    "_Modelo:_ R249",
    "_Medida:_ 315/80R22.5",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $8,344.61",

    "\n*Opción 10:*",
    "_Modelo:_ R238",
    "_Medida:_ 215/75R17.5",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $4,790.03",

    "\n*Opción 11:*",
    "_Modelo:_ R238",
    "_Medida:_ 245/70R19.5",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $7,497.44",

    "\n*Opción 12:*",
    "_Modelo:_ R260",
    "_Medida:_ 305/75R24.5",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $10,569.80",

    "\n*Opción 13:*",
    "_Modelo:_ R268",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 11",
    "_Uso:_ Dirección",
    "_Precio:_ $8,772.28",

    "\n*Opción 14:*",
    "_Modelo:_ R269",
    "_Medida:_ 295/80R22.5",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $9,769.63",

    "\n*Opción 15:*",
    "_Modelo:_ R283 S",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 18",
    "_Uso:_ Dirección",
    "_Precio:_ $8,575.40",

    "\n*Opción 16:*",
    "_Modelo:_ R283 S",
    "_Medida:_ 11R24.5",
    "_Existencia:_ 30",
    "_Uso:_ Dirección",
    "_Precio:_ $8,911.90",

    "\n*Opción 17:*",
    "_Modelo:_ R123 ECOPIA",
    "_Medida:_ 11R22.5",
    "_Existencia:_ 16",
    "_Uso:_ Dirección",
    "_Precio:_ $7,768.28",

    "\n*Opción 18:*",
    "_Modelo:_ R283 S",
    "_Medida:_ 295/75R22.5",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $8,465.78",

    "\n*Opción 19:*",
    "_Modelo:_ R283 S",
    "_Medida:_ 285/75R24.5",
    "_Existencia:_ 33",
    "_Uso:_ Dirección",
    "_Precio:_ $8,054.87",

    // "M843         315/80R22.5         19",
    // "R268         275/80R22.5         42",
    // "R249         205/75R16C           4",
    // "R283 A         11R22.5            1",
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flowPrincipal = addKeyword(["hola", "buenos días", "martin"])
  .addAnswer("🙌 Hola bienvenido al almacen")
  .addAnswer(
    [
      "Escribe una de las siguientes palabras para ver mas detalles",
      "👉 *Bridgestone* para ver medidas bridgestone",
      "👉 *China*  para ver medidas de llanta china",
      "👉 *DoubleCoin* para ver medidas de llanta DoubleCoin",
      "👉 *Firestone* para ver medidas de llanta Firestone",
      "👉 *Hankook* para ver medidas de llanta Hankook",
      "👉 *Roadmaster* para ver medidas de llanta Roadmaster",
      "👉 *Yokohoma* para ver medidas de llanta Yokohoma",
    ],
    null,
    null,
    [
      flowFirestone,
      flowChina,
      flowDoubleCoin,
      flowBridgestone,
      flowHankook,
      flowRoadmaster,
      flowYokohoma,
    ]
  );

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal]);
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
