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
    categorySlug: 'disease-stress-management',
    items: [
      {
        question: 'What are the most common diseases in shrimp farming?',
        answer: 'The most common diseases include White Spot Syndrome Virus (WSSV), Early Mortality Syndrome (EMS), and Vibrio infections. Our products target these specific pathogens with proven formulations.',
      },
      {
        question: 'How do AMRich disease prevention products work?',
        answer: 'Our products use a combination of immune stimulants, antimicrobial agents, and stress-reducing compounds to strengthen fish and shrimp natural defenses against common aquaculture pathogens.',
      },
      {
        question: 'Can I use disease management products with probiotics?',
        answer: 'Yes, our disease management products are designed to work synergistically with our probiotic range. We recommend consulting our technical team for an integrated treatment plan.',
      },
    ],
  },
  {
    categorySlug: 'feed-pond-preparers',
    items: [
      {
        question: 'How often should I apply pond preparers?',
        answer: 'We recommend applying pond preparers 7-14 days before stocking. This allows sufficient time for the beneficial microorganisms to establish and create optimal conditions.',
      },
      {
        question: 'What is the best feed supplement for faster growth?',
        answer: 'Our Growth-Boost formula contains essential amino acids and vitamins that accelerate growth rates. Combined with our probiotics for better feed conversion ratios.',
      },
      {
        question: 'Can feed supplements replace regular feed?',
        answer: 'No, our feed supplements are designed to enhance the nutritional value of your regular feed, not replace it. They work best when used as part of a comprehensive feeding program.',
      },
    ],
  },
  {
    categorySlug: 'probiotics-soil-care',
    items: [
      {
        question: 'What are the benefits of probiotics in aquaculture?',
        answer: 'Probiotics improve gut health, enhance immune function, suppress pathogenic bacteria, and improve water quality by breaking down organic waste. They lead to better growth rates and survival.',
      },
      {
        question: 'How do I apply soil care products?',
        answer: 'Soil care products should be applied during pond preparation, 7-10 days before stocking. Distribute evenly across the pond bottom and maintain water depth for optimal activation.',
      },
      {
        question: 'Can probiotics be used with antibiotics?',
        answer: 'We recommend avoiding simultaneous use. Allow 48-72 hours between antibiotic treatment and probiotic application to ensure the beneficial bacteria can establish properly.',
      },
    ],
  },
  {
    categorySlug: 'water-quality-ammonia-control',
    items: [
      {
        question: 'What is the ideal ammonia level for shrimp farming?',
        answer: 'For optimal shrimp health, maintain ammonia levels below 0.5 ppm. Our ammonia control products help reduce toxic ammonia to safe levels quickly and maintain them throughout the production cycle.',
      },
      {
        question: 'How often should I test water quality?',
        answer: 'We recommend daily testing during the first 2 weeks after stocking, then every 2-3 days during grow-out. Critical parameters include ammonia, nitrite, pH, dissolved oxygen, and alkalinity.',
      },
      {
        question: 'Can water quality products be used in biofloc systems?',
        answer: 'Yes, our water quality products are compatible with biofloc technology. In fact, they help maintain the delicate balance needed for successful biofloc systems by controlling ammonia without disrupting beneficial bacteria.',
      },
    ],
  },
];

export function getFaqByCategory(slug: string): FaqItem[] {
  return faqs.find((f) => f.categorySlug === slug)?.items ?? [];
}
