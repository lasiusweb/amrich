export interface ProductSpec {
  label: string;
  value: string;
}

export interface DosageTier {
  label: string;
  value: string;
}

export interface StockingDensityRow {
  density: string;
  dosage: string;
}

export interface ProductResource {
  label: string;
  href: string;
}

export interface ProductTestimonial {
  quote: string;
  name: string;
  location: string;
  metric?: string;
}

export interface Product {
  name: string;
  slug: string;
  icon: string;
  image?: string;
  tagline: string;
  shortDescription: string;
  description: string;
  form: string;
  dosage: string;
  dosageTiers?: DosageTier[];
  stockingDensityGuide?: StockingDensityRow[];
  packSize: string;
  shelfLife: string;
  specs?: ProductSpec[];
  targetSpecies: string[];
  benefits: string[];
  applicationSteps: string[];
  farmerTip: string;
  resources: ProductResource[];
  testimonial?: ProductTestimonial;
  faqs: { question: string; answer: string }[];
}

export interface ProductCategory {
  name: string;
  slug: string;
  icon: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  products: Product[];
}

export const categories: ProductCategory[] = [
  {
    name: 'Probiotics & Soil Care',
    slug: 'probiotics-soil-care',
    icon: 'probiotics',
    description: 'Beneficial microorganism formulations and soil treatment solutions for healthier pond ecosystems.',
    heroTitle: 'Probiotics & Soil Care for Healthy Aquaculture Ponds',
    heroDescription: 'Unhealthy pond bottoms kill growth before it starts. Our soil & probiotic blends break down organic load, prevent black soil, and create a clean, oxygen-rich environment for faster, safer shrimp & fish growth.',
    metaTitle: 'Probiotics & Soil Care | Amrich Pharma',
    metaDescription: 'Eco-safe probiotics and soil care for aquaculture ponds. Break down organic load, prevent black soil, improve DO and shrimp health.',
    products: [
      {
        name: 'PRO PLUS',
        slug: 'pro-plus',
        icon: 'powder',
        image: '/images/products/pro-plus.svg',
        tagline: 'Clean bottoms. Higher DO. Zero black soil.',
        shortDescription: 'Dual-action soil probiotic for shrimp & fish ponds. Degrades detritus and prevents toxic black soil.',
        description: 'PRO PLUS is a concentrated soil probiotic formulated to break down accumulated organic waste, leftover feed, and detritus in pond bottoms. With >1.2 Billion CFU/g from 5 strains of Bacillus spp. and Paracoccus spp., it prevents black soil formation, reduces foul odors, and naturally boosts dissolved oxygen levels. Regular use creates a clean, aerobic sediment environment that supports healthier stock and better feed conversion.',
        form: '5 kg Bucket Powder',
        dosage: '5 kg per acre',
        packSize: '5 kg bucket',
        shelfLife: '12 months',
        specs: [
          { label: 'Composition', value: '>1.2 Billion CFU/g | Bacillus spp. (5 strains) + Paracoccus spp.' },
          { label: 'Salinity Range', value: '5–65 ppt' },
          { label: 'pH Range', value: '6.5–10.0' },
        ],
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Degrades detritus & leftover feed in 7–10 days',
          'Prevents toxic black soil & foul pond odors',
          'Boosts dissolved oxygen naturally',
          'Reduces stress from organic overload',
        ],
        applicationSteps: [
          'Mix 5 kg PRO PLUS with 20–30 L pond water',
          'Let settle for 30 mins to activate strains',
          'Broadcast evenly across pond bottom',
          'Run aerators for 2 hours post-application',
        ],
        farmerTip: 'Use after harvest & before stocking. Repeat every 15 days during grow-out for sustained soil health.',
        resources: [
          { label: 'Download Full Brochure', href: '/brochures/probiotics-soil-care/pro-plus/' },
          { label: 'View Lab Report & Strain IDs', href: '/brochures/probiotics-soil-care/pro-plus/lab-report-strain-ids' },
        ],
        testimonial: {
          quote: 'After using PRO PLUS + GASO CLEAN, ammonia dropped from 2.1 to 0.4 ppm in 5 days. Survival rate improved by 18% this cycle.',
          name: 'Ramesh K.',
          location: 'Kakinada, AP',
          metric: '18% survival improvement',
        },
        faqs: [
          { question: 'How often should I apply PRO PLUS?', answer: 'Apply every 15 days during grow-out for sustained soil health. For severely impacted ponds, apply every 7–10 days initially.' },
          { question: 'Can I use PRO PLUS in freshwater ponds?', answer: 'Yes, PRO PLUS works across 5–65 ppt salinity, making it suitable for both brackish and freshwater systems.' },
        ],
      },
      {
        name: 'FARM PRO',
        slug: 'farm-pro',
        icon: 'flask',
        image: '/images/products/farm-pro.svg',
        tagline: 'Balanced water. Stronger immunity. Predictable growth.',
        shortDescription: 'Liquid probiotic for stable pond ecosystems. Suppresses pathogens without harming beneficial microbes.',
        description: 'FARM PRO is a liquid probiotic concentrate that stabilizes water color and plankton balance within 48 hours of application. It suppresses pathogenic bacteria through competitive exclusion while leaving beneficial microbial communities intact. The result is improved feed conversion, reduced early-stage mortality, and more predictable growth cycles across a wide range of salinities and pH conditions.',
        form: 'Liquid Concentrate',
        dosage: '500 ml–1 L per acre',
        packSize: '1 L Bottle',
        shelfLife: '12 months',
        specs: [
          { label: 'Salinity Range', value: '5–65 ppt' },
          { label: 'pH Range', value: '6.5–10.0' },
          { label: 'Response Time', value: '48 hours' },
        ],
        stockingDensityGuide: [
          { density: '5–20 PL/sq.m', dosage: '500 ml/acre' },
          { density: '20+ PL/sq.m', dosage: '750 ml/acre' },
          { density: '100–250 PL/sq.m', dosage: '1 L/acre' },
          { density: '400–500 PL/sq.m', dosage: '1 L/acre' },
        ],
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Stabilizes water color & plankton balance within 48 hours',
          'Suppresses pathogenic bacteria without harming beneficial microbes',
          'Improves feed conversion & reduces early-stage mortality',
          'Works across 5–65 ppt salinity & pH 6.5–10.0',
        ],
        applicationSteps: [
          'Measure dosage based on your stocking density & water depth',
          'Mix thoroughly in 20 L pond water',
          'Broadcast evenly during early morning or late evening',
          'Run aerators for 1 hour post-application',
        ],
        farmerTip: 'Best applied during Week 1–2 post-stocking. Repeat every 10–14 days during rapid growth phases.',
        resources: [
          { label: 'Download Full Brochure', href: '/brochures/probiotics-soil-care/farm-pro/' },
          { label: 'View Density Dosage Chart', href: '/brochures/probiotics-soil-care/farm-pro/density-dosage-chart' },
        ],
        faqs: [
          { question: 'How quickly does FARM PRO work?', answer: 'Water color and plankton balance typically stabilize within 48 hours of application.' },
          { question: 'Can FARM PRO be used with chemical treatments?', answer: 'Yes, but allow 48 hours between chemical treatments and probiotic application for best results.' },
        ],
      },
      {
        name: 'FARM-PS',
        slug: 'farm-ps',
        icon: 'flask',
        image: '/images/products/farm-ps.svg',
        tagline: 'Unlock soil nutrients. Clearer water. Faster cycles.',
        shortDescription: 'Phosphate-solubilizing liquid probiotic that converts bound phosphates into plant-available nutrients.',
        description: 'FARM-PS is a specialized phosphate-solubilizing probiotic that converts bound phosphates in pond sediment into bioavailable nutrients for phytoplankton. This promotes stable algal blooms, prevents green scum formation, and reduces dependency on chemical fertilizers. By enhancing the natural food web, it supports post-larvae and juvenile stock during critical early development stages.',
        form: 'Liquid Probiotic Blend',
        dosage: '500 ml–1 L per acre',
        packSize: '1 L Bottle',
        shelfLife: '12 months',
        stockingDensityGuide: [
          { density: '5–20 PL/sq.m', dosage: '500 ml/acre' },
          { density: '20+ PL/sq.m', dosage: '750 ml/acre' },
          { density: '100–250 PL/sq.m', dosage: '1 L/acre' },
          { density: '400–500 PL/sq.m', dosage: '1 L/acre' },
        ],
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Converts bound phosphates into plant-available nutrients',
          'Prevents green scum & unstable algal crashes',
          'Enhances natural food web for post-larvae & juvenile stock',
          'Reduces dependency on chemical fertilizers',
        ],
        applicationSteps: [
          'Shake bottle well. Measure per density table',
          'Dilute in 20–30 L pond water',
          'Apply along pond edges & shallow zones first',
          'Maintain light aeration for even distribution',
        ],
        farmerTip: 'Pair with FARM PRO for synergistic water & soil conditioning. Ideal for high-density shrimp farms.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/probiotics-soil-care/farm-ps/' },
          { label: 'Check Field Trial Data', href: '/brochures/probiotics-soil-care/farm-ps/field-trial-data' },
        ],
        faqs: [
          { question: 'How is FARM-PS different from regular probiotics?', answer: 'FARM-PS specifically targets phosphate solubilization, making it ideal for ponds with hardpan soils or heavy fertilizer history.' },
          { question: 'Can I use FARM-PS with chemical fertilizers?', answer: 'Yes, but you can reduce chemical fertilizer input by 30–50% when using FARM-PS regularly.' },
        ],
      },
      {
        name: 'GUT-X',
        slug: 'gut-x',
        icon: 'capsule',
        image: '/images/products/gut-x.svg',
        tagline: 'Cleaner guts. Better feed. Faster growth.',
        shortDescription: 'Gut health & digestion probiotic that improves nutrient absorption and reduces FCR.',
        description: 'GUT-X is a targeted gut health probiotic that colonizes shrimp and fish intestines with beneficial microbes. By improving nutrient absorption and suppressing harmful gut bacteria including Vibrio, it directly reduces Feed Conversion Ratio (FCR) and improves growth uniformity. Consistent use enhances stool quality, reduces sludge load on the pond, and lowers dependency on antibiotics.',
        form: 'Powder',
        dosage: '2–3 g per kg feed',
        packSize: '500 gm Pouch',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Colonizes shrimp/fish intestines with beneficial microbes',
          'Improves nutrient absorption & reduces FCR',
          'Suppresses harmful gut bacteria & Vibrio load',
          'Enhances stool quality & reduces sludge',
        ],
        applicationSteps: [
          'Mix with feed at 2–3 g per kg',
          'Coat evenly & air dry for 10 mins',
          'Feed 2x daily during active growth phases',
          'Store in cool, dry place away from direct sunlight',
        ],
        farmerTip: 'Start from Week 2 post-stocking. Consistent use reduces antibiotic dependency.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/probiotics-soil-care/gut-x/' },
          { label: 'FCR Reduction Case Studies', href: '/brochures/probiotics-soil-care/gut-x/fcr-reduction-case-studies' },
        ],
        faqs: [
          { question: 'When should I start using GUT-X?', answer: 'Start from Week 2 post-stocking for best results. Consistent use throughout grow-out reduces FCR and improves size uniformity.' },
          { question: 'Can GUT-X replace antibiotics?', answer: 'GUT-X significantly reduces the need for antibiotics by maintaining healthy gut flora and suppressing pathogens, but consult your vet for clinical disease treatment.' },
        ],
      },
    ],
  },
  {
    name: 'Disease & Stress Management',
    slug: 'disease-stress-management',
    icon: 'disease',
    description: 'Advanced treatments and preventive solutions to protect aquaculture stock from common diseases and environmental stress.',
    heroTitle: 'Disease & Stress Management',
    heroDescription: 'Advanced treatments and preventive solutions to safeguard your aquaculture operations against disease outbreaks and environmental stress.',
    metaTitle: 'Disease & Stress Management | Amrich Pharma',
    metaDescription: 'Disease control and stress management for shrimp and fish farming. Iodine treatments, disinfectants, immunity boosters, and comprehensive health packs.',
    products: [
      {
        name: 'SHRIMP CARE',
        slug: 'shrimp-care',
        icon: 'capsule',
        image: '/images/products/shrimp-care.svg',
        tagline: 'All-in-one protection. Predictable molting.',
        shortDescription: 'Comprehensive pond & health care pack with pre-measured doses for water, soil & stock health.',
        description: 'SHRIMP CARE is a multi-component health management pack that provides integrated support for water quality, soil health, and stock immunity. Each pack contains pre-measured doses of complementary formulations that work together to accelerate uniform molting, strengthen shell hardening, and reduce mortality from environmental and microbial stress. Designed for farmers managing 5–15 acre plots with limited technical staff.',
        form: 'Multi-Component Pack',
        dosage: 'See dosage tiers below',
        dosageTiers: [
          { label: 'Regular', value: '4 packs' },
          { label: 'Problematic', value: '8 packs' },
          { label: 'High RMS', value: '10 packs' },
        ],
        packSize: '6 packs per box',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Prawns'],
        benefits: [
          'Integrated support for water, soil & stock health',
          'Accelerates uniform molting & shell hardening',
          'Reduces mortality from environmental & microbial stress',
          'Simplifies pond management with pre-measured doses',
        ],
        applicationSteps: [
          'Follow pack instructions based on pond condition',
          'Apply sequentially as per included protocol chart',
          'Maintain aeration & monitor stock behavior daily',
          'Adjust dosage for salinity spikes or heavy rains',
        ],
        farmerTip: 'Ideal for farmers managing 5–15 acre plots with limited technical staff.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/disease-stress-management/shrimp-care/' },
          { label: 'Step-by-Step Care Guide', href: '/brochures/disease-stress-management/shrimp-care/step-by-step-care-guide' },
        ],
        faqs: [
          { question: 'How do I choose the right dosage tier?', answer: 'Use Regular for normal conditions, Problematic for ponds with history of mortality, and High RMS for multi-cycle stressed ponds or post-disease recovery.' },
          { question: 'Can SHRIMP CARE be used with other products?', answer: 'Yes, it is designed as a comprehensive system. Avoid adding extra treatments during the protocol window unless advised by a technician.' },
        ],
      },
      {
        name: 'FARM-C+',
        slug: 'farm-c-plus',
        icon: 'capsule',
        image: '/images/products/farm-c-plus.svg',
        tagline: 'Quick recovery. Stronger defenses.',
        shortDescription: 'Stress release & immunity booster with rapid vitamin blend for handling, transport & weather stress.',
        description: 'FARM-C+ is a concentrated vitamin and antioxidant formula designed for rapid stress recovery in shrimp and fish. It boosts antioxidant capacity, supports healing post-molt or minor injuries, and improves feed intake during recovery phases. Essential during handling, transport, weather fluctuations, and after disease events.',
        form: 'Powder Vitamin Blend',
        dosage: '250–500 g per acre',
        packSize: '500 gm Pouch',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Rapidly reduces handling, transport & weather stress',
          'Boosts antioxidant capacity & disease resistance',
          'Supports rapid healing post-molt or minor injuries',
          'Improves feed intake during recovery phases',
        ],
        applicationSteps: [
          'Mix with feed or pond water as directed',
          'Apply for 3 consecutive days during stress events',
          'Maintain aeration & monitor feeding response',
          'Repeat as needed during seasonal shifts',
        ],
        farmerTip: 'Keep on hand for cyclone warnings, harvest transfers, or sudden salinity drops.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/disease-stress-management/farm-c-plus/' },
          { label: 'Stress Response Protocol', href: '/brochures/disease-stress-management/farm-c-plus/stress-response-protocol' },
        ],
        faqs: [
          { question: 'How quickly does FARM-C+ work?', answer: 'Feed intake improvement is often visible within 24 hours. Full stress recovery typically takes 3–5 days of consecutive application.' },
          { question: 'Can I use FARM-C+ preventively?', answer: 'Yes, apply 2–3 days before anticipated stress events like stocking, transport, or weather changes.' },
        ],
      },
      {
        name: 'FARMADINE',
        slug: 'farmadine',
        icon: 'flask',
        image: '/images/products/farmadine.svg',
        tagline: 'Targeted protection. Fast recovery. Clean ponds.',
        shortDescription: 'Iodine-based disease control for Blackgill, Browngill & fungal infections in shrimp and fish.',
        description: 'FARMADINE is a broad-spectrum iodine-based disease control concentrate effective against bacterial, fungal, and protozoan pathogens. Its non-alkyl phenoxyl polyethylene complex ensures targeted activity with minimal environmental residue. Particularly effective for controlling Blackgill and Browngill in shrimp, it can be used safely during grow-out without harsh chemical buildup.',
        form: 'Liquid Concentrate',
        dosage: '250–500 ml per acre',
        packSize: '1 L Bottle',
        shelfLife: '12 months',
        specs: [
          { label: 'Active', value: 'Iodine 20% + Activants (Non-Alkyl Phenoxyl Polyethylene Complex)' },
        ],
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Controls Blackgill & Browngill in shrimp',
          'Effective against bacterial, fungal & protozoan pathogens',
          'Broad-spectrum action without harsh chemical residue',
          'Safe for scheduled use during grow-out phase',
        ],
        applicationSteps: [
          'Dilute recommended dose in 20 L water',
          'Broadcast evenly during early morning',
          'Ensure light aeration for uniform distribution',
          'Repeat every 5–7 days if symptoms persist',
        ],
        farmerTip: 'Use at first sign of gill discoloration or erratic swimming. Maintain DO >4 mg/L during treatment.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/disease-stress-management/farmadine/' },
          { label: 'Disease Identification Guide', href: '/brochures/disease-stress-management/farmadine/disease-identification-guide' },
        ],
        faqs: [
          { question: 'Is FARMADINE safe for all species?', answer: 'Yes, it is safe for shrimp, fish, and prawns at recommended dosages. Always maintain DO above 4 mg/L during treatment.' },
          { question: 'How long after treatment can I apply probiotics?', answer: 'Wait at least 48 hours after FARMADINE treatment before applying probiotics or bacterial products.' },
        ],
      },
      {
        name: 'FARM 80%',
        slug: 'farm-80',
        icon: 'flask',
        image: '/images/products/farm-80.svg',
        tagline: 'Clean surfaces. Controlled algae. Safer molting.',
        shortDescription: 'Pond disinfectant & surface sanitizer with Benzyl Konium Chloride for bacterial load control.',
        description: 'FARM 80% is a concentrated pond disinfectant formulated with Benzyl Konium Chloride 80% w/v. It effectively reduces bacterial load on shrimp and fish body surfaces, controls gill rot, tail rot, and antenna rot, and manages excess algae without crashing dissolved oxygen. Regular application improves molting uniformity and shell clarity in crustacean ponds.',
        form: 'Liquid Concentrate',
        dosage: '500 ml per acre-foot of water',
        packSize: '5 L Can',
        shelfLife: '12 months',
        specs: [
          { label: 'Active', value: 'Benzyl Konium Chloride 80% w/v' },
        ],
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Powerful disinfectant for shrimp/fish body surfaces',
          'Removes bacterial load & controls gill/tail/antenna rot',
          'Reduces excess algae without crashing DO',
          'Improves molting uniformity & shell clarity',
        ],
        applicationSteps: [
          'Dilute 1 L in 20–30 L pond water',
          'Mix with clean sand for even broadcasting',
          'Apply during calm weather with aerators running',
          'Wait 48 hrs before restocking or probiotic application',
        ],
        farmerTip: 'Use only when bacterial load or rot symptoms are visible. Never mix with iodine or oxidizers.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/disease-stress-management/farm-80/' },
          { label: 'Safety & Handling Guide', href: '/brochures/disease-stress-management/farm-80/safety-handling-guide' },
        ],
        faqs: [
          { question: 'Can FARM 80% be used as a preventive?', answer: 'It is best used curatively when symptoms appear. For prevention, focus on probiotics and water quality management.' },
          { question: 'Is FARM 80% safe for biofloc systems?', answer: 'Use with caution in biofloc systems. It may impact beneficial bacterial communities. Spot-treat affected areas rather than whole-pond application.' },
        ],
      },
    ],
  },
  {
    name: 'Feed & Pond Preparers',
    slug: 'feed-pond-preparers',
    icon: 'feed',
    description: 'Premium feed supplements and pond preparation products to optimize growth conditions and nutritional intake.',
    heroTitle: 'Feed & Pond Preparers',
    heroDescription: 'Premium feed supplements and pond preparation products designed to maximize growth rates and nutritional efficiency in your aquaculture operations.',
    metaTitle: 'Feed & Pond Preparers | Amrich Pharma',
    metaDescription: 'Feed supplements, binding gels, growth boosters, and pond fertility balancers for shrimp and fish farming. Improve FCR and pond productivity.',
    products: [
      {
        name: 'GRO-BIND',
        slug: 'gro-bind',
        icon: 'droplet',
        image: '/images/products/gro-bind.svg',
        tagline: 'Stable pellets. Less sink. More growth.',
        shortDescription: 'Feed binding gel that prevents pellet disintegration, reduces waste & improves FCR.',
        description: 'GRO-BIND is a liquid gel binder that creates a protective coating around feed pellets, preventing disintegration in water. This dramatically reduces feed waste, sludge accumulation, and ammonia spikes from uneaten feed. By keeping pellets intact longer, it ensures better nutrient absorption and improved Feed Conversion Ratio, especially during high-density stocking and monsoon months.',
        form: 'Liquid Gel Binder',
        dosage: '2–3 ml per kg feed',
        packSize: '1 L Bottle',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Prevents pellet disintegration in water',
          'Reduces feed waste & sludge accumulation',
          'Improves nutrient absorption & FCR',
          'Lowers ammonia spike from uneaten feed',
        ],
        applicationSteps: [
          'Spray evenly over dry feed in mixing tray',
          'Tumble for 2–3 mins until fully coated',
          'Air dry for 5 mins before broadcasting',
          'Feed immediately for best water stability',
        ],
        farmerTip: 'Critical during high-density stocking & monsoon months when feed sinkage increases.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/feed-pond-preparers/gro-bind/' },
          { label: 'FCR Comparison Chart', href: '/brochures/feed-pond-preparers/gro-bind/fcr-comparison-chart' },
        ],
        faqs: [
          { question: 'Does GRO-BIND affect feed palatability?', answer: 'No, GRO-BIND is odorless and tasteless. Shrimp and fish accept coated feed normally.' },
          { question: 'Can I use GRO-BIND with medicated feed?', answer: 'Yes, apply GRO-BIND after medication coating to lock in both the medicine and nutrients.' },
        ],
      },
      {
        name: 'OMEGA-BOOSTER',
        slug: 'omega-booster',
        icon: 'capsule',
        image: '/images/products/omega-booster.svg',
        tagline: 'Faster weight gain. Stronger stress resistance.',
        shortDescription: 'Growth & immunity support supplement that accelerates metabolic rate and feed assimilation.',
        description: 'OMEGA-BOOSTER is a liquid and powder blend supplement that accelerates metabolic rate, enhances feed assimilation, and strengthens immune response against seasonal stressors. It supports uniform molting, better size grading, and reduces mortality during weather fluctuations, monsoon transitions, and temperature swings common along Indian coastal belts.',
        form: 'Liquid/Powder Blend',
        dosage: 'As per pond size & growth stage',
        packSize: '1 L / 1 kg',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Accelerates metabolic rate & feed assimilation',
          'Strengthens immune response against seasonal shifts',
          'Reduces mortality during weather fluctuations',
          'Supports uniform molting & size grading',
        ],
        applicationSteps: [
          'Mix recommended dose in feeding trough or pond water',
          'Apply during early morning feeding cycles',
          'Ensure even distribution across active zones',
          'Continue for 3–5 consecutive days during stress periods',
        ],
        farmerTip: 'Pair with probiotics for maximum gut-to-growth efficiency. Ideal for AP, TN & Odisha coastal cycles.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/feed-pond-preparers/omega-booster/' },
          { label: 'View Growth Curve Data', href: '/brochures/feed-pond-preparers/omega-booster/growth-curve-data' },
        ],
        faqs: [
          { question: 'When is the best time to use OMEGA-BOOSTER?', answer: 'Use during early grow-out for growth acceleration and during weather transitions for stress protection.' },
          { question: 'Can I mix OMEGA-BOOSTER with other feed supplements?', answer: 'Yes, it is compatible with most feed additives and probiotics.' },
        ],
      },
      {
        name: 'FARMAMIN',
        slug: 'farmamin',
        icon: 'powder',
        image: '/images/products/farmamin.svg',
        tagline: 'Rich water. Stable parameters. Zero guesswork.',
        shortDescription: 'Pond fertility & mineral balancer that boosts productivity and maintains essential minerals.',
        description: 'FARMAMIN is a powdered pond fertility and mineral balancer that boosts soil productivity and maintains essential minerals for strong exoskeleton development in crustaceans. It naturally stabilizes pH, alkalinity, and hardness while lowering toxic gas buildup and supporting higher dissolved oxygen levels. Regular use prevents soft-shell syndrome and creates optimal conditions for rapid growth.',
        form: 'Powder',
        dosage: '1–1.5 kg per acre',
        packSize: '1 kg Pouch',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish', 'Prawns'],
        benefits: [
          'Boosts pond fertility & soil productivity',
          'Maintains essential minerals for strong exoskeleton development',
          'Stabilizes pH, alkalinity & hardness naturally',
          'Lowers toxic gas buildup & supports higher DO',
        ],
        applicationSteps: [
          'Pre-mix 1–1.5 kg in 20 L water. Stir until dissolved',
          'Broadcast across pond surface during calm weather',
          'Avoid application during heavy rain or strong winds',
          'Run aerators for 30 mins post-dosing',
        ],
        farmerTip: 'Apply every 7–10 days during pre-molt stages to prevent soft-shell syndrome.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/feed-pond-preparers/farmamin/' },
          { label: 'View Mineral Profile', href: '/brochures/feed-pond-preparers/farmamin/mineral-profile' },
        ],
        faqs: [
          { question: 'How is FARMAMIN different from regular minerals?', answer: 'FARMAMIN combines fertility enhancement with mineral balancing, making it a dual-action product for both water and soil health.' },
          { question: 'Can I use FARMAMIN with probiotics?', answer: 'Yes, it works synergistically with probiotics. Apply FARMAMIN first, then probiotics 24 hours later.' },
        ],
      },
      {
        name: 'BLOOMER',
        slug: 'bloomer',
        icon: 'powder',
        image: '/images/products/bloomer.svg',
        tagline: 'Stable color. Natural food. Zero crashes.',
        shortDescription: 'Plankton bloom regulator that promotes stable diatom & green algae growth.',
        description: 'BLOOMER is a plankton bloom regulator that promotes stable diatom and green algae populations while preventing sudden phytoplankton die-offs. The stable bloom provides natural feed for early-stage stock, buffers pH through photosynthetic activity, and maintains healthy dissolved oxygen levels. Proper bloom management reduces dependency on artificial feed during early nursery phases.',
        form: 'Powder',
        dosage: '1–1.5 kg per acre',
        packSize: '5 kg Pouch',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Promotes stable diatom & green algae blooms',
          'Prevents sudden phytoplankton die-offs',
          'Provides natural feed for early-stage stock',
          'Buffers pH & DO through photosynthetic balance',
        ],
        applicationSteps: [
          'Dissolve in 20 L pond water',
          'Broadcast during sunny morning hours',
          'Avoid application during heavy cloud cover',
          'Repeat every 7–10 days as bloom density requires',
        ],
        farmerTip: 'Best paired with FARM-PS for long-term bloom stability & water clarity.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/feed-pond-preparers/bloomer/' },
          { label: 'Bloom Color Guide', href: '/brochures/feed-pond-preparers/bloomer/bloom-color-guide' },
        ],
        faqs: [
          { question: 'How long does it take to see bloom development?', answer: 'Initial bloom development is visible within 3–5 days in sunny conditions. Full establishment takes 7–10 days.' },
          { question: 'What water color indicates a healthy bloom?', answer: 'A light green or golden-brown color indicates healthy diatom/algae balance. Dark green or blue-green suggests imbalance.' },
        ],
      },
    ],
  },
  {
    name: 'Water Quality & Ammonia Control',
    slug: 'water-quality-ammonia-control',
    icon: 'water',
    description: 'Professional-grade water treatment products to maintain optimal water quality and control ammonia levels.',
    heroTitle: 'Water Quality & Ammonia Control',
    heroDescription: 'Professional-grade water treatment solutions that maintain optimal quality parameters and control ammonia for healthy, productive aquaculture systems.',
    metaTitle: 'Water Quality & Ammonia Control | Amrich Pharma',
    metaDescription: 'Professional water treatment products for aquaculture. Ammonia removers, oxygen boosters, water conditioners, and metabolic support for shrimp and fish ponds.',
    products: [
      {
        name: 'OXY-FARM',
        slug: 'oxy-farm',
        icon: 'capsule',
        image: '/images/products/oxy-farm.svg',
        tagline: 'More oxygen. Cleaner water. Safer nights.',
        shortDescription: 'DO & nitrification support with Paracoccus spp. + denitrifying bacteria for oxygen crashes.',
        description: 'OXY-FARM is a specialized microbial blend of Paracoccus spp. and denitrifying bacteria that naturally boosts dissolved oxygen levels through balanced microbial respiration. It converts toxic nitrites into safe nitrogen gas, prevents night-time oxygen crashes, and works efficiently in both brackish and freshwater systems. Critical during high-biomass weeks when oxygen demand peaks.',
        form: 'Capsule/Powder Blend',
        dosage: 'As per water volume & biomass',
        packSize: '1 kg / Capsule Packs',
        shelfLife: '12 months',
        specs: [
          { label: 'Composition', value: 'Paracoccus spp. + Denitrifying Bacteria' },
        ],
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Boosts DO levels naturally through microbial respiration balance',
          'Converts toxic nitrites into safe nitrogen gas',
          'Prevents night-time oxygen crashes',
          'Works efficiently in brackish & freshwater systems',
        ],
        applicationSteps: [
          'Distribute evenly across pond surface or mix with water',
          'Apply before dusk or after heavy feeding',
          'Ensure aerators run during peak microbial activation',
          'Monitor DO levels 12 hrs post-application',
        ],
        farmerTip: 'Critical during high biomass months (Week 6+). Pair with GASO CLEAN for full nitrogen cycle control.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/water-quality-ammonia-control/oxy-farm/' },
          { label: 'DO Management Calendar', href: '/brochures/water-quality-ammonia-control/oxy-farm/do-management-calendar' },
        ],
        faqs: [
          { question: 'When is the best time to apply OXY-FARM?', answer: 'Apply before dusk or after heavy feeding when DO levels begin to drop. Morning application is also effective.' },
          { question: 'How long does OXY-FARM take to show results?', answer: 'DO improvement is typically measurable within 12–24 hours. Nitrite reduction takes 48–72 hours for full effectiveness.' },
        ],
      },
      {
        name: 'GASO CLEAN',
        slug: 'gaso-clean',
        icon: 'flask',
        image: '/images/products/gaso-clean.svg',
        tagline: 'Zero spikes. Clear water. Stress-free stock.',
        shortDescription: 'Ammonia & nitrite remover with herbal + nitrifying bacteria blend for toxic gas control.',
        description: 'GASO CLEAN is a liquid microbial blend combining Nitrosococcus sp. and Nitrococcus sp. with herbal extracts to rapidly eliminate toxic ammonia and nitrite from pond water. The dual-action formula works efficiently across 5–65 ppt salinity and 5–45°C temperature range, with best performance at pH 7.0–8.0. Essential after heavy feeding, rain runoff events, or when biomass exceeds system carrying capacity.',
        form: 'Liquid Microbial Blend',
        dosage: '1–2 L per acre',
        packSize: '1 L Can',
        shelfLife: '12 months',
        specs: [
          { label: 'Composition', value: 'Nitrosococcus sp. & Nitrococcus sp. + Herbal Extracts' },
          { label: 'Salinity Range', value: '5–65 ppt' },
          { label: 'Temperature Range', value: '5–45°C' },
          { label: 'Optimal pH', value: '7.0–8.0' },
        ],
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Eliminates toxic ammonia & nitrite biologically',
          'Herbal + nitrifying blend for broad-spectrum activity',
          'Works across 5–65 ppt & 5–45°C',
          'Safe for brackish & freshwater aquaculture',
        ],
        applicationSteps: [
          'Mix 1–2 L in 30–40 L pond water',
          'Sprinkle evenly across pond with aerators running',
          'Avoid chemical treatments 24 hrs before/after',
          'Test ammonia levels 48 hrs post-application',
        ],
        farmerTip: 'Critical after heavy feeding, rain runoff, or high biomass. Pair with PRO PLUS for full nitrogen cycle management.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/water-quality-ammonia-control/gaso-clean/' },
          { label: 'Ammonia Response Flowchart', href: '/brochures/water-quality-ammonia-control/gaso-clean/ammonia-response-flowchart' },
        ],
        faqs: [
          { question: 'How quickly does GASO CLEAN reduce ammonia?', answer: 'Initial ammonia reduction is measurable within 24 hours. Full control is typically achieved within 48 hours.' },
          { question: 'Can I use GASO CLEAN preventively?', answer: 'Yes, weekly preventive applications during high-risk periods (monsoon, high biomass) prevent dangerous spikes before they occur.' },
        ],
      },
      {
        name: 'W-SOFTENER',
        slug: 'w-softener',
        icon: 'powder',
        image: '/images/products/w-softener.svg',
        tagline: 'Stable pH. Soft water. Stress-free stock.',
        shortDescription: 'Water conditioner & alkalinity balancer that neutralizes hard water shocks and buffers pH swings.',
        description: 'W-SOFTENER is a powdered water conditioner that neutralizes high alkalinity, buffers pH swings during rain or tidal influx, and improves osmoregulation in shrimp and fish. By creating stable water chemistry, it enhances the effectiveness of probiotics and mineral treatments. Essential before stocking and during monsoon transitions when water parameters fluctuate most.',
        form: 'Powder/Granules',
        dosage: '1–2 kg per acre',
        packSize: '1 kg Pouch',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Neutralizes high alkalinity & hard water shocks',
          'Buffers pH swings during rain or tidal influx',
          'Improves shrimp/fish osmoregulation',
          'Enhances probiotic & mineral effectiveness',
        ],
        applicationSteps: [
          'Pre-dissolve in 20 L water',
          'Broadcast evenly across pond perimeter',
          'Avoid mixing with oxidizers or iodine products',
          'Test pH 24 hrs post-application',
        ],
        farmerTip: 'Essential before stocking & during monsoon transitions. Always test total alkalinity first.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/water-quality-ammonia-control/w-softener/' },
          { label: 'Water Parameter Checklist', href: '/brochures/water-quality-ammonia-control/w-softener/water-parameter-checklist' },
        ],
        faqs: [
          { question: 'What alkalinity level should I target?', answer: 'Target 120–180 mg/L for shrimp and 100–200 mg/L for fish. Always test before and after application.' },
          { question: 'How often should I apply W-SOFTENER?', answer: 'Apply before stocking and after heavy rain or tidal changes. Weekly during monsoon season for pH stability.' },
        ],
      },
      {
        name: 'EASY LITE',
        slug: 'easy-lite',
        icon: 'capsule',
        image: '/images/products/easy-lite.svg',
        tagline: 'Lighter load on ponds. Heavier harvests.',
        shortDescription: 'Metabolic & oxygen utilization support that enhances cellular oxygen uptake and reduces metabolic stress.',
        description: 'EASY LITE is a metabolic support formula that enhances cellular oxygen uptake efficiency, reducing metabolic stress during high-temperature periods and low-DO nights. It supports liver and hepatopancreas function, helping shrimp and fish cope with the physiological demands of rapid growth. Regular use during grow-out improves survival rates and harvest weights.',
        form: 'Powder/Liquid Blend',
        dosage: 'As per water volume & biomass',
        packSize: '500 gm / 1 L',
        shelfLife: '12 months',
        targetSpecies: ['Shrimp', 'Fish'],
        benefits: [
          'Enhances cellular oxygen uptake efficiency',
          'Reduces metabolic stress during high temps',
          'Supports liver & hepatopancreas function',
          'Improves survival during low-DO nights',
        ],
        applicationSteps: [
          'Dissolve in pond water or mix with feed',
          'Apply during peak stress windows (afternoon/evening)',
          'Run aerators to maximize distribution',
          'Use 2x/week during grow-out phase',
        ],
        farmerTip: 'Best paired with OXY-FARM during pre-molt & sudden weather drops.',
        resources: [
          { label: 'Download Brochure', href: '/brochures/water-quality-ammonia-control/easy-lite/' },
          { label: 'Stress Management Guide', href: '/brochures/water-quality-ammonia-control/easy-lite/stress-management-guide' },
        ],
        faqs: [
          { question: 'When should I start using EASY LITE?', answer: 'Start from Week 4 of grow-out when metabolic load increases. Use 2x/week through harvest.' },
          { question: 'Can EASY LITE replace aeration?', answer: 'No, EASY LITE enhances oxygen utilization but does not replace mechanical aeration. Always maintain adequate aeration.' },
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
