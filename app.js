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

const flowINDUSTRIAL = addKeyword(["INDUSTRIAL"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",
    
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
    
    "*\nOpción 9:*",
    "_Modelo:_ ENKIL",
    "_Medida:_ 19.5L-24",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
    "*\nOpción 10:*",
    "_Modelo:_ R24 XGLA2",
    "_Medida:_ 14.00 R24.5",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",
    
  
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

// const flow22565R16C = addKeyword(["225/65R16C"]).addAnswer(
//   [
//     "📏 Estock disponible en esta medida",
    
//     "\n*Opción 1:*",
//     "_Modelo:_ NEVA",
//     "_Medida:_ TOYO",
//     "_Existencia:_ 0",
//     "_Uso:_ ",
//     "_Precio:_ ",
  
//     "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
//   ],
//   null,
//   null,
//   [flowSecundario]
// );

const flow22540R18 = addKeyword(["225/40R18"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",
    
    "\n*Opción 1:*",
    "_Modelo:_  S001",
    "_Marca:_  POTENZA",
    "_Existencia:_ 1",
    "_Uso:_ ",
    "_Precio:_ 3,100.00",
    
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow26570R17 = addKeyword(["265/70R17"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",
    
    "\n*Opción 1:*",
    "_Modelo:_ SU-800",
    "_Marca:_ MAXTREC",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ 1,850.00",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

// const flow20555R16 = addKeyword(["205/55R16"]).addAnswer(
//   [
//     "📏 Estock disponible en esta medida",

//     "*Opción 1:*",
//     "_Modelo:_ FT140",
//     "_Marca:_ FIRESTONE",
//     "_Existencia:_ 0",
//     "_Uso:_ ",
//     "_Precio:_ $",

//     "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
//   ],
//   null,
//   null,
//   [flowSecundario]
// );

const flow18560R15 = addKeyword(["185/60R15"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ FR710",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ $",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow195R15 = addKeyword(["195 R15"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ TRANSFORCE",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ $2,450.00",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

// const flowP23575R15 = addKeyword(["P235/75R15"]).addAnswer(
//   [
//     "📏 Estock disponible en esta medida",

//     "*Opción 1:*",
//     "_Modelo:_ WRANGLER",
//     "_Marca:_ GOODYEAR",
//     "_Existencia:_ 4",
//     "_Uso:_ ",
//     "_Precio:_ $",

//     "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
//   ],
//   null,
//   null,
//   [flowSecundario]
// );

const flow27570R225 = addKeyword(["275/70R22.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ DT966",
    "_Marca:_ LANDY",
    "_Existencia:_ 1",
    "_Uso:_ ",
    "_Precio:_ $2,950.00",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow22575R16 = addKeyword(["225/75R16"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ CONTINENTAL LT RA33",
    "_Marca:_ CONTINENTAL",
    "_Existencia:_ 2",
    "_Uso:_ ",
    "_Precio:_ $",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow26560R18 = addKeyword(["265/60R18"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ RA33",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 8",
    "_Uso:_ ",
    "_Precio:_ $",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow22570R195 = addKeyword(["225/70R19.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ AH35",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 6",
    "_Uso:_ Lineal",
    "_Precio:_ $4,310.34",

    "\n*Opción 2:*",
    "_Modelo:_ FS 561",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $6,959.74",

    "\n*Opción 3:*",
    "_Modelo:_ AT 501",
    "_Marca:_ AMULET",
    "_Existencia:_ 8",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow23585R16 = addKeyword(["235/85R16"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ DYNAPRO AT2",
    "_Marca:_  HANKOOK",
    "_Existencia:_ 2",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow18560R14 = addKeyword(["185/60R14"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",
    "*Opción 1:*",
    "_Modelo:_ H724 ",
    "_Marca:_  HANKOOK",
    "_Existencia:_ 4",
    "_Uso:_ Lineal",
    "_Precio:_ ",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow25570R225 = addKeyword(["255/70R22.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ DT966",
    "_Marca:_  LANDY",
    "_Existencia:_ 5",
    "_Uso:_ ",
    "_Precio:_ ",
     
    // "\n*Opción 2:*",
    // "_Modelo:_ CPS21 16C",
    // "_Marca:_ COMPASAL",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow23575R175 = addKeyword(["235/75R17.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "*Opción 1:*",
    "_Modelo:_ RM 170",
    "_Marca:_  ROADMASTER",
    "_Existencia:_ 6",
    "_Uso:_ Lineal",
    "_Precio:_ $3,232.75",

    "\n*Opción 2:*",
    "_Modelo:_ GA 277",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 6",
    "_Uso:_ Lineal",
    "_Precio:_ 2,950.00",

    "\n*Opción 3:*",
    "_Modelo:_ CPS21",
    "_Marca:_ COMPASAL",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow20575R16C = addKeyword(["205/75R16C"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ R294",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 4",
    "_Uso:_ Lineal",
    "_Precio:_ $3,958.00",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow27580R225 = addKeyword(["275/80R22.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ R268",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 42",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow30575R245 = addKeyword(["305/75R24.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",
    "\n*Opción 1:*",
    "_Modelo:_ RH630",
    "_Marca:_ ROADX",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ $5,175.00",

    "\n*Opción 2:*",
    "_Modelo:_ R260",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 2",
    "_Uso:_ Dirección",
    "_Precio:_ $11,098.29",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow24570R195 = addKeyword(["245/70R19.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ RM 170 ",
    "_Marca:_ ROADMASTER",
    "_Existencia:_ 21",
    "_Uso:_ Lineal",
    "_Precio:_ $3,300.00",

    "\n*Opción 2:*",
    "_Modelo:_ R238",
    "_Medida:_ BRIDGESTONE",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $7,872.31",
    
    "\n*Opción 3:*",
    "_Modelo:_ RS2",
    "_Medida:_ BRIDGESTONE",
    "_Existencia:_ 8",
    "_Uso:_ ",
    "_Precio:_ $",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow21575R175 = addKeyword(["215/75R17.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ GA 277",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 3",
    "_Uso:_ Lineal",
    "_Precio:_ 2,360.00",

    // "\n*Opción 2:*",
    // "_Modelo:_ GD 277",
    // "_Marca:_ TURNPIKE",
    // "_Existencia:_ 5",
    // "_Uso:_ Lineal",
    // "_Precio:_ $2,750.00",

    "\n*Opción 3:*",
    "_Modelo:_ R238",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $5,029.53",

    "\n*Opción 4:*",
    "_Modelo:_ RM 272",
    "_Marca:_ ROADMASTER",
    "_Existencia:_ 10",
    "_Uso:_ Lineal",
    "_Precio:_ $3,405.17",

    "\n*Opción 5:*",
    "_Modelo:_ AH35",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 5",
    "_Uso:_ Lineal",
    "_Precio:_ ",

    "\n*Opción 6:*",
    "_Modelo:_ FS 561",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 24",
    "_Uso:_ Dirección",
    "_Precio:_ $4,919.37",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow29580R225 = addKeyword(["295/80R22.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ R163ZTL3",
    "_Marca:_  BRIDGESTONE",
    "_Existencia:_ 4",
    "_Uso:_ Dirección",
    "_Precio:_ $9,809.80",

    "\n*Opción 2:*",
    "_Modelo:_ R269",
    "_Marca:_  BRIDGESTONE",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $10,258.11",

    "\n*Opción 3:*",
    "_Modelo:_ RY537 TL",
    "_Marca:_ YOKAHAMA",
    "_Existencia:_ 2",
    "_Uso:_ Lineal",
    "_Precio:_ $8,800.00",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow28575R245 = addKeyword(["285/75R24.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ HS205",
    "_Marca:_ KASPEN",
    "_Existencia:_ 1",
    "_Uso:_ Lineal",
    "_Precio:_ $3,379.31",

    "\n*Opción 2:*",
    "_Modelo:_ M726",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 2",
    "_Uso:_ Tracción",
    "_Precio:_ $10,862.55",

    "\n*Opción 3:*",
    "_Modelo:_ R283 S",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 33",
    "_Uso:_ Dirección",
    "_Precio:_ $8,457.62",

    "\n*Opción 4:*",
    "_Modelo:_ FS 591",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $8,206.52",

    "\n*Opción 5:*",
    "_Modelo:_ GD 267",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ $3,965.51",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow31580R225 = addKeyword(["315/80R22.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ FS 400",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $9,272.25",

    "\n*Opción 2:*",
    "_Modelo:_ R249",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 12",
    "_Uso:_ Dirección",
    "_Precio:_ $8,761.84",

    "\n*Opción 3:*",
    "_Modelo:_ M843",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 19",
    "_Uso:_ Tracción",
    "_Precio:_ $10,350.00",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow29575R225 = addKeyword(["295/75R22.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ R268",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 11",
    "_Uso:_ Dirección",
    "_Precio:_ $9,210.89",

    "\n*Opción 2:*",
    "_Modelo:_ M726",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 11",
    "_Uso:_ Tracción",
    "_Precio:_ $9,148.10",

    "\n*Opción 3:*",
    "_Modelo:_ DR520",
    "_Marca:_ TOLEDO",
    "_Existencia:_ 58",
    "_Uso:_ ",
    "_Precio:_ ",

    "\n*Opción 4:*",
    "_Modelo:_ DR120",
    "_Marca:_ TOLEDO",
    "_Existencia:_ 24",
    "_Uso:_ Dirección",
    "_Precio:_ $2,836.20",

    // "*\nOpción 5:*",
    // "_Modelo:_ PM216",
    // "_Marca:_ PACE",
    // "_Existencia:_ 0",
    // "_Uso:_ Dirección",
    // "_Precio:_ $3,340.00",

    // "\n*Opción 6:*",
    // "_Modelo:_ GD 267",
    // "_Marca:_ TURNPIKE",
    // "_Existencia:_ 0",
    // "_Uso:_ Tracción",
    // "_Precio:_ $4,400.00",

    "\n*Opción 7:*",
    "_Modelo:_ FS 591",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 0",
    "_Uso:_ Dirección",
    "_Precio:_ $9,205.18",

    "\n*Opción 8:*",
    "_Modelo:_ FT 492",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 8",
    "_Uso:_ Dirección",
    "_Precio:_ $7,332.39",

    "\n*Opción 9:*",
    "_Modelo:_ AL21",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 4",
    "_Uso:_ Lineal",
    "_Precio:_ $7,300.00",

    "\n*Opción 10:*",
    "_Modelo:_ TL21",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 6",
    "_Uso:_ Arrastre",
    "_Precio:_ $4,784.48",
    
    "\n*Opción 11:*",
    "_Modelo:_ R283",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 1",
    "_Uso:_ ",
    "_Precio:_ $",

    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow11R245 = addKeyword(["11R24.5"]).addAnswer(
  [
    "📏 Estock disponible en esta medida",

    "\n*Opción 1:*",
    "_Modelo:_ M726",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 52",
    "_Uso:_ Tracción",
    "_Precio:_ $10,655.25",

    "\n*Opción 2:*",
    "_Modelo:_ M729",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ 10,266.98",

    "\n*Opción 3:*",
    "_Modelo:_ R123",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $8,559.36",

    "\n*Opción 4:*",
    "_Modelo:_ R283 S",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $9,357.49",

    "\n*Opción 5:*",
    "_Modelo:_ GA257",
    "Marca:_ TURNPIKE",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $4,062.06",

    "\n*Opción 6:*",
    "_Modelo:_ D691",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 2",
    "_Uso:_ Tracción",
    "_Precio:_ $3,767.24",

    "\n*Opción 7:*",
    "_Modelo:_ GA 336",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 8",
    "_Uso:_ Mixta",
    "_Precio:_ $4,034.48",

    "\n*Opción 8:*",
    "_Modelo:_ GD 267",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 5",
    "_Uso:_ Tracción",
    "_Precio:_ $4,293.10",

    "*\nOpción 9:*",
    "_Modelo:_ BD171",
    "_Marca:_ BLACKLION",
    "_Existencia:_ 2",
    "_Uso:_ Tracción",
    "_Precio:_ $3,550.00",

    // "*\nOpción 10:*",
    // "_Modelo:_ BD189",
    // "_Marca:_ BLACKLION",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    // "*\nOpción 11:*",
    // "_Modelo:_ DR520",
    // "_Marca:_ TOLEDO",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    "\n*Opción 12:*",
    "_Modelo:_ MG111",
    "_Marca:_ MIRAGE",
    "_Existencia:_ 11",
    "_Uso:_ Dirección",
    "_Precio:_ $3,922.41",

    // "\n*Opción 13:*",
    // "_Modelo:_ PM216",
    // "_Marca:_ PACE",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    "\n*Opción 14:*",
    "_Modelo:_ PM516",
    "_Marca:_ PACE",
    "_Existencia:_ 26",
    "_Uso:_ Tracción",
    "_Precio:_ $3,500.00",

    "\n*Opción 15:*",
    "_Modelo:_ DD398",
    "_Marca:_ LANDY",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ $4,181.03",

    "\n*Opción 16:*",
    "_Modelo:_ DS968",
    "_Marca:_ LANDY",
    "_Existencia:_ 1",
    "_Uso:_ Dirección",
    "_Precio:_ $3,948.82",

    // "\n*Opción 17:*",
    // "_Modelo:_ DS966",
    // "_Marca:_ LANDY",
    // "_Existencia:_ 1",
    // "_Uso:_  ",
    // "_Precio:_ ",

    // "\n*Opción 18:*",
    // "_Modelo:_ CPD86",
    // "_Marca:_ COMPASAL",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    "\n*Opción 19:*",
    "_Modelo:_ CPS60 ",
    "_Marca:_ COMPASAL",
    "_Existencia:_ 1",
    "_Uso:_ Mixta",
    "_Precio:_ $4,600.00",

    "\n*Opción 20:*",
    "_Modelo:_ UD120",
    "_Marca:_ EUDEMON",
    "_Existencia:_ 1",
    "_Uso:_ Lineal",
    "_Precio:_ $4,120.00",

    "\n*Opción 21:*",
    "_Modelo:_ HS205",
    "_Marca:_ KAPSEN",
    "_Existencia:_ 0",
    "_Uso:_ Lineal",
    "_Precio:_ $3,230.00",

    "\n*Opción 22:*",
    "_Modelo:_ CR989",
    "_Marca:_ GOODRIDE",
    "_Existencia:_ 4",
    "_Uso:_ Lineal",
    "_Precio:_ $3,534.48",

    // "\n*Opción 23:*",
    // "_Modelo:_ DSR668",
    // "_Marca:_ DOUBLE STAR",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    // "\n*Opción 24:*",
    // "_Modelo:_ ROUTE CONTROL S",
    // "_Marca:_ ROUTE CONTROL",
    // "_Existencia:_ 0",
    // "_Uso:_ ",
    // "_Precio:_ ",

    // "\n*Opción 25:*",
    // "_Modelo:_ UD120",
    // "_Marca:_ EUDEMON",
    // "_Existencia:_ 1",
    // "_Uso:_ Lineal",
    // "_Precio:_ $4,120.00",

    "\n*Opción 26:*",
    "_Modelo:_ FD663",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 64",
    "_Uso:_ Tracción",
    "_Precio:_ $9,016.95",

    "\n*Opción 27:*",
    "_Modelo:_ FS 591",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 58",
    "_Uso:_ Dirección",
    "_Precio:_ $8,025.26",

    "\n*Opción 28:*",
    "_Modelo:_ FT 492",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 12",
    "_Uso:_ Dirección",
    "_Precio:_ $7,526.01",

    "\n*Opción 29:*",
    "_Modelo:_ FD 694",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 16",
    "_Uso:_ Dirección",
    "_Precio:_ $9,637.06",

    "\n*Opción 30:*",
    "_Modelo:_ AL21",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 10",
    "_Uso:_ Lineal",
    "_Precio:_ $7,470.00",

    "\n*Opción 31:*",
    "_Modelo:_ AH37",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 0",
    "_Uso:_ Lineal",
    "_Precio:_ $7,515.00",

    "\n*Opción 33:*",
    "_Modelo:_ DM04",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 1",
    "_Uso:_ Tracción",
    "_Precio:_ 6,100.00",

    "\n*Opción 34:*",
    "_Modelo:_ UZ02 ",
    "_Marca:_ AURORA",
    "_Existencia:_ 1",
    "_Uso:_ Lineal",
    "_Precio:_ $4,100.00",

    // "\n*Opción 35:*",
    // "_Modelo:_ AF18",
    // "_Marca:_ AUFINE",
    // "_Existencia:_ 1",
    // "_Uso:_ ",
    // "_Precio:_ $3,120.00",

    "\n*Opción 36:*",
    "_Modelo:_ RM 230",
    "_Marca:_ ROADMASTER",
    "_Existencia:_ 11",
    "_Uso:_ Tracción",
    "_Precio:_ $5,420.00",

    "\n*Opción 37:*",
    "_Modelo:_ 101ZL SPEC-2BWTL",
    "_Marca:_ YOKOHOMA",
    "_Existencia:_ 1",
    "_Uso:_ Lineal",
    "_Precio:_ $8,534.00",

    
    "\n*2* Para terminar el flujo y vuelve a mandar un hola.",
  ],
  null,
  null,
  [flowSecundario]
);

const flow11R225 = addKeyword(["11R22.5"]).addAnswer(
  [
    "📏 Estas son los precios de las medidas y modelos disponibles en bridgestone *mas IVA*",

    "\n*Opción 1:*",
    "_Modelo:_ M726",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 46",
    "_Uso:_ Tracción",
    "_Precio:_ $10,082.21",

    // "\n*Opción 2:*",
    // "_Modelo:_ R283 A",
    // "_Marca:_ BRIDGESTONE",
    // "_Existencia:_ 1",
    // "_Uso:_ ",
    // "_Precio:_ ",

    "\n*Opción 3:*",
    "_Modelo:_ R213",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $9,478.08",

    "\n*Opción 4:*",
    "_Modelo:_ R283 S",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 0",
    "_Uso:_ Dirección",
    "_Precio:_ $9,004.17",

    "\n*Opción 5:*",
    "_Modelo:_ R123 ECOPIA",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 0",
    "_Uso:_ Dirección",
    "_Precio:_ $8,156.69",

    "\n*Opción 6:*",
    "_Modelo:_ R268",
    "_Marca:_ BRIDGESTONE",
    "_Existencia:_ 8",
    "_Uso:_ ",
    "_Precio:_ 9,771.02",

    "\n*Opción 7:*",
    "_Modelo:_ GA257",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 37",
    "_Uso:_ Dirección",
    "_Precio:_ $3,719.82",

    "\n*Opción 8:*",
    "_Modelo:_ M879",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 10",
    "_Uso:_ Mixta",
    "_Precio:_ $2,931.03",

    "\n*Opción 9:*",
    "_Modelo:_ GA 336",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 4",
    "_Uso:_ Mixta",
    "_Precio:_ $4,100.00",

    "\n*Opción 10:*",
    "_Modelo:_ GD 267",
    "_Marca:_ TURNPIKE",
    "_Existencia:_ 30",
    "_Uso:_ Tracción",
    "_Precio:_ $4,008.62",

    // "\n*Opción 11:*",
    // "_Modelo:_ BD171",
    // "_Marca:_ BLACKLION",
    // "_Existencia:_ 0",
    // "_Uso:_ Tracción",
    // "_Precio:_ ",

    "\n*Opción 11:*",
    "_Modelo:_ DR120",
    "_Marca:_ TOLEDO",
    "_Existencia:_ 12",
    "_Uso:_ Dirección",
    "_Precio:_ $2,801.72",

    "\n*Opción 12:*",
    "_Modelo:_ MG111",
    "_Marca:_ MIRAGE",
    "_Existencia:_ 67",
    "_Uso:_ Dirección",
    "_Precio:_ $2,672.41",

    // "\n*Opción 15:*",
    // "_Modelo:_ MG312",
    // "_Marca:_ MIRAGE",
    // "_Existencia:_ 0",
    // "_Uso:_ Tracción",
    // "_Precio:_ $4,305.00",

    "\n*Opción 13:*",
    "_Modelo:_ PM216",
    "_Marca:_ PACE",
    "_Existencia:_ 53",
    "_Uso:_ Dirección",
    "_Precio:_ $3,068.96",

    "\n*Opción 14:*",
    "_Modelo:_ DT966",
    "Marca:_ LANDY",
    "_Existencia:_ 10",
    "_Uso:_ Dirección",
    "_Precio:_ $3,672.41",

    "\n*Opción 15:*",
    "_Modelo:_ BT 168N",
    "_Marca:_ RUNKING",
    "_Existencia:_ 36",
    // "_Uso:_ Mixta",
    "_Precio:_ $3,577.58",

    "\n*Opción 16:*",
    "_Modelo:_ CR989",
    "_Marca:_ GOODRIDE",
    "_Existencia:_ 6",
    "_Uso:_ Dirección",
    "_Precio:_ $3,275.86",

    "\n*Opción 17:*",
    "_Modelo:_ FD663",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 26",
    "_Uso:_ Tracción",
    "_Precio:_ $8,486.02",

    "\n*Opción 18:*",
    "_Modelo:_ FS591",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 30",
    "_Uso:_ Dirección",
    "_Precio:_ $7,760.79",

    "\n*Opción 19:*",
    "_Modelo:_ FD694",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 16",
    "_Uso:_ Dirección",
    "_Precio:_ $9,089.78",

    "\n*Opción 20:*",
    "_Modelo:_ FT492",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 20",
    "_Uso:_ Dirección",
    "_Precio:_ $7,156.49",

    "\n*Opción 21:*",
    "_Modelo:_ FD691",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 4",
    "_Uso:_ Tracción",
    "_Precio:_ $6,330.00",

    "\n*Opción 22:*",
    "_Modelo:_ FS561",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 14",
    "_Uso:_ Lineal",
    "_Precio:_ $7,315.00",

    "\n*Opción 23:*",
    "_Modelo:_ FS 820",
    "_Marca:_ FIRESTONE",
    "_Existencia:_ 1",
    "_Uso:_ Lineal",
    "_Precio:_ $6,700.00",

    "\n*Opción 24:*",
    "_Modelo:_ RT606",
    "_Marca:_ DOUBLE COIN",
    "_Existencia:_ 5",
    "_Uso:_ Lineal",
    "_Precio:_ $5,850.00",

    "\n*Opción 25:*",
    "_Modelo:_ 101ZL SPEC-2BWTL",
    "_Marca:_ YOKOHAMA",
    "_Existencia:_ 8",
    "_Uso:_ Lineal",
    "_Precio:_ $8,054.00",
    
    "\n*Opción 26:*",
    "_Modelo:_ AH37",
    "_Marca:_ HANKOOK",
    "_Existencia:_ 0",
    "_Uso:_ ",
    "_Precio:_ ",

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
      "Escribe una de las siguientes MEDIDAS para ver las llantas disponibles.",
      "👉 *11R22.5*",
      "👉 *11R24.5*",
      "👉 *295/75R22.5*",
      "👉 *315/80R22.5*",
      "👉 *285/75R24.5*",
      "👉 *295/80R22.5*",
      "👉 *215/75R17.5*",
      "👉 *245/70R19.5*",
      "👉 *305/75R24.5*",
      "👉 *275/80R22.5*",
      "👉 *205/75R16C*",
      "👉 *235/75R17.5*",
      "👉 *255/70R22.5*",
      "👉 *185/60R14*",
      "👉 *235/85R16*",
      "👉 *225/70R19.5*",
      "👉 *265/60R18*",
      "👉 *225/75R16*",
      "👉 *275/70R22.5*",
      // "👉 *P235/75R15*",
      "👉 *195 R15*",
      "👉 *185/60R15*",
      // "👉 *205/55R16*",
      "👉 *265/70R17*",
      "👉 *225/40R18*",
      // "👉 *225/65R16C*",
      "👉 *INDUSTRIAL*",
    ],
    null,
    null,
    [
      flow11R225,
      flow11R245,
      flow29575R225,
      flow31580R225,
      flow28575R245,
      flow29580R225,
      flow21575R175,
      flow24570R195,
      flow30575R245,
      flow27580R225,
      flow20575R16C,
      flow23575R175,
      flow25570R225,
      flow18560R14,
      flow23585R16,
      flow22570R195,
      flow26560R18,
      flow22575R16,
      flow27570R225,
      // flowP23575R15,
      flow195R15,
      flow18560R15,
      // flow20555R16,
      flow26570R17,
      flow22540R18,
      // flow22565R16C,
      flowINDUSTRIAL, 
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
