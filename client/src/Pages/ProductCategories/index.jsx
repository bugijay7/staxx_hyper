import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Bandsetup from '../../assets/bandsetup.jpeg';
import Kiddietable1 from '../../assets/childrenparty.jpg';
import Stageplatforms from '../../assets/stageplatforms.jpg';
import Tablearrangement1 from '../../assets/tablearrangement1.jpeg';
import Tentsetup from '../../assets/tentsetup.jpg';
import Videowall from '../../assets/videowall.jpeg';

export default function ProductCategories({ onNavigate }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleLinkClick = (e, path, data = null) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path, data);
    }
  };

  const categories = [
    {
      id: 'cat-01',
      name: 'Band & Audio',
      subtitle: 'Line-Array PA, Pianos, Guitar Rigs & Digital Mixing',
      count: '24+ Rental Units',
      startingPrice: 'From KES 15,000 / day',
      desc: 'Concert-grade sound reinforcement, acoustic grand pianos, full live band backlines, wireless microphone packages, and seasoned audio engineers for conferences, concerts, and galas.',
      highlights: [
        'Yamaha C7 Grand Pianos & Stage Keyboards',
        'Fender, Marshall & Ampeg Live Band Backline',
        'Dual 10" Line-Array Systems & Digital Consoles',
        'Shure Wireless Microphones & In-Ear Monitors',
      ],
      img: Bandsetup,
    },
    {
      id: 'cat-02',
      name: 'Screens & Lighting',
      subtitle: 'P3 Indoor/Outdoor LED Video Walls & Intelligent DMX Rigs',
      count: '18+ Systems',
      startingPrice: 'From KES 25,000 / day',
      desc: 'Seamless high-brightness LED display screens, moving-head beam lights, architectural venue uplighting, and atmospheric effects calibrated for keynotes, weddings, and night activations.',
      highlights: [
        'Modular P3 Indoor & P4 Outdoor LED Walls',
        'Moving Head Beams, Spots & Wash Fixtures',
        'Wireless Battery Uplights & Gobos',
        'DMX Lighting Consoles & Atmospheric Hazers',
      ],
      img: Videowall,
    },
    {
      id: 'cat-03',
      name: 'Staging & Trusses',
      subtitle: 'Modular Decks, Aluminum Box Trussing & Rigging Systems',
      count: '15+ Configurations',
      startingPrice: 'From KES 20,000 / day',
      desc: 'Certified heavy-duty modular stage platforms, custom-height risers, catwalks, and aluminum goal-post or box truss structures engineered for safe indoor and outdoor deployment.',
      highlights: [
        'Non-Slip Modular Stage Platforms (2ft–4ft High)',
        'Heavy-Duty Aluminum Box Trussing & Crank Stands',
        'Branded Stage Skirting, Carpeting & Access Steps',
        'Heavy-Duty Pedestrian Cable Ramps & Barriers',
      ],
      img: Stageplatforms,
    },
    {
      id: 'cat-04',
      name: 'Tents & Canopies',
      subtitle: 'Clear-Span Marquees, Pagoda Tents & Raised Flooring',
      count: '30+ Structures',
      startingPrice: 'From KES 18,000 / day',
      desc: 'Weather-rated clear-span marquees, luxury white pagoda canopies, roll-down sidewalls, and interlocking event flooring built to protect guests across all Kenyan weather conditions.',
      highlights: [
        '10m, 15m & 20m Clear-Span Aluminum Marquees',
        '5m x 5m & 6m x 6m Luxury Pagoda Tents',
        'Interlocking Cassette Flooring & Red/Grey Carpets',
        'Ceiling Draping, Chandeliers & Weather Sidewalls',
      ],
      img: Tentsetup,
    },
    {
      id: 'cat-05',
      name: 'Event Furniture',
      subtitle: 'Chiavari Chairs, Banquet Tables, VIP Lounges & Plinths',
      count: '500+ Pieces',
      startingPrice: 'From KES 10,000 / day',
      desc: 'Curated event seating, round and rectangular banquet tables, high cocktail tables, executive VIP leather lounges, and bespoke display plinths for corporate and private functions.',
      highlights: [
        'Gold, White & Clear Ghost Chiavari Chairs',
        'Round Banquet Tables & Crisp Damask Linens',
        'Executive VIP Sofa Lounges & Coffee Tables',
        'High Cocktail Tables, Bar Stools & Cake Plinths',
      ],
      img: Tablearrangement1,
    },
    {
      id: 'cat-06',
      name: 'Kiddie Play & Concessions',
      subtitle: 'Sanitized Commercial Inflatables, Soft Play & Fun Food Carts',
      count: '20+ Units',
      startingPrice: 'From KES 12,000 / day',
      desc: 'Commercial-grade bouncy castles, obstacle courses, padded toddler soft-play zones, and high-output popcorn, cotton candy, and slush machines with trained attendants.',
      highlights: [
        'Sanitized Commercial Bouncy Castles & Slides',
        'Padded Toddler Soft-Play Arenas & Ball Pits',
        'Popcorn, Cotton Candy & Slush Concession Carts',
        'Child-Height Tables, Chairs & Silent Generators',
      ],
      img: Kiddietable1,
    },
  ];

  // WhatsApp direct inquiry link for custom multi-category bundles
  const whatsappNumber = '254702443418';
  const whatsappBundleUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Hello Staxx-HyperKids, I would like to request a multi-category equipment & production quote for my upcoming event.'
  )}`;

  return (
    <div className="min-h-screen bg-[#0D0A0E] pt-20 font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E] md:pt-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      `}</style>

      {/* 1. HERO HEADER */}
      <section className="border-b border-white/10 bg-[#0D0A0E]">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx-HyperKids Equipment Divisions</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Commerce House, Nairobi &bull; Serving 6 Kenyan Counties
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Equipment &amp; <br />
              <span className="text-white/65">Product Categories</span>
            </h1>

            <p className="rounded-2xl border border-white/10 bg-[#151117] p-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Browse our six core rental and production divisions—from concert
              grand pianos, band backlines, and P3 LED walls to clear-span
              marquees, event furniture, and sanitized kiddie play units.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK NAVIGATION STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div
          className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> 6 Core Inventory Divisions
          </span>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-full border border-white/15 bg-transparent px-4 py-1.5 text-xs font-medium tracking-[0.14em] text-[#9E9A9F] uppercase no-underline transition-colors hover:border-white hover:bg-white hover:text-[#0D0A0E]"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES EDITORIAL GRID */}
      <section className="border-b border-white/10 bg-[#0D0A0E]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {categories.map((cat, index) => (
              <article
                id={cat.id}
                key={cat.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#141016] transition-all duration-200 hover:border-[#F5D033]/70"
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100}
              >
                <div>
                  {/* Top Metadata Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[11px] tracking-[0.16em] uppercase">
                    <span className="font-bold text-[#F5D033]">
                      0{index + 1} &bull; {cat.count}
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 font-semibold text-white">
                      {cat.startingPrice}
                    </span>
                  </div>

                  {/* Category Image */}
                  <div className="aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#1B171E]">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Category Body */}
                  <div className="p-8 md:p-10">
                    <span className="mb-2 block text-[11px] font-medium tracking-[0.14em] text-[#F5D033] uppercase">
                      {cat.subtitle}
                    </span>
                    <h2 className="font-display-condensed mb-4 text-3xl font-normal tracking-wide text-white md:text-4xl">
                      {cat.name}
                    </h2>
                    <p className="mb-8 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                      {cat.desc}
                    </p>

                    {/* Key Equipment Highlights */}
                    <div className="border-t border-white/10 pt-6">
                      <span className="mb-3 block text-[10px] font-semibold tracking-[0.16em] text-[#9E9A9F] uppercase">
                        Included Inventory Highlights
                      </span>
                      <ul className="grid grid-cols-1 gap-2.5 text-xs text-[#D1CDD3] sm:grid-cols-2">
                        {cat.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5D033]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 bg-[#18141B] px-8 py-5">
                  <a
                    href="/event-equipment-supplies"
                    onClick={(e) =>
                      handleLinkClick(e, '/event-equipment-supplies', {
                        selectedCategory: cat.name,
                      })
                    }
                    className="group/btn inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                  >
                    <span>Browse {cat.name} &rarr;</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0D0A0E] text-xs text-white transition-transform duration-200 group-hover/btn:translate-x-0.5">
                      &rarr;
                    </span>
                  </a>

                  <a
                    href="/products/sample-product"
                    onClick={(e) => handleLinkClick(e, '/products/sample-product')}
                    className="rounded-full border border-white/25 bg-transparent px-4 py-2 text-xs font-medium tracking-[0.14em] text-white uppercase no-underline transition-colors hover:border-white hover:bg-white/10"
                  >
                    Featured Unit Specs
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#0D0A0E] px-6 py-16 md:px-10 md:py-24">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 rounded-3xl bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Full-Service Production Bundles <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Combining Sound, Screens, Tents &amp; D&eacute;cor for One Event?
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Bundle multiple equipment categories into a single unified
              production package with discounted KES rates, synchronized truck
              logistics, and on-site engineering crew across Nairobi, Kiambu,
              Nakuru, Machakos, Murang&rsquo;a, and Kajiado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={whatsappBundleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0D0A0E] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request Bundle Quote on WhatsApp &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/event-equipment-supplies"
              onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
              className="group inline-flex items-center gap-3 rounded-full border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>View Full Catalog</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D0A0E] text-xs text-white">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}