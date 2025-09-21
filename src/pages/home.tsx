import HeroSection from '@/components/home/hero-section'
import CategoriesShowcase from '@/components/home/categories-showcase'
import FeaturedProducts from '@/components/home/featured-products'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategoriesShowcase />
      <FeaturedProducts />
    </div>
  )
}