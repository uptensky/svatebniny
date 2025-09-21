import { Link } from 'react-router-dom'
import { Star, Heart, ShoppingCart, Clock, Zap } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Product } from '@/types'
import { useCart } from '@/hooks/use-cart'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product.id, 1, product.price)
  }

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-amber-200">
      <div className="relative overflow-hidden">
        <Link to={`/produkt/${product.id}`}>
          <img 
            src={product.thumbnail} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        
        {/* Express badge */}
        {product.expressProduction && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
            <Zap className="w-3 h-3" />
            EXPRESS
          </div>
        )}
        
        {/* Discount badge */}
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}
        
        {/* Heart icon */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white shadow-lg"
        >
          <Heart className="w-4 h-4 text-rose-500" />
        </Button>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="flex items-center gap-1 text-sm">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
          <span className="text-amber-600 font-medium">({product.reviewCount})</span>
        </div>
        
        <Link to={`/produkt/${product.id}`}>
          <h3 className="font-semibold text-amber-800 hover:text-rose-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-amber-600 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center gap-2 text-sm text-amber-600">
          <Clock className="w-4 h-4" />
          <span>Výroba: {product.productionTime}</span>
        </div>
        
        {product.isCustomizable && (
          <div className="inline-block bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
            🎨 Personalizace
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-amber-800">
              {product.price} Kč
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice} Kč
              </span>
            )}
          </div>
          {!product.inStock && (
            <p className="text-xs text-red-600 font-medium">Není skladem</p>
          )}
        </div>
        
        <Button 
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-lg"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-1" />
          Koupit
        </Button>
      </CardFooter>
    </Card>
  )
}