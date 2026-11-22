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
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx-HyperKids &bull; Kenyan Event Themes</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Ruracio &bull; Corporate Galas &bull; Weddings &bull; Kids Parties
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Relatable Kenyan <br />
              <span className="text-white/65">Event Themes</span>
            </h1>

            <p className="rounded-2xl border border-white/10 bg-[#151117] p-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Explore four practical, culturally resonant event setups designed
              specifically for traditional Ruracios, Nairobi corporate AGMs,
              garden weddings, and estate children&rsquo;s parties across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
          <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> Tailored to Your Venue &amp; Budget
          </span>
          <p className="max-w-2xl text-xs leading-relaxed text-[#C7C3C9] md:text-right md:text-sm">
            Every theme is backed by our full equipment hire and on-site setup
            teams based in Nairobi, serving Kiambu, Nakuru, Machakos,
            Murang&rsquo;a, and Kajiado.
          </p>
        </div>
      </section>

      {/* 3. FOUR KENYAN THEMES SHOWCASE */}
      <section className="border-b border-white/10 bg-[#0D0A0E]">
        <div className="mx-auto max-w-[1440px] divide-y divide-white/15 px-6 md:px-10">
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
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 text-[11px] tracking-[0.16em] uppercase">
                      <span className="text-[#9E9A9F]">
                        <strong className="font-bold text-[#F5D033]">
                          Theme {inspo.id}
                        </strong>
                      </span>
                      <span className="rounded-full border border-white/15 bg-[#151117] px-3.5 py-1 text-[10px] font-medium text-white/90">
                        {inspo.ageRange}
                      </span>
                    </div>

                    <h2 className="font-display-condensed mb-3 text-3xl font-normal leading-[0.98] text-white sm:text-4xl md:text-5xl">
                      {inspo.title}
                    </h2>

                    <p className="mb-6 text-sm font-medium tracking-[-0.01em] text-[#F5D033]">
                      {inspo.tagline}
                    </p>

                    <p className="mb-8 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                      {inspo.description}
                    </p>
                  </div>

                  {/* Signature Elements */}
                  <div className="mb-8 border-t border-white/15 pt-6">
                    <span className="mb-4 block text-[11px] font-semibold tracking-[0.16em] text-white uppercase">
                      What&rsquo;s Included in Setup
                    </span>
                    <ul className="grid grid-cols-1 gap-3 text-sm text-[#D1CDD3] sm:grid-cols-2">
                      {inspo.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5D033]" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Palette & Actions */}
                  <div className="flex flex-col justify-between gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                        Palette
                      </span>
                      <div className="flex items-center gap-2">
                        {inspo.palette.map((color) => (
                          <span
                            key={color}
                            title={color}
                            style={{ backgroundColor: color }}
                            className="h-5 w-5 rounded-full border border-white/30"
                          >
                            <span className="sr-only">{color}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedInspo(isTipOpen ? null : inspo.id)
                        }
                        aria-expanded={isTipOpen}
                        className="cursor-pointer rounded-full border border-white/25 bg-transparent px-4 py-2 text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
                      >
                        {isTipOpen ? 'Hide Planner Tip' : 'Planner Tip'}
                      </button>

                      <a
                        href="/booking"
                        onClick={(e) => handleLinkClick(e, '/booking')}
                        className="group/btn inline-flex items-center gap-3 rounded-full bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                      >
                        <span>Book This Theme &rarr;</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0D0A0E] text-xs text-white transition-transform duration-200 group-hover/btn:translate-x-0.5">
                          &rarr;
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Expandable Planner Note */}
                  {isTipOpen && (
                    <div className="mt-6 rounded-2xl border border-[#F5D033]/40 bg-[#151117] p-5 text-sm leading-relaxed text-[#D1CDD3]">
                      <strong className="mb-1.5 flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-[#F5D033] uppercase">
                        <span>&#10022;</span> Staxx-HyperKids Setup Advice
                      </strong>
                      For the <strong className="text-white">{inspo.title}</strong>, we recommend
                      conducting a joint site survey at your venue or homestead
                      at least 5 days prior to verify ground leveling, tent
                      anchoring, and power access.
                    </div>
                  )}
                </div>

                {/* Right Column: Theme Plate */}
                <div className="lg:border-l lg:border-white/10 lg:pl-14">
                  <div className="aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1A161C]">
                    <img
                      src={inspo.img}
                      alt={inspo.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                    <span>Theme {inspo.id} / Kenyan Setup Showcase</span>
                    <span className="font-mono text-[10px] text-white/60">
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
      <section className="bg-[#0D0A0E] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 rounded-3xl bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Have a Custom Event Vision? <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              We Tailor Every Setup to Your Specific Requirements
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Whether you are planning a countryside wedding in Kiambu, a church
              convention in Machakos, or a corporate product launch in Nairobi—our
              team handles the technical production, d&eacute;cor, and logistics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#0D0A0E] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request a Custom Quote &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="group inline-flex items-center gap-3 rounded-full border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Explore KES Packages</span>
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