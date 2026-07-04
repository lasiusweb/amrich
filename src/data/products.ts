export interface Product {
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  application: string;
  dosage: string;
  targetSpecies: string[];
  packaging: string;
  faqs: { question: string; answer: string }[];
}

export interface ProductCategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  gradient: string;
  badgeText: string;
  metaTitle: string;
  metaDescription: string;
  products: Product[];
}

export const categories: ProductCategory[] = [
  {
    name: 'Disease & Stress Management',
    slug: 'disease-stress-management',
    icon: '🛡️',
    description: 'Advanced treatments and preventive solutions to protect aquaculture stock from common diseases and environmental stress.',
    heroTitle: 'Protect Your Stock',
    heroDescription: 'Advanced treatments and preventive solutions to safeguard your aquaculture operations against disease outbreaks and environmental stress.',
    gradient: 'from-primary-800 to-primary-900',
    badgeText: 'text-aqua-300',
    metaTitle: 'Disease & Stress Management Products | AMRich Aquaculture',
    metaDescription: 'Advanced treatments and preventive solutions to protect your aquaculture stock from common diseases including WSSV, EMS, and Vibrio infections.',
    products: [
      {
        name: 'Immuno-Boost Pro',
        slug: 'immuno-boost-pro',
        icon: '💊',
        shortDescription: 'Advanced immune system stimulant that enhances natural defense mechanisms in fish and shrimp.',
        description: 'Immuno-Boost Pro is a scientifically formulated immune system stimulant designed to enhance the natural defense mechanisms in fish and shrimp. Using a proprietary blend of beta-glucans, vitamins, and trace minerals, this product activates the innate immune response, providing broad-spectrum protection against common aquaculture pathogens. Ideal for pre-emptive disease prevention, it can be administered through feed or water application.',
        features: ['Enhances immune response', 'Safe for all species', 'No withdrawal period', 'Feed or water application'],
        application: 'Mix 2-3g per kg of feed and distribute evenly. For water application, apply 1 kg per hectare of pond surface area. Administer 7-10 days before expected stress periods such as stocking, transfer, or seasonal temperature changes.',
        dosage: '2-3 g/kg feed or 1 kg/ha water application',
        targetSpecies: ['Shrimp', 'Fish', 'Crustaceans'],
        packaging: '100g, 500g, 1kg pouches',
        faqs: [
          { question: 'How long before stocking should I start using Immuno-Boost Pro?', answer: 'We recommend starting 7-10 days before stocking to allow the immune system to build optimal defense levels.' },
          { question: 'Can Immuno-Boost Pro be used with other medications?', answer: 'Yes, it is compatible with most treatments. However, avoid using simultaneously with antibiotics — allow 48 hours between applications.' },
        ],
      },
      {
        name: 'Vibrio Shield',
        slug: 'vibrio-shield',
        icon: '🧬',
        shortDescription: 'Targeted antimicrobial solution specifically formulated to combat Vibrio bacteria infections.',
        description: 'Vibrio Shield is a targeted antimicrobial solution specifically formulated to combat Vibrio bacteria infections in aquaculture environments. Using natural antimicrobial compounds, it provides broad-spectrum activity against Vibrio species while remaining environmentally safe. The fast-acting formula begins working within hours of application, making it ideal for both prevention and early-stage treatment of Vibrio infections.',
        features: ['Broad-spectrum activity', 'Environmentally safe', 'Fast-acting formula', 'Natural compounds'],
        application: 'Dissolve 1 kg per 1,000 cubic meters of pond water. For severe infections, repeat application after 48 hours. Best applied in the morning when water temperature is rising.',
        dosage: '1 kg per 1,000 m³ water',
        targetSpecies: ['Shrimp', 'Fish'],
        packaging: '500g, 1kg, 5kg containers',
        faqs: [
          { question: 'How quickly does Vibrio Shield work?', answer: 'Initial action begins within 2-4 hours. Full effectiveness is achieved within 24 hours of application.' },
          { question: 'Is Vibrio Shield safe for biofloc systems?', answer: 'Yes, Vibrio Shield is designed to target pathogenic Vibrio species while minimizing impact on beneficial bacterial communities.' },
        ],
      },
      {
        name: 'Stress-Away Plus',
        slug: 'stress-away-plus',
        icon: '🌿',
        shortDescription: 'Natural stress-reducing compound that helps aquatic species cope with environmental changes.',
        description: 'Stress-Away Plus is a natural, plant-based stress-reducing compound that helps aquatic species cope with environmental changes, handling, and transport stress. Formulated with herbal extracts and electrolytes, it reduces cortisol levels and supports recovery from stress events. Regular use improves survival rates, enhances growth performance, and reduces susceptibility to disease.',
        features: ['Reduces cortisol levels', 'Plant-based formula', 'Improves survival rates', 'Enhances recovery'],
        application: 'Add 5 ml per 100 liters of water during stress events. For feed application, mix 10 ml per kg of feed. Use during transport, harvesting, pond preparation, or any handling event.',
        dosage: '5 ml/100L water or 10 ml/kg feed',
        targetSpecies: ['Shrimp', 'Fish', 'Crustaceans'],
        packaging: '250ml, 1L, 5L bottles',
        faqs: [
          { question: 'How often can I use Stress-Away Plus?', answer: 'It can be used daily during stress periods. For routine prevention, apply once weekly or before anticipated stress events.' },
          { question: 'Does it affect water quality?', answer: 'No, Stress-Away Plus is biodegradable and does not impact water quality parameters.' },
        ],
      },
      {
        name: 'WSSV Prevention Kit',
        slug: 'wssv-prevention-kit',
        icon: '🔬',
        shortDescription: 'Comprehensive prevention package designed to protect shrimp farms from White Spot Syndrome Virus.',
        description: 'The WSSV Prevention Kit is a comprehensive prevention package designed to protect shrimp farms from White Spot Syndrome Virus (WSSV) outbreaks. This multi-component system includes immune stimulants, water quality enhancers, and monitoring tools to create a complete biosecurity barrier. Field-tested across hundreds of farms in Southeast Asia, it provides reliable protection against one of the most devastating shrimp diseases.',
        features: ['Complete prevention system', 'Field-tested formula', 'Includes monitoring tools', 'Multi-component approach'],
        application: 'Apply components as directed in the included manual. Start the prevention program 14 days before stocking and continue throughout the grow-out period. Monitor water quality parameters using the included test kits.',
        dosage: 'Follow included manual for multi-step protocol',
        targetSpecies: ['Shrimp', 'Prawns'],
        packaging: 'Complete kit (treats 1 hectare)',
        faqs: [
          { question: 'What does the WSSV Prevention Kit include?', answer: 'The kit includes immune stimulants, water quality enhancers, pond preparation agents, and water testing kits for monitoring critical parameters.' },
          { question: 'How effective is the kit against WSSV?', answer: 'In field trials across Southeast Asia, the kit reduced WSSV outbreak incidence by over 85% when used as directed.' },
        ],
      },
    ],
  },
  {
    name: 'Feed & Pond Preparers',
    slug: 'feed-pond-preparers',
    icon: '🐟',
    description: 'Premium feed supplements and pond preparation products to optimize growth conditions and nutritional intake for aquaculture.',
    heroTitle: 'Optimize Growth',
    heroDescription: 'Premium feed supplements and pond preparation products designed to maximize growth rates and nutritional efficiency in your aquaculture operations.',
    gradient: 'from-forest-800 to-forest-900',
    badgeText: 'text-aqua-300',
    metaTitle: 'Feed & Pond Preparers Products | AMRich Aquaculture',
    metaDescription: 'Premium feed supplements and pond preparation products to optimize growth conditions and nutritional intake for aquaculture operations.',
    products: [
      {
        name: 'Growth-Boost Formula',
        slug: 'growth-boost-formula',
        icon: '📈',
        shortDescription: 'High-performance feed supplement enriched with essential amino acids, vitamins, and minerals.',
        description: 'Growth-Boost Formula is a high-performance feed supplement enriched with essential amino acids, vitamins, and minerals to accelerate growth rates in aquaculture species. Scientifically balanced to complement standard feed formulations, it improves feed conversion ratios (FCR) by up to 30% while enhancing natural coloration. The result is faster market-ready sizes and improved farm profitability.',
        features: ['30% faster growth', 'Improved FCR', 'Enhanced color', 'Essential nutrients'],
        application: 'Mix 15-20g per kg of feed. Combine thoroughly with feed before distribution. Use throughout the grow-out period for best results.',
        dosage: '15-20 g/kg feed',
        targetSpecies: ['Shrimp', 'Fish', 'Tilapia'],
        packaging: '500g, 1kg, 5kg bags',
        faqs: [
          { question: 'How much improvement in FCR can I expect?', answer: 'Field trials show 20-30% improvement in FCR when used consistently throughout the grow-out period.' },
          { question: 'When should I start using Growth-Boost Formula?', answer: 'Start from the first week of stocking for maximum benefit. It can also be introduced at any stage.' },
        ],
      },
      {
        name: 'Pond Prep Elite',
        slug: 'pond-prep-elite',
        icon: '🌱',
        shortDescription: 'Complete pond preparation solution that establishes beneficial microorganism populations.',
        description: 'Pond Prep Elite is a complete pond preparation solution that establishes beneficial microorganism populations before stocking. This powerful blend of nitrifying bacteria, decomposing enzymes, and pH stabilizers creates an optimal environment for aquaculture species from day one. It suppresses pathogenic organisms, reduces toxic compounds, and builds a healthy biological foundation for your pond.',
        features: ['Rapid colonization', 'Pathogen suppression', 'pH stabilization', 'Biological foundation'],
        application: 'Apply 5 kg per hectare 7-14 days before stocking. Distribute evenly across the dried pond bottom. Fill pond to 30cm and maintain for 5-7 days before final filling.',
        dosage: '5 kg per hectare',
        targetSpecies: ['Shrimp', 'Fish'],
        packaging: '1kg, 5kg, 25kg bags',
        faqs: [
          { question: 'How long before stocking should I apply Pond Prep Elite?', answer: 'Apply 7-14 days before stocking. This gives beneficial bacteria time to establish and create optimal conditions.' },
          { question: 'Can I use it in existing ponds with water?', answer: 'For best results, apply to drained and dried pond bottoms. For top-up applications, reduce dosage to 2 kg per hectare.' },
        ],
      },
      {
        name: 'Feed Enzyme Plus',
        slug: 'feed-enzyme-plus',
        icon: '🧫',
        shortDescription: 'Digestive enzyme supplement that improves nutrient absorption and reduces feed waste.',
        description: 'Feed Enzyme Plus is a digestive enzyme supplement that improves nutrient absorption and reduces feed waste in aquaculture systems. By enhancing the breakdown of proteins, fats, and carbohydrates, it allows fish and shrimp to extract more nutrition from every pellet. This means less wasted feed, cleaner water, and better growth rates — a win for both profitability and environmental sustainability.',
        features: ['Better digestion', 'Less waste', 'Cost effective', 'Cleaner water'],
        application: 'Add 10g per kg of feed. Mix thoroughly before distribution. Can be combined with other feed supplements.',
        dosage: '10 g/kg feed',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        packaging: '250g, 500g, 1kg pouches',
        faqs: [
          { question: 'Will Feed Enzyme Plus affect water quality?', answer: 'Yes, positively — by improving digestion, it reduces uneaten feed and fecal waste, leading to cleaner water.' },
          { question: 'Can I mix it with other supplements?', answer: 'Yes, Feed Enzyme Plus is compatible with all AMRich feed supplements and most third-party products.' },
        ],
      },
      {
        name: 'Starter Feed Premix',
        slug: 'starter-feed-premix',
        icon: '🐟',
        shortDescription: 'Specialized nutrition package for larval and juvenile stages.',
        description: 'Starter Feed Premix is a specialized nutrition package designed for larval and juvenile stages to ensure a strong start and high survival rates. Packed with essential fatty acids, proteins, vitamins, and probiotics, it supports rapid development during the critical early life stages when mortality risk is highest. The fine particle size ensures easy consumption by small mouths.',
        features: ['Larval nutrition', 'High survival', 'Easy application', 'Essential fatty acids'],
        application: 'Mix 20g per kg of starter feed. Administer 4-6 times daily in small quantities. Ensure even distribution across the rearing tank or pond.',
        dosage: '20 g/kg starter feed',
        targetSpecies: ['Shrimp larvae', 'Fish fry', 'Crustacean juveniles'],
        packaging: '100g, 250g, 500g pouches',
        faqs: [
          { question: 'At what stage should I start using Starter Feed Premix?', answer: 'Begin from the first feeding stage (zoea/post-larvae for shrimp, yolk-sac fry for fish) for maximum benefit.' },
          { question: 'How many times per day should I feed?', answer: 'Feed 4-6 times daily in small amounts. The goal is consistent nutrition without overloading the system.' },
        ],
      },
    ],
  },
  {
    name: 'Probiotics & Soil Care',
    slug: 'probiotics-soil-care',
    icon: '🦠',
    description: 'Beneficial microorganism formulations and soil treatment solutions for healthier pond ecosystems in aquaculture.',
    heroTitle: 'Healthy Ecosystems',
    heroDescription: 'Beneficial microorganism formulations and soil treatment solutions that create thriving pond ecosystems for optimal aquaculture productivity.',
    gradient: 'from-aqua-600 to-aqua-800',
    badgeText: 'text-white',
    metaTitle: 'Probiotics & Soil Care Products | AMRich Aquaculture',
    metaDescription: 'Beneficial microorganism formulations and soil treatment solutions for healthier pond ecosystems and improved aquaculture productivity.',
    products: [
      {
        name: 'AquaBio Pro',
        slug: 'aquabio-pro',
        icon: '🧬',
        shortDescription: 'Multi-strain probiotic blend specifically designed for aquaculture.',
        description: 'AquaBio Pro is a multi-strain probiotic blend specifically designed for aquaculture applications. With 5 billion CFU per gram of carefully selected bacterial strains, it colonizes the gut and water column with beneficial microorganisms. These probiotics improve feed digestion, enhance immune function, suppress pathogenic bacteria, and break down organic waste — leading to better water quality, improved growth rates, and higher survival.',
        features: ['5 billion CFU/g', 'Multi-strain formula', 'Heat stable', 'Gut and water colonization'],
        application: 'For feed application: mix 5g per kg of feed. For water application: apply 1 kg per hectare every 2 weeks. Best applied in the morning with aeration.',
        dosage: '5 g/kg feed or 1 kg/ha biweekly',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        packaging: '100g, 500g, 1kg foil pouches',
        faqs: [
          { question: 'How often should I apply AquaBio Pro?', answer: 'For water application, apply every 2 weeks. For feed application, use daily for best results.' },
          { question: 'Does AquaBio Pro need refrigeration?', answer: 'No, the spore-forming bacteria are heat stable. Store in a cool, dry place away from direct sunlight.' },
        ],
      },
      {
        name: 'Soil Renew',
        slug: 'soil-renew',
        icon: '🌍',
        shortDescription: 'Comprehensive soil treatment that breaks down organic matter and restores pond bottom health.',
        description: 'Soil Renew is a comprehensive soil treatment that breaks down organic matter, reduces toxic gases, and restores pond bottom health. Using a potent blend of cellulolytic bacteria and enzymes, it decomposes accumulated sludge, neutralizes hydrogen sulfide and ammonia, and restores the natural buffering capacity of pond soil. Essential for maintaining productive ponds between harvest cycles.',
        features: ['Organic matter decomposition', 'Gas reduction', 'pH neutralizer', 'Sludge reduction'],
        application: 'Apply 10 kg per hectare to drained pond bottoms. Spread evenly and allow 5-7 days of drying before filling. For ponds with heavy sludge, repeat application.',
        dosage: '10 kg per hectare',
        targetSpecies: ['All aquaculture ponds'],
        packaging: '1kg, 5kg, 25kg bags',
        faqs: [
          { question: 'How often should I use Soil Renew?', answer: 'Use during each pond preparation cycle (between harvests). For ponds with heavy organic loading, consider mid-culture application at reduced dosage.' },
          { question: 'Can I use it in ponds with standing water?', answer: 'For best results, apply to drained and dried pond bottoms. Water application is possible at 3 kg/ha but is less effective.' },
        ],
      },
      {
        name: 'BioFloc Starter',
        slug: 'biofloc-starter',
        icon: '🌿',
        shortDescription: 'Biofloc technology starter that promotes beneficial bacterial growth.',
        description: 'BioFloc Starter is a biofloc technology starter that promotes beneficial bacterial growth for improved water quality and supplemental nutrition. It provides the carbon source and microbial inoculant needed to establish and maintain stable biofloc systems. The resulting floc particles serve as a continuous supplemental food source, improving growth while maintaining excellent water quality.',
        features: ['Carbon source', 'Floc formation', 'Protein rich', 'Supplemental nutrition'],
        application: 'Add 2 kg per hectare to initiate floc formation. Maintain carbon-to-nitrogen ratio above 15:1. Apply weekly to maintain floc density.',
        dosage: '2 kg/ha initial, 1 kg/ha weekly maintenance',
        targetSpecies: ['Shrimp', 'Tilapia'],
        packaging: '500g, 1kg, 5kg bags',
        faqs: [
          { question: 'How long does it take for biofloc to develop?', answer: 'Initial floc formation begins within 3-5 days. Stable biofloc systems are typically established within 2-3 weeks.' },
          { question: 'What water parameters are important for biofloc?', answer: 'Maintain temperature above 25°C, alkalinity above 150 mg/L, and DO above 4 mg/L for optimal floc development.' },
        ],
      },
      {
        name: 'NitriGuard',
        slug: 'nitriguard',
        icon: '🦠',
        shortDescription: 'Nitrifying bacteria supplement that establishes biological filtration.',
        description: 'NitriGuard is a nitrifying bacteria supplement that establishes and maintains the biological filter in aquaculture systems. Containing both Nitrosomonas and Nitrobacter species, it rapidly converts toxic ammonia to nitrite and then to harmless nitrate. Essential for new system startup and for maintaining biological filtration in intensive operations.',
        features: ['Ammonia oxidizer', 'Nitrite reducer', 'System stabilizer', 'Dual-strain formula'],
        application: 'Add 50g per 1,000 liters of water during system startup. For maintenance, add 10g per 1,000 liters weekly. Avoid chlorine exposure for 48 hours after application.',
        dosage: '50g/1,000L startup, 10g/1,000L weekly',
        targetSpecies: ['All aquaculture systems'],
        packaging: '100g, 250g, 500g pouches',
        faqs: [
          { question: 'How long does NitriGuard take to establish biological filtration?', answer: 'Initial colonization begins within 24-48 hours. Full nitrification capacity is typically achieved within 2-3 weeks.' },
          { question: 'Can chlorine kill the bacteria in NitriGuard?', answer: 'Yes, chlorine is harmful to nitrifying bacteria. Ensure water is dechlorinated before application and avoid chlorinated water changes for 48 hours.' },
        ],
      },
    ],
  },
  {
    name: 'Water Quality & Ammonia Control',
    slug: 'water-quality-ammonia-control',
    icon: '💧',
    description: 'Professional-grade water treatment products to maintain optimal water quality and control ammonia levels in aquaculture.',
    heroTitle: 'Crystal Clear Water',
    heroDescription: 'Professional-grade water treatment solutions that maintain optimal quality parameters and control ammonia for healthy, productive aquaculture systems.',
    gradient: 'from-blue-600 to-blue-800',
    badgeText: 'text-white',
    metaTitle: 'Water Quality & Ammonia Control Products | AMRich Aquaculture',
    metaDescription: 'Professional-grade water treatment products to maintain optimal water quality and control ammonia levels in aquaculture operations.',
    products: [
      {
        name: 'AmmoniClear Pro',
        slug: 'ammoniclear-pro',
        icon: '⚗️',
        shortDescription: 'Fast-acting ammonia neutralizer that converts toxic ammonia to harmless compounds.',
        description: 'AmmoniClear Pro is a fast-acting ammonia neutralizer that converts toxic ammonia to harmless compounds within hours of application. Using a proprietary binding technology, it locks ammonia into a non-toxic form that can be safely processed by biological filtration. Works within 4-6 hours and provides long-lasting protection against ammonia spikes.',
        features: ['Works in 4-6 hours', 'Long lasting effect', 'Safe for all species', 'Proprietary binding technology'],
        application: 'Apply 1 liter per 100 cubic meters of water for routine treatment. For acute ammonia spikes, double the dosage. Repeat after 24 hours if needed.',
        dosage: '1 L per 100 m³ (routine), 2 L per 100 m³ (acute)',
        targetSpecies: ['Shrimp', 'Fish', 'All aquaculture species'],
        packaging: '500ml, 1L, 5L bottles',
        faqs: [
          { question: 'How quickly does AmmoniClear Pro work?', answer: 'Initial ammonia reduction begins within 2 hours. Full effectiveness is achieved within 4-6 hours of application.' },
          { question: 'Will it affect my biological filter?', answer: 'No, AmmoniClear Pro works by binding ammonia, not by killing bacteria. Your biological filter continues to function normally.' },
        ],
      },
      {
        name: 'OxyBoost',
        slug: 'oxyboost',
        icon: '🫧',
        shortDescription: 'Dissolved oxygen enhancer that increases oxygen levels.',
        description: 'OxyBoost is a dissolved oxygen enhancer that rapidly increases oxygen levels and improves water clarity for healthier aquatic environments. Using stabilized hydrogen peroxide technology, it releases oxygen directly into the water column, providing immediate relief during low-oxygen events. Also improves water clarity by oxidizing organic particles.',
        features: ['Rapid oxygen release', 'Clarifies water', 'Emergency use safe', 'Stabilized technology'],
        application: 'For emergency use: apply 1 liter per 200 cubic meters. For routine enhancement: apply 500ml per 200 cubic meters weekly. Apply in early morning when oxygen is lowest.',
        dosage: '1 L/200m³ emergency, 500ml/200m³ weekly',
        targetSpecies: ['Shrimp', 'Fish', 'All aquaculture species'],
        packaging: '500ml, 1L, 5L bottles',
        faqs: [
          { question: 'Can OxyBoost be used in emergencies?', answer: 'Yes, OxyBoost is specifically designed for emergency oxygen supplementation. It provides rapid oxygen release within minutes of application.' },
          { question: 'How often can I apply OxyBoost?', answer: 'For routine use, apply weekly. In emergencies, it can be applied daily until the underlying issue is resolved.' },
        ],
      },
      {
        name: 'pH Balance Plus',
        slug: 'ph-balance-plus',
        icon: '🧪',
        shortDescription: 'pH stabilization system that maintains optimal alkalinity.',
        description: 'pH Balance Plus is a pH stabilization system that maintains optimal alkalinity and prevents dangerous pH swings in aquaculture ponds. Using a slow-release buffering compound, it provides sustained pH control over extended periods. Prevents the pH crashes that can cause mass mortality events and maintains the stable environment aquatic species need to thrive.',
        features: ['Buffers pH', 'Alkalinity boost', 'Slow release', 'Extended protection'],
        application: 'Apply 5 kg per hectare for initial buffering. Test pH weekly and reapply as needed to maintain alkalinity above 150 mg/L. Best applied during pond preparation.',
        dosage: '5 kg/ha initial, reapply based on testing',
        targetSpecies: ['Shrimp', 'Fish', 'All aquaculture species'],
        packaging: '1kg, 5kg, 25kg bags',
        faqs: [
          { question: 'What pH range does pH Balance Plus maintain?', answer: 'It targets the optimal range of 7.5-8.5 for most aquaculture species, providing buffering capacity to resist pH changes.' },
          { question: 'How often should I test pH after application?', answer: 'Test daily for the first week, then every 2-3 days. Reapply when alkalinity drops below 150 mg/L.' },
        ],
      },
      {
        name: 'ClarityMax',
        slug: 'claritymax',
        icon: '🔮',
        shortDescription: 'Water clarifier that removes suspended particles and reduces turbidity.',
        description: 'ClarityMax is a water clarifier that removes suspended particles, reduces turbidity, and improves light penetration for healthier ponds. Using natural flocculation agents, it clumps fine particles together for easy removal by mechanical filtration or settling. Also provides UV-protective properties and helps control excessive algal growth.',
        features: ['Flocculation', 'UV protection', 'Algae control', 'Natural agents'],
        application: 'Apply 2 liters per hectare for moderate turbidity. For severe turbidity, apply 4 liters per hectare. Distribute evenly across the pond surface. Allow 24-48 hours for full settling.',
        dosage: '2 L/ha moderate, 4 L/ha severe turbidity',
        targetSpecies: ['Shrimp', 'Fish', 'All aquaculture species'],
        packaging: '500ml, 1L, 5L bottles',
        faqs: [
          { question: 'How long does ClarityMax take to work?', answer: 'Initial flocculation begins within 4-6 hours. Full water clarity is typically achieved within 24-48 hours.' },
          { question: 'Will it harm my fish or shrimp?', answer: 'No, ClarityMax uses natural flocculation agents that are safe for all aquaculture species at recommended dosages.' },
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find((p) => p.slug === productSlug);
}

export function findProductBySlug(productSlug: string): { category: ProductCategory; product: Product } | undefined {
  for (const category of categories) {
    const product = category.products.find((p) => p.slug === productSlug);
    if (product) return { category, product };
  }
  return undefined;
}
