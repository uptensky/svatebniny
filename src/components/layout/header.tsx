import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, ShoppingCart, Menu, X, Heart, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/use-cart'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  return (
    <header className="relative">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-amber-50 to-rose-50 py-2 px-4 text-sm border-b border-amber-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-amber-700">
              <Phone className="w-4 h-4" />
              <span>+420 123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <Mail className="w-4 h-4" />
              <span>info@svatebniny.eu</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 text-amber-700">
            <span className="font-medium">📍 Ústí nad Labem</span>
            <span className="text-rose-600 font-semibold">⚡ Expresní výroba 48h</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-amber-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 p-2 rounded-lg shadow-md group-hover:shadow-lg transition-all">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Svatebniny.eu
                </h1>
                <p className="text-xs text-amber-600 font-medium">Personalizované dekorace</p>
              </div>
            </Link>

            {/* Search bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Hledat produkty..."
                  className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/90 backdrop-blur-sm"
                />
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-amber-500" />
              </div>
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-amber-50">
                <Heart className="w-5 h-5 text-amber-600" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative hover:bg-amber-50">
                <ShoppingCart className="w-5 h-5 text-amber-600" />
                {cart.totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cart.totalItems}
                  </span>
                )}
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block border-t border-amber-100 bg-gradient-to-r from-white to-amber-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 h-12 items-center">
              <Link to="/kategorie/svatebni-dekorace" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                Svatební dekorace
              </Link>
              <Link to="/kategorie/wedding-favors" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                Wedding Favors
              </Link>
              <Link to="/kategorie/personalizovane-produkty" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                Personalizované produkty
              </Link>
              <Link to="/kategorie/party-dekorace" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                Party dekorace
              </Link>
              <Link to="/kategorie/hry-tombola" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                Hry & Tombola
              </Link>
              <Link to="/o-nas" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                O nás
              </Link>
              <Link to="/kontakt" className="text-amber-700 hover:text-rose-600 font-medium transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-amber-200 shadow-lg z-40">
          <div className="px-4 py-4 space-y-3">
            {/* Mobile search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Hledar produkty..."
                className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-amber-500" />
            </div>
            
            {/* Mobile navigation */}
            <div className="space-y-3 pt-3 border-t border-amber-200">
              <Link to="/kategorie/svatebni-dekorace" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                Svatební dekorace
              </Link>
              <Link to="/kategorie/wedding-favors" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                Wedding Favors
              </Link>
              <Link to="/kategorie/personalizovane-produkty" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                Personalizované produkty
              </Link>
              <Link to="/kategorie/party-dekorace" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                Party dekorace
              </Link>
              <Link to="/kategorie/hry-tombola" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                Hry & Tombola
              </Link>
              <Link to="/o-nas" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                O nás
              </Link>
              <Link to="/kontakt" className="block text-amber-700 hover:text-rose-600 font-medium py-2">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}