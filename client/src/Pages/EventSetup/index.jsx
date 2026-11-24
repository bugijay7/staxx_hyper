import React, { useState } from 'react';
import { motion } from 'framer-motion';
import heroImg from '../../assets/hero.jpg';
import canopiesImg from '../../assets/canopies.jpeg';
import avImg from '../../assets/audiovisual.jpeg';
import backdropsImg from '../../assets/backdrops.jpg';
import cakeTableImg from '../../assets/caketable.jpg';

export default function EventSetup({ onNavigate }) {
  const [selectedSetupId, setSelectedSetupId] = useState('setup-01');

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const setupConfigurations = [
    {
      id: 'setup-01',
      code: '01',
      name: 'Stage, Truss & Audiovisual Rig',
      zone: 'Main Stage & Front-of-House',
      estimate: 'KES 95,000',
      summary:
        'Modular stage decking, line-array audio coverage, wireless microphones, and intelligent wash lighting calibrated for speeches, live bands, and awards.',
      specs: [
        'Modular stage platform with skirting and access steps',
        'Line-array sound system with digital mixing console',
        'Moving head and architectural stage lighting rig',
        'Dedicated sound engineer and lighting operator on site',
      ],
      img: avImg,
    },
    {
      id: 'setup-02',
      code: '02',
      name: 'Clear-Span Marquee & Grounding',
      zone: 'Outdoor & Compound Structures',
      estimate: 'KES 110,000',
      summary:
        'Weather-rated clear-span marquee structures with zero center poles, optional transparent or solid walls, sub-flooring, and safe anchoring.',
      specs: [
        'Unobstructed clear-span interior for seating and staging',
        'Wind and rain protection with optional side walls',
        'Levelled flooring and clean entry walkways',
        'Site survey and structural load-in crew included',
      ],
      img: canopiesImg,
    },
    {
      id: 'setup-03',
      code: '03',
      name: 'Banquet, Lounge & Décor Styling',
      zone: 'Guest Seating & Focal Zones',
      estimate: 'KES 55,000',
      summary:
        'Coordinated table layouts, banquet and cocktail seating, custom backdrops, plinths, and floral or balloon accents aligned with your event palette.',
      specs: [
        'Banquet tables, cocktail tables, and guest seating',
        'Custom backdrop structure and focal styling zones',
        'Table linens, runners, and ambient accent lighting',
        'Pre-event walkthrough and styling sign-off',
      ],
      img: backdropsImg,
    },
    {
      id: 'setup-04',
      code: '04',
      name: 'Power Backup & On-Site Crew',
      zone: 'Technical & Logistics Support',
      estimate: 'KES 40,000',
      summary:
        'Silent standby power coordination, cable management, safety checks, and scheduled load-out so your event runs smoothly from start to finish.',
      specs: [
        'Standby generator and power distribution check',
        'Safe cable runs and stage perimeter management',
        'On-standby technical and logistics coordinator',
        'Post-event strike, dismantling, and site cleanup',
      ],
      img: cakeTableImg,
    },
  ];

  const activeSetup =
    setupConfigurations.find((item) => item.id === selectedSetupId) ||
    setupConfigurations[0];

  const timelineSteps = [
    {
      phase: 'Phase 01',
      title: 'Site Assessment & Floorplan',
      desc: 'We review venue dimensions, ground conditions, access routes, and power points across Nairobi, Kiambu, Nakuru, Machakos, Murang’a, and Kajiado.',
    },
    {
      phase: 'Phase 02',
      title: 'Load-In & Structural Build',
      desc: 'Our crew erects tents, stages, trusses, and backdrops ahead of schedule with safety anchoring and clean cable routing.',
    },
    {
      phase: 'Phase 03',
      title: 'AV Calibration & Styling',
      desc: 'Engineers test sound levels, screens, and lighting cues while styling teams complete table layouts and focal installations.',
    },
    {
      phase: 'Phase 04',
      title: 'Live Standby & Strike',
      desc: 'Technical staff stay on standby during the event and manage orderly dismantling and load-out once guests depart.',
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
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16">
          

          <div className="grid grid-cols-1 items-end gap-10 pb-12 lg:grid-cols-[1.45fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[4.5rem]">
                Complete event setup, <br />
                <span className="text-[#F5D033]">built to spec.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-between gap-8 lg:border-l lg:border-white/15 lg:pl-10"
            >
              <p className="text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                From structural marquee assembly and stage rigging to sound
                calibration, table styling, and standby power, our crews handle
                every physical layer of your event across Kenya.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="group inline-flex items-center gap-3 bg-white py-1.5 pr-1.5 pl-4 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-[1.02] md:text-[11px]"
                >
                  <span>Book Event Setup</span>
                  <span className="flex h-6 w-6 items-center justify-center bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/event-equipment-supplies"
                  onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                  className="group inline-flex items-center gap-3 border border-white/15 bg-transparent py-1.5 pr-1.5 pl-4 text-xs font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase no-underline transition-colors hover:border-white hover:text-white md:text-[11px]"
                >
                  <span>Equipment Catalog</span>
                  <span className="flex h-6 w-6 items-center justify-center bg-white/15 text-xs text-white">
                    &rarr;
                  </span>
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="relative aspect-[16/9] max-h-[560px] w-full overflow-hidden border border-white/10 bg-[#18141A]"
          >
            <img
              src={heroImg}
              alt="Full-scale event stage, lighting, and venue setup by Staxx Events"
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 grid grid-cols-1 gap-3 border-t border-white/15 pt-5 text-xs tracking-[0.06em] text-[#9E9A9F] sm:grid-cols-3"
          >
            <span>&bull; Pre-event sound, lighting &amp; power checks</span>
            <span className="sm:text-center">
              &bull; Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
            </span>
            <span className="sm:text-right">&bull; Co-ordinated load-in &amp; clean strike</span>
          </motion.div>
        </div>
      </section>

      {/* 2. INTERACTIVE SETUP MODULES */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col justify-between gap-6 border-b border-white/15 pb-8 lg:flex-row lg:items-end"
          >
            <div>
              
              <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
                Select a setup layer to inspect scope
              </h2>
            </div>

            <div className="flex flex-wrap gap-5">
              {setupConfigurations.map((setup) => {
                const isSelected = setup.id === selectedSetupId;
                return (
                  <button
                    key={setup.id}
                    type="button"
                    onClick={() => setSelectedSetupId(setup.id)}
                    aria-pressed={isSelected}
                    className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                      isSelected
                        ? 'border-[#F5D033] font-medium text-[#F5D033]'
                        : 'border-transparent text-[#9E9A9F] hover:text-white'
                    }`}
                  >
                    {setup.code} &bull; {setup.zone.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            {/* Active Setup Details */}
            <motion.div
              key={activeSetup.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col justify-between border border-white/15 bg-[#141016] p-8"
            >
              <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 text-[11px] tracking-[0.14em] uppercase">
                  <span className="font-medium text-white">
                    Layer {activeSetup.code} &bull; {activeSetup.zone}
                  </span>
                  <span className="text-[#C7C3C9]">{activeSetup.estimate} / est.</span>
                </div>

                <h3 className="mb-4 font-display-condensed text-2xl font-normal tracking-wide text-white md:text-3xl">
                  {activeSetup.name}
                </h3>

                <p className="mb-8 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                  {activeSetup.summary}
                </p>

                <ul className="mb-10 flex flex-col gap-3.5 border-t border-white/15 pt-6 text-sm text-[#C7C3C9]">
                  {activeSetup.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1 w-1 shrink-0 bg-[#F5D033]" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-6">
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="group inline-flex items-center gap-3 bg-white py-2.5 pr-2.5 pl-6 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-[1.02]"
                >
                  <span>Include in Quote &rarr;</span>
                  <span className="flex h-6 w-6 items-center justify-center bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
                <a
                  href="/contact"
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="border-b border-white/15 pb-0.5 text-xs font-medium tracking-[0.12em] text-[#C7C3C9] uppercase no-underline transition-opacity hover:opacity-55 hover:text-white"
                >
                  Schedule Site Check
                </a>
              </div>
            </motion.div>

            {/* Active Setup Visual */}
            <motion.div
              key={`${activeSetup.id}-img`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45 }}
              className="lg:border-l lg:border-white/15 lg:pl-12"
            >
              <div className="aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#1A161C]">
                <img
                  src={activeSetup.img}
                  alt={activeSetup.name}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3 text-[10px] tracking-[0.14em] text-[#9E9A9F] uppercase">
                <span>{activeSetup.name}</span>
                <span>{activeSetup.zone}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. ON-SITE EXECUTION PHASES */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 max-w-2xl"
          >
           
            <h2 className="font-display-condensed text-4xl font-normal leading-[0.98] text-white md:text-5xl">
              How our crew sets up and runs your venue.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 border-t border-white/15 pt-10 md:grid-cols-2 lg:grid-cols-4">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`flex flex-col justify-between gap-6 border-b border-white/15 pb-8 md:border-b-0 md:pb-0 ${
                  idx > 0 ? 'md:border-l md:border-white/15 md:pl-8' : ''
                }`}
              >
                <span className="text-[11px] tracking-[0.14em] text-[#9E9A9F] uppercase">
                  {step.phase}
                </span>
                <div>
                  <h3 className="mb-3 font-display-condensed text-lg font-medium tracking-wide text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#C7C3C9]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="bg-[#0F2A2A] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-[#0D0A0E]/70 uppercase">
              Venue &amp; Technical Planning
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-5xl">
              Need a tailored setup plan for your venue?
            </h2>
            <p className="text-base leading-relaxed text-[#0D0A0E]/80 md:text-sm">
              Share your guest count, venue type, and event date with our team
              at Commerce House, Nairobi for a clear setup estimate and
              schedule.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3 bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform hover:scale-[1.02]"
            >
              <span>Request Setup Quote</span>
              <span className="flex h-7 w-7 items-center justify-center bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="group inline-flex items-center gap-3 border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors hover:border-[#0D0A0E]"
            >
              <span>Contact Our Team</span>
              <span className="flex h-7 w-7 items-center justify-center bg-[#0F2A2A] text-xs text-white">
                &rarr;
              </span>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}