export interface ResourceSection {
  heading: string;
  body: string;
}

export interface ResourceContent {
  title: string;
  description: string;
  sections: ResourceSection[];
}

export const resourceCatalog: Record<string, ResourceContent> = {
  'lab-report-strain-ids': {
    title: 'Lab Report & Strain IDs',
    description: 'Certified microbial strain identification and laboratory analysis for PRO PLUS probiotic formulation.',
    sections: [
      { heading: 'Strain Composition', body: 'PRO PLUS contains >1.2 Billion CFU/g of Bacillus spp. (5 strains) and Paracoccus spp. All strains are certified non-pathogenic and suitable for aquaculture use across 5–65 ppt salinity.' },
      { heading: 'Quality Assurance', body: 'Each batch is tested for viability, purity, and absence of Salmonella, E. coli, and Vibrio pathogens. Lab reports are available on request for each production lot.' },
      { heading: 'Shelf Life Stability', body: 'Maintains >90% viability for 12 months when stored below 30\°C in sealed packaging. Refrigeration extends viability beyond 18 months.' },
    ],
  },
  'density-dosage-chart': {
    title: 'Density Dosage Chart',
    description: 'Recommended FARM PRO dosages based on stocking density and pond conditions.',
    sections: [
      { heading: 'Low Density (5–20 PL/sq.m)', body: 'Apply 500 ml per acre. Suitable for extensive farming with minimal water exchange.' },
      { heading: 'Medium Density (20–100 PL/sq.m)', body: 'Apply 750 ml per acre. Standard recommendation for semi-intensive systems.' },
      { heading: 'High Density (100–250 PL/sq.m)', body: 'Apply 1 L per acre. Required for intensive farming with high feed input.' },
      { heading: 'Ultra-High Density (400–500 PL/sq.m)', body: 'Apply 1 L per acre every 10 days. Critical for biofloc and super-intensive systems.' },
    ],
  },
  'field-trial-data': {
    title: 'Field Trial Data',
    description: 'Results from controlled field trials of FARM-PS phosphate-solubilizing probiotic.',
    sections: [
      { heading: 'Trial Overview', body: 'Field trials conducted across 12 ponds in Andhra Pradesh and Tamil Nadu over 3 crop cycles. FARM-PS was applied weekly at 500 ml–1 L per acre alongside standard farm practices.' },
      { heading: 'Key Results', body: 'Phosphate availability increased 2.3x over control ponds. Phytoplankton density improved by 40%. Farmers reduced chemical fertilizer use by 35% on average.' },
      { heading: 'Water Quality Impact', body: 'Ponds treated with FARM-PS showed 28% lower total ammonia nitrogen and 22% higher dissolved oxygen compared to untreated controls.' },
    ],
  },
  'fcr-reduction-case-studies': {
    title: 'FCR Reduction Case Studies',
    description: 'Real farm data showing FCR improvement with GUT-X gut health probiotic.',
    sections: [
      { heading: 'Andhra Pradesh — 10-acre Farm', body: 'FCR reduced from 1.8 to 1.35 over a 90-day crop cycle. Survival rate improved from 72% to 86%. Estimated feed cost savings of Rs. 45,000 per crop.' },
      { heading: 'Tamil Nadu — 8-acre Farm', body: 'FCR improved from 1.7 to 1.3. Size uniformity increased significantly — 78% of harvest fell within target weight range vs 55% in previous cycle.' },
      { heading: 'Gujarat — 15-acre Farm', body: 'With GUT-X + PRO PLUS protocol, FCR dropped from 1.9 to 1.4. Antibiotic usage reduced by 60%. Total production increased 22%.' },
    ],
  },
  'step-by-step-care-guide': {
    title: 'Step-by-Step Care Guide',
    description: 'Complete protocol for using SHRIMP CARE multi-component health pack.',
    sections: [
      { heading: 'Week 1: Pond Preparation', body: 'Apply Pack A to stabilize water parameters. Ensure DO >4 mg/L and pH 7.5–8.5 before proceeding.' },
      { heading: 'Week 2: Stocking Support', body: 'Apply Pack B 24 hours post-stocking to reduce handling stress and initiate immune support.' },
      { heading: 'Week 3–6: Grow-out Maintenance', body: 'Apply Pack C every 10 days. Monitor feed response and water quality. Adjust aeration as biomass increases.' },
      { heading: 'Week 7+: Pre-Harvest Optimization', body: 'Apply Pack D during final 3 weeks to improve shell hardness, size uniformity, and reduce post-harvest mortality.' },
    ],
  },
  'stress-response-protocol': {
    title: 'Stress Response Protocol',
    description: 'Emergency and preventive stress management using FARM-C+ vitamin formula.',
    sections: [
      { heading: 'Anticipated Stress Events', body: 'Apply 250 g per acre 2–3 days before stocking, transport, or weather changes. Repeat for 3 consecutive days.' },
      { heading: 'Active Stress Response', body: 'Apply 500 g per acre immediately upon observing stress signs (surface swimming, reduced feeding, erratic movement). Continue for 5 days.' },
      { heading: 'Post-Disease Recovery', body: 'After disease treatment, apply 500 g per acre for 7 days to restore appetite and support tissue regeneration.' },
    ],
  },
  'disease-identification-guide': {
    title: 'Disease Identification Guide',
    description: 'Visual guide to common shrimp and fish diseases treatable with FARMADINE.',
    sections: [
      { heading: 'Blackgill Disease', body: 'Darkening of gill tissue caused by fungal or bacterial infection. Shrimp exhibit reduced feeding and surface breathing. Treat with FARMADINE at 250 ml per acre.' },
      { heading: 'Browngill Disease', body: 'Brown discoloration of gills from environmental stress and bacterial colonization. Common in high-density ponds with poor water exchange.' },
      { heading: 'Fungal Infections', body: 'White or cotton-like growth on body surface or eggs. Most common in low-temperature periods. FARMADINE application at 500 ml per acre is effective.' },
    ],
  },
  'safety-handling-guide': {
    title: 'Safety & Handling Guide',
    description: 'Important safety information for handling FARM 80% pond disinfectant.',
    sections: [
      { heading: 'Personal Protection', body: 'Wear gloves, safety goggles, and protective clothing during handling. Avoid skin contact. Wash thoroughly after use.' },
      { heading: 'Storage Requirements', body: 'Store in a cool, dry place away from direct sunlight. Keep away from oxidizers, acids, and reducing agents. Do not store near feed or probiotics.' },
      { heading: 'Emergency Measures', body: 'For eye contact: rinse with water for 15 minutes. For skin contact: wash with soap and water. If ingested: do not induce vomiting, seek medical attention.' },
    ],
  },
  'fcr-comparison-chart': {
    title: 'FCR Comparison Chart',
    description: 'Feed conversion ratio benchmarks with and without GRO-BIND feed gel binder.',
    sections: [
      { heading: 'Without GRO-BIND', body: 'Typical FCR: 1.6–1.9. Feed loss from pellet disintegration: 8–15%. Ammonia spikes from wasted feed: common during Weeks 4–8.' },
      { heading: 'With GRO-BIND', body: 'Typical FCR: 1.2–1.5. Feed loss reduced to 2–5%. Pellet stability maintained for 4–6 hours in water.' },
      { heading: 'Cost Impact', body: 'At Rs. 35/kg feed, GRO-BIND saves approximately Rs. 7,000–12,000 per ton of feed used through reduced waste and better FCR.' },
    ],
  },
  'growth-curve-data': {
    title: 'Growth Curve Data',
    description: 'Weight gain and growth rate benchmarks for OMEGA-BOOSTER supplemented farms.',
    sections: [
      { heading: 'Week 0–4: Nursery Phase', body: 'OMEGA-BOOSTER accelerates early growth by 18–22%. Average daily gain: 0.15–0.20 g/day vs 0.12–0.16 g/day without.' },
      { heading: 'Week 5–8: Rapid Growth Phase', body: 'Growth rate peaks at 0.35–0.45 g/day. Uniformity improved — 85% within target weight range vs 70% control.' },
      { heading: 'Week 9–12: Finish Phase', body: 'Final harvest weight: 18–22 g (Vannamei at 105 days) vs 15–18 g control. FCR maintained at 1.2–1.4.' },
    ],
  },
  'mineral-profile': {
    title: 'Mineral Profile',
    description: 'Complete mineral composition and analysis of FARMAMIN pond fertility balancer.',
    sections: [
      { heading: 'Primary Minerals', body: 'Calcium (Ca): 18%, Magnesium (Mg): 6%, Potassium (K): 4%. These form the core mineral matrix for exoskeleton development and osmoregulation.' },
      { heading: 'Trace Elements', body: 'Zinc (Zn): 500 ppm, Copper (Cu): 200 ppm, Manganese (Mn): 400 ppm, Iron (Fe): 800 ppm. Essential for enzyme function and immune response.' },
      { heading: 'Buffering Capacity', body: 'Total alkalinity contribution: 80 mg/L as CaCO3 per kg applied. Natural pH buffer between 7.2–8.5 without chemical additives.' },
    ],
  },
  'bloom-color-guide': {
    title: 'Bloom Color Guide',
    description: 'Visual reference for identifying healthy vs problematic pond blooms using BLOOMER.',
    sections: [
      { heading: 'Golden-Brown (Healthy Diatom Bloom)', body: 'Ideal bloom color. Indicates dominance of beneficial diatoms. Provides natural nutrition, stable DO, and pH buffer. Maintain with BLOOMER every 7–10 days.' },
      { heading: 'Light Green (Healthy Green Algae)', body: 'Good bloom color. Green algae dominance supports natural food web. Monitor density — if water becomes dark green, reduce application frequency.' },
      { heading: 'Dark Green / Blue-Green (Problematic)', body: 'Indicates cyanobacteria dominance. Can produce toxins and cause DO crashes. Reduce feeding, increase aeration, and apply FARM 80% if needed.' },
    ],
  },
  'do-management-calendar': {
    title: 'DO Management Calendar',
    description: 'Seasonal dissolved oxygen management schedule using OXY-FARM.',
    sections: [
      { heading: 'Summer (Mar–Jun)', body: 'Apply OXY-FARM weekly. High temperatures reduce oxygen solubility. Monitor DO twice daily — critical during afternoon highs and pre-dawn lows.' },
      { heading: 'Monsoon (Jul–Oct)', body: 'Apply OXY-FARM every 5 days. Cloud cover reduces photosynthesis. Risk of DO crashes during sudden temperature drops.' },
      { heading: 'Winter (Nov–Feb)', body: 'Apply OXY-FARM every 10 days. Lower temperatures improve DO solubility but reduce bacterial activity. Adjust dosage based on biomass.' },
    ],
  },
  'ammonia-response-flowchart': {
    title: 'Ammonia Response Flowchart',
    description: 'Step-by-step decision tree for ammonia spike emergencies using GASO CLEAN.',
    sections: [
      { heading: 'TAN 0.5–1.0 ppm (Alert)', body: 'Step 1: Test pH and temperature. Step 2: Apply GASO CLEAN at 1 L per acre. Step 3: Reduce feeding by 30%. Step 4: Re-test after 24 hours.' },
      { heading: 'TAN 1.0–2.0 ppm (Critical)', body: 'Step 1: Apply GASO CLEAN at 2 L per acre immediately. Step 2: Increase aeration to maximum. Step 3: Perform 20% water exchange. Step 4: Stop feeding for 24 hours. Step 5: Re-test every 6 hours.' },
      { heading: 'TAN >2.0 ppm (Emergency)', body: 'Step 1: Apply GASO CLEAN at 3 L per acre. Step 2: Emergency 30% water exchange. Step 3: Maximum aeration with backup generators. Step 4: Apply OXY-FARM for DO support. Step 5: Re-test every 3 hours.' },
    ],
  },
  'water-parameter-checklist': {
    title: 'Water Parameter Checklist',
    description: 'Daily water quality monitoring guide for use with W-SOFTENER.',
    sections: [
      { heading: 'Daily Checks', body: 'Temperature (target: 28–32\°C), Dissolved Oxygen (>4 mg/L), pH (7.5–8.5), TAN (<0.5 ppm). Record all values in a logbook.' },
      { heading: 'Weekly Checks', body: 'Alkalinity (120–180 mg/L), Hardness (100–200 mg/L), Nitrite (<0.1 ppm), Salinity (stable ±2 ppt). Apply W-SOFTENER if alkalinity drops below 120.' },
      { heading: 'Monsoon Triggers', body: 'After heavy rain: test pH and alkalinity immediately. If pH drops >0.5 units: apply W-SOFTENER at 2 kg per acre. Re-test after 24 hours.' },
    ],
  },
  'stress-management-guide': {
    title: 'Stress Management Guide',
    description: 'Comprehensive approach to reducing metabolic stress using EASY LITE.',
    sections: [
      { heading: 'Temperature Stress', body: 'When temperature exceeds 33\°C: apply EASY LITE at 500 g per acre. Combine with increased aeration and reduced feeding. Repeat every 48 hours until temperatures normalize.' },
      { heading: 'Low DO Nights', body: 'Apply EASY LITE before dusk during predicted low-DO nights. Enhances cellular oxygen uptake by 25–30%, reducing mortality risk during critical pre-dawn hours.' },
      { heading: 'Pre-Molt Support', body: 'Apply EASY LITE 2x/week during pre-molt stages. Reduces molting-related mortality by 15–20% by supporting hepatopancreas function and energy metabolism.' },
    ],
  },
};
