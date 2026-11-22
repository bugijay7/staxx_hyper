import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Guitarrig from '../../assets/guitarrig.jpg';
import Lighting from '../../assets/lighting.jpg';
import Piano from '../../assets/piano.jpg';
import Soundsystem from '../../assets/soundsystem.jpg';
import Stageplatforms from '../../assets/stageplatforms.jpg';
import Tablearrangement1 from '../../assets/tablearrangement1.jpeg';
import Tentsetup from '../../assets/tentsetup.jpg';
import Videowall from '../../assets/videowall.jpeg';

export default function EventEquipmentSupplies({ onNavigate, selectedCategoryProp = 'All' }) {
  const [selectedCategory, setSelectedCategory] = useState(selectedCategoryProp);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const handleSelectProduct = (e, product) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate('/products/sample-product', product);
    }
  };

  const categories = [
    'All',
    'Band & Audio',
    'Screens & Lighting',
    'Staging & Trusses',
    'Tents & Canopies',
    'Event Furniture',
  ];

  const inventory = [
    {
      id: 'eq-01',
      title: 'Grand Piano',
      category: 'Band & Audio',
      priceNumeric: 45000,
      price: 'KES 45,000 / day',
      desc: 'Concert-grade acoustic grand piano delivered, tuned on-site, and calibrated for professional indoor or outdoor gala performances.',
      specs: ['Concert Grand 7\'6"', 'Gloss Ebony Finish', 'Includes adjustable artist bench & on-site tuning'],
      img: Piano,
    },
    {
      id: 'eq-02',
      title: 'Full Band Guitar Rig & Backline',
      category: 'Band & Audio',
      priceNumeric: 25000,
      price: 'KES 25,000 / day',
      desc: 'Complete live band backline including professional twin-reverb guitar amplifiers, valve stacks, bass heads, and professional DI boxes.',
      specs: ['Tube Amps', 'Direct Outs Included', 'Optional guitar stands & stage cabling'],
      img: Guitarrig,
    },
    {
      id: 'eq-03',
      title: 'Pro Line-Array Sound System',
      category: 'Band & Audio',
      priceNumeric: 55000,
      price: 'KES 55,000 / day',
      desc: 'Concert-grade dual line array modules with subwoofers, digital mixing console, wireless mic package, and sound engineer.',
      specs: ['Pristine Speech Intelligibility', 'Up to 1,500 Guests', 'Dedicated Audio Technician on standby'],
      img: Soundsystem,
    },
    {
      id: 'eq-04',
      title: 'Indoor LED Video Wall (Custom Dimensions)',
      category: 'Screens & Lighting',
      priceNumeric: 80000,
      price: 'KES 80,000 / day',
      desc: 'Ultra-high-definition modular LED panels for crystal-clear keynote presentations, live camera feeds, and brand activations.',
      specs: ['High-Resolution Pitch', 'Seamless Scalable Panels', 'Video processor & laptop switcher included'],
      img: Videowall,
    },
    {
      id: 'eq-05',
      title: 'Moving Head Stage Lighting & Wash Rig',
      category: 'Screens & Lighting',
      priceNumeric: 35000,
      price: 'KES 35,000 / day',
      desc: 'Dynamic intelligent lighting package featuring beam moving heads, LED pars, DMX lighting console, and atmospheric haze machine.',
      specs: ['DMX Programmable', 'Architectural Uplighting', 'Truss mounting clamps included'],
      img: Lighting,
    },
    {
      id: 'eq-06',
      title: 'Heavy-Duty Aluminum Stage Platform (Modular)',
      category: 'Staging & Trusses',
      priceNumeric: 30000,
      price: 'KES 30,000 / day',
      desc: 'Non-slip modular stage decks adjustable in height, complete with safety skirting, carpet finish, and sturdy access steps.',
      specs: ['Adjustable Height (2ft - 4ft)', 'Weatherproof Decking', 'Modular sizing up to 40ft x 20ft'],
      img: Stageplatforms,
    },
    {
      id: 'eq-07',
      title: 'Clear-Span Marquee Tent (Luxury Structure)',
      category: 'Tents & Canopies',
      priceNumeric: 65000,
      price: 'KES 65,000 / day',
      desc: 'Professional engineering marquee tents with heavy-duty aluminum framing, waterproof PVC roofing, glass or solid walls, and optional flooring.',
      specs: ['Zero Center Poles', 'Wind & Rain Rated', 'Available in 10m, 15m, and 20m spans'],
      img: Tentsetup,
    },
    {
      id: 'eq-08',
      title: 'Banquet & Cocktail Event Furniture Suite',
      category: 'Event Furniture',
      priceNumeric: 15000,
      price: 'KES 15,000 / day',
      desc: 'Elegant Chiavari chairs, round banquet tables with premium linen, high cocktail tables, and executive lounge seating sets.',
      specs: ['Gold/White Chiavari Options', 'Clean Pristine Linens', 'Delivery & setup by Staxx crew'],
      img: Tablearrangement1,
    },
  ];

  const filteredInventory = inventory.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx-HyperKids Rental Inventory</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Commerce House, Nairobi &bull; Kenya-Wide Delivery
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Equipment &amp; <br />
              <span className="text-white/65">Supplies Catalog</span>
            </h1>

            <p className=" border border-white/10 bg-transparentp-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Explore our professional rental inventory including grand
              pianos, band gear, indoor LED video walls, moving head lighting, stages,
              clear-span marquees, and event furniture across six counties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8"
          data-aos="fade-up"
        >
          {/* Search Bar */}
          <div className="w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search pianos, LED screens, amps, tents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full  border border-white/15 bg-[#1C1720] px-5 py-3 text-xs tracking-[0.06em] text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer  px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#F5D033] text-[#0D0A0E]'
                      : 'border border-white/15 bg-transparent text-[#9E9A9F] hover:border-white hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Showing {filteredInventory.length} Available Items
            </span>
            <span>Click any item for full specs &amp; booking</span>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredInventory.map((item, index) => (
              <a
                key={item.id}
                href="/products/sample-product"
                onClick={(e) => handleSelectProduct(e, item)}
                className="group flex flex-col justify-between overflow-hidden  border border-white/15 bg-[#141016] no-underline transition-all duration-200 hover:border-[#F5D033]/70"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <div>
                  {/* Category & Price Plate */}
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[10px] tracking-[0.16em] uppercase">
                    <span className="font-bold text-[#F5D033]">
                      {item.category}
                    </span>
                    <span className=" bg-white/10 px-3 py-1 font-semibold text-white">
                      {item.price}
                    </span>
                  </div>

                  {/* Image Frame */}
                  <div className="aspect-[16/11] w-full overflow-hidden border-b border-white/10 bg-[#1B171E]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 md:p-8">
                    <h2 className="font-display-condensed mb-3 text-2xl font-normal leading-snug tracking-wide text-white transition-colors duration-200 group-hover:text-[#F5D033] md:text-3xl">
                      {item.title}
                    </h2>

                    <p className="mb-6 text-sm leading-relaxed text-[#C7C3C9]">
                      {item.desc}
                    </p>

                    <ul className="space-y-2 border-t border-white/10 pt-4 text-xs text-[#D1CDD3]">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 shrink-0  bg-[#F5D033]" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Trigger */}
                <div className="flex items-center justify-between border-t border-white/10 bg-[#18141B] px-6 py-4 md:px-8">
                  <span className="text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors group-hover:text-[#F5D033]">
                    View Specifications &amp; Book &rarr;
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-[#F5D033]">
                    &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className=" border border-white/15 bg-[#141016] py-20 text-center">
              <p className="text-base text-[#C7C3C9]">
                No equipment found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-5 inline-flex cursor-pointer items-center gap-3  bg-white py-2.5 pr-2.5 pl-6 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
              >
                <span>Reset Filters</span>
                <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                  &rarr;
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Custom Riders &amp; Packages <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Need a Custom Technical Rider or Multiple Equipment Bundles?
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Speak directly with our AV engineers and logistics coordinators at
              Commerce House, Nairobi. We provide full delivery, professional setup,
              and standby technicians across six Kenyan counties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request Equipment Quotation &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="group inline-flex items-center gap-3  border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Contact Our Engineers</span>
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
