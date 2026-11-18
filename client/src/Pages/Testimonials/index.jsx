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
    <div className="bg-white pt-20 font-sans text-teal-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx-HyperKids &bull; Client Reviews &amp; Testimonials</span>
            <span>4.98 / 5 Average Rating &bull; Kenya-Wide Productions</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-teal-900 sm:text-6xl lg:text-[4.5rem]">
              Client Feedback <br />
              <span className="text-neutral-500">&amp; Success Stories</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-900 md:text-sm lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Read feedback from corporate leaders, wedding planners, school
              administrators, estate committees, and families who trusted
              Staxx-HyperKids with their AV production, d&eacute;cor, and event
              infrastructure across six counties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS & FILTER STRIP */}
      <section className="border-b border-neutral-900/15 bg-white">
        {/* Metrics Grid */}
        <div
          className="mx-auto max-w-[1440px] border-b border-neutral-900/15 px-6 md:px-10"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 divide-y divide-neutral-900/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:pr-10">
              <span className="block text-4xl font-normal tracking-[-0.03em] text-teal-900 md:text-5xl">
                +600
              </span>
              <span className="mt-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Corporate Events, Weddings &amp; Productions Completed
              </span>
            </div>

            <div className="py-10 md:px-10">
              <span className="block text-4xl font-normal tracking-[-0.03em] text-teal-900 md:text-5xl">
                98%
              </span>
              <span className="mt-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Repeat Corporate &amp; Private Clients Across Kenya
              </span>
            </div>

            <div className="py-10 md:pl-10">
              <span className="block text-4xl font-normal tracking-[-0.03em] text-teal-900 md:text-5xl">
                6 Counties
              </span>
              <span className="mt-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10"
          data-aos="fade-up"
        >
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            Filter Reviews ({filteredTestimonials.length})
          </span>

          <div className="flex flex-wrap gap-6 md:gap-8">
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
                  className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'border-neutral-900 font-medium text-teal-900'
                      : 'border-transparent text-neutral-400 hover:text-teal-900'
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
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 border-t border-l border-neutral-900/15 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((item, index) => (
              <article
                key={item.id}
                className="flex flex-col justify-between border-r border-b border-neutral-900/15 bg-white p-8 transition-colors duration-200 hover:bg-white md:p-10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  {/* Top Index & Category Plate */}
                  <div className="mb-6 flex items-center justify-between border-b border-neutral-900/15 pb-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="font-medium text-teal-900">
                      [ {item.id} ] &bull; {'★'.repeat(item.rating)}
                    </span>
                    <span>{item.category}</span>
                  </div>

                  {/* Project Image Thumbnail */}
                  <div className="mb-6 aspect-[16/11] w-full overflow-hidden bg-neutral-200">
                    <img
                      src={item.img}
                      alt={item.project}
                      className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                    />
                  </div>

                  {/* Quote */}
                  <p className="mb-8 text-base leading-relaxed text-neutral-800">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Project Tag */}
                <div className="space-y-4 border-t border-neutral-900/15 pt-6">
                  <div>
                    <h2 className="text-lg font-medium tracking-[-0.01em] text-teal-900">
                      {item.name}
                    </h2>
                    <p className="mt-0.5 text-xs tracking-[0.04em] text-neutral-500">
                      {item.role}
                    </p>
                  </div>

                  <span className="inline-block border border-neutral-900/15 bg-white px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] text-gray-900 uppercase">
                    {item.project}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Partner with Staxx-HyperKids
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Ready to plan your next corporate event, wedding or celebration?
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
              className="border border-[#f9f9f8] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Request an Event Quote &rarr;
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