export const site = {
  name: 'Amrich Pharma',
  shortName: 'Amrich',
  tagline: 'Way to Go Ahead',
  description: 'Eco-safe probiotics, water quality solutions, and disease management for shrimp & fish farming.',
  url: 'https://amrich.netlify.app',
  email: 'amrichpharma@gmail.com',
  phone: '+91 97123 35338',
  address: 'Plot No. 2, Sainath Nagar, Shivaji Mandpeshwar Road, Dahisar, Mumbai-400068, India',
  location: 'Mumbai, India',
  founded: 2015,
} as const;

export const productCategories = [
  {
    name: 'Probiotics & Soil Care',
    slug: 'probiotics-soil-care',
    href: '/products/probiotics-soil-care/',
    icon: 'probiotics',
    description: 'Beneficial microorganism formulations and soil treatment solutions for healthier pond ecosystems.',
    heroTitle: 'Probiotics & Soil Care for Healthy Aquaculture Ponds',
    heroDescription: 'Unhealthy pond bottoms kill growth before it starts. Our soil & probiotic blends break down organic load, prevent black soil, and create a clean, oxygen-rich environment for faster, safer shrimp & fish growth.',
  },
  {
    name: 'Disease & Stress Management',
    slug: 'disease-stress-management',
    href: '/products/disease-stress-management/',
    icon: 'disease',
    description: 'Advanced treatments and preventive solutions to protect aquaculture stock from common diseases and environmental stress.',
    heroTitle: 'Disease & Stress Management',
    heroDescription: 'Advanced treatments and preventive solutions to safeguard your aquaculture operations against disease outbreaks and environmental stress.',
  },
  {
    name: 'Feed & Pond Preparers',
    slug: 'feed-pond-preparers',
    href: '/products/feed-pond-preparers/',
    icon: 'feed',
    description: 'Premium feed supplements and pond preparation products to optimize growth conditions and nutritional intake.',
    heroTitle: 'Feed & Pond Preparers',
    heroDescription: 'Premium feed supplements and pond preparation products designed to maximize growth rates and nutritional efficiency in your aquaculture operations.',
  },
  {
    name: 'Water Quality & Ammonia Control',
    slug: 'water-quality-ammonia-control',
    href: '/products/water-quality-ammonia-control/',
    icon: 'water',
    description: 'Professional-grade water treatment products to maintain optimal water quality and control ammonia levels.',
    heroTitle: 'Water Quality & Ammonia Control',
    heroDescription: 'Professional-grade water treatment solutions that maintain optimal quality parameters and control ammonia for healthy, productive aquaculture systems.',
  },
] as const;

export const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Contact', href: '/contact' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
] as const;
