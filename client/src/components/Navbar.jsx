import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const primaryNavPages = [
  { title: 'Home', path: '/', children: [] },
  {
    title: 'Event Services',
    path: '/childrens-party-services',
    children: [
      { title: 'Events Portfolio', path: '/party-packages' },
      { title: 'Event Themes', path: '/party-themes' },
      { title: 'Event Gallery', path: '/gallery' },
      { title: 'Event Setup', path: '/booking' },
      { title: "Events for Children", path: '/childrens-party-services' },
    ],
  },
  {
    title: 'Equipment & Supplies',
    path: '/event-equipment-supplies',
    children: [
      { title: 'All Equipment & Supplies', path: '/event-equipment-supplies' },
      { title: 'Product Categories', path: '/products' },
      { title: 'Product Enquiry Form', path: '/product-enquiry' },
    ],
  },
  {
    title: 'About & Resources',
    path: '/about',
    children: [
      { title: 'About Us', path: '/about' },
      { title: 'Testimonials / Reviews', path: '/testimonials' },
      { title: 'Blog / Party Ideas', path: '/blog' },
      { title: 'FAQs', path: '/faqs' },
      { title: 'Contact Us', path: '/contact' },
    ],
  },
]

export default function Navbar({ currentPage, onNavigate }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : ''

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isDrawerOpen])

  function handleNavigation(event, path) {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return
    }
    event.preventDefault()
    window.history.pushState({}, '', path)
    window.scrollTo(0, 0)
    setIsDrawerOpen(false)
    setActiveCategory(null)
    if (onNavigate) onNavigate(path)
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      `}</style>

      {/* Fixed Minimal Top Header */}
      <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between border-b border-white/10 bg-[#0F2A2A]/90 px-6 py-4 font-sans text-white backdrop-blur-md md:px-10 md:py-5">
        <a
          href="/"
          className="flex items-center gap-3.5 text-inherit no-underline"
          onClick={(e) => handleNavigation(e, '/')}
        >
          <img
            src={logo}
            alt="Staxx Hyper Events"
            className="h-9 w-auto object-contain md:h-9"
          />
          <div className="flex flex-col">
            
          </div>
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <a
            href="/booking"
            onClick={(e) => handleNavigation(e, '/booking')}
            className="group hidden items-center gap-2.5  bg-white py-1.5 pr-1.5 pl-4 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033] md:inline-flex"
          >
            <span>Book Now</span>
            <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
              &rarr;
            </span>
          </a>
          <button
            type="button"
            aria-expanded={isDrawerOpen}
            aria-controls="staxx-nav-drawer"
            onClick={() => setIsDrawerOpen(true)}
            className="cursor-pointer  border border-white/20 bg-[#141016] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-200 hover:border-[#F5D033] hover:text-[#F5D033]"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Full-Screen Architectural Overlay Drawer */}
      <aside
        id="staxx-nav-drawer"
        aria-hidden={!isDrawerOpen}
        className={`fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-[#0F2A2A] px-6 py-4 pb-12 font-sans text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 md:py-5 md:pb-12 ${
          isDrawerOpen
            ? 'pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-full'
        }`}
      >
        {/* Drawer Top Bar */}
        <div className="flex items-center justify-between border-b border-white/15 pb-4 md:pb-5">
          <a
            href="/"
            className="flex items-center gap-3.5 text-inherit no-underline"
            onClick={(e) => handleNavigation(e, '/')}
          >
            <img
              src={logo}
              alt="Staxx Hyper Events"
              className="h-8 w-auto object-contain md:h-9"
            />
            <div className="flex flex-col">
              
            </div>
          </a>

          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setIsDrawerOpen(false)}
            className="cursor-pointer  border border-white/20 bg-[#141016] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors duration-200 hover:border-[#F5D033] hover:bg-[#F5D033] hover:text-[#0D0A0E]"
          >
            Close &times;
          </button>
        </div>

        {/* 3-Column Architectural Grid */}
        <div className="grid flex-1 grid-cols-1 items-end gap-10 pt-8 md:grid-cols-[1.4fr_1fr_0.95fr] md:gap-10 md:pt-12">
          {/* Column 1: Oversized Primary Links with Sibling Dimming */}
          <nav aria-label="Main navigation">
            <ul className="group m-0 list-none p-0">
              {primaryNavPages.map((page) => {
                const isActive = currentPage?.path === page.path
                const hasChildren = page.children && page.children.length > 0
                const isExpanded = activeCategory === page.title

                return (
                  <li
                    key={page.path}
                    className="mb-3.5"
                    onMouseEnter={() =>
                      hasChildren && setActiveCategory(page.title)
                    }
                  >
                    <a
                      href={page.path}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={(e) => {
                        if (hasChildren) {
                          e.preventDefault()
                          setActiveCategory(isExpanded ? null : page.title)
                        } else {
                          handleNavigation(e, page.path)
                        }
                      }}
                      className={`font-display-condensed inline-flex items-baseline gap-3 text-4xl font-normal leading-[1.05] text-white no-underline transition-all duration-200 group-hover:opacity-35 hover:!opacity-100 hover:text-[#F5D033] md:text-[clamp(2.25rem,4vw,3.65rem)] ${
                        isExpanded ? '!opacity-100 text-[#F5D033]' : ''
                      }`}
                    >
                      <span>{page.title}</span>
                      {hasChildren && (
                        <span className="inline-flex h-7 w-7 items-center justify-center  border border-white/20 bg-[#141016] text-sm font-bold text-[#F5D033]">
                          {isExpanded ? '−' : '+'}
                        </span>
                      )}
                    </a>

                    {/* Mobile Inline Sub-links */}
                    {hasChildren && isExpanded && (
                      <ul className="mt-3 flex flex-col gap-2.5  border border-white/10 bg-[#141016] p-4 md:hidden">
                        {page.children.map((child) => (
                          <li key={child.path}>
                            <a
                              href={child.path}
                              aria-current={
                                currentPage?.path === child.path
                                  ? 'page'
                                  : undefined
                              }
                              onClick={(e) => handleNavigation(e, child.path)}
                              className="inline-flex items-center gap-2 text-sm font-medium text-[#C7C3C9] no-underline transition-colors hover:text-[#F5D033]"
                            >
                              <span className="text-[#F5D033]">&#10022;</span>
                              <span>{child.title}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Column 2: Active Category Sub-Links (Desktop) */}
          <div className="hidden min-h-[240px] flex-col justify-end  border border-white/10 bg-[#141016] p-8 md:flex">
            {activeCategory ? (
              <div>
                <span className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> {activeCategory}
                </span>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {primaryNavPages
                    .find((p) => p.title === activeCategory)
                    ?.children.map((child) => {
                      const childActive = currentPage?.path === child.path
                      return (
                        <li key={child.path}>
                          <a
                            href={child.path}
                            aria-current={childActive ? 'page' : undefined}
                            onClick={(e) => handleNavigation(e, child.path)}
                            className={`inline-block text-base font-medium text-white no-underline transition-all duration-200 hover:translate-x-1.5 hover:text-[#F5D033] ${
                              childActive ? 'translate-x-1.5 text-[#F5D033]' : ''
                            }`}
                          >
                            {child.title} &rarr;
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            ) : (
              <div className="space-y-2 text-xs text-[#9E9A9F]">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Explore Sections
                </span>
                <p className="leading-relaxed text-[#C7C3C9]">
                  Hover or select a category on the left to browse event
                  services, equipment hire, and resources.
                </p>
              </div>
            )}
          </div>

          {/* Column 3: Studio Info, Dispatch & Booking CTA */}
          <div className="flex flex-col gap-6  border border-white/15 bg-[#141016] p-7 text-sm md:p-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
              <span>&#10022;</span> Nairobi &amp; Environs Dispatch
            </span>

            <div className="flex flex-col gap-2 text-xs">
              <a
                href="mailto:staxxsounds@proton.me"
                className="text-[#C7C3C9] no-underline transition-colors duration-200 hover:text-[#F5D033]"
              >
               staxxsounds@proton.me
              </a>
              <a
                href="mailto:hyperkidsevents@gmail.com"
                className="text-[#C7C3C9] no-underline transition-colors duration-200 hover:text-[#F5D033]"
              >
                hyperkidsevents@gmail.com
              </a>
              <a
                href="tel:+254780979777"
                className="font-medium text-white no-underline transition-colors duration-200 hover:text-[#F5D033]"
              >
                +254 (0) 780 979 777 -Staxx Deck
              </a>
               <a
                href="tel:+254722548012"
                className="font-medium text-white no-underline transition-colors duration-200 hover:text-[#F5D033]"
              >
                +254 (0) 722 548 012 - Hyper Kids
              </a>
            </div>

            <a
              href="/booking"
              onClick={(e) => handleNavigation(e, '/booking')}
              className="group inline-flex items-center justify-between gap-3  bg-white py-2.5 pr-2.5 pl-6 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
            >
              <span>Book an Event →</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
