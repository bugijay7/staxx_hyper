import React from 'react';
import logo from '../assets/logo.png'; // Update path if your logo filename or folder structure differs

export default function Footer({ onNavigate }) {
  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navColumns = [
    {
      heading: 'Explore',
      links: [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Celebration Gallery', path: '/gallery' },
        { label: 'Parent Testimonials', path: '/testimonials' },
        { label: 'Party Planning Blog', path: '/blog' },
      ],
    },
    {
      heading: 'Services & Packages',
      links: [
        { label: 'KES Party Packages', path: '/party-packages' },
        { label: 'Book a Party Setup', path: '/booking' },
        { label: 'FAQs & Logistics', path: '/faqs' },
        { label: 'Contact Nairobi HQ', path: '/contact' },
      ],
    },
    {
      heading: 'Social & Dispatch',
      links: [
        {
          label: 'WhatsApp (+254 712 345 678)',
          href: 'https://wa.me/254712345678',
          external: true,
        },
        {
          label: 'Instagram (@staxxhyper.events)',
          href: 'https://instagram.com',
          external: true,
        },
        {
          label: 'TikTok (@staxxevents.kids)',
          href: 'https://tiktok.com',
          external: true,
        },
        {
          label: 'Facebook Community',
          href: 'https://facebook.com',
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="border-t border-neutral-900/15 bg-teal-900 font-sans text-white antialiased">
      {/* 1. TOP ARCHITECTURAL DISPATCH BAR */}
      <div className="border-b border-neutral-900/15">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-12 md:flex-row md:items-center md:px-10 md:py-16">
          <div className="max-w-xl">
            
          </div>

          
        </div>
      </div>

      {/* 2. MAIN NAVIGATION & HEADQUARTERS GRID */}
      <div className="border-b border-neutral-900/15 bg-teal-900 text-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 divide-y divide-neutral-900/15 md:grid-cols-2 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
            {/* Brand & HQ Column */}
            <div className="flex flex-col justify-between py-2 lg:col-span-4 lg:py-16 lg:pr-12">
              <div className="space-y-1">
                <a
                  href="/"
                  onClick={(e) => handleLinkClick(e, '/')}
                  className="inline-block no-underline"
                >
                  <img
                    src={logo}
                    alt="Staxx Hyper Events Logo"
                    className="h-50 w-auto object-contain"
                  />
                </a>
                <p className="max-w-sm text-sm leading-relaxed text-neutral-300">
                  Full-service birthday production, custom 3D backdrops,
                  sanitized commercial inflatables, and kids&apos; entertainment
                  delivered on schedule.
                </p>
              </div>

              
            </div>

            {/* 3 Link Columns */}
            <div className="grid grid-cols-1 divide-y divide-neutral-900/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:col-span-8">
              {navColumns.map((col) => (
                <div
                  key={col.heading}
                  className="py-12 sm:px-8 lg:py-16 lg:px-10"
                >
                  <span className="mb-6 block border-b border-neutral-900/15 pb-3 text-[11px] font-medium tracking-[0.14em] text-white uppercase">
                    [ {col.heading} ]
                  </span>

                  <ul className="space-y-3.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-white no-underline transition-colors duration-200 hover:text-neutral-900"
                          >
                            <span>{link.label}</span>
                            <span className="text-xs text-neutral-400">↗</span>
                          </a>
                        ) : (
                          <a
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className="text-sm text-white no-underline transition-colors duration-200 hover:text-neutral-900"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM ARCHITECTURAL COLOPHON & BACK-TO-TOP */}
      <div className="bg-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-6 py-6 text-[11px] tracking-[0.14em] text-neutral-500 uppercase sm:flex-row sm:items-center md:px-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; 2026 Staxx Hyper Kids Events</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>All Rights Reserved</span>
            <span className="hidden md:inline">&bull;</span>
            <span className="hidden md:inline">Nairobi, Kenya</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="cursor-pointer border border-neutral-900/20 bg-white px-4 py-2 text-[11px] font-medium tracking-[0.14em] text-neutral-900 uppercase transition-colors duration-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-[#f9f9f8]"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}