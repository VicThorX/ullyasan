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
      de: 'Der Argentinische Seehecht (Merluccius hubbsi) ist der bekannteste Weißfisch Argentiniens. Sein mageres, fast durchscheinendes weißes Fleisch zeichnet sich durch einen milden Geschmack und eine zarte Textur aus. Auf dem patagonischen Schelf gefangen, wird er unter strenger Kälteüberwachung verarbeitet. Wir bieten schnellen Luftfrachtversand für frischen, ausgenommenen Fisch ohne Kopf (HGT) sowie an Land gefrorene, einzeln geschichtete Filets (interleaved) für den Großhandel.',
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
  }
];
