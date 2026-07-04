export interface FaqItem {
  question: string;
  answer: string;
}

export interface CategoryFaq {
  categorySlug: string;
  items: FaqItem[];
}

export const faqs: CategoryFaq[] = [
  {
    categorySlug: 'probiotics-soil-care',
    items: [
      {
        question: 'What are the benefits of probiotics in aquaculture?',
        answer: 'Probiotics improve water quality, break down organic waste, suppress pathogenic bacteria, and enhance growth. Our products like FARM PRO and PRO PLUS help create stable pond ecosystems with better DO and lower toxic gas levels.',
      },
      {
        question: 'How do I apply soil probiotics?',
        answer: 'PRO PLUS should be applied during pond preparation and every 15 days during grow-out. Mix 5 kg in 20–30 L water, let settle for 30 minutes, then broadcast evenly across the pond bottom with aerators running.',
      },
      {
        question: 'Can probiotics be used with chemical treatments?',
        answer: 'We recommend avoiding simultaneous use. Allow 48 hours between chemical treatment and probiotic application to ensure beneficial bacteria can establish properly.',
      },
    ],
  },
  {
    categorySlug: 'disease-stress-management',
    items: [
      {
        question: 'What are the most common diseases in shrimp farming?',
        answer: 'Common diseases include Blackgill, Browngill, White Spot Syndrome Virus (WSSV), and Vibrio infections. Our products target these pathogens with proven formulations including FARMADINE for gill rot and FARM 80% for surface infections.',
      },
      {
        question: 'How do I manage stress in my stock?',
        answer: 'Use FARM-C+ before and after handling, transport, or weather changes. Apply for 3 consecutive days during stress events. Maintain proper aeration and monitor feeding response during recovery.',
      },
      {
        question: 'What is the best approach for disease prevention?',
        answer: 'We recommend a integrated approach: maintain water quality with regular testing, use probiotics for beneficial bacteria, apply immune boosters before anticipated stress, and keep disease control products on hand for early intervention.',
      },
    ],
  },
  {
    categorySlug: 'feed-pond-preparers',
    items: [
      {
        question: 'How can I improve my Feed Conversion Ratio?',
        answer: 'Use GRO-BIND to prevent pellet disintegration and GUT-X for better nutrient absorption. OMEGA-BOOSTER also helps accelerate metabolism. Farms typically see 15–25% FCR improvement with our combined approach.',
      },
      {
        question: 'When should I start using feed supplements?',
        answer: 'Start probiotics like GUT-X from Week 2 post-stocking. Use growth supplements like OMEGA-BOOSTER from Week 3–4 during active growth phases. Pond preparers like FARMAMIN should be applied during pond preparation and pre-molt stages.',
      },
      {
        question: 'How do I prepare my pond before stocking?',
        answer: 'Apply FARMAMIN for mineral balance 7–10 days before stocking. For natural feed chains, use BLOOMER to establish stable plankton blooms. Proper pond preparation reduces early-stage mortality significantly.',
      },
    ],
  },
  {
    categorySlug: 'water-quality-ammonia-control',
    items: [
      {
        question: 'What is the ideal ammonia level for shrimp farming?',
        answer: 'For optimal shrimp health, maintain total ammonia below 0.5 ppm and nitrite below 0.1 ppm. Our GASO CLEAN product reduces toxic ammonia to safe levels within 48 hours through biological nitrification.',
      },
      {
        question: 'How often should I test water quality?',
        answer: 'We recommend daily testing during the first 2 weeks after stocking, then every 2–3 days during grow-out. Critical parameters include ammonia, nitrite, pH, dissolved oxygen, alkalinity, and salinity.',
      },
      {
        question: 'What causes low dissolved oxygen at night?',
        answer: 'Night-time DO crashes occur when phytoplankton respiration consumes oxygen without photosynthetic production. OXY-FARM supports microbial balance that stabilizes DO levels, while EASY LITE enhances oxygen utilization efficiency in your stock.',
      },
    ],
  },
];

export function getFaqByCategory(slug: string): FaqItem[] {
  return faqs.find((f) => f.categorySlug === slug)?.items ?? [];
}
