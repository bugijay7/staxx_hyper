import React, { useState } from 'react';

export default function Testimonials({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      name: 'Wanjiku Kamau',
      role: 'Mom of 6-Year-Old • Karen, Nairobi',
      category: 'Full Party Setup',
      theme: 'Afro-Royal & Savannah Kingdom',
      rating: 5,
      quote:
        'Staxx Hyper Events completely transformed our garden in Karen for my son Baraka’s 6th birthday. The Kitenge table styling, lion 3D props, and djembe drummers kept 30 kids mesmerized the entire afternoon. I actually got to sit down and enjoy the party!',
    },
    {
      id: '02',
      name: 'Brian Ochieng',
      role: 'Dad of Twins • Runda Estate',
      category: 'Equipment Rentals',
      theme: 'Giant Obstacle Course & Concessions',
      rating: 5,
      quote:
        'We hired two commercial bouncy castles, a popcorn cart, and kids’ Chiavari chairs for our twins’ birthday. The crew arrived at 7:30 AM sharp, sanitized everything on site, and stayed to supervise the inflatables. Zero stress from start to finish.',
    },
    {
      id: '03',
      name: 'Amina Hassan',
      role: 'Mom of 4-Year-Old • Nyali, Mombasa',
      category: 'Full Party Setup',
      theme: 'Enchanted Pastel Princess Palace',
      rating: 5,
      quote:
        'My daughter Zuri still talks about the singing princess and the pastel balloon cloud! Every single detail—from the custom princess piñata to the glitter tattoo station—looked straight out of a magazine. Worth every shilling.',
    },
    {
      id: '04',
      name: 'Kevin Kiprop',
      role: 'PTA Events Coordinator • Lavington',
      category: 'School & Estate Events',
      theme: 'Junior Adventure Pack & Silent Disco',
      rating: 5,
      quote:
        'We booked Staxx Hyper for our school’s end-of-term fun day with over 80 kids. Their game masters, face painters, and kids’ silent disco ran like clockwork. Easily the most reliable children’s events company we have ever worked with.',
    },
    {
      id: '05',
      name: 'Njeri Muthoni',
      role: 'Mom of 8-Year-Old • Kilimani',
      category: 'Full Party Setup',
      theme: 'Comic-Verse Superhero Headquarters',
      rating: 5,
      quote:
        'Hosting in an apartment clubhouse can be tricky, but Staxx scaled the Superhero Headquarters theme to fit our space brilliantly. Every child got a satin cape and mask at the door, and the magic show had even the parents laughing.',
    },
    {
      id: '06',
      name: 'David Mutua',
      role: 'Estate Committee Chair • Syokimau',
      category: 'School & Estate Events',
      theme: 'Grand Carnival Extravaganza',
      rating: 5,
      quote:
        'For our annual estate family fun day, Staxx brought a standby generator, three inflatables, cotton candy and slush machines, plus a photographer. Transparent KES pricing with no surprise charges—we have already locked them in for next year.',
    },
  ];

  const filteredTestimonials =
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-teal-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Kids Events</span>
            <span>4.98 / 5 Average Rating &bull; 1,200+ Happy Families</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Parent Reviews <br />
              <span className="text-neutral-500">&amp; Testimonials</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Hear directly from Kenyan parents, schools, and estate organizers
              who trusted Staxx Hyper Events with their children&apos;s biggest
              celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS & FILTER STRIP */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        {/* Metrics Grid */}
        <div className="mx-auto max-w-[1440px] border-b border-neutral-900/15 px-6 md:px-10">
          <div className="grid grid-cols-1 divide-y divide-neutral-900/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:pr-10">
              <span className="block text-4xl font-normal tracking-[-0.03em] text-neutral-900 md:text-5xl">
                +500
              </span>
              <span className="mt-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Children&apos;s Parties &amp; Setups Delivered
              </span>
            </div>

            <div className="py-10 md:px-10">
              <span className="block text-4xl font-normal tracking-[-0.03em] text-neutral-900 md:text-5xl">
                98%
              </span>
              <span className="mt-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Parents Re-Book for Sibling Birthdays
              </span>
            </div>

            <div className="py-10 md:pl-10">
              <span className="block text-4xl font-normal tracking-[-0.03em] text-neutral-900 md:text-5xl">
                100%
              </span>
              <span className="mt-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                On-Time Delivery &amp; Sanitized Gear
              </span>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            Filter Reviews ({filteredTestimonials.length})
          </span>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {[
              'All',
              'Full Party Setup',
              'Equipment Rentals',
              'School & Estate Events',
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
                      ? 'border-neutral-900 font-medium text-neutral-900'
                      : 'border-transparent text-neutral-400 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIALS GRID */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 border-t border-l border-neutral-900/15 md:grid-cols-2 lg:grid-cols-3">
            {filteredTestimonials.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between border-r border-b border-neutral-900/15 bg-teal-100 p-8 transition-colors duration-200 hover:bg-teal-100 md:p-10"
              >
                <div>
                  {/* Top Index & Category Plate */}
                  <div className="mb-8 flex items-center justify-between border-b border-neutral-900/15 pb-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="font-medium text-neutral-900">
                      [ {item.id} ] &bull; {'★'.repeat(item.rating)}
                    </span>
                    <span>{item.category}</span>
                  </div>

                  {/* Quote */}
                  <p className="mb-10 text-base leading-relaxed text-neutral-800">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author & Setup Tag */}
                <div className="space-y-4 border-t border-neutral-900/15 pt-6">
                  <div>
                    <h2 className="text-lg font-medium tracking-[-0.01em] text-neutral-900">
                      {item.name}
                    </h2>
                    <p className="mt-0.5 text-xs tracking-[0.04em] text-neutral-500">
                      {item.role}
                    </p>
                  </div>

                  <span className="inline-block border border-neutral-900/15 bg-teal-100 px-3 py-1.5 text-[10px] font-medium tracking-[0.12em] text-neutral-600 uppercase">
                    {item.theme}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="bg-neutral-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Join 1,200+ Happy Families
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Ready to Host Your Child&apos;s Best Birthday Yet?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Explore our transparent KES party packages or reserve your
              celebration date today&mdash;our team handles everything from
              setup to pack-down.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-teal-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Book Your Party Date &rarr;
            </a>
            <a
              href="/party-packages"
              onClick={(e) => handleLinkClick(e, '/party-packages')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              View KES Packages
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}