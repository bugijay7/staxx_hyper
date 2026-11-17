import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

const primaryNavPages = [
  { title: 'Home', path: '/', children: [] },
  {
    title: 'Event Services',
    path: '/childrens-party-services',
    children: [
      { title: 'Events Portfolio', path: '/events' },
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
      {/* Fixed Minimal Top Header */}
      <header className="fixed top-0 left-0 z-40 flex w-full items-center justify-between border-b border-neutral-900/15 bg-red/85 px-6 py-4 font-sans text-teal-900 backdrop-blur-md md:px-10 md:py-6">
        <a
          href="/"
          className="flex items-center gap-3.5 text-inherit no-underline"
          onClick={(e) => handleNavigation(e, '/')}
        >
          <img
            src={logo}
            alt="Staxx Hyper Events"
            className="h-10 w-auto object-contain md:h-9"
          />
          <div className="flex flex-col">
            
          </div>
        </a>

        <div className="flex items-center gap-8">
          <a
            href="/booking"
            onClick={(e) => handleNavigation(e, '/booking')}
            className="hidden border-b border-neutral-900 py-1 text-xs font-medium tracking-[0.14em] uppercase transition-opacity duration-200 hover:opacity-55 md:inline-block"
          >
            Book Now
          </a>
          <button
            type="button"
            aria-expanded={isDrawerOpen}
            aria-controls="staxx-nav-drawer"
            onClick={() => setIsDrawerOpen(true)}
            className="cursor-pointer bg-transparent py-1 text-xs font-medium tracking-[0.14em] uppercase transition-opacity duration-200 hover:opacity-55"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Full-Screen Architectural Overlay Drawer */}
      <aside
        id="staxx-nav-drawer"
        aria-hidden={!isDrawerOpen}
        className={`fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-teal-900 px-6 py-4 pb-12 font-sans text-teal-900 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-10 md:py-6 md:pb-12 ${
          isDrawerOpen
            ? 'pointer-events-auto translate-y-0'
            : 'pointer-events-none -translate-y-full'
        }`}
      >
        {/* Drawer Top Bar */}
        <div className="flex items-center justify-between  border-b border-neutral-900/15 pb-4 md:pb-6">
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
            className="cursor-pointer bg-transparent py-1 text-xs font-medium tracking-[0.14em] uppercase transition-opacity duration-200 hover:opacity-55"
          >
            Close
          </button>
        </div>

        {/* 3-Column Architectural Grid */}
        <div className="grid flex-1 grid-cols-1 items-end gap-10 pt-8 md:grid-cols-[1.4fr_1fr_0.9fr] md:gap-10 md:pt-12">
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
                      className={`inline-flex items-baseline gap-3 text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-white no-underline transition-opacity duration-200 group-hover:opacity-35 hover:!opacity-100 md:text-[clamp(1.85rem,3.6vw,3.25rem)] ${
                        isExpanded ? '!opacity-100' : ''
                      }`}
                    >
                      <span>{page.title}</span>
                      {hasChildren && (
                        <span className="text-xl font-light text-amber-500">
                          {isExpanded ? '−' : '+'}
                        </span>
                      )}
                    </a>

                    {/* Mobile Inline Sub-links */}
                    {hasChildren && isExpanded && (
                      <ul className="mt-2 flex flex-col gap-2 border-l border-neutral-900/15 py-2 pl-4 md:hidden">
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
                              className="text-base text-amber-600 no-underline hover:text-white"
                            >
                              {child.title}
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
          <div className="hidden min-h-[220px] flex-col justify-end border-l border-neutral-900/15 pl-8 md:flex">
            {activeCategory && (
              <div>
                <span className="mb-5 block text-[11px] tracking-[0.14em] text-amber-500 uppercase">
                  {activeCategory}
                </span>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
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
                            className={`inline-block text-[1.05rem] text-white no-underline transition-all duration-200 hover:translate-x-1 hover:opacity-55 ${
                              childActive ? 'translate-x-1 opacity-55' : ''
                            }`}
                          >
                            {child.title}
                          </a>
                        </li>
                      )
                    })}
                </ul>
              </div>
            )}
          </div>

          {/* Column 3: Studio Info, Dispatch & Booking CTA */}
          <div className="flex flex-col gap-6 border-t border-neutral-900/15 pt-6 text-sm md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <span className="text-[11px] tracking-[0.14em] text-white uppercase">
              Nairobi &amp; Environs Dispatch
            </span>

            <div className="flex flex-col gap-1.5">
              <a
                href="mailto:staxxsounds@proton.me"
                className="text-amber-600 no-underline transition-opacity duration-200 hover:opacity-60"
              >
               staxxsounds@proton.me
              </a>
              <a
                href="mailto:hyperkidsevents@gmail.com"
                className="text-amber-600 no-underline transition-opacity duration-200 hover:opacity-60"
              >
                hyperkidsevents@gmail.com
              </a>
              <a
                href="tel:+254780979777"
                className="text-amber-600 no-underline transition-opacity duration-200 hover:opacity-60"
              >
                +254 (0) 780 979 777 -Staxx Deck
              </a>
               <a
                href="tel:+254722548012"
                className="text-amber-600 no-underline transition-opacity duration-200 hover:opacity-60"
              >
                +254 (0) 722 548 012 - Hyper Kids
              </a>
            </div>

            <a
              href="/booking"
              onClick={(e) => handleNavigation(e, '/booking')}
              className="self-start border border-neutral-900 px-5 py-3 text-xs tracking-[0.12em] text-amber-600 uppercase no-underline transition-colors duration-200 hover:bg-neutral-900 hover:text-[#f9f9f8]"
            >
              Book an Event →
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}