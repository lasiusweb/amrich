export const site = {
  name: 'AMRich Aquaculture Solutions',
  shortName: 'AMRich',
  tagline: 'Premium aquaculture solutions scientifically formulated for healthier farms and sustainable yields across Southeast Asia.',
  description: 'Premium aquaculture products for healthier farms and better yields. Scientifically formulated solutions for disease management, water quality, probiotics, and feed supplements.',
  url: 'https://amrich.netlify.app',
  email: 'info@amrich.netlify.app',
  phone: '+60 (0) 12-345-6789',
  location: 'Southeast Asia',
  founded: 2020,
} as const;

export const productCategories = [
  {
    name: 'Disease & Stress Management',
    slug: 'disease-stress-management',
    href: '/products/disease-stress-management/',
    icon: '🛡️',
    description: 'Advanced treatments and preventive solutions to protect your stock from common aquaculture diseases and environmental stress.',
    gradient: 'from-primary-800 to-primary-900',
    badgeText: 'text-aqua-300',
  },
  {
    name: 'Feed & Pond Preparers',
    slug: 'feed-pond-preparers',
    href: '/products/feed-pond-preparers/',
    icon: '🐟',
    description: 'Premium feed supplements and pond preparation products to optimize growth conditions and nutritional intake.',
    gradient: 'from-forest-800 to-forest-900',
    badgeText: 'text-aqua-300',
  },
  {
    name: 'Probiotics & Soil Care',
    slug: 'probiotics-soil-care',
    href: '/products/probiotics-soil-care/',
    icon: '🦠',
    description: 'Beneficial microorganism formulations and soil treatment solutions for healthier pond ecosystems.',
    gradient: 'from-aqua-600 to-aqua-800',
    badgeText: 'text-white',
  },
  {
    name: 'Water Quality & Ammonia Control',
    slug: 'water-quality-ammonia-control',
    href: '/products/water-quality-ammonia-control/',
    icon: '💧',
    description: 'Professional-grade water treatment products to maintain optimal quality and control ammonia levels.',
    gradient: 'from-blue-600 to-blue-800',
    badgeText: 'text-white',
  },
] as const;

export const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
] as const;
