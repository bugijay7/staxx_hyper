import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Backdrops from '../../assets/backdrops.jpg';
import Childrenparty from '../../assets/childrenparty.jpg';
import Corporategala from '../../assets/corporategala.jpg';
import Educationeevents from '../../assets/educationeevents.jpg';
import Tentsetup from '../../assets/tentsetup.jpg';
import Weddings from '../../assets/weddings.jpg';

export default function Testimonials({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const testimonials = [
    {
      id: '01',
      name: 'Brenda Akinyi',
      role: 'Corporate Events Manager • Nairobi Business Awards',
      category: 'Corporate & AV',
      project: 'Annual Gala & Stage Production at Serena Hotel',
      rating: 5,
      quote:
        'Staxx-HyperKids managed our corporate annual gala at Serena Hotel. Their sound engineering, LED screens, and stage lighting were world-class. Having AV and décor handled by one coordinated team eliminated all vendor stress.',
      img: Corporategala,
    },
    {
      id: '02',
      name: 'Brian Ochieng',
      role: 'Estate Committee Chair • Runda Estate',
      category: 'Equipment Rentals',
      project: 'Estate Family Fun Day & Marquee Hire',
      rating: 5,
      quote:
        'We hired clear-span marquees, flooring, and audiovisual gear for our estate family fun day. The crew arrived at 7:30 AM sharp, tested all power lines, and maintained immaculate professional standards throughout.',
      img: Tentsetup,
    },
    {
      id: '03',
      name: 'Wanjiku Kamau',
      role: 'Mom of 6-Year-Old • Karen, Nairobi',
      category: 'Kiddie Parties',
      project: 'Afro-Royal & Savannah Kingdom Setup',
      rating: 5,
      quote:
        'Staxx Hyper Events completely transformed our garden in Karen for my son Baraka’s 6th birthday. The Kitenge table styling, lion 3D props, and djembe drummers kept 30 kids mesmerized the entire afternoon.',
      img: Childrenparty,
    },
    {
      id: '04',
      name: 'Dr. James Kiprop',
      role: 'Institutional Registrar • Nakuru County',
      category: 'Institutional Events',
      project: 'University Graduation Ceremony & Sound Rigging',
      rating: 5,
      quote:
        'We booked Staxx-HyperKids for our institution’s graduation ceremony across multiple zones in Nakuru. Their line-array sound system and stage management ran like clockwork. Easily the most reliable production company.',
      img: Educationeevents,
    },
    {
      id: '05',
      name: 'Njeri Muthoni',
      role: 'Wedding Planner • Karen Country Club',
      category: 'Weddings & Styling',
      project: 'Enchanted Botanical Garden Banquet & Floral Styling',
      rating: 5,
      quote:
        'Hosting at a premier country club requires pristine aesthetic standards. Staxx delivered breathtaking floral arches, ambient lighting, and crystal-clear speech audio that left our bridal couple and guests speechless.',
      img: Weddings,
    },
    {
      id: '06',
      name: 'David Mutua',
      role: 'Brand Director • Westlands, Nairobi',
      category: 'Corporate & AV',
      project: 'Product Launch & Immersive Brand Activation',
      rating: 5,
      quote:
        'For our high-profile consumer brand activation, Staxx brought custom backdrops, interactive LED screens, and a seamless generator power backup. Transparent KES pricing with zero surprise charges—absolute professionals.',
      img: Backdrops,
    },
  ];

  const filteredTestimonials =
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter((item) => item.category === selectedCategory);

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
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx-HyperKids &bull; Client Reviews &amp; Testimonials</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> 4.98 / 5 Average Rating &bull; Kenya-Wide Productions
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Client Feedback <br />
              <span className="text-white/65">&amp; Success Stories</span>
            </h1>

            <p className=" border border-white/10 bg-transparent p-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Read feedback from corporate leaders, wedding planners, school
              administrators, estate committees, and families who trusted
              Staxx-HyperKids with their AV production, d&eacute;cor, and event
              infrastructure across six counties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS & FILTER STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        {/* Metrics Grid */}
        <div
          className="mx-auto max-w-[1440px] border-b border-white/15 px-6 md:px-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:pr-10">
              <span className="font-display-condensed block text-5xl font-normal text-white md:text-6xl">
                +600 <span className="text-[#F5D033]">&#10022;</span>
              </span>
              <span className="mt-2 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Corporate Events, Weddings &amp; Productions Completed
              </span>
            </div>

            <div className="py-10 md:px-10">
              <span className="font-display-condensed block text-5xl font-normal text-[#F5D033] md:text-6xl">
                98%
              </span>
              <span className="mt-2 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Repeat Corporate &amp; Private Clients Across Kenya
              </span>
            </div>

            <div className="py-10 md:pl-10">
              <span className="font-display-condensed block text-5xl font-normal text-white md:text-6xl">
                6 Counties
              </span>
              <span className="mt-2 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8"
          data-aos="fade-up"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> Filter Reviews ({filteredTestimonials.length})
          </span>

          <div className="flex flex-wrap gap-2.5">
            {[
              'All',
              'Corporate & AV',
              'Equipment Rentals',
              'Weddings & Styling',
              'Institutional Events',
              'Kiddie Parties',
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

      {/* 3. TESTIMONIALS GRID WITH IMAGES */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((item, index) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between overflow-hidden  border border-white/15 bg-[#141016] p-7 transition-all duration-200 hover:border-[#F5D033]/70 md:p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  {/* Top Index & Category Plate */}
                  <div className="mb-6 flex items-center justify-between gap-2 border-b border-white/10 pb-3.5 text-[11px] tracking-[0.16em] uppercase">
                    <span className="font-bold text-[#F5D033]">
                      [ {item.id} ] &bull; {'★'.repeat(item.rating)}
                    </span>
                    <span className=" bg-white/10 px-3 py-1 text-[10px] font-medium text-white/85">
                      {item.category}
                    </span>
                  </div>

                  {/* Project Image Thumbnail */}
                  <div className="mb-6 aspect-[16/11] w-full overflow-hidden  border border-white/10 bg-[#1B171E]">
                    <img
                      src={item.img}
                      alt={item.project}
                      className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Quote */}
                  <p className="mb-8 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Project Tag */}
                <div className="space-y-4 border-t border-white/10 pt-6">
                  <div>
                    <h2 className="font-display-condensed text-2xl font-normal tracking-wide text-white">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-xs tracking-[0.04em] text-[#9E9A9F]">
                      {item.role}
                    </p>
                  </div>

                  <span className="inline-block  border border-white/15 bg-[#1A161D] px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-[#F5D033] uppercase">
                    {item.project}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Partner with Staxx-HyperKids <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Ready to plan your next corporate event, wedding or celebration?
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Reach out to our team at Commerce House, Nairobi to check date
              availability and request an itemized quotation for AV, d&eacute;cor,
              kiddie celebrations, or equipment hire across Kenya.
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
