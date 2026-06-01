const TITAN_VIDEOS = {
  ion:       "https://www.youtube.com/embed/lT4igfw6XRs?rel=0",
  scorch:    "https://www.youtube.com/embed/jG-rWOGAIUE?rel=0",
  ronin:     "https://www.youtube.com/embed/3psRTlxz5AY?rel=0",
  tone:      "https://www.youtube.com/embed/1k2uSSFs_Xc?rel=0",
  northstar: "https://www.youtube.com/embed/1BLyAxz6pLY?rel=0",
  legion:    "https://www.youtube.com/embed/TRLkh9zuHAU?rel=0",
  monarch:   "https://www.youtube.com/embed/s85IrfMlBUA?rel=0",
};

const CAMPAIGN_TRAILER = "https://www.youtube.com/embed/00wFXKzVYfE?rel=0";

const PILOTS_GAMEPLAY = "https://www.youtube.com/embed/nHvoaAAhGno?rel=0";


//  DATA
const DATA = {

titans:[
  {id:"atlas",game:1,name:"ATLAS",clsEs:"Chasis Estándar",clsEn:"Standard Chassis",roleEs:"Uso General",roleEn:"All-Purpose",tag:"BALANCED",
   descEs:"El chasis Titán de referencia con un equilibrio perfecto de armadura, velocidad y potencia de fuego. Usado tanto por el IMC como por la Milicia, el Atlas es la columna vertebral de la guerra en la Frontera.",
   descEn:"The baseline Titan chassis offering a perfect balance of armor, speed and firepower. Used by both IMC and Militia forces, the Atlas is the backbone of Frontier warfare.",
   abilitiesEs:["Escudo Vórtice","Humo Eléctrico","Pulso de Radar"],abilitiesEn:["Vortex Shield","Electric Smoke","Radar Pulse"],
   weapons:["XO-16 Chaingun","40mm Cannon","Arc Cannon"],
   armor:70,speed:70,firepower:70,range:70},
  {id:"stryder",game:1,name:"STRYDER",clsEs:"Chasis Ligero",clsEn:"Light Chassis",roleEs:"Escaramuzador",roleEn:"Skirmisher",tag:"FAST",
   descEs:"El Stryder sacrifica blindaje por velocidad excepcional y tres cargas de dash. En manos expertas es casi imposible de contrarrestar.",
   descEn:"Sacrifices armor for exceptional speed and three dash charges. In skilled hands, nearly impossible to counter.",
   abilitiesEs:["Núcleo de Dash","Humo Eléctrico","Camuflaje"],abilitiesEn:["Dash Core","Electric Smoke","Cloak"],
   weapons:["XO-16 Chaingun","Plasma Railgun","Quad Rocket"],
   armor:45,speed:95,firepower:65,range:75},
  {id:"ogre",game:1,name:"OGRE",clsEs:"Chasis Pesado",clsEn:"Heavy Chassis",roleEs:"Tanque",roleEn:"Tank",tag:"HEAVY",
   descEs:"Una fortaleza andante con el mayor blindaje de cualquier chasis. Lento pero casi imparable.",
   descEn:"A walking fortress with the highest armor rating of any chassis. Slow but nearly unstoppable.",
   abilitiesEs:["Núcleo de Escudo","Humo Eléctrico","Escudo Térmico"],abilitiesEn:["Shield Core","Electric Smoke","Thermal Shield"],
   weapons:["Quad Rocket","Triple Threat","40mm Cannon"],
   armor:95,speed:40,firepower:85,range:55},
  {id:"ion",game:2,name:"ION",clsEs:"Clase Vanguard",clsEn:"Vanguard-class",roleEs:"Escaramuzador",roleEn:"Skirmisher",tag:"ENERGY",core:"Laser Core",
   descEs:"Ion domina la guerra de energía dirigida. El Escudo Vórtice absorbe proyectiles enemigos y los devuelve con toda su fuerza. El Rifle Divisor divide su rayo en múltiples disparos al apuntar. El Núcleo Láser dispara un rayo continuo de alta potencia.",
   descEn:"Ion harnesses directed energy warfare. The Vortex Shield absorbs incoming projectiles and hurls them back at full force. The Splitter Rifle splits its beam when aiming down sights. Laser Core fires a sustained high-powered beam.",
   abilitiesEs:["Escudo Vórtice","Cable Trampa","Disparo Láser"],abilitiesEn:["Vortex Shield","Tripwire","Laser Shot"],
   weapons:["Splitter Rifle"],armor:70,speed:65,firepower:75,range:80},
  {id:"scorch",game:2,name:"SCORCH",clsEs:"Clase Ogre",clsEn:"Ogre-class",roleEs:"Control de Área",roleEn:"Area Denial",tag:"THERMAL",core:"Flame Core",
   descEs:"Especialista en guerra térmica. El Cortafuegos lanza termita ardiendo. La Trampa Incendiaria se activa por proximidad. El Escudo Térmico bloquea el daño. El Núcleo de Llamas incinera todo en un amplio arco.",
   descEn:"Thermal warfare specialist. Firewall launches burning thermite. Incendiary Trap triggers on proximity. Thermal Shield blocks incoming damage. Flame Core incinerates everything in a wide arc.",
   abilitiesEs:["Cortafuegos","Trampa Incendiaria","Escudo Térmico"],abilitiesEn:["Firewall","Incendiary Trap","Thermal Shield"],
   weapons:["T-203 Thermite Launcher"],armor:90,speed:45,firepower:90,range:38},
  {id:"ronin",game:2,name:"RONIN",clsEs:"Clase Stryder",clsEn:"Stryder-class",roleEs:"Flanqueador",roleEn:"Flanker",tag:"MELEE",core:"Sword Core",
   descEs:"Espadachín de golpear y huir. La Ola de Arco daña y ralentiza. El Dash de Fase teleporta. El Bloqueo de Espada desvía proyectiles. El Núcleo de Espada activa velocidad extrema y melee devastador.",
   descEn:"Hit-and-run sword fighter. Arc Wave damages and slows. Phase Dash teleports. Sword Block deflects projectiles. Sword Core activates extreme speed and devastating melee.",
   abilitiesEs:["Ola de Arco","Dash de Fase","Bloqueo de Espada"],abilitiesEn:["Arc Wave","Phase Dash","Sword Block"],
   weapons:["Leadwall"],armor:55,speed:95,firepower:70,range:35},
  {id:"tone",game:2,name:"TONE",clsEs:"Clase Stryder",clsEn:"Stryder-class",roleEs:"Tirador",roleEn:"Marksman",tag:"TRACKER",core:"Salvo Core",
   descEs:"Domina a media distancia con seguimiento sonar. Tres bloqueos activan el Núcleo Salvo: una andanada masiva de misiles teledirigidos casi imposible de esquivar.",
   descEn:"Dominates mid-range with sonar lock-on. Three locks triggers the Salvo Core: a massive volley of homing missiles nearly impossible to avoid.",
   abilitiesEs:["Bloqueo Sonar","Muro de Partículas","Disparo de Seguimiento"],abilitiesEn:["Sonar Lock","Particle Wall","Tracking Shot"],
   weapons:["40mm Tracker Cannon"],armor:68,speed:68,firepower:80,range:85},
  {id:"northstar",game:2,name:"NORTHSTAR",clsEs:"Clase Stryder",clsEn:"Stryder-class",roleEs:"Aéreo",roleEn:"Aerial",tag:"AERIAL",core:"Flight Core",
   descEs:"El Titán más móvil. VTOL Hover permite vuelo sostenido. El Misil en Racimo se divide al impactar. La Trampa de Amarre inmoviliza Titanes. El Núcleo de Vuelo combina vuelo VTOL con el Railgun de Plasma a máxima cadencia.",
   descEn:"The most mobile Titan. VTOL Hover enables sustained flight. Cluster Missile splits on impact. Tether Trap immobilizes Titans. Flight Core combines VTOL flight with Plasma Railgun at max fire rate.",
   abilitiesEs:["Misil en Racimo","Vuelo VTOL","Trampa de Amarre"],abilitiesEn:["Cluster Missile","VTOL Hover","Tether Trap"],
   weapons:["Plasma Railgun"],armor:55,speed:85,firepower:75,range:95},
  {id:"legion",game:2,name:"LEGION",clsEs:"Clase Ogre",clsEn:"Ogre-class",roleEs:"Supresor",roleEn:"Suppressor",tag:"SUPPRESSOR",core:"Smart Core",
   descEs:"El Cañón Predador de Legion nunca se sobrecalienta y alterna entre Largo y Corto Alcance. El Núcleo Inteligente activa adquisición automática de objetivos en cada disparo.",
   descEn:"Legion's Predator Cannon never overheats and switches between Long and Short Range. Smart Core activates auto-target acquisition on every shot.",
   abilitiesEs:["Disparo Potente","Escudo de Cañón","Cambio de Modo"],abilitiesEn:["Power Shot","Gun Shield","Mode Switch"],
   weapons:["Predator Cannon"],armor:95,speed:40,firepower:95,range:70},
  {id:"monarch",game:2,name:"MONARCH",clsEs:"Clase Vanguard",clsEn:"Vanguard-class",roleEs:"Adaptable",roleEn:"Adaptive",tag:"ADAPTIVE",core:"Upgrade Core",
   descEs:"Monarch evoluciona en combate. El Sifón de Energía roba energía de los enemigos para mejorar a través de tres niveles del Núcleo de Mejora en tiempo real.",
   descEn:"Monarch evolves during combat. Energy Siphon steals energy from enemies to upgrade through three Upgrade Core tiers in real time.",
   abilitiesEs:["Sifón de Energía","Munición de Arco","Rearmar y Recargar"],abilitiesEn:["Energy Siphon","Arc Rounds","Rearm & Reload"],
   weapons:["XO-16A2 Chaingun"],armor:72,speed:62,firepower:72,range:72},
  {id:"bt7274",game:2,name:"BT-7274",clsEs:"Clase Vanguard / IA Piloto",clsEn:"Vanguard-class / Pilot A.I.",roleEs:"Compañero",roleEn:"Partner",tag:"VANGUARD",core:"Upgrade Core",
   descEs:"BT-7274 es un Titán clase Vanguard asignado al Capitán Lastimosa. Tras su muerte, BT se vincula con Jack Cooper y lo entrena como piloto. Opera según un estricto protocolo pero desarrolla una conexión genuina con Cooper. Su sacrificio para destruir el Arma del Pliegue es el núcleo emocional de Titanfall 2.",
   descEn:"BT-7274 is a Vanguard-class Titan assigned to Captain Lastimosa. After his death, BT bonds with Jack Cooper and trains him as a pilot. Operates on strict protocol but develops a genuine connection with Cooper. His sacrifice to destroy the Fold Weapon is the emotional heart of Titanfall 2.",
   abilitiesEs:["Enlace Neural","Sistemas Vanguard","Vínculo Titán"],abilitiesEn:["Neural Link","Vanguard Systems","Titan Bond"],
   weapons:["40mm Cannon","XO-16 Chaingun"],armor:75,speed:70,firepower:78,range:75},
],

pilots:[
  {id:"cooper",game:2,name:"JACK COOPER",roleEs:"Fusilero → Piloto",roleEn:"Rifleman → Pilot",faction:"SRS / Milicia",tag:"PROTAGONIST",color:"#00c8f0",
   tacticalEs:"Garfio",tacticalEn:"Grapple",tacticalIcon:"⚓",cooldown:"8s",
   descEs:"Fusilero de la Milicia que asume el rol de piloto tras el sacrificio del Capitán Lastimosa. Vinculado en plena misión con BT-7274, Cooper detiene el Arma del Pliegue en Typhon.",
   descEn:"Militia rifleman who becomes a pilot after Captain Lastimosa's sacrifice. Bonded mid-mission with BT-7274, Cooper stops the Fold Weapon on Typhon.",
   weapons:["R-201 Carbine"],mobility:85,combat:80,adaptability:95},
  {id:"lastimosa",game:2,name:"TAI LASTIMOSA",roleEs:"Capitán SRS",roleEn:"SRS Captain",faction:"SRS / Milicia",tag:"VETERAN",color:"#00c8f0",
   tacticalEs:"Cuchilla de Pulso",tacticalEn:"Pulse Blade",tacticalIcon:"◆",cooldown:"7s",
   descEs:"Capitán de la SRS y piloto original de BT-7274. Su sacrificio en Typhon desencadena los eventos de Titanfall 2.",
   descEn:"Captain of the SRS and BT-7274's original pilot. His sacrifice on Typhon sets Titanfall 2's events in motion.",
   weapons:["R-201 Carbine"],mobility:80,combat:92,adaptability:82},
  {id:"blisk",game:1,name:"KUBEN BLISK",roleEs:"Comandante Mercenario",roleEn:"Mercenary Commander",faction:"Apex Predators",tag:"MERCENARY",color:"#f55a0e",
   tacticalEs:"Camuflaje",tacticalEn:"Cloak",tacticalIcon:"◈",cooldown:"8s",
   descEs:"Mercenario sudafricano y fundador de los Apex Predators. Leal solo a quien paga. Uno de los pilotos más peligrosos de la Frontera.",
   descEn:"South African mercenary and founder of the Apex Predators. Loyal only to whoever pays. One of the most dangerous pilots on the Frontier.",
   weapons:["Varias"],mobility:78,combat:95,adaptability:90},
  {id:"viper",game:2,name:"VIPER",roleEs:"As del Northstar",roleEn:"Northstar Ace",faction:"Apex Predators",tag:"OPERATIVE",color:"#f55a0e",
   tacticalEs:"Vuelo VTOL",tacticalEn:"VTOL Hover",tacticalIcon:"△",cooldown:"Activo",
   descEs:"El mejor combatiente aéreo de Titanes de la galaxia. Lleva los sistemas de vuelo del Northstar a su límite absoluto.",
   descEn:"The undisputed greatest aerial Titan combatant in the galaxy. Pushes Northstar's flight systems to their absolute limit.",
   weapons:["Railgun de Plasma"],mobility:98,combat:92,adaptability:80},
  {id:"briggs",game:1,name:"SARAH BRIGGS",roleEs:"Comandante de la Milicia",roleEn:"Militia Commander",faction:"Milicia / SRS",tag:"COMMANDER",color:"#00c8f0",
   tacticalEs:"Estimulante",tacticalEn:"Stim",tacticalIcon:"⚡",cooldown:"10s",
   descEs:"Comandante de las fuerzas especiales de la Milicia en ambos conflictos. Lidera desde la primera línea.",
   descEn:"Commander of Militia special forces throughout both Titanfall conflicts. Leads from the front.",
   weapons:["R-101C Carbine"],mobility:75,combat:86,adaptability:90},
  {id:"ash",game:2,name:"ASH",roleEs:"Piloto Simulacro",roleEn:"Simulacrum Pilot",faction:"Apex Predators",tag:"SIMULACRUM",color:"#9070e0",
   tacticalEs:"Cambio de Fase",tacticalEn:"Phase Shift",tacticalIcon:"◇",cooldown:"9s",
   descEs:"Un simulacro: conciencia humana en cuerpo robótico. Pilota un Titán clase Ronin con fría e incansable eficiencia.",
   descEn:"A simulacrum — human consciousness in a robotic body. Pilots a Ronin-class Titan with cold, relentless efficiency.",
   weapons:["Varias"],mobility:90,combat:88,adaptability:83},
  {id:"macallan",game:1,name:"MACALLAN",roleEs:"Comandante del MCOR",roleEn:"MCOR Commander",faction:"MCOR / Milicia",tag:"COMMANDER",color:"#28d48a",
   tacticalEs:"Pulso de Radar Activo",tacticalEn:"Active Radar Pulse",tacticalIcon:"◎",cooldown:"6s",
   descEs:"Ex Comandante del IMC convertido en desertor. Su conocimiento interno lo convirtió en el activo más valioso de la Milicia.",
   descEn:"Former IMC Commander turned defector. His insider knowledge made him the most valuable asset the Militia ever had.",
   weapons:["Varias"],mobility:72,combat:88,adaptability:94},
  {id:"kane",game:2,name:"KANE",roleEs:"Depredador Apex",roleEn:"Apex Predator",faction:"Apex Predators",tag:"MERCENARY",color:"#f55a0e",
   tacticalEs:"Cambio de Fase",tacticalEn:"Phase Shift",tacticalIcon:"◇",cooldown:"9s",
   descEs:"Depredador Apex con filosofía de combate brutal. Especialista en enfrentamientos de Titanes a corta distancia.",
   descEn:"Apex Predator with a brutal combat philosophy. Specializes in close-range Titan engagements.",
   weapons:["Varias"],mobility:82,combat:87,adaptability:75},
  {id:"slone",game:2,name:"SLONE",roleEs:"Comandante Apex",roleEn:"Apex Commander",faction:"Apex Predators",tag:"MERCENARY",color:"#f55a0e",
   tacticalEs:"Camuflaje",tacticalEn:"Cloak",tacticalIcon:"◈",cooldown:"8s",
   descEs:"Segunda al mando de los Apex Predators. Calculadora, estratégica y despiadada. Pilota un Titán clase Legion.",
   descEn:"Second-in-command of the Apex Predators. Calculating, strategic and ruthless. Pilots a Legion-class Titan.",
   weapons:["Varias"],mobility:80,combat:90,adaptability:85},
],

weapons:[
  // TF1 — PRIMARY WEAPONS
  {id:"r101_tf1",game:1,name:"R-101C Carbine",type:"Assault Rifle",tag:"FULL-AUTO",damage:70,rate:78,accuracy:75,range:75,
   descEs:"El rifle automático de dotación estándar, usado por el IMC y la Milicia. Fiable y efectivo a todas las distancias.",
   descEn:"Standard-issue automatic rifle used by both IMC and Militia forces. Reliable and effective at all ranges."},
  {id:"eva8_tf1",game:1,name:"EVA-8 Shotgun",type:"Shotgun",tag:"CQB",damage:88,rate:42,accuracy:52,range:28,
   descEs:"Escopeta semiautomática dominante a distancia extremamente corta. Cada disparo debe contar.",
   descEn:"Semi-automatic shotgun dominant at extreme close range. Every shot must count."},
  {id:"smart5_tf1",game:1,name:"Smart Pistol MK5",type:"Pistol",tag:"AUTO-LOCK",damage:75,rate:60,accuracy:95,range:55,
   descEs:"Pistola con apuntado automático que bloquea a múltiples pilotos simultáneamente antes de disparar. Controvertida pero eficaz.",
   descEn:"Auto-targeting pistol that locks onto multiple pilots simultaneously before firing. Controversial but undeniably effective."},
  {id:"r97_tf1",game:1,name:"R-97 Compact SMG",type:"SMG",tag:"CQB",damage:60,rate:92,accuracy:58,range:48,
   descEs:"Subfusil compacto con cadencia devastadora. Dominante en combate cerrado: vacía el cargador en segundos.",
   descEn:"Compact SMG with a devastating fire rate. Dominant in close quarters — empties its magazine in seconds."},
  {id:"car_tf1",game:1,name:"C.A.R. SMG",type:"SMG",tag:"AGGRESSIVE",damage:65,rate:88,accuracy:66,range:52,
   descEs:"Subfusil potente y estable del Receptor de Armas Combinadas. Acepta munición estándar y pesada.",
   descEn:"Powerful and stable Combined Arms Receiver SMG. Accepts both standard and heavy ammo types."},
  {id:"spitfire_tf1",game:1,name:"Spitfire LMG",type:"LMG",tag:"SUPPRESSOR",damage:80,rate:72,accuracy:62,range:70,
   descEs:"Ametralladora ligera con superioridad de fuego sostenida. Aterradora en espacios abiertos desde cobertura.",
   descEn:"Light machine gun providing sustained fire superiority. Terrifying in open areas when used from cover."},
  {id:"longbow_tf1",game:1,name:"Longbow-DMR",type:"Sniper",tag:"MARKSMAN",damage:85,rate:45,accuracy:90,range:95,
   descEs:"Francotirador semiautomático con disparos de seguimiento más rápidos que los de cerrojo.",
   descEn:"Semi-automatic DMR offering faster follow-up shots than bolt-action snipers."},
  {id:"kraber_tf1",game:1,name:"Kraber-AP Sniper",type:"Sniper",tag:"ONE-SHOT",damage:100,rate:18,accuracy:95,range:100,
   descEs:"Francotirador de cerrojo letal de un tiro. Un impacto limpio en un objetivo sin armadura es un abatimiento garantizado.",
   descEn:"Bolt-action sniper — lethal in one hit. One clean shot on an unarmored target is a guaranteed kill."},
  {id:"g2a4_tf1",game:1,name:"G2A4 Rifle",type:"Assault Rifle",tag:"MARKSMAN",damage:88,rate:48,accuracy:85,range:85,
   descEs:"Rifle semiautomático preciso que recompensa la puntería. Alto daño por disparo a media y larga distancia.",
   descEn:"Precise semi-automatic rifle rewarding accuracy. High damage per shot at medium and long range."},
  {id:"hemlok_tf1",game:1,name:"Hemlok BF-R",type:"Assault Rifle",tag:"BURST",damage:85,rate:55,accuracy:80,range:80,
   descEs:"Rifle de ráfagas de tres disparos con alto daño. Premia la disciplina de gatillo y el posicionamiento.",
   descEn:"Three-round burst rifle with high damage per burst. Rewards trigger discipline and good positioning."},

  // TF1 — SIDEARMS
  {id:"wingman_tf1",game:1,name:"B3 Wingman",type:"Pistol",tag:"PRECISION",damage:88,rate:42,accuracy:82,range:68,
   descEs:"Revólver de alto daño que recompensa la puntería precisa. Fiable y devastador en manos expertas.",
   descEn:"High-damage revolver rewarding precise aim. Reliable and devastating in skilled hands."},
  {id:"p2011_tf1",game:1,name:"Hammond P2011",type:"Pistol",tag:"SEMI-AUTO",damage:62,rate:60,accuracy:76,range:56,
   descEs:"Pistola semiautomática estándar. Opción de reserva fiable y manejable a media distancia.",
   descEn:"Standard semi-automatic pistol. Reliable and manageable backup option at medium range."},
  {id:"re45_tf1",game:1,name:"RE-45 Autopistol",type:"Pistol",tag:"FULL-AUTO",damage:55,rate:88,accuracy:66,range:42,
   descEs:"Pistola automática de alta cadencia. Más efectiva que muchas armas primarias a distancia muy corta.",
   descEn:"Full-auto pistol with high fire rate. More effective than most primaries at very close range."},

  // TF1 — ANTI-TITAN
  {id:"sidewinder_tf1",game:1,name:"Sidewinder SMR",type:"Anti-Titan",tag:"ROCKET",damage:82,rate:48,accuracy:70,range:72,
   descEs:"Lanzador automático de micro-cohetes. Dispara ráfagas rápidas de pequeños cohetes guiados contra Titanes.",
   descEn:"Automatic micro-rocket launcher. Fires quick bursts of small guided rockets at Titan targets."},
  {id:"archer_tf1",game:1,name:"Archer Heavy Rocket",type:"Anti-Titan",tag:"ANTI-TITAN",damage:98,rate:20,accuracy:88,range:90,
   descEs:"Misil guiado de alto daño diseñado para destruir Titanes. Requiere bloqueo sostenido antes de disparar.",
   descEn:"High-damage guided missile designed to destroy Titans. Requires sustained lock before firing."},
  {id:"maglauncher_tf1",game:1,name:"Mag Launcher",type:"Anti-Titan",tag:"MAG-LAUNCHER",damage:85,rate:50,accuracy:72,range:65,
   descEs:"Lanzador magnético de proyectiles explosivos atraídos por los cascos de los Titanes.",
   descEn:"Magnetic launcher firing explosive projectiles attracted to Titan hulls."},
  {id:"chargerifle_tf1",game:1,name:"Charge Rifle",type:"Anti-Titan",tag:"CHARGE",damage:95,rate:25,accuracy:90,range:100,
   descEs:"Rifle de energía cargada con capacidad de dañar Titanes. Dispara un potente rayo de energía tras cargarse.",
   descEn:"Charged energy rifle capable of damaging Titans. Fires a powerful energy beam after charging."},

  // TF2
  {id:"r201",game:2,name:"R-201 Carbine",type:"Assault Rifle",tag:"VERSATILE",damage:75,rate:80,accuracy:75,range:75,
   descEs:"El referente de fiabilidad en la Frontera. Sin puntos débiles, sin sorpresas.",
   descEn:"The benchmark of Frontier reliability. No weaknesses, no surprises."},
  {id:"hemlok_tf2",game:2,name:"Hemlok BF-R",type:"Assault Rifle",tag:"BURST",damage:85,rate:55,accuracy:80,range:80,
   descEs:"Rifle de batalla de ráfaga de tres disparos para TF2. Alto daño por ráfaga.",
   descEn:"Three-round burst battle rifle for TF2. High damage per burst."},
  {id:"g2a5",game:2,name:"G2A5",type:"Assault Rifle",tag:"MARKSMAN",damage:90,rate:50,accuracy:85,range:85,
   descEs:"Rifle de batalla semiautomático que premia la precisión por encima de todo.",
   descEn:"Semi-automatic battle rifle rewarding precision above all."},
  {id:"flatline",game:2,name:"V-47 Flatline",type:"Assault Rifle",tag:"FULL-AUTO",damage:78,rate:75,accuracy:70,range:72,
   descEs:"Rifle automático con trayectoria de bala única y curva. Domina su balística para una ventaja a media distancia.",
   descEn:"Full-auto rifle with a unique curved bullet trajectory. Master its ballistics for a medium-range edge."},
  {id:"car",game:2,name:"C.A.R. SMG",type:"SMG",tag:"AGGRESSIVE",damage:65,rate:90,accuracy:65,range:55,
   descEs:"Receptor de Armas Combinadas. Acepta dos tipos de munición. El arma de pilotos que reducen distancias rápido.",
   descEn:"Combined Arms Receiver. Accepts two ammo types. Weapon of pilots who close distance fast."},
  {id:"alternator",game:2,name:"Alternator SMG",type:"SMG",tag:"TWIN-BARREL",damage:72,rate:75,accuracy:68,range:50,
   descEs:"Subfusil de doble cañón que dispara dos proyectiles simultáneamente.",
   descEn:"Dual-barrel SMG that fires two rounds simultaneously."},
  {id:"volt",game:2,name:"Volt SMG",type:"SMG",tag:"ENERGY",damage:68,rate:85,accuracy:78,range:62,
   descEs:"Subfusil de energía con excelente precisión. Alcanza distancias que otros subfusiles no pueden.",
   descEn:"Energy-based SMG with excellent accuracy. Reaches ranges most SMGs cannot."},
  {id:"r97_tf2",game:2,name:"R-97 SMG",type:"SMG",tag:"CQB",damage:60,rate:92,accuracy:58,range:48,
   descEs:"El clásico subfusil compacto regresa en TF2. Tan dominante a corta distancia como siempre.",
   descEn:"Classic compact SMG returns in TF2. Just as dominant at close range as ever."},
  {id:"spitfire_tf2",game:2,name:"Spitfire LMG",type:"LMG",tag:"SUPPRESSOR",damage:80,rate:72,accuracy:62,range:70,
   descEs:"La ametralladora pesada regresa de TF1. Ideal desde cobertura para controlar zonas abiertas.",
   descEn:"Heavy machine gun returning from TF1. Best from cover to control open areas."},
  {id:"lstar",game:2,name:"L-STAR EMG",type:"LMG",tag:"ENERGY",damage:92,rate:60,accuracy:58,range:65,
   descEs:"Ametralladora de energía con proyectiles de plasma lentos pero de altísimo daño. Requiere control del sobrecalentamiento.",
   descEn:"Energy machine gun firing slow plasma bolts with extreme damage. Requires careful heat management."},
  {id:"devotion",game:2,name:"X-55 Devotion LMG",type:"LMG",tag:"SPIN-UP",damage:82,rate:95,accuracy:62,range:70,
   descEs:"AMG de energía con mecánica de calentamiento. A máxima cadencia, una de las armas más destructivas de la Frontera.",
   descEn:"Energy LMG with spin-up mechanic. At full rate, one of the most destructive weapons on the Frontier."},
  {id:"kraber_tf2",game:2,name:"Kraber-AP Sniper",type:"Sniper",tag:"ONE-SHOT",damage:100,rate:18,accuracy:95,range:100,
   descEs:"Francotirador AP de cerrojo. Un disparo limpio es todo lo que tienes. Cero tolerancia al error.",
   descEn:"Bolt-action AP sniper. One clean shot is all it takes and all it gives you. Zero forgiveness."},
  {id:"doubletake",game:2,name:"D-2 Double Take",type:"Sniper",tag:"TRIPLE-SHOT",damage:88,rate:30,accuracy:82,range:92,
   descEs:"Francotirador de cerrojo que dispara tres proyectiles en dispersión horizontal por disparo.",
   descEn:"Bolt-action sniper firing three rounds in a horizontal spread per trigger pull."},
  {id:"longbow_tf2",game:2,name:"Longbow-DMR Sniper",type:"Sniper",tag:"MARKSMAN",damage:85,rate:45,accuracy:90,range:95,
   descEs:"Rifle de Tirador Designado semiautomático. Mayor flexibilidad que los de cerrojo.",
   descEn:"Semi-automatic DMR. More flexibility than bolt-actions."},
  {id:"chargerifle",game:2,name:"Charge Rifle",type:"Sniper",tag:"CHARGE",damage:95,rate:25,accuracy:88,range:100,
   descEs:"Rifle de francotirador de energía que se carga antes de disparar un rayo láser capaz de dañar Titanes.",
   descEn:"Energy sniper rifle that charges before firing a laser beam capable of damaging Titans."},
  {id:"eva8",game:2,name:"EVA-8 Auto",type:"Shotgun",tag:"CQB",damage:85,rate:70,accuracy:50,range:30,
   descEs:"Escopeta completamente automática. La escopeta más permisiva de la Frontera dentro de su alcance.",
   descEn:"Full-auto shotgun. The most forgiving shotgun on the Frontier within its range."},
  {id:"mastiff",game:2,name:"Mastiff Shotgun",type:"Shotgun",tag:"PUMP",damage:95,rate:28,accuracy:55,range:35,
   descEs:"Escopeta de acción de bombeo con dispersión horizontal. Un disparo bien colocado termina el combate.",
   descEn:"Pump-action shotgun with horizontal spread. One well-placed shot ends the fight."},
  {id:"epg",game:2,name:"EPG-1",type:"Special",tag:"EXPLOSIVE",damage:95,rate:38,accuracy:68,range:65,
   descEs:"Lanzagranadas de propulsión energética. Los impactos directos son letales. Los rebotes permiten fuego indirecto.",
   descEn:"Energy Propelled Grenade launcher. Direct hits are lethal. Bounce shots enable indirect fire."},
  {id:"softball",game:2,name:"R-6P Softball",type:"Special",tag:"GRENADE",damage:88,rate:42,accuracy:65,range:60,
   descEs:"Lanzagranadas con proyectiles rebotantes de menor velocidad. Mayor control del arco que el EPG.",
   descEn:"Grenade launcher with lower-velocity bouncing rounds. Better arc control than the EPG."},
  {id:"coldwar",game:2,name:"EM-4 Cold War",type:"Special",tag:"ENERGY",damage:85,rate:35,accuracy:72,range:70,
   descEs:"Arma de energía con proyectiles que atraviesan múltiples objetivos.",
   descEn:"Energy weapon firing bolts that pass through multiple targets."},
  {id:"sidewinder",game:2,name:"Sidewinder SMR",type:"Special",tag:"ROCKET",damage:90,rate:45,accuracy:70,range:75,
   descEs:"Lanzacohetes de micro-cohetes semiautomático. Los cohetes siguen la superficie apuntada.",
   descEn:"Semi-auto micro-rocket launcher. Rockets home to the last surface targeted."},
  {id:"mgl",game:2,name:"MGL Mag Launcher",type:"Special",tag:"MAG-LAUNCHER",damage:85,rate:50,accuracy:75,range:65,
   descEs:"Lanzagranadas magnético atraído por los cascos de los Titanes. Excelente para el juego anti-Titán.",
   descEn:"Magnetic grenade launcher attracted to Titan hulls. Excellent for anti-Titan play."},
  {id:"thunderbolt",game:2,name:"LG-97 Thunderbolt",type:"Special",tag:"ENERGY",damage:80,rate:40,accuracy:85,range:72,
   descEs:"Rayo guiado que rastrea al objetivo más cercano. Persiste brevemente para usos creativos.",
   descEn:"Guided lightning bolt tracking the nearest target. Persists briefly for creative use."},
  {id:"archer",game:2,name:"Archer Heavy Rocket",type:"Special",tag:"ANTI-TITAN",damage:98,rate:20,accuracy:88,range:90,
   descEs:"Cohete pesado de seguimiento diseñado para el combate contra Titanes. La opción anti-Titán más directa.",
   descEn:"Lock-on heavy rocket designed for Titan combat. The most straightforward anti-Titan option."},
  {id:"re45",game:2,name:"RE-45 Auto Pistol",type:"Pistol",tag:"FULL-AUTO",damage:58,rate:88,accuracy:68,range:42,
   descEs:"Pistola completamente automática. Más efectiva que muchas primarias a distancia muy corta.",
   descEn:"Full-automatic pistol. More effective than most primaries at very close range."},
  {id:"p2016",game:2,name:"Hammond P2016",type:"Pistol",tag:"SEMI-AUTO",damage:65,rate:62,accuracy:78,range:58,
   descEs:"Pistola semiautomática estándar. Fiable y precisa. Una opción de reserva genuina.",
   descEn:"Standard semi-automatic pistol. Reliable and accurate. A genuine backup option."},
  {id:"wingman",game:2,name:"B3 Wingman Elite",type:"Pistol",tag:"PRECISION",damage:88,rate:42,accuracy:82,range:70,
   descEs:"Revólver de alta potencia que recompensa la puntería precisa con daño excepcional.",
   descEn:"High-powered revolver rewarding precise aim with exceptional damage per shot."},
  {id:"smart6",game:2,name:"Smart Pistol MK6",type:"Pistol",tag:"AUTO-LOCK",damage:78,rate:62,accuracy:95,range:55,
   descEs:"Versión actualizada de la Smart Pistol MK5. Bloquea múltiples objetivos simultáneamente.",
   descEn:"Upgraded Smart Pistol MK5. Locks onto multiple targets simultaneously."},
],

factions:[
  {id:"imc",tf1:true,tf2:true,name:"IMC",fullEs:"Corporación de Manufactura Interestelar",fullEn:"Interstellar Manufacturing Corporation",sideEs:"Antagonista",sideEn:"Antagonist",tag:"CORPORATE",color:"#e05050",
   descEs:"Una megacorporación que controla la extracción de recursos en la Frontera. El IMC ve a los colonos como un coste aceptable del progreso industrial.",
   descEn:"A megacorporation controlling resource extraction across the Frontier. The IMC views colonists as an acceptable cost of industrial progress.",
   members:["General Marder","División ARES","Vinson Dynamics","Kuben Blisk"]},
  {id:"militia",tf1:true,tf2:true,name:"MILITIA",fullEs:"Milicia Fronteriza",fullEn:"Frontier Militia",sideEs:"Protagonista",sideEn:"Protagonist",tag:"RESISTANCE",color:"#00c8f0",
   descEs:"Una coalición de colonos fronterizos y combatientes por la libertad. Unidos por la creencia en la independencia.",
   descEn:"A coalition of Frontier colonists and freedom fighters. United by a shared belief in independence.",
   members:["Sarah Briggs","Cuerpo Marauder","Frontier Corps","The Last Resort"]},
  {id:"mcor",tf1:true,tf2:false,name:"MARAUDER CORPS",fullEs:"Cuerpo Marauder (MCOR)",fullEn:"Marauder Corps (MCOR)",sideEs:"Protagonista",sideEn:"Protagonist",tag:"SPEC OPS",color:"#28d48a",
   descEs:"Vanguardia de operaciones especiales de la Milicia, liderada por el desertor Comandante MacAllan.",
   descEn:"Elite special operations vanguard of the Frontier Militia, led by defector Commander MacAllan.",
   members:["Comandante MacAllan","Sarah Briggs","Cheng 'Bish' Lorck"]},
  {id:"apex",tf1:false,tf2:true,name:"APEX PREDATORS",fullEs:"Unidad Mercenaria Apex Predators",fullEn:"Apex Predators Mercenary Unit",sideEs:"Mercenarios",sideEn:"Hired Guns",tag:"MERCENARY",color:"#f55a0e",
   descEs:"Unidad mercenaria de élite contratada por la Flota Remanente del IMC. Cada miembro cobra las tarifas más altas de la Frontera.",
   descEn:"Elite mercenary unit contracted by the IMC Remnant Fleet. Each member commands the highest rates on the Frontier.",
   members:["Kuben Blisk","Viper","Kane","Ash","Richter","Slone"]},
  {id:"srs",tf1:false,tf2:true,name:"SRS",fullEs:"Escuadrón de Reconocimiento Especial",fullEn:"Special Recon Squadron",sideEs:"Protagonista",sideEn:"Protagonist",tag:"RECON UNIT",color:"#93c5fd",
   descEs:"Unidad de reconocimiento élite de la Milicia enviada a Typhon. El sacrificio de Lastimosa pone en marcha la campaña de TF2.",
   descEn:"Elite Militia recon unit sent to Typhon. Lastimosa's sacrifice sets the TF2 campaign in motion.",
   members:["Cpt. Tai Lastimosa","BT-7274","Jack Cooper","Sarah Briggs"]},
  {id:"remnant",tf1:false,tf2:true,name:"REMNANT FLEET",fullEs:"Flota Remanente del IMC",fullEn:"IMC Remnant Fleet",sideEs:"Antagonista",sideEn:"Antagonist",tag:"IMC REMNANTS",color:"#9070e0",
   descEs:"La última fuerza organizada del IMC en la Frontera. Dispuesta a usar el Arma del Pliegue para acabar con la resistencia.",
   descEn:"The last organized IMC force on the Frontier. Willing to deploy the Fold Weapon to end resistance permanently.",
   members:["General Marder","División ARES","Blisk","Vinson Dynamics"]},
  {id:"ares",tf1:false,tf2:true,name:"ARES DIVISION",fullEs:"División ARES (I+D)",fullEn:"ARES Division (R&D)",sideEs:"Antagonista",sideEn:"Antagonist",tag:"IMC R&D",color:"#e0a820",
   descEs:"División de investigación clandestina del IMC. Desarrolló el Arma del Pliegue en Typhon: capaz de colapsar un sistema solar entero.",
   descEn:"The IMC's clandestine R&D division. Developed the Fold Weapon on Typhon — capable of collapsing an entire solar system.",
   members:["General Marder","Dr. Nichols","Vinson Dynamics A.I."]},
],

maps:[
  {id:"angel1",game:1,name:"Angel City",envEs:"Urbano",envEn:"Urban",size:"Medium",tag:"URBAN",
   descEs:"Campo de batalla metropolitano bañado en neón. Arquitectura vertical densa con combate por capas en múltiples pisos y tejados.",
   descEn:"Neon-drenched metropolitan battleground. Dense vertical architecture with layered combat across floors and rooftops.",
   featuresEs:["Traversal vertical","Combate de piloto intenso","Guerra urbana"],featuresEn:["Vertical traversal routes","Dense pilot combat","Urban warfare"]},
  {id:"boneyard",game:1,name:"Boneyard",envEs:"Industrial",envEn:"Industrial",size:"Large",tag:"OPEN",
   descEs:"Cementerio de naves estelares abandonadas. Espacios abiertos alternados con pasillos interiores para todo tipo de combate.",
   descEn:"Graveyard of derelict starships. Open spaces alternating with interior corridors for all combat types.",
   featuresEs:["Zonas grandes para Titanes","CQB interior","Largas líneas de visión"],featuresEn:["Large titan zones","Interior CQB","Long sightlines"]},
  {id:"colony",game:1,name:"Colony",envEs:"Frontera",envEn:"Frontier",size:"Medium",tag:"MIXED",
   descEs:"Asentamiento fronterizo bajo asedio. Mezcla de interiores y campos abiertos para todos los estilos.",
   descEn:"Frontier settlement under siege. Mix of interiors and open fields for all playstyles.",
   featuresEs:["Distancias mixtas","Interiores","Campos abiertos"],featuresEn:["Mixed ranges","Building interiors","Open fields"]},
  {id:"wargames",game:1,name:"War Games",envEs:"Simulación",envEn:"Simulation",size:"Medium",tag:"SIMULATION",
   descEs:"Simulación de entrenamiento militar en realidad virtual. Geometría surrealista multicapa y zonas visuales únicas.",
   descEn:"Military training simulation in virtual reality. Surreal layered geometry and unique visual zones.",
   featuresEs:["Geometría surrealista","Zonas visuales únicas","Diseño clásico TF1"],featuresEn:["Surreal geometry","Unique visual zones","Classic TF1 design"]},
  {id:"lagoon",game:1,name:"Lagoon",envEs:"Costero",envEn:"Coastal",size:"Large",tag:"COASTAL",
   descEs:"Asentamiento costero con muelles y rutas acuáticas. Largas líneas de visión que contrastan con el CQB en los muelles.",
   descEn:"Coastal settlement with docks and water routes. Long sightlines contrasting with dock CQB.",
   featuresEs:["Rutas acuáticas","Líneas de visión costeras","CQB en muelles"],featuresEn:["Water routes","Coastal sightlines","Dock CQB"]},
  {id:"corporate",game:1,name:"Corporate",envEs:"Corporativo",envEn:"Corporate",size:"Medium",tag:"CQB",
   descEs:"Complejo de oficinas con pasillos estrechos. Diseñado principalmente para el combate piloto contra piloto.",
   descEn:"Office complex with tight corridors. Designed primarily for pilot-on-pilot combat.",
   featuresEs:["Pasillos estrechos","Combate interior","Espacio limitado para Titanes"],featuresEn:["Tight corridors","Interior combat","Limited titan space"]},
  {id:"crashsite",game:2,name:"Crash Site",envEs:"Jungla",envEn:"Jungle",size:"Large",tag:"JUNGLE",
   descEs:"Portanaves del IMC estrellado en jungla densa. Inmensos campos de escombros para combate de Titanes único.",
   descEn:"IMC carrier crashed into dense jungle. Massive debris fields for unique Titan combat.",
   featuresEs:["Escombros a escala Titán","Flanqueo en jungla","Caídas verticales"],featuresEn:["Titan-scale debris","Jungle flanking","Vertical drops"]},
  {id:"eden",game:2,name:"Eden",envEs:"Agrícola",envEn:"Agricultural",size:"Medium",tag:"RURAL",
   descEs:"Colonia agrícola convertida en zona de guerra. Campos abiertos y granjas que premian el conocimiento del mapa.",
   descEn:"Farming colony turned warzone. Open fields and farmhouses rewarding map knowledge.",
   featuresEs:["Campos abiertos","CQB en granjas","Rutas de flanqueo"],featuresEn:["Open fields","Farmhouse CQB","Flanking routes"]},
  {id:"exoplanet",game:2,name:"Exoplanet",envEs:"Alienígena",envEn:"Alien",size:"Medium",tag:"EXOTIC",
   descEs:"Mundo alienígena con mega-flora exótica. Geometría orgánica que crea ángulos de visión sorprendentes.",
   descEn:"Alien world with exotic mega-flora. Organic geometry creating surprising sightline angles.",
   featuresEs:["Geometría orgánica","Entorno exótico","Ángulos sorprendentes"],featuresEn:["Organic geometry","Exotic environment","Surprising angles"]},
  {id:"glitch",game:2,name:"Glitch",envEs:"Simulación",envEn:"Simulation",size:"Small",tag:"SIMULATION",
   descEs:"Entorno de entrenamiento corrompido. Las estructuras entran y salen de la realidad durante la partida.",
   descEn:"Corrupted training environment. Structures phase in and out of reality mid-match.",
   featuresEs:["Cobertura dinámica","Pasillos estrechos","Alta acción"],featuresEn:["Dynamic cover","Tight corridors","High action density"]},
  {id:"homestead",game:2,name:"Homestead",envEs:"Frontera",envEn:"Frontier",size:"Medium",tag:"COLONIAL",
   descEs:"Colonia fronteriza clásica de tres carriles. Equilibrio entre Titanes y pilotos. Referente competitivo.",
   descEn:"Classic three-lane frontier colony. Good balance of Titan and pilot combat. Competitive staple.",
   featuresEs:["Diseño de tres carriles","Zonas mixtas","Estructura equilibrada"],featuresEn:["Three-lane layout","Mixed zones","Balanced structure"]},
  {id:"angel2",game:2,name:"Angel City (TF2)",envEs:"Urbano",envEn:"Urban",size:"Medium",tag:"URBAN",
   descEs:"El icónico mapa de TF1 reconstruido para TF2. Más rápido, más brillante y mejor que nunca.",
   descEn:"The iconic TF1 map rebuilt for TF2. Faster, brighter and better than ever.",
   featuresEs:["Remasterización clásica","Combate vertical","Densidad urbana"],featuresEn:["Classic remaster","Vertical combat","Urban density"]},
],

campaign:[
  {n:1,titleEs:"BT-7274",titleEn:"BT-7274",locEs:"Typhon — Zona de Impacto",locEn:"Typhon — Crash Site",dur:"~30 min",color:"#00c8f0",
   descEs:"La flota de la SRS aterriza en Typhon y es emboscada. Cooper ve caer a Lastimosa. Con su último acto, Lastimosa vincula a Cooper con BT-7274, iniciando una asociación que determinará el destino de la Frontera.",
   descEn:"The SRS fleet lands on Typhon and is ambushed. Cooper watches Lastimosa fall. With his final act, Lastimosa bonds Cooper with BT-7274, beginning a partnership that will determine the fate of the Frontier."},
  {n:2,titleEs:"La Baliza",titleEn:"The Beacon",locEs:"Typhon — Base de la Milicia",locEn:"Typhon — Militia Base",dur:"~35 min",color:"#f55a0e",
   descEs:"Cooper y BT deben alcanzar una baliza de socorro de la Milicia. En el camino descubren las instalaciones de la División ARES y comienzan a comprender la escala de lo que el IMC construye en Typhon.",
   descEn:"Cooper and BT must reach a Militia distress beacon. Along the way they discover ARES Division facilities and begin to grasp the scale of what the IMC is building on Typhon."},
  {n:3,titleEs:"Sangre y Óxido",titleEn:"Blood and Rust",locEs:"Typhon — Boomtown",locEn:"Typhon — Boomtown",dur:"~40 min",color:"#e0a820",
   descEs:"Cooper se infiltra en la ciudad industrial de Boomtown. El capítulo introduce la mecánica de cambio de tiempo: un dispositivo que permite moverse entre pasado y presente.",
   descEn:"Cooper infiltrates the industrial city of Boomtown. The chapter introduces the time-shifting mechanic — a device that lets Cooper move between past and present."},
  {n:4,titleEs:"Hacia el Abismo",titleEn:"Into the Abyss",locEs:"Typhon — Instalación del Arma del Pliegue",locEn:"Typhon — Fold Weapon Facility",dur:"~35 min",color:"#9070e0",
   descEs:"Cooper y BT descienden a la instalación del Arma del Pliegue. El verdadero propósito de la División ARES queda claro, junto con la amenaza que supone para la flota de la Milicia.",
   descEn:"Cooper and BT descend into the Fold Weapon facility. The true purpose of the ARES Division becomes clear, along with the threat it poses to the Militia fleet."},
  {n:5,titleEs:"Efecto y Causa",titleEn:"Effect and Cause",locEs:"Typhon — Instalación de Investigación",locEn:"Typhon — Research Facility",dur:"~45 min",color:"#28d48a",
   descEs:"Uno de los mejores capítulos de FPS de la historia. Cooper alterna entre dos épocas de la misma instalación, resolviendo puzzles y combatiendo enemigos a través del tiempo simultáneamente.",
   descEn:"One of the best FPS chapters ever made. Cooper flips between two eras of the same facility — solving puzzles and fighting enemies across time simultaneously."},
  {n:6,titleEs:"El Arca",titleEn:"The Ark",locEs:"Typhon — Astillero",locEn:"Typhon — Shipyard",dur:"~40 min",color:"#f55a0e",
   descEs:"Cooper debe localizar el Arca: la fuente de energía del Arma del Pliegue. La misión tiene lugar en un inmenso astillero del IMC donde los Apex Predators esperan.",
   descEn:"Cooper must locate the Ark — the Fold Weapon's power source. The mission takes place across a massive IMC shipyard where the Apex Predators are waiting."},
  {n:7,titleEs:"Prueba de Fuego",titleEn:"Trial by Fire",locEs:"Typhon — Bioma Selvático",locEn:"Typhon — Jungle Biome",dur:"~35 min",color:"#e05050",
   descEs:"Cooper y BT luchan a través de la jungla de Typhon enfrentando Titanes Scorch y al Apex Predator Richter. Escala hacia una carrera desesperada para evitar que el Arma del Pliegue sea armada.",
   descEn:"Cooper and BT fight through Typhon's jungle facing Scorch Titans and Apex Predator Richter. Escalates into a desperate race to prevent the Fold Weapon from being armed."},
  {n:8,titleEs:"El Arma del Pliegue",titleEn:"The Fold Weapon",locEs:"Typhon — Núcleo del Arma del Pliegue",locEn:"Typhon — Fold Weapon Core",dur:"~45 min",color:"#00c8f0",
   descEs:"El clímax. Cooper y BT deben destruir el Arma del Pliegue. Viper se interpone entre ellos. El combate contra el Northstar de Viper está considerado uno de los mejores enfrentamientos de la saga.",
   descEn:"The climax. Cooper and BT must destroy the Fold Weapon. Viper stands in their way. The fight against Viper's Northstar is considered one of the best boss encounters in the series."},
  {n:9,titleEs:"La Baliza (Final)",titleEn:"The Beacon (Finale)",locEs:"Typhon — Órbita / Angel City",locEn:"Typhon — Orbit / Angel City",dur:"~40 min",color:"#f55a0e",
   descEs:"El capítulo final. El Arma del Pliegue cae hacia Angel City. Cooper y BT hacen su último esfuerzo. El sacrificio de BT y su vínculo con Cooper llevan la campaña a su emotivo desenlace.",
   descEn:"The final chapter. The Fold Weapon falls toward Angel City. Cooper and BT make their last push. BT's sacrifice and his bond with Cooper bring the campaign to its emotional conclusion."},
]

};


//  TRANSLATIONS
const T = {
  es:{
    nav_pilots:"PILOTOS", nav_titans:"TITANES", nav_weapons:"ARMAS",
    nav_factions:"FACCIONES", nav_maps:"MAPAS", nav_campaign:"CAMPAÑA", nav_download:"DESCARGAR",
    filter_all:"TODO",
    search_placeholder:"Buscar...",
    appSub:"BASE DE DATOS DE LA FRONTERA",
    label_combat:"◆  DATOS DE COMBATE",
    label_abilities:"◆  HABILIDADES", label_core:"◆  NÚCLEO TITÁN",
    label_weapons:"◆  ARMAS", label_members:"◆  MIEMBROS NOTABLES",
    label_features:"◆  CARACTERÍSTICAS", label_tactical:"◆  HABILIDAD TÁCTICA",
    label_armor:"ARMADURA", label_speed:"VELOCIDAD", label_firepower:"POTENCIA",
    label_range:"ALCANCE", label_mobility:"MOVILIDAD", label_combat_s:"COMBATE",
    label_adaptability:"ADAPTABILIDAD",
    label_damage:"DAÑO", label_rate:"CADENCIA", label_accuracy:"PRECISIÓN",
    label_env:"◆  ENTORNO", label_size:"◆  TAMAÑO",
    label_chapter:"CAPÍTULO", label_synopsis:"◆  SINOPSIS",
    label_location:"◆  LOCALIZACIÓN", label_duration:"◆  DURACIÓN",
    dl_title:"DESCARGA LA APP", dl_sub:"TITANFALL NEXUS PARA ANDROID",
    dl_btn:"DESCARGAR APK",
    req_storage:"~15 MB sin vídeos", req_install:"Instalar fuentes desconocidas",
    spec_titans:"TITANES", spec_pilots:"PILOTOS", spec_weapons:"ARMAS",
    spec_chapters:"CAPÍTULOS", spec_langs:"IDIOMAS",
    dl_note:"Para colocar el APK: sube TitanfallNexus.apk a la misma carpeta que este index.html.\nPara vídeos en la app Android: copia los MP4 en assets/trailers/ y assets/campaign/.",
    no_results:"— SIN RESULTADOS —",
    nav_compare:"COMPARAR", nav_loadouts:"LOADOUTS", nav_favorites:"FAVORITOS",
  },
  en:{
    nav_pilots:"PILOTS", nav_titans:"TITANS", nav_weapons:"WEAPONS",
    nav_factions:"FACTIONS", nav_maps:"MAPS", nav_campaign:"CAMPAIGN", nav_download:"DOWNLOAD",
    filter_all:"ALL",
    search_placeholder:"Search...",
    appSub:"FRONTIER INTELLIGENCE DATABASE",
    label_combat:"◆  COMBAT DATA",
    label_abilities:"◆  ABILITIES", label_core:"◆  TITAN CORE",
    label_weapons:"◆  WEAPONS", label_members:"◆  NOTABLE MEMBERS",
    label_features:"◆  MAP FEATURES", label_tactical:"◆  TACTICAL ABILITY",
    label_armor:"ARMOR", label_speed:"SPEED", label_firepower:"FIREPOWER",
    label_range:"RANGE", label_mobility:"MOBILITY", label_combat_s:"COMBAT",
    label_adaptability:"ADAPTABILITY",
    label_damage:"DAMAGE", label_rate:"FIRE RATE", label_accuracy:"ACCURACY",
    label_env:"◆  ENVIRONMENT", label_size:"◆  SIZE",
    label_chapter:"CHAPTER", label_synopsis:"◆  SYNOPSIS",
    label_location:"◆  LOCATION", label_duration:"◆  DURATION",
    dl_title:"DOWNLOAD THE APP", dl_sub:"TITANFALL NEXUS FOR ANDROID",
    dl_btn:"DOWNLOAD APK",
    req_storage:"~15 MB without videos", req_install:"Enable unknown sources",
    spec_titans:"TITANS", spec_pilots:"PILOTS", spec_weapons:"WEAPONS",
    spec_chapters:"CHAPTERS", spec_langs:"LANGUAGES",
    dl_note:"To host the APK: place TitanfallNexus.apk in the same folder as this index.html.\nFor videos in the Android app: copy MP4 files to assets/trailers/ and assets/campaign/.",
    no_results:"— NO RESULTS —",
    nav_compare:"COMPARE", nav_loadouts:"LOADOUTS", nav_favorites:"FAVORITES",
  }
};

let lang = 'es';
let currentSection = 'pilots';
let currentFilter = 'all';
let searchQuery = '';

function t(key){ return T[lang][key] || key; }
function isEs(){ return lang === 'es'; }
function getGame(g){ return g === 1 ? '<span class="badge badge-tf1">TF1</span>' : '<span class="badge badge-tf2">TF2</span>'; }

function statBar(label, val, color){
  return `<div class="detail-stat">
    <span class="stat-label">${label}</span>
    <div class="stat-bar"><div class="stat-fill" style="width:${val}%;background:${color}"></div></div>
    <span class="stat-val" style="color:${color}">${val}</span>
  </div>`;
}

function miniBar(label, val, color){
  return `<div class="stat-row">
    <span class="stat-label">${label}</span>
    <div class="stat-bar"><div class="stat-fill" style="width:${val}%;background:${color}"></div></div>
    <span class="stat-val" style="color:${color}">${val}</span>
  </div>`;
}


function filterData(items){
  return items.filter(item => {
    // game filter
    const g = item.game || (item.tf1 !== undefined ? (item.tf1 && item.tf2 ? 0 : item.tf1 ? 1 : 2) : 0);
    if(currentFilter === 'tf1' && item.game !== 1 && !(item.tf1 && !item.tf2)) return false;
    if(currentFilter === 'tf2' && item.game !== 2 && !(item.tf2 && !item.tf1)) return false;
    if(currentFilter === 'tf1' && item.tf1 !== undefined && !item.tf1) return false;
    if(currentFilter === 'tf2' && item.tf2 !== undefined && !item.tf2) return false;

    // search
    if(searchQuery){
      const q = searchQuery.toLowerCase();
      const name = item.name.toLowerCase();
      const desc = ((isEs() ? item.descEs : item.descEn) || '').toLowerCase();
      if(!name.includes(q) && !desc.includes(q)) return false;
    }
    return true;
  });
}

function setFilter(f){
  currentFilter = f;
  document.getElementById('fAll').className = f==='all' ? 'filter-btn active-all' : 'filter-btn';
  document.getElementById('fTF1').className = f==='tf1' ? 'filter-btn active-tf1' : 'filter-btn';
  document.getElementById('fTF2').className = f==='tf2' ? 'filter-btn active-tf2' : 'filter-btn';
  renderAll();
}

function onSearch(v){
  searchQuery = v.trim();
  renderAll();
}

function renderAll(){
  renderPilots(); renderTitans(); renderWeapons();
  renderFactions(); renderMaps(); renderCampaign();
}

function noResults(){
  return `<div class="no-results">${t('no_results')}</div>`;
}

// ── TITANS 
function renderTitans(){
  const items = filterData(DATA.titans);
  const g = document.getElementById('grid-titans');
  if(!items.length){ g.innerHTML = noResults(); return; }
  g.innerHTML = items.map(t2 => {
    const acc = t2.game === 1 ? 'var(--tf1)' : 'var(--tf2)';
    const cls = isEs() ? t2.clsEs : t2.clsEn;
    const role = isEs() ? t2.roleEs : t2.roleEn;
    const hasVid = !!TITAN_VIDEOS[t2.id];
    return `<div class="card ${t2.game===2?'tf2':''}" onclick="openTitan('${t2.id}')">
      <div class="card-badges">${getGame(t2.game)}<span class="badge badge-tag">${t2.tag}</span>${t2.core?'<span class="badge badge-tag">CORE</span>':''}${hasVid?'<span class="badge badge-video">▶</span>':''}</div>
      <div class="card-title" style="color:${acc}">${t2.name}</div>
      <div class="card-sub">${cls} · ${role}</div>
      ${miniBar(t('label_armor'),t2.armor,acc)}
      ${miniBar(t('label_speed'),t2.speed,acc)}
      ${miniBar(t('label_firepower'),t2.firepower,acc)}
    </div>`;
  }).join('');
}

// ── PILOTS 
function renderPilots(){
  const items = filterData(DATA.pilots);
  const g = document.getElementById('grid-pilots');

  const pilotsBanner = document.getElementById('pilots-video-banner');
  if(pilotsBanner) pilotsBanner.style.display = (currentFilter==='all' && !searchQuery) ? 'block' : 'none';

  if(!items.length){ g.innerHTML = noResults(); return; }

  g.innerHTML = items.map(p => {
    const role = isEs() ? p.roleEs : p.roleEn;
    const tac = isEs() ? p.tacticalEs : p.tacticalEn;
    return `<div class="card ${p.game===2?'tf2':''}" onclick="openPilot('${p.id}')">
      <div class="card-badges">${getGame(p.game)}<span class="badge badge-tag">${p.tag}</span></div>
      <div class="card-title" style="color:${p.color}">${p.name}</div>
      <div class="card-sub">${role} · ${p.faction}</div>
      <div style="background:var(--surf2);border-radius:6px;padding:8px 10px;margin-top:4px;display:flex;align-items:center;gap:8px">
        <span style="font-size:1.1rem;color:${p.color}">${p.tacticalIcon}</span>
        <span style="font-family:'Share Tech Mono',monospace;font-size:.65rem;color:var(--text2)">${tac}</span>
        <span style="font-family:'Share Tech Mono',monospace;font-size:.6rem;color:var(--muted);margin-left:auto">${p.cooldown}</span>
      </div>
      ${miniBar(t('label_mobility'),p.mobility,p.color)}
      ${miniBar(t('label_combat_s'),p.combat,p.color)}
    </div>`;
  }).join('');
}

// ── WEAPONS 
function renderWeapons(){
  const items = filterData(DATA.weapons);
  const g = document.getElementById('grid-weapons');
  if(!items.length){ g.innerHTML = noResults(); return; }
  g.innerHTML = items.map(w => {
    const acc = w.game === 1 ? 'var(--tf1)' : 'var(--tf2)';
    return `<div class="card ${w.game===2?'tf2':''}" onclick="openWeapon('${w.id}')">
      <div class="card-badges">${getGame(w.game)}<span class="badge badge-tag" style="color:${acc};border-color:${acc}44;background:${acc}10">${w.tag}</span>
        <span style="margin-left:auto;font-family:'Share Tech Mono',monospace;font-size:.6rem;color:${w.type==='Anti-Titan'?'var(--red)':'var(--muted)'}">${w.type}</span>
      </div>
      <div class="card-title" style="color:${acc};font-size:1.15rem">${w.name}</div>
      ${miniBar(t('label_damage'),w.damage,acc)}
      ${miniBar(t('label_rate'),w.rate,acc)}
      ${miniBar(t('label_accuracy'),w.accuracy,acc)}
    </div>`;
  }).join('');
}

// ── FACTIONS 
function renderFactions(){
  const items = DATA.factions.filter(f => {
    if(currentFilter==='tf1' && !f.tf1) return false;
    if(currentFilter==='tf2' && !f.tf2) return false;
    if(searchQuery){ const q=searchQuery.toLowerCase(); if(!f.name.toLowerCase().includes(q) && !(isEs()?f.descEs:f.descEn).toLowerCase().includes(q)) return false; }
    return true;
  });
  const g = document.getElementById('grid-factions');
  if(!items.length){ g.innerHTML = noResults(); return; }
  g.innerHTML = items.map(f => {
    const full = isEs() ? f.fullEs : f.fullEn;
    const side = isEs() ? f.sideEs : f.sideEn;
    const desc = isEs() ? f.descEs : f.descEn;
    const games = [f.tf1?'<span class="badge badge-tf1">TF1</span>':'', f.tf2?'<span class="badge badge-tf2">TF2</span>':''].join('');
    return `<div class="card faction-card" style="border-left-color:${f.color}" onclick="openFaction('${f.id}')">
      <div class="card-badges">${games}<span class="badge badge-tag">${f.tag}</span></div>
      <div class="card-title" style="color:${f.color};font-size:1.2rem">${f.name}</div>
      <div class="card-sub">${full} · ${side.toUpperCase()}</div>
      <div style="font-size:.88rem;line-height:1.55;color:var(--text2);margin-top:6px">${desc.slice(0,110)}…</div>
    </div>`;
  }).join('');
}

// ── MAPS 
function renderMaps(){
  const items = filterData(DATA.maps);
  const g = document.getElementById('grid-maps');
  if(!items.length){ g.innerHTML = noResults(); return; }
  g.innerHTML = items.map(m => {
    const acc = m.game===1?'var(--tf1)':'var(--tf2)';
    const env = isEs() ? m.envEs : m.envEn;
    return `<div class="card ${m.game===2?'tf2':''}" onclick="openMap('${m.id}')">
      <div class="card-badges">${getGame(m.game)}<span class="badge badge-tag" style="color:${acc};border-color:${acc}44;background:${acc}10">${m.tag}</span>
        <span style="margin-left:auto;font-family:'Share Tech Mono',monospace;font-size:.6rem;color:var(--muted)">${m.size}</span>
      </div>
      <div class="card-title" style="color:${acc}">${m.name}</div>
      <div class="card-sub">${env.toUpperCase()}</div>
      <div style="font-size:.88rem;line-height:1.55;color:var(--text2);margin-top:6px">${(isEs()?m.descEs:m.descEn).slice(0,90)}…</div>
    </div>`;
  }).join('');
}

// ── CAMPAIGN 
function renderCampaign(){
  const cl = document.getElementById('chapter-list');
  const cb = document.getElementById('campaign-trailer-banner');
  if(cb){ cb.style.display = 'block'; }

  cl.innerHTML = DATA.campaign.map(ch => {
    const title = isEs() ? ch.titleEs : ch.titleEn;
    const loc   = isEs() ? ch.locEs   : ch.locEn;
    const desc  = isEs() ? ch.descEs  : ch.descEn;
    const num   = ch.n < 10 ? '0'+ch.n : ch.n;
    return `<div class="chapter-card" onclick="openChapter(${ch.n})">
      <div class="chapter-num" style="color:${ch.color}">${num}</div>
      <div class="chapter-content">
        <div class="chapter-title" style="color:${ch.color}">${title}</div>
        <div class="chapter-loc">${loc}</div>
        <div class="chapter-desc">${desc.slice(0,150)}…</div>
        <div class="chapter-meta">
          <span class="chapter-dur">${ch.dur}</span>
        </div>
      </div>
    </div>`;
  }).join('');
}

function openOverlay(html){
  stopSectionVideos(null);
  document.getElementById('detailContent').innerHTML = html;
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function resetVideoFrame(frame){
  if(!frame) return;
  const src = frame.getAttribute('src');
  if(!src) return;
  frame.setAttribute('src', '');
  frame.setAttribute('src', src);
}

function stopSectionVideos(activeSection){
  if(activeSection !== 'pilots') resetVideoFrame(document.getElementById('pilots-video-frame'));
  if(activeSection !== 'campaign') resetVideoFrame(document.getElementById('campaign-video-frame'));
}

function closeDetail(e){
  if(e && e.target !== document.getElementById('overlay')) return;
  const overlay = document.getElementById('overlay');
  const detailContent = document.getElementById('detailContent');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  if(detailContent) detailContent.innerHTML = '';
}

document.addEventListener('keydown', e => { if(e.key==='Escape') closeDetail({target:document.getElementById('overlay')}); });

function openTitan(id){
  const t2 = DATA.titans.find(x=>x.id===id);
  if(!t2) return;
  const acc = t2.game===1?'#f55a0e':'#00c8f0';
  const cls = isEs()?t2.clsEs:t2.clsEn;
  const role = isEs()?t2.roleEs:t2.roleEn;
  const desc = isEs()?t2.descEs:t2.descEn;
  const abilities = isEs()?t2.abilitiesEs:t2.abilitiesEn;
  const videoUrl = TITAN_VIDEOS[t2.id];
  const videoLabel = isEs() ? '◆  TRÁILER OFICIAL' : '◆  OFFICIAL TRAILER';
  const videoBlock = videoUrl ? `
    <div class="section-label">${videoLabel}</div>
    <div class="video-wrap">
      <iframe
        class="panel-video"
        src="${videoUrl}"
        title="${t2.name} Titanfall Trailer"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>` : '';
  openOverlay(`
    <div class="panel-header">
      <div class="panel-title-group">
        <div class="panel-badges">${getGame(t2.game)}<span class="badge badge-tag">${t2.tag}</span>${videoUrl?'<span class="badge badge-video">▶ VIDEO</span>':''}</div>
        <div class="panel-title" style="color:${acc}">${t2.name}</div>
        <div class="panel-cls">${cls} · ${role}</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="fav-star panel-fav-star" data-id="${t2.id}" onclick="handleFavClick(this,event)" title="${isFav(t2.id)?(isEs()?'Quitar de favoritos':'Remove from favorites'):(isEs()?'Añadir a favoritos':'Add to favorites')}" style="font-size:1.3rem;${isFav(t2.id)?'color:#f5c518':'color:var(--muted)'}">★</button>
        <button class="close-btn" onclick="closeDetail({target:document.getElementById('overlay')})">✕</button>
      </div>
    </div>
    ${videoBlock}
    <p class="panel-desc">${desc}</p>
    ${t2.core?`<div class="section-label">${t('label_core')}</div><div class="core-badge">${t2.core}</div>`:''}
    <div class="section-label">${t('label_combat')}</div>
    <div class="stat-group">
      ${statBar(t('label_armor'),t2.armor,acc)}
      ${statBar(t('label_speed'),t2.speed,acc)}
      ${statBar(t('label_firepower'),t2.firepower,acc)}
      ${statBar(t('label_range'),t2.range,acc)}
    </div>
    <div class="section-label">${t('label_abilities')}</div>
    <div class="chips">${abilities.map(a=>`<div class="chip">${a}</div>`).join('')}</div>
    <div class="section-label">${t('label_weapons')}</div>
    <div class="chips">${t2.weapons.map(w=>`<div class="chip">${w}</div>`).join('')}</div>
  `);
}

function openPilot(id){
  const p = DATA.pilots.find(x=>x.id===id);
  if(!p) return;
  const role = isEs()?p.roleEs:p.roleEn;
  const desc = isEs()?p.descEs:p.descEn;
  const tac  = isEs()?p.tacticalEs:p.tacticalEn;
  openOverlay(`
    <div class="panel-header">
      <div class="panel-title-group">
        <div class="panel-badges">${getGame(p.game)}<span class="badge badge-tag">${p.tag}</span></div>
        <div class="panel-title" style="color:${p.color}">${p.name}</div>
        <div class="panel-cls">${role} · ${p.faction}</div>
      </div>
      <button class="close-btn" onclick="closeDetail({target:document.getElementById('overlay')})">✕</button>
    </div>
    <p class="panel-desc">${desc}</p>
    <div class="section-label">${t('label_tactical')}</div>
    <div style="background:var(--surf2);border-radius:8px;padding:12px 14px;display:flex;align-items:center;gap:12px;margin-bottom:18px">
      <span style="font-size:1.5rem;color:${p.color}">${p.tacticalIcon}</span>
      <div>
        <div style="font-size:1rem;font-weight:700;color:var(--text);font-family:'Rajdhani',sans-serif">${tac}</div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:.6rem;color:var(--muted)">${t('label_rate').includes('CAD')?'RECARGA':'COOLDOWN'}  ${p.cooldown}</div>
      </div>
    </div>
    <div class="section-label">${t('label_combat')}</div>
    <div class="stat-group">
      ${statBar(t('label_mobility'),p.mobility,p.color)}
      ${statBar(t('label_combat_s'),p.combat,p.color)}
      ${statBar(t('label_adaptability'),p.adaptability,p.color)}
    </div>
    <div class="section-label">${t('label_weapons')}</div>
    <div class="chips">${p.weapons.map(w=>`<div class="chip">${w}</div>`).join('')}</div>
  `);
}

function openWeapon(id){
  const w = DATA.weapons.find(x=>x.id===id);
  if(!w) return;
  const acc = w.game===1?'#f55a0e':'#00c8f0';
  const desc = isEs()?w.descEs:w.descEn;
  openOverlay(`
    <div class="panel-header">
      <div class="panel-title-group">
        <div class="panel-badges">${getGame(w.game)}
          <span class="badge" style="color:${acc};border-color:${acc}44;background:${acc}10">${w.tag}</span>
          <span class="badge badge-tag">${w.type}</span>
        </div>
        <div class="panel-title" style="color:${acc};font-size:1.5rem">${w.name}</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="fav-star panel-fav-star" data-id="${w.id}" onclick="handleFavClick(this,event)" style="font-size:1.3rem;${isFav(w.id)?'color:#f5c518':'color:var(--muted)'}">★</button>
        <button class="close-btn" onclick="closeDetail({target:document.getElementById('overlay')})">✕</button>
      </div>
    </div>
    <p class="panel-desc">${desc}</p>
    <div class="section-label">${t('label_combat')}</div>
    <div class="stat-group">
      ${statBar(t('label_damage'),w.damage,acc)}
      ${statBar(t('label_rate'),w.rate,acc)}
      ${statBar(t('label_accuracy'),w.accuracy,acc)}
      ${statBar(t('label_range'),w.range,acc)}
    </div>
  `);
}

function openFaction(id){
  const f = DATA.factions.find(x=>x.id===id);
  if(!f) return;
  const full = isEs()?f.fullEs:f.fullEn;
  const side = isEs()?f.sideEs:f.sideEn;
  const desc = isEs()?f.descEs:f.descEn;
  const games=[f.tf1?'<span class="badge badge-tf1">TF1</span>':'',f.tf2?'<span class="badge badge-tf2">TF2</span>':''].join('');
  openOverlay(`
    <div class="panel-header">
      <div class="panel-title-group">
        <div class="panel-badges">${games}<span class="badge badge-tag">${f.tag}</span></div>
        <div class="panel-title" style="color:${f.color};font-size:1.5rem">${f.name}</div>
        <div class="panel-cls">${full}</div>
      </div>
      <button class="close-btn" onclick="closeDetail({target:document.getElementById('overlay')})">✕</button>
    </div>
    <div style="display:inline-block;background:var(--surf2);border:1px solid var(--border);border-radius:4px;padding:3px 10px;font-family:'Share Tech Mono',monospace;font-size:.65rem;color:var(--text2);margin-bottom:16px">${side.toUpperCase()}</div>
    <p class="panel-desc">${desc}</p>
    <div class="section-label">${t('label_members')}</div>
    <div class="members-list">
      ${f.members.map(m=>`<div class="member">${m}</div>`).join('')}
    </div>
  `);
}

function openMap(id){
  const m = DATA.maps.find(x=>x.id===id);
  if(!m) return;
  const acc = m.game===1?'#f55a0e':'#00c8f0';
  const env = isEs()?m.envEs:m.envEn;
  const desc = isEs()?m.descEs:m.descEn;
  const features = isEs()?m.featuresEs:m.featuresEn;
  openOverlay(`
    <div class="panel-header">
      <div class="panel-title-group">
        <div class="panel-badges">${getGame(m.game)}
          <span class="badge" style="color:${acc};border-color:${acc}44;background:${acc}10">${m.tag}</span>
          <span class="badge badge-tag">${m.size}</span>
        </div>
        <div class="panel-title" style="color:${acc}">${m.name}</div>
        <div class="panel-cls">${env.toUpperCase()}</div>
      </div>
      <button class="close-btn" onclick="closeDetail({target:document.getElementById('overlay')})">✕</button>
    </div>
    <p class="panel-desc">${desc}</p>
    <div class="section-label">${t('label_features')}</div>
    <div class="chips">${features.map(f2=>`<div class="chip">${f2}</div>`).join('')}</div>
  `);
}

function openChapter(n){
  const ch = DATA.campaign.find(x=>x.n===n);
  if(!ch) return;
  const title = isEs()?ch.titleEs:ch.titleEn;
  const loc   = isEs()?ch.locEs:ch.locEn;
  const desc  = isEs()?ch.descEs:ch.descEn;
  const num   = n<10?'0'+n:n;
  const lblChap = isEs()?"CAPÍTULO":"CHAPTER";
  openOverlay(`
    <div class="panel-header">
      <div class="panel-title-group">
        <div style="font-family:'Share Tech Mono',monospace;font-size:.65rem;color:${ch.color};letter-spacing:.2em;margin-bottom:6px">${lblChap} ${num}</div>
        <div class="panel-title" style="color:${ch.color};font-size:1.6rem">${title}</div>
        <div class="panel-cls">${loc}</div>
      </div>
      <button class="close-btn" onclick="closeDetail({target:document.getElementById('overlay')})">✕</button>
    </div>
    <div style="display:flex;gap:16px;margin-bottom:18px;flex-wrap:wrap">
      <div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:.6rem;color:var(--muted);letter-spacing:.15em;margin-bottom:3px">${isEs()?'DURACIÓN':'DURATION'}</div>
        <div style="font-family:'Share Tech Mono',monospace;font-size:.8rem;color:${ch.color}">${ch.dur}</div>
      </div>
    </div>
    <div class="section-label">${isEs()?'◆  SINOPSIS':'◆  SYNOPSIS'}</div>
    <p class="panel-desc">${desc}</p>
  `);
}

function showSection(sec){
  currentSection = sec;
  stopSectionVideos(sec);
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(b=>{
    b.classList.toggle('active', b.dataset.sec===sec);
  });
  const el = document.getElementById('sec-'+sec);
  if(el) el.classList.add('active');

  const showFilter = ['pilots','titans','weapons','factions','maps'].includes(sec);
  document.getElementById('filterBar').style.display = showFilter ? 'flex' : 'none';
  document.getElementById('searchBox').placeholder = t('search_placeholder');

  // Trigger section-specific inits
  if(sec === 'compare')   initCompare();
  if(sec === 'loadouts')  { renderLoadouts(); updateLoadoutLabels(); }
  if(sec === 'favorites') { renderFavorites(); updateFavLabels(); }

  if(sec==='compare')   initCompare();
  if(sec==='loadouts')  { renderLoadouts(); updateLoadoutLabels(); }
  if(sec==='favorites') { renderFavorites(); updateFavLabels(); updateFavCount(); }
  closeDetail({target:document.getElementById('overlay')});
}


function setLang(l){
  lang = l;
  document.getElementById('btnES').classList.toggle('active', l==='es');
  document.getElementById('btnEN').classList.toggle('active', l==='en');
  document.getElementById('appSub').textContent = t('appSub');
  document.getElementById('searchBox').placeholder = t('search_placeholder');
  document.getElementById('fAll').textContent = t('filter_all');

  document.querySelectorAll('[data-t]').forEach(el=>{
    const key = el.getAttribute('data-t');
    if(T[l][key]) el.textContent = T[l][key];
  });

  renderAll();
  updateVideoBannerLabels();
  updateDownloadSection();
  initFeatured();
  updateLoadoutLabels();
  updateFavLabels();
  updateFavCount();
  updateProgress();
  if(currentSection==='compare')   { updateCompare(); }
  if(currentSection==='loadouts')  { renderLoadouts(); updateLoadoutLabels(); }
  if(currentSection==='favorites') { renderFavorites(); updateFavLabels(); }
  closeDetail({target:document.getElementById('overlay')});
}


(function initVideoBanners(){
  
  const pilotsFrame = document.getElementById('pilots-video-frame');
  if(pilotsFrame) pilotsFrame.src = PILOTS_GAMEPLAY;

  const campaignFrame = document.getElementById('campaign-video-frame');
  if(campaignFrame) campaignFrame.src = CAMPAIGN_TRAILER;

})();

function updateVideoBannerLabels(){
  const pl = document.getElementById('svb-pilots-label');
  const cl = document.getElementById('svb-campaign-label');
  if(pl) pl.textContent = isEs() ? '◆  GAMEPLAY · PILOTOS' : '◆  GAMEPLAY · PILOTS';
  if(cl) cl.textContent = isEs() ? '◆  TRÁILER OFICIAL' : '◆  OFFICIAL TRAILER';
}


function updateDownloadSection(){
  const es = isEs();
  const s = (id, text) => { const el=document.getElementById(id); if(el) el.textContent=text; };
  const h = (id, html) => { const el=document.getElementById(id); if(el) el.innerHTML=html; };

  s('dlTag',     es?'TITANFALL NEXUS · ANDROID':'TITANFALL NEXUS · ANDROID');
  s('dlBody',    es?'Todo sobre Titanfall 1 y 2. Titanes, pilotos, armas, campaña y mucho más.'
                   :'Everything about Titanfall 1 and 2. Titans, pilots, weapons, campaign and more.');
  s('dlBtnText', es?'Descargar APK':'Download APK');
  s('dlPlatform',es?'Android 8.0+':'Android 8.0+');

  // Stats
  document.querySelectorAll('.dl3-stat-l[data-t="spec_titans"]').forEach(e=>e.textContent=es?'Titanes':'Titans');
  document.querySelectorAll('.dl3-stat-l[data-t="spec_pilots"]').forEach(e=>e.textContent=es?'Pilotos':'Pilots');
  document.querySelectorAll('.dl3-stat-l[data-t="spec_weapons"]').forEach(e=>e.textContent=es?'Armas':'Weapons');
  document.querySelectorAll('.dl3-stat-l[data-t="spec_chapters"]').forEach(e=>e.textContent=es?'Capítulos':'Chapters');
  document.querySelectorAll('.dl3-stat-l[data-t="spec_langs"]').forEach(e=>e.textContent=es?'Idiomas':'Languages');

  // Features
  s('dlFeat1Title', es?'Base de datos completa':'Complete database');
  s('dlFeat1Desc',  es?'TF1 y TF2. Titanes, pilotos, armas, facciones y mapas con descripciones bilingües.'
                      :'Full TF1 and TF2. Titans, pilots, weapons, factions and maps with bilingual descriptions.');
  s('dlFeat2Title', es?'Vídeos integrados':'Integrated videos');
  s('dlFeat2Desc',  es?'Tráilers, campaña por capítulos y gameplay de pilotos.'
                      :'Titan trailers, chapter-by-chapter campaign and pilot gameplay.');
  s('dlFeat3Title', es?'Favoritos y loadouts':'Favorites and loadouts');
  s('dlFeat3Desc',  es?'Guarda tus favoritos. Crea loadouts personalizados.'
                      :'Save your favorites. Create custom loadouts.');
  s('dlFeat4Title', es?'Comparador + Progreso':'Compare + Progress');
  s('dlFeat4Desc',  es?'Compara titanes. Sube de rango descubriendo la base de datos.'
                      :'Compare titans. Rank up by discovering the database.');

  // Patch notes
  s('dlPatchTitle', es?'◆  NOTAS DEL PARCHE':'◆  PATCH NOTES');
  s('dlTagNew','FIX'); s('dlTagNew','FIX');
  s('dlTagNew2','NUEVO'); s('dlTagNew3','NUEVO'); s('dlTagNew4','NUEVO');
  s('dlTagFix1','NUEVO');
  s('dlTagFix2','FIX');
  s('dlPatch1', es?'Compatibilidad multimedia mejorada en todos los dispositivos':'Improved media compatibility on all devices');
  s('dlPatch2', es?'Nueva secuencia de inicio dinamica y cinematica':'New dynamic cinematic startup sequence');
  s('dlPatch3', es?'Nueva seccion Laboratorio en Ajustes':'New Lab section in Settings');
  s('dlPatch4', es?'Lore interconectado entre Pilotos y Titanes':'Interconnected lore between Pilots and Titans');
  s('dlPatch5', es?'Panel tactico para analizar tu equipamiento':'Tactical panel to analyze your loadout');
  s('dlPatch6', es?'Mejoras estructurales de estabilidad y velocidad':'Structural stability and speed improvements');
  s('dlPatchNote', es?'Actualizacion centrada en estabilidad, lore y equipamiento.':'Update focused on stability, lore and loadouts.');
  s('dlPatchTitleV10', es?'\u25C6  NOTAS DEL PARCHE':'\u25C6  PATCH NOTES');
  s('dlTagV10New1', es?'NUEVO':'NEW'); s('dlTagV10New2', es?'NUEVO':'NEW');
  s('dlTagV10New3', es?'NUEVO':'NEW'); s('dlTagV10New4', es?'NUEVO':'NEW');
  s('dlTagV10Fix1','FIX');
  s('dlPatchV10_1', es?'Lanzamiento inicial - TF1 + TF2 completo':'Initial release - Full TF1 + TF2');
  s('dlPatchV10_2', es?'Favoritos, progreso de piloto y loadouts':'Favorites, pilot progress and loadouts');
  s('dlPatchV10_3', es?'Comparador de titanes y Titan del dia':'Titan compare tool and Titan of the day');
  s('dlPatchV10_4', es?'Campana de TF2 por capitulos con video':'TF2 campaign by chapters with video');
  s('dlPatchV10_5', es?'Traducciones ES/EN revisadas':'ES/EN translations reviewed');
  s('dlPatchNoteV10', es?'Primera version publica de Titanfall Nexus.':'First public version of Titanfall Nexus.');

  // Install
  h('dlInstall', es
    ? 'Para instalar activa <strong>Fuentes desconocidas</strong> en Ajustes → Seguridad.'
    : 'To install enable <strong>Unknown Sources</strong> in Settings → Security.');

  // Re-trigger animations when switching to download tab
  const page = document.querySelector('.dl3-page');
  if(page){
    page.querySelectorAll('[style*="animation"]').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // reflow
      el.style.animation = '';
    });
  }
}


const STORE = {
  getFavs(){ try{ return JSON.parse(localStorage.getItem('tf_favs')||'[]'); }catch(e){return [];} },
  setFavs(a){ localStorage.setItem('tf_favs', JSON.stringify(a)); },
  getLoadouts(){ try{ return JSON.parse(localStorage.getItem('tf_loadouts')||'[]'); }catch(e){return [];} },
  setLoadouts(a){ localStorage.setItem('tf_loadouts', JSON.stringify(a)); },
  getDiscovered(){ try{ return JSON.parse(localStorage.getItem('tf_disc')||'[]'); }catch(e){return [];} },
  addDiscovered(id){
    const d = STORE.getDiscovered();
    if(!d.includes(id)){ d.push(id); localStorage.setItem('tf_disc', JSON.stringify(d)); }
  }
};


function isFav(id){ return STORE.getFavs().includes(id); }

function toggleFav(id, e){
  e.stopPropagation();
  const favs = STORE.getFavs();
  const idx = favs.indexOf(id);
  if(idx === -1) favs.push(id); else favs.splice(idx, 1);
  STORE.setFavs(favs);
  document.querySelectorAll('.fav-star[data-id="' + id + '"]').forEach(s => {
    s.classList.toggle('active', favs.includes(id));
  });
  if(currentSection === 'favorites') renderFavorites();
  updateFavCount();
}

function favStar(id){
  const active = isFav(id);
  return '<button class="fav-star' + (active?' active':'') + '" data-id="' + id + '" title="' + (active?(isEs()?'Quitar':'Remove'):(isEs()?'Favorito':'Favorite')) + '" onclick="handleFavClick(this,event)">&#9733;</button>';
}

function handleFavClick(btn, e){
  e.stopPropagation();
  const id = btn.getAttribute('data-id');
  toggleFav(id, e);
}

function updateFavCount(){
  const el = document.getElementById('favCount');
  if(el) el.textContent = STORE.getFavs().length;
}

function renderFavorites(){
  const favs = STORE.getFavs();
  const grid  = document.getElementById('favGrid');
  const empty = document.getElementById('favEmpty');
  if(!grid) return;
  if(!favs.length){ empty.style.display='block'; grid.innerHTML=''; updateProgress(); return; }
  empty.style.display = 'none';
  let html = '';
  DATA.titans.filter(x=>favs.includes(x.id)).forEach(t2=>{
    const acc = t2.game===1?'var(--tf1)':'var(--tf2)';
    html += '<div class="card' + (t2.game===2?' tf2':'') + '" onclick="openTitan(\''+t2.id+'\')" style="position:relative">' +
      '<div class="card-badges">' + getGame(t2.game) + '<span class="badge badge-tag">TITÁN</span></div>' +
      '<div class="card-title" style="color:'+acc+'">'+t2.name+'</div>' +
      '<div class="card-sub">'+(isEs()?t2.clsEs:t2.clsEn)+'</div>' +
      '<button class="fav-star active" data-id="'+t2.id+'" onclick="toggleFav(\''+t2.id+'\',event)">&#9733;</button></div>';
  });
  DATA.pilots.filter(x=>favs.includes(x.id)).forEach(p=>{
    html += '<div class="card ' + (p.game===2?'tf2':'') + '" onclick="openPilot(\''+p.id+'\')" style="position:relative">' +
      '<div class="card-badges">' + getGame(p.game) + '<span class="badge badge-tag">PILOTO</span></div>' +
      '<div class="card-title" style="color:'+p.color+'">'+p.name+'</div>' +
      '<div class="card-sub">'+(isEs()?p.roleEs:p.roleEn)+'</div>' +
      '<button class="fav-star active" data-id="'+p.id+'" onclick="toggleFav(\''+p.id+'\',event)">&#9733;</button></div>';
  });
  DATA.weapons.filter(x=>favs.includes(x.id)).forEach(w=>{
    const acc = w.game===1?'var(--tf1)':'var(--tf2)';
    html += '<div class="card' + (w.game===2?' tf2':'') + '" onclick="openWeapon(\''+w.id+'\')" style="position:relative">' +
      '<div class="card-badges">' + getGame(w.game) + '<span class="badge badge-tag">ARMA</span></div>' +
      '<div class="card-title" style="color:'+acc+';font-size:1rem">'+w.name+'</div>' +
      '<div class="card-sub">'+w.type+'</div>' +
      '<button class="fav-star active" data-id="'+w.id+'" onclick="toggleFav(\''+w.id+'\',event)">&#9733;</button></div>';
  });
  grid.innerHTML = html || '<div class="no-results">' + t('no_results') + '</div>';
  updateProgress();
}


function markDiscovered(id){ STORE.addDiscovered(id); updateProgress(); }

function getRank(pct){
  const es = isEs();
  if(pct>=100) return es?'LEYENDA DE LA FRONTERA':'FRONTIER LEGEND';
  if(pct>=80)  return es?'COMANDANTE':'COMMANDER';
  if(pct>=60)  return es?'PILOTO ELITE':'ELITE PILOT';
  if(pct>=40)  return es?'PILOTO CERTIFICADO':'CERTIFIED PILOT';
  if(pct>=20)  return es?'SARGENTO':'SERGEANT';
  if(pct>=5)   return es?'CABO':'CORPORAL';
  return es?'RECLUTA':'RECRUIT';
}

function updateProgress(){
  const total = DATA.titans.length + DATA.pilots.length + DATA.weapons.length + DATA.factions.length + DATA.maps.length;
  const disc  = STORE.getDiscovered().length;
  const pct   = total > 0 ? Math.round((disc/total)*100) : 0;
  const rankEl  = document.getElementById('progressRank');
  const pctEl   = document.getElementById('progressPct');
  const fillEl  = document.getElementById('progressBarFill');
  const labelEl = document.getElementById('progressLabel');
  if(rankEl)  rankEl.textContent = getRank(pct);
  if(pctEl)   pctEl.textContent  = pct + '%';
  if(fillEl)  fillEl.style.width = pct + '%';
  if(labelEl) labelEl.textContent = isEs() ? disc+' de '+total+' entradas descubiertas' : disc+' of '+total+' entries discovered';
}

// Wrap detail openers to track discovered items
const _oTitan  = openTitan;
const _oPilot  = openPilot;
const _oWeapon = openWeapon;
const _oMap    = openMap;
const _oFact   = openFaction;
openTitan   = function(id){ markDiscovered(id); _oTitan(id);  };
openPilot   = function(id){ markDiscovered(id); _oPilot(id);  };
openWeapon  = function(id){ markDiscovered(id); _oWeapon(id); };
openMap     = function(id){ markDiscovered(id); _oMap(id);    };
openFaction = function(id){ markDiscovered(id); _oFact(id);   };

const _origOpenOverlay = openOverlay;
openOverlay = function(html){ _origOpenOverlay(html); };


function initCompare(){
  const s1 = document.getElementById('cmpSel1');
  const s2 = document.getElementById('cmpSel2');
  if(!s1||!s2) return;
  if(s1.options.length > 0){ updateCompare(); return; }
  DATA.titans.forEach(function(titan, i){
    s1.add(new Option(titan.name, i));
    s2.add(new Option(titan.name, i));
  });
  s1.selectedIndex = 0;
  s2.selectedIndex = 1;
  updateCompare();
}

function updateCompare(){
  const s1 = document.getElementById('cmpSel1');
  const s2 = document.getElementById('cmpSel2');
  const res= document.getElementById('compareResult');
  if(!s1||!s2||!res) return;
    const v1 = parseInt(s1.value);
  const v2 = parseInt(s2.value);
  const t1 = DATA.titans[isNaN(v1) ? 0 : v1];
  const t2 = DATA.titans[isNaN(v2) ? 1 : v2];
  if(!t1||!t2) return;
  const c1 = t1.game===1?'var(--tf1)':'var(--tf2)';
  const c2 = t2.game===1?'var(--tf1)':'var(--tf2)';
  const stats = [
    [t('label_armor'),    t1.armor,     t2.armor    ],
    [t('label_speed'),    t1.speed,     t2.speed    ],
    [t('label_firepower'),t1.firepower, t2.firepower],
    [t('label_range'),    t1.range,     t2.range    ]
  ];
  let html = '<div class="cmp-row"><div class="cmp-bars" style="font-family:Rajdhani,sans-serif;font-weight:700;font-size:1.15rem">'
    + '<div style="color:'+c1+'">'+t1.name+'</div><div></div><div style="color:'+c2+';text-align:right">'+t2.name+'</div></div></div>';
  stats.forEach(function(row){
    const label=row[0], v1=row[1], v2=row[2];
    const w = v1>v2?'left':v2>v1?'right':'tie';
    html += '<div class="cmp-row'+(w!=='tie'?' cmp-winner':'')+'"><div class="cmp-label">'+label+'</div>'
      + '<div class="cmp-bars">'
      + '<div class="cmp-bar-wrap"><span class="cmp-val" style="color:'+c1+'">'+v1+'</span>'
      + '<div class="cmp-bar"><div class="cmp-fill" style="width:'+v1+'%;background:'+c1+';opacity:'+(w==='left'?1:.4)+'"></div></div></div>'
      + '<div class="cmp-mid">'+(w==='tie'?'=':w==='left'?'▶':'◀')+'</div>'
      + '<div class="cmp-bar-wrap right"><div class="cmp-bar"><div class="cmp-fill" style="width:'+v2+'%;background:'+c2+';opacity:'+(w==='right'?1:.4)+'"></div></div>'
      + '<span class="cmp-val" style="color:'+c2+'">'+v2+'</span></div>'
      + '</div></div>';
  });
  res.innerHTML = html;
}

function initLoadoutSelects(){
  const lp = document.getElementById('ltPilot');
  const lt = document.getElementById('ltTitan');
  const l1 = document.getElementById('ltPrimary');
  const l2 = document.getElementById('ltSecondary');
  if(!lp||lp.options.length>0) return;
  DATA.pilots.forEach(function(p,i){ lp.add(new Option(p.name,i)); });
  DATA.titans.forEach(function(t2,i){ lt.add(new Option(t2.name,i)); });
  DATA.weapons.forEach(function(w,i){ l1.add(new Option(w.name,i)); l2.add(new Option(w.name,i)); });
  l2.selectedIndex=1;
}

function renderLoadouts(){
  const container = document.getElementById('loadoutList');
  if(!container) return;
  const list = STORE.getLoadouts();
  if(!list.length){
    container.innerHTML = '<div class="loadout-empty">'+(isEs()?'Aún no tienes loadouts. Crea el primero.':'No loadouts yet. Create your first one.')+'</div>';
    return;
  }
  function fname(arr,id){ const x=arr.find(function(i){return i.id===id;}); return x?x.name:id; }
  container.innerHTML = list.map(function(l){
    return '<div class="loadout-card">'
      + '<div style="flex:1"><div class="loadout-name">'+l.name+'</div>'
      + '<div class="loadout-details">'+fname(DATA.pilots,l.pilotId)+' · '+fname(DATA.titans,l.titanId)+'<br>'+fname(DATA.weapons,l.primaryId)+' + '+fname(DATA.weapons,l.secondaryId)+'</div></div>'
      + '<button class="loadout-del" onclick="deleteLoadout(\''+l.id+'\')">'+( isEs()?'BORRAR':'DELETE')+'</button>'
      + '</div>';
  }).join('');
}

function showLoadoutEditor(){
  initLoadoutSelects();
  const ed = document.getElementById('loadoutEditor');
  if(ed){ ed.style.display='block'; ed.scrollIntoView({behavior:'smooth',block:'nearest'}); }
}
function hideLoadoutEditor(){
  const ed = document.getElementById('loadoutEditor');
  if(ed) ed.style.display='none';
  const n = document.getElementById('ltName');
  if(n) n.value='';
}
function saveLoadout(){
  const name = (document.getElementById('ltName').value||'').trim() || (isEs()?'Mi Loadout':'My Loadout');
  const pi = parseInt(document.getElementById('ltPilot').value)||0;
  const ti = parseInt(document.getElementById('ltTitan').value)||0;
  const p1 = parseInt(document.getElementById('ltPrimary').value)||0;
  const p2 = parseInt(document.getElementById('ltSecondary').value)||1;
  const lo = { id:Date.now().toString(), name:name,
    pilotId:DATA.pilots[pi].id, titanId:DATA.titans[ti].id,
    primaryId:DATA.weapons[p1].id, secondaryId:DATA.weapons[p2].id };
  const list = STORE.getLoadouts(); list.push(lo); STORE.setLoadouts(list);
  hideLoadoutEditor(); renderLoadouts();
}
function deleteLoadout(id){
  STORE.setLoadouts(STORE.getLoadouts().filter(function(l){return l.id!==id;}));
  renderLoadouts();
}


function initFeatured(){
  const day = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);
  const es  = isEs();
  let item, tag, fact;
  if(day % 2 === 0){
    const t2 = DATA.titans[day % DATA.titans.length];
    tag  = es?'TITÁN DEL DÍA':'TITAN OF THE DAY';
    fact = getTitanFact(t2.id);
    item = {type:'titan', id:t2.id, name:t2.name};
  } else {
    const w  = DATA.weapons[day % DATA.weapons.length];
    tag  = es?'ARMA DEL DÍA':'WEAPON OF THE DAY';
    fact = getWeaponFact(w.id);
    item = {type:'weapon', id:w.id, name:w.name};
  }
  window._featuredItem = item;
  const el_tag  = document.getElementById('featTag');
  const el_name = document.getElementById('featName');
  const el_fact = document.getElementById('featFact');
  if(el_tag)  el_tag.textContent  = tag;
  if(el_name) el_name.textContent = item.name;
  if(el_fact) el_fact.textContent = fact;
}

function openFeatured(){
  const item = window._featuredItem;
  if(!item) return;
  if(item.type==='titan')  openTitan(item.id);
  if(item.type==='weapon') openWeapon(item.id);
}

function getTitanFact(id){
  const es=isEs();
  const f={
    bt7274:   es?'El primer Titán que desarrolla un vínculo genuino con su piloto más allá del protocolo.':'The first Titan to develop a genuine bond with its pilot beyond protocol.',
    ronin:    es?'Su espada puede bloquear proyectiles de gran calibre además de cortar.':'Its sword can block large-caliber projectiles as well as cut.',
    scorch:   es?"El termita del Scorch arde incluso bajo el agua y no puede ser apagado.":"Scorch's thermite burns even underwater and cannot be extinguished.",
    northstar:es?"Único Titán con vuelo sostenido — útil tanto para ataque como para vigilancia.":"Only Titan with sustained flight — useful for both attack and recon.",
    ion:      es?'El Escudo Vórtice no solo bloquea, devuelve los proyectiles con toda su fuerza original.':'The Vortex Shield does not just block — it returns projectiles with full original force.',
    tone:     es?'Tres bloqueos sonar desencadenan un enjambre de misiles casi imposible de esquivar sin cobertura.':'Three sonar locks unleash a missile swarm nearly impossible to avoid without cover.',
    legion:   es?'El Cañón Predador nunca se sobrecalienta — Legion puede disparar indefinidamente.':'The Predator Cannon never overheats — Legion can fire indefinitely.',
    monarch:  es?'El único Titán que mejora permanentemente durante la partida. Cada partido es diferente.':'The only Titan that permanently upgrades mid-match. Every game is different.',
    atlas:    es?'El Atlas fue el primer chasis estándar — la base sobre la que se diseñaron los demás.':'The Atlas was the first standard chassis — the baseline all others were designed from.',
    stryder:  es?'El Stryder tiene tres cargas de dash — más que cualquier otro chasis del juego.':'The Stryder has three dash charges — more than any other chassis.',
    ogre:     es?'El Ogre puede sobrevivir más disparos directos de cañón que cualquier otro Titán.':'The Ogre can survive more direct cannon hits than any other Titan.',
  };
  return f[id]||(es?'Un Titán formidable de la Frontera.':'A formidable Titan of the Frontier.');
}

function getWeaponFact(id){
  const es=isEs();
  const f={
    kraber_tf2:  es?'Puede eliminar a cualquier piloto de un solo disparo al cuerpo — sin excepción.':'Can kill any pilot in a single body shot — no exceptions.',
    devotion:    es?'La Devotion aumenta su cadencia cuanto más tiempo mantienes el gatillo.':'The Devotion increases fire rate the longer you hold the trigger.',
    epg:         es?'Los proyectiles del EPG pueden rebotar en paredes — dominar los rebotes separa a los expertos.':'EPG rounds bounce off walls — mastering ricochets separates experts.',
    smart5_tf1:  es?'Tan controvertida que Respawn la movió al slot táctico en TF2.':'So controversial Respawn moved it to the tactical slot in TF2.',
    archer_tf1:  es?"Puede destruir un Titán de un solo impacto si está suficientemente dañado.":"Can destroy a Titan in one hit if it's damaged enough.",
    volt:        es?"Usa energía en lugar de balas — no rebota y atraviesa ciertos escudos.":"Uses energy instead of bullets — no ricochets and pierces some shields.",
    chargerifle: es?'Puede dañar Titanes directamente desde tierra sin lanzador especial.':'Can damage Titans directly from the ground without a special launcher.',
  };
  return f[id]||(es?'Un arma temible de la Frontera.':'A fearsome weapon of the Frontier.');
}


function updateLoadoutLabels(){
  const es=isEs();
  const m={
    loadoutsTagLabel:  es?'◆  TUS LOADOUTS':'◆  YOUR LOADOUTS',
    loadoutSubLabel:   es?'Crea tu equipamiento personalizado':'Create your custom loadout',
    btnNewLoadout:     (es?'+ NUEVO':'+ NEW'),
    loadoutEditorTitle:es?'NUEVO LOADOUT':'NEW LOADOUT',
    btnSaveLoadout:    es?'GUARDAR':'SAVE',
    btnCancelLoadout:  es?'CANCELAR':'CANCEL',
    lblLoadoutName:    es?'Nombre del loadout':'Loadout name',
    lblPilot:          es?'Piloto':'Pilot',
    lblTitan:          es?'Titán':'Titan',
    lblPrimary:        es?'Arma primaria':'Primary weapon',
    lblSecondary:      es?'Arma secundaria':'Secondary weapon',
    compareTagLabel:   es?'◆  COMPARAR TITANES':'◆  COMPARE TITANS',
  };
  Object.keys(m).forEach(function(id){ const el=document.getElementById(id); if(el) el.textContent=m[id]; });
}

function updateFavLabels(){
  const es=isEs();
  const el_tag  = document.getElementById('favTagLabel');
  const el_prog = document.getElementById('progressTagLabel');
  const el_empty= document.getElementById('favEmptyText');
  if(el_tag)   el_tag.textContent   = es?'◆  FAVORITOS':'◆  FAVORITES';
  if(el_prog)  el_prog.textContent  = es?'◆  TU PROGRESO':'◆  YOUR PROGRESS';
  if(el_empty) el_empty.textContent = es
    ? 'Pulsa ★ en cualquier titán, piloto o arma para guardarlo aquí'
    : 'Press ★ on any titan, pilot or weapon to save it here';
  updateProgress();
}

renderAll();
showSection('pilots');
updateVideoBannerLabels();
updateDownloadSection();
initFeatured();
updateLoadoutLabels();
updateFavLabels();
updateFavCount();
