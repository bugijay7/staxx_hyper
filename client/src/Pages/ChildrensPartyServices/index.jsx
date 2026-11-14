import React from 'react';

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
      img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '02',
      title: 'Professional Face Painting & Glitter Tattoos',
      category: 'Creative Art',
      description:
        'Our talented face painters use FDA-approved, hypoallergenic, skin-safe paints to turn kids into roaring tigers, sparkling fairies, superheroes, and butterflies. Includes waterproof glitter tattoo stations for older kids.',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '03',
      title: 'Custom Handcrafted Piñatas',
      category: 'Party Classics',
      description:
        'Bespoke, sturdy piñatas custom-designed to match your exact party theme—from unicorns and dinosaur eggs to space rockets. Supplied ready to hang and optionally pre-filled with premium nut-free candies and novelty toys.',
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '04',
      title: 'Bespoke Balloon Arches & Sculptures',
      category: 'Event Styling',
      description:
        'Show-stopping organic balloon garlands, towering entrance arches, and custom character balloon sculptures built using biodegradable, double-stuffed latex balloons in your exact color palette.',
      img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '05',
      title: 'Interactive Party Hosts & Game Masters',
      category: 'Entertainment',
      description:
        'High-energy party hosts who lead age-appropriate party games, treasure hunts, musical statues, and relay races—keeping every child engaged, laughing, and included from start to finish.',
      img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '06',
      title: 'Live Magic & Puppet Shows',
      category: 'Stage Shows',
      description:
        'Interactive, comedy-packed magic acts and lively puppet storytelling tailored specifically for children’s attention spans, featuring audience participation and a special starring moment for the birthday child.',
      img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '07',
      title: 'Fun Food Concessions (Popcorn & Cotton Candy)',
      category: 'Treats & Snacks',
      description:
        'Vintage-style popcorn carts, freshly spun cotton candy machines, and icy slush stations operated by our uniformed staff—bringing the sights, smells, and flavors of a carnival straight to your party.',
      img: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '08',
      title: 'Toddler Soft Play Zones',
      category: 'Under-5s',
      description:
        'Safe, padded, pastel and primary-colored soft play arenas complete with mini ball pits, foam climbing blocks, balance beams, and safety matting designed specifically for crawlers and toddlers.',
      img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '09',
      title: 'Character Mascots & Princess Appearances',
      category: 'Meet & Greet',
      description:
        'Make their jaw drop with surprise visits from beloved storybook princesses, comic-book heroes, or giant friendly mascots who pose for photos, lead dances, and help present the birthday cake.',
      img: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '10',
      title: 'Kids’ Mini Banquet Tables & Chiavari Seating',
      category: 'Furniture',
      description:
        'Child-sized banquet tables, miniature Chiavari chairs, themed table runners, and cake display plinths arranged to create a picture-perfect dining area scaled just for little guests.',
      img: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '11',
      title: 'Themed 3D Photo Backdrops & Props',
      category: 'Decor Worlds',
      description:
        'Custom-built sailboard backdrops, neon signage, life-size character cutouts, and themed prop boxes designed to give parents and guests an unforgettable photo opportunity.',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
    },
    {
      id: '12',
      title: 'Kids’ Silent Disco & Bubble Parties',
      category: 'High Energy',
      description:
        'LED-lit wireless headphones with kid-friendly playlists paired with commercial high-output bubble and foam machines for an epic, noise-controlled backyard dance party.',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
    },
  ];

  return (
    <div className="bg-teal-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Kids Events</span>
            <span>12 Signature Services</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Children&apos;s Party <br />
              <span className="text-neutral-500">Services</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              From commercial bouncy castles and custom piñatas to face painting
              and full-scale themed decor, explore everything we bring to make
              your child&apos;s celebration effortless and unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL INTRO STRIP */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="shrink-0 text-[11px] font-medium tracking-[0.14em] text-neutral-900 uppercase">
            Mix, Match &amp; Customize
          </span>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-right">
            Book any service standalone or bundle multiple attractions into a
            custom turnkey package—delivered, set up, staffed, and packed down
            by our crew.
          </p>
        </div>
      </section>

      {/* 3. ALTERNATING 12 SERVICES SHOWCASE */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
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
                    <span className="font-medium text-neutral-900">
                      {service.id}
                    </span>
                    <span>/</span>
                    <span>{service.category}</span>
                  </div>

                  <h2 className="mb-5 text-2xl font-normal tracking-[-0.02em] leading-[1.18] text-neutral-900 sm:text-3xl md:text-4xl">
                    {service.title}
                  </h2>

                  <p className="mb-8 max-w-xl text-base leading-relaxed text-neutral-600">
                    {service.description}
                  </p>

                  <div>
                    <a
                      href="/booking"
                      onClick={(e) => handleLinkClick(e, '/booking')}
                      className="inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-opacity duration-200 hover:opacity-55"
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
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
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
      <section className="bg-neutral-900 text-[#f9f9f8]">
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
              className="border border-[#f9f9f8] bg-teal-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
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