import { useState, useEffect } from 'react'
import { Cart, CartItem } from '@/types'

const CART_STORAGE_KEY = 'svatebniny-cart'

export function useCart() {
  const [cart, setCart] = useState<Cart>(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY)
    return savedCart ? JSON.parse(savedCart) : {
      items: [],
      totalItems: 0,
      totalPrice: 0
    }
  })

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const addItem = (productId: string, quantity: number, price: number, customization?: Record<string, string>) => {
    setCart(currentCart => {
      const existingItemIndex = currentCart.items.findIndex(
        item => item.productId === productId && 
        JSON.stringify(item.customization) === JSON.stringify(customization)
      )

      let newItems: CartItem[]
      
      if (existingItemIndex >= 0) {
        newItems = currentCart.items.map((item, index) => 
          index === existingItemIndex 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        newItems = [...currentCart.items, {
          productId,
          quantity,
          price,
          customization
        }]
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

      return {
        items: newItems,
        totalItems,
        totalPrice
      }
    })
  }

  const removeItem = (productId: string, customization?: Record<string, string>) => {
    setCart(currentCart => {
      const newItems = currentCart.items.filter(
        item => !(item.productId === productId && 
        JSON.stringify(item.customization) === JSON.stringify(customization))
      )

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

      return {
        items: newItems,
        totalItems,
        totalPrice
      }
    })
  }

  const updateQuantity = (productId: string, quantity: number, customization?: Record<string, string>) => {
    if (quantity <= 0) {
      removeItem(productId, customization)
      return
    }

    setCart(currentCart => {
      const newItems = currentCart.items.map(item => 
        item.productId === productId && 
        JSON.stringify(item.customization) === JSON.stringify(customization)
          ? { ...item, quantity }
          : item
      )

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0)
      const totalPrice = newItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

      return {
        items: newItems,
        totalItems,
        totalPrice
      }
    })
  }

  const clearCart = () => {
    setCart({
      items: [],
      totalItems: 0,
      totalPrice: 0
    })
  }

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }
}