import React, { useState } from 'react';

const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Party Enquiry',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'sent' | 'error'

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script Web Apps
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setStatus('sent');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'General Party Enquiry',
      message: '',
    });
    setStatus('idle');
  };

  const socialLinks = [
    {
      platform: 'WhatsApp Chat',
      handle: '+254 722 580 012',
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

  const serviceZones = [
    "Karen & Lang'ata",
    'Runda & Muthaiga',
    'Lavington & Kilimani',
    'Kileleshwa & Westlands',
    'Syokimau & Kitengela',
    'Kiambu Road & Ruaka',
  ];

  return (
    <div className="min-h-screen bg-teal-900 pt-24 font-sans text-[#f4f4f2] antialiased selection:bg-white selection:text-[#141414] md:pt-32">
      <div className="mx-auto max-w-[1360px] px-6 md:px-14">
        {/* TOP SUBTLE META BAR */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] tracking-[0.06em] text-neutral-400">
        </div>

        {/* 1. OVERSIZED EDITORIAL HERO HEADING (Matching "Contact me") */}
        <header className="mb-16 md:mb-24">
          <h1 className="text-[14vw] font-bold tracking-[-0.045em] leading-[0.92] text-white sm:text-7xl md:text-[7.5rem] lg:text-[9.5rem]">
            Contact us
          </h1>
          <p className="mt-8 max-w-xl font-mono text-xs leading-relaxed text-white md:text-[13px]">
            Whether you&apos;re planning a birthday, renting equipment
          , or organizing a school fun day&mdash;our  event
            planners are ready to help.
          </p>
        </header>

        {/* 2. MAIN TWO-COLUMN EDITORIAL SPLIT (Details Left / Minimalist Underline Form Right) */}
        <section className="grid grid-cols-1 gap-16 pb-24 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Monospaced Direct Contact Details & Quick Actions */}
          <div className="space-y-10 font-mono text-xs leading-relaxed text-neutral-300 lg:col-span-5">
            {/* Email */}
            <div className="space-y-1">
              <a
                href="mailto:info@staxx.events"
                className="block text-sm text-white no-underline transition-opacity hover:opacity-65"
              >
                staxxhyperkids@gmail.com
              </a>
              <p className="text-[11px] text-black">
                Replies within 2 hours
              </p>
            </div>

            {/* Phones */}
            <div className="space-y-1">
              <a
                href="tel:+254780979777"
                className="block text-sm text-white no-underline transition-opacity hover:opacity-65"
              >
                +254 (0) 780 979 777
              </a>
              <a
                href="tel:+254722580012"
                className="block text-sm text-white no-underline transition-opacity hover:opacity-65"
              >
                +254 (0) 722 580 012
              </a>
              <p className="text-[11px] text-black">
                Mon &ndash; Sun: 8:00 AM &ndash; 8:00 PM EAT
              </p>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <p className="text-sm text-white">
                Commerce &amp; House
                <br />
                Westlands, Nairobi
              </p>
              <p className="text-[11px] text-black">
                Equipment Showroom by Appointment
              </p>
            </div>

            {/* Instant Chat & Full Booking Links */}
            <div className="space-y-4 border-t border-white/15 pt-8">
              <p className="text-[11px] tracking-[0.08em] text-black uppercase">
                Prefer Instant Chat?
              </p>
              <p className="max-w-xs text-[11px] leading-relaxed text-neutral-100">
                Skip the email forms and talk immediately with our Nairobi
                dispatch team for same-day equipment check or weekend bookings.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/254712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white px-5 py-2.5 font-mono text-[11px] font-semibold tracking-[0.12em] text-[#141414] uppercase no-underline transition-opacity hover:opacity-85"
                >
                  Open WhatsApp Chat
                </a>
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="inline-block border-b border-white/40 pb-1 font-mono text-[11px] tracking-[0.06em] text-white no-underline transition-colors hover:border-white"
                >
                  Submit Full Booking Enquiry &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimalist Bottom-Border Form (Matching Screenshot) */}
          <div className="lg:col-span-7">
            {status === 'sent' ? (
              <div className="space-y-8 border-t border-white/20 pt-8">
                <span className="inline-block font-mono text-xs tracking-[0.1em] text-neutral-400 uppercase">
                  ✓ Message Sent Successfully
                </span>

                <h2 className="text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
                  Thanks for reaching out,{' '}
                  <span className="text-neutral-400">{formData.name}</span>.
                </h2>

                <p className="font-mono text-xs leading-relaxed text-neutral-300 md:text-sm">
                  We have received your note regarding{' '}
                  <strong className="font-semibold text-white">
                    {formData.subject}
                  </strong>{' '}
                  and will reply to{' '}
                  <strong className="font-semibold text-white">
                    {formData.email}
                  </strong>{' '}
                  within 2 hours.
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="cursor-pointer bg-white px-7 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-[#141414] uppercase transition-opacity hover:opacity-85"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-lg font-medium tracking-[-0.01em] text-white">
                    Drop Us a Note
                  </h2>
                  <span className="font-mono text-[11px] text-white">
                    Send a Direct Message
                  </span>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-mono text-xs text-white">
                      Name <span className="text-amber-500">(required)</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Brenda Wairimu"
                      className="w-full border-b border-white/30 bg-transparent py-2.5 font-mono text-xs text-white placeholder-neutral-600  placeholder:text-white transition-colors focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-mono text-xs text-white">
                      Email <span className="text-amber-500">(required)</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. brenda@example.com"
                      className="w-full border-b border-white/30 bg-transparent py-2.5 font-mono text-xs text-white placeholder-neutral-600  placeholder:text-white transition-colors focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block font-mono text-xs text-white">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full cursor-pointer border-b border-white/30 bg-amber-500 py-2.5 font-mono text-xs text-white transition-colors focus:border-white focus:outline-none"
                  >
                    <option value="General Party Enquiry">
                      General Party Enquiry
                    </option>
                    <option value="Bouncy Castle & Equipment Rental">
                      Bouncy Castle &amp; Equipment Rental
                    </option>
                    <option value="School & Estate Fun Day">
                      School &amp; Estate Fun Day
                    </option>
                    <option value="Custom Theme Design">
                      Custom Theme Design
                    </option>
                    <option value="Vendor & Partnership">
                      Vendor &amp; Partnership
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block font-mono text-xs text-white">
                    Message{' '}
                    <span className="text-amber-500">(required)</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event date, location in Nairobi, guest count, or equipment needs..."
                    className="w-full resize-y border-b border-white/30 bg-transparent py-2.5 font-mono text-xs leading-relaxed text-white placeholder:text-white transition-colors focus:border-white focus:outline-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-red-400">
                    Something went wrong sending your note. Please try again or
                    reach out via WhatsApp.
                  </p>
                )}

                {/* Compact White Rectangular Submit Button (Matching Screenshot) */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="cursor-pointer bg-white px-8 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-[#141414] uppercase transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'SENDING...' : 'SUBMIT'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* 3. SOCIAL CHANNELS & SERVICE ZONES (Styled like the 3-column lower metadata strip in screenshot) */}
        <section className="border-t border-white/15 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 font-mono text-xs md:grid-cols-12">
            {/* Service Zones Column */}
            <div className="space-y-4 md:col-span-4">
              <p className="text-[11px] tracking-[0.08em] text-black font-extrabold uppercase">
                Where We Operate
              </p>
              <p className="text-[11px] leading-relaxed text-amber-500">
                Full-service delivery, professional setup, and post-party
                pack-down across Nairobi and neighboring counties.
              </p>
              <ul className="space-y-1.5 pt-1 text-neutral-300">
                {serviceZones.map((zone) => (
                  <li key={zone}>&mdash; {zone}</li>
                ))}
              </ul>
            </div>

            {/* Social Channels Columns */}
            <div className="md:col-span-8">
              <p className="mb-4 text-[11px] tracking-[0.08em] text-amber-500 uppercase font-extrabold">
                Connect With Us Online
              </p>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block border-t border-white/15 pt-4 no-underline transition-colors hover:border-white"
                  >
                    <div className="flex items-center justify-between text-[10px] tracking-[0.08em] text-red-100 underline  group-hover:text-neutral-300">
                      <span>{soc.badge}</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                    </div>
                    <h3 className="mt-2 font-sans text-base font-medium text-white">
                      {soc.platform}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-amber-500">
                      {soc.handle}
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed text-black group-hover:text-neutral-100">
                      {soc.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. BOLD BRAND WORDMARK FOOTER (Matching "amelia ander" in screenshot) */}
        <footer className="border-t border-white/15 pt-12 pb-12">
          <div className="overflow-hidden">
            <p className="text-[13.5vw] font-bold tracking-[-0.045em] leading-[0.9] lowercase text-white select-none sm:text-7xl md:text-[7rem] lg:text-[8.8rem]">
              Staxx Hyper
            </p>
          </div>

          <div className="mt-8 flex  flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500">
            <div className="flex items-center gap-6">
             
              <a
                href="mailto:info@staxx.events"
                className="border-b border-neutral-600 pb-0.5 text-neutral-100 no-underline hover:border-white hover:text-white"
              >
                staxxsounds@proton.me
              </a>
              <a
                href="mailto:hyperkidsevents@gmail.com"
                className="border-b border-neutral-600 pb-0.5 text-neutral-100 no-underline hover:border-white hover:text-white"
              >
                hyperkidsevents@gmail.com 
              </a>
              
            </div>
            <span className='text-amber-500'>Nairobi, Kenya &bull; Staxx Hyper Kids Events</span>
          </div>
        </footer>
      </div>
    </div>
  );
}