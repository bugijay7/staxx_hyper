
import React from 'react';

import Childrenparty from '../../assets/childrenparty.jpg';
import Concerts from '../../assets/concerts.jpg';
import Corporate from '../../assets/corporate.jpg';
import Educationeevents from '../../assets/educationeevents.jpg';
import Exhibition from '../../assets/exhibition.jpg';
import Privateparties from '../../assets/privateparties.jpg';
import Weddings from '../../assets/weddings.jpg';
import Churchevents from '../../assets/churchevents.jpg';


export default function EventsWeDo({ onNavigate }) {
  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) onNavigate(path);
  };

  const events = [
    {
      id: '01',
      name: 'Corporate & Business Events',
      description:
        'Professional experiences that bring teams, clients and business communities together.',
      examples:
        'Conferences · AGMs · Product launches · Brand activations · Networking events · Gala dinners',
      img: Corporate,
    },
    {
      id: '02',
      name: 'Weddings & Engagements',
      description:
        'Thoughtfully produced celebrations for every chapter of your love story.',
      examples:
        'Traditional weddings · Ruracio · Wedding receptions · Engagements · Bridal showers',
      img: Weddings,
    },
    {
      id: '03',
      name: 'Birthdays & Private Celebrations',
      description:
        'Personal celebrations styled around your people, your milestones and your vision.',
      examples:
        'Adult birthdays · Anniversaries · Baby showers · Graduations · Family celebrations',
      img: Privateparties,
    },
    {
      id: '04',
      name: "Children's Parties & Events",
      description:
        'Playful, colourful experiences that make special days unforgettable for younger guests.',
      examples:
        "Kids' birthdays · Themed parties · School fun days · Family fun days · Children's entertainment",
      img: Childrenparty,
    },
    {
      id: '05',
      name: 'Concerts & Live Entertainment',
      description:
        'High-energy productions that bring audiences together through music, culture and performance.',
      examples:
        'Gospel concerts · Music festivals · Live performances · Cultural shows · Fashion shows',
      img: Concerts,
    },
    {
      id: '06',
      name: 'Church & Religious Events',
      description:
        'Well-coordinated gatherings supported by dependable production and technical solutions.',
      examples:
        'Church conferences · Conventions · Crusades · Anniversaries · Fundraising events',
      img: Churchevents,
    },
    {
      id: '07',
      name: 'Educational & Institutional Events',
      description:
        'Organised events that celebrate achievement, bring communities together and mark important milestones.',
      examples:
        'Graduations · School functions · University events · Award ceremonies · Student celebrations',
      img: Educationeevents,
    },
    {
      id: '08',
      name: 'Exhibitions & Promotional Events',
      description:
        'Brand-focused environments designed to showcase products, engage audiences and create visibility.',
      examples:
        'Trade shows · Expos · Exhibitions · Product showcases · Brand experiences',
      img: Exhibition,
    },
  ];

  const services = [
    {
      title: 'Event Planning & Management',
      detail: 'Coordination, scheduling, logistics and on-site execution.',
    },
    {
      title: 'Audiovisual & Technical Production',
      detail: 'Sound, lighting, staging, LED screens and technical support.',
    },
    {
      title: 'Event Décor & Styling',
      detail: 'Themed setups, backdrops, table styling and venue décor.',
    },
    {
      title: 'Equipment & Rentals',
      detail: 'Tents, chairs, tables, furniture and event essentials.',
    },
    {
      title: 'Entertainment & Experiences',
      detail: 'MCs, DJs, performers, activities and guest engagement.',
    },
    {
      title: 'Branding & Event Production',
      detail: 'Signage, branded spaces, exhibition setups and displays.',
    },
  ];

  return (
    <div className="bg-amber-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">

      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">

          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Events</span>
            <span>Events Across Kenya · Planning · Production · Experiences</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Events <br />
              <span className="text-neutral-500">We Do</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              From corporate conferences and product launches to weddings,
              concerts and private celebrations, we bring people together
              through creative planning, event styling and professional
              production.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">

          <span className="shrink-0 text-[11px] font-medium tracking-[0.14em] text-neutral-900 uppercase">
            One Partner. Every Occasion.
          </span>

          <p className="max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-right">
            Whatever the occasion, we help bring it to life with event
            coordination, audiovisual production, décor, entertainment and
            equipment solutions.
          </p>
        </div>
      </section>

      {/* 3. EVENT CATEGORIES */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">

          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-neutral-900/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                08 Event Categories
              </span>

              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                What Are You Celebrating?
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-neutral-600 md:text-right">
              Explore the occasions we cater for. Each event is shaped around
              your audience, objectives, style and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <article key={event.id} className="group flex flex-col">

                <div className="mb-6 flex items-center justify-between border-b border-neutral-900/15 pb-3 text-[11px] tracking-[0.14em] uppercase">
                  <span className="text-neutral-500">
                    <strong className="font-medium text-neutral-900">
                      {event.id}
                    </strong>{' '}
                    / Event Category
                  </span>

                  <span className="text-neutral-400">Kenya</span>
                </div>

                <div className="mb-6 aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={event.img}
                    alt={event.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                <h3 className="mb-3 text-xl font-normal tracking-[-0.02em] text-neutral-900 md:text-2xl">
                  {event.name}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  {event.description}
                </p>

                <p className="mt-auto border-t border-neutral-900/15 pt-4 text-xs leading-relaxed text-neutral-500">
                  {event.examples}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION CAPABILITIES */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">

          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-neutral-900/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                From Concept to Execution
              </span>

              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
                Everything Your Event Needs
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-neutral-600">
              Our services work together to create a seamless event, from the
              first planning conversation to the final pack-down.
            </p>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-neutral-900/15 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-r border-b border-neutral-900/15 bg-amber-100 p-6 md:p-8"
              >
                <h3 className="mb-3 text-lg font-normal text-neutral-900">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-600">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="bg-neutral-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">

          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Let's Make It Happen
            </span>

            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Planning Something Special?
            </h2>

            <p className="text-base leading-relaxed text-neutral-300">
              Tell us what you have in mind. Whether it is a corporate
              gathering, wedding, concert or private celebration, we can help
              shape the right event solution for your needs and budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="border border-[#f9f9f8] bg-amber-100 px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Plan Your Event &rarr;
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
