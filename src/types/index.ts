export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  category: string
  subcategory?: string
  images: string[]
  thumbnail: string
  inStock: boolean
  isCustomizable: boolean
  expressProduction: boolean
  productionTime: string
  tags: string[]
  rating: number
  reviewCount: number
  specifications?: Record<string, string>
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
  subcategories?: Subcategory[]
  productCount: number
}

export interface Subcategory {
  id: string
  name: string
  description: string
  image: string
  productCount: number
}

export interface CartItem {
  productId: string
  quantity: number
  customization?: Record<string, string>
  price: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

export interface Review {
  id: string
  productId: string
  customerName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export interface Customer {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  address?: {
    street: string
    city: string
    postalCode: string
    country: string
  }
}

export interface Order {
  id: string
  customerId: string
  items: CartItem[]
  totalPrice: number
  status: 'pending' | 'confirmed' | 'production' | 'shipped' | 'delivered'
  orderDate: string
  deliveryDate?: string
  shippingAddress: {
    firstName: string
    lastName: string
    street: string
    city: string
    postalCode: string
    country: string
    phone: string
  }
  notes?: string
}