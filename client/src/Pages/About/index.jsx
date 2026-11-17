import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Audiovisual from '../../assets/audiovisual.jpeg';
import Backdrops from '../../assets/backdrops.jpg';
import Childrenparty from '../../assets/childrenparty.jpg';
import ConferenceSetup from '../../assets/conferencesetup.jpeg';
import Equipmentsetup from '../../assets/equipmentsetup.jpeg';
import Hero from '../../assets/corporategala.jpg';
import Lighting from '../../assets/lighting.jpg';
import Logistics from '../../assets/logistics.jpeg';


export default function About({ onNavigate }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const coreValues = [
    {
      no: '01',
      title: 'Technical Reliability & Hygiene',
      desc: 'Commercial-grade sound, LED screens, staging, and sanitized children’s play units inspected and tested prior to every dispatch.',
      img: Audiovisual,
    },
    {
      no: '02',
      title: 'Coordinated Styling & Production',
      desc: 'Unified event design where spatial styling, thematic décor, and audiovisual engineering are planned together rather than in silos.',
      img: Backdrops,
    },
    {
      no: '03',
      title: 'Dependable Site Logistics',
      desc: 'Strict load-in schedules, venue power assessments, and organized setup crews ensure every stage, tent, and backdrop is ready on time.',
      img: Logistics,
    },
    {
      no: '04',
      title: 'Transparent KES Quotations',
      desc: 'Clear, itemized proposals tailored to your brief, venue, and audience—with zero hidden transport or setup charges.',
      img: ConferenceSetup,
    },
  ];

  const advantagePoints = [
    {
      no: '01 • Integrated Delivery',
      title: 'One Coordinated Team',
      desc: 'Creative styling, décor, kiddie party setups, and technical audiovisual production managed by a single accountable provider.',
      img: Equipmentsetup,
    },
    {
      no: '02 • Founder-Led Specialisms',
      title: 'Complementary Leadership',
      desc: 'Direct oversight from co-founders specializing in AV/operations and event décor/children’s celebrations respectively.',
      img: ConferenceSetup,
    },
    {
      no: '03 • Tailored Execution',
      title: 'Brief & Venue Specific',
      desc: 'Practical on-site production calibrated to your venue dimensions, audience size, and technical requirements across six counties.',
      img: Logistics,
    },
  ];

  const founders = [
    {
      name: 'Bryan Karanja',
      role: 'Co-Founder | AV & Operations',
      bio: 'Leads audiovisual systems, sound engineering, LED and visual solutions, staging, technical production, fleet logistics, and on-site operational execution.',
      img: Audiovisual,
    },
    {
      name: 'Dan Njuguna',
      role: 'Co-Founder | Décor & Kiddie Events',
      bio: 'Leads creative direction, spatial event décor, bespoke styling, children’s celebrations, party concepts, and interactive kiddie-event experiences.',
      img: Childrenparty,
    },
  ];

  const clientSectors = [
    'Parents & Families',
    'Schools & Educational Institutions',
    'Corporates & Businesses',
    'Event Organisers & Planners',
    'Churches & Community Organisations',
    'Brands & Promotional Agencies',
    'Venues Needing AV, Décor or Equipment Hire',
  ];

  return (
    <div className="bg-white pt-10 font-sans text-teal-900 antialiased md:pt-18">
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-4 pb-16 md:px-10 md:pt-4 md:pb-24">
          

          <div
            className="mb-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]"
            data-aos="fade-up"
          >
            <h1 className="pt-10 md:pt-0 text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-teal-900 sm:text-6xl lg:text-[4.5rem]">
              AV production, <br />
              <span className="text-neutral-500">Event styling</span>
            </h1>

           
          </div>

          {/* Hero Visual Grid */}
          <div
            className="grid grid-cols-1  bg-white lg:grid-cols-[1.5fr_1fr]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden border-b border-neutral-900/15 bg-neutral-100 lg:border-r lg:border-b-0">
              <img
                src={Hero}
                alt="Staxx-HyperKids integrated audiovisual staging and event styling in Nairobi"
                className="aspect-[16/10] h-full w-full object-cover"
              />
              <div className="border-t border-neutral-900/15 bg-white px-6 py-3 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Technical Production &amp; Spatial Styling &bull; Nairobi, Kenya
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="space-y-4  p-2 md:p-12">
                <span className="block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  Who We Are
                </span>
                <h2 className="text-xl md:text-xl font-normal tracking-[-0.02em] leading-[1.2] text-teal-900">
                   Styling and technical production under one roof.
                </h2>
                <p className="text-xs md:text-sm leading-relaxed text-gray-900 md:text-base">
                  Based in Nairobi, Staxx-HyperKids delivers end-to-end event
                  infrastructure—from corporate sound, LED screens, and staging
                  to bespoke d&eacute;cor, themed children&rsquo;s parties, and
                  event equipment rentals.
                </p>
              </div>

              <div className="mt-5 md:mt-10space-y-3 bg-amber-600 border-t border-neutral-900/15 p-6 text-xs tracking-[0.06em] text-gray-900 font-bold">
                <p className="mb-1 text-[8px]">
                  <strong className="font-medium tracking-[0.12em] text-white uppercase">
                    Office Location: <br/>
                  </strong>{' '}
                  Commerce House, Nairobi, Kenya
                </p>
                <p className="text-[8px]">
                  <strong className="font-medium tracking-[0.12em] text-white uppercase">
                    Counties Served: <br/>
                  </strong>{' '}
                  Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HISTORY & HOW IT STARTED */}
<section className="border-b border-neutral-900/15 bg-amber-100">
  <div className="mx-auto max-w-[1440px] px-4 py-12 md:px-10 md:py-24">
    <div
      className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.45fr] lg:gap-20"
      data-aos="fade-up"
    >
      {/* Left Column: Editorial Header & Featured Image */}
      <div className="lg:sticky lg:top-24">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-teal-900" />
          <span className="text-[11px] font-semibold tracking-[0.18em] text-teal-900 uppercase">
            History &amp; Origin &bull; Est. 2026
          </span>
        </div>

        <h2 className="text-3xl font-light tracking-[-0.025em] leading-[1.12] text-black md:text-5xl">
          Technical production and{' '}
          <span className="font-normal italic text-teal-900">
            event styling
          </span>{' '}
          in Kenya
        </h2>

        <figure className="mt-8">
          <div className="aspect-[16/10] w-full overflow-hidden border border-neutral-900/15 bg-neutral-100">
            <img
              src={Audiovisual}
              alt="Staxx production team executing large scale event setup in Nairobi"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between border-b border-neutral-900/10 pb-2 text-xs text-neutral-900">
            <span>On-site production &amp; spatial setup</span>
            <span className="font-medium text-teal-950">Nairobi, KE</span>
          </figcaption>
        </figure>
      </div>

      {/* Right Column: Article Body */}
      <article className="space-y-7 p-4 text-xs md:text-sm leading-[1.8] text-black lg:border-l lg:border-neutral-900/15 lg:pl-14">
        {/* Lead Paragraph with Drop Cap */}
        <p className="first-letter:float-left first-letter:mr-3.5 first-letter:mt-1  first-letter:text-6xl first-letter:italic first-letter:font-semibold first-letter:leading-none first-letter:text-teal-900">
          Founded in 2026 by{' '}
          <strong className="font-semibold text-teal-900">
            Bryan Karanja
          </strong>{' '}
          and{' '}
          <strong className="font-semibold text-teal-900">
            Dan Njuguna
          </strong>
          , Staxx-HyperKids brings together complementary hands-on experience
          in{' '}
          <span className="font-medium text-teal-900 underline decoration-teal-900/30 underline-offset-4">
            audiovisual operations
          </span>
          , event d&eacute;cor, and children&rsquo;s party production.
        </p>

        <p>
          The founders recognised that event hosts, corporates, and families
          frequently need both{' '}
          <span className="font-medium text-teal-900">
            dependable technical production
          </span>{' '}
          and{' '}
          <span className="font-medium text-teal-900">
            thoughtful spatial styling
          </span>
          &mdash;yet were forced to split budgets and logistics across
          disconnected sound suppliers, decorators, and equipment hire vendors.
        </p>

        {/* Editorial Pull-Quote */}
        <blockquote className="my-8 border-l-2 border-teal-900 bg-white py-2 pl-6 pr-4 z-99 relative">
          <p className="text-base font-medium italic leading-relaxed text-teal-900 md:text-lg">
            &ldquo;One coordinated provider delivering seamless setup,
            consistent quality control, and practical on-site execution.&rdquo;
          </p>
        </blockquote>

        <p>
          Staxx-HyperKids was formed to bring these disciplines together under
          one roof, serving events across{' '}
          <span className="font-medium text-teal-900">
            Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a, and Kajiado
          </span>{' '}
          counties.
        </p>

        {/* Quick Editorial Footnote / Coverage Strip */}
        <div className="grid grid-cols-3 gap-4 border-t border-neutral-900/15 pt-6 text-sm">
          <div>
            <span className="block text-xs uppercase tracking-wider text-black">
              Established
            </span>
            <span className="mt-1 block font-semibold text-teal-900">2024</span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-black">
              Coverage
            </span>
            <span className="mt-1 block font-semibold text-teal-900">
              6 Counties
            </span>
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-black">
              Focus
            </span>
            <span className="mt-1 block font-semibold text-teal-900">
              AV &amp; Styling
            </span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* 3. MISSION & VISION */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div
            className="grid grid-cols-1 items-stretch border border-neutral-900/15 bg-white lg:grid-cols-[1.2fr_1fr]"
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-between divide-y divide-neutral-900/15 border-b border-neutral-900/15 lg:border-r lg:border-b-0">
              <div className="p-8 md:p-12">
                <span className="mb-4 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  Our Mission
                </span>
                <h3 className="text-sm md:text-xl font-normal tracking-[-0.015em] leading-[1.28] text-teal-900 md:text-3xl">
                  To create memorable, well-executed events by combining
                  creative design, dependable technology, and attentive service.
                </h3>
              </div>

              <div className="p-8 md:p-12">
                <span className="mb-4 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  Our Vision
                </span>
                <h3 className="text-sm md:text-xl font-normal tracking-[-0.015em] leading-[1.28] text-teal-900 md:text-3xl">
                  To become a trusted, multi-disciplinary events and
                  experiential solutions brand in Kenya, known for creativity,
                  technical reliability, and seamless delivery.
                </h3>
              </div>
            </div>

            <div className="overflow-hidden bg-neutral-100">
              <img
                src={Lighting}
                alt="Bespoke event styling, lighting and celebration setup"
                className="h-[320px] md:h-[390px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE PRINCIPLES */}
      <section className="border-b border-neutral-900/15 bg-teal-900">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12" data-aos="fade-up">
            <span className="mb-3 block text-[11px] font-bold tracking-[0.14em] text-amber-500 uppercase">
              Operational Standards
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-teal-100 md:text-4xl">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-neutral-900/15 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, index) => (
              <div
                key={val.no}
                className="flex flex-col justify-between border-r border-b border-neutral-900/15 bg-white p-8"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <span className="mb-6 block border-b border-neutral-900/15 pb-3 text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                    [ {val.no} ]
                  </span>
                  <h3 className="mb-3 text-lg font-medium tracking-[-0.01em] text-teal-900">
                    {val.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-900">
                    {val.desc}
                  </p>
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={val.img}
                    alt={val.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT SETS US APART & WHO WE SERVE */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div
            className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
            data-aos="fade-up"
          >
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                Differentiation
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-teal-900 md:text-4xl">
                Why Clients Choose Staxx-HyperKids
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 border-t border-l border-neutral-900/15 bg-white md:grid-cols-3"
            data-aos="fade-up"
          >
            {advantagePoints.map((point, index) => (
              <div
                key={point.no}
                className="flex flex-col justify-between border-r border-b border-neutral-900/15 p-8 md:p-10"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <span className="mb-4 block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                    {point.no}
                  </span>
                  <h3 className="mb-3 text-xl font-normal tracking-[-0.01em] text-teal-900">
                    {point.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-900">
                    {point.desc}
                  </p>
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={point.img}
                    alt={point.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Target Clients & Sectors Strip */}
          <div
            className="mt-12 border border-neutral-900/15 p-8 md:p-10"
            data-aos="fade-up"
          >
            <span className="mb-4 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
              Clients &amp; Sectors We Serve
            </span>
            <div className="flex flex-wrap gap-3">
              {clientSectors.map((sector) => (
                <span
                  key={sector}
                  className="border border-neutral-900/20 px-4 py-2 text-xs tracking-[0.06em] text-neutral-800"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CO-FOUNDERS */}
      <section className="border-b border-neutral-900/15 bg-amber-100">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div
            className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
            data-aos="fade-up"
          >
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                Founding Leadership
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-teal-900 md:text-4xl">
                Meet the Co-Founders
              </h2>
            </div>
            <p className="text-sm text-neutral-500 md:text-base">
              Complementary leadership across technical production and creative styling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder, index) => (
              <article
                key={founder.name}
                className="group border border-neutral-900/15 bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-center justify-between border-b border-neutral-900/15 px-6 py-3 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                  <span>0{index + 1}</span>
                  <span>{founder.role}</span>
                </div>

                <div className="aspect-[16/11] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={founder.img}
                    alt={`${founder.name} ${founder.role} at Staxx-HyperKids`}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                  />
                </div>

                <div className="border-t border-neutral-900/15 bg-white p-6 md:p-8">
                  <h3 className="text-2xl font-normal tracking-[-0.01em] text-teal-900">
                    {founder.name}
                  </h3>
                  <p className="mt-1 mb-4 text-[11px] font-medium tracking-[0.12em] text-neutral-500 uppercase">
                    {founder.role}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-900 md:text-base">
                    {founder.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-amber-600 text-[#f9f9f8]">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-teal-900 uppercase font-bold">
              Start Planning
            </span>
            <h3 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Ready to plan your next event?
            </h3>
            <p className="text-base leading-relaxed text-teal-900">
              Reach out to our team at Commerce House, Nairobi to check date
              availability and request an itemized quote for AV, d&eacute;cor,
              kiddie parties, or equipment hire across Kenya.
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
