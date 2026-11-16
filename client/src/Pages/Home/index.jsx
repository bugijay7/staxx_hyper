import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/hero.jpg';
import pastelImg from '../../assets/pastel.jpg';
import confettiImg from '../../assets/confetti.jpg';
import castlesImg from '../../assets/castles.jpg';
import cakeTableImg from '../../assets/caketable.jpg';
import ballonGarlandImg from '../../assets/ballongarland.jpg';
import concessionsImg from '../../assets/concessions.jpg';
import inflatableImg from '../../assets/inflatable.jpg';
import backdropsImg from '../../assets/backdrops.jpg';
import canopiesImg from '../../assets/canopies.jpeg';
import avImg from '../../assets/audiovisual.jpeg';

export default function Home({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

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
      title: 'Corporate Gala & Stage Production',
      category: 'corporate',
      tag: 'AV & Lighting',
    },
    {
      url: confettiImg,
      title: 'Brand Activation & Product Launch',
      category: 'corporate',
      tag: 'Experiential',
    },
    {
      url: castlesImg,
      title: 'Commercial Tents & Clear-Span Marquees',
      category: 'equipment',
      tag: 'Equipment Rental',
    },
    {
      url: cakeTableImg,
      title: 'Weddings & Private Celebrations',
      category: 'celebrations',
      tag: 'Styling & Decor',
    },
    {
      url: ballonGarlandImg,
      title: 'Bespoke Floral & Balloon Installations',
      category: 'celebrations',
      tag: 'Spatial Decor',
    },
    {
      url: concessionsImg,
      title: 'Concerts & Live Entertainment Rigging',
      category: 'equipment',
      tag: 'Sound & Staging',
    },
  ];

  const heroSlides = [
    {
      image: heroImg,
      alt: 'Event staging and audiovisual production in Nairobi',
      title: 'Event Production',
      detail: 'Sound, lighting, LED screens, and staging',
    },
    {
      image: inflatableImg,
      alt: 'Inflatable bouncy castle for a children’s party',
      title: 'Children’s Parties',
      detail: 'Inflatables, party equipment, and activities',
    },
    {
      image: cakeTableImg,
      alt: 'Styled table setup for a wedding or private celebration',
      title: 'Weddings & Celebrations',
      detail: 'Event décor, styling, and custom details',
    },
    {
      image: canopiesImg,
      alt: 'Marquee tent and canopy setup for an event',
      title: 'Event Equipment Hire',
      detail: 'Marquees, tents, furniture, and supplies',
    },
  ];

  const packages = [
    {
      name: 'Essential Corporate / Event Package',
      price: 'KES 65,000',
      sub: 'Ideal for board meetings, seminars, and intimate gatherings up to 50 guests',
      featured: false,
      features: [
        'Professional PA sound system & wireless mics',
        'Basic stage wash & architectural lighting',
        'Standard event coordination & on-site technician',
        'Morning delivery, professional setup, and takedown',
        'Custom layout planning & venue walkthrough',
      ],
    },
    {
      name: 'Hyper Deluxe Production',
      price: 'KES 145,000',
      sub: 'Full-service audiovisual staging and d&eacute;cor for up to 150 attendees',
      featured: true,
      features: [
        'Advanced line-array sound & digital mixing console',
        'LED screen display or high-impact backdrop styling',
        'Immersive lighting rig and atmospheric effects',
        'Dedicated event producer & technical crew on standby',
        'Comprehensive generator backup coordination',
        'Full delivery, structural anchoring, and strike',
      ],
    },
    {
      name: 'Grand Carnival & Festival Suite',
      price: 'KES 280,000+',
      sub: 'Large-scale multi-zone production for concerts, church conventions & festivals',
      featured: false,
      features: [
        'Heavy-duty stage platform, trussing, & professional lighting',
        'Concert-grade line-array sound system and monitoring',
        'Clear-span marquee tents, flooring, and climate control',
        'Crowd control barriers, VIP seating, and lounge setups',
        'Complete technical crew, sound engineers, and stage managers',
        'End-to-end experiential production management across 6 counties',
      ],
    },
  ];

  const equipmentCategories = [
    {
      title: 'Audiovisual & Staging',
      detail: 'Line-array sound, LED screens, lighting rigs & stages',
      img: avImg,
      path: '/event-equipment-supplies',
    },
    {
      title: 'Décor, Backdrops & Styling',
      detail: 'Custom structural builds, themes, plinths & floral styling',
      img: backdropsImg,
      path: '/event-equipment-supplies',
    },
    {
      title: 'Marquees, Tents & Canopies',
      detail: 'Clear-span structures, luxury pagodas & flooring',
      img: canopiesImg,
      path: '/event-equipment-supplies',
    },
    {
      title: 'Event Supplies & Carts',
      detail: 'Seating, tables, generators, and concession equipment',
      img: concessionsImg,
      path: '/event-equipment-supplies',
    },
  ];

  const filteredGallery =
    activeTab === 'all'
      ? galleryImages
      : galleryImages.filter((item) => item.category === activeTab);

  return (
    <div className="bg-amber-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
          {/* Top Metadata Strip */}
          
          {/* Editorial Headline & Intro Grid */}
          <div className="grid grid-cols-1 items-end gap-10 pb-12 lg:grid-cols-[1.45fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
                Event production <br />
                <span className="text-neutral-500">&amp; equipment hire in Nairobi.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-between gap-8 lg:border-l lg:border-neutral-900/15 lg:pl-10"
            >
              <p className="text-xs md:text-sm leading-relaxed text-neutral-600 md:text-lg">
                Staxx-HyperKids provides audiovisual production, event d&eacute;cor,
                children&rsquo;s parties, and equipment hire in Nairobi and across
                Kenya.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="border border-neutral-900 bg-neutral-900 px-2 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-[10px] font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
                >
                  Request a Quote
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/event-equipment-supplies"
                  onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                  className="border border-neutral-900/25 bg-transparent px-2 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-[10px] font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:border-neutral-900"
                >
                  Equipments &amp; Supplies Catalog
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Featured event image carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="group relative aspect-[16/9] max-h-[640px] w-full overflow-hidden bg-neutral-200"
            role="region"
            aria-roledescription="carousel"
            aria-label="Staxx-HyperKids event services"
          >
            <motion.img
              key={heroSlides[activeHeroSlide].image}
              src={heroSlides[activeHeroSlide].image}
              alt={heroSlides[activeHeroSlide].alt}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 text-[#f9f9f8] sm:flex-row sm:items-end sm:justify-between sm:p-8 md:p-10">
              <div aria-live="polite" aria-atomic="true">
                <span className="mb-2 block text-[10px] tracking-[0.18em] text-[#f9f9f8]/75 uppercase">
                  {String(activeHeroSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                </span>
                <h2 className="text-2xl font-normal tracking-[-0.02em] sm:text-3xl md:text-4xl">
                  {heroSlides[activeHeroSlide].title}
                </h2>
                <p className="mt-1 text-xs text-[#f9f9f8]/80 sm:text-sm">
                  {heroSlides[activeHeroSlide].detail}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setActiveHeroSlide(index)}
                    aria-label={`Show slide ${index + 1}: ${slide.title}`}
                    aria-current={activeHeroSlide === index ? 'true' : undefined}
                    className={`h-2.5 rounded-full transition-all ${
                      activeHeroSlide === index
                        ? 'w-7 bg-[#f9f9f8]'
                        : 'w-2.5 bg-[#f9f9f8]/55 hover:bg-[#f9f9f8]'
                    }`}
                  />
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setActiveHeroSlide(
                      (activeHeroSlide - 1 + heroSlides.length) % heroSlides.length,
                    )
                  }
                  aria-label="Show previous image"
                  className="ml-2 flex h-10 w-10 items-center justify-center border border-[#f9f9f8]/60 text-lg transition-colors hover:bg-[#f9f9f8] hover:text-neutral-900"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveHeroSlide((activeHeroSlide + 1) % heroSlides.length)
                  }
                  aria-label="Show next image"
                  className="flex h-10 w-10 items-center justify-center border border-[#f9f9f8]/60 text-lg transition-colors hover:bg-[#f9f9f8] hover:text-neutral-900"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Trust / Spec Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 grid grid-cols-1 gap-3 border-t border-neutral-900/15 pt-5 text-xs tracking-[0.06em] text-neutral-600 sm:grid-cols-3"
          >
            <span>&bull; Sound, LED screens &amp; stage production</span>
            <span className="sm:text-center">
              &bull; Serving Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
            </span>
            <span className="sm:text-right">&bull; AV, styling &amp; equipment from one team</span>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT / EDITORIAL SECTION */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Integrated Capabilities
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              Event production, styling &amp; equipment hire—one team.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between gap-12 lg:border-l lg:border-neutral-900/15 lg:pl-12"
          >
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              Founded by Bryan Karanja and Dan Njuguna, Staxx-HyperKids provides
              audiovisual production, event styling, and equipment hire for
              corporate events, product launches, weddings, and festivals. Our
              Nairobi-based team handles planning, setup, and event-day production.
            </p>

            {/* Architectural Metric Strip */}
            <div className="grid grid-cols-1 gap-8 border-t border-neutral-900/15 pt-8 sm:grid-cols-3">
              <div>
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  6 Counties
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Event services across six Kenyan counties
                </span>
              </div>
              <div className="sm:border-l sm:border-neutral-900/15 sm:pl-6">
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  Unified
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  AV production and event d&eacute;cor managed by one team
                </span>
              </div>
              <div className="sm:border-l sm:border-neutral-900/15 sm:pl-6">
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  Full Stock
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Sound, lighting, marquees, and event furniture
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THREE-STEP PROCESS */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
            <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Production Workflow
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              From event plan to live production.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 border-t border-neutral-900/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 'Step 01',
                title: 'Consultation & Brief',
                desc: 'Share your venue, guest count, and event needs. We plan AV, d&eacute;cor, and equipment hire.',
              },
              {
                step: 'Step 02',
                title: 'Transparent Proposal',
                desc: 'Get an itemized KES quote for equipment, labor, delivery, and setup.',
              },
              {
                step: 'Step 03',
                title: 'Site Logistics & Rigging',
                desc: 'Our crew handles delivery, installation, power tests, and styling before guests arrive.',
              },
            ].map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 md:pb-0 ${
                  idx > 0 ? 'md:border-l md:border-neutral-900/15 md:pl-8' : ''
                }`}
              >
                <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                  {s.step}
                </span>
                <div>
                  <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-neutral-600">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Visual Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col justify-between gap-4 md:border-l md:border-neutral-900/15 md:pl-8"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-200">
                <img
                  src={pastelImg}
                  alt="Staxx Events technical production and stage setup in Nairobi"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-neutral-600">
                  Planning an upcoming event?
                </span>
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="border-b border-neutral-900 pb-0.5 text-xs font-medium tracking-[0.12em] text-neutral-900 uppercase no-underline transition-opacity hover:opacity-55"
                >
                  Request a Quote
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & PRODUCTION TIERS */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:flex-row md:items-end"
          >
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Production Tiers
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                Structured Event Packages
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Event production packages for corporate functions, weddings,
              institutional events, and festivals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`flex flex-col justify-between border p-8 transition-colors duration-200 ${
                  pkg.featured
                    ? 'border-neutral-900 bg-amber-100'
                    : 'border-neutral-900/15 bg-amber-100'
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
                    <span className="text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                      {pkg.price}
                    </span>
                    <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                      / estimate
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

                <motion.a
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className={`block w-full border py-3.5 text-center text-xs font-medium tracking-[0.14em] uppercase no-underline transition-colors duration-200 ${
                    pkg.featured
                      ? 'border-neutral-900 bg-neutral-900 text-[#f9f9f8] hover:bg-transparent hover:text-neutral-900'
                      : 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-[#f9f9f8]'
                  }`}
                >
                  Enquire About Package
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EQUIPMENT & SUPPLIES CATALOG PREVIEW */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 sm:flex-row sm:items-end"
          >
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Rental Catalog
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
              View Equipment Catalog →
            </a>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentCategories.map((cat, idx) => (
              <motion.a
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
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
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISUAL PORTFOLIO & FILTERABLE GALLERY */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col justify-between gap-8 border-b border-neutral-900/15 pb-8 lg:flex-row lg:items-end"
          >
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Portfolio &amp; Productions
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                Recent Projects &amp; Installations
              </h2>
            </div>

            {/* Minimal Editorial Filter Tabs */}
            <div className="flex flex-wrap gap-6">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'corporate', label: 'Corporate & AV' },
                { id: 'celebrations', label: 'Weddings & Styling' },
                { id: 'equipment', label: 'Equipment & Tents' },
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
          </motion.div>

          <motion.div
            layout
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                key={item.title}
                className="group"
              >
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
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 border-t border-neutral-900/15 pt-8 text-right">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/gallery"
              onClick={(e) => handleLinkClick(e, '/gallery')}
              className="inline-block border border-neutral-900 px-6 py-3 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-neutral-900 hover:text-[#f9f9f8]"
            >
              Explore Full Gallery →
            </motion.a>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-300 uppercase">
              Client Feedback
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              What corporate clients &amp; event planners say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-12 border-t border-neutral-900/15 pt-12 md:grid-cols-2">
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between gap-8"
            >
              <p className="text-lg font-normal leading-relaxed text-neutral-800 md:text-xl">
                “Staxx-HyperKids managed our corporate annual gala at Serena
                Hotel. Their sound engineering, LED screens, and stage lighting
                were world-class. Having AV and d&eacute;cor handled by one
                coordinated team eliminated all vendor stress.”
              </p>
              <footer className="text-xs tracking-[0.06em] text-neutral-500">
                <strong className="block font-medium text-neutral-900 uppercase tracking-[0.12em]">
                  Brenda Akinyi
                </strong>
                <span className="mt-1 block">
                  Corporate Events Manager &bull; Nairobi Business Awards
                </span>
              </footer>
            </motion.blockquote>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-between gap-8 border-t border-neutral-900/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12"
            >
              <p className="text-lg font-normal leading-relaxed text-neutral-800 md:text-xl">
                “We hired clear-span marquees, flooring, and audiovisual gear for
                our institution&rsquo;s graduation ceremony. Their technical crew
                arrived on schedule, tested all power lines, and maintained
                immaculate professional standards throughout the day.”
              </p>
              <footer className="text-xs tracking-[0.06em] text-neutral-500">
                <strong className="block font-medium text-neutral-900 uppercase tracking-[0.12em]">
                  Dr. James Kiprop
                </strong>
                <span className="mt-1 block">
                  Institutional Registrar &bull; Nakuru County
                </span>
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Start Planning
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Ready to plan your next event?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Contact our Nairobi team for availability and a quote for AV,
              event d&eacute;cor, children&rsquo;s parties, or equipment hire in Kenya.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-amber-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Request an Event Quote
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Contact Our Team
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}