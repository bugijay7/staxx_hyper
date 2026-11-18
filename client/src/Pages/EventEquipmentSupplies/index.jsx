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
    <div className="bg-white pt-20 font-sans text-teal-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx-HyperKids Rental Inventory</span>
            <span>Commerce House, Nairobi &bull; Kenya-Wide Delivery</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-teal-900 sm:text-6xl lg:text-[4.5rem]">
              Equipment &amp; <br />
              <span className="text-neutral-500">Supplies Catalog</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-900 md:text-sm lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Explore our professional rental inventory including grand
              pianos, band gear, indoor LED video walls, moving head lighting, stages,
              clear-span marquees, and event furniture across six counties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. SEARCH & CATEGORY FILTER STRIP */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10"
          data-aos="fade-up"
        >
          {/* Search Bar */}
          <div className="w-full md:max-w-md">
            <input
              type="text"
              placeholder="Search pianos, LED screens, amps, tents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-neutral-900/25 bg-white px-4 py-3 text-xs tracking-[0.06em] text-teal-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'border-neutral-900 font-medium text-teal-900'
                      : 'border-transparent text-neutral-400 hover:text-teal-900'
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
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-8 flex items-center justify-between border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Showing {filteredInventory.length} Available Items</span>
            <span>Click any item for full specs &amp; booking</span>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredInventory.map((item, index) => (
              <a
                key={item.id}
                href="/products/sample-product"
                onClick={(e) => handleSelectProduct(e, item)}
                className="group flex flex-col justify-between border border-neutral-900/15 bg-white no-underline transition-colors duration-200 hover:border-neutral-900"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <div>
                  {/* Category & Price Plate */}
                  <div className="flex items-center justify-between border-b border-neutral-900/15 px-6 py-3 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="font-medium text-teal-900">
                      {item.category}
                    </span>
                    <span className="font-semibold text-teal-900">
                      {item.price}
                    </span>
                  </div>

                  {/* Image Frame */}
                  <div className="aspect-[16/11] w-full overflow-hidden border-b border-neutral-900/15 bg-neutral-200">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 md:p-8">
                    <h2 className="mb-3 text-xl font-normal tracking-[-0.015em] leading-snug text-teal-900 transition-opacity duration-200 group-hover:opacity-70">
                      {item.title}
                    </h2>

                    <p className="mb-6 text-sm leading-relaxed text-gray-900">
                      {item.desc}
                    </p>

                    <ul className="space-y-1.5 border-t border-neutral-900/15 pt-4 text-xs text-neutral-700">
                      {item.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <span className="h-1 w-1 bg-neutral-900" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Trigger */}
                <div className="border-t border-neutral-900/15 bg-white px-6 py-4 md:px-8">
                  <span className="text-xs font-medium tracking-[0.14em] text-teal-900 uppercase transition-opacity group-hover:opacity-65">
                    View Specifications &amp; Book &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredInventory.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-base text-gray-900">
                No equipment found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-4 border border-[#f9f9f8] bg-white px-6 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Custom Riders &amp; Packages
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Need a Custom Technical Rider or Multiple Equipment Bundles?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Speak directly with our AV engineers and logistics coordinators at
              Commerce House, Nairobi. We provide full delivery, professional setup,
              and standby technicians across six Kenyan counties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Request Equipment Quotation &rarr;
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Contact Our Engineers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}