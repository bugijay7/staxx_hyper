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
    <div className="bg-amber-200 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-neutral-900/15 bg-amber-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
          {/* Top Metadata Strip */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[8px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Events &amp; Production &bull; Commerce House, Nairobi</span>
            <span>AV Production &bull; Décor Styling &bull; Equipment Hire</span>
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
                An integrated events and experiential production company combining
                audiovisual and technical production, event d&eacute;cor and styling,
                children&rsquo;s parties, and commercial event equipment supplies
                across Kenya.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="border border-neutral-900 bg-neutral-900 px-2 md:px-3 py-0.5 md:py-1.5 text-[8px] md:text-[10px] font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
                >
                  Request a Quote
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
              alt="Staxx Events professional staging, audiovisual production and experiential setup in Nairobi"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Bottom Trust / Spec Bar */}
          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-neutral-900/15 pt-5 text-xs tracking-[0.06em] text-neutral-600 sm:grid-cols-3">
            <span>&bull; Commercial sound, LED screens &amp; stage rigging</span>
            <span className="sm:text-center">
              &bull; Serving Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
            </span>
            <span className="sm:text-right">&bull; Founder-led technical &amp; d&eacute;cor oversight</span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT / EDITORIAL SECTION */}
      <section className="border-b border-neutral-900/15 bg-amber-200">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Integrated Capabilities
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              One accountable partner for AV, styling, and equipment hire.
            </h2>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:border-l lg:border-neutral-900/15 lg:pl-12">
            <p className="text-base leading-relaxed text-neutral-600 md:text-lg">
              Organisers and brands often waste valuable time juggling separate
              suppliers for sound engineering, marquee tents, d&eacute;cor, and
              stage lighting. Founded by Bryan Karanja and Dan Njuguna,
              Staxx-HyperKids combines technical audiovisual production with
              bespoke spatial styling under one roof. Whether you are hosting an
              executive corporate gala, a product launch, a wedding, or a large
              festival, our in-house inventory and dedicated crews ensure
              flawless execution from load-in to strike.
            </p>

            {/* Architectural Metric Strip */}
            <div className="grid grid-cols-1 gap-8 border-t border-neutral-900/15 pt-8 sm:grid-cols-3">
              <div>
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  6 Counties
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Active deployment across Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                </span>
              </div>
              <div className="sm:border-l sm:border-neutral-900/15 sm:pl-6">
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  Unified
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  Technical AV production and spatial d&eacute;cor managed synchronously
                </span>
              </div>
              <div className="sm:border-l sm:border-neutral-900/15 sm:pl-6">
                <span className="block text-3xl font-normal tracking-[-0.03em] text-neutral-900 md:text-4xl">
                  Full Stock
                </span>
                <span className="mt-2 block text-xs leading-relaxed text-neutral-500">
                  In-house inventory of sound, lighting, marquees, and event furniture
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THREE-STEP PROCESS */}
      <section className="border-b border-neutral-900/15 bg-amber-200">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 max-w-2xl">
            <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
              Production Workflow
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              From concept brief to flawless live execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-neutral-900/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 md:pb-0">
              <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Step 01
              </span>
              <div>
                <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                  Consultation &amp; Brief
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Share your venue specifications, audience size, and technical
                  rider. We design a tailored production plan covering AV,
                  d&eacute;cor, and equipment hire.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 md:border-l md:pb-0 md:pl-8">
              <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Step 02
              </span>
              <div>
                <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                  Transparent Proposal
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Review itemized KES quotations with clear breakdowns for
                  labor, transport, equipment rental, and technical setup across
                  all counties served.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:border-b-0 lg:border-l lg:pb-0 lg:pl-8">
              <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Step 03
              </span>
              <div>
                <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-neutral-900">
                  Site Logistics &amp; Rigging
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Our professional logistics crew and sound engineers handle
                  rigging, power testing, spatial styling, and rehearsal checks
                  ahead of guest arrival.
                </p>
              </div>
            </div>

            {/* Visual Quote Card */}
            <div className="flex flex-col justify-between gap-4 md:border-l md:border-neutral-900/15 md:pl-8">
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
            </div>
          </div>
        </div>
      </section>

      {/* 4. PACKAGES & PRODUCTION TIERS */}
      <section className="border-b border-neutral-900/15 bg-amber-200">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Production Tiers
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                Structured Event Packages
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Professional packages tailored for corporate functions, weddings,
              institutional events, and large-scale experiential gatherings.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between border p-8 transition-colors duration-200 ${
                  pkg.featured
                    ? 'border-neutral-900 bg-amber-200'
                    : 'border-neutral-900/15 bg-amber-200'
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

                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className={`block w-full border py-3.5 text-center text-xs font-medium tracking-[0.14em] uppercase no-underline transition-colors duration-200 ${
                    pkg.featured
                      ? 'border-neutral-900 bg-neutral-900 text-[#f9f9f8] hover:bg-transparent hover:text-neutral-900'
                      : 'border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-[#f9f9f8]'
                  }`}
                >
                  Enquire About Package
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
              Explore Full Gallery →
            </a>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIALS */}
      <section className="border-b border-neutral-900/15">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14">
            <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-300 uppercase">
              Client Feedback
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              What corporate clients &amp; event planners say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 border-t border-neutral-900/15 pt-12 md:grid-cols-2">
            <blockquote className="flex flex-col justify-between gap-8">
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
            </blockquote>

            <blockquote className="flex flex-col justify-between gap-8 border-t border-neutral-900/15 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-12">
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
            </blockquote>
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
              Reach out to our team at Commerce House, Nairobi to check date
              availability and request an itemized quotation for AV, d&eacute;cor,
              kiddie celebrations, or equipment hire across Kenya.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-amber-200 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Request an Event Quote
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}