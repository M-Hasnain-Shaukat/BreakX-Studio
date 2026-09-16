import type { Project } from '../types';

export const PERSONAL_INFO = {
  name: 'Muhammad Hasnain Shaukat',
  brandName: 'BreakX Studio',
  title: 'Frontend Engineer & Digital Web Architect',
  shortBio: 'Building high-converting e-commerce web applications, bespoke digital storefronts, and responsive interfaces with obsessive attention to craft and speed.',
  email: 'mhshaukat01@gmail.com',
  phone: '+92 309 1536642',
  whatsappUrl: 'https://wa.me/923091536642',
  linkedinUrl: 'https://www.linkedin.com/in/m-hasnain-shaukat-398b4b2a8/',
  githubUrl: 'https://github.com/Muhammad-Hasnain-Shaukat',
  instagramUrl: 'https://www.instagram.com/mhs_builds/',
  instagramHandle: '@mhs_builds',
  location: 'Pakistan (PKT / GMT+5)',
  status: 'Available for freelance projects & engineering roles',
};

export const PROJECTS: Project[] = [
  {
    id: 'zewellery',
    slug: 'zewellery-pk',
    name: 'Zewellery PK',
    tagline: 'High-End Luxury Jewelry & Royal Bridal Ornament E-Commerce',
    category: 'Fashion & Lifestyle',
    description: 'A bespoke luxury digital storefront crafted for exquisite Pakistani bridal jewelry, gemstone ornaments, and curated collections with cinematic product reveals.',
    technologies: ['React', 'Tailwind CSS', 'Modern UI/UX', 'Product Catalog', 'Mobile Responsive'],
    liveUrl: 'https://zewellery.vercel.app/',
    posterImage: '/previews/zewellery.jpg',
    featured: true,
    order: 1,
    highlightPoints: [
      'Ornate editorial visual layout designed for high-ticket jewelry presentation',
      'Fluid mobile-first shopping navigation and instant product filtering',
      'Optimized asset delivery for ultra-crisp imagery on Retina displays'
    ],
    linkedinVideoUrl: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_zewellerypk-the-best-of-my-web-dev-projects-activity-7497413416941404160-tyIE',
    statusBadge: 'Featured Showcase'
  },
  {
    id: 'break-x',
    slug: 'break-x',
    name: 'BreakX (v1.0 & v2.0)',
    tagline: 'High-Impact Digital Brand Platform with 2 Video Iterations',
    category: 'Tech & Digital',
    description: 'An aggressive, modern digital studio experience with two distinct architectural iterations (v1.0 and refined v2.0) showcasing kinetic typography and bold layouts.',
    technologies: ['React', 'Interactive Motion', 'Tailwind CSS', 'Responsive Architecture'],
    liveUrl: 'https://break-x.vercel.app/',
    posterImage: '/previews/break-x.jpg',
    featured: true,
    order: 2,
    hasBreakXToggle: true,
    highlightPoints: [
      'Two documented video release iterations demonstrating continuous UX refinement',
      'Modern dark aesthetic with clean contrast and sharp geometry',
      'Optimized viewport animations engineered for zero dropped frames'
    ],
    linkedinVideoUrl: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_breakx-20previous-one-seems-a-bit-of-activity-7499223656221437952-rB-h',
    statusBadge: 'Featured Showcase'
  },
  {
    id: 'bun-n-blaze',
    slug: 'bun-n-blaze',
    name: "Bun N' Blaze",
    tagline: 'Gourmet Artisanal Burger Bar & Fast-Casual Digital Menu',
    category: 'Food & Dining',
    description: 'High-energy, appetizing culinary web experience featuring sizzle-driven food presentation, dynamic combo menus, and conversion-focused ordering flows.',
    technologies: ['React', 'Tailwind CSS', 'Dynamic Menu', 'Food UI/UX', 'Responsive Layout'],
    liveUrl: 'https://bun-n-blaze.vercel.app/',
    posterImage: '/previews/bun-n-blaze.jpg',
    videoUrl: '/videos/bun-n-blaze.mp4',
    featured: true,
    order: 3,
    highlightPoints: [
      'Vibrant visual palette designed to drive appetite and rapid ordering intent',
      'Interactive item showcase with quick ingredients breakdown',
      'Intuitive touch-friendly controls tested on small mobile viewports'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dPepBWFm',
    statusBadge: 'Featured Showcase'
  },
  {
    id: 'desi-bites',
    slug: 'desi-bites',
    name: 'Desi Bites',
    tagline: 'Traditional Flavors & Modern Dining Restaurant Web Hub',
    category: 'Food & Dining',
    description: 'An authentic South Asian cuisine digital destination featuring rich imagery, curated traditional recipe highlights, chef specials, and dining reservations.',
    technologies: ['React', 'Tailwind CSS', 'Restaurant UI', 'Responsive Design'],
    liveUrl: 'https://desi-bites-one.vercel.app/',
    posterImage: '/previews/desi-bites.jpg',
    videoUrl: '/videos/desi-bites.mp4',
    featured: false,
    order: 4,
    highlightPoints: [
      'Warm cultural color harmony celebrating authentic desi dining',
      'Structured food category tabs and chef recommendations',
      'Seamless mobile navigation with direct reservation hooks'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dbub5K-4'
  },
  {
    id: 'apsara',
    slug: 'apsara',
    name: 'Apsara',
    tagline: 'Luxury Pret, Festive Couture & Traditional Women’s Fashion',
    category: 'Fashion & Lifestyle',
    description: 'A poetic, elegant fashion boutique web application celebrating handcrafted embroidery, silk collections, and seasonal festive looks with editorial grace.',
    technologies: ['React', 'Tailwind CSS', 'Editorial Grid', 'Fashion UI', 'Smooth Scroll'],
    liveUrl: 'https://apsara-tau.vercel.app/',
    posterImage: '/previews/apsara.jpg',
    featured: false,
    order: 5,
    highlightPoints: [
      'Serene visual aesthetic highlighting fabric textures and craftsmanship',
      'Lookbook gallery with responsive masonry card arrangements',
      'Effortless collection browsing built for lifestyle shoppers'
    ],
    linkedinVideoUrl: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_apsarabeautiful-as-its-name-for-activity-7499450467161214977-Un8Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo1VGQB6VtYQyebfJhwoSbC0k6GwGj3Weg'
  },
  {
    id: 'eclat',
    slug: 'eclat',
    name: 'Éclat',
    tagline: 'Minimalist Modern Lifestyle & Fragrance Boutique',
    category: 'Fashion & Lifestyle',
    description: 'Understated Parisian-inspired luxury commerce with generous whitespace, subtle borders, high-contrast serif accents, and focused product storytelling.',
    technologies: ['React', 'Tailwind CSS', 'Minimalist UI', 'Micro-Interactions'],
    liveUrl: 'https://eclat-smoky-eight.vercel.app/',
    posterImage: '/previews/eclat.jpg',
    videoUrl: '/videos/eclat.mp4',
    featured: false,
    order: 6,
    highlightPoints: [
      'Sophisticated minimalist design system with balanced negative space',
      'Clear typographic hierarchy with premium editorial feel',
      'Fast client-side rendering with instant load states'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/d5njpf5k'
  },
  {
    id: 'noore',
    slug: 'noore',
    name: 'Noore',
    tagline: 'Contemporary Women’s Apparel & Modern Ethnic Wear',
    category: 'Fashion & Lifestyle',
    description: 'Fashion-forward e-commerce platform blending modern silhouettes with traditional elegance, featuring high-res imagery and seamless product discovery.',
    technologies: ['React', 'Tailwind CSS', 'Responsive Grid', 'Apparel Catalog'],
    liveUrl: 'https://noore-nu.vercel.app/',
    posterImage: '/previews/noore.jpg',
    videoUrl: '/videos/noore.mp4',
    featured: false,
    order: 7,
    highlightPoints: [
      'Tailored catalog grid with instant hover transformations',
      'Optimized touch targets for mobile shoppers',
      'Streamlined product categorization for quick discovery'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dXXD3GqY'
  },
  {
    id: 'vera',
    slug: 'vera',
    name: 'Vera',
    tagline: 'Curated Everyday Accessories & Modern Lifestyle Store',
    category: 'E-Commerce',
    description: 'Clean, contemporary e-commerce portal engineered for lifestyle accessories, watches, and travel gear with an intuitive visual hierarchy.',
    technologies: ['React', 'Tailwind CSS', 'Cart Flow', 'Product Details'],
    liveUrl: 'https://vera-one-tan.vercel.app/',
    posterImage: '/previews/vera.jpg',
    videoUrl: '/videos/vera.mp4',
    featured: false,
    order: 8,
    highlightPoints: [
      'Polished product showcase cards with rating and price indicators',
      'Frictionless responsive layout across mobile, tablet, and desktop',
      'Modern glass-styled interface accents'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/d5njpf5k'
  },
  {
    id: 'nova',
    slug: 'nova',
    name: 'Nova',
    tagline: 'Futuristic SaaS & Digital Platform Experience',
    category: 'Tech & Digital',
    description: 'A dark-mode tech product landing page with glowing neon accents, feature matrix breakdown, and conversion-optimized call-to-action sections.',
    technologies: ['React', 'Tailwind CSS', 'SaaS Landing UI', 'Feature Grids'],
    liveUrl: 'https://nova-rosy-mu.vercel.app/',
    posterImage: '/previews/nova.jpg',
    featured: false,
    order: 9,
    highlightPoints: [
      'High-converting SaaS layout pattern with social proof and feature pillars',
      'Subtle glow badges and interactive button states',
      'Crisp responsive scaling without horizontal spill'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dKieY29Y'
  },
  {
    id: 'step-up',
    slug: 'step-up',
    name: 'Step Up',
    tagline: 'Athletic Footwear & Urban Sneaker Culture Hub',
    category: 'E-Commerce',
    description: 'Bold street-style e-commerce store dedicated to performance sneakers and trending footwear, with size pickers and dynamic product hero cards.',
    technologies: ['React', 'Tailwind CSS', 'Sneaker UI', 'Mobile Commerce'],
    liveUrl: 'https://step-up-mauve-one.vercel.app/',
    posterImage: '/previews/step-up.jpg',
    featured: false,
    order: 10,
    highlightPoints: [
      'Dynamic shoe showcase with high-contrast color accents',
      'Category badges for trending, new arrivals, and limited editions',
      'Snappy mobile shopping drawer experience'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dnTvTK2C'
  },
  {
    id: 'tech-nest',
    slug: 'tech-nest',
    name: 'Tech Nest',
    tagline: 'Smart Consumer Electronics & Audio Hardware Store',
    category: 'E-Commerce',
    description: 'A comprehensive consumer electronics marketplace showcasing headphones, smart gadgets, and tech gear with clear specifications and comparison specs.',
    technologies: ['React', 'Tailwind CSS', 'Tech Store', 'Spec Tables'],
    liveUrl: 'https://tech-nest-teal.vercel.app/',
    posterImage: '/previews/tech-nest.jpg',
    featured: false,
    order: 11,
    highlightPoints: [
      'Technical product spec display with clean iconography',
      'Organized multi-category filters (Audio, Gadgets, Wearables)',
      'Reliable, lightweight client-side state handling'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dNAxdMfy'
  },
  {
    id: 'al-qasim',
    slug: 'al-qasim',
    name: 'Al-Qasim',
    tagline: 'Commercial Enterprise & Institutional Services Portal',
    category: 'Trading & B2B',
    description: 'Corporate business website built with dignified typography, corporate trust indicators, service verticals, and direct consultation contact points.',
    technologies: ['React', 'Tailwind CSS', 'Corporate UI', 'B2B Services'],
    liveUrl: 'https://al-qasim-pi.vercel.app/',
    posterImage: '/previews/al-qasim.jpg',
    featured: false,
    order: 12,
    highlightPoints: [
      'Professional enterprise information architecture',
      'Trust-building milestone markers and team capability showcases',
      'Direct inquiry and quotation CTA integration'
    ],
    linkedinVideoUrl: 'https://lnkd.in/p/dBzs7MEk'
  },
  {
    id: 'ab-traders-3',
    slug: 'ab-traders-3',
    name: 'AB Traders (Edition 3)',
    tagline: 'Modernized Global Commodity Trading & Export Platform',
    category: 'Trading & B2B',
    description: 'The latest evolution of AB Traders, featuring modern glassmorphic cards, international commodity price tracking layout, and streamlined quotation forms.',
    technologies: ['React', 'Tailwind CSS', 'B2B Dashboard UI', 'Trading Platform'],
    liveUrl: 'https://ab-traders-3.vercel.app/',
    posterImage: '/previews/ab-traders-3.jpg',
    featured: false,
    order: 13,
    highlightPoints: [
      'Refined version 3 layout with enhanced data readability',
      'Commodity category breakdown with global shipping guidelines',
      'Fast responsive navigation tailored for international clients'
    ]
  },
  {
    id: 'ab-traders-2',
    slug: 'ab-traders-2',
    name: 'AB Traders (Edition 2)',
    tagline: 'Wholesale Logistics & Import/Export Directory',
    category: 'Trading & B2B',
    description: 'Second generation commercial platform highlighting supply-chain services, bulk product catalogs, and warehouse distribution logistics.',
    technologies: ['React', 'Tailwind CSS', 'Logistics UI', 'Product Directory'],
    liveUrl: 'https://ab-traders-2.vercel.app/',
    posterImage: '/previews/ab-traders-2.jpg',
    featured: false,
    order: 14,
    highlightPoints: [
      'Comprehensive product directory with bulk inquiry flows',
      'Structured supply chain capability indicators',
      'Cross-platform desktop and mobile optimization'
    ]
  },
  {
    id: 'ab-traders-1',
    slug: 'ab-traders-1',
    name: 'AB Traders (Edition 1)',
    tagline: 'Foundational B2B Commerce & Distribution Web Portal',
    category: 'Trading & B2B',
    description: 'The foundational trading platform establishing the brand presence, product lines, company heritage, and client communication channels.',
    technologies: ['React', 'Tailwind CSS', 'B2B Commercial', 'Responsive Web'],
    liveUrl: 'https://ab-traders-1.vercel.app/',
    posterImage: '/previews/ab-traders-1.jpg',
    featured: false,
    order: 15,
    highlightPoints: [
      'Clean tabular presentation of wholesale commercial inventory',
      'Reliable foundational design system with responsive layouts',
      'Direct phone and email contact actions'
    ]
  },
  {
    id: 'mhs-store',
    slug: 'mhs-store',
    name: 'MHS Store',
    tagline: 'Flagship Multi-Department E-Commerce Experience',
    category: 'E-Commerce',
    description: 'A comprehensive multi-department e-commerce powerhouse built by MHS, featuring extensive product architecture, luxury retail layout, and dedicated video walkthrough.',
    technologies: ['React', 'Tailwind CSS', 'Full Store Engine', 'Live Video Demo'],
    liveUrl: 'https://mhs-store.vercel.app/men.html',
    posterImage: '/previews/mhs-store-new.jpg',
    videoUrl: '/videos/new.mp4',
    featured: false,
    order: 16,
    highlightPoints: [
      'Flagship retail architecture featuring luxury facade and multi-department layout',
      'Detailed video showcase available with step-by-step feature breakdown',
      'Live deployment with dynamic product discovery'
    ],
    linkedinVideoUrl: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_mhs-storededicating-an-entire-section-activity-7499867898371514369-8fE3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo1VGQB6VtYQyebfJhwoSbC0k6GwGj3Weg',
    linkedinVideoUrl2: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_youve-often-seen-3d-websites-presented-in-activity-7499781025791643648-65_B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEo1VGQB6VtYQyebfJhwoSbC0k6GwGj3Weg',
    statusBadge: 'Live Deployment'
  }
];

export const CAPABILITIES = [
  {
    title: 'Modern Frontend Engineering',
    description: 'Pixel-perfect, responsive web applications built with modern React, TypeScript, and Tailwind CSS. Clean, maintainable component architecture.',
    icon: 'Code2'
  },
  {
    title: 'E-Commerce & High-Converting UIs',
    description: 'Engaging product showcases, seamless shopping carts, and conversion-focused checkout flows designed to elevate brand authority.',
    icon: 'ShoppingBag'
  },
  {
    title: 'Performance & Speed Optimization',
    description: 'Lighthouse-optimized experiences with instant load times, asset compression, lazy loading, and fluid 60fps animations.',
    icon: 'Zap'
  },
  {
    title: 'Mobile-First Design Craft',
    description: 'Every interface is engineered from the ground up for thumb-friendly navigation, tactile touch interactions, and zero horizontal spill.',
    icon: 'Smartphone'
  }
];
