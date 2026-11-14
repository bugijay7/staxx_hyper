import React, { useState } from 'react';
import heroImg from '../../assets/hero.jpg';
import pastelImg from '../../assets/pastel.jpg';
import confettiImg from '../../assets/confetti.jpg';
import castlesImg from '../../assets/castles.jpg';
import cakeTableImg from '../../assets/cakeTable.jpg';
import ballonGarlandImg from '../../assets/ballonGarland.jpg';
import concessionsImg from '../../assets/concessions.jpg';
import inflatableImg from '../../assets/inflatable.jpg';
import backdropsImg from '../../assets/backdrops.jpg';
import canopiesImg from '../../assets/canopies.jpg';

export default function Home({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const galleryImages = [
    {
      url: pastelImg,
      title: 'Pastel Garden Birthday',
      category: 'parties',
      tag: 'Full Setup',
    },
    {
      url: confettiImg,
      title: 'Confetti & Color Smash',
      category: 'parties',
      tag: 'Custom Theme',
    },
    {
      url: castlesImg,
      title: 'Commercial Inflatables & Castles',
      category: 'equipment',
      tag: 'Equipment Rental',
    },
    {
      url: cakeTableImg,
      title: 'Custom Dessert & Cake Tables',
      category: 'parties',
      tag: 'Table Styling',
    },
    {
      url: ballonGarlandImg,
      title: 'Organic Balloon Garlands',
      category: 'supplies',
      tag: 'Bespoke Decor',
    },
    {
      url: concessionsImg,
      title: 'Popcorn & Concession Carts',
      category: 'equipment',
      tag: 'Catering Gear',
    },
  ];

  const packages = [
    {
      name: 'Essential Party Box',
      price: '$199',
      sub: 'Best for backyard or living room birthdays up to 10 kids',
      featured: false,
      features: [
        'Up to 10 children',
        '8ft balloon arch & custom backdrop',
        'Themed plates, cups, napkins & table linens',
        '1 party host for 90 minutes of games',
        'Morning delivery and standard setup',
      ],
    },
    {
      name: 'Deluxe Backyard Setup',
      price: '$399',
      sub: 'Full theme styling plus active play equipment for up to 20 kids',
      featured: true,
      features: [
        'Up to 20 children',
        'Layered 3D backdrop & 14ft organic balloon garland',
        'Choice of mini bouncy castle or toddler soft-play zone',
        '1 costumed character or interactive entertainer (2 hrs)',
        'Organized relay games & take-home prize packs',
        'Full delivery, anchoring, and evening takedown',
      ],
    },
    {
      name: 'Full-Scale Celebration',
      price: '$699',
      sub: 'Large-group event production for milestone birthdays & school fairs',
      featured: false,
      features: [
        '25+ children',
        'Multi-zone custom theme installation',
        'Commercial bouncy castle + warm popcorn machine',
        '2 entertainers + face painter or balloon twister',
        'Dedicated snack & drink station with attendant',
        'On-site event coordinator from setup to pack-down',
      ],
    },
  ];

  const equipmentCategories = [
    {
      title: 'Inflatables & Soft Play',
      detail: 'Commercial-grade castles, slides & toddler pits',
      img: inflatableImg,
      path: '/event-equipment-supplies',
    },
    {
      title: 'Backdrops & Balloon Decor',
      detail: 'Custom arches, plinths & themed props',
      img: backdropsImg,
      path: '/event-equipment-supplies',
    },
    {
      title: 'Fun Food Concessions',
      detail: 'Popcorn, cotton candy & slush machines',
      img: concessionsImg,
      path: '/event-equipment-supplies',
    },
    {
      title: 'Tables, Seating & Canopies',
      detail: 'Child-height tables, Chiavari chairs & shade tents',
      img: canopiesImg,
      path: '/event-equipment-supplies',
    },
  ];

  {/*bg-[#f9f9f8]*/}

  const filteredGallery =
    activeTab === 'all'
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeTab);

  return (
    <div className="bg-teal-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-neutral-900/15 bg-teal-100">
        {/* Architectural Split / Full-Bleed Image Frame */}
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
          {/* Top Metadata Strip */}
          <div className="mb-8  flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[8px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Events</span>
            <span>Custom Kids Parties &bull; Event Equipments</span>
          </div>

          {/* Editorial Headline & Intro Grid */}
          <div className="grid grid-cols-1 items-end gap-10 pb-12 lg:grid-cols-[1.45fr_1fr]">
            <div>
              
              <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
                Bringing experiences, <br />
                <span className="text-neutral-500">to life.</span>
              </h1>
            </div>

            <div className="flex flex-col justify-between gap-8 lg:border-l lg:border-neutral-900/15 lg:pl-10">
              <p className="text-xs md:text-sm leading-relaxed text-neutral-600 md:text-lg">
                An integrated events and experiential production company combining audiovisual and technical production, event décor and styling, children's parties and event equipment/supplies.

              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="border border-neutral-900 bg-neutral-900 px-2 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-[10px] font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
                >
                  Check Date Availability
                </a>
                <a
                  href="/event-equipment-supplies"
                  onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                  className="border border-neutral-900/25 bg-transparent px-2 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-[10px] font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:border-neutral-900"
                >
                  Equipments &amp; Supplies Catalog
                </a>
              </div>
            </div>
          </div>

          {/* Full-Bleed Architectural Hero Photograph */}
          <div className="relative aspect-[16/9] max-h-[640px] w-full overflow-hidden bg-neutral-200">
            <img
              src={heroImg}
              alt="Outdoor children's birthday party setup with balloons and tables"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom Trust / Spec Bar */}
          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-neutral-900/15 pt-5 text-xs tracking-[0.06em] text-neutral-600 sm:grid-cols-3">
            <span>&bull; Sanitized, commercial-grade inflatables</span>
            <span className="sm:text-center">
              &bull; On-time morning setup &amp; evening pack-down
            </span>
            <span className="sm:text-right">&bull; Fully insured event crew</span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / EDITORIAL SECTION */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              How We Work
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              One team for decor, entertainment, and rentals.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:border-l lg:border-neutral-900/15 lg:pl-12">
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              Most parents end up juggling three different vendors just to pull
              off a birthday party: a baker, a balloon decorator, and an
              inflatable rental company. At Staxx Hyper Events, we handle the
              entire physical setup under one roof. You choose the theme and
              guest count, and our crew arrives early to build, anchor, style,
              and clean up after the last guest leaves.
            </p>

            {/* Architectural Metric Strip */}
            <div className="grid grid-cols-1 gap-8 border-t border-neutral-900/15 pt-8 sm:grid-cols-3">
              <div>
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  2 hrs
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Average full-backyard setup time prior to guest arrival
                </span>
              </div>
              <div className="sm:border-l sm:border-neutral-900/15 sm:pl-6">
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  100%
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Inflatables scrubbed and sanitized before every booking
                </span>
              </div>
              <div className="sm:border-l sm:border-neutral-900/15 sm:pl-6">
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  50+
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Custom backdrop themes and commercial rental units in stock
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE-STEP PROCESS */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 max-w-2xl">
            <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Booking Process
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              From blank yard to party-ready in three steps.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-neutral-900/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 md:pb-0">
              <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Step 01
              </span>
              <div>
                <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                  Pick a Package or Gear List
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Choose an all-inclusive birthday package or build an à la carte
                  rental order of bouncy castles, kid-sized seating, and
                  concession machines.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 md:border-l md:pb-0 md:pl-8">
              <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Step 02
              </span>
              <div>
                <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                  Lock In Your Date &amp; Space
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Share your venue dimensions and theme colors. We confirm power
                  access, surface type, and delivery windows ahead of party day.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 lg:border-l lg:pb-0 lg:pl-8">
              <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Step 03
              </span>
              <div>
                <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                  Host Without the Heavy Lifting
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Our crew installs and safety-checks everything before guests
                  arrive, runs the entertainment, and packs it all away when the
                  party wraps.
                </p>
              </div>
            </div>

            {/* Visual Quote Card */}
            <div className="flex flex-col justify-between gap-4 md:border-l md:border-neutral-900/15 md:pl-8">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <img
                  src={pastelImg}
                  alt="Completed outdoor birthday table and balloon display"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-neutral-600">
                  Planning a weekend date?
                </span>
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="border-b border-neutral-900 pb-0.5 text-xs font-medium tracking-[0.12em] text-neutral-900 uppercase no-underline transition-opacity hover:opacity-55"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PARTY PACKAGES */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Party Packages
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                All-Inclusive Birthday Setups
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Flat-rate packages include local delivery, installation, styling,
              and takedown with no hidden cleaning fees.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between border p-8 transition-colors duration-200 ${
                  pkg.featured
                    ? 'border-neutral-900 bg-teal-100'
                    : 'border-neutral-900/15 bg-teal-100'
                }`}
              >
                <div>
                  <div className="mb-6 border-b border-neutral-900/15 pb-6">
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="text-xl font-medium tracking-[-0.01em] text-neutral-900">
                        {pkg.name}
                      </h3>
                      {pkg.featured && (
                        <span className="border border-neutral-900 px-2.5 py-0.5 text-[10px] tracking-[0.14em] text-neutral-900 uppercase">
                          Most Booked
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-neutral-500">
                      {pkg.sub}
                    </p>
                  </div>

                  <div className="mb-8 flex items-baseline gap-2">
                    <span className="text-4xl font-normal tracking-[-0.03em] text-neutral-900">
                      {pkg.price}
                    </span>
                    <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                      / flat rate
                    </span>
                  </div>

                  <ul className="mb-10 flex flex-col gap-3.5 text-sm text-neutral-700">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-900" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className={`block w-full border py-3.5 text-center text-xs font-medium tracking-[0.14em] uppercase no-underline transition-colors duration-200 ${
                    pkg.featured
                      ? 'border-neutral-900 bg-neutral-900 text-[#f9f9f8] hover:bg-transparent hover:text-neutral-900'
                      : 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-[#f9f9f8]'
                  }`}
                >
                  Reserve This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EQUIPMENT & SUPPLIES CATALOG PREVIEW */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                À La Carte Rentals
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                Event Equipment &amp; Supplies
              </h2>
            </div>

            <a
              href="/event-equipment-supplies"
              onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
              className="self-start border-b border-neutral-900 pb-1 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-opacity hover:opacity-55 sm:self-auto"
            >
              View Full Rental Inventory →
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentCategories.map((cat) => (
              <a
                key={cat.title}
                href={cat.path}
                onClick={(e) => handleLinkClick(e, cat.path)}
                className="group flex flex-col text-inherit no-underline"
              >
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-1.5 text-base font-medium tracking-[-0.01em] text-neutral-900 transition-opacity group-hover:opacity-65">
                  {cat.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-500">
                  {cat.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISUAL PORTFOLIO & FILTERABLE GALLERY */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-8 border-b border-neutral-900/15 pb-8 lg:flex-row lg:items-end">
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Recent Setups
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                Past Parties &amp; Installations
              </h2>
            </div>

            {/* Minimal Editorial Filter Tabs */}
            <div className="flex flex-wrap gap-6">
              {[
                { id: 'all', label: 'All Setups' },
                { id: 'parties', label: 'Full Parties' },
                { id: 'equipment', label: 'Inflatables & Gear' },
                { id: 'supplies', label: 'Balloon Decor' },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={isSelected}
                    className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                      isSelected
                        ? 'border-neutral-900 font-medium text-neutral-900'
                        : 'border-transparent text-neutral-400 hover:text-neutral-900'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <div key={item.title} className="group">
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-neutral-900/15 pt-3">
                  <h3 className="text-base font-normal text-neutral-900">
                    {item.title}
                  </h3>
                  <span className="shrink-0 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-neutral-900/15 pt-8 text-right">
            <a
              href="/gallery"
              onClick={(e) => handleLinkClick(e, '/gallery')}
              className="inline-block border border-neutral-900 px-6 py-3 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-neutral-900 hover:text-[#f9f9f8]"
            >
              See More Event Photos →
            </a>
          </div>
        </div>
      </section>

      {/* 7. PARENT FEEDBACK */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14">
            <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-300 uppercase">
              Host Notes
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              What local parents say after party day
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 border-t border-neutral-900/15 pt-12 md:grid-cols-2">
            <blockquote className="flex flex-col justify-between gap-8">
              <p className="text-lg font-normal leading-relaxed text-neutral-800 md:text-xl">
                “They showed up at 8:30 AM, staked down the bouncy castle, built
                the balloon arch around our patio pergola, and were back at 4:00
                PM to pack every last piece away. I didn’t lift a finger.”
              </p>
              <footer className="text-xs tracking-[0.06em] text-neutral-500">
                <strong className="block font-medium text-neutral-900 uppercase tracking-[0.12em]">
                  Hannah &amp; David K.
                </strong>
                <span className="mt-1 block">
                  6th Birthday Party &bull; Deluxe Backyard Setup
                </span>
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between gap-8 border-t border-neutral-900/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
              <p className="text-lg font-normal leading-relaxed text-neutral-800 md:text-xl">
                “We rented two commercial inflatables and the popcorn cart for
                our neighborhood block party. Everything arrived spotless and the
                crew walked us through the blower safety checks in five minutes.”
              </p>
              <footer className="text-xs tracking-[0.06em] text-neutral-500">
                <strong className="block font-medium text-neutral-900 uppercase tracking-[0.12em]">
                  Oakridge PTA Committee
                </strong>
                <span className="mt-1 block">
                  Spring School Fair &bull; Equipment Rental
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Reserve Your Date
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Have a party date in mind?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Send us your event date, rough headcount, and backyard or venue
              details. We’ll reply with available themes and a clear quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-teal-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Book a Party Date
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}