export interface Product {
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string
  materials: string[]
  surfaceFinishes: string[]
  applications: string[]
  customizationOptions: string[]
  capabilities: string[]
  image: string
  imageTone: string
}

export const products: Product[] = [
  {
    slug: 'perfume-sprayers',
    name: 'Perfume Sprayers',
    category: 'Fragrance Packaging',
    shortDescription: 'Metal sprayer components for premium fragrance packaging lines.',
    description: 'Precision-made perfume sprayer components designed for cosmetic packaging projects that require refined appearance, stable assembly, and export-ready consistency.',
    materials: ['Aluminum', 'Brass', 'Stainless steel', 'Zinc alloy'],
    surfaceFinishes: ['Anodizing', 'Electroplating', 'Polishing', 'Laser engraving'],
    applications: ['Fine fragrance bottles', 'Travel perfume packaging', 'Luxury cosmetic gift sets'],
    customizationOptions: ['Outer shell shape', 'Color matching', 'Logo engraving', 'Decorative collar details'],
    capabilities: ['Tooling support', 'Metal forming', 'Surface finishing', 'Assembly inspection'],
    image: '/images/concepts/perfume-sprayers.jpg',
    imageTone: 'from-slate-800 via-zinc-300 to-champagne'
  },
  {
    slug: 'perfume-caps',
    name: 'Perfume Caps',
    category: 'Fragrance Packaging',
    shortDescription: 'Custom metal caps with premium weight, finish, and brand-ready details.',
    description: 'Metal perfume caps manufactured for overseas fragrance and beauty packaging clients, with flexible finishing options and consistent appearance control.',
    materials: ['Aluminum', 'Zinc alloy', 'Stainless steel'],
    surfaceFinishes: ['Brushing', 'Electroplating', 'Anodizing', 'Sandblasting'],
    applications: ['Perfume bottles', 'Home fragrance packaging', 'Premium sample packaging'],
    customizationOptions: ['Cap profile', 'Inner fitting structure', 'Logo printing', 'Color and texture'],
    capabilities: ['Mold development', 'Die casting', 'Polishing', 'Final appearance check'],
    image: '/images/concepts/perfume-caps.jpg',
    imageTone: 'from-navy via-slate-400 to-stone-100'
  },
  {
    slug: 'compact-cases',
    name: 'Compact Cases',
    category: 'Color Cosmetics',
    shortDescription: 'Metal compact case shells for powder, cushion, and refillable packaging.',
    description: 'Durable and elegant compact case components for cosmetic brands and packaging companies seeking refined surface quality and custom mechanical details.',
    materials: ['Aluminum', 'Tinplate', 'Stainless steel', 'Zinc alloy'],
    surfaceFinishes: ['Polishing', 'Brushing', 'Electroplating', 'Logo printing'],
    applications: ['Pressed powder cases', 'Cushion compact shells', 'Refillable beauty packaging'],
    customizationOptions: ['Hinge structure', 'Magnetic closure', 'Mirror-ready frame', 'Decorative top plate'],
    capabilities: ['Product development', 'Metal stamping', 'CNC machining', 'Assembly check'],
    image: '/images/concepts/compact-cases.jpg',
    imageTone: 'from-zinc-100 via-stone-400 to-ink'
  },
  {
    slug: 'lipstick-shells',
    name: 'Lipstick Shells',
    category: 'Color Cosmetics',
    shortDescription: 'Metal lipstick shells and decorative sleeves for luxury cosmetic packaging.',
    description: 'Custom lipstick shell components built for smooth visual appearance, accurate fit, and repeatable finishing quality across production batches.',
    materials: ['Aluminum', 'Brass', 'Stainless steel'],
    surfaceFinishes: ['Anodizing', 'Electroplating', 'Brushing', 'Color matching'],
    applications: ['Lipstick tubes', 'Lip balm packaging', 'Limited-edition cosmetic lines'],
    customizationOptions: ['Tube diameter', 'Sleeve texture', 'Logo engraving', 'Special color finish'],
    capabilities: ['Metal forming', 'Precision machining', 'Surface treatment', 'Packaging check'],
    image: '/images/concepts/lipstick-shells.jpg',
    imageTone: 'from-rose-100 via-zinc-300 to-champagne'
  },
  {
    slug: 'custom-metal-cosmetic-components',
    name: 'Custom Metal Cosmetic Components',
    category: 'OEM / ODM Components',
    shortDescription: 'Project-based metal components for cosmetic packaging development.',
    description: 'OEM and ODM metal cosmetic packaging components for brands, packaging houses, and trading companies with project-specific design and production requirements.',
    materials: ['Aluminum', 'Brass', 'Stainless steel', 'Zinc alloy', 'Tinplate'],
    surfaceFinishes: ['Anodizing', 'Electroplating', 'Sandblasting', 'Laser engraving', 'Logo printing'],
    applications: ['Custom beauty packaging', 'Decorative metal parts', 'Premium packaging accessories'],
    customizationOptions: ['3D design support', 'Prototype development', 'Tooling', 'Finish samples'],
    capabilities: ['Sample development', 'Mold design', 'Batch production', 'Export packaging'],
    image: '/images/concepts/custom-components.jpg',
    imageTone: 'from-graphite via-platinum to-champagne'
  }
]

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug)
