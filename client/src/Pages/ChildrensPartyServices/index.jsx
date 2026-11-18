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
    <div className="bg-white pt-20 font-sans text-teal-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Kids Events</span>
            <span>12 Signature Services</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-teal-900 sm:text-6xl lg:text-[4.5rem]">
              Children&apos;s Party <br />
              <span className="text-neutral-500">Services</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-900 md:text-sm lg:border-l lg:border-neutral-900/15 lg:pl-10">
              From commercial bouncy castles and custom piñatas to face painting
              and full-scale themed decor, explore everything we bring to make
              your child&apos;s celebration effortless and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO STRIP */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="shrink-0 text-[11px] font-medium tracking-[0.14em] text-teal-900 uppercase">
            Mix, Match &amp; Customize
          </span>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-900 md:text-right">
            Book any service standalone or bundle multiple attractions into a
            custom turnkey package—delivered, set up, staffed, and packed down
            by our crew.
          </p>
        </div>
      </section>

      {/* 3. ALTERNATING 12 SERVICES SHOWCASE */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] divide-y divide-neutral-900/15 px-6 md:px-10">
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
                      : 'lg:order-2 lg:border-l lg:border-neutral-900/15 lg:pl-14'
                  }`}
                >
                  <div className="mb-6 flex items-center gap-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="font-medium text-teal-900">
                      {service.id}
                    </span>
                    <span>/</span>
                    <span>{service.category}</span>
                  </div>

                  <h2 className="mb-5 text-2xl font-normal tracking-[-0.02em] leading-[1.18] text-teal-900 sm:text-3xl md:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-900">
                    {service.description}
                  </p>

                  <div>
                    <a
                      href="/booking"
                      onClick={(e) => handleLinkClick(e, '/booking')}
                      className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-opacity duration-200 hover:opacity-55"
                    >
                      <span>Add to Party Plan</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>

                {/* Image Column */}
                <div
                  className={`${
                    isImageRight
                      ? 'lg:order-2 lg:border-l lg:border-neutral-900/15 lg:pl-14'
                      : 'lg:order-1 lg:pr-8'
                  }`}
                >
                  <div className="aspect-[16/11] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-neutral-900/15 pt-2.5 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span>Index {service.id}</span>
                    <span>{service.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Ready to Celebrate?
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Build Your Custom Party Lineup
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Tell us your child&apos;s age, guest count, and favorite
              attractions—we&apos;ll send back a tailored quote within 24 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Book Party Services &rarr;
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              View All-In-One Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}