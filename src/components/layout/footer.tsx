import { Link } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Clock, Award, Truck, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-50 to-rose-50 border-t border-amber-200">
      {/* Trust indicators */}
      <div className="border-b border-amber-200 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-amber-800 mb-1">Expresní výroba</h3>
              <p className="text-sm text-amber-600">Dokončení za 48 hodin</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-amber-800 mb-1">Prémiová kvalita</h3>
              <p className="text-sm text-amber-600">Jen ty nejlepší materiály</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-amber-800 mb-1">Rychlé dodání</h3>
              <p className="text-sm text-amber-600">Doprava po celé ČR</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-amber-800 mb-1">Záruka kvality</h3>
              <p className="text-sm text-amber-600">100% spokojenost</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-400 to-rose-400 p-2 rounded-lg shadow-md">
                <Heart className="w-6 h-6 text-white" fill="currentColor" />
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                  Svatebniny.eu
                </h2>
                <p className="text-xs text-amber-600 font-medium">Personalizované dekorace</p>
              </div>
            </div>
            <p className="text-amber-700 text-sm leading-relaxed">
              Specializujeme se na personalizované svatební dekorace a party produkty. 
              Vytváříme jedinečné kousky pro vaše nezapomenutelné okamžiky.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-amber-100 hover:bg-amber-200 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5 text-amber-600" />
              </a>
              <a href="#" className="bg-amber-100 hover:bg-amber-200 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5 text-amber-600" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-800">Rychlé odkazy</h3>
            <div className="space-y-2">
              <Link to="/kategorie/svatebni-dekorace" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Svatební dekorace
              </Link>
              <Link to="/kategorie/wedding-favors" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Wedding Favors
              </Link>
              <Link to="/kategorie/personalizovane-produkty" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Personalizované produkty
              </Link>
              <Link to="/kategorie/party-dekorace" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Party dekorace
              </Link>
              <Link to="/kategorie/hry-tombola" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Hry & Tombola
              </Link>
            </div>
          </div>

          {/* Customer service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-800">Zákaznický servis</h3>
            <div className="space-y-2">
              <Link to="/o-nas" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                O nás
              </Link>
              <Link to="/kontakt" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Kontakt
              </Link>
              <Link to="/doprava-platba" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Doprava a platba
              </Link>
              <Link to="/reklamace" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Reklamace
              </Link>
              <Link to="/obchodni-podminky" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Obchodní podmínky
              </Link>
              <Link to="/ochrana-osobnich-udaju" className="block text-amber-600 hover:text-rose-600 text-sm transition-colors">
                Ochrana osobních údajů
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-800">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-700 font-medium">Svatebniny.eu s.r.o.</p>
                  <p className="text-sm text-amber-600">Ústí nad Labem</p>
                  <p className="text-sm text-amber-600">Česká republika</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-700 font-medium">+420 123 456 789</p>
                  <p className="text-xs text-amber-600">Po-Pá 9:00-17:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <p className="text-sm text-amber-700 font-medium">info@svatebniny.eu</p>
                  <p className="text-xs text-amber-600">Odpovídáme do 24h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber-200 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-amber-600">
              © 2024 Svatebniny.eu s.r.o. Všechna práva vyhrazena.
            </p>
            <p className="text-sm text-amber-600">
              Vytvořeno s ❤️ pro vaše nezapomenutelné okamžiky
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}