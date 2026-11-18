import React, { useState } from 'react';

import Childrenparty from '../../assets/childrenparty.jpg';
import Corporategala from '../../assets/corporategala.jpg';
import Gardenwedding from '../../assets/gardenwedding.jpg';
import Ruracio from '../../assets/ruracio.jpg';


export default function EventInspo({ onNavigate }) {
  const [selectedInspo, setSelectedInspo] = useState(null);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const inspoWorlds = [
    {
      id: '01',
      title: 'Modern Ruracio & Traditional Dowry',
      tagline: 'Warm terracotta, Kikuyu/Kalenjin/Luo cultural draping & family seating',
      ageRange: 'Traditional Ceremonies • Family',
      palette: ['#B91C1C', '#D97706', '#166534', '#FEF3C7'],
      img: Ruracio,
      description:
        'An authentic yet polished celebration honoring Kenyan matrimonial traditions. Styled with rich African fabric accents, comfortable family tents, structured wooden dais for elders, clear-span marquees, and traditional cooking and reception gear tailored for homesteads across Kiambu, Murang’a, Nakuru, Machakos, and Kajiado.',
      highlights: [
        'Clear-Span Marquee Tents & Weatherproof Sidewalls',
        'Elders’ Dais & Family Banquet Seating Arrangements',
        'Traditional Kitenge/Ankara Table Runners & Floral Styling',
        'Public Address Sound System for Speeches & MCs',
      ],
    },
    {
      id: '02',
      title: 'Nairobi Corporate Gala & AGM',
      tagline: 'Executive stage lighting, P3 LED screens & crystal-clear sound',
      ageRange: 'Corporate, Banking & Enterprise',
      palette: ['#18181B', '#2563EB', '#38BDF8', '#E4E4E7'],
      img: Corporategala,
      description:
        'Tailored for Annual General Meetings, corporate dinners, and product launches at KICC, Serena, Villa Rosa Kempinski, or office ballrooms. Features professional line-array sound systems, P3 indoor LED video walls, stage wash lighting, and branded media backdrops.',
      highlights: [
        'P3 Indoor LED Video Walls & Live Presentation Switchers',
        'Distributed Line-Array Speakers & Wireless Mic Packages',
        'Modular Staging with Carpeting & Branded Lecterns',
        'Standby Power Generator & Dedicated AV Engineers',
      ],
    },
    {
      id: '03',
      title: 'Garden Wedding & Twilight Reception',
      tagline: 'White Chiavari chairs, fairy-light canopies & romantic floral arches',
      ageRange: 'Weddings & Anniversary Celebrations',
      palette: ['#F472B6', '#FDE047', '#FFFFFF', '#15803D'],
      img: Gardenwedding,
      description:
        'Designed for lush green lawns in Karen, Runda, Loresho, or Naivasha. Features golden structural arches, cascading floral canopies, white Chiavari chairs, round banquet tables with clean linen, and romantic fairy-light ceiling installations for evening romance.',
      highlights: [
        'Luxury Marquees & Transparent Roof Canopies',
        'Gold & White Chiavari Chairs with Banquet Tables',
        'Fairy-Light Ceiling Draping & Ambient Uplighting',
        'Live Band Sound Rig & Acoustic Stage Setup',
      ],
    },
    {
      id: '04',
      title: 'Estate Kids Birthday Party',
      tagline: 'Sanitized bouncy castles, themed balloon garlands & sweet treat carts',
      ageRange: 'Children’s Birthdays & Family Fun Days',
      palette: ['#EC4899', '#3B82F6', '#10B981', '#F59E0B'],
      img: Childrenparty,
      description:
        'A stress-free, vibrant celebration for children in estate gardens or clubhouse lawns. Includes commercial sanitized inflatables, organic balloon garlands, sailboard photo backdrops, face painting, and popcorn or cotton candy machines.',
      highlights: [
        'Sanitized Commercial Bouncy Castles & Soft Play Areas',
        'Custom Sailboard Backdrops & Organic Balloon Garlands',
        'Popcorn & Cotton Candy Concession Machines with Attendants',
        'Child-Height Tables, Chairs & Interactive Party Hosts',
      ],
    },
  ];

  return (
    <div className="bg-white pt-20 font-sans text-teal-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx-HyperKids &bull; Kenyan Event Themes</span>
            <span>Ruracio &bull; Corporate Galas &bull; Weddings &bull; Kids Parties</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-teal-900 sm:text-6xl lg:text-[4.5rem]">
              Relatable Kenyan <br />
              <span className="text-neutral-500">Event Themes</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-900 md:text-sm lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Explore four practical, culturally resonant event setups designed
              specifically for traditional Ruracios, Nairobi corporate AGMs,
              garden weddings, and estate children&rsquo;s parties across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="shrink-0 text-[11px] font-medium tracking-[0.14em] text-teal-900 uppercase">
            Tailored to Your Venue &amp; Budget
          </span>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-900 md:text-right">
            Every theme is backed by our full equipment hire and on-site setup
            teams based in Nairobi, serving Kiambu, Nakuru, Machakos,
            Murang&rsquo;a, and Kajiado.
          </p>
        </div>
      </section>

      {/* 3. FOUR KENYAN THEMES SHOWCASE */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] divide-y divide-neutral-900/15 px-6 md:px-10">
          {inspoWorlds.map((inspo) => {
            const isTipOpen = selectedInspo === inspo.id;

            return (
              <div
                key={inspo.id}
                className="group grid grid-cols-1 items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
              >
                {/* Left Column: Details, Highlights & Palette */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] uppercase">
                      <span className="text-neutral-500">
                        <strong className="font-medium text-teal-900">
                          Theme {inspo.id}
                        </strong>
                      </span>
                      <span className="border border-neutral-900/20 px-2.5 py-0.5 text-[10px] text-neutral-700">
                        {inspo.ageRange}
                      </span>
                    </div>

                    <h2 className="mb-2 text-2xl font-normal tracking-[-0.02em] leading-[1.15] text-teal-900 sm:text-3xl md:text-4xl">
                      {inspo.title}
                    </h2>

                    <p className="mb-6 text-sm font-medium tracking-[-0.01em] text-neutral-500">
                      {inspo.tagline}
                    </p>

                    <p className="mb-8 text-base leading-relaxed text-gray-900">
                      {inspo.description}
                    </p>
                  </div>

                  {/* Signature Elements */}
                  <div className="mb-8 border-t border-neutral-900/15 pt-6">
                    <span className="mb-4 block text-[11px] font-medium tracking-[0.14em] text-teal-900 uppercase">
                      What&rsquo;s Included in Setup
                    </span>
                    <ul className="grid grid-cols-1 gap-3 text-sm text-neutral-700 sm:grid-cols-2">
                      {inspo.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-900" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Palette & Actions */}
                  <div className="flex flex-col justify-between gap-6 border-t border-neutral-900/15 pt-6 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                        Palette
                      </span>
                      <div className="flex items-center gap-2">
                        {inspo.palette.map((color) => (
                          <span
                            key={color}
                            title={color}
                            style={{ backgroundColor: color }}
                            className="h-5 w-5 border border-neutral-900/25"
                          >
                            <span className="sr-only">{color}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedInspo(isTipOpen ? null : inspo.id)
                        }
                        aria-expanded={isTipOpen}
                        className="cursor-pointer border-b border-neutral-900/30 pb-0.5 text-xs tracking-[0.12em] text-gray-900 uppercase transition-colors hover:border-neutral-900 hover:text-teal-900"
                      >
                        {isTipOpen ? 'Hide Planner Tip' : 'Planner Tip'}
                      </button>

                      <a
                        href="/booking"
                        onClick={(e) => handleLinkClick(e, '/booking')}
                        className="border border-[#f9f9f8] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
                      >
                        Book This Theme &rarr;
                      </a>
                    </div>
                  </div>

                  {/* Expandable Planner Note */}
                  {isTipOpen && (
                    <div className="mt-6 border border-neutral-900/15 bg-white p-5 text-sm leading-relaxed text-neutral-700">
                      <strong className="block mb-1 text-xs font-medium tracking-[0.08em] text-teal-900 uppercase">
                        Staxx-HyperKids Setup Advice
                      </strong>
                      For the <strong>{inspo.title}</strong>, we recommend
                      conducting a joint site survey at your venue or homestead
                      at least 5 days prior to verify ground leveling, tent
                      anchoring, and power access.
                    </div>
                  )}
                </div>

                {/* Right Column: Theme Plate */}
                <div className="lg:border-l lg:border-neutral-900/15 lg:pl-14">
                  <div className="aspect-[16/11] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={inspo.img}
                      alt={inspo.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-neutral-900/15 pt-2.5 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span>Theme {inspo.id} / Kenyan Setup Showcase</span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      {inspo.palette.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CUSTOM THEME CTA */}
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Have a Custom Event Vision?
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              We Tailor Every Setup to Your Specific Requirements
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Whether you are planning a countryside wedding in Kiambu, a church
              convention in Machakos, or a corporate product launch in Nairobi—our
              team handles the technical production, d&eacute;cor, and logistics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Request a Custom Quote &rarr;
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Explore KES Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}