export interface Product {
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string
  moq: string
  leadTime: string
  sampleLeadTime: string
  sizeRange: string
  compatibleComponents: string[]
  buyerTypes: string[]
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
    moq: 'Project-based, usually from 10,000 pcs',
    leadTime: '30-45 days after sample approval',
    sampleLeadTime: '10-18 days for finish or structure samples',
    sizeRange: 'Common 13 mm, 15 mm, and 18 mm sprayer systems',
    compatibleComponents: ['Glass fragrance bottles', 'Metal collars', 'Plastic pumps', 'Over caps'],
    buyerTypes: ['Fragrance brands', 'Packaging distributors', 'OEM filling factories'],
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
    moq: 'Project-based, usually from 5,000-10,000 pcs',
    leadTime: '35-50 days after tooling or sample approval',
    sampleLeadTime: '12-20 days depending on finish',
    sizeRange: 'Custom outer profiles for 15-100 ml fragrance bottles',
    compatibleComponents: ['Fragrance bottles', 'Inner PP inserts', 'Decorative collars', 'Gift packaging'],
    buyerTypes: ['Fragrance brands', 'Design agencies', 'Packaging trading companies'],
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
    moq: 'Project-based, usually from 10,000 pcs',
    leadTime: '40-55 days after final structure confirmation',
    sampleLeadTime: '15-25 days for prototype and finish samples',
    sizeRange: 'Round, square, and custom compact shell structures',
    compatibleComponents: ['Mirrors', 'Hinges', 'Magnetic closures', 'Refill pans'],
    buyerTypes: ['Color cosmetic brands', 'Packaging houses', 'Private label teams'],
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
    moq: 'Project-based, usually from 10,000-20,000 pcs',
    leadTime: '35-50 days after sample approval',
    sampleLeadTime: '10-18 days for color and finish samples',
    sizeRange: 'Common slim, standard, and custom tube diameters',
    compatibleComponents: ['Lipstick mechanisms', 'Inner cups', 'Decorative sleeves', 'Secondary cartons'],
    buyerTypes: ['Makeup brands', 'OEM cosmetic factories', 'Limited-edition product teams'],
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
    moq: 'Confirmed after drawings, material, and process review',
    leadTime: 'Based on tooling complexity and finish requirements',
    sampleLeadTime: 'Prototype timing confirmed after design review',
    sizeRange: 'Built around drawings, samples, or reference products',
    compatibleComponents: ['Decorative trims', 'Metal sleeves', 'Brand plates', 'Functional fittings'],
    buyerTypes: ['Beauty brands', 'Packaging developers', 'Sourcing teams'],
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
