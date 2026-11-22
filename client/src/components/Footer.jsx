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
    <footer className="border-t border-white/15 bg-[#0F2A2A] font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E]">
      {/* 1. TOP ARCHITECTURAL DISPATCH BAR */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <div className="max-w-xl"></div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION & HEADQUARTERS GRID */}
      <div className="border-b border-white/10 bg-[#0F2A2A] text-white">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-2 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
            {/* Brand & HQ Column */}
            <div className="flex flex-col justify-between py-10 lg:col-span-4 lg:py-16 lg:pr-12">
              <div className="space-y-4">
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
                <p className="max-w-sm text-xs leading-relaxed text-[#9E9A9F] md:text-sm">
                  Full-service birthday production, custom 3D backdrops,
                  sanitized commercial inflatables, and kids&apos; entertainment
                  delivered on schedule.
                </p>
              </div>
            </div>

            {/* 3 Link Columns */}
            <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:col-span-8">
              {navColumns.map((col) => (
                <div
                  key={col.heading}
                  className="py-10 sm:px-8 lg:py-16 lg:px-10"
                >
                  <span className="mb-6 block border-b border-white/10 pb-3 text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
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
                            className="inline-flex items-center gap-1.5 text-xs text-[#9E9A9F] no-underline transition-colors duration-200 hover:text-[#F5D033] md:text-sm"
                          >
                            <span>{link.label}</span>
                            <span className="text-xs text-white/40">↗</span>
                          </a>
                        ) : (
                          <a
                            href={link.path}
                            onClick={(e) => handleLinkClick(e, link.path)}
                            className="text-xs text-[#9E9A9F] no-underline transition-colors duration-200 hover:text-white md:text-sm"
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
      <div className="bg-[#0F2A2A]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-4 px-6 py-6 text-[11px] tracking-[0.14em] text-[#9E9A9F] uppercase sm:flex-row sm:items-center md:px-10">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>&copy; 2026 Staxx Hyper Kids Events</span>
            <span className="hidden text-white/25 sm:inline">&bull;</span>
            <span>All Rights Reserved</span>
            <span className="hidden text-white/25 md:inline">&bull;</span>
            <span className="hidden md:inline">Nairobi, Kenya</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex cursor-pointer items-center gap-3  bg-white py-1.5 pr-1.5 pl-4 text-[10px] font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
          >
            <span>Back to Top &uarr;</span>
            <span className="flex h-5 w-5 items-center justify-center  bg-[#0F2A2A] text-[10px] text-white">
              &uarr;
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
