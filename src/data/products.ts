export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  categorySlug: string;
  form: string;
  dosage: string;
  packSize: string;
  shelfLife: string;
  badges: string[];
  specRows: { label: string; value: string }[];
  benefits: { title: string; desc: string }[];
  applySteps: string[];
  farmerTip: string;
  faq: { q: string; a: string }[];
  sku: string;
}

const categories = {
  'probiotics-soil-care': { name: 'Probiotics & Pond Soil Care', desc: 'Unhealthy pond bottoms kill growth before it starts. Our soil & probiotic blends break down organic load, prevent black soil, and create a clean, oxygen-rich environment for faster, safer shrimp & fish growth.' },
  'water-quality-ammonia-control': { name: 'Water Quality & Ammonia Control', desc: 'Biological ammonia removers, pH stabilizers, and oxygen boosters for brackish & freshwater ponds. Eliminate nitrite spikes, buffer alkalinity, and prevent night-time DO crashes without chemical residue.' },
  'disease-stress-management': { name: 'Disease & Stress Management', desc: 'Targeted iodine treatments, surface sanitizers, stress-release vitamins, and all-in-one care packs. Controls Blackgill, gill rot, and RMS while supporting safe molting and rapid recovery across AP, TN & Odisha coasts.' },
  'feed-pond-preparers': { name: 'Feed & Pond Preparers', desc: 'Feed binding gels, metabolic accelerators, and oxygen utilization supports. Reduce pellet sinkage, improve FCR, accelerate uniform molting, and protect stock during seasonal shifts. Designed for high-density Indian aquaculture.' },
};

export function getCategory(slug: string) {
  return categories[slug as keyof typeof categories] || { name: slug, desc: '' };
}

export function getAllCategories() {
  return Object.entries(categories).map(([slug, cat]) => ({ slug, ...cat }));
}

const products: Product[] = [
  {
    slug: 'pro-plus',
    name: 'PRO PLUS – Soil Probiotic for Shrimp & Fish Ponds',
    tagline: 'Clean Bottoms. Higher DO. Zero Black Soil.',
    category: 'Probiotics & Pond Soil Care',
    categorySlug: 'probiotics-soil-care',
    form: '5kg Bucket Powder',
    dosage: '5 kg per acre',
    packSize: '5 kg Bucket',
    shelfLife: '12 months | Store cool & dry',
    badges: ['ISO Certified', 'Eco-Safe Formulation'],
    specRows: [
      { label: 'Composition', value: '>1.2 Billion CFU/g | Bacillus spp. (5 strains) + Paracoccus spp.' },
      { label: 'Salinity Range', value: '5–65 ppt' },
      { label: 'pH Range', value: '6.5–10.0' },
    ],
    benefits: [
      { title: 'Degrades Detritus', desc: 'Breaks down leftover feed & organic waste in 7–10 days' },
      { title: 'Prevents Black Soil', desc: 'Eliminates toxic black soil & foul pond odors' },
      { title: 'Boosts DO Naturally', desc: 'Increases dissolved oxygen through microbial activity' },
      { title: 'Reduces Stress', desc: 'Lowers mortality from organic overload' },
    ],
    applySteps: [
      'Mix 5 kg PRO PLUS with 20–30L pond water',
      'Let settle for 30 mins to activate strains',
      'Broadcast evenly across pond bottom',
      'Run aerators for 2 hours post-application',
    ],
    farmerTip: 'Use after harvest & before stocking. Repeat every 15 days during grow-out for sustained soil health.',
    faq: [
      { q: 'What is the recommended dosage of PRO PLUS per acre?', a: 'The standard dosage is 5 kg per acre. Mix with 20–30 liters of pond water, let it settle for 30 minutes, and broadcast evenly. Repeat every 15 days during the grow-out phase.' },
      { q: 'Does PRO PLUS work in brackish water ponds?', a: 'Yes. PRO PLUS is specifically formulated to work efficiently in a wide salinity range of 5 to 65 ppt, making it ideal for both freshwater and brackish water aquaculture across Indian coastal regions.' },
      { q: 'How quickly does PRO PLUS prevent black soil formation?', a: 'When applied correctly, PRO PLUS begins degrading detritus and organic load within 7–10 days, significantly reducing black soil, foul odors, and boosting dissolved oxygen levels naturally.' },
    ],
    sku: 'PRO-PLUS-5KG',
  },
  {
    slug: 'farm-pro',
    name: 'FARM PRO – Liquid Probiotic for Stable Pond Ecosystems',
    tagline: 'Balanced water. Stronger immunity. Predictable growth.',
    category: 'Probiotics & Pond Soil Care',
    categorySlug: 'probiotics-soil-care',
    form: 'Liquid Concentrate',
    dosage: '500ml–1L per acre (based on stocking density)',
    packSize: '1L Bottle',
    shelfLife: '12 Months',
    badges: ['ISO Certified', 'Eco-Safe Formulation'],
    specRows: [
      { label: 'Stocking Density', value: '5–20 / 20+ / 100–250 / 400–500 Pl/Sq.M' },
      { label: 'Salinity Range', value: '5–65 ppt' },
      { label: 'pH Range', value: '6.5–10.0' },
    ],
    benefits: [
      { title: 'Stabilizes Water Color', desc: 'Balances plankton within 48 hours of application' },
      { title: 'Suppresses Pathogens', desc: 'Controls harmful bacteria without harming beneficial microbes' },
      { title: 'Improves FCR', desc: 'Enhances feed conversion & reduces early-stage mortality' },
    ],
    applySteps: [
      'Measure dosage based on stocking density & water depth',
      'Mix thoroughly in 20L pond water',
      'Broadcast evenly during early morning or late evening',
      'Run aerators for 1 hour post-application',
    ],
    farmerTip: 'Best applied during Week 1–2 post-stocking. Repeat every 10–14 days during rapid growth phases.',
    faq: [
      { q: 'When should FARM PRO be applied after stocking?', a: 'Apply FARM PRO during Week 1–2 post-stocking to stabilize initial plankton blooms and support early immunity. Repeat every 10–14 days during rapid growth.' },
      { q: 'Does FARM PRO work in high-density shrimp farms?', a: 'Yes. FARM PRO is optimized for densities up to 400–500 Pl/Sq.M. Adjust dosage to 1L/acre and maintain continuous aeration for best results.' },
    ],
    sku: 'FARM-PRO-1L',
  },
  {
    slug: 'farm-ps',
    name: 'FARM-PS – Phosphate-Solubilizing Liquid Probiotic',
    tagline: 'Unlock soil nutrients. Clearer water. Faster cycles.',
    category: 'Probiotics & Pond Soil Care',
    categorySlug: 'probiotics-soil-care',
    form: 'Liquid Probiotic Blend',
    dosage: '500ml–1L per acre',
    packSize: '1L Bottle',
    shelfLife: '12 Months',
    badges: ['ISO Certified', 'Eco-Safe Formulation'],
    specRows: [
      { label: 'Stocking Density', value: '5–20 / 20+ / 100–250 / 400–500 Pl/Sq.M' },
      { label: 'Function', value: 'Converts bound phosphates into plant-available nutrients' },
    ],
    benefits: [
      { title: 'Nutrient Availability', desc: 'Converts bound phosphates into bioavailable nutrients for plankton' },
      { title: 'Prevents Algal Crashes', desc: 'Stops green scum & unstable algal die-offs' },
      { title: 'Natural Food Web', desc: 'Enhances natural feed for post-larvae & juvenile stock' },
      { title: 'Reduces Fertilizer Use', desc: 'Lowers dependency on chemical fertilizers' },
    ],
    applySteps: [
      'Shake bottle well. Measure per density table',
      'Dilute in 20–30L pond water',
      'Apply along pond edges & shallow zones first',
      'Maintain light aeration for even distribution',
    ],
    farmerTip: 'Pair with FARM PRO for synergistic water & soil conditioning. Ideal for high-density shrimp farms.',
    faq: [
      { q: 'Can FARM-PS be mixed with FARM PRO?', a: 'Yes. Applying FARM-PS and FARM PRO together creates a synergistic effect for water clarity, nutrient balance, and stable plankton growth in high-density systems.' },
      { q: 'How does FARM-PS prevent green scum?', a: 'FARM-PS solubilizes locked phosphates, allowing beneficial diatoms to outcompete nuisance algae. This prevents sudden green scum formation and stabilizes DO levels.' },
    ],
    sku: 'FARM-PS-1L',
  },
  {
    slug: 'bloomer',
    name: 'BLOOMER – Plankton Bloom Regulator',
    tagline: 'Stable Color. Natural Food. Zero Crashes.',
    category: 'Probiotics & Pond Soil Care',
    categorySlug: 'probiotics-soil-care',
    form: 'Powder',
    dosage: '1–1.5 kg per acre',
    packSize: '5 kg Pouch',
    shelfLife: '12 Months',
    badges: ['Eco-Safe Formulation'],
    specRows: [
      { label: 'Application', value: 'Dissolve in 20L pond water before broadcasting' },
      { label: 'Timing', value: 'Apply during sunny morning hours' },
    ],
    benefits: [
      { title: 'Stable Blooms', desc: 'Promotes stable diatom & green algae blooms' },
      { title: 'Prevents Die-offs', desc: 'Stops sudden phytoplankton crashes that deplete DO' },
      { title: 'Natural Feed', desc: 'Provides natural nutrition for early-stage stock' },
      { title: 'pH & DO Buffer', desc: 'Buffers pH and supports oxygen through photosynthesis' },
    ],
    applySteps: [
      'Dissolve 1–1.5 kg in 20L pond water',
      'Broadcast during sunny morning hours',
      'Avoid application during heavy cloud cover',
      'Repeat every 7–10 days as bloom density requires',
    ],
    farmerTip: 'Best paired with FARM-PS for long-term bloom stability & water clarity.',
    faq: [
      { q: 'How does BLOOMER prevent algal crashes?', a: 'BLOOMER introduces balanced phytoplankton strains that outcompete unstable algae, maintaining consistent water color and preventing sudden DO drops from die-offs.' },
      { q: 'Can BLOOMER be paired with FARM-PS?', a: 'Yes. FARM-PS provides soluble phosphates while BLOOMER directs them into stable diatom blooms. Together, they create a resilient natural food chain.' },
    ],
    sku: 'BLOOMER-5KG',
  },
  {
    slug: 'gut-x',
    name: 'GUT-X – Gut Health & Digestion Probiotic',
    tagline: 'Cleaner Guts. Better Feed. Faster Growth.',
    category: 'Probiotics & Pond Soil Care',
    categorySlug: 'probiotics-soil-care',
    form: 'Powder',
    dosage: '2–3 gm per kg feed',
    packSize: '500 gm Pouch',
    shelfLife: '12 Months',
    badges: ['ISO Certified'],
    specRows: [
      { label: 'Application', value: 'Mix with feed at 2–3 gm/kg' },
      { label: 'Feeding', value: 'Feed 2x daily during active growth phases' },
    ],
    benefits: [
      { title: 'Gut Colonization', desc: 'Colonizes shrimp/fish intestines with beneficial microbes' },
      { title: 'Better Absorption', desc: 'Improves nutrient absorption & reduces FCR' },
      { title: 'Pathogen Suppression', desc: 'Suppresses harmful gut bacteria & vibrio load' },
      { title: 'Less Sludge', desc: 'Enhances stool quality & reduces pond sludge' },
    ],
    applySteps: [
      'Mix with feed at 2–3 gm/kg',
      'Coat evenly & air dry for 10 mins',
      'Feed 2x daily during active growth phases',
      'Store in cool, dry place away from direct sunlight',
    ],
    farmerTip: 'Start from Week 2 post-stocking. Consistent use reduces antibiotic dependency.',
    faq: [
      { q: 'Does GUT-X reduce antibiotic dependency?', a: 'Yes. By establishing beneficial gut flora early (Week 2+), GUT-X naturally suppresses pathogenic vibrio, reducing the need for therapeutic antibiotics.' },
      { q: 'How does GUT-X improve FCR?', a: 'GUT-X enhances enzymatic breakdown and nutrient absorption in the intestines, directly lowering Feed Conversion Ratios by 0.1–0.3 points.' },
    ],
    sku: 'GUT-X-500G',
  },
  {
    slug: 'gaso-clean',
    name: 'GASO CLEAN – Ammonia & Nitrite Remover',
    tagline: 'Zero Spikes. Clear Water. Stress-Free Stock.',
    category: 'Water Quality & Ammonia Control',
    categorySlug: 'water-quality-ammonia-control',
    form: 'Liquid Microbial Blend',
    dosage: '1–2 L per acre',
    packSize: '1L Can',
    shelfLife: '12 Months',
    badges: ['ISO Certified', 'Eco-Safe Formulation'],
    specRows: [
      { label: 'Composition', value: 'Nitrosococcus sp. & Nitrococcus sp. + Herbal Extracts' },
      { label: 'Salinity Range', value: '5–65 ppt' },
      { label: 'Temperature Range', value: '5–45°C' },
      { label: 'Optimal pH', value: '7.0–8.0' },
    ],
    benefits: [
      { title: 'Biological Removal', desc: 'Eliminates toxic ammonia & nitrite biologically, not chemically' },
      { title: 'Herbal + Nitrifying', desc: 'Dual-action blend works across wide salinity & temperature ranges' },
      { title: 'Safe for All Systems', desc: 'Safe for brackish & freshwater aquaculture' },
    ],
    applySteps: [
      'Mix 1–2L in 30–40L pond water',
      'Sprinkle evenly across pond with aerators running',
      'Avoid chemical treatments 24 hrs before/after',
      'Test ammonia levels 48 hrs post-application',
    ],
    farmerTip: 'Critical after heavy feeding, rain runoff, or high biomass. Pair with PRO PLUS for full nitrogen cycle management.',
    faq: [
      { q: 'How long does GASO CLEAN take to reduce ammonia?', a: 'GASO CLEAN typically reduces toxic ammonia & nitrite levels within 48 hours when applied at the recommended dosage (1–2 L/acre) with active aeration.' },
      { q: 'Can GASO CLEAN be used with probiotics?', a: 'Yes. Wait 24 hours after applying GASO CLEAN before introducing probiotic products like PRO PLUS or FARM PRO to avoid microbial interference.' },
    ],
    sku: 'GASO-CLEAN-1L',
  },
  {
    slug: 'w-softener',
    name: 'W-SOFTENER – Water Conditioner & Alkalinity Balancer',
    tagline: 'Stable pH. Soft Water. Stress-Free Stock.',
    category: 'Water Quality & Ammonia Control',
    categorySlug: 'water-quality-ammonia-control',
    form: 'Powder/Granules',
    dosage: '1–2 kg per acre',
    packSize: '1 kg Pouch',
    shelfLife: '12 Months',
    badges: ['Eco-Safe Formulation'],
    specRows: [
      { label: 'Function', value: 'Neutralizes high alkalinity & buffers pH swings' },
      { label: 'Application', value: 'Pre-dissolve in 20L water before broadcasting' },
    ],
    benefits: [
      { title: 'pH Buffer', desc: 'Buffers pH swings during rain or tidal influx' },
      { title: 'Osmoregulation', desc: 'Improves shrimp/fish osmoregulation during salinity changes' },
      { title: 'Enhanced Efficacy', desc: 'Improves probiotic & mineral effectiveness' },
    ],
    applySteps: [
      'Pre-dissolve 1–2 kg in 20L water',
      'Broadcast evenly across pond perimeter',
      'Avoid mixing with oxidizers or iodine products',
      'Test pH 24 hrs post-application',
    ],
    farmerTip: 'Essential before stocking & during monsoon transitions. Always test total alkalinity first.',
    faq: [
      { q: 'Should W-SOFTENER be used before stocking?', a: 'Yes. Apply W-SOFTENER 48 hours before stocking to stabilize alkalinity and pH, creating a stress-free environment for post-larvae acclimation.' },
      { q: 'Does W-SOFTENER work in brackish water?', a: 'Absolutely. W-SOFTENER is specifically calibrated for brackish coastal ponds (5–35 ppt) where alkalinity swings are common due to tidal exchange.' },
    ],
    sku: 'W-SOFTENER-1KG',
  },
  {
    slug: 'oxy-farm',
    name: 'OXY-FARM – Dissolved Oxygen & Nitrification Support',
    tagline: 'More Oxygen. Cleaner Water. Safer Nights.',
    category: 'Water Quality & Ammonia Control',
    categorySlug: 'water-quality-ammonia-control',
    form: 'Capsule/Powder Blend',
    dosage: 'As per biomass load',
    packSize: '1 kg / Capsule Packs',
    shelfLife: '12 Months',
    badges: ['ISO Certified', 'Eco-Safe Formulation'],
    specRows: [
      { label: 'Composition', value: 'Paracoccus spp. + Denitrifying Bacteria' },
      { label: 'Function', value: 'Converts toxic nitrites into safe nitrogen gas' },
      { label: 'Applications', value: 'Brackish & freshwater systems' },
    ],
    benefits: [
      { title: 'Natural DO Boost', desc: 'Boosts DO levels through microbial respiration balance' },
      { title: 'Nitrite Conversion', desc: 'Converts toxic nitrites into safe nitrogen gas' },
      { title: 'Night Protection', desc: 'Prevents night-time oxygen crashes in high-biomass ponds' },
    ],
    applySteps: [
      'Distribute evenly across pond surface or mix with water',
      'Apply before dusk or after heavy feeding',
      'Ensure aerators run during peak microbial activation',
      'Monitor DO levels 12 hrs post-application',
    ],
    farmerTip: 'Critical during high biomass months (Week 6+). Pair with GASO CLEAN for full nitrogen cycle control.',
    faq: [
      { q: 'Does OXY-FARM work in high-biomass ponds?', a: 'Yes. OXY-FARM is specifically designed for Week 6+ high-density ponds where oxygen demand exceeds natural production, preventing fatal night crashes.' },
      { q: 'Can OXY-FARM be paired with GASO CLEAN?', a: 'Absolutely. GASO CLEAN removes ammonia/nitrite, while OXY-FARM stabilizes DO. Together, they complete the nitrogen-oxygen cycle for optimal water quality.' },
    ],
    sku: 'OXY-FARM-1KG',
  },
  {
    slug: 'farmamin',
    name: 'FARMAMIN – Pond Fertility & Mineral Balancer',
    tagline: 'Rich Water. Stable Parameters. Zero Guesswork.',
    category: 'Water Quality & Ammonia Control',
    categorySlug: 'water-quality-ammonia-control',
    form: 'Powder',
    dosage: '1–1.5 kg per acre',
    packSize: '1 kg Pouch',
    shelfLife: '12 Months',
    badges: ['Eco-Safe Formulation'],
    specRows: [
      { label: 'Function', value: 'Boosts pond fertility & soil productivity' },
      { label: 'Benefit', value: 'Maintains essential minerals for strong exoskeleton development' },
    ],
    benefits: [
      { title: 'Pond Fertility', desc: 'Boosts pond fertility & soil productivity' },
      { title: 'Mineral Support', desc: 'Maintains essential minerals for strong exoskeleton development' },
      { title: 'pH Stability', desc: 'Stabilizes pH, alkalinity & hardness naturally' },
      { title: 'Toxic Gas Reduction', desc: 'Lowers toxic gas buildup & supports higher DO' },
    ],
    applySteps: [
      'Pre-mix 1–1.5 kg in 20L water. Stir until dissolved',
      'Broadcast across pond surface during calm weather',
      'Avoid application during heavy rain or strong winds',
      'Run aerators for 30 mins post-dosing',
    ],
    farmerTip: 'Apply every 7–10 days during pre-molt stages to prevent soft-shell syndrome.',
    faq: [
      { q: 'How often should FARMAMIN be applied?', a: 'Apply every 7–10 days, especially during pre-molt stages, to maintain stable alkalinity and prevent soft-shell syndrome in growing shrimp.' },
      { q: 'Does FARMAMIN affect pH levels?', a: 'FARMAMIN buffers pH swings and stabilizes alkalinity naturally. It does not cause sharp pH spikes, making it safe for continuous grow-out use.' },
    ],
    sku: 'FARMAMIN-1KG',
  },
  {
    slug: 'farmadine',
    name: 'FARMADINE – Iodine-Based Disease Control',
    tagline: 'Targeted Protection. Fast Recovery. Clean Ponds.',
    category: 'Disease & Stress Management',
    categorySlug: 'disease-stress-management',
    form: 'Liquid Concentrate',
    dosage: '250–500 ml per acre',
    packSize: '1L Bottle',
    shelfLife: '12 Months',
    badges: ['ISO Certified'],
    specRows: [
      { label: 'Active', value: 'Iodine 20% + Activants (Non-Alkyl Phenoxyl Polyethylene Complex)' },
      { label: 'Target', value: 'Controls Blackgill & Browngill in shrimp' },
      { label: 'Spectrum', value: 'Bacterial, fungal & protozoan pathogens' },
    ],
    benefits: [
      { title: 'Disease Control', desc: 'Controls Blackgill & Browngill in shrimp effectively' },
      { title: 'Broad Spectrum', desc: 'Effective against bacterial, fungal & protozoan pathogens' },
      { title: 'Safe for Grow-Out', desc: 'Safe for scheduled use during grow-out phase without harsh residue' },
    ],
    applySteps: [
      'Dilute 250–500 ml in 20L water',
      'Broadcast evenly during early morning',
      'Ensure light aeration for uniform distribution',
      'Repeat every 5–7 days if symptoms persist',
    ],
    farmerTip: 'Use at first sign of gill discoloration or erratic swimming. Maintain DO >4 mg/L during treatment.',
    faq: [
      { q: 'Does FARMADINE harm beneficial pond bacteria?', a: 'FARMADINE is targeted at pathogenic loads. Apply probiotics 48 hours post-treatment to quickly re-establish beneficial microbial balance.' },
      { q: 'What DO level is required during FARMADINE treatment?', a: 'Maintain dissolved oxygen >4 mg/L during and after application. Low DO combined with iodine can increase stress sensitivity in shrimp.' },
    ],
    sku: 'FARMADINE-1L',
  },
  {
    slug: 'farm-80',
    name: 'FARM 80% – Pond Disinfectant & Surface Sanitizer',
    tagline: 'Clean Surfaces. Controlled Algae. Safer Molting.',
    category: 'Disease & Stress Management',
    categorySlug: 'disease-stress-management',
    form: 'Liquid Concentrate',
    dosage: '500 ml per acre-foot of water',
    packSize: '5L Can',
    shelfLife: '12 Months',
    badges: ['ISO Certified'],
    specRows: [
      { label: 'Active', value: 'Benzyl Konium Chloride 80% w/v' },
      { label: 'Function', value: 'Powerful disinfectant for shrimp/fish body surfaces' },
      { label: 'Effect', value: 'Removes bacterial load & controls gill/tail/antenna rot' },
    ],
    benefits: [
      { title: 'Surface Disinfection', desc: 'Powerful disinfectant for shrimp/fish body surfaces' },
      { title: 'Gill Rot Control', desc: 'Removes bacterial load & controls gill/tail/antenna rot' },
      { title: 'Algae Management', desc: 'Reduces excess algae without crashing DO' },
      { title: 'Molting Support', desc: 'Improves molting uniformity & shell clarity' },
    ],
    applySteps: [
      'Dilute 1L in 20–30L pond water',
      'Mix with clean sand for even broadcasting',
      'Apply during calm weather with aerators running',
      'Wait 48 hrs before restocking or probiotic application',
    ],
    farmerTip: 'Use only when bacterial load or rot symptoms are visible. Never mix with iodine or oxidizers.',
    faq: [
      { q: 'Is FARM 80% safe for shrimp during molting?', a: 'FARM 80% supports uniform molting by cleaning body surfaces and reducing bacterial load. However, avoid application during active soft-shell phases. Apply 24–48 hours before expected molt for best results.' },
      { q: 'Can FARM 80% be mixed with iodine or oxidizers?', a: 'No. Never mix FARM 80% with iodine-based products (like FARMADINE) or strong oxidizers. Apply separately with a 48-hour gap to prevent chemical reactions.' },
    ],
    sku: 'FARM-80-5L',
  },
  {
    slug: 'farm-c-plus',
    name: 'FARM-C+ – Stress Release & Immunity Booster',
    tagline: 'Quick Recovery. Stronger Defenses.',
    category: 'Disease & Stress Management',
    categorySlug: 'disease-stress-management',
    form: 'Powder/Liquid Vitamin Blend',
    dosage: '250–500 gm per acre',
    packSize: '500 gm Pouch',
    shelfLife: '12 Months',
    badges: ['ISO Certified'],
    specRows: [
      { label: 'Function', value: 'Rapidly reduces handling, transport & weather stress' },
      { label: 'Benefit', value: 'Boosts antioxidant capacity & disease resistance' },
    ],
    benefits: [
      { title: 'Stress Reduction', desc: 'Rapidly reduces handling, transport & weather stress' },
      { title: 'Immune Boost', desc: 'Boosts antioxidant capacity & disease resistance' },
      { title: 'Post-Molt Healing', desc: 'Supports rapid healing post-molt or minor injuries' },
      { title: 'Feed Intake', desc: 'Improves feed intake during recovery phases' },
    ],
    applySteps: [
      'Mix with feed or pond water as directed',
      'Apply for 3 consecutive days during stress events',
      'Maintain aeration & monitor feeding response',
      'Repeat as needed during seasonal shifts',
    ],
    farmerTip: 'Keep on hand for cyclone warnings, harvest transfers, or sudden salinity drops.',
    faq: [
      { q: 'When should farmers keep FARM-C+ on standby?', a: 'Always stock FARM-C+ before cyclone warnings, harvest transfers, or sudden salinity drops. It acts as a rapid stress buffer to prevent mortality spikes.' },
      { q: 'Can FARM-C+ be mixed with antibiotics?', a: 'FARM-C+ is a vitamin-based immune booster, not an antibiotic. It can be used alongside prescribed treatments to support recovery, but consult your vet first.' },
    ],
    sku: 'FARM-C-PLUS-500G',
  },
  {
    slug: 'shrimp-care',
    name: 'SHRIMP CARE – Comprehensive Pond & Health Care Pack',
    tagline: 'All-in-One Protection. Predictable Molting.',
    category: 'Disease & Stress Management',
    categorySlug: 'disease-stress-management',
    form: 'Multi-Component Pack',
    dosage: '4 packs (regular) | 8 (problematic) | 10 (high RMS)',
    packSize: '6 packs per box',
    shelfLife: '12 Months',
    badges: ['ISO Certified'],
    specRows: [
      { label: 'Coverage', value: 'Integrated support for water, soil & stock health' },
      { label: 'Target', value: 'Accelerates uniform molting & shell hardening' },
    ],
    benefits: [
      { title: 'Integrated Support', desc: 'Complete water, soil & stock health in one system' },
      { title: 'Uniform Molting', desc: 'Accelerates uniform molting & shell hardening' },
      { title: 'Mortality Reduction', desc: 'Reduces mortality from environmental & microbial stress' },
      { title: 'Simplified Management', desc: 'Pre-measured doses eliminate guesswork' },
    ],
    applySteps: [
      'Follow pack instructions based on pond condition',
      'Apply sequentially as per included protocol chart',
      'Maintain aeration & monitor stock behavior daily',
      'Adjust dosage for salinity spikes or heavy rains',
    ],
    farmerTip: 'Ideal for farmers managing 5–15 acre plots with limited technical staff.',
    faq: [
      { q: 'What does RMS mean in SHRIMP CARE packaging?', a: 'RMS stands for Running Mortality Syndrome. The 10-pack variant is formulated for ponds showing early signs of mortality spikes or stress-induced die-offs.' },
      { q: 'Is SHRIMP CARE suitable for new farmers?', a: 'Yes. The pre-measured packs eliminate guesswork, making it ideal for farmers managing 5–15 acres with limited technical staff or lab access.' },
    ],
    sku: 'SHRIMP-CARE-6PACK',
  },
  {
    slug: 'omega-booster',
    name: 'OMEGA-BOOSTER – Growth & Immunity Support',
    tagline: 'Faster Weight Gain. Stronger Stress Resistance.',
    category: 'Feed & Pond Preparers',
    categorySlug: 'feed-pond-preparers',
    form: 'Liquid/Powder Blend (Field-Ready)',
    dosage: 'As per pond size & growth stage',
    packSize: '1L / 1 kg',
    shelfLife: '12 Months',
    badges: ['Eco-Safe Formulation'],
    specRows: [
      { label: 'Function', value: 'Accelerates metabolic rate & feed assimilation' },
      { label: 'Benefit', value: 'Strengthens immune response against seasonal shifts' },
    ],
    benefits: [
      { title: 'Metabolic Boost', desc: 'Accelerates metabolic rate & feed assimilation' },
      { title: 'Immune Strength', desc: 'Strengthens immune response against seasonal shifts' },
      { title: 'Mortality Reduction', desc: 'Reduces mortality during weather fluctuations' },
      { title: 'Uniform Molting', desc: 'Supports uniform molting & size grading' },
    ],
    applySteps: [
      'Mix recommended dose in feeding trough or pond water',
      'Apply during early morning feeding cycles',
      'Ensure even distribution across active zones',
      'Continue for 3–5 consecutive days during stress periods',
    ],
    farmerTip: 'Pair with probiotics for maximum gut-to-growth efficiency. Ideal for AP, TN & Odisha coastal cycles.',
    faq: [
      { q: 'Does OMEGA-BOOSTER work with probiotic feeds?', a: 'Yes. OMEGA-BOOSTER enhances gut absorption, making it highly effective when paired with probiotic-coated feeds like GUT-X for maximum growth efficiency.' },
      { q: 'How quickly will I see weight gain improvement?', a: 'Farmers typically report improved feed conversion and uniform molting within 7–10 days of consistent application during the mid-grow-out phase.' },
    ],
    sku: 'OMEGA-BOOSTER-1L',
  },
  {
    slug: 'gro-bind',
    name: 'GRO-BIND – Feed Binding Gel for Low Waste & High Uptake',
    tagline: 'Stable Pellets. Less Sink. More Growth.',
    category: 'Feed & Pond Preparers',
    categorySlug: 'feed-pond-preparers',
    form: 'Liquid Gel Binder',
    dosage: '2–3 ml per kg feed',
    packSize: '1L Bottle',
    shelfLife: '12 Months',
    badges: ['Eco-Safe Formulation'],
    specRows: [
      { label: 'Function', value: 'Prevents pellet disintegration in water' },
      { label: 'Benefit', value: 'Reduces feed waste & sludge accumulation' },
    ],
    benefits: [
      { title: 'Pellet Stability', desc: 'Prevents pellet disintegration in water' },
      { title: 'Waste Reduction', desc: 'Reduces feed waste & sludge accumulation' },
      { title: 'Improved FCR', desc: 'Improves nutrient absorption & feed conversion' },
      { title: 'Lower Ammonia', desc: 'Reduces ammonia spike from uneaten feed' },
    ],
    applySteps: [
      'Spray 2–3 ml per kg feed in mixing tray',
      'Tumble for 2–3 mins until fully coated',
      'Air dry for 5 mins before broadcasting',
      'Feed immediately for best water stability',
    ],
    farmerTip: 'Critical during high-density stocking & monsoon months when feed sinkage increases.',
    faq: [
      { q: 'How does GRO-BIND improve FCR?', a: 'By preventing pellet breakdown in water, GRO-BIND ensures shrimp/fish consume more feed before it sinks, directly reducing waste and improving Feed Conversion Ratios by 10–15%.' },
      { q: 'Should I use GRO-BIND during monsoon?', a: 'Yes. Monsoon rains increase water turbulence and feed sinkage. GRO-BIND maintains pellet integrity during high moisture and windy conditions.' },
    ],
    sku: 'GRO-BIND-1L',
  },
  {
    slug: 'easy-lite',
    name: 'EASY LITE – Metabolic & Oxygen Utilization Support',
    tagline: 'Lighter Load on Ponds. Heavier Harvests.',
    category: 'Feed & Pond Preparers',
    categorySlug: 'feed-pond-preparers',
    form: 'Powder/Liquid Blend',
    dosage: 'As per water volume & biomass',
    packSize: '500 gm / 1L',
    shelfLife: '12 Months',
    badges: ['Eco-Safe Formulation'],
    specRows: [
      { label: 'Function', value: 'Enhances cellular oxygen uptake efficiency' },
      { label: 'Benefit', value: 'Reduces metabolic stress during high temperatures' },
    ],
    benefits: [
      { title: 'Oxygen Efficiency', desc: 'Enhances cellular oxygen uptake efficiency' },
      { title: 'Heat Stress Reduction', desc: 'Reduces metabolic stress during high temperatures' },
      { title: 'Liver Support', desc: 'Supports liver & hepatopancreas function' },
      { title: 'Night Survival', desc: 'Improves survival during low-DO nights' },
    ],
    applySteps: [
      'Dissolve in pond water or mix with feed',
      'Apply during peak stress windows (afternoon/evening)',
      'Run aerators to maximize distribution',
      'Use 2x/week during grow-out phase',
    ],
    farmerTip: 'Best paired with OXY-FARM during pre-molt & sudden weather drops.',
    faq: [
      { q: 'Does EASY LITE replace aeration?', a: 'No. EASY LITE enhances how shrimp/fish utilize available oxygen but does not generate it. Always run aerators alongside application for optimal results.' },
      { q: 'When is EASY LITE most critical?', a: 'Use during pre-molt phases, sudden temperature drops, or high-biomass weeks (Week 6+) when oxygen demand outpaces natural production.' },
    ],
    sku: 'EASY-LITE-500G',
  },
];

export default products;

export function getProductsByCategory(categorySlug: string) {
  return products.filter(p => p.categorySlug === categorySlug);
}

export function getProduct(categorySlug: string, productSlug: string) {
  return products.find(p => p.categorySlug === categorySlug && p.slug === productSlug) || null;
}
