import { Routes, Route } from 'react-router-dom'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Home from '@/pages/home'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-rose-50/30">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Additional routes can be added here */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App