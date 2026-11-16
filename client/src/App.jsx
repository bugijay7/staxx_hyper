import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import ChildrensPartyServices from './Pages/ChildrensPartyServices'
import PartyPackages from './Pages/PartyPackages'
import PartyThemes from './Pages/PartyThemes'
import EventEquipmentSupplies from './Pages/EventEquipmentSupplies'
import ProductCategories from './Pages/ProductCategories'
import IndividualProduct from './Pages/IndividualProduct'
import Gallery from './Pages/Gallery'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import Faqs from './Pages/Faqs'
import Booking from './Pages/Booking'
import ProductEnquiry from './Pages/ProductEnquiry'
import Blog from './Pages/Blog'

const pages = [
  { title: 'Home', path: '/' },
  { title: 'About Us', path: '/about' },
  { title: "Children's Party Services", path: '/childrens-party-services' },
  { title: 'Party Packages', path: '/events' },
  { title: 'Party Themes', path: '/party-themes' },
  { title: 'Event Equipment & Supplies', path: '/event-equipment-supplies' },
  { title: 'Product Categories', path: '/products' },
  { title: 'Individual Product Pages', path: '/products/sample-product' },
  { title: 'Gallery / Portfolio', path: '/gallery' },
  { title: 'Testimonials / Reviews', path: '/testimonials' },
  { title: 'Contact Us', path: '/contact' },
  { title: 'Frequently Asked Questions (FAQs)', path: '/faqs' },
  { title: 'Party Booking / Enquiry Form', path: '/booking' },
  { title: 'Product Enquiry Form', path: '/product-enquiry' },
  { title: 'Blog / Party Ideas', path: '/blog' },
]

const pageComponents = {
  '/': Home,
  '/about': About,
  '/childrens-party-services': ChildrensPartyServices,
  '/party-packages': PartyPackages,
  '/party-themes': PartyThemes,
  '/event-equipment-supplies': EventEquipmentSupplies,
  '/products': ProductCategories,
  '/products/sample-product': IndividualProduct,
  '/gallery': Gallery,
  '/testimonials': Testimonials,
  '/contact': Contact,
  '/faqs': Faqs,
  '/booking': Booking,
  '/product-enquiry': ProductEnquiry,
  '/blog': Blog,
}

function getPage(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const page = pages.find((item) => item.path === path)
  if (page) return page
  if (path.startsWith('/products/')) {
    return { title: 'Individual Product Page', path }
  }
  return null
}

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const currentPage = getPage(pathname)
  
  // Dynamically resolve component for individual products or fallback to Home
  const PageComponent =
    pageComponents[currentPage?.path] ||
    (pathname.startsWith('/products/') ? IndividualProduct : Home)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function handleNavigation(path) {
    window.history.pushState({}, '', path)
    setPathname(path)
    window.scrollTo(0, 0)
  }

  return (
    <div className="min-h-screen bg-bg-main text-text-primary font-sans antialiased selection:bg-accent-primary selection:text-white flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="flex-1 w-full flex flex-col">
        <PageComponent onNavigate={handleNavigation} />
      </main>
      <Footer />
    </div>
  )
}

export default App