import React, { useState, useEffect } from 'react';

import Childrenparty from '../../assets/childrenparty.jpg';
import Concerts from '../../assets/concerts.jpg';
import Corporategala from '../../assets/corporategala.jpg';
import Exhibition from '../../assets/exhibition.jpg';
import Ruracio from '../../assets/ruracio.jpg';
import Tentsetup from '../../assets/tentsetup.jpg';


export default function Blog({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    if (!activePost) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePost(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePost]);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      setActivePost(null);
      onNavigate(path);
    }
  };

  const blogPosts = [
    {
      id: '01',
      title: 'Technical Production Checklist for Corporate Galas, AGMs & Product Launches in Nairobi',
      category: 'Corporate & AV Production',
      readTime: '6 Min Read',
      date: 'November 2026',
      excerpt:
        'From line-array audio coverage and P3 indoor LED walls to stage wash lighting and silent generator redundancy—what Kenyan corporate planners need on their technical rider.',
      img: Corporategala,
      content: [
        'Whether you are hosting an Annual General Meeting at KICC, a hotel ballroom gala in Westlands, or an executive product launch in Kilimani, speech intelligibility and visual clarity determine how your brand is perceived. Always conduct a joint site survey with your AV provider at least seven days prior to load-in to verify ceiling rigging heights, ambient light levels, and three-phase power distribution.',
        'At Staxx-HyperKids, we pair high-brightness LED display walls with distributed line-array speakers so delegates at the back of the hall hear every keynote clearly without front-row feedback. Always include an acoustic-canopy standby generator on your technical rider to protect live broadcasts and presentations from sudden grid fluctuations.',
      ],
    },
    {
      id: '02',
      title: 'Planning Traditional Weddings, Ruracio & Garden Receptions Across Six Kenyan Counties',
      category: 'Weddings & Cultural Styling',
      readTime: '5 Min Read',
      date: 'October 2026',
      excerpt:
        'How to coordinate clear-span marquee tents, cultural Kikuyu/Kenyan styling, bridal stage backdrops, and outdoor sound across Nairobi, Kiambu, Nakuru, Machakos, Murang’a, and Kajiado.',
      img: Ruracio,
      content: [
        'Traditional Ruracio ceremonies, dowry negotiations, and countryside garden receptions across Kiambu, Murang’a, Nakuru, Machakos, and Kajiado present unique logistical demands—from sloped homestead lawns to multi-hour outdoor seating schedules. Clear-span marquees and pagoda tents provide structured shade while keeping sightlines open to the main bridal and elders’ dais.',
        'Integrating your spatial décor and audiovisual vendor under one roof eliminates cable clutter and mismatched aesthetics. Custom timber and floral backdrops should be built around speaker placement and stage lighting so photography remains clean from every angle.',
      ],
    },
    {
      id: '03',
      title: 'Rainy Season Event Protection: March–May & November Contingency Planning in Kenya',
      category: 'Logistics & Equipment Hire',
      readTime: '4 Min Read',
      date: 'October 2026',
      excerpt:
        'Don’t let an afternoon downpour disrupt outdoor conventions, graduations, or private celebrations. Practical guides on waterproof marquees, raised flooring, and weatherproof AV.',
      img: Tentsetup,
      content: [
        'In Nairobi and the surrounding highland counties, clear mornings frequently give way to heavy afternoon rain during the long and short rainy seasons. For outdoor church conventions, university graduations, and garden parties, ground moisture and wind gusts are just as critical as overhead rain.',
        'Specify heavy-duty PVC clear-span tents fitted with roll-down sidewalls, guttering channels between connected structures, and interlocking cassette flooring or carpeted sub-decks. On the technical side, ensure all outdoor line arrays, stage consoles, and power distribution boxes are housed under dedicated weather-rated FOH (Front of House) canopies.',
      ],
    },
    {
      id: '04',
      title: 'How to Plan a Stress-Free Children’s Party on a Realistic KES Budget',
      category: 'Kiddie Parties & Family',
      readTime: '5 Min Read',
      date: 'September 2026',
      excerpt:
        'Smart ways Kenyan parents allocate funds across custom themes, sanitized inflatables, kids’ bites, and entertainment—whether in a Karen garden or a Kilimani clubhouse.',
      img: Childrenparty,
      content: [
        'A memorable children’s birthday doesn’t require juggling four separate suppliers—it requires prioritizing active play and one cohesive visual focal point. Kids remember commercial bouncy castles, interactive game hosts, and custom piñatas far more than elaborate adult table settings.',
        'For estate lawns in Karen or Runda, allocate roughly 40% of your budget to sanitized inflatables and entertainment, 30% to kid-friendly catering, and 30% to a custom backdrop and organic balloon garland. Hosting in an apartment clubhouse in Kilimani or Kileleshwa? Compact padded soft-play arenas and sailboard backdrops deliver maximum impact in tighter indoor footprints.',
      ],
    },
    {
      id: '05',
      title: 'Designing High-Traffic Exhibition Booths & Experiential Brand Activations',
      category: 'Corporate & AV Production',
      readTime: '6 Min Read',
      date: 'September 2026',
      excerpt:
        'Standing out at trade expos, mall activations, and promotional showcases with custom modular trussing, interactive screens, and crowd-flow layouts.',
      img: Exhibition,
      content: [
        'At busy trade shows and retail mall activations, you have less than three seconds to capture attendee attention. Standard shell-scheme booths often blend into the background unless elevated with custom spatial fabrication, targeted spotlighting, and dynamic motion graphics on seamless LED panels.',
        'When planning an activation, map out clear entry and exit zones for product sampling or live demos, integrate concealed storage for promotional stock, and calibrate directional audio so your MC engages booth visitors without violating venue decibel limits.',
      ],
    },
    {
      id: '06',
      title: 'Staging Concerts, Church Conventions & Institutional Fun Days Safely',
      category: 'Logistics & Equipment Hire',
      readTime: '7 Min Read',
      date: 'August 2026',
      excerpt:
        'Essential crowd-management, stage rigging, age-zoned recreation, and power redundancy guidelines for large-scale community and institutional gatherings.',
      img: Concerts,
      content: [
        'Large-scale church crusades, gospel concerts, and school family fun days demand disciplined operational execution. Start with certified steel stage decking, proper truss load calculations for lighting and line arrays, and heavy-duty cable ramps across all pedestrian walkways.',
        'For institutional family days where hundreds of children attend alongside adults, zone recreation areas strictly by age—separating toddler soft-play pits from giant inflatable obstacle courses—and assign trained safety attendants and dedicated power backup to every inflatable unit.',
      ],
    },
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-white pt-20 font-sans text-[#16232A] antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#16232A]/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx-HyperKids Journal</span>
            <span>
              Event Production Guides &bull; AV &amp; Styling &bull; Kenya Venues
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-[#16232A] sm:text-6xl lg:text-[4.5rem]">
              Production Insights <br />
              <span className="text-neutral-500">&amp; Event Guides</span>
            </h1>

            <p className="text-base leading-relaxed text-[#16232A] md:text-lg lg:border-l lg:border-[#16232A]/15 lg:pl-10">
              Practical field notes from our AV engineers, spatial stylists, and
              operations team&mdash;covering corporate technical riders,
              weddings &amp; Ruracio logistics, rainy-season marquees, brand
              activations, and children&apos;s parties across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER STRIP */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            Browse Topics ({filteredPosts.length})
          </span>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {[
              'All',
              'Corporate & AV Production',
              'Weddings & Cultural Styling',
              'Logistics & Equipment Hire',
              'Kiddie Parties & Family',
            ].map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'border-[#16232A] font-medium text-[#16232A]'
                      : 'border-transparent text-neutral-400 hover:text-[#16232A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BLOG POSTS GRID */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group flex cursor-pointer flex-col justify-between border border-[#16232A]/15 bg-white transition-colors duration-200 hover:bg-white"
              >
                <div>
                  {/* Top Index & Category Plate */}
                  <div className="flex items-center justify-between gap-3 border-b border-[#16232A]/15 px-6 py-3 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="shrink-0 font-medium text-[#16232A]">
                      Issue {post.id}
                    </span>
                    <span className="truncate">{post.category}</span>
                  </div>

                  {/* Image Frame */}
                  <div className="aspect-[16/11] w-full overflow-hidden border-b border-[#16232A]/15 bg-neutral-200">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-2 text-[11px] tracking-[0.12em] text-neutral-400 uppercase">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="mb-3 text-xl font-normal tracking-[-0.015em] leading-snug text-[#16232A] transition-opacity duration-200 group-hover:opacity-70">
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-[#16232A]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Trigger */}
                <div className="border-t border-[#16232A]/15 bg-white px-6 py-4 md:px-8">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePost(post);
                    }}
                    className="cursor-pointer bg-transparent text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase transition-opacity group-hover:opacity-65"
                  >
                    Read Full Guide &rarr;
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePost.title}
          onClick={() => setActivePost(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#075056]/85 p-4 backdrop-blur-xs md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-[#16232A]/20 bg-white text-[#16232A]"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between border-b border-[#16232A]/15 bg-white px-6 py-4 text-[11px] tracking-[0.14em] uppercase">
              <div className="flex flex-wrap items-center gap-2 text-neutral-500">
                <strong className="font-medium text-[#16232A]">
                  {activePost.category}
                </strong>
                <span>&bull;</span>
                <span>{activePost.readTime}</span>
                <span>&bull;</span>
                <span>{activePost.date}</span>
              </div>

              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="cursor-pointer bg-transparent py-1 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase transition-opacity hover:opacity-55"
              >
                Close &times;
              </button>
            </div>

            {/* Scrollable Article Content */}
            <div className="overflow-y-auto">
              <div className="aspect-[16/8] w-full overflow-hidden border-b border-[#16232A]/15 bg-neutral-200">
                <img
                  src={activePost.img}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-6 bg-white p-6 md:p-10">
                <h3 className="text-2xl font-normal tracking-[-0.02em] leading-snug text-[#16232A] md:text-3xl">
                  {activePost.title}
                </h3>

                <div className="space-y-4 text-base leading-relaxed text-[#16232A]">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Modal Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#16232A]/15 bg-white px-6 py-4">
              <a
                href="/booking"
                onClick={(e) => handleLinkClick(e, '/booking')}
                className="border border-[#E4EEF0] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#E4EEF0]"
              >
                Plan This Event With Staxx &rarr;
              </a>
              <a
                href="/event-equipment-supplies"
                onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                className="border border-[#E4EEF0]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#E4EEF0] uppercase no-underline transition-colors duration-200 hover:border-[#E4EEF0]"
              >
                Browse Equipment Catalog
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#075056] text-[#E4EEF0]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Need Production Guidance?
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Planning a Corporate Event, Wedding, or Celebration?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Speak directly with our AV engineers and spatial stylists at
              Commerce House, Nairobi for venue assessments, technical riders,
              and itemized KES proposals across six Kenyan counties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#E4EEF0] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#E4EEF0]"
            >
              Request an Event Quote &rarr;
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#E4EEF0]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#E4EEF0] uppercase no-underline transition-colors duration-200 hover:border-[#E4EEF0]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}