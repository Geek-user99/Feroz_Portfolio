import {assetUrl} from '../lib/assets';

export interface Project {
  id: string;
  title: string;
  slug: string;
  client: string;
  cover: string;
  gallery: string[];
}

export interface MotionWork {
  title: string;
  id: string;
  image: string;
}

export interface MarqueeLogo {
  name: string;
  image: string;
}

export interface ExpertiseArea {
  n: string;
  title: string;
  body: string;
}

export interface AboutClientItem {
  name: string;
  slug?: string;
}

export const WHATSAPP_NUMBER = '+880 1623-670640';
export const WHATSAPP_URL = 'https://wa.me/8801623670640';

export const PROJECTS: Project[] = [
  {
    id: '001',
    title: 'DESHBANDHU GROUP',
    slug: 'deshbandhu-group',
    client: 'DESHBANDHU GROUP',
    cover: assetUrl('/media/portfolio-14.jpg'),
    gallery: [
      assetUrl('/media/portfolio-14.jpg'),
      assetUrl('/media/portfolio-15.jpg'),
      assetUrl('/media/portfolio-16.jpg'),
      assetUrl('/media/portfolio-17.jpg'),
      assetUrl('/media/portfolio-18.jpg'),
      assetUrl('/media/portfolio-19.jpg'),
      assetUrl('/media/portfolio-20.jpg'),
      assetUrl('/media/portfolio-21.jpg'),
      assetUrl('/media/portfolio-22.jpg'),
      assetUrl('/media/portfolio-23.jpg'),
      assetUrl('/media/portfolio-24.jpg'),
      assetUrl('/media/portfolio-25.jpg'),
      assetUrl('/media/portfolio-26.jpg'),
      assetUrl('/media/portfolio-27.jpg'),
      assetUrl('/media/portfolio-28.jpg'),
      assetUrl('/media/portfolio-29.jpg'),
      assetUrl('/media/portfolio-30.jpg'),
      assetUrl('/media/portfolio-31.jpg'),
    ],
  },
  {
    id: '002',
    title: 'AAFI',
    slug: 'aafi',
    client: 'AAFI',
    cover: assetUrl('/media/portfolio-38.jpg'),
    gallery: [
      assetUrl('/media/portfolio-38.jpg'),
      assetUrl('/media/portfolio-39.jpg'),
      assetUrl('/media/portfolio-40.jpg'),
      assetUrl('/media/portfolio-41.jpg'),
      assetUrl('/media/portfolio-42.jpg'),
      assetUrl('/media/portfolio-43.jpg'),
      assetUrl('/media/portfolio-44.jpg'),
      assetUrl('/media/portfolio-45.jpg'),
    ],
  },
  {
    id: '003',
    title: 'FRUTIKA',
    slug: 'frutika',
    client: 'FRUTIKA',
    cover: assetUrl('/media/portfolio-32.jpg'),
    gallery: [
      assetUrl('/media/portfolio-32.jpg'),
      assetUrl('/media/portfolio-33.jpg'),
      assetUrl('/media/portfolio-34.jpg'),
      assetUrl('/media/portfolio-35.jpg'),
      assetUrl('/media/portfolio-36.jpg'),
      assetUrl('/media/portfolio-37.jpg'),
    ],
  },
  {
    id: '004',
    title: 'PRAN MUSTARD OIL',
    slug: 'pran-mustard-oil',
    client: 'PRAN',
    cover: assetUrl('/media/portfolio-1.jpg'),
    // Image 2 and Image 3 swapped for visual oil-curve continuity
    gallery: [
      assetUrl('/media/portfolio-1.jpg'),
      assetUrl('/media/portfolio-3.jpg'),
      assetUrl('/media/portfolio-2.jpg'),
      assetUrl('/media/portfolio-4.jpg'),
      assetUrl('/media/portfolio-5.jpg'),
    ],
  },
  {
    id: '005',
    title: 'SUNSHINE',
    slug: 'sunshine',
    client: 'AKIJ',
    cover: assetUrl('/media/portfolio-11.jpg'),
    gallery: [
      assetUrl('/media/portfolio-11.jpg'),
      assetUrl('/media/portfolio-12.jpg'),
      assetUrl('/media/portfolio-13.jpg'),
    ],
  },
  {
    id: '006',
    title: 'JIM & JOLLY',
    slug: 'jim-jolly',
    client: 'RFL',
    cover: assetUrl('/media/portfolio-8.jpg'),
    gallery: [
      assetUrl('/media/portfolio-8.jpg'),
      assetUrl('/media/portfolio-9.jpg'),
      assetUrl('/media/portfolio-10.jpg'),
    ],
  },
  {
    id: '007',
    title: 'FARMLAND',
    slug: 'farmland',
    client: 'FARMLAND',
    cover: assetUrl('/media/portfolio-47.jpg'),
    gallery: [
      assetUrl('/media/portfolio-47.jpg'),
      assetUrl('/media/portfolio-48.jpg'),
    ],
  },
  {
    id: '008',
    title: 'TOPPER',
    slug: 'topper',
    client: 'TOPPER',
    cover: assetUrl('/media/portfolio-50.jpg'),
    gallery: [
      assetUrl('/media/portfolio-50.jpg'),
      assetUrl('/media/portfolio-51.jpg'),
      assetUrl('/media/portfolio-52.jpg'),
    ],
  },
  {
    id: '009',
    title: 'AJINA CLOCK',
    slug: 'ajina-clock',
    client: 'RFL',
    cover: assetUrl('/media/portfolio-6.jpg'),
    gallery: [
      assetUrl('/media/portfolio-6.jpg'),
      assetUrl('/media/portfolio-7.jpg'),
    ],
  },
];

export const WORK_FILTERS: string[] = [
  'All',
  'PRAN',
  'RFL',
  'AKIJ',
  'DESHBANDHU GROUP',
  'FRUTIKA',
  'AAFI',
  'FARMLAND',
  'TOPPER',
];

export const ABOUT_CLIENTS: AboutClientItem[] = [
  {name: 'PRAN', slug: 'pran-mustard-oil'},
  {name: 'RFL', slug: 'rfl'},
  {name: 'AKIJ', slug: 'sunshine'},
  {name: 'DESHBANDHU GROUP', slug: 'deshbandhu-group'},
  {name: 'FRUTIKA', slug: 'frutika'},
  {name: 'AAFI', slug: 'aafi'},
  {name: 'FARMLAND', slug: 'farmland'},
  {name: 'TOPPER', slug: 'topper'},
  {name: 'GETWELL'},
  {name: 'DECENT TYRE'},
  {name: 'SAFEMET'},
];

export const MARQUEE_LOGOS: MarqueeLogo[] = [
  {name: 'PRAN', image: assetUrl('/assets/pran-logo.png')},
  {name: 'RFL', image: assetUrl('/assets/rfl-logo.png')},
  {name: 'AAFI', image: assetUrl('/assets/aafi-logo.png')},
  {name: 'GETWELL', image: assetUrl('/assets/getwell-logo.png')},
  {name: 'SUNSHINE', image: assetUrl('/assets/sunshine-logo.png')},
  {name: 'DECENT TYRE', image: assetUrl('/assets/decent_tyre-logo.png')},
  {name: 'SAFEMET', image: assetUrl('/assets/safemet-logo.png')},
  {name: 'TOPPER', image: assetUrl('/assets/topper-logo.png')},
];

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    n: '01',
    title: 'Brand & Packaging',
    body: 'Packaging artwork and brand visuals for consumer products across food, beverage and household ranges.',
  },
  {
    n: '02',
    title: 'Key Visuals',
    body: 'Campaign key visuals built to hold across print, retail and digital placements.',
  },
  {
    n: '03',
    title: 'Graphic Design',
    body: 'Layout, typography and artwork production for consumer brands in Bangladesh.',
  },
  {
    n: '04',
    title: 'Motion Graphics',
    body: 'Motion and animated treatments developed from the same brand and campaign systems.',
  },
  {
    n: '05',
    title: 'Video Editing',
    body: 'Focused edits for product, campaign and social-first creative work.',
  },
  {
    n: '06',
    title: 'AI-powered Creative',
    body: 'AI-assisted creative workflows supporting design exploration and production.',
  },
];

export const MOTION_WORKS: MotionWork[] = [
  {
    title: 'PRAN Original Juice',
    id: '-he1PaRBSxI',
    image: assetUrl('/assets/motion--he1PaRBSxI.jpg'),
  },
  {
    title: 'Deshbandhu Miniket Rice',
    id: '2ftatJKzgrA',
    image: assetUrl('/assets/motion-2ftatJKzgrA.jpg'),
  },
  {
    title: 'PRAN Pistachio Juice',
    id: '5EFGK27mDJc',
    image: assetUrl('/assets/motion-5EFGK27mDJc.jpg'),
  },
  {
    title: 'PRAN Mustard Oil — Social Ad',
    id: '6ZBo6APB5rs',
    image: assetUrl('/assets/motion-6ZBo6APB5rs.jpg'),
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  const normalized = slug.toLowerCase();
  if (normalized === 'pran') {
    return PROJECTS.find((p) => p.slug === 'pran-mustard-oil');
  }
  if (normalized === 'akij') {
    return PROJECTS.find((p) => p.slug === 'sunshine');
  }
  if (normalized === 'rfl') {
    const jimJolly = PROJECTS.find((p) => p.slug === 'jim-jolly');
    const ajina = PROJECTS.find((p) => p.slug === 'ajina-clock');
    if (jimJolly && ajina) {
      return {
        id: '006',
        title: 'RFL',
        slug: 'rfl',
        client: 'RFL',
        cover: jimJolly.cover,
        gallery: [...jimJolly.gallery, ...ajina.gallery],
      };
    }
  }
  return PROJECTS.find((p) => p.slug === normalized);
}
