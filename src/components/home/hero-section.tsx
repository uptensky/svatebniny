import { Link } from 'react-router-dom'
import { Heart, Zap, Award, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-200/30 to-rose-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-pink-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-100/20 to-rose-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <Zap className="w-4 h-4" />
                Expresní výroba 48 hodin
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-pink-600 bg-clip-text text-transparent">
                  Personalizované
                </span>
                <br />
                <span className="text-amber-800">svatební dekorace</span>
              </h1>
              
              <p className="text-xl text-amber-700 text-balance leading-relaxed">
                Vytváříme jedinečné svatební dekorace a party produkty přesně podle vašich představ. 
                Reliéfní přáníčka, nažehlovací trička, wedding favors a mnoho dalšího.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 py-6">
              <div className="flex items-center gap-2 text-amber-700">
                <div className="bg-gradient-to-br from-amber-400 to-rose-400 p-2 rounded-lg">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-amber-800">500+</div>
                  <div className="text-sm">Spokojených nevěst</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-amber-700">
                <div className="bg-gradient-to-br from-amber-400 to-rose-400 p-2 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-amber-800">100%</div>
                  <div className="text-sm">Prémiová kvalita</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-amber-700">
                <div className="bg-gradient-to-br from-amber-400 to-rose-400 p-2 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-amber-800">48h</div>
                  <div className="text-sm">Expresní výroba</div>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-xl px-8 py-6 text-lg font-semibold rounded-xl transition-all transform hover:scale-105"
              >
                <Link to="/kategorie/svatebni-dekorace">
                  Prohlédnout produkty
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 shadow-lg px-8 py-6 text-lg font-semibold rounded-xl transition-all"
              >
                <Link to="/kontakt">
                  Individuální poptávka
                </Link>
              </Button>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop" 
                alt="Svatební dekorace"
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px] backdrop-blur-sm"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-2 rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-amber-800">Express výroba</div>
                    <div className="text-sm text-amber-600">Hotové za 48h</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-amber-200">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-amber-400 to-rose-500 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-white" fill="currentColor" />
                  </div>
                  <div>
                    <div className="font-bold text-amber-800">Personalizace</div>
                    <div className="text-sm text-amber-600">Přesně podle vás</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration for image */}
            <div className="absolute -inset-6 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-3xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
    </section>
  )
}