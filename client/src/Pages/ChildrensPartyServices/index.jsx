import React from 'react';

import Backdrops from '../../assets/backdrops.jpg';
import Ballongarland from '../../assets/ballongarland.jpg';
import Castles from '../../assets/castles.jpg';
import Confetti from '../../assets/confetti.jpg';
import Concessions from '../../assets/concessions.jpg';
import Facepainting from '../../assets/facepainting.jpg';
import Inflatable from '../../assets/inflatable.jpg';
import Kiddiepartysupply1 from '../../assets/kiddiepartysupply1.jpeg';
import Kiddiepartysupply2 from '../../assets/kiddiepartysupply2.jpeg';
import Kiddietable1 from '../../assets/canopies.jpg';
import Pinhattas1 from '../../assets/pinhattas1.jpeg';

export default function ChildrensPartyServices({ onNavigate }) {
  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const services = [
    {
      id: '01',
      title: 'Commercial Bouncy Castles & Inflatables',
      category: 'Active Play',
      description:
        'Transform any backyard or venue into an adventure park with our sanitized, commercial-grade bouncy castles, obstacle courses, and inflatable slides. Delivered, anchored, and safety-inspected by our team before the first guest arrives.',
      img: Castles,
    },
    {
      id: '02',
      title: 'Professional Face Painting & Glitter Tattoos',
      category: 'Creative Art',
      description:
        'Our talented face painters use FDA-approved, hypoallergenic, skin-safe paints to turn kids into roaring tigers, sparkling fairies, superheroes, and butterflies. Includes waterproof glitter tattoo stations for older kids.',
      img: Facepainting,
    },
    {
      id: '03',
      title: 'Custom Handcrafted Piñatas',
      category: 'Party Classics',
      description:
        'Bespoke, sturdy piñatas custom-designed to match your exact party theme—from unicorns and dinosaur eggs to space rockets. Supplied ready to hang and optionally pre-filled with premium nut-free candies and novelty toys.',
      img: Pinhattas1,
    },
    {
      id: '04',
      title: 'Bespoke Balloon Arches & Sculptures',
      category: 'Event Styling',
      description:
        'Show-stopping organic balloon garlands, towering entrance arches, and custom character balloon sculptures built using biodegradable, double-stuffed latex balloons in your exact color palette.',
      img: Ballongarland,
    },
    {
      id: '05',
      title: 'Interactive Party Hosts & Game Masters',
      category: 'Entertainment',
      description:
        'High-energy party hosts who lead age-appropriate party games, treasure hunts, musical statues, and relay races—keeping every child engaged, laughing, and included from start to finish.',
      img: Kiddiepartysupply1,
    },
    {
      id: '06',
      title: 'Live Magic & Puppet Shows',
      category: 'Stage Shows',
      description:
        'Interactive, comedy-packed magic acts and lively puppet storytelling tailored specifically for children’s attention spans, featuring audience participation and a special starring moment for the birthday child.',
      img: Confetti,
    },
    {
      id: '07',
      title: 'Fun Food Concessions (Popcorn & Cotton Candy)',
      category: 'Treats & Snacks',
      description:
        'Vintage-style popcorn carts, freshly spun cotton candy machines, and icy slush stations operated by our uniformed staff—bringing the sights, smells, and flavors of a carnival straight to your party.',
      img: Concessions,
    },
    {
      id: '08',
      title: 'Toddler Soft Play Zones',
      category: 'Under-5s',
      description:
        'Safe, padded, pastel and primary-colored soft play arenas complete with mini ball pits, foam climbing blocks, balance beams, and safety matting designed specifically for crawlers and toddlers.',
      img: Inflatable,
    },
    {
      id: '09',
      title: 'Character Mascots & Princess Appearances',
      category: 'Meet & Greet',
      description:
        'Make their jaw drop with surprise visits from beloved storybook princesses, comic-book heroes, or giant friendly mascots who pose for photos, lead dances, and help present the birthday cake.',
      img: Kiddiepartysupply2,
    },
    {
      id: '10',
      title: 'Kids’ Mini Banquet Tables & Chiavari Seating',
      category: 'Furniture',
      description:
        'Child-sized banquet tables, miniature Chiavari chairs, themed table runners, and cake display plinths arranged to create a picture-perfect dining area scaled just for little guests.',
      img: Kiddietable1,
    },
    {
      id: '11',
      title: 'Themed 3D Photo Backdrops & Props',
      category: 'Decor Worlds',
      description:
        'Custom-built sailboard backdrops, neon signage, life-size character cutouts, and themed prop boxes designed to give parents and guests an unforgettable photo opportunity.',
      img: Backdrops,
    },
    {
      id: '12',
      title: 'Kids’ Silent Disco & Bubble Parties',
      category: 'High Energy',
      description:
        'LED-lit wireless headphones with kid-friendly playlists paired with commercial high-output bubble and foam machines for an epic, noise-controlled backyard dance party.',
      img: Confetti,
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
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx Hyper Kids Events</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> 12 Signature Services
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Children&apos;s Party <br />
              <span className="text-white/65">Services</span>
            </h1>

            <p className=" border border-white/10 bg-transparentp-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              From commercial bouncy castles and custom piñatas to face painting
              and full-scale themed decor, explore everything we bring to make
              your child&apos;s celebration effortless and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
          <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> Mix, Match &amp; Customize
          </span>
          <p className="max-w-2xl text-xs leading-relaxed text-[#C7C3C9] md:text-right md:text-sm">
            Book any service standalone or bundle multiple attractions into a
            custom turnkey package—delivered, set up, staffed, and packed down
            by our crew.
          </p>
        </div>
      </section>

      {/* 3. ALTERNATING 12 SERVICES SHOWCASE */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] divide-y divide-white/15 px-6 md:px-10">
          {services.map((service, index) => {
            const isImageRight = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="group grid grid-cols-1 items-center gap-10 py-16 md:py-24 lg:grid-cols-2 lg:gap-16"
              >
                {/* Text Column */}
                <div
                  className={`flex flex-col justify-between ${
                    isImageRight
                      ? 'lg:order-1 lg:pr-8'
                      : 'lg:order-2 lg:border-l lg:border-white/10 lg:pl-14'
                  }`}
                >
                  <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                    <span className=" bg-white/10 px-3 py-1 font-bold text-[#F5D033]">
                      {service.id}
                    </span>
                    <span className="text-white/30">/</span>
                    <span className="font-medium text-white/85">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="font-display-condensed mb-5 text-3xl font-normal leading-[0.98] text-white sm:text-4xl md:text-5xl">
                    {service.title}
                  </h2>

                  <p className="mb-8 max-w-xl text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                    {service.description}
                  </p>

                  <div>
                    <a
                      href="/booking"
                      onClick={(e) => handleLinkClick(e, '/booking')}
                      className="group/btn inline-flex items-center gap-3  bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                    >
                      <span>Add to Party Plan</span>
                      <span
                        aria-hidden="true"
                        className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover/btn:translate-x-0.5"
                      >
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`${
                    isImageRight
                      ? 'lg:order-2 lg:border-l lg:border-white/10 lg:pl-14'
                      : 'lg:order-1 lg:pr-8'
                  }`}
                >
                  <div className="aspect-[16/11] w-full overflow-hidden  border border-white/10 bg-[#1A161C]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                    <span>Index {service.id}</span>
                    <span className="text-white/70">{service.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Ready to Celebrate? <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Build Your Custom Party Lineup
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Tell us your child&apos;s age, guest count, and favorite
              attractions—we&apos;ll send back a tailored quote within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Book Party Services &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="group inline-flex items-center gap-3  border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>View All-In-One Packages</span>
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
