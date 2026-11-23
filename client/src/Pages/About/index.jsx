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
    <div className="min-h-screen bg-[#0F2A2A] pt-10 font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E] md:pt-18">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      `}</style>

      {/* 1. EDITORIAL HERO SECTION */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 pt-4 pb-16 md:px-10 md:pt-4 md:pb-24">
          <div
            className="mb-14 grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]"
            data-aos="fade-up"
          >
            <h1 className="font-display-condensed pt-10 text-4xl font-normal leading-[0.94] text-white sm:text-6xl md:pt-0 lg:text-[5.25rem]">
              AV production, <br />
              <span className="text-white/65">Event styling</span>
            </h1>
          </div>

          {/* Hero Visual Grid */}
          <div
            className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_1fr]"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative overflow-hidden  border border-white/10 bg-[#141016]">
              <img
                src={Hero}
                alt="Staxx-HyperKids integrated audiovisual staging and event styling in Nairobi"
                className="aspect-[16/10] h-full w-full object-cover"
              />
              <div className="border-t border-white/10 bg-[#141016] px-6 py-3.5 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Technical Production &amp; Spatial Styling &bull; Nairobi, Kenya
              </div>
            </div>

            <div className="flex flex-col justify-between overflow-hidden  border border-white/15 bg-[#141016]">
              <div className="space-y-4 p-8 md:p-10">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Who We Are
                </span>
                <h2 className="font-display-condensed text-2xl font-normal leading-[1.08] tracking-wide text-white md:text-3xl">
                  Styling and technical production under one roof.
                </h2>
                <p className="text-xs leading-relaxed text-[#C7C3C9] md:text-sm">
                  Based in Nairobi, Staxx-HyperKids delivers end-to-end event
                  infrastructure—from corporate sound, LED screens, and staging
                  to bespoke d&eacute;cor, themed children&rsquo;s parties, and
                  event equipment rentals.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 bg-[#1A161D] p-6 text-xs font-medium tracking-[0.06em] text-white">
                <p className="mb-1 text-[11px]">
                  <strong className="font-bold tracking-[0.14em] text-[#F5D033] uppercase">
                    Office Location: <br />
                  </strong>{' '}
                  Commerce House, Nairobi, Kenya
                </p>
                <p className="text-[11px]">
                  <strong className="font-bold tracking-[0.14em] text-[#F5D033] uppercase">
                    Counties Served: <br />
                  </strong>{' '}
                  Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HISTORY & HOW IT STARTED */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-10 md:py-24">
          <div
            className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.45fr] lg:gap-20"
            data-aos="fade-up"
          >
            {/* Left Column: Editorial Header & Featured Image */}
            <div className="lg:sticky lg:top-24">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-[#F5D033]" />
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#F5D033] uppercase">
                  History &amp; Origin &bull; Est. 2026
                </span>
              </div>

              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Technical production and{' '}
                <span className="text-white/65">event styling</span> in Kenya
              </h2>

              <figure className="mt-8">
                <div className="aspect-[16/10] w-full overflow-hidden  border border-white/10 bg-[#1A161C]">
                  <img
                    src={Audiovisual}
                    alt="Staxx production team executing large scale event setup in Nairobi"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between border-b border-white/15 pb-2.5 text-xs text-[#9E9A9F]">
                  <span>On-site production &amp; spatial setup</span>
                  <span className="font-semibold text-[#F5D033]">Nairobi, KE</span>
                </figcaption>
              </figure>
            </div>

            {/* Right Column: Article Body */}
            <article className="space-y-7 p-4 text-xs leading-[1.8] text-[#C7C3C9] md:text-sm lg:border-l lg:border-white/10 lg:pl-14">
              {/* Lead Paragraph with Drop Cap */}
              <p className="first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:text-6xl first-letter:font-bold first-letter:leading-none first-letter:text-[#F5D033]">
                Founded in 2026 by{' '}
                <strong className="font-semibold text-white">
                  Bryan Karanja
                </strong>{' '}
                and{' '}
                <strong className="font-semibold text-white">
                  Dan Njuguna
                </strong>
                , Staxx-HyperKids brings together complementary hands-on experience
                in{' '}
                <span className="font-medium text-white underline decoration-[#F5D033]/60 underline-offset-4">
                  audiovisual operations
                </span>
                , event d&eacute;cor, and children&rsquo;s party production.
              </p>

              <p>
                The founders recognised that event hosts, corporates, and families
                frequently need both{' '}
                <span className="font-medium text-white">
                  dependable technical production
                </span>{' '}
                and{' '}
                <span className="font-medium text-white">
                  thoughtful spatial styling
                </span>
                &mdash;yet were forced to split budgets and logistics across
                disconnected sound suppliers, decorators, and equipment hire vendors.
              </p>

              {/* Editorial Pull-Quote */}
              <blockquote className="relative z-10 my-8  border-l-4 border-[#F5D033] bg-transparent py-4 pl-6 pr-5">
                <p className="text-base font-medium italic leading-relaxed text-white md:text-lg">
                  &ldquo;One coordinated provider delivering seamless setup,
                  consistent quality control, and practical on-site execution.&rdquo;
                </p>
              </blockquote>

              <p>
                Staxx-HyperKids was formed to bring these disciplines together under
                one roof, serving events across{' '}
                <span className="font-medium text-white">
                  Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a, and Kajiado
                </span>{' '}
                counties.
              </p>

              {/* Quick Editorial Footnote / Coverage Strip */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#9E9A9F]">
                    Established
                  </span>
                  <span className="font-display-condensed mt-1 block text-2xl font-normal text-white">
                    2024
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#9E9A9F]">
                    Coverage
                  </span>
                  <span className="font-display-condensed mt-1 block text-2xl font-normal text-white">
                    6 Counties
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.14em] text-[#9E9A9F]">
                    Focus
                  </span>
                  <span className="font-display-condensed mt-1 block text-2xl font-normal text-[#F5D033]">
                    AV &amp; Styling
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div
            className="grid grid-cols-1 items-stretch overflow-hidden  border border-white/15 bg-[#141016] lg:grid-cols-[1.2fr_1fr]"
            data-aos="fade-up"
          >
            <div className="flex flex-col justify-between divide-y divide-white/10 border-b border-white/10 lg:border-r lg:border-b-0">
              <div className="p-8 md:p-12">
                <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Our Mission
                </span>
                <h3 className="text-lg font-normal tracking-[-0.015em] leading-[1.35] text-white md:text-2xl">
                  To create memorable, well-executed events by combining
                  creative design, dependable technology, and attentive service.
                </h3>
              </div>

              <div className="p-8 md:p-12">
                <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Our Vision
                </span>
                <h3 className="text-lg font-normal tracking-[-0.015em] leading-[1.35] text-white md:text-2xl">
                  To become a trusted, multi-disciplinary events and
                  experiential solutions brand in Kenya, known for creativity,
                  technical reliability, and seamless delivery.
                </h3>
              </div>
            </div>

            <div className="overflow-hidden bg-[#1B171E]">
              <img
                src={Lighting}
                alt="Bespoke event styling, lighting and celebration setup"
                className="h-[320px] w-full object-cover md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE PRINCIPLES */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12" data-aos="fade-up">
            <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
              <span>&#10022;</span> Operational Standards
            </span>
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val, index) => (
              <div
                key={val.no}
                className="flex flex-col justify-between  border border-white/15 bg-[#141016] p-7 transition-colors duration-200 hover:border-[#F5D033]/60"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <span className="mb-6 block border-b border-white/10 pb-3 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                    [ {val.no} ]
                  </span>
                  <h3 className="font-display-condensed mb-3 text-2xl font-normal tracking-wide text-white">
                    {val.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-[#B5B0B8]">
                    {val.desc}
                  </p>
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden  border border-white/10 bg-[#1B171E]">
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
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div
            className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
            data-aos="fade-up"
          >
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Differentiation
              </span>
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Why Clients Choose Staxx-HyperKids
              </h2>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            data-aos="fade-up"
          >
            {advantagePoints.map((point, index) => (
              <div
                key={point.no}
                className="flex flex-col justify-between  border border-white/15 bg-[#141016] p-8 transition-colors duration-200 hover:border-[#F5D033]/60 md:p-9"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div>
                  <span className="mb-4 inline-block  bg-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-[#F5D033] uppercase">
                    {point.no}
                  </span>
                  <h3 className="font-display-condensed mb-3 text-2xl font-normal tracking-wide text-white">
                    {point.title}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-[#C7C3C9]">
                    {point.desc}
                  </p>
                </div>
                <div className="aspect-[16/10] w-full overflow-hidden  border border-white/10 bg-[#1B171E]">
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
            className="mt-12  border border-white/15 bg-[#141016] p-8 md:p-10"
            data-aos="fade-up"
          >
            <span className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
              <span>&#10022;</span> Clients &amp; Sectors We Serve
            </span>
            <div className="flex flex-wrap gap-3">
              {clientSectors.map((sector) => (
                <span
                  key={sector}
                  className=" border border-white/15 bg-[#1A161D] px-4 py-2 text-xs font-medium tracking-[0.06em] text-white/90"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CO-FOUNDERS */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div
            className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end"
            data-aos="fade-up"
          >
            <div>
              <span className="mb-3 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Founding Leadership
              </span>
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Meet the Co-Founders
              </h2>
            </div>
            <p className="text-sm text-[#9E9A9F] md:text-base">
              Complementary leadership across technical production and creative styling.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder, index) => (
              <article
                key={founder.name}
                className="group overflow-hidden  border border-white/15 bg-[#141016] transition-all duration-200 hover:border-[#F5D033]/70"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-3.5 text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                  <span className="font-bold text-[#F5D033]">0{index + 1}</span>
                  <span>{founder.role}</span>
                </div>

                <div className="aspect-[16/11] w-full overflow-hidden bg-[#1B171E]">
                  <img
                    src={founder.img}
                    alt={`${founder.name} ${founder.role} at Staxx-HyperKids`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                <div className="border-t border-white/10 bg-[#141016] p-6 md:p-8">
                  <h3 className="font-display-condensed text-3xl font-normal tracking-wide text-white">
                    {founder.name}
                  </h3>
                  <p className="mt-1 mb-4 text-[11px] font-semibold tracking-[0.14em] text-[#F5D033] uppercase">
                    {founder.role}
                  </p>
                  <p className="text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                    {founder.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10  bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Start Planning <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h3 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Ready to plan your next event?
            </h3>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Reach out to our team at Commerce House, Nairobi to check date
              availability and request an itemized quote for AV, d&eacute;cor,
              kiddie parties, or equipment hire across Kenya.
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
