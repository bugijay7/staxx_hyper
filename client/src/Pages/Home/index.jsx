import React, { useState } from 'react';
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
    <div className="min-h-screen bg-[#0F2A2A] pt-20 font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E] md:pt-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
        @keyframes marqueeLtr {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
          {/* Editorial Headline & Intro Grid */}
          <div className="grid grid-cols-1 items-end gap-10 pb-10 lg:grid-cols-[1.55fr_1fr]">
            <div>
              <h1 className="font-display-condensed pt-6 text-4xl font-normal leading-[0.94] text-white sm:text-6xl md:pt-1 lg:text-[5.25rem]">
                Event production <br />
                <span className="text-amber-700">
                  &amp; equipment hire in
                  <br /> Nairobi.
                </span>
              </h1>
            </div>

            <div className="flex flex-col justify-between gap-6   bg-transparentp-6 p-4 lg:p-7">
              <p className="text-xs leading-relaxed text-[#B5B0B8] md:text-sm">
                Staxx-HyperKids provides audiovisual production, event d&eacute;cor,
                children&rsquo;s parties, and equipment hire in Nairobi and across
                Kenya.
              </p>

              <div className="flex items-center gap-1">
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="group inline-flex items-center gap-3  bg-white py-1.5 pr-1.5 pl-4 text-[10px] font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] md:text-[11px]"
                >
                  <span>Get a Quote</span>
                  <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
                <a
                  href="/events"
                  onClick={(e) => handleLinkClick(e, '/events')}
                  className="group inline-flex items-center gap-3  border border-white/25 bg-transparent py-1.5 pr-1.5 pl-4 text-[10px] font-semibold tracking-[0.14em] text-white uppercase no-underline transition-colors duration-200 hover:border-white hover:bg-white/10 md:text-[11px]"
                >
                  <span>event Supplies</span>
                  <span className="flex h-6 w-6 items-center justify-center  bg-white/15 text-xs text-white">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Featured event image carousel */}
          <div
            className="group relative aspect-[16/9] max-h-[280px] w-full overflow-hidden  border border-white/10 bg-[#18141A] md:max-h-[380px]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Staxx-HyperKids event services"
          >
            <img
              key={heroSlides[activeHeroSlide].image}
              src={heroSlides[activeHeroSlide].image}
              alt={heroSlides[activeHeroSlide].alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0A0E]/90 via-[#0D0A0E]/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8 md:p-10">
              <div aria-live="polite" aria-atomic="true">
                <span className="mb-2 inline-flex items-center gap-2  bg-black/50 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-[#F5D033] uppercase backdrop-blur-sm">
                  {String(activeHeroSlide + 1).padStart(2, '0')} /{' '}
                  {String(heroSlides.length).padStart(2, '0')}
                </span>
                <h2 className="font-display-condensed text-2xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl">
                  {heroSlides[activeHeroSlide].title}
                </h2>
                <p className="mt-1 text-xs text-white/80 sm:text-sm">
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
                    className={`h-2.5  transition-all ${
                      activeHeroSlide === index
                        ? 'w-7 bg-[#F5D033]'
                        : 'w-2.5 bg-white/45 hover:bg-white'
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
                  className="ml-2 flex h-10 w-10 items-center justify-center  border border-white/30 bg-black/40 text-base text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0D0A0E]"
                >
                  &larr;
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveHeroSlide((activeHeroSlide + 1) % heroSlides.length)
                  }
                  aria-label="Show next image"
                  className="flex h-10 w-10 items-center justify-center  border border-white/30 bg-black/40 text-base text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0D0A0E]"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Trust / Spec Bar */}
          <div className="mt-8 overflow-hidden border-y border-white/15 bg-[#141016] py-3.5 text-xs font-bold tracking-[0.14em] text-white uppercase">
            <div className="flex w-max animate-[marqueeLtr_25s_linear_infinite] hover:[animation-play-state:paused]">
              {/* First Copy */}
              <div className="flex shrink-0 items-center gap-12 pr-12">
                <span className="inline-flex items-center gap-3">
                  <span className="text-[#F5D033]">&#10022;</span> Sound, LED screens &amp; stage production
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="text-[#F5D033]">&#10022;</span> Serving Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="text-[#F5D033]">&#10022;</span> AV, styling &amp; equipment from one team
                </span>
              </div>

              {/* Duplicate Copy for Seamless Loop */}
              <div className="flex shrink-0 items-center gap-12 pr-12" aria-hidden="true">
                <span className="inline-flex items-center gap-3">
                  <span className="text-[#F5D033]">&#10022;</span> Sound, LED screens &amp; stage production
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="text-[#F5D033]">&#10022;</span> Serving Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                </span>
                <span className="inline-flex items-center gap-3">
                  <span className="text-[#F5D033]">&#10022;</span> AV, styling &amp; equipment from one team
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / EDITORIAL SECTION */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              Event production, styling &amp; equipment hire—one team.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:border-l lg:border-white/10 lg:pl-12">
            <p className="text-sm leading-relaxed text-[#C7C3C9] md:text-base">
              Founded by Bryan Karanja and Dan Njuguna, Staxx-HyperKids provides
              audiovisual production, event styling, and equipment hire for
              corporate events, product launches, weddings, and festivals. Our
              Nairobi-based team handles planning, setup, and event-day production.
            </p>

            {/* Architectural Metric Strip */}
            <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
              <div>
                <span className="font-display-condensed block text-4xl font-normal text-white md:text-5xl">
                  6 Counties
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-[#9E9A9F]">
                  Event services across six Kenyan counties
                </span>
              </div>
              <div className="sm:border-l sm:border-white/15 sm:pl-6">
                <span className="font-display-condensed block text-4xl font-normal text-white md:text-5xl">
                  Unified
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-[#9E9A9F]">
                  AV production and event d&eacute;cor managed by one team
                </span>
              </div>
              <div className="sm:border-l sm:border-white/15 sm:pl-6">
                <span className="font-display-condensed block text-4xl font-normal text-white md:text-5xl">
                  Full Stock
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-[#9E9A9F]">
                  Sound, lighting, marquees, and event furniture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE-STEP PROCESS */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 max-w-2xl">
            <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
              Production Workflow
            </span>
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              From event plan to live production. <span className="text-[#F5D033]">&#10022;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
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
              <div
                key={s.step}
                className={`flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:border-b-0 md:pb-0 ${
                  idx > 0 ? 'md:border-l md:border-white/10 md:pl-8' : ''
                }`}
              >
                <span className="inline-block w-fit  border border-white/15 bg-[#161218] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#F5D033] uppercase">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display-condensed mb-3 text-2xl font-normal tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#B5B0B8]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Visual Quote Card */}
            <div className="flex flex-col justify-between gap-4  border border-white/10 bg-transparentp-4 md:ml-4">
              <div className="aspect-[4/3] w-full overflow-hidden  bg-neutral-900">
                <img
                  src={pastelImg}
                  alt="Staxx Events technical production and stage setup in Nairobi"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-2 pt-1">
                <span className="text-xs text-[#C7C3C9]">
                  Planning an upcoming event?
                </span>
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="inline-flex shrink-0 items-center gap-2  bg-white py-1 pr-1 pl-3 text-[10px] font-semibold tracking-[0.12em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-105"
                >
                  <span>Request a Quote</span>
                  <span className="flex h-5 w-5 items-center justify-center  bg-[#0F2A2A] text-[10px] text-white">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & PRODUCTION TIERS */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Production Tiers
              </span>
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Structured Event Packages
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#B5B0B8]">
              Event production packages for corporate functions, weddings,
              institutional events, and festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between  border p-8 transition-colors duration-200 ${
                  pkg.featured
                    ? 'border-[#F5D033]/70 bg-[#17131A]'
                    : 'border-white/15 bg-[#120E14]'
                }`}
              >
                <div>
                  <div className="mb-6 border-b border-white/10 pb-6">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h3 className="font-display-condensed text-2xl font-normal tracking-wide text-white">
                        {pkg.name}
                      </h3>
                      {pkg.featured && (
                        <span className="shrink-0  bg-[#F5D033] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#0D0A0E] uppercase">
                          Most Booked
                        </span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed text-[#9E9A9F]">
                      {pkg.sub}
                    </p>
                  </div>

                  <div className="mb-8 flex items-baseline gap-2">
                    <span className="font-display-condensed text-4xl font-normal text-white md:text-5xl">
                      {pkg.price}
                    </span>
                    <span className="text-[11px] tracking-[0.14em] text-[#9E9A9F] uppercase">
                      / estimate
                    </span>
                  </div>

                  <ul className="mb-10 flex flex-col gap-3.5 text-sm text-[#D1CDD3]">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0  bg-[#F5D033]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className={`group flex w-full items-center justify-between  py-2 pr-2 pl-6 text-xs font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-200 ${
                    pkg.featured
                      ? 'bg-white text-[#0D0A0E] hover:bg-[#F5D033]'
                      : 'border border-white/25 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#0D0A0E]'
                  }`}
                >
                  <span>Enquire About Package</span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center  text-xs transition-transform duration-200 group-hover:translate-x-0.5 ${
                      pkg.featured
                        ? 'bg-[#0F2A2A] text-white'
                        : 'bg-white text-[#0D0A0E]'
                    }`}
                  >
                    &rarr;
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EQUIPMENT & SUPPLIES CATALOG PREVIEW */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:flex-row sm:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Rental Catalog
              </span>
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Event Equipment &amp; Supplies
              </h2>
            </div>

            <a
              href="/event-equipment-supplies"
              onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
              className="group inline-flex items-center gap-3 self-start  bg-white py-1.5 pr-1.5 pl-4 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-[1.02] sm:self-auto"
            >
              <span>View Equipment Catalog →</span>
              <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                &rarr;
              </span>
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
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden  border border-white/10 bg-[#1A161C]">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display-condensed mb-1.5 text-2xl font-normal tracking-wide text-white transition-colors group-hover:text-[#F5D033]">
                  {cat.title}
                </h3>
                <p className="text-xs leading-relaxed text-[#9E9A9F]">
                  {cat.detail}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. VISUAL PORTFOLIO & FILTERABLE GALLERY */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-12 flex flex-col justify-between gap-8 border-b border-white/15 pb-8 lg:flex-row lg:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Portfolio &amp; Productions
              </span>
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Recent Projects &amp; Installations
              </h2>
            </div>

            {/* Minimal Editorial Filter Tabs */}
            <div className="flex flex-wrap gap-3">
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
                    className={`cursor-pointer  px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-200 ${
                      isSelected
                        ? 'bg-white text-[#0D0A0E]'
                        : 'border border-white/15 bg-transparent text-[#9E9A9F] hover:border-white/40 hover:text-white'
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
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden  border border-white/10 bg-[#1A161C]">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4 border-t border-white/15 pt-3">
                  <h3 className="text-base font-medium text-white">
                    {item.title}
                  </h3>
                  <span className="shrink-0  bg-white/10 px-2.5 py-0.5 text-[10px] tracking-[0.14em] text-[#F5D033] uppercase">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-white/15 pt-8 text-right">
            <a
              href="/gallery"
              onClick={(e) => handleLinkClick(e, '/gallery')}
              className="group inline-flex items-center gap-3  bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Explore Full Gallery →</span>
              <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14">
            <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
              Client Feedback
            </span>
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              What corporate clients &amp; event planners say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <blockquote className="flex flex-col justify-between gap-8  border border-white/15 bg-[#141016] p-8 md:p-10">
              <p className="text-base font-normal leading-relaxed text-white/90 md:text-lg">
                “Staxx-HyperKids managed our corporate annual gala at Serena
                Hotel. Their sound engineering, LED screens, and stage lighting
                were world-class. Having AV and d&eacute;cor handled by one
                coordinated team eliminated all vendor stress.”
              </p>
              <footer className="border-t border-white/10 pt-5 text-xs tracking-[0.06em] text-[#9E9A9F]">
                <strong className="block font-semibold tracking-[0.14em] text-white uppercase">
                  Brenda Akinyi
                </strong>
                <span className="mt-1 block">
                  Corporate Events Manager &bull; Nairobi Business Awards
                </span>
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between gap-8  border border-white/15 bg-[#141016] p-8 md:p-10">
              <p className="text-base font-normal leading-relaxed text-white/90 md:text-lg">
                “We hired clear-span marquees, flooring, and audiovisual gear for
                our institution&rsquo;s graduation ceremony. Their technical crew
                arrived on schedule, tested all power lines, and maintained
                immaculate professional standards throughout the day.”
              </p>
              <footer className="border-t border-white/10 pt-5 text-xs tracking-[0.06em] text-[#9E9A9F]">
                <strong className="block font-semibold tracking-[0.14em] text-white uppercase">
                  Dr. James Kiprop
                </strong>
                <span className="mt-1 block">
                  Institutional Registrar &bull; Nakuru County
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Start Planning <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Ready to plan your next event?
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Contact our Nairobi team for availability and a quote for AV,
              event d&eacute;cor, children&rsquo;s parties, or equipment hire in Kenya.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request an Event Quote</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="group inline-flex items-center gap-3  border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Contact Our Team</span>
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
