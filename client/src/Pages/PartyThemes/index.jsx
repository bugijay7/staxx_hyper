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
      title: 'Traditional Ceremonies & celebrations',
      tagline: 'Beautiful cultural touches, family seating & welcoming reception setups',
      ageRange: 'Ruracio • Engagements • Family Celebrations',
      img: Ruracio,
      description:
        'Celebrate important family milestones with a warm and well-organised setup. From traditional ruracio ceremonies and dowry celebrations to family gatherings, we bring together elegant tents, comfortable seating, decorative touches and sound equipment to create a welcoming atmosphere.',
      highlights: [
        'Tents, Canopies & Weather Protection',
        'Guest Seating & Family Reception Arrangements',
        'Decorative Table Settings & Floral Styling',
        'Sound Systems for Speeches, Music & Entertainment',
      ],
    },
    {
      id: '02',
      title: 'Corporate Events and  Conferences',
      tagline: 'Professional staging, clear sound & well-coordinated event setups',
      ageRange: 'Corporate • Conferences • Business Events',
      img: Corporategala,
      description:
        'Create a professional setting for business meetings, conferences, workshops, product launches, staff celebrations and corporate dinners. We provide the staging, audiovisual equipment, lighting, seating and event essentials needed to deliver a smooth and organised experience.',
      highlights: [
        'Professional Stage & Presentation Setups',
        'Sound Systems, Microphones & PA Equipment',
        'LED Screens, Projectors & Display Equipment',
        'Event Lighting, Backdrops & Technical Support',
      ],
    },
    {
      id: '03',
      title: 'Weddings & Engagement Celebrations',
      tagline: 'Elegant décor, beautiful seating & memorable reception settings',
      ageRange: 'Weddings • Engagements • Anniversaries',
      img: Gardenwedding,
      description:
        'Make your special day memorable with a beautifully arranged celebration. Whether it is a traditional wedding, white wedding, garden ceremony or reception, we help bring your vision together with stylish décor, elegant seating, tents, floral arrangements and entertainment equipment.',
      highlights: [
        'Wedding Tents & Reception Setups',
        'Elegant Chairs, Tables & Table Settings',
        'Floral Arrangements, Backdrops & Decorative Styling',
        'Sound, Stage & Ambient Lighting',
      ],
    },
    {
      id: '04',
      title: 'Birthday Parties & Family Celebrations',
      tagline: 'Fun decorations, colourful setups & entertainment for everyone',
      ageRange: 'Birthdays • Family Parties • Celebrations',
      img: Childrenparty,
      description:
        'Bring people together for birthdays, graduation parties, baby showers, family fun days and other special occasions. From colourful decorations and photo backdrops to party furniture, entertainment equipment and catering accessories, we help create enjoyable celebrations for guests of all ages.',
      highlights: [
        'Party Tents, Chairs & Tables',
        'Balloon Decorations & Photo Backdrops',
        'Bouncy Castles & Entertainment Equipment',
        'Popcorn Machines & Party Accessories',
      ],
    },
  ];

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
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Relatable Kenyan <br />
              <span className="text-white/65">Event Themes</span>
            </h1>

            <p className="border border-white/10 bg-transparent p-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
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
          <span className="inline-flex shrink-0 items-center gap-2 text-[8px] font-bold tracking-[0.16em] text-[#F5D033] uppercase md:text-[10px]">
            Tailored to Your Venue &amp; Budget
          </span>
          <p className="max-w-2xl text-right text-xs leading-relaxed text-[#C7C3C9] md:text-sm">
            Every theme is backed by our full equipment hire and on-site setup
            teams based in Nairobi, serving Kiambu, Nakuru, Machakos,
            Murang&rsquo;a, and Kajiado.
          </p>
        </div>
      </section>

      {/* 3. FOUR KENYAN THEMES SHOWCASE */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] divide-y divide-white/15 px-6 md:px-10">
          {inspoWorlds.map((inspo) => {
            const isTipOpen = selectedInspo === inspo.id;

            return (
              <div
                key={inspo.id}
                className="group grid grid-cols-1 items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
              >
                {/* Left Column: Details, Highlights & Actions */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 text-[11px] tracking-[0.16em] uppercase">
                      <span className="text-[#9E9A9F]">
                        <strong className="font-bold text-[#F5D033]">
                          Theme {inspo.id}
                        </strong>
                      </span>
                      <span className="border border-white/15 bg-transparent px-3.5 py-1 text-[10px] font-medium text-white/90">
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
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F5D033]" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center justify-end gap-4 border-t border-white/15 pt-6">
                    <button
                      type="button"
                      onClick={() =>
                        setSelectedInspo(isTipOpen ? null : inspo.id)
                      }
                      aria-expanded={isTipOpen}
                      className="cursor-pointer border border-white/25 bg-transparent px-4 py-2 text-xs font-medium tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
                    >
                      {isTipOpen ? 'Hide Planner Tip' : 'Planner Tip'}
                    </button>

                    <a
                      href="/booking"
                      onClick={(e) => handleLinkClick(e, '/booking')}
                      className="group/btn inline-flex items-center gap-3 bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                    >
                      <span>Get a quote &rarr;</span>
                      <span className="flex h-6 w-6 items-center justify-center bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover/btn:translate-x-0.5">
                        &rarr;
                      </span>
                    </a>
                  </div>

                  {/* Expandable Planner Note */}
                  {isTipOpen && (
                    <div className="mt-6 border border-[#F5D033]/40 bg-transparent p-5 text-sm leading-relaxed text-[#D1CDD3]">
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
                  <div className="aspect-[16/11] w-full overflow-hidden border border-white/10 bg-[#1A161C]">
                    <img
                      src={inspo.img}
                      alt={inspo.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                    <span>Theme {inspo.id} / Kenyan Setup Showcase</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CUSTOM THEME CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Have a Custom Event Vision? 
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              We Tailor Every Setup to Your Specific Requirements
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
             Whether you're planning a wedding, traditional ceremony, church event or corporate function, our team brings together the technical production, décor and equipment to make your event come together beautifully.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3 bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request a Custom Quote &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="group inline-flex items-center gap-3 border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Explore KES Packages</span>
              <span className="flex h-7 w-7 items-center justify-center bg-[#0F2A2A] text-xs text-white">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}