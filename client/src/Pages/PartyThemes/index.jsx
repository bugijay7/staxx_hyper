import React, { useState } from 'react';

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
      title: 'Afro-Royal & Savannah Gala',
      tagline: 'Vibrant Ankara installations, golden tones & cultural prestige',
      ageRange: 'All Ages • Corporate & Social',
      palette: ['#D97706', '#15803D', '#B91C1C', '#FACC15'],
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80',
      description:
        'A magnificent, sophisticated celebration rooted in African heritage and majestic landscapes. Featuring rich Kitenge and Ankara draping, woven artisanal textures, custom brass and woodwork statement props, live acoustic and drumming showcases, and botanical floral installations.',
      highlights: [
        'Kitenge & Ankara Fabric Draping & Executive Lounge Styling',
        'Handcrafted Cultural Props & Artisanal Centerpiece Displays',
        'Live Acoustic Performances & Traditional Drumming Showcases',
        'Custom Art Installations & Curated Guest Photo Zones',
      ],
    },
    {
      id: '02',
      title: 'Cinematic Red Carpet & Gala',
      tagline: 'Dramatic lighting, velvet ropes & luxury brand showcases',
      ageRange: 'Corporate & VIP Events',
      palette: ['#DC2626', '#2563EB', '#FACC15', '#18181B'],
      img: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80',
      description:
        'Transform any venue into an exclusive Hollywood-style premiere or high-end corporate gala. Complete with dramatic architectural uplighting, branded sailboard press walls, luxury velvet stanchions, and bespoke cocktail reception setups.',
      highlights: [
        'Branded Sailboard Press Walls & Red Carpet Entrance',
        'Custom Velvet Stanchions & Professional Lighting Rigs',
        'Live Entertainment Coordination & MC Hosting',
        'Premium Cocktail Bar Styling & Executive Seating Areas',
      ],
    },
    {
      id: '03',
      title: 'Enchanted Botanical & Garden Banquet',
      tagline: 'Dreamy floral arches, ambient lighting & ethereal dining',
      ageRange: 'Weddings & Anniversaries',
      palette: ['#F472B6', '#C084FC', '#FDE047', '#FFFFFF'],
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80',
      description:
        'An ethereal garden dream brought to life with cascading floral canopies, shimmering gold structural arches, intimate Chiavari dining setups draped in tulle, and romantic fairy-light ceiling installations for unforgettable evening receptions.',
      highlights: [
        'Golden Structural Arches & Cascading Floral Canopies',
        'Executive Chiavari Seating & Fine Dining Table Scapes',
        'Romantic Fairy-Light Canopies & Ambient Uplighting',
        'Acoustic Live Music Stage & Twilight Reception Setup',
      ],
    },
    {
      id: '04',
      title: 'Galactic Neon & Cosmic Nightclub',
      tagline: 'Immersive projection, ambient glows & futuristic staging',
      ageRange: 'Product Launches & Private Parties',
      palette: ['#09090B', '#38BDF8', '#A855F7', '#D8F253'],
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80',
      description:
        'Step into the future with a high-impact cosmic aesthetic featuring programmable LED uplighting, metallic reflective backdrops, futuristic lounge furniture, state-of-the-art silent disco equipment, and immersive DJ booth setups.',
      highlights: [
        'LED Projection Mapping & Metallic Reflective Backdrops',
        'Futuristic Lounge Seating & Modular Bar Installations',
        'Silent Disco & Immersive Multi-Zone Audio Systems',
        'Custom Neon Branding & Interactive LED Photo Stations',
      ],
    },
  ];

  return (
    <div className="bg-teal-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Events &amp; Production</span>
            <span>Immersive Worlds &bull; Custom Styling</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Signature Event <br />
              <span className="text-neutral-500">Inspiration</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Explore our four signature event design directions—from vibrant
              cultural galas and corporate red-carpet premieres to botanical
              weddings and cosmic evening showcases—each custom-styled with
              backdrops, staging, lighting, and full production.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="shrink-0 text-[11px] font-medium tracking-[0.14em] text-neutral-900 uppercase">
            Tailored to Your Vision
          </span>
          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-right">
            Every concept can be paired with our professional production
            packages, customized with your brand identity or personal theme, or
            adapted into an entirely bespoke multi-day experience.
          </p>
        </div>
      </section>

      {/* 3. FOUR SIGNATURE INSPIRATION WORLDS SHOWCASE */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] divide-y divide-neutral-900/15 px-6 md:px-10">
          {inspoWorlds.map((inspo) => {
            const isTipOpen = selectedInspo === inspo.id;

            return (
              <div
                key={inspo.id}
                className="group grid grid-cols-1 items-start gap-12 py-16 md:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16"
              >
                {/* Left Column: Editorial Spec, Highlights & Palette */}
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] uppercase">
                      <span className="text-neutral-500">
                        <strong className="font-medium text-neutral-900">
                          Concept {inspo.id}
                        </strong>
                      </span>
                      <span className="border border-neutral-900/20 px-2.5 py-0.5 text-[10px] text-neutral-700">
                        {inspo.ageRange}
                      </span>
                    </div>

                    <h2 className="mb-2 text-2xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 sm:text-3xl md:text-4xl">
                      {inspo.title}
                    </h2>

                    <p className="mb-6 text-sm font-medium tracking-[-0.01em] text-neutral-500">
                      {inspo.tagline}
                    </p>

                    <p className="mb-8 text-base leading-relaxed text-neutral-600">
                      {inspo.description}
                    </p>
                  </div>

                  {/* Signature Elements */}
                  <div className="mb-8 border-t border-neutral-900/15 pt-6">
                    <span className="mb-4 block text-[11px] font-medium tracking-[0.14em] text-neutral-900 uppercase">
                      Signature Production Elements
                    </span>
                    <ul className="grid grid-cols-1 gap-3 text-sm text-neutral-700 sm:grid-cols-2">
                      {inspo.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-900" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architectural Material Palette & Actions */}
                  <div className="flex flex-col justify-between gap-6 border-t border-neutral-900/15 pt-6 sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                        Palette
                      </span>
                      <div className="flex items-center gap-2">
                        {inspo.palette.map((color) => (
                          <span
                            key={color}
                            title={color}
                            style={{ backgroundColor: color }}
                            className="h-5 w-5 border border-neutral-900/25"
                          >
                            <span className="sr-only">{color}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-5">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedInspo(isTipOpen ? null : inspo.id)
                        }
                        aria-expanded={isTipOpen}
                        className="cursor-pointer border-b border-neutral-900/30 pb-0.5 text-xs tracking-[0.12em] text-neutral-600 uppercase transition-colors hover:border-neutral-900 hover:text-neutral-900"
                      >
                        {isTipOpen ? 'Hide Styling Tip' : 'Styling Tip'}
                      </button>

                      <a
                        href="/booking"
                        onClick={(e) => handleLinkClick(e, '/booking')}
                        className="border border-neutral-900 bg-neutral-900 px-5 py-2.5 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
                      >
                        Book This Concept &rarr;
                      </a>
                    </div>
                  </div>

                  {/* Expandable Planner Note */}
                  {isTipOpen && (
                    <div className="mt-6 border border-neutral-900/15 bg-teal-100 p-5 text-sm leading-relaxed text-neutral-700">
                      <strong className="block mb-1 text-xs font-medium tracking-[0.08em] text-neutral-900 uppercase">
                        Staxx Producer Note
                      </strong>
                      Pair the <strong>{inspo.title}</strong> with our{' '}
                      <em className="font-medium text-neutral-900 not-italic">
                        Hyper Deluxe Experience (KES 62,000)
                      </em>{' '}
                      for full structural staging, custom branding accents, and
                      professional lighting support.
                    </div>
                  )}
                </div>

                {/* Right Column: Architectural Set Plate */}
                <div className="lg:border-l lg:border-neutral-900/15 lg:pl-14">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={inspo.img}
                      alt={inspo.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-neutral-900/15 pt-2.5 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span>Plate {inspo.id} / Custom Production Design</span>
                    <span className="font-mono text-[10px] text-neutral-400">
                      {inspo.palette.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. BOTTOM CUSTOM CONCEPT CTA */}
      <section className="bg-neutral-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Dreaming of Something Else?
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              We Build Custom Event Concepts From Scratch
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              From corporate product launches and milestone anniversaries to gala
              dinners and brand activations—tell us your vision and our production
              studio will bring it to life.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-teal-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Request a Custom Concept &rarr;
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Explore KES Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}