import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { categories } from '@/data/mock-data'

export default function CategoriesShowcase() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800">
            Objevte naše
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"> kategorie</span>
          </h2>
          <p className="text-lg text-amber-700 text-balance max-w-3xl mx-auto">
            Od klasických svatebních dekorací po moderní trendy ze zahraničí. 
            Najdete u nás vše pro vaši dokonalou svatbu nebo party.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-amber-200"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative overflow-hidden">
                <Link to={`/kategorie/${category.id}`}>
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button 
                    asChild
                    className="w-full bg-white/90 text-amber-800 hover:bg-white shadow-lg"
                  >
                    <Link to={`/kategorie/${category.id}`}>
                      Prohlédnout
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Link to={`/kategorie/${category.id}`}>
                    <h3 className="text-xl font-bold text-amber-800 hover:text-rose-600 transition-colors">
                      {category.name}
                    </h3>
                  </Link>
                  <span className="bg-gradient-to-r from-amber-100 to-rose-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount} produktů
                  </span>
                </div>
                
                <p className="text-amber-700 text-sm leading-relaxed">
                  {category.description}
                </p>
                
                <div className="pt-2">
                  <Link 
                    to={`/kategorie/${category.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-rose-600 font-medium text-sm transition-colors group"
                  >
                    Zobrazit produkty
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-8 rounded-2xl shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Potřebujete poradit s výběrem?
            </h3>
            <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
              Naši specialisté vám rádi pomohou vybrat ty nejlepší produkty pro vaší svatbu nebo akci. 
              Kontaktujte nás a získejte individuální konzultaci zdarma.
            </p>
            <Button 
              asChild
              variant="secondary" 
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-50 shadow-lg"
            >
              <Link to="/kontakt">
                Kontaktovat specialistu
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}