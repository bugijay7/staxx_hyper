import { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    if (!heroSlides.length) return;

    const interval = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const [activeCardIndex, setActiveCardIndex] = useState(0);
const [dragOffset, setDragOffset] = useState(0);
const [isDragging, setIsDragging] = useState(false);
const touchStartX = useRef(0);

const handleTouchStart = (e) => {
  touchStartX.current = e.touches[0].clientX;
  setIsDragging(true);
};

const handleTouchMove = (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  setDragOffset(currentX - touchStartX.current);
};

const handleTouchEnd = () => {
  setIsDragging(false);
  const swipeThreshold = 60;

  if (dragOffset < -swipeThreshold) {
    // Swiped Left -> Next Card (loops back to 0 at the end)
    setActiveCardIndex((prev) => (prev + 1) % equipmentCategories.length);
  } else if (dragOffset > swipeThreshold) {
    // Swiped Right -> Previous Card
    setActiveCardIndex((prev) =>
      prev === 0 ? equipmentCategories.length - 1 : prev - 1
    );
  }

  setDragOffset(0);
};

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

  const safeSlideIndex = heroSlides.length ? activeHeroSlide % heroSlides.length : 0;
  const currentSlide = heroSlides[safeSlideIndex];

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

        @keyframes staxxReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .staxx-carousel-image,
          .staxx-carousel-progress {
            transition-duration: 0.01ms !important;
          }

          .staxx-carousel-text {
            animation: none !important;
          }
        }
      `}</style>

      {/* 1. HERO SECTION */}
      <section className="relative border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
          {/* Editorial Headline & Intro Grid */}
          <div className="grid grid-cols-1 items-end gap-10 pb-5 lg:grid-cols-[1.55fr_1fr]">
            <div>
              <h1 className="font-display-condensed pt-2 text-4xl font-normal leading-[0.94] text-white sm:text-6xl md:pt-1 lg:text-[5.25rem]">
                Event production <br />
                <span className="text-amber-700">
                  &amp; equipment hire in
                  <br /> Nairobi.
                </span>
              </h1>
            </div>

            <div className="flex flex-col justify-between gap-2 bg-transparent p-4 lg:p-7">
              <p className="text-xs leading-relaxed text-[#B5B0B8] md:text-sm">
                Staxx-HyperKids provides audiovisual production, event d&eacute;cor,
                children&rsquo;s parties, and equipment hire in Nairobi and across
                Kenya.
              </p>

              <div className="flex items-center gap-1">
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="group inline-flex items-center gap-3 bg-white py-1.5 pr-1.5 pl-4 text-[10px] font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] md:text-[11px]"
                >
                  <span>Get a free Quote</span>
                  <span className="flex h-6 w-6 items-center justify-center bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>

                <a
                  href="/event-equipment-supplies"
                  onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                  className="group inline-flex items-center gap-3 border border-white/25 bg-transparent py-1.5 pr-1.5 pl-4 text-[10px] font-semibold tracking-[0.14em] text-white uppercase no-underline transition-colors duration-200 hover:border-white hover:bg-white/10 md:text-[11px]"
                >
                  <span>event Supplies</span>
                  <span className="flex h-6 w-6 items-center justify-center bg-white/15 text-xs text-white">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Featured event image carousel */}
          <div
            className="group relative aspect-[16/9] max-h-[280px] w-full overflow-hidden border border-white/10 bg-[#18141A] md:max-h-[380px]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Staxx-HyperKids event services"
          >
            {currentSlide && (
              <>
                {heroSlides.map((slide, index) => {
                  const isActive = safeSlideIndex === index;

                  return (
                    <img
                      key={`${slide.title}-${index}`}
                      src={slide.image}
                      alt={slide.alt}
                      className={`staxx-carousel-image absolute inset-0 h-full w-full object-cover transition-[opacity,transform,filter] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity,transform,filter] ${
                        isActive
                          ? 'translate-x-0 scale-100 opacity-100 blur-0'
                          : 'pointer-events-none translate-x-3 scale-[1.08] opacity-0 blur-[2px]'
                      }`}
                    />
                  );
                })}

                {/* Editorial vignette */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0A0E]/95 via-[#0D0A0E]/30 to-transparent" />

                {/* Subtle frame */}
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

                {/* Slide content */}
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8 md:p-10">
                  <div>
                    {/* Slide counter */}
                    <span className="mb-2 inline-flex items-center gap-2 border border-[#F5D033]/30 bg-black/60 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-[#F5D033] uppercase backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 bg-[#F5D033]" />
                      
                    </span>

                    {/* Animated heading */}
                    <h2
                      key={`heading-${safeSlideIndex}`}
                      className="staxx-carousel-text font-display-condensed text-2xl font-normal tracking-wide text-white sm:text-4xl md:text-5xl"
                      style={{
                        animation:
                          'staxxReveal 2000ms cubic-bezier(0.22,1,0.36,1) both',
                      }}
                    >
                      {currentSlide.title}
                    </h2>

                    {/* Animated description */}
                    <p
                      key={`detail-${safeSlideIndex}`}
                      className="staxx-carousel-text mt-1 text-xs text-white/80 sm:text-sm"
                      style={{
                        animation:
                          'staxxReveal 1000ms cubic-bezier(0.22,1,0.36,1) 120ms both',
                      }}
                    >
                      {currentSlide.detail}
                    </p>
                  </div>
                </div>

                {/* Live frame indicator */}
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
                  <div
                    className="staxx-carousel-progress h-full bg-[#F5D033] transition-[width] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{
                      width: `${((safeSlideIndex + 1) / heroSlides.length) * 100}%`,
                    }}
                  />
                </div>
              </>
            )}
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
              Founded by <span className="font-bold text-amber-600">Bryan Karanja</span> and <span className="font-bold text-amber-600">Dan Njuguna</span>, Staxx-HyperKids provides
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
                  Stock
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
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              From <span className="text-[#F5D033]"> event </span>planning to live production.
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
                <span className="inline-block w-fit border border-white/15 bg-[#161218] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#F5D033] uppercase">
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
            <div className="flex flex-col justify-between gap-4 border border-white/10 bg-transparent p-4 md:ml-4">
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900">
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
                  className="inline-flex shrink-0 items-center gap-2 bg-white py-1 pr-1 pl-3 text-[10px] font-semibold tracking-[0.12em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-105"
                >
                  <span>Request a Quote</span>
                  <span className="flex h-5 w-5 items-center justify-center bg-[#0F2A2A] text-[10px] text-white">
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
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Structured Event Packages
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-amber-600">
              Event production packages for corporate functions, weddings,
              institutional events, and festivals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col justify-between border p-8 transition-colors duration-200 ${
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
                        <span className="shrink-0 bg-[#F5D033] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-[#0D0A0E] uppercase">
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
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F5D033]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className={`group flex w-full items-center justify-between py-2 pr-2 pl-6 text-xs font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-200 ${
                    pkg.featured
                      ? 'bg-white text-[#0D0A0E] hover:bg-[#F5D033]'
                      : 'border border-white/25 bg-transparent text-white hover:border-white hover:bg-white hover:text-[#0D0A0E]'
                  }`}
                >
                  <span>Enquire About Package</span>

                  <span
                    className={`flex h-7 w-7 items-center justify-center text-xs transition-transform duration-200 group-hover:translate-x-0.5 ${
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
<section className="overflow-hidden border-b border-white/10 bg-[#0F2A2A]">
  <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
    <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 sm:mb-14 sm:flex-row sm:items-end">
      <div>
        <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
          Event Equipment &amp; Supplies
        </h2>
      </div>

      <a
        href="/event-equipment-supplies"
        onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
        className="group inline-flex items-center gap-3 self-start bg-white py-1.5 pr-1.5 pl-4 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-[1.02] sm:self-auto"
      >
        <span>View Equipment Catalog &rarr;</span>
        <span className="flex h-6 w-6 items-center justify-center bg-[#0F2A2A] text-xs text-white">
          &rarr;
        </span>
      </a>
    </div>

    {/* MOBILE ONLY: TINDER-STYLE SWIPEABLE CARD DECK */}
    <div className="sm:hidden">
      <div
        className="relative mx-auto h-[410px] w-full max-w-[360px] touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {equipmentCategories.map((cat, idx) => {
          const total = equipmentCategories.length;
          // Calculate circular stack position (0 = top card, 1 = behind, 2 = further behind)
          const position = (idx - activeCardIndex + total) % total;
          const isTop = position === 0;

          if (position > 2) return null; // Only render top 3 cards in stack

          const translateX = isTop ? dragOffset : 0;
          const translateY = position * 12;
          const scale = 1 - position * 0.05;
          const rotate = isTop ? dragOffset * 0.045 : 0;
          const opacity = position === 2 ? 0.45 : position === 1 ? 0.75 : 1;

          return (
            <div
              key={cat.title}
              style={{
                zIndex: 30 - position,
                transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale}) rotate(${rotate}deg)`,
                opacity,
                transition: isDragging && isTop
                  ? 'none'
                  : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease',
              }}
              className="absolute inset-0 flex flex-col border border-white/15 bg-[#141016] p-4 shadow-2xl"
            >
              <a
                href={cat.path}
                onClick={(e) => {
                  // Prevent accidental navigation while swiping
                  if (Math.abs(dragOffset) > 10) {
                    e.preventDefault();
                    return;
                  }
                  handleLinkClick(e, cat.path);
                }}
                className="flex h-full flex-col text-inherit no-underline"
              >
                <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#1A161C]">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-3 right-3 border border-white/20 bg-[#0F2A2A]/90 px-2.5 py-1 text-[10px] font-bold tracking-[0.14em] text-[#F5D033] uppercase">
                    0{idx + 1} / 0{total}
                  </span>
                </div>

                <h3 className="font-display-condensed mb-1.5 text-2xl font-normal tracking-wide text-white">
                  {cat.title}
                </h3>

                <p className="line-clamp-2 text-xs leading-relaxed text-[#9E9A9F]">
                  {cat.detail}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-semibold tracking-[0.14em] text-[#F5D033] uppercase">
                  <span>Tap to Explore</span>
                  <span>&larr; Swipe Left &rarr;</span>
                </div>
              </a>
            </div>
          );
        })}
      </div>

      {/* Pagination Dots & Quick Controls */}
      <div className="mt-10 flex items-center justify-center gap-2.5">
        {equipmentCategories.map((cat, idx) => (
          <button
            key={cat.title}
            type="button"
            aria-label={`View ${cat.title}`}
            onClick={() => setActiveCardIndex(idx)}
            className={`h-1.5 transition-all duration-300 ${
              idx === activeCardIndex
                ? 'w-7 bg-[#F5D033]'
                : 'w-2 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>

    {/* TABLET & DESKTOP: ORIGINAL 4-COLUMN GRID */}
    <div className="hidden grid-cols-1 gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
      {equipmentCategories.map((cat) => (
        <a
          key={cat.title}
          href={cat.path}
          onClick={(e) => handleLinkClick(e, cat.path)}
          className="group flex flex-col text-inherit no-underline"
        >
          <div className="mb-4 aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#1A161C]">
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
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Recent Projects &amp; Installations
              </h2>
            </div>

            {/* Minimal Editorial Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'corporate', label: 'AudioVisual' },
                { id: 'celebrations', label: 'Celebrations' },
                { id: 'equipment', label: 'Equipments' },
              ].map((tab) => {
                const isSelected = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={isSelected}
                    className={`cursor-pointer px-4 py-1.5 text-[10px] font-medium tracking-[0.14em] uppercase transition-all duration-200 ${
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
                <div className="mb-4 aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#1A161C]">
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

                  <span className="shrink-0 bg-white/10 px-2.5 py-0.5 text-[10px] tracking-[0.14em] text-[#F5D033] uppercase">
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
              className="group inline-flex items-center gap-3 bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Explore Full Gallery →</span>
              <span className="flex h-6 w-6 items-center justify-center bg-[#0F2A2A] text-xs text-white">
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
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              What corporate clients &amp; event planners say
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <blockquote className="flex flex-col justify-between gap-8 border border-white/15 bg-[#141016] p-8 md:p-10">
              <p className="text-xs font-normal leading-relaxed text-white/90 md:text-lg">
                “Staxx-HyperKids managed our corporate annual gala at Serena
                Hotel. Their sound engineering, LED screens, and stage lighting
                were world-class. Having AV and d&eacute;cor handled by one
                coordinated team eliminated all vendor stress.”
              </p>

              <footer className="border-t border-white/10 pt-5 text-xs tracking-[0.06em] text-[#9E9A9F]">
                <strong className="block font-semibold tracking-[0.14em] text-teal-500 uppercase">
                  Brenda Akinyi
                </strong>
                <span className="mt-1 block text-amber-600">
                  Corporate Events Manager &bull; Nairobi Business Awards
                </span>
              </footer>
            </blockquote>

            <blockquote className="flex flex-col justify-between gap-8 border border-white/15 bg-[#141016] p-8 md:p-10">
              <p className="text-xs font-normal leading-relaxed text-white md:text-lg">
                “We hired clear-span marquees, flooring, and audiovisual gear for
                our institution&rsquo;s graduation ceremony. Their technical crew
                arrived on schedule, tested all power lines, and maintained
                immaculate professional standards throughout the day.”
              </p>

              <footer className="border-t border-white/10 pt-5 text-xs tracking-[0.06em] text-[#9E9A9F]">
                <strong className="block font-semibold tracking-[0.14em] text-teal-500 uppercase">
                  Dr. James Kiprop
                </strong>
                <span className="mt-1 block text-amber-600">
                  Institutional Registrar &bull; Nakuru County
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 8. FINAL CALL TO ACTION */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
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
              className="group inline-flex items-center gap-3 bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request an Event Quote</span>
              <span className="flex h-7 w-7 items-center justify-center bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>

            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="group inline-flex items-center gap-3 border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Contact Our Team</span>
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