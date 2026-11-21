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
    <div className="bg-white pt-20 font-sans text-[#16232A] antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#16232A]/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx-HyperKids Equipment Divisions</span>
            <span>Commerce House, Nairobi &bull; Serving 6 Kenyan Counties</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-[#16232A] sm:text-6xl lg:text-[4.5rem]">
              Equipment &amp; <br />
              <span className="text-neutral-500">Product Categories</span>
            </h1>

            <p className="text-base leading-relaxed text-[#16232A] md:text-sm lg:border-l lg:border-[#16232A]/15 lg:pl-10">
              Browse our six core rental and production divisions—from concert
              grand pianos, band backlines, and P3 LED walls to clear-span
              marquees, event furniture, and sanitized kiddie play units.
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUICK NAVIGATION STRIP */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div
          className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10"
          data-aos="fade-up"
        >
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            6 Core Inventory Divisions
          </span>

          <div className="flex flex-wrap gap-6">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="border-b border-transparent pb-0.5 text-xs tracking-[0.12em] text-neutral-700 uppercase no-underline transition-colors hover:border-[#16232A] hover:text-[#16232A]"
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORIES EDITORIAL GRID */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {categories.map((cat, index) => (
              <article
                id={cat.id}
                key={cat.id}
                className="group flex flex-col justify-between border border-[#16232A]/15 bg-white transition-colors duration-200 hover:border-[#16232A]"
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100}
              >
                <div>
                  {/* Top Metadata Bar */}
                  <div className="flex items-center justify-between border-b border-[#16232A]/15 px-6 py-3.5 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="font-medium text-[#16232A]">
                      0{index + 1} &bull; {cat.count}
                    </span>
                    <span className="font-semibold text-[#16232A]">
                      {cat.startingPrice}
                    </span>
                  </div>

                  {/* Category Image */}
                  <div className="aspect-[16/9] w-full overflow-hidden border-b border-[#16232A]/15 bg-neutral-200">
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Category Body */}
                  <div className="p-8 md:p-10">
                    <span className="mb-2 block text-[11px] tracking-[0.12em] text-neutral-500 uppercase">
                      {cat.subtitle}
                    </span>
                    <h2 className="mb-4 text-2xl font-normal tracking-[-0.02em] text-[#16232A] md:text-3xl">
                      {cat.name}
                    </h2>
                    <p className="mb-8 text-sm leading-relaxed text-[#16232A] md:text-base">
                      {cat.desc}
                    </p>

                    {/* Key Equipment Highlights */}
                    <div className="border-t border-[#16232A]/15 pt-6">
                      <span className="mb-3 block text-[10px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                        Included Inventory Highlights
                      </span>
                      <ul className="grid grid-cols-1 gap-2.5 text-xs text-[#16232A] sm:grid-cols-2">
                        {cat.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#075056]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#16232A]/15 bg-white px-8 py-5">
                  <a
                    href="/event-equipment-supplies"
                    onClick={(e) =>
                      handleLinkClick(e, '/event-equipment-supplies', {
                        selectedCategory: cat.name,
                      })
                    }
                    className="border border-[#E4EEF0] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#E4EEF0]"
                  >
                    Browse {cat.name} &rarr;
                  </a>

                  <a
                    href="/products/sample-product"
                    onClick={(e) => handleLinkClick(e, '/products/sample-product')}
                    className="border-b border-[#16232A] pb-0.5 text-xs font-medium tracking-[0.12em] text-[#16232A] uppercase no-underline transition-opacity hover:opacity-60"
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
      <section className="bg-[#075056] text-[#E4EEF0]">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Full-Service Production Bundles
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Combining Sound, Screens, Tents &amp; D&eacute;cor for One Event?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
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
              className="border border-[#E4EEF0] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#E4EEF0]"
            >
              Request Bundle Quote on WhatsApp &rarr;
            </a>
            <a
              href="/event-equipment-supplies"
              onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
              className="border border-[#E4EEF0]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#E4EEF0] uppercase no-underline transition-colors duration-200 hover:border-[#E4EEF0]"
            >
              View Full Catalog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}