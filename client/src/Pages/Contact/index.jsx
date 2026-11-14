import React, { useState } from 'react';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Party Enquiry',
    message: '',
  });

  const [sent, setSent] = useState(false);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      platform: 'WhatsApp Chat',
      handle: '+254 712 345 678',
      desc: 'Instant replies for bookings & rush setups',
      href: 'https://wa.me/254712345678',
      badge: 'Fastest Response',
    },
    {
      platform: 'Instagram',
      handle: '@staxxhyper.events',
      desc: 'Explore daily setup reels & theme inspiration',
      href: 'https://instagram.com',
      badge: 'Visual Gallery',
    },
    {
      platform: 'TikTok',
      handle: '@staxxevents.kids',
      desc: 'Behind-the-scenes magic & bouncy castle walkthroughs',
      href: 'https://tiktok.com',
      badge: 'Video Reels',
    },
    {
      platform: 'Facebook',
      handle: 'Staxx Hyper Kids Events',
      desc: 'Parent reviews, event albums & community updates',
      href: 'https://facebook.com',
      badge: 'Community',
    },
  ];

  return (
    <div className="bg-teal-100 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Kids Events</span>
            <span>Nairobi Dispatch &bull; Direct Channels</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Get in Touch <br />
              <span className="text-neutral-500">With Staxx</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Whether you&apos;re planning a birthday in Karen, renting
              equipment in Runda, or organizing a school fun day&mdash;our
              Nairobi event planners are ready to chat.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CONTACT DETAILS BAR */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 divide-y divide-neutral-900/15 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="py-10 md:pr-10">
              <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                [ Direct Email ]
              </span>
              <a
                href="mailto:info@staxx.events"
                className="block text-xl font-normal tracking-[-0.015em] text-neutral-900 no-underline transition-opacity hover:opacity-65 md:text-2xl"
              >
                info@staxx.events
              </a>
              <span className="mt-2 block text-xs tracking-[0.06em] text-neutral-500">
                Replies within 2 hours
              </span>
            </div>

            <div className="py-10 md:px-10">
              <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                [ Phone / WhatsApp ]
              </span>
              <a
                href="tel:+254712345678"
                className="block text-xl font-normal tracking-[-0.015em] text-neutral-900 no-underline transition-opacity hover:opacity-65 md:text-2xl"
              >
                +254 (0) 712 345 678
              </a>
              <span className="mt-2 block text-xs tracking-[0.06em] text-neutral-500">
                Mon &ndash; Sun: 8:00 AM &ndash; 8:00 PM EAT
              </span>
            </div>

            <div className="py-10 md:pl-10">
              <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                [ Headquarters &amp; Warehouse ]
              </span>
              <p className="text-xl font-normal tracking-[-0.015em] text-neutral-900 md:text-2xl">
                Karen &amp; Westlands, Nairobi
              </p>
              <span className="mt-2 block text-xs tracking-[0.06em] text-neutral-500">
                Equipment Showroom by Appointment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL MEDIA CARDS GRID */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12">
            <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
              [ Social Channels ]
            </span>
            <h2 className="text-3xl font-normal tracking-[-0.02em] leading-[1.15] text-neutral-900 md:text-4xl">
              Connect With Us Online
            </h2>
          </div>

          <div className="grid grid-cols-1 border-t border-l border-neutral-900/15 bg-teal-100 sm:grid-cols-2 lg:grid-cols-4">
            {socialLinks.map((soc) => (
              <a
                key={soc.platform}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between border-r border-b border-neutral-900/15 p-8 no-underline transition-colors duration-200 hover:bg-neutral-900 hover:text-[#f9f9f8]"
              >
                <div>
                  <div className="mb-8 flex items-center justify-between border-b border-neutral-900/15 pb-3 text-[10px] tracking-[0.14em] text-neutral-500 uppercase group-hover:border-[#f9f9f8]/20 group-hover:text-neutral-300">
                    <span>{soc.badge}</span>
                    <span className="text-sm font-light transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-xl font-normal tracking-[-0.01em] text-neutral-900 group-hover:text-[#f9f9f8]">
                    {soc.platform}
                  </h3>
                  <p className="mt-1 text-xs font-medium tracking-[0.06em] text-neutral-500 group-hover:text-neutral-300">
                    {soc.handle}
                  </p>
                </div>

                <p className="mt-8 text-sm leading-relaxed text-neutral-600 group-hover:text-neutral-300">
                  {soc.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CONTACT FORM & LOCATION INFO SECTION */}
      <section className="border-b border-neutral-900/15 bg-teal-100">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Form Column */}
            <div className="lg:col-span-8">
              {sent ? (
                <div className="space-y-8 border border-neutral-900 bg-teal-100 p-8 md:p-14">
                  <div className="inline-flex items-center gap-2 border border-neutral-900/30 px-3.5 py-1 text-[11px] tracking-[0.14em] text-neutral-900 uppercase">
                    <span>✓ Message Sent Successfully</span>
                  </div>

                  <h2 className="text-3xl font-normal tracking-[-0.02em] leading-tight text-neutral-900 md:text-4xl">
                    Thanks for Reaching Out,{' '}
                    <span className="text-neutral-500">{formData.name}</span>!
                  </h2>

                  <p className="text-base leading-relaxed text-neutral-600">
                    We have received your inquiry regarding{' '}
                    <strong className="font-medium text-neutral-900">
                      {formData.subject}
                    </strong>{' '}
                    and will get back to you via email or WhatsApp within 2
                    hours.
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="cursor-pointer border border-neutral-900 bg-neutral-900 px-6 py-3.5 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase transition-colors hover:bg-transparent hover:text-neutral-900"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-8 border border-neutral-900/15 bg-teal-100 p-8 md:p-12"
                >
                  <div className="flex items-center justify-between border-b border-neutral-900/15 pb-4">
                    <h2 className="text-2xl font-normal tracking-[-0.015em] text-neutral-900 md:text-3xl">
                      Drop Us a Note
                    </h2>
                    <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                      [ Send a Direct Message ]
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="block text-[11px] font-medium tracking-[0.14em] text-neutral-600 uppercase">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Brenda Akinyi"
                        className="w-full border border-neutral-900/20 bg-teal-100 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-medium tracking-[0.14em] text-neutral-600 uppercase">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +254 712 345 678"
                        className="w-full border border-neutral-900/20 bg-teal-100 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-medium tracking-[0.14em] text-neutral-600 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. brenda@example.com"
                        className="w-full border border-neutral-900/20 bg-teal-100 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[11px] font-medium tracking-[0.14em] text-neutral-600 uppercase">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full border border-neutral-900/20 bg-teal-100 px-4 py-3.5 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
                      >
                        <option>General Party Enquiry</option>
                        <option>Bouncy Castle &amp; Equipment Rental</option>
                        <option>School &amp; Estate Fun Day</option>
                        <option>Custom Theme Design</option>
                        <option>Vendor &amp; Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium tracking-[0.14em] text-neutral-600 uppercase">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event date, location in Nairobi, guest count, or equipment needs..."
                      className="w-full border border-neutral-900/20 bg-teal-100 px-4 py-3.5 text-sm text-neutral-900 placeholder-neutral-400 focus:border-neutral-900 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer border border-neutral-900 bg-neutral-900 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
                  >
                    Send Message &rarr;
                  </button>
                </form>
              )}
            </div>

            {/* Right Info & Quick Links Column */}
            <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-4">
              {/* Service Zones Card */}
              <div className="space-y-5 border border-neutral-900/15 bg-teal-100 p-8">
                <div className="border-b border-neutral-900/15 pb-4">
                  <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                    [ Service Zones ]
                  </span>
                </div>

                <h3 className="text-xl font-normal tracking-[-0.01em] text-neutral-900">
                  Where We Operate
                </h3>

                <p className="text-sm leading-relaxed text-neutral-600">
                  We provide full-service delivery, professional setup, and
                  post-party pack-down across Nairobi and neighboring counties.
                </p>

                <ul className="space-y-2.5 border-t border-neutral-900/10 pt-4 text-xs tracking-[0.06em] text-neutral-700">
                  <li>✓ Karen &amp; Lang&apos;ata</li>
                  <li>✓ Runda &amp; Muthaiga</li>
                  <li>✓ Lavington &amp; Kilimani</li>
                  <li>✓ Kileleshwa &amp; Westlands</li>
                  <li>✓ Syokimau &amp; Kitengela</li>
                  <li>✓ Kiambu Road &amp; Ruaka</li>
                </ul>
              </div>

              {/* Instant WhatsApp Card */}
              <div className="space-y-5 border border-neutral-900 bg-neutral-900 p-8 text-[#f9f9f8]">
                <span className="block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                  [ Prefer Instant Chat? ]
                </span>
                <h3 className="text-xl font-normal tracking-[-0.01em] leading-snug">
                  Chat Directly on WhatsApp
                </h3>
                <p className="text-xs leading-relaxed text-neutral-300">
                  Skip the email forms and talk immediately with our Nairobi
                  dispatch team for same-day equipment check or weekend
                  bookings.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/254712345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-[#f9f9f8] bg-teal-100 py-3.5 text-center text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors hover:bg-transparent hover:text-[#f9f9f8]"
                  >
                    Open WhatsApp Chat
                  </a>
                  <a
                    href="/booking"
                    onClick={(e) => handleLinkClick(e, '/booking')}
                    className="block w-full border border-[#f9f9f8]/30 bg-transparent py-3 text-center text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors hover:border-[#f9f9f8]"
                  >
                    Submit Full Booking Enquiry &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}