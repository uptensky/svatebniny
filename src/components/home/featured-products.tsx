import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/product/product-card'
import { featuredProducts } from '@/data/mock-data'

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-6 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800">
              Naše nejoblíbenější
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"> produkty</span>
            </h2>
            <p className="text-lg text-amber-700 text-balance max-w-2xl mx-auto">
              Objevte naše nejžádanější svatební dekorace a personalizované produkty. 
              Každý kus je vyráběn s láskou a důrazem na detail.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-gradient-to-r from-amber-100 to-rose-100 px-4 py-2 rounded-full border border-amber-200">
              <span className="text-amber-800 font-medium text-sm">⚡ Expresní výroba 48h</span>
            </div>
            <div className="bg-gradient-to-r from-amber-100 to-rose-100 px-4 py-2 rounded-full border border-amber-200">
              <span className="text-amber-800 font-medium text-sm">🎨 100% personalizace</span>
            </div>
            <div className="bg-gradient-to-r from-amber-100 to-rose-100 px-4 py-2 rounded-full border border-amber-200">
              <span className="text-amber-800 font-medium text-sm">⭐ Prémiová kvalita</span>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-8 rounded-2xl border border-amber-200 shadow-lg">
            <h3 className="text-2xl font-bold text-amber-800 mb-4">
              Nenašli jste co hledáte?
            </h3>
            <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
              Máme více než 200 produktů v našem katalogu nebo vám vytvoříme něco úplně na míru. 
              Stačí nám napsat a společně vytvoříme dokonalou svatební výzdobu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white shadow-lg"
              >
                <Link to="/kategorie/svatebni-dekorace">
                  Všechny produkty
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50"
              >
                <Link to="/kontakt">
                  Individuální poptávka
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}