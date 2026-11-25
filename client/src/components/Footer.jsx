import React from 'react';
import logo from '../assets/logo.png';
import footerBg from '../assets/footer.jpg';

export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;

    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navColumns = [
    {
      heading: 'Company',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Event Gallery', path: '/gallery' },
        { label: 'Client Testimonials', path: '/testimonials' },
        { label: 'Event Journal', path: '/blog' },
      ],
    },
    {
      heading: 'Event Services',
      links: [
        { label: 'Equipment Catalog', path: '/event-equipment-supplies' },
        { label: 'Events Setup', path: '/event-setup' },
        { label: 'Events Portfolio', path: '/party-themes' },
        { label: 'Kid\'s Celebrations', path: '/childrens-party-services' },
      ],
    },
    {
      heading: 'Book & Enquire',
      links: [
        { label: 'Book an Event', path: '/booking' },
        { label: 'Product Enquiry', path: '/product-enquiry' },
        { label: 'FAQs', path: '/faqs' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
    {
      heading: 'Socials',
      isExternal: true,
      links: [
        {
          label: 'WhatsApp',
          href: 'https://wa.me/254702443418',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
            </svg>
          ),
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/staxxhyperkids/',
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          ),
        },
        {
          label: 'TikTok',
          href: 'https://www.tiktok.com/@staxxhyperkids?lang=en',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          ),
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/staxx-hyperkids-316a04451/',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          ),
        },
        {
          label: 'Facebook',
          href: 'https://www.facebook.com/profile.php?id=61596901230157',
          icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#d6b019] text-zinc-900 font-sans antialiased selection:bg-zinc-900 selection:text-white">
      {/* Background Image with Top Light Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-bottom"
        />
        {/* Smooth gradient blending the top content area into the background photo */}
        <div
          className="absolute inset-0"
         
        />
        {/* Subtle bottom mist fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-12"
         
        />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Left Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            

            <h2 className="text-xl text-white font-bold tracking-tight">
              Your premier event production partner
            </h2>

            <p className="text-xs leading-relaxed text-zinc-200 max-w-xs">
              Integrated event production, commercial AV, clear-span marquees,
              spatial styling, and kids&apos; party setups across 6 Kenyan
              counties.
            </p>

            {/* CTA Button */}
            <div className="pt-1">
              <a
                href="/booking"
                onClick={(e) => handleLinkClick(e, '/booking')}
                className="inline-flex items-center gap-2 px-4 py-2.5  bg-amber-600 hover:bg-teal-900 text-zinc-950 hover:text-white font-bold text-xs uppercase tracking-wide shadow-sm transition-all duration-150 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"
              >
                <span>BOOK AN EVENT</span>
              </a>
            </div>

            {/* Readable Copyright & Location Pill over the Photo */}
            
          </div>

          {/* Right Navigation Columns in a Subtle Frosted Glass Panel */}
          <div className="lg:col-span-8  bg-white/65 backdrop-blur-md border border-white/60 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {navColumns.map((col) => (
                <div key={col.heading} className="space-y-4">
                  <h3 className="text-sm font-bold text-zinc-950 tracking-tight">
                    {col.heading}
                  </h3>

                  {col.isExternal ? (
                    <div className="space-y-4">
                      <ul className="flex flex-wrap items-center gap-2">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={link.label}
                              title={link.label}
                              className="h-9 w-9 flex items-center justify-center rounded-md border border-zinc-900/15 bg-white/80 text-zinc-900 hover:bg-teal-900 hover:border-teal-900 hover:text-white transition-colors duration-150"
                            >
                              {link.icon}
                            </a>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[11px] text-zinc-800">
                        <a
                          href="tel:+254702443418"
                          className="font-semibold hover:text-teal-900 underline-offset-4 hover:underline"
                        >
                          +254 702 443 418
                        </a>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-2.5">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className="text-[13.5px] font-medium text-zinc-800 hover:text-teal-900 transition-colors duration-150"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Oversized Display Brand Wordmark at the Bottom */}
      <div className="relative z-10 w-full flex justify-center items-end pt-10 sm:pt-16 md:pt-24 pb-2 px-4 select-none pointer-events-none">
        <span
          aria-hidden="true"
          className="text-[15.5vw] font-bold tracking-[-0.045em] leading-[0.82] text-teal-900 whitespace-nowrap drop-shadow-sm"
        >
          Staxx Hyper
        </span>
      </div>

      <div className="pt-2">
              <div className="inline-flex flex-col space-y-1  bg-white/85 backdrop-blur-md px-3.5 py-2.5 border border-zinc-900/10 shadow-2xs text-[11px] text-zinc-800 font-medium">
                <p>&copy; 2026 Staxx Hyper &ndash; All rights reserved Commerce House, Nairobi &bull; Kenya</p>
                
                  
              
              </div>
            </div>
    </footer>
  );
}