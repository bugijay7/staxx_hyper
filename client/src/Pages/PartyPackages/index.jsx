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
            <span>Staxx Hyper Events</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Events Across Kenya · Planning · Production · Experiences
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Events <br />
              <span className="text-white/65">We Do</span>
            </h1>

            <p className=" border border-white/10 bg-transparentp-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              From corporate conferences and product launches to weddings,
              concerts and private celebrations, we bring people together
              through creative planning, event styling and professional
              production.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
          <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> One Partner. Every Occasion.
          </span>

          <p className="max-w-2xl text-xs leading-relaxed text-[#C7C3C9] md:text-right md:text-sm">
            Whatever the occasion, we help bring it to life with event
            coordination, audiovisual production, décor, entertainment and
            equipment solutions.
          </p>
        </div>
      </section>

      {/* 3. EVENT CATEGORIES */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-8 border-b border-white/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                08 Event Categories
              </span>

              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                What Are You Celebrating? <span className="text-[#F5D033]">&#10022;</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#B5B0B8] md:text-right">
              Explore the occasions we cater for. Each event is shaped around
              your audience, objectives, style and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col  border border-white/15 bg-[#141016] p-4 transition-all duration-200 hover:border-[#F5D033]/70"
              >
                <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3 text-[11px] tracking-[0.16em] uppercase">
                  <span className="text-[#9E9A9F]">
                    <strong className="font-bold text-[#F5D033]">
                      {event.id}
                    </strong>{' '}
                    / Event Category
                  </span>

                  <span className=" bg-white/10 px-2.5 py-0.5 text-[10px] text-white/80">
                    Kenya
                  </span>
                </div>

                <div className="mb-5 aspect-[4/5] w-full overflow-hidden  border border-white/10 bg-[#1B171E]">
                  <img
                    src={event.img}
                    alt={event.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                <h3 className="font-display-condensed mb-3 text-2xl font-normal tracking-wide text-white transition-colors duration-200 group-hover:text-[#F5D033]">
                  {event.name}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-[#C7C3C9]">
                  {event.description}
                </p>

                <p className="mt-auto border-t border-white/10 pt-4 text-xs leading-relaxed text-[#9E9A9F]">
                  {event.examples}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCTION CAPABILITIES */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <div className="mb-14 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:flex-row md:items-end">
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                From Concept to Execution
              </span>

              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Everything Your Event Needs
              </h2>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-[#B5B0B8]">
              Our services work together to create a seamless event, from the
              first planning conversation to the final pack-down.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className=" border border-white/15 bg-[#141016] p-7 transition-colors duration-200 hover:border-[#F5D033]/60 md:p-8"
              >
                <div className="mb-4 inline-flex h-8 w-8 items-center justify-center  bg-white/10 text-xs text-[#F5D033]">
                  &#10022;
                </div>
                <h3 className="font-display-condensed mb-3 text-2xl font-normal tracking-wide text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#B5B0B8]">
                  {service.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Let's Make It Happen <span className="text-[#D4A800]">&#10022;</span>
            </span>

            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Planning Something Special?
            </h2>

            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Tell us what you have in mind. Whether it is a corporate
              gathering, wedding, concert or private celebration, we can help
              shape the right event solution for your needs and budget.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="group inline-flex items-center gap-3  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Plan Your Event &rarr;</span>
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
