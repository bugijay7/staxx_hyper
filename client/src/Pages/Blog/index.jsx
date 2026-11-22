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
            <span>Staxx-HyperKids Journal</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Event Production Guides &bull; AV &amp; Styling &bull; Kenya Venues
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Production Insights <br />
              <span className="text-white/65">&amp; Event Guides</span>
            </h1>

            <p className=" border border-white/10 bg-transparentp-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Practical field notes from our AV engineers, spatial stylists, and
              operations team&mdash;covering corporate technical riders,
              weddings &amp; Ruracio logistics, rainy-season marquees, brand
              activations, and children&apos;s parties across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> Browse Topics ({filteredPosts.length})
          </span>

          <div className="flex flex-wrap gap-2.5">
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
                  className={`cursor-pointer  px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#F5D033] text-[#0D0A0E]'
                      : 'border border-white/15 bg-transparent text-[#9E9A9F] hover:border-white hover:text-white'
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
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group flex cursor-pointer flex-col justify-between overflow-hidden  border border-white/15 bg-[#141016] transition-all duration-200 hover:border-[#F5D033]/70"
              >
                <div>
                  {/* Top Index & Category Plate */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 px-6 py-4 text-[10px] tracking-[0.16em] uppercase">
                    <span className="shrink-0 font-bold text-[#F5D033]">
                      Issue {post.id}
                    </span>
                    <span className="truncate  bg-white/10 px-3 py-1 font-medium text-white/85">
                      {post.category}
                    </span>
                  </div>

                  {/* Image Frame */}
                  <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/10 bg-[#1B171E]">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-[#9E9A9F] uppercase">
                      <span>{post.date}</span>
                      <span className="text-[#F5D033]">&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="font-display-condensed mb-3 text-2xl font-normal leading-[1.08] tracking-wide text-white transition-colors duration-200 group-hover:text-[#F5D033]">
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-[#C7C3C9]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Trigger */}
                <div className="flex items-center justify-between border-t border-white/10 bg-[#18141B] px-6 py-4 md:px-8">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePost(post);
                    }}
                    className="cursor-pointer bg-transparent text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors group-hover:text-[#F5D033]"
                  >
                    Read Full Guide &rarr;
                  </button>
                  <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:bg-[#F5D033]">
                    &rarr;
                  </span>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden  border border-white/20 bg-[#141016] text-white shadow-2xl"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between border-b border-white/15 bg-[#18141B] px-6 py-4 text-[11px] tracking-[0.16em] uppercase">
              <div className="flex flex-wrap items-center gap-2 text-[#9E9A9F]">
                <strong className="font-bold text-[#F5D033]">
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
                className="cursor-pointer  border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-[#F5D033] hover:bg-[#F5D033] hover:text-[#0D0A0E]"
              >
                Close &times;
              </button>
            </div>

            {/* Scrollable Article Content */}
            <div className="overflow-y-auto">
              <div className="aspect-[16/8] w-full overflow-hidden border-b border-white/15 bg-[#1B171E]">
                <img
                  src={activePost.img}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-6 bg-[#141016] p-6 md:p-10">
                <h3 className="font-display-condensed text-3xl font-normal leading-[1.04] tracking-wide text-white md:text-4xl">
                  {activePost.title}
                </h3>

                <div className="space-y-4 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Modal Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 bg-[#18141B] px-6 py-4">
              <a
                href="/booking"
                onClick={(e) => handleLinkClick(e, '/booking')}
                className="group inline-flex items-center gap-3  bg-white py-2 pr-2 pl-5 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
              >
                <span>Plan This Event With Staxx &rarr;</span>
                <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                  &rarr;
                </span>
              </a>
              <a
                href="/event-equipment-supplies"
                onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                className=" border border-white/25 bg-transparent px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                Browse Equipment Catalog
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Need Production Guidance? <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Planning a Corporate Event, Wedding, or Celebration?
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Speak directly with our AV engineers and spatial stylists at
              Commerce House, Nairobi for venue assessments, technical riders,
              and itemized KES proposals across six Kenyan counties.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Request an Event Quote &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3  border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Chat on WhatsApp</span>
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
