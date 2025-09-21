import { Product, Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'svatebni-dekorace',
    name: 'Svatební dekorace',
    description: 'Kompletní svatební výzdoba pro váš nezapomenutelný den',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop',
    productCount: 45
  },
  {
    id: 'wedding-favors',
    name: 'Wedding Favors',
    description: 'Jedinečné dárečky pro hosty - mini skleničky, svíčky, med',
    image: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop',
    productCount: 28
  },
  {
    id: 'personalizovane-produkty',
    name: 'Personalizované produkty',
    description: 'Zakázková výroba podle vašich představ',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
    productCount: 67
  },
  {
    id: 'party-dekorace',
    name: 'Party dekorace',
    description: 'Babyshower, engagement, graduation party produkty',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop',
    productCount: 34
  },
  {
    id: 'hry-tombola',
    name: 'Hry a tombola',
    description: 'Stírací losy, fundraising karty, zábavné aktivity',
    image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop',
    productCount: 19
  }
]

export const featuredProducts: Product[] = [
  {
    id: 'reliefni-pranicka-luxury',
    name: 'Reliéfní přáníčka Luxury',
    description: 'Exkluzivní reliéfní přáníčka s vlastním textem a motivem. Prémiová kvalita papíru s jemnou texturou.',
    price: 89,
    originalPrice: 120,
    category: 'personalizovane-produkty',
    images: [
      'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop',
    inStock: true,
    isCustomizable: true,
    expressProduction: true,
    productionTime: '48 hodin',
    tags: ['reliéfní', 'přáníčka', 'personalizace', 'luxury'],
    rating: 4.9,
    reviewCount: 47
  },
  {
    id: 'mini-sklenicky-med',
    name: 'Mini skleničky s medem',
    description: 'Roztomilé mini skleničky naplněné přírodním medem. Ideální dáreček pro svatební hosty.',
    price: 45,
    category: 'wedding-favors',
    images: [
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?w=400&h=300&fit=crop',
    inStock: true,
    isCustomizable: true,
    expressProduction: true,
    productionTime: '48 hodin',
    tags: ['wedding-favors', 'med', 'skleničky', 'hosté'],
    rating: 4.8,
    reviewCount: 89
  },
  {
    id: 'qr-karticky-menu',
    name: 'QR kartičky pro menu',
    description: 'Moderní QR kartičky pro bezkontaktní prohlížení svatebního menu. Elegantní design.',
    price: 12,
    category: 'svatebni-dekorace',
    images: [
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    inStock: true,
    isCustomizable: true,
    expressProduction: true,
    productionTime: '24 hodin',
    tags: ['QR', 'menu', 'moderní', 'bezkontaktní'],
    rating: 4.7,
    reviewCount: 156
  },
  {
    id: 'nazehlovsky-tricka',
    name: 'Nažehlovací trička JGA',
    description: 'Vtipná trička pro rozlučku se svobodou. Vlastní nápisy a motivy podle vašeho přání.',
    price: 299,
    category: 'personalizovane-produkty',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
    inStock: true,
    isCustomizable: true,
    expressProduction: true,
    productionTime: '48 hodin',
    tags: ['trička', 'nažehlovací', 'JGA', 'rozlučka'],
    rating: 4.6,
    reviewCount: 73
  },
  {
    id: 'stvraci-losy-tombola',
    name: 'Stírací losy pro tombolu',
    description: 'Profesionální stírací losy pro tombolu na svatbě nebo jiné akci. Různé výhry a designy.',
    price: 149,
    category: 'hry-tombola',
    images: [
      'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop',
    inStock: true,
    isCustomizable: true,
    expressProduction: false,
    productionTime: '5-7 dní',
    tags: ['stírací', 'losy', 'tombola', 'hra'],
    rating: 4.5,
    reviewCount: 29
  },
  {
    id: 'babyshower-dekorace',
    name: 'Baby shower dekorace set',
    description: 'Kompletní dekorační set pro baby shower party. Obsahuje balónky, girlandy a dekorace.',
    price: 389,
    originalPrice: 450,
    category: 'party-dekorace',
    images: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop',
    inStock: true,
    isCustomizable: true,
    expressProduction: true,
    productionTime: '48 hodin',
    tags: ['babyshower', 'dekorace', 'set', 'party'],
    rating: 4.8,
    reviewCount: 62
  }
]