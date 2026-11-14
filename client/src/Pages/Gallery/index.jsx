import React, { useState, useEffect } from 'react';

export default function Gallery({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxItem, setLightboxItem] = useState(null);

  useEffect(() => {
    if (!lightboxItem) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setLightboxItem(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxItem]);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    setLightboxItem(null);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const eventCategories = [
    'All',
    'Corporate & Business Events',
    'Weddings & Engagements',
    'Birthdays & Private Celebrations',
    "Children's Parties & Events",
    'Concerts & Live Entertainment',
    'Church & Religious Events',
    'Educational & Institutional Events',
    'Exhibitions & Promotional Events',
  ];

  const bokehGallery = [
    {
      id: '01',
      title: 'Annual General Meeting & Executive Gala Dinner',
      category: 'Corporate & Business Events',
      location: 'Westlands, Nairobi',
      img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '02',
      title: 'Traditional Ruracio & Cultural Dowry Celebration',
      category: 'Weddings & Engagements',
      location: 'Karen, Nairobi',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '03',
      title: 'Milestone 40th Birthday & Twilight Garden Reception',
      category: 'Birthdays & Private Celebrations',
      location: 'Runda Estate',
      img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '04',
      title: 'Kids’ Safari Adventure & Mega Bouncy Castle Setup',
      category: "Children's Parties & Events",
      location: 'Lavington Gardens',
      img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '05',
      title: 'Outdoor Gospel Concert & Festival Main Stage',
      category: 'Concerts & Live Entertainment',
      location: 'Uhuru Gardens, Nairobi',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '06',
      title: 'Annual Church Convention & Marquee Sanctuary',
      category: 'Church & Religious Events',
      location: 'Kiambu Road',
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '07',
      title: 'University Graduation & Academic Awards Ceremony',
      category: 'Educational & Institutional Events',
      location: 'Gigiri, Nairobi',
      img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '08',
      title: 'East Africa Trade Expo & Custom Brand Pavilion',
      category: 'Exhibitions & Promotional Events',
      location: 'KICC, Nairobi',
      img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: '09',
      title: 'High-Impact Product Launch & Red Carpet Showcase',
      category: 'Corporate & Business Events',
      location: 'Kilimani, Nairobi',
      img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '10',
      title: 'Enchanted White Wedding Reception & Bridal Canopy',
      category: 'Weddings & Engagements',
      location: 'Muthaiga',
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '11',
      title: 'Pastel Baby Shower & Family Anniversary Banquet',
      category: 'Birthdays & Private Celebrations',
      location: 'Spring Valley',
      img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '12',
      title: 'Toddler Soft Play Arena & School Fun Day Carnival',
      category: "Children's Parties & Events",
      location: 'Nyari Estate',
      img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '13',
      title: 'Live Cultural Showcase & Theatrical Lighting Rig',
      category: 'Concerts & Live Entertainment',
      location: 'Rosslyn',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '14',
      title: 'Ministry Fundraising Gala & Choir Stage Production',
      category: 'Church & Religious Events',
      location: 'Syokimau',
      img: 'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: '15',
      title: 'Interactive Brand Activation & Consumer Experience Booth',
      category: 'Exhibitions & Promotional Events',
      location: 'Two Rivers, Nairobi',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    },
  ];

  const filteredItems =
    activeFilter === 'All'
      ? bokehGallery
      : bokehGallery.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-teal-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Events &amp; Production</span>
            <span>8 Event Sectors &bull; Visual Archive</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Events Done <br />
              <span className="text-neutral-500">&amp; Portfolio Archive</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Explore our full-spectrum event production archive across
              corporate conferences, traditional weddings &amp; Ruracio, private
              milestones, kids&apos; parties, concerts, church conventions,
              graduations, and brand expos across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER STRIP */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:px-10 md:py-10">
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            Filter by Event Sector ({filteredItems.length})
          </span>

          <div className="flex flex-wrap gap-x-7 gap-y-4">
            {eventCategories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'border-neutral-900 font-medium text-neutral-900'
                      : 'border-transparent text-neutral-500 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ARCHITECTURAL PORTFOLIO GRID */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group cursor-pointer"
              >
                {/* Top Index Bar */}
                <div className="mb-3 flex items-center justify-between gap-3 border-b border-neutral-900/15 pb-2 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                  <span className="shrink-0 font-medium text-neutral-900">
                    Shot {item.id}
                  </span>
                  <span className="truncate">{item.category}</span>
                </div>

                {/* Image Plate */}
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                {/* Bottom Caption & Expand Trigger */}
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div>
                    <p className="mb-1 text-[11px] tracking-[0.12em] text-neutral-500 uppercase">
                      {item.location}
                    </p>
                    <h3 className="text-base font-normal tracking-[-0.01em] text-neutral-900 transition-opacity duration-200 group-hover:opacity-65">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 shrink-0 items-center justify-center border border-neutral-900/20 text-sm font-light text-neutral-900 transition-colors duration-200 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-[#f9f9f8]"
                  >
                    +
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURAL LIGHTBOX MODAL */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/85 p-4 backdrop-blur-xs md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden border border-neutral-900/20 bg-teal-100 text-neutral-900"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between border-b border-neutral-900/15 px-6 py-4 text-[11px] tracking-[0.14em] uppercase">
              <div className="flex flex-wrap items-center gap-2.5 text-neutral-500">
                <strong className="font-medium text-neutral-900">
                  Shot {lightboxItem.id}
                </strong>
                <span>&bull;</span>
                <span>{lightboxItem.category}</span>
                <span>&bull;</span>
                <span>{lightboxItem.location}</span>
              </div>

              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                className="cursor-pointer bg-transparent py-1 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase transition-opacity hover:opacity-55"
              >
                Close
              </button>
            </div>

            {/* Image Frame */}
            <div className="flex-1 overflow-hidden bg-neutral-200">
              <img
                src={lightboxItem.img}
                alt={lightboxItem.title}
                className="max-h-[64vh] w-full object-cover"
              />
            </div>

            {/* Bottom Title & Booking CTA */}
            <div className="flex flex-col justify-between gap-4 border-t border-neutral-900/15 bg-teal-100 px-6 py-5 sm:flex-row sm:items-center">
              <h3 className="text-lg font-normal tracking-[-0.01em] text-neutral-900 md:text-xl">
                {lightboxItem.title}
              </h3>

              <a
                href="/booking"
                onClick={(e) => handleLinkClick(e, '/booking')}
                className="self-start border border-neutral-900 bg-neutral-900 px-5 py-3 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-neutral-900 sm:self-auto"
              >
                Book Similar Setup &rarr;
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="bg-neutral-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Planning an Event Across Any Sector?
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Let&apos;s Produce Your Next Landmark Occasion
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              From corporate summits, weddings, and Ruracio ceremonies to
              concerts, church conventions, graduations, and exhibitions—share
              your vision and our team will handle full production.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-teal-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Book Your Date &rarr;
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              View KES Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}