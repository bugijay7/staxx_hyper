import React, { useState, useEffect } from 'react';

import Backdrops from '../../assets/backdrops.jpg';
import Castles from '../../assets/castles.jpg';
import Churchevents from '../../assets/churchevents.jpg';
import Concerts from '../../assets/concerts.jpg';
import Corporategala from '../../assets/corporategala.jpg';
import Educationeevents from '../../assets/educationeevents.jpg';
import Exhibition from '../../assets/exhibition.jpg';
import Inflatable from '../../assets/inflatable.jpg';
import Lighting from '../../assets/lighting.jpg';
import Pastel from '../../assets/pastel.jpg';
import Privateparties from '../../assets/privateparties.jpg';
import Ruracio from '../../assets/ruracio.jpg';
import Weddings from '../../assets/weddings.jpg';

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
      img: Corporategala,
    },
    {
      id: '02',
      title: 'Traditional Ruracio & Cultural Dowry Celebration',
      category: 'Weddings & Engagements',
      location: 'Karen, Nairobi',
      img: Ruracio,
    },
    {
      id: '03',
      title: 'Milestone 40th Birthday & Twilight Garden Reception',
      category: 'Birthdays & Private Celebrations',
      location: 'Runda Estate',
      img: Privateparties,
    },
    {
      id: '04',
      title: 'Kids’ Safari Adventure & Mega Bouncy Castle Setup',
      category: "Children's Parties & Events",
      location: 'Lavington Gardens',
      img: Castles,
    },
    {
      id: '05',
      title: 'Outdoor Gospel Concert & Festival Main Stage',
      category: 'Concerts & Live Entertainment',
      location: 'Uhuru Gardens, Nairobi',
      img: Concerts,
    },
    {
      id: '06',
      title: 'Annual Church Convention & Marquee Sanctuary',
      category: 'Church & Religious Events',
      location: 'Kiambu Road',
      img: Churchevents,
    },
    {
      id: '07',
      title: 'University Graduation & Academic Awards Ceremony',
      category: 'Educational & Institutional Events',
      location: 'Gigiri, Nairobi',
      img: Educationeevents,
    },
    {
      id: '08',
      title: 'East Africa Trade Expo & Custom Brand Pavilion',
      category: 'Exhibitions & Promotional Events',
      location: 'KICC, Nairobi',
      img: Exhibition,
    },
    {
      id: '09',
      title: 'High-Impact Product Launch & Red Carpet Showcase',
      category: 'Corporate & Business Events',
      location: 'Kilimani, Nairobi',
      img: Corporategala,
    },
    {
      id: '10',
      title: 'Enchanted White Wedding Reception & Bridal Canopy',
      category: 'Weddings & Engagements',
      location: 'Muthaiga',
      img: Weddings,
    },
    {
      id: '11',
      title: 'Pastel Baby Shower & Family Anniversary Banquet',
      category: 'Birthdays & Private Celebrations',
      location: 'Spring Valley',
      img: Pastel,
    },
    {
      id: '12',
      title: 'Toddler Soft Play Arena & School Fun Day Carnival',
      category: "Children's Parties & Events",
      location: 'Nyari Estate',
      img: Inflatable,
    },
    {
      id: '13',
      title: 'Live Cultural Showcase & Theatrical Lighting Rig',
      category: 'Concerts & Live Entertainment',
      location: 'Rosslyn',
      img: Lighting,
    },
    {
      id: '14',
      title: 'Ministry Fundraising Gala & Choir Stage Production',
      category: 'Church & Religious Events',
      location: 'Syokimau',
      img: Churchevents,
    },
    {
      id: '15',
      title: 'Interactive Brand Activation & Consumer Experience Booth',
      category: 'Exhibitions & Promotional Events',
      location: 'Two Rivers, Nairobi',
      img: Exhibition,
    },
  ];

  const filteredItems =
    activeFilter === 'All'
      ? bokehGallery
      : bokehGallery.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0F2A2A] pt-20 font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E] md:pt-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      `}</style>

      {/* 1. HERO HEADER */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx Events &amp; Production</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> 8 Event Sectors &bull; Visual Archive
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Events Done <br />
              <span className="text-white/65">&amp; Portfolio Archive</span>
            </h1>

            <p className=" border border-white/10 bg-transparent p-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Explore our full-spectrum event production archive across
              corporate conferences, traditional weddings &amp; Ruracio, private
              milestones, kids&apos; parties, concerts, church conventions,
              graduations, and brand expos across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER STRIP */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:px-10 md:py-10">
          <span className="text-[10px] font-semibold tracking-[0.16em] text-[#9E9A9F] uppercase">
            Filter by Event Sector ({filteredItems.length})
          </span>

          <div className="flex flex-wrap gap-2.5">
            {eventCategories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer  px-4 py-1.5 text-[7px] md:text-[10px] font-medium tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'bg-white text-[#0D0A0E]'
                      : 'border border-white/15 bg-transparent text-[#9E9A9F] hover:border-white/40 hover:text-white'
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
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group cursor-pointer  border border-white/15 bg-[#141016] p-4 transition-all duration-200 hover:border-[#F5D033]/70"
              >
                {/* Top Index Bar */}
                <div className="mb-3 flex items-center justify-between gap-3 border-b border-white/10 pb-2.5 text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                  <span className="shrink-0 font-bold text-[#F5D033]">
                    Shot {item.id}
                  </span>
                  <span className="truncate">{item.category}</span>
                </div>

                {/* Image Plate */}
                <div className="relative mb-4 aspect-[16/11] w-full overflow-hidden  border border-white/10 bg-[#1B171E]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                {/* Bottom Caption & Expand Trigger */}
                <div className="flex items-start justify-between gap-4 px-1 pt-1 pb-1">
                  <div>
                    <p className="mb-1 text-[11px] tracking-[0.14em] text-[#9E9A9F] uppercase">
                      {item.location}
                    </p>
                    <h3 className="text-base font-medium tracking-[-0.01em] text-white transition-colors duration-200 group-hover:text-[#F5D033]">
                      {item.title}
                    </h3>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center  border border-white/25 bg-[#1C181F] text-sm font-medium text-white transition-colors duration-200 group-hover:border-white group-hover:bg-white group-hover:text-[#0D0A0E]"
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F2A2A]/90 p-4 backdrop-blur-xs md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden  border border-white/20 bg-[#141016] text-white shadow-2xl"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[11px] tracking-[0.16em] uppercase">
              <div className="flex flex-wrap items-center gap-2.5 text-[#9E9A9F]">
                <strong className="font-bold text-[#F5D033]">
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
                className="cursor-pointer  border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:bg-white hover:text-[#0D0A0E]"
              >
                Close
              </button>
            </div>

            {/* Image Frame */}
            <div className="flex-1 overflow-hidden bg-[#0F2A2A]">
              <img
                src={lightboxItem.img}
                alt={lightboxItem.title}
                className="max-h-[64vh] w-full object-cover"
              />
            </div>

            {/* Bottom Title & Booking CTA */}
            <div className="flex flex-col justify-between gap-4 border-t border-white/10 bg-[#141016] px-6 py-5 sm:flex-row sm:items-center">
              <h3 className="font-display-condensed text-2xl font-normal tracking-wide text-white md:text-3xl">
                {lightboxItem.title}
              </h3>

              <a
                href="/booking"
                onClick={(e) => handleLinkClick(e, '/booking')}
                className="group inline-flex items-center gap-3 self-start  bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033] sm:self-auto"
              >
                <span>Book Similar Setup &rarr;</span>
                <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Let&apos;s Produce Your Next Landmark Occasion
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              From corporate summits, weddings, and Ruracio ceremonies to
              concerts, church conventions, graduations, and exhibitions—share
              your vision and our team will handle full production.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Book Your Date &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="group inline-flex items-center gap-3  border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>View KES Packages</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
