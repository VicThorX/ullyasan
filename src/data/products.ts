import { Product } from '@/types/product';

export const products: Product[] = [
  {
    slug: 'langostino-patagonico',
    scientificName: 'Pleoticus muelleri',
    category: 'frozen',
    images: [
      '/images/products/langostino-1.jpg',
      '/images/products/langostino-2.jpg'
    ],
    name: {
      es: 'Langostino Patagónico Premium',
      en: 'Premium Patagonian Red Shrimp',
      pt: 'Camarão Patagônico Premium',
      de: 'Premium Patagonische Rotgarnele',
      fr: 'Crevette Rouge de Patagonie Premium'
    },
    shortDescription: {
      es: 'Capturado en estado salvaje en las aguas frías de la Patagonia. Congelado a bordo para conservar su frescura intacta.',
      en: 'Wild-caught in the cold pristine waters of Patagonia. Frozen-at-sea to preserve its intact, natural freshness.',
      pt: 'Capturado de forma selvagem nas águas frias da Patagônia. Congelado a bordo para conservar seu frescor intacto.',
      de: 'Wildfang aus den kalten, unberührten Gewässern Patagoniens. An Bord eingefroren, um maximale Frische zu garantieren.',
      fr: 'Pêché à l\'état sauvage dans les eaux froides de la Patagonie. Surgelé à bord pour préserver une fraîcheur intacte.'
    },
    description: {
      es: 'El Langostino Patagónico (Pleoticus muelleri) es reconocido mundialmente por su característico color rojo natural, su textura firme y su sabor dulce y delicado. Capturado de forma sostenible en el Atlántico Sur (FAO 41) por nuestra flota selectiva, es procesado y congelado a bordo de inmediato en sistemas IQF o bloque para asegurar que llegue a los mercados de Europa y América con la calidad organoléptica intacta de su origen.',
      en: 'The Patagonian Red Shrimp (Pleoticus muelleri) is globally renowned for its characteristic natural red color, firm texture, and sweet, delicate flavor. Sustainably wild-caught in the pristine cold waters of the South Atlantic (FAO 41) by our selective fleet, it is processed and frozen-at-sea immediately using IQF or Block freezing systems, ensuring it reaches European, Asian, and American markets with its original organoleptic quality completely intact.',
      pt: 'O Camarão Patagônico (Pleoticus muelleri) é mundialmente reconhecido por sua cor vermelha natural característica, textura firme e sabor adocicado e delicado. Capturado de forma sustentável no Atlântico Sul (FAO 41) por nossa frota seletiva, é processado e congelado a bordo imediatamente em sistemas IQF ou bloco para garantir que chegue aos mercados internacionais com sua qualidade original totalmente preservada.',
      de: 'Die Patagonische Rotgarnele (Pleoticus muelleri) ist weltweit bekannt für ihre natürliche rote Farbe, ihr festes Fleisch und ihren süßlich-feinen Geschmack. Nachhaltig wild gefangen in den kalten Gewässern des Südatlantiks (FAO 41) durch unsere selektive Flotte, wird sie sofort an Bord in IQF- oder Block-Systemen verarbeitet und eingefroren. Dies garantiert, dass sie die anspruchsvollsten Märkte mit ihrer ursprünglichen Frische und Qualität erreicht.',
      fr: 'La crevette rouge de Patagonie (Pleoticus muelleri) est mondialement réputée pour sa couleur rouge naturelle distinctive, sa texture ferme et sa saveur douce et délicate. Pêchée de manière durable dans l\'Atlantique Sud (FAO 41) par notre flotte sélective, elle est immédiatement traitée et surgelée à bord (en IQF ou en bloc), garantissant son arrivée sur les marchés mondiaux avec toutes ses qualités organoleptiques d\'origine intactes.'
    },
    techSheet: {
      presentation: {
        es: 'Entero (L1, L2, L3, L4) / Cola fácil pelado (C1, C2) / Pelado y devenado (varias tallas).',
        en: 'Whole Round (L1, L2, L3, L4) / Headless Easy-Peel (C1, C2) / Peeled & Deveined (various sizes).',
        pt: 'Inteiro (L1, L2, L3, L4) / Cauda fácil descascamento (C1, C2) / Descascado e eviscerado.',
        de: 'Ganz mit Kopf (L1, L2, L3, L4) / Ohne Kopf Easy-Peel (C1, C2) / Geschält & entdarmt (diverse Größen).',
        fr: 'Entière (L1, L2, L3, L4) / Sans tête facile à décortiquer (C1, C2) / Décortiquée et déveinée.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Captura Salvaje.',
        en: 'Southwest Atlantic Ocean (FAO 41), Wild-Caught.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Captura Selvagem.',
        de: 'Südwestatlantik (FAO 41), Wildfang.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Pêche Sauvage.'
      },
      glazing: {
        es: '0% a 5% (Glaseado de protección industrial estándar).',
        en: '0% to 5% (Standard industrial protective glazing).',
        pt: '0% a 5% (Glaciamento de proteção industrial padrão).',
        de: '0% bis 5% (Standardmäßige schützende Eisglasur).',
        fr: '0% à 5% (Vitrage de protection industriel standard).'
      },
      packaging: {
        es: 'Cajas master de 10 kg conteniendo 10 estuches de 1 kg (Entero), o cajas de 6 kg / 12 kg para colas.',
        en: '10 kg master cartons containing 10 inner boxes of 1 kg (Whole), or 6 kg / 12 kg cartons for tails.',
        pt: 'Caixas master de 10 kg contendo 10 cartuchos de 1 kg (Inteiro), ou caixas de 6 kg / 12 kg para caudas.',
        de: '10 kg Masterkarton mit 10 x 1 kg Innenboxen (Ganz), oder 6 kg / 12 kg Kartons für Schwänze.',
        fr: 'Cartons master de 10 kg contenant 10 étuis de 1 kg (Entière), ou cartons de 6 kg / 12 kg pour les queues.'
      }
    }
  },
  {
    slug: 'calamar-illex',
    scientificName: 'Illex argentinus',
    category: 'frozen',
    images: [
      '/images/products/calamar-1.jpg',
      '/images/products/calamar-2.jpg'
    ],
    name: {
      es: 'Calamar Illex Patagónico',
      en: 'Patagonian Illex Squid',
      pt: 'Lula Illex Patagônica',
      de: 'Patagonischer Illex-Tintenfisch',
      fr: 'Calamar Illex de Patagonie'
    },
    shortDescription: {
      es: 'Calamar de textura firme y excelente rendimiento para la industria procesadora e importadores a nivel global.',
      en: 'Firmed-textured squid offering outstanding yield for processing industries and global importers.',
      pt: 'Lula de textura firme e excelente rendimento para a indústria de processamento e importadores globais.',
      de: 'Tintenfisch mit festem Fleisch und hervorragender Ausbeute für die verarbeitende Industrie und Importeure.',
      fr: 'Calamar à texture ferme et excellent rendement, idéal pour l\'industrie de transformation et les importateurs globaux.'
    },
    description: {
      es: 'El Calamar Illex (Illex argentinus) es una de las especies pelágicas más importantes del Atlántico Sur. Capturado durante la temporada alta por nuestra flota potera de última generación, destaca por su blancura, su textura compacta y limpia, y su alto rendimiento post-descongelamiento. Altamente demandado por plantas de reprocesamiento en Europa y Asia para la producción de anillas, tubos y rabas de calidad superior.',
      en: 'The Illex Squid (Illex argentinus) is one of the most commercially significant pelagic species in the South Atlantic. Wild-harvested during peak season by our state-of-the-art jigger vessels, it is highly regarded for its white flesh, firm and clean texture, and exceptional post-defrost yield. Highly sought after by reprocessing plants in Europe and Asia for producing premium squid rings, tubes, and tentacles.',
      pt: 'A Lula Illex (Illex argentinus) é uma das espécies pelágicas mais importantes do Atlântico Sul. Capturada durante a alta temporada por nossa frota especializada de jiggers, destaca-se por sua alvura, textura compacta e limpa, e alto rendimento pós-descongelamento. Amplamente demandada por plantas de reprocessamento na Europa e Ásia para a produção de anéis, tubos e tentáculos de qualidade superior.',
      de: 'Der Illex-Tintenfisch (Illex argentinus) ist eine der bedeutendsten pelagischen Arten des Südatlantiks. Während der Hauptsaison von unserer hochmodernen Jigger-Flotte wild gefangen, besticht er durch sein weißes Fleisch, seine feste, saubere Textur und seine hervorragende Ergiebigkeit nach dem Auftauen. Sehr gefragt bei Weiterverarbeitungsbetrieben in Europa und Asien für die Herstellung von Ringen, Tuben und Tintenfischstreifen.',
      fr: 'Le calamar Illex (Illex argentinus) est l\'une des espèces pélagiques les plus importantes de l\'Atlantique Sud. Pêché en haute saison par notre flotte de navires caseyeurs de pointe, il se distingue par sa blancheur, sa texture compacta et propre, et son excellent rendement après décongélation. Très recherché par les usines de transformation en Europe et en Asie pour produire des anneaux, des tubes et des tentacules de qualité supérieure.'
    },
    techSheet: {
      presentation: {
        es: 'Entero Sucio (S, M, L) / Tubo Limpio U5, U7, U10 / Tentáculos / Anillas.',
        en: 'Whole Round (S, M, L) / Clean Tubes U5, U7, U10 / Tentacles / Rings.',
        pt: 'Inteiro Sujo (S, M, L) / Tubo Limpo U5, U7, U10 / Tentáculos / Anéis.',
        de: 'Ganz und ungesäubert (S, M, L) / Saubere Tuben U5, U7, U10 / Tentakel / Ringe.',
        fr: 'Entier non nettoyé (S, M, L) / Tubes nettoyés U5, U7, U10 / Tentacules / Anneaux.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Pesca de Altura (Poteros).',
        en: 'Southwest Atlantic Ocean (FAO 41), Offshore Jiggers.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Pesca de Altura (Jiggers).',
        de: 'Südwestatlantik (FAO 41), Hochseefischerei (Jigger).',
        fr: 'Atlantique Sud-Ouest (FAO 41), Pêche hauturière.'
      },
      glazing: {
        es: '3% a 5% (Glaseado protector de superficie).',
        en: '3% to 5% (Protective surface glazing).',
        pt: '3% a 5% (Glaciamento protetor de superfície).',
        de: '3% bis 5% (Schützende Oberflächenglasur).',
        fr: '3% à 5% (Vitrage de protection de surface).'
      },
      packaging: {
        es: 'Bloques congelados de 10 kg o 12.5 kg envueltos en film de polietileno, embalados en bolsas master o cajas de cartón.',
        en: '10 kg or 12.5 kg frozen blocks wrapped in polyethylene film, packed in master bags or cardboard cartons.',
        pt: 'Blocos congelados de 10 kg ou 12.5 kg envoltos em filme de polietileno, embalados em sacos master ou caixas de papelão.',
        de: '10 kg oder 12,5 kg gefrorene Blöcke in Polyethylenfolie, verpackt in Mastersäcken oder Umkartons.',
        fr: 'Blocs surgelés de 10 kg ou 12,5 kg enveloppés sous film polyéthylène, conditionnés en sacs master ou en cartons.'
      }
    }
  },
  {
    slug: 'merluza-hubbsi',
    scientificName: 'Merluccius hubbsi',
    category: 'fresh',
    images: [
      '/images/products/merluza-1.jpg',
      '/images/products/merluza-2.jpg'
    ],
    name: {
      es: 'Merluza Hubbsi del Atlántico',
      en: 'Argentine Hubbsi Hake',
      pt: 'Merluza Hubbsi do Atlântico',
      de: 'Argentinischer Seehecht (Hubbsi)',
      fr: 'Merlu de Patagonie (Hubbsi)'
    },
    shortDescription: {
      es: 'Pescado blanco de carne suave y magra. Disponible tanto en nuestra línea de fresco aéreo como congelado IQF.',
      en: 'Lean white fish with delicate white flesh. Available in both our fresh air-freighted and IQF frozen lines.',
      pt: 'Peixe branco de carne suave e magra. Disponível tanto em nossa linha de frescos por via aérea quanto congelados IQF.',
      de: 'Magerer Weißfisch mit zartem, hellem Fleisch. Sowohl frisch per Luftfracht als auch gefroren (IQF) erhältlich.',
      fr: 'Poisson blanc à chair tendre et maigre. Disponible en version fraîche par fret aérien ou surgelée en IQF.'
    },
    description: {
      es: 'La Merluza Hubbsi (Merluccius hubbsi) es el pescado blanco insignia de Argentina. Su carne magra, de color blanco translúcido, posee un sabor suave y una textura delicada que se deshace en láminas perfectas al cocinarse. Capturada en las plataformas profundas del mar patagónico, se procesa bajo rigurosos controles de temperatura. Ofrecemos despachos aéreos de pescado fresco eviscerado (HGT) de forma inmediata, así como filetes interfoliados congelados en tierra para distribución mayorista.',
      en: 'The Argentine Hake (Merluccius hubbsi) is the flagship white fish of Argentina. Its lean, translucent white flesh offers a mild, delicate flavor and flaky texture when cooked. Harvested in the deep, cold waters of the Patagonian continental shelf, it is processed under strict temperature monitoring. We offer immediate air-freight shipping for fresh headed-gutted-tailed (HGT) fish, as well as land-frozen interleaved fillets for wholesale distribution.',
      pt: 'A Merluza Hubbsi (Merluccius hubbsi) é o peixe branco emblemático da Argentina. Sua carne magra, de cor branca translúcida, possui sabor suave e textura delicada que se desfaz em pétalas ao cozinhar. Capturada nas plataformas profundas do mar patagônico, é processada sob rigorosos controles de temperatura. Oferecemos despachos aéreos imediatos de peixe fresco eviscerado (HGT), bem como filés congelados em terra com folhas intercaladas para distribuição atacadista.',
      de: 'Der Argentinische Seehecht (Merluccius hubbsi) ist der bekannteste Weißfisch Argentiniens. Sein mageres, fast durchscheinendes weißes Fleisch zeichnet sich durch einen milden Geschmack und eine zarte Textur aus. Auf dem patagonischen Schelf gefangen, wird er unter strengem Kälteüberwachung verarbeitet. Wir bieten schnellen Luftfrachtversand für frischen, ausgenommenen Fisch ohne Kopf (HGT) sowie an Land gefrorene, einzeln geschichtete Filets (interleaved) für den Großhandel.',
      fr: 'Le merlu de Patagonie (Merluccius hubbsi) est le poisson blanc emblématique d\'Argentine. Sa chair maigre, blanche et translucide, possède une saveur délicate et une texture fine qui s\'effeuille à la cuisson. Pêché sur le plateau continental patagonien, il est traité sous contrôle rigoureux de température. Nous proposons des expéditions par fret aérien immédiat de poissons frais étêtés et éviscérés (HGT), ainsi que des filets congelés à terre avec intercalaires pour le commerce de gros.'
    },
    techSheet: {
      presentation: {
        es: 'Filet con piel / Filet sin piel y sin espinas (interfoliado PBI/PBO) / HGT (Eviscerado sin cabeza ni cola).',
        en: 'Fillets Skin-on / Fillets Skinless & Boneless (interleaved PBI/PBO) / HGT (Headed, Gutted, Tailed).',
        pt: 'Filé com pele / Filé sem pele e sem espinhas (interfolhado PBI/PBO) / HGT (Sem cabeça e eviscerado).',
        de: 'Filets mit Haut / Filets ohne Haut & grätenfrei (interleaved PBI/PBO) / HGT (ohne Kopf & Schwanz, ausgenommen).',
        fr: 'Filet avec peau / Filet sans peau et sans arêtes (avec intercalaires PBI/PBO) / HGT (étêté, éviscéré, sans queue).'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Plataforma Patagónica.',
        en: 'Southwest Atlantic Ocean (FAO 41), Patagonian Shelf.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Plataforma Patagônica.',
        de: 'Südwestatlantik (FAO 41), Patagonischer Schelf.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Plateau de Patagonie.'
      },
      glazing: {
        es: '0% para fresco aéreo / 2% a 5% para congelados interfoliados.',
        en: '0% for fresh airfreight / 2% to 5% for land-frozen interleaved fillets.',
        pt: '0% para frescos aéreos / 2% a 5% para congelados interfolhados.',
        de: '0% für frische Luftfracht / 2% bis 5% für gefrorene Filets.',
        fr: '0% pour le frais aérien / 2% à 5% pour le surgelé avec intercalaires.'
      },
      packaging: {
        es: 'Fresco: Cajas de EPS (Isopor) con hielo de 10 kg / Congelado: Cajas master de 20 kg conteniendo 4 bloques de 5 kg.',
        en: 'Fresh: 10 kg EPS (Styrofoam) boxes with gel pack ice / Frozen: 20 kg master cartons containing 4 blocks of 5 kg.',
        pt: 'Fresco: Caixas EPS (Isopor) com gelo de 10 kg / Congelado: Caixas master de 20 kg contendo 4 blocos de 5 kg.',
        de: 'Frisch: 10 kg EPS-Thermoboxen mit Eis / Gefroren: 20 kg Masterkarton mit 4 x 5 kg Blöcken.',
        fr: 'Frais : Caisses EPS (polystyrène) avec glace de 10 kg / Surgelé : Cartons master de 20 kg contenant 4 blocs de 5 kg.'
      }
    }
  },
  {
    slug: 'merluza-negra',
    scientificName: 'Dissostichus eleginoides',
    category: 'frozen',
    images: ['/images/products/merluza-negra.png'],
    name: {
      es: 'Merluza Negra Patagónica (Bacalao de Profundidad)',
      en: 'Patagonian Toothfish (Chilean Seabass)',
      pt: 'Merluza Negra Patagônica',
      de: 'Schwarzer Seehecht (Patagonischer Zahnfisch)',
      fr: 'Légine Australe (Merlu Noir)'
    },
    shortDescription: {
      es: 'Uno de los pescados más cotizados del mundo. De carne blanca nacarada, textura firme y un sabor excepcionalmente rico.',
      en: 'One of the most highly prized fish in the world. Pearly white flesh, firm texture, and exceptionally rich flavor.',
      pt: 'Um dos peixes mais cobiçados do mundo. De carne branca nacarada, textura firme e sabor excepcionalmente rico.',
      de: 'Einer der wertvollsten Fische der Welt. Perlweißes Fleisch, feste Textur und außergewöhnlich reicher Geschmack.',
      fr: 'L\'un des poissons les plus prisés au monde. Chair blanc nacré, texture ferme et saveur exceptionnellement riche.'
    },
    description: {
      es: 'La Merluza Negra (Dissostichus eleginoides) habita en las profundidades del mar patagónico. Su carne es rica en aceites naturales de omega-3, lo que le otorga una jugosidad incomparable, una textura tersa y un sabor suave y mantecoso. Capturada por palangreros de profundidad y congelada de inmediato a bordo a temperaturas criogénicas para preservar su estructura celular perfecta. Cumple con los más altos estándares culinarios en Japón, Estados Unidos y Europa.',
      en: 'The Patagonian Toothfish (Dissostichus eleginoides) lives in the extreme depths of the cold Patagonian waters. Its flesh is rich in natural Omega-3 oils, providing unparalleled juiciness, smooth texture, and a mild, buttery flavor. Wild-caught by deep-sea longliners and frozen-at-sea immediately at cryogenic temperatures to preserve its perfect cell structure. It meets the absolute highest culinary standards in Japan, the USA, and Europe.',
      pt: 'A Merluza Negra (Dissostichus eleginoides) habita nas profundezas do mar patagônico. Sua carne é rica em óleos naturais de ômega-3, o que lhe confere uma suculência incomparável, textura suave e sabor amanteigado. Capturada por espinhel de profundidade e congelada imediatamente a bordo para preservar sua estrutura celular perfeita. Atende aos mais altos padrões culinários no Japão, Estados Unidos e Europa.',
      de: 'Der Schwarze Seehecht (Dissostichus eleginoides) lebt in den extremen Tiefen der patagonischen Gewässer. Sein Fleisch ist reich an natürlichen Omega-3-Ölen, was ihm eine unvergleichliche Saftigkeit, eine glatte Textur und einen milden, butterartigen Geschmack verleiht. Wild gefangen von Tiefseelangleinern und sofort an Bord bei kryogenen Temperaturen eingefroren. Er erfüllt die höchsten kulinarischen Standards in Japan, den USA und Europa.',
      fr: 'La Légine Australe (Dissostichus eleginoides) vit dans les grandes profondeurs des eaux patagoniennes. Sa chair est riche en huiles oméga-3 naturelles, offrant un moelleux incomparable, une texture lisse et une saveur douce et beurrée. Pêchée par des palangriers de grand fond et surgelée à bord immédiatement à des températures cryogéniques pour préserver sa structure cellulaire. Répond aux normes culinaires les plus élevées au Japon, aux États-Unis et en Europe.'
    },
    techSheet: {
      presentation: {
        es: 'HGT (Eviscerado, sin cabeza, sin cola) / Filetes sin piel (PBO) individuales.',
        en: 'HGT (Headed, Gutted, Tailed) / Skinless Fillets (PBO) individually wrapped.',
        pt: 'HGT (Sem cabeça, sem cauda e eviscerado) / Filés sem pele (PBO) individuais.',
        de: 'HGT (ohne Kopf & Schwanz, ausgenommen) / Hautlose Filets (PBO) einzeln verpackt.',
        fr: 'HGT (étêté, éviscéré, sans queue) / Filets sans peau (PBO) emballés individuellement.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Pesca de Gran Altura (Palangre).',
        en: 'Southwest Atlantic Ocean (FAO 41), Deep-Sea Longline.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Pesca de Espinhel de Profundidade.',
        de: 'Südwestatlantik (FAO 41), Tiefsee-Langleine.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Palangre de grand fond.'
      },
      glazing: {
        es: '0% a 2% (Congelación ultra-rápida de protección).',
        en: '0% to 2% (Ultra-fast protective freezing).',
        pt: '0% a 2% (Congelamento ultra-rápido de proteção).',
        de: '0% bis 2% (Ultraschnelles Gefrieren zum Schutz).',
        fr: '0% à 2% (Surgélation ultra-rapide de protection).'
      },
      packaging: {
        es: 'Cajas master de 20 kg o 25 kg envasadas en bolsas de polietileno individuales por pieza (IWP).',
        en: '20 kg or 25 kg master cartons containing individually wrapped pieces (IWP).',
        pt: 'Caixas master de 20 kg ou 25 kg embaladas em sacos de polietileno individuais (IWP).',
        de: '20 kg oder 25 kg Masterkartons mit einzeln in Polybeuteln verpackten Stücken (IWP).',
        fr: 'Cartons master de 20 kg ou 25 kg contenant des pièces emballées individuellement (IWP).'
      }
    }
  },
  {
    slug: 'pez-espada',
    scientificName: 'Xiphias gladius',
    category: 'frozen',
    images: ['/images/products/pez-espada.png'],
    name: {
      es: 'Pez Espada / Emperador Premium',
      en: 'Premium Swordfish',
      pt: 'Espadarte Premium',
      de: 'Schwertfisch Premium',
      fr: 'Espadon Premium'
    },
    shortDescription: {
      es: 'Carne densa y carnosa de textura tipo filete, ideal para la parrilla o plancha y altamente valorada en mercados internacionales.',
      en: 'Dense and meaty steak-like texture, ideal for grilling or searing and highly valued in international B2B markets.',
      pt: 'Carne densa e carnuda com textura tipo bife, ideal para grelhar e altamente valorizada em mercados internacionais.',
      de: 'Dichtes, fleischiges Fleisch mit steakkonsistenz, ideal zum Grillen und in internationalen Märkten sehr geschätzt.',
      fr: 'Chair dense et charnue rappelant un steak, idéale pour la grillade et hautement appréciée sur les marchés mondiaux.'
    },
    description: {
      es: 'El Pez Espada (Xiphias gladius) es capturado en las corrientes profundas del Atlántico Sur por nuestra flota de altura. Con una carne firme, de textura compacta similar al lomo de carne vacuna y un sabor suave característico, es muy apreciado por importadores y cadenas de restaurantes en Europa y Norteamérica. Procesado inmediatamente a bordo y cortado en troncos o rodajas IQF con cadena de frío garantizada.',
      en: 'The Swordfish (Xiphias gladius) is harvested in the deep currents of the South Atlantic by our longline vessels. Featuring firm, compact meat with a steak-like texture and a mild flavor, it is highly sought after by B2B distributors and fine dining groups in Europe and North America. Processed immediately at sea and cut into loins or IQF steaks with guaranteed cold-chain integrity.',
      pt: 'O Espadarte (Xiphias gladius) é capturado nas correntes profundas do Atlântico Sul. Com uma carne firme, de textura compacta semelhante a um lombo e sabor suave característico, é muito apreciado por importadores e redes de restaurantes. Processado imediatamente e cortado em lombos ou postas IQF com cadeia de frio garantizada.',
      de: 'Der Schwertfisch (Xiphias gladius) wird in den tiefen Strömungen des Südatlantiks gefangen. Mit seinem festen, kompakten Fleisch (ähnlich wie Rinderfilet) und seinem milden Geschmack ist er bei Importeuren und Restaurantketten sehr beliebt. Sofort an Bord verarbeitet und in Loins oder IQF-Steaks geschnitten.',
      fr: 'L\'Espadon (Xiphias gladius) est pêché dans les courants profonds de l\'Atlantique Sud. Avec une chair ferme, une texture compacte semblable à un pavé de viande et une saveur douce caractéristique, il est très recherché par les importateurs. Traité immédiatement à bord et découpé en longes ou en pavés IQF sous chaîne du froid rigoureuse.'
    },
    techSheet: {
      presentation: {
        es: 'Troncos sin piel ni espinas / Rodajas IQF con piel de varios grosores (2 a 3 cm).',
        en: 'Skinless & Boneless Loins / Skin-on IQF Steaks of various thicknesses (2 to 3 cm).',
        pt: 'Lombos sem pele e sem espinhas / Postas IQF com pele de várias espessuras (2 a 3 cm).',
        de: 'Hautlose & grätenfreie Loins / IQF-Steaks mit Haut in verschiedenen Stärken (2 bis 3 cm).',
        fr: 'Longes sans peau et sans arêtes / Pavés IQF avec peau d\'épaisseurs variables (2 à 3 cm).'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Captura en alta mar.',
        en: 'Southwest Atlantic Ocean (FAO 41), Deep-Sea Longline.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Captura em alto mar.',
        de: 'Südwestatlantik (FAO 41), Hochsee-Langleinenfang.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Pêche hauturière.'
      },
      glazing: {
        es: '3% a 5% (Glaseado protector de agua potable).',
        en: '3% to 5% (Potable water protective glazing).',
        pt: '3% a 5% (Glaciamento protetor de água potável).',
        de: '3% bis 5% (Trinkwasser-Schutzglasur).',
        fr: '3% à 5% (Vitrage protecteur à l\'eau potable).'
      },
      packaging: {
        es: 'Cajas master de 15 kg o 20 kg, piezas individuales IWP o bolsas IQF de 1 kg.',
        en: '15 kg or 20 kg master cartons, individually wrapped pieces (IWP) or 1 kg IQF bags.',
        pt: 'Caixas master de 15 kg ou 20 kg, peças individuais IWP ou sacos IQF de 1 kg.',
        de: '15 kg oder 20 kg Masterkartons, einzeln verpackt (IWP) oder 1 kg IQF-Beutel.',
        fr: 'Cartons master de 15 kg ou 20 kg, pièces emballées individuellement (IWP) ou sachets IQF de 1 kg.'
      }
    }
  },
  {
    slug: 'trucha-arcoiris',
    scientificName: 'Oncorhynchus mykiss',
    category: 'fresh',
    images: ['/images/products/salmon.png'],
    name: {
      es: 'Trucha Arco Iris Patagónica',
      en: 'Patagonian Rainbow Trout',
      pt: 'Truta Arco-Íris Patagônica',
      de: 'Patagonische Regenbogenforelle',
      fr: 'Truite Arc-en-Ciel de Patagonie'
    },
    shortDescription: {
      es: 'Criada en las aguas glaciares y puras de la cordillera patagónica, posee un color rosado vibrante y un sabor sutilmente dulce.',
      en: 'Raised in the pristine glacial waters of the Patagonian Andes, featuring a vibrant pink flesh and subtly sweet flavor.',
      pt: 'Criada nas águas glaciais e puras da Patagônia, possui cor rosada vibrante e sabor sutilmente adocicado.',
      de: 'Gezüchtet in den reinen Gletschergewässern der patagonischen Anden, mit leuchtend rosafarbenem Fleisch und feinem Geschmack.',
      fr: 'Élevée dans les eaux glaciaires pures de la cordillère de Patagonie, elle offre une couleur rose vif et une saveur subtilement douce.'
    },
    description: {
      es: 'Nuestra Trucha Arco Iris (Oncorhynchus mykiss) proviene de centros acuícolas seleccionados en lagos patagónicos de deshielo glaciar. El agua cristalina a temperaturas ultra-frías asegura una carne firme, limpia y con niveles óptimos de grasas saludables omega-3. Cosechada a pedido bajo estrictos protocolos y despachada por aire fresca y refrigerada para cadenas de restaurantes premium y distribuidores gourmet.',
      en: 'Our Rainbow Trout (Oncorhynchus mykiss) is sustainably raised in selected aquaculture farms in pristine glacial-fed lakes of Patagonia. The crystalline, ultra-cold water ensures firm, clean flesh with optimal levels of healthy Omega-3 fats. Harvested on demand under strict protocols and shipped fresh by airfreight to premium restaurant chains and gourmet B2B clients.',
      pt: 'Nossa Truta Arco-Íris (Oncorhynchus mykiss) provém de centros de aquicultura selecionados em lagos patagônicos de degelo. A água cristalina a temperaturas ultra-frias garante carne firme, limpa e com níveis ótimos de ômega-3. Colhida sob demanda e despachada fresca e refrigerada por via aérea.',
      de: 'Unsere Regenbogenforelle (Oncorhynchus mykiss) stammt aus ausgewählten Aquakulturen in patagonischen Gletscherseen. Das kristallklare, extrem kalte Wasser sorgt für ein festes, sauberes Fleisch mit optimalem Omega-3-Gehalt. Auf Bestellung unter strengen Auflagen geerntet und frisch per Luftfracht versandt.',
      fr: 'Notre Truite Arc-en-Ciel (Oncorhynchus mykiss) provient de centres aquacoles sélectionnés dans des lacs de fonte glaciaire en Patagonie. L\'eau cristalline et ultra-froide assure une chair ferme, propre et riche en graisses oméga-3 saines. Récoltée sur commande et expédiée fraîche par fret aérien.'
    },
    techSheet: {
      presentation: {
        es: 'Entero eviscerado con cabeza (HON) / Filetes con piel sin espinas (PBI).',
        en: 'Whole gutted head-on (HON) / Skin-on boneless fillets (PBI).',
        pt: 'Inteiro eviscerado com cabeça (HON) / Filés com pele sem espinhas (PBI).',
        de: 'Ganz ausgenommen mit Kopf (HON) / Filets mit Haut, grätenfrei (PBI).',
        fr: 'Entière éviscérée avec tête (HON) / Filets avec peau sans arêtes (PBI).'
      },
      catchZone: {
        es: 'Aguas continentales puras de la Patagonia Argentina (Origen Acuicultura).',
        en: 'Pristine inland waters of Argentine Patagonia (Aquaculture).',
        pt: 'Águas continentais puras da Patagônia Argentina (Aquicultura).',
        de: 'Reine Binnengewässer der argentinischen Patagonien (Aquakultur).',
        fr: 'Eaux continentales pures de la Patagonie argentine (Aquaculture).'
      },
      glazing: {
        es: '0% (Línea de refrigerado fresco sobre hielo).',
        en: '0% (Fresh chilled on ice line).',
        pt: '0% (Linha de refrigerados frescos sobre gelo).',
        de: '0% (Frisch gekühlt auf Eis).',
        fr: '0% (Gamme de produits frais réfrigérés sur glace).'
      },
      packaging: {
        es: 'Cajas de EPS (Isopor) de 10 kg o 15 kg con almohadillas térmicas y hielo de gel.',
        en: '10 kg or 15 kg EPS boxes with thermal pads and gel ice packs.',
        pt: 'Caixas EPS de 10 kg ou 15 kg com almofadas térmicas e gelo em gel.',
        de: '10 kg oder 15 kg EPS-Boxen with Thermopads und Gel-Eispacks.',
        fr: 'Caisses EPS de 10 kg ou 15 kg avec tampons thermiques et glace de gel.'
      }
    }
  },
  {
    slug: 'salmon-coho',
    scientificName: 'Oncorhynchus kisutch',
    category: 'frozen',
    images: ['/images/products/salmon.png'],
    name: {
      es: 'Salmón Coho del Pacífico',
      en: 'Pacific Coho Salmon',
      pt: 'Salmão Coho do Pacífico',
      de: 'Pazifischer Coho-Lachs',
      fr: 'Saumon Coho du Pacifique'
    },
    shortDescription: {
      es: 'De color naranja-rojizo intenso y alto contenido graso saludable. Congelado en origen para asegurar la máxima calidad organoléptica.',
      en: 'Intense orange-red color and high healthy fat content. Frozen-at-origin to secure the maximum organoleptic quality.',
      pt: 'De cor laranja-avermelhado intenso e alto teor de gorduras saudáveis. Congelado na origem para máxima qualidade.',
      de: 'Intensiv orange-rotes Fleisch mit hohem Omega-3-Gehalt. Im Ursprungsland eingefroren für höchste Qualität.',
      fr: 'Couleur orange-rouge intense et teneur élevée en graisses saines. Surgelé à l\'origine pour garantir une qualité optimale.'
    },
    description: {
      es: 'El Salmón Coho (Oncorhynchus kisutch) destaca por su textura firme, sabor suave característico y una coloración excepcional. Criado en los fiordos patagónicos bajo estrictas normativas ambientales. Tras la cosecha, es procesado y congelado de inmediato (IQF o Bloque) en plantas de alta tecnología para exportación, sirviendo a los exigentes mercados de sushi y retail de Europa, Asia y Norteamérica.',
      en: 'The Coho Salmon (Oncorhynchus kisutch) is known for its firm texture, characteristic mild flavor, and exceptional coloration. Raised in the cold waters of Patagonian fjords under strict environmental guidelines. Upon harvesting, it is immediately processed and frozen (IQF or Block) in high-tech facilities for export, serving demanding sushi and retail markets in Europe, Asia, and North America.',
      pt: 'O Salmão Coho (Oncorhynchus kisutch) destaca-se por sua textura firme, sabor suave característico e coloração excepcional. Criado nos fiordes patagônicos sob rígidas normas ambientais. Após a colheita, é processado e congelado imediatamente (IQF ou bloco) para exportação.',
      de: 'Der Coho-Lachs (Oncorhynchus kisutch) zeichnet sich durch seine feste Textur, seinen milden Geschmack und seine außergewöhnliche Farbe aus. Gezüchtet in den kalten Gewässern der patagonischen Fjorde. Nach der Ernte sofort verarbeitet und eingefroren (IQF oder Block) für den weltweiten Export.',
      fr: 'Le Saumon Coho (Oncorhynchus kisutch) se distingue par sa texture ferme, sa saveur douce caractéristique et sa coloration exceptionnelle. Élevé dans les fjords patagoniens sous des réglementations strictes. Après récolte, il est immédiatement traité et surgelé (IQF ou Bloc) dans des usines de haute technologie.'
    },
    techSheet: {
      presentation: {
        es: 'Entero eviscerado sin cabeza (HON) / Filetes Trim C, Trim D, Trim E (con o sin piel).',
        en: 'Whole gutted head-on (HON) / Fillets Trim C, Trim D, Trim E (skin-on or skinless).',
        pt: 'Inteiro eviscerado com cabeça (HON) / Filés Trim C, Trim D, Trim E (com ou sem pele).',
        de: 'Ganz ausgenommen mit Kopf (HON) / Filets Trim C, Trim D, Trim E (mit oder ohne Haut).',
        fr: 'Entier éviscéré avec tête (HON) / Filets Trim C, Trim D, Trim E (avec ou sans peau).'
      },
      catchZone: {
        es: 'Aguas frías del Pacífico Sur y Fiordos Patagónicos.',
        en: 'Cold waters of the South Pacific and Patagonian Fjords.',
        pt: 'Águas frias do Pacífico Sul e Fiordes Patagônicos.',
        de: 'Kalte Gewässer des Südpazifiks und patagonische Fjorde.',
        fr: 'Eaux froides du Pacifique Sud et fjords patagoniens.'
      },
      glazing: {
        es: '2% a 4% (Glaseado de protección para almacenamiento prolongado).',
        en: '2% to 4% (Protective glazing for long-term storage).',
        pt: '2% a 4% (Glaciamento protetor para armazenamento prolongado).',
        de: '2% bis 4% (Schutzglasur für die Langzeitlagerung).',
        fr: '2% à 4% (Vitrage de protection pour stockage prolongé).'
      },
      packaging: {
        es: 'Cajas master de cartón de 10 kg o 20 kg, piezas individuales con bolsa interfoliada (IVP).',
        en: '10 kg or 20 kg master cardboard cartons, individually vacuum-packed pieces (IVP).',
        pt: 'Caixas master de papelão de 10 kg ou 20 kg, peças individuais com saco interfolhado (IVP).',
        de: '10 kg oder 20 kg Masterkartons, einzeln vakuumverpackte Stücke (IVP).',
        fr: 'Cartons master de 10 kg ou 20 kg, pièces sous vide individuel (IVP).'
      }
    }
  },
  {
    slug: 'mejillon',
    scientificName: 'Mytilus edulis',
    category: 'frozen',
    images: ['/images/products/mejillon.png'],
    name: {
      es: 'Mejillón Entero de la Patagonia',
      en: 'Patagonian Blue Mussel',
      pt: 'Mexilhão Inteiro da Patagônia',
      de: 'Patagonische Miesmuschel',
      fr: 'Moule de Patagonie'
    },
    shortDescription: {
      es: 'Cultivado en aguas ultra-puras de la Patagonia. Carnoso, limpio, cocido y congelado de inmediato al vacío.',
      en: 'Cultivated in the ultra-pure waters of Patagonia. Meaty, clean, fully cooked, and vacuum-frozen immediately.',
      pt: 'Cultivado em águas ultra-puras da Patagônia. Mexilhão carnudo, limpo, cozido e congelado imediatamente a vácuo.',
      de: 'Gezüchtet in den ultrareinen Gewässern Patagoniens. Fleischig, sauber, gekocht und sofort vakuumgefroren.',
      fr: 'Cultivée dans les eaux ultra-pures de Patagonie. Charnue, propre, cuite et surgelée sous vide immédiatement.'
    },
    description: {
      es: 'El Mejillón Patagónico (Mytilus edulis) es cultivado de forma 100% natural en las corrientes frías y ricas en nutrientes del sur argentino. Destaca por su alta consistencia de carne, coloración anaranjada brillante y la ausencia total de arena. Cocido en su propio jugo al vapor y congelado ultra-rápido en sistemas IQF, mantiene un sabor a mar auténtico y una textura tierna de calidad premium.',
      en: 'The Patagonian Blue Mussel (Mytilus edulis) is raised in the cold, nutrient-dense ocean currents of southern South America. It is characterized by high meat yield, bright orange color, and a total absence of sand. Steam-cooked in its own natural juices and quick-frozen using IQF technology, it preserves a genuine sea flavor and premium tender texture.',
      pt: 'O Mexilhão Patagônico (Mytilus edulis) é cultivado de forma 100% natural nas correntes frias e ricas do sul. Destaca-se pelo alto rendimento de carne, cor alaranjada brilhante e ausência de areia. Cozido no vapor e congelado ultra-rápido em sistemas IQF.',
      de: 'Die patagonische Miesmuschel (Mytilus edulis) wird in den kalten, nährstoffreichen Strömungen Südpatagoniens gezüchtet. Sie zeichnet sich durch einen hohen Fleischanteil, eine leuchtend orange Farbe und absolute Sandfreiheit aus. Im eigenen Saft dampfgegart und schnellgefroren.',
      fr: 'La Moule de Patagonie (Mytilus edulis) est élevée de manière naturelle dans les courants froids et riches en nutriments du sud. Elle se distingue par un taux de chair élevé, une couleur orange vif et une absence totale de sable. Cuite à la vapeur dans son propre jus et surgelée ultra-rapidement.'
    },
    techSheet: {
      presentation: {
        es: 'Entero cocido en su jugo (al vacío) / Carne de mejillón IQF (Media valva u 100% carne).',
        en: 'Whole cooked in own juice (vacuum pack) / IQF mussel meat (Half-shell or 100% meat).',
        pt: 'Inteiro cozido no seu suco (a vácuo) / Carne de mexilhão IQF (Meia concha ou 100% carne).',
        de: 'Ganz, im eigenen Saft gekocht (vakuumverpackt) / IQF-Muschelfleisch (halbe Schale oder 100 % Fleisch).',
        fr: 'Entière cuite dans son jus (sous vide) / Chair de moule IQF (Demi-coquille ou 100% chair).'
      },
      catchZone: {
        es: 'Canales y aguas costeras frías de la Patagonia Argentina.',
        en: 'Cold channels and coastal waters of Argentine Patagonia.',
        pt: 'Canais e águas costeiras frias da Patagônia Argentina.',
        de: 'Kalte Kanäle und Küstengewässer des argentinischen Patagoniens.',
        fr: 'Canaux et eaux côtières froides de la Patagonie argentine.'
      },
      glazing: {
        es: '0% (Entero al vacío) / 5% a 8% (Carne IQF como protección).',
        en: '0% (Vacuum packed whole) / 5% to 8% (IQF meat for protection).',
        pt: '0% (Inteiro a vácuo) / 5% a 8% (Carne IQF como proteção).',
        de: '0% (Ganz vakuumverpackt) / 5% bis 8% (IQF-Fleisch zum Schutz).',
        fr: '0% (Entière sous vide) / 5% à 8% (Chair IQF pour protection).'
      },
      packaging: {
        es: 'Bolsas al vacío de 1 kg en caja de 10 kg, o bolsas master IQF a granel de 10 kg.',
        en: '1 kg vacuum bags in 10 kg boxes, or 10 kg bulk master IQF bags.',
        pt: 'Sacos a vácuo de 1 kg em caixas de 10 kg, ou sacos master IQF a granel de 10 kg.',
        de: '1 kg Vakuumbeutel in 10 kg Kartons oder 10 kg lose IQF-Masterbeutel.',
        fr: 'Sachets sous vide de 1 kg en carton de 10 kg, ou sacs master IQF en vrac de 10 kg.'
      }
    }
  },
  {
    slug: 'pulpo',
    scientificName: 'Octopus vulgaris',
    category: 'frozen',
    images: ['/images/products/pulpo.png'],
    name: {
      es: 'Pulpo del Atlántico Sur',
      en: 'Atlantic Octopus',
      pt: 'Polvo do Atlântico Sur',
      de: 'Südatlantischer Krake',
      fr: 'Poulpe de l\'Atlantique Sud'
    },
    shortDescription: {
      es: 'Pulpo entero de captura salvaje en el Atlántico Sur. Textura tierna e increíble firmeza al cocinarse.',
      en: 'Wild-caught whole octopus from the South Atlantic. Exceptionally tender texture and great firmness when cooked.',
      pt: 'Polvo inteiro de captura selvagem no Atlântico Sul. Textura macia e incrível firmeza ao cozinhar.',
      de: 'Wild gefangener ganzer Krake aus dem Südatlantik. Zarte Textur und hervorragende Konsistenz nach dem Kochen.',
      fr: 'Poulpe entier sauvage de l\'Atlantique Sud. Texture tendre et excellente fermeté après cuisson.'
    },
    description: {
      es: 'El Pulpo (Octopus vulgaris) del Atlántico Sur es capturado artesanalmente en fondos rocosos de aguas frías. Limpiado meticulosamente a mano y congelado de inmediato con tecnología de congelamiento rápido individual (IQF) para preservar la integridad de sus ventosas y evitar daños en su carne. Altamente valorado en la gastronomía premium de España, Italia y el mercado norteamericano por su sabor profundo y suavidad característica.',
      en: 'The South Atlantic Octopus (Octopus vulgaris) is wild-harvested along cold, rocky seabeds. Meticulously cleaned by hand and frozen using rapid individual technology to preserve the suction cups and flesh integrity. Highly regarded in premium Mediterranean and North American culinary markets for its deep flavor and characteristic tenderness.',
      pt: 'O Polvo (Octopus vulgaris) do Atlântico Sul é capturado de forma artesanal. Limpo meticulosamente à mão e congelado imediatamente com tecnologia rápida individual para preservar as ventosas e a qualidade da carne.',
      de: 'Der Südatlantische Krake (Octopus vulgaris) wird in felsigen Tiefen des kalten Wassers gefangen. Sorgfältig von Hand gereinigt und schnell gefroren, um die Saugnäpfe und Fleischqualität zu erhalten. Sehr gefragt in der Premium-Gastronomie.',
      fr: 'Le Poulpe (Octopus vulgaris) de l\'Atlantique Sud est pêché de façon artisanale. Nettoyé méticuleusement à la main et surgelé immédiatement pour préserver la qualité de la chair et des ventouses. Très apprécié dans la gastronomie.'
    },
    techSheet: {
      presentation: {
        es: 'Entero limpio (Eviscerado) / Tentáculos IQF individuales cocidos.',
        en: 'Whole cleaned (Gutted) / Cooked individual IQF tentacles.',
        pt: 'Inteiro limpo (Eviscerado) / Tentáculos IQF individuais cozidos.',
        de: 'Ganz gesäubert (ausgenommen) / Gekochte einzelne IQF-Tentakel.',
        fr: 'Entier nettoyé (Éviscéré) / Tentacules individuels IQF cuits.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Captura Artesanal de Altura.',
        en: 'Southwest Atlantic Ocean (FAO 41), Artisanal Offshore Catch.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Pesca Artesanal.',
        de: 'Südwestatlantik (FAO 41), handwerkliche Fischerei.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Pêche artisanale.'
      },
      glazing: {
        es: '3% a 5% (Glaseado protector de agua potable).',
        en: '3% to 5% (Potable water protective glazing).',
        pt: '3% a 5% (Glaciamento protetor de água potável).',
        de: '3% bis 5% (Schutzglasur).',
        fr: '3% à 5% (Vitrage de protection).'
      },
      packaging: {
        es: 'Bolsas individuales por pieza (IWP) en cajas master de 10 kg o 15 kg.',
        en: 'Individually wrapped pieces (IWP) in 10 kg or 15 kg master cartons.',
        pt: 'Sacos individuais por peça (IWP) em caixas master de 10 kg ou 15 kg.',
        de: 'Einzeln verpackte Stücke (IWP) in 10 kg oder 15 kg Masterkartons.',
        fr: 'Pièces sous sachet individuel (IWP) en cartons master de 10 kg ou 15 kg.'
      }
    }
  },
  {
    slug: 'besugo',
    scientificName: 'Pagellus bogaraveo',
    category: 'fresh',
    images: ['/images/products/merluza-2.jpg'],
    name: {
      es: 'Besugo Premium del Atlántico',
      en: 'Premium Red Seabream',
      pt: 'Goraz Premium do Atlântico',
      de: 'Rote Meerbrasse Premium',
      fr: 'Dorade Rose Premium'
    },
    shortDescription: {
      es: 'Pescado semigraso de carne blanca y fina, muy delicada y sabrosa, altamente apreciado en la cocina tradicional europea.',
      en: 'Semi-fatty white fish with fine, delicate, and flavorful flesh, highly prized in traditional European cuisine.',
      pt: 'Peixe semigordo de carne branca e fina, muito delicada e saborosa, altamente apreciado na culinária tradicional europeia.',
      de: 'Halbfetter Weißfisch mit feinem, delikatem und geschmackvollem Fleisch, sehr geschätzt in der traditionellen Küche.',
      fr: 'Poisson demi-gras à chair blanche et fine, très délicate et savoureuse, très apprécié dans la cuisine traditionnelle.'
    },
    description: {
      es: 'El Besugo (Pagellus bogaraveo) es una especie marina muy apreciada en la gastronomía mediterránea. Su carne, de consistencia firme pero tierna y sabor fino, posee un excelente perfil nutricional. Capturado de forma selectiva por nuestra flota costera en el Atlántico Sur, se procesa bajo rigurosos controles térmicos y se despacha refrigerado vía aérea de forma inmediata, llegando a destino con el brillo metálico y frescura de su origen intactos.',
      en: 'The Red Seabream (Pagellus bogaraveo) is a highly valued marine species in Mediterranean gastronomy. Its flesh, firm yet tender with a fine flavor, features an excellent nutritional profile. Wild-harvested selectively by our coastal fleet in the South Atlantic, it is processed under strict temperature controls and shipped chilled by air immediately, arriving with its natural metallic sheen and original freshness.',
      pt: 'O Goraz (Pagellus bogaraveo) é uma espécie marinha muito apreciada na gastronomia. Sua carne firme e de sabor delicado possui excelente perfil nutricional. Capturado de forma seletiva, é despachado refrigerado por via aérea imediatamente.',
      de: 'Die Rote Meerbrasse (Pagellus bogaraveo) ist in der mediterranen Küche äußerst beliebt. Ihr Fleisch ist fest, aber zart und fein im Geschmack. Selektiv gefangen im Südatlantik, gekühlt und sofort per Luftfracht versandt.',
      fr: 'La Dorade Rose (Pagellus bogaraveo) est une espèce marine très estimée dans la gastronomie. Sa chair, ferme mais tendre et au goût délicat, possède un excellent profil nutritionnel. Capturée de façon sélective et expédiée fraîche par avion.'
    },
    techSheet: {
      presentation: {
        es: 'Entero con escamas eviscerado (G&G) / Filetes con piel interfoliados.',
        en: 'Whole scaled & gutted (G&G) / Skin-on interleaved fillets.',
        pt: 'Inteiro com escamas eviscerado (G&G) / Filés com pele interfolhados.',
        de: 'Ganz, geschuppt & ausgenommen (G&G) / Filets mit Haut.',
        fr: 'Entière écaillée et éviscérée (G&G) / Filets avec peau avec intercalaires.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Plataforma Costera Bonaerense.',
        en: 'Southwest Atlantic Ocean (FAO 41), Coastal Argentine Shelf.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Plataforma Costeira.',
        de: 'Südwestatlantik (FAO 41), argentinischer Küstenschelf.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Plateau côtier d\'Argentine.'
      },
      glazing: {
        es: '0% (Producto refrigerado fresco sobre hielo).',
        en: '0% (Fresh chilled product on ice).',
        pt: '0% (Produto refrigerado fresco sobre gelo).',
        de: '0% (Frisch gekühltes Produkt auf Eis).',
        fr: '0% (Produit frais réfrigéré sur glace).'
      },
      packaging: {
        es: 'Cajas de EPS (Isopor) de 6 kg o 10 kg con gel refrigerante y bolsa de polietileno sellada.',
        en: '6 kg or 10 kg EPS boxes with gel refrigerants and sealed polyethylene liners.',
        pt: 'Caixas EPS de 6 kg ou 10 kg com gel refrigerante e saco de polietileno selado.',
        de: '6 kg oder 10 kg EPS-Boxen mit Gel-Kühlpacks und versiegeltem Polybeutel.',
        fr: 'Caisses EPS de 6 kg ou 10 kg avec gel réfrigérant et sac polyéthylène scellé.'
      }
    }
  },
  {
    slug: 'abadejo',
    scientificName: 'Genypterus blacodes',
    category: 'fresh',
    images: ['/images/products/merluza-1.jpg'],
    name: {
      es: 'Abadejo de la Patagonia',
      en: 'Pink Cusk-Eel (Patagonian Kingclip)',
      pt: 'Congro-Rosa da Patagônia (Abadejo)',
      de: 'Patagonischer Kingklip',
      fr: 'Abadeche du Cap (Congre Rose)'
    },
    shortDescription: {
      es: 'Pescado blanco magro de carne firme y sabor suave, muy demandado por su gran rendimiento en filetes limpios.',
      en: 'Lean white fish with firm flesh and mild flavor, highly in-demand for its superb yield of clean fillets.',
      pt: 'Peixe branco magro de carne firme e sabor suave, muito procurado pelo excelente rendimento em filés limpos.',
      de: 'Magerer Weißfisch mit festem Fleisch und mildem Geschmack, sehr gefragt wegen seiner hervorragenden Ausbeute.',
      fr: 'Poisson blanc maigre à chair ferme et saveur douce, très recherché pour son excellent rendement en filets propres.'
    },
    description: {
      es: 'El Abadejo (Genypterus blacodes) destaca entre los pescados blancos del Atlántico Sur por su firmeza excepcional y ausencia de espinas intramusculares en el lomo. Su carne blanca admite preparaciones diversas, desde cocina gourmet a la plancha hasta cocciones prolongadas. Capturado por nuestra flota de arrastre selectiva en la Patagonia profunda, garantizamos una línea fresca aérea inmediata y congelado IQF en tierra con los más altos estándares alimentarios.',
      en: 'The Pink Cusk-Eel (Genypterus blacodes) stands out among South Atlantic white fish for its exceptional firmness and absence of pinbones. Its pristine white meat adapts to various culinary methods, from high-end searing to slow poaching. Harvested by our selective trawlers in deep Patagonian waters, we guarantee a top-tier airfreight fresh line and land-frozen IQF options.',
      pt: 'O Congro-Rosa (Genypterus blacodes) destaca-se por sua firmeza excepcional e ausência de espinhas no lombo. Carne branca versátil de altíssima qualidade. Capturado de forma seletiva e disponível em linha fresca aérea imediata.',
      de: 'Der Pink Kingklip (Genypterus blacodes) besticht durch seine außergewöhnliche Festigkeit und Grätenfreiheit im Rückenfilet. Sehr vielseitig in der Zubereitung. Gefangen in tiefen Gewässern Patagoniens, frisch per Luftfracht.',
      fr: 'L\'Abadeche (Genypterus blacodes) se distingue parmi les poissons blancs par sa fermeté exceptionnelle et l\'absence d\'arêtes. Chair blanche de qualité supérieure. Capturé par chalutage sélectif et disponible en frais aérien.'
    },
    techSheet: {
      presentation: {
        es: 'Filetes sin piel ni espinas (PBI/PBO) / Troncos HGT.',
        en: 'Skinless & Boneless Fillets (PBI/PBO) / HGT portions.',
        pt: 'Filés sem pele e sem espinhas (PBI/PBO) / Troncos HGT.',
        de: 'Hautlose & grätenfreie Filets (PBI/PBO) / HGT-Portionen.',
        fr: 'Filets sans peau et sans arêtes (PBI/PBO) / Tronçons HGT.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Plataforma Patagónica Profunda.',
        en: 'Southwest Atlantic Ocean (FAO 41), Deep Patagonian Shelf.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Plataforma Patagônica Profunda.',
        de: 'Südwestatlantik (FAO 41), tiefer patagonischer Schelf.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Plateau continental profond.'
      },
      glazing: {
        es: '0% para fresco / 3% a 5% para congelados individualmente.',
        en: '0% for fresh / 3% to 5% for individually frozen products.',
        pt: '0% para frescos / 3% a 5% para congelados individualmente.',
        de: '0% für Frischfisch / 3% bis 5% für einzeln gefrorene Ware.',
        fr: '0% pour le frais / 3% à 5% pour les produits surgelés individuellement.'
      },
      packaging: {
        es: 'Fresco: Cajas EPS de 12 kg con hielo seco / Congelado: Cajas master de 15 kg con estuches de 1 kg.',
        en: 'Fresh: 12 kg EPS boxes with dry ice packs / Frozen: 15 kg master cartons with 1 kg inner boxes.',
        pt: 'Fresco: Caixas EPS de 12 kg com gelo seco / Congelado: Caixas master de 15 kg com estojos de 1 kg.',
        de: 'Frisch: 12 kg EPS-Boxen mit Trockeneis / Gefroren: 15 kg Masterkarton mit 1 kg Faltschachteln.',
        fr: 'Frais : Caisses EPS de 12 kg avec glace sèche / Surgelé : Cartons master de 15 kg avec étuis de 1 kg.'
      }
    }
  },
  {
    slug: 'sardina',
    scientificName: 'Sardina pilchardus',
    category: 'frozen',
    images: ['/images/products/sardina.png'],
    name: {
      es: 'Sardina Premium del Atlántico',
      en: 'Premium European Sardine',
      pt: 'Sardinha Premium do Atlântico',
      de: 'Premium Sardine',
      fr: 'Sardine Premium de l\'Atlantique'
    },
    shortDescription: {
      es: 'Pescado azul rico en omega-3 y de sabor intenso. Excelente rendimiento comercial para conserveras e importadores.',
      en: 'Omega-3 rich blue fish with intense flavor. Excellent commercial yield for canning industries and B2B importers.',
      pt: 'Peixe azul rico em ômega-3 e de sabor intenso. Excelente rendimento comercial para conserveiras e importadores.',
      de: 'Omega-3-reicher Fettfisch mit intensivem Geschmack. Hervorragende Ausbeute für die Konservenindustrie und B2B.',
      fr: 'Poisson bleu riche en oméga-3 et au goût intense. Excellent rendement commercial pour les conserveries.'
    },
    description: {
      es: 'La Sardina del Atlántico (Sardina pilchardus) es capturada en cardúmenes costeros de forma sostenible. Muy demandada tanto por el sector minorista gourmet como por la industria de enlatado global por su alto contenido graso saludable, jugosidad de carne y calibre homogéneo. Procesada y congelada a bordo en bloques con film de polietileno de forma inmediata para bloquear sus características nutritivas.',
      en: 'The Atlantic Sardine (Sardina pilchardus) is sustainably wild-harvested in coastal waters. Highly requested by both the gourmet retail sector and the global canning industry due to its rich healthy fat content, juicy flesh, and highly homogeneous grading. Block-frozen at sea immediately with protective polyethylene film to lock in its rich nutritional properties.',
      pt: 'A Sardinha do Atlântico (Sardina pilchardus) é capturada de forma sustentável. Muito demandada para o varejo gourmet e conserveiras devido ao alto teor de gorduras saudáveis. Congelada em bloco imediatamente a bordo.',
      de: 'Die Sardine (Sardina pilchardus) wird nachhaltig in Küstengewässern gefangen. Sehr gefragt im Gourmetbereich und der Konservenindustrie wegen des gesunden Fettgehalts. Sofort an Bord blockgefroren.',
      fr: 'La Sardine (Sardina pilchardus) est capturée de manière durable. Très demandée par le secteur gourmet et la conserverie pour sa richesse en oméga-3. Surgelée en bloc immédiatement à bord.'
    },
    techSheet: {
      presentation: {
        es: 'Entero eviscerado (HGT) / Entero con cabeza congelado en bloque de calibre homogéneo (12-14 cm).',
        en: 'Headed, Gutted (HGT) / Whole round block-frozen with homogeneous grading (12-14 cm).',
        pt: 'Eviscerado (HGT) / Inteiro congelado em bloco de calibre homogêneo (12-14 cm).',
        de: 'Ohne Kopf & ausgenommen (HGT) / Ganz blockgefroren in homogener Sortierung (12-14 cm).',
        fr: 'Éviscérée (HGT) / Entière surgelée en bloc de calibre homogène (12-14 cm).'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Captura Costera Pelágica.',
        en: 'Southwest Atlantic Ocean (FAO 41), Coastal Pelagic Catch.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Pesca Costeira Pelágica.',
        de: 'Südwestatlantik (FAO 41), Küsten-pelagischer Fang.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Pêche côtière pélagique.'
      },
      glazing: {
        es: '3% a 5% (Glaseado protector de superficie).',
        en: '3% to 5% (Protective surface glazing).',
        pt: '3% a 5% (Glaciamento protetor de superfície).',
        de: '3% bis 5% (Schutzglasur).',
        fr: '3% à 5% (Vitrage de protection).'
      },
      packaging: {
        es: 'Bloques congelados de 10 kg embalados en bolsas master o cajas de cartón.',
        en: '10 kg frozen blocks packed in master bags or cardboard cartons.',
        pt: 'Blocos congelados de 10 kg embalados em sacos master ou caixas de papelão.',
        de: '10 kg gefrorene Blöcke, verpackt in Mastersäcken oder Umkartons.',
        fr: 'Blocs surgelés de 10 kg conditionnés en sacs master ou en cartons.'
      }
    }
  },
  {
    slug: 'pejerrey',
    scientificName: 'Odontesthes regia',
    category: 'fresh',
    images: ['/images/products/sardina.png'],
    name: {
      es: 'Pejerrey del Atlántico',
      en: 'Silverside (Pejerrey)',
      pt: 'Peixe-Rei do Atlântico (Pejerrey)',
      de: 'Ährenfisch (Pejerrey)',
      fr: 'Athérine (Pejerrey)'
    },
    shortDescription: {
      es: 'Pescado blanco pequeño de carne muy suave y delicada, ideal para frituras gourmet y consumo tradicional en Sudamérica.',
      en: 'Small white fish with very mild and delicate meat, ideal for gourmet frying and traditional South American dishes.',
      pt: 'Peixe branco pequeno de carne muito suave e delicada, ideal para frituras gourmet e consumo tradicional.',
      de: 'Kleiner Weißfisch mit sehr mildem und zartem Fleisch, ideal zum Frittieren und für traditionelle Gerichte.',
      fr: 'Petit poisson blanc à chair très douce et délicate, idéal pour la friture gourmet.'
    },
    description: {
      es: 'El Pejerrey (Odontesthes regia) es un pescado de escasa grasa y carne excepcionalmente blanca y blanda. Muy consumido en el Cono Sur por su ductilidad culinaria. Capturado selectivamente en lagunas costeras y aguas estuariales del Atlántico Sur por nuestra flota de bajura. Se despacha de inmediato refrigerado sobre escamas de hielo para garantizar una calidad organoléptica óptima en destino.',
      en: 'The Silverside or Pejerrey (Odontesthes regia) is a low-fat fish with exceptionally white and tender flesh. Highly consumed in southern South America due to its culinary versatility. Wild-caught selectively in coastal estuaries of the South Atlantic by our small-scale fleet. Shipped immediately chilled on flake ice to guarantee premium freshness at destination.',
      pt: 'O Peixe-Rei (Odontesthes regia) é um peixe de baixo teor de gordura e carne muito branca. Capturado de forma artesanal nas lagunas costeiras do Atlântico Sul, despachado imediatamente sobre gelo.',
      de: 'Der Ährenfisch oder Pejerrey (Odontesthes regia) ist ein fettarmer Fisch mit weißem, zartem Fleisch. Wild gefangen in den Küstengewässern des Südatlantiks. Sofort gekühlt versandt für absolute Frische.',
      fr: 'Le Pejerrey (Odontesthes regia) est un poisson maigre à chair très blanche et tendre. Capturé de manière sélective dans les estuaires de l\'Atlantique Sud et expédié immédiatement sur glace.'
    },
    techSheet: {
      presentation: {
        es: 'Entero eviscerado sin escamas / Filet "mariposa" sin espinas.',
        en: 'Whole scaled & gutted / Butterfly boneless fillets.',
        pt: 'Inteiro eviscerado sem escamas / Filé "borboleta" sem espinhas.',
        de: 'Ganz, geschuppt & ausgenommen / Schmetterlingsfilet grätenfrei.',
        fr: 'Entier écaillé et éviscéré / Filet "papillon" sans arêtes.'
      },
      catchZone: {
        es: 'Atlántico Sudoccidental (FAO 41), Aguas Estuariales Bonaerenses.',
        en: 'Southwest Atlantic Ocean (FAO 41), Coastal Estuarine Zones.',
        pt: 'Oceano Atlântico Sudoeste (FAO 41), Águas Costeiras e Estuários.',
        de: 'Südwestatlantik (FAO 41), Küsten- und Mündungsgebiete.',
        fr: 'Atlantique Sud-Ouest (FAO 41), Zones estuariennes côtières.'
      },
      glazing: {
        es: '0% (Producto fresco en cadena de refrigeración continua).',
        en: '0% (Fresh product in continuous chilled chain).',
        pt: '0% (Produto fresco em cadeia de refrigeração contínua).',
        de: '0% (Frische Ware in durchgehender Kühlkette).',
        fr: '0% (Produit frais sous chaîne de réfrigération continue).'
      },
      packaging: {
        es: 'Cajas de EPS (Isopor) de 5 kg con gel refrigerante y bolsa protectora.',
        en: '5 kg EPS boxes with gel ice packs and protective liners.',
        pt: 'Caixas EPS de 5 kg com gel refrigerante e saco protetor.',
        de: '5 kg EPS-Boxen mit Gel-Eispacks und Schutzfolie.',
        fr: 'Caisses EPS de 5 kg avec gel réfrigérant et sachet de protection.'
      }
    }
  }
];
