import React, { useState } from 'react';

const GOOGLE_SCRIPT_URL ='https://script.google.com/macros/s/AKfycbwL8Xbo3bBZzjcWc_XXUK9cWBr-rEPEos5xPevfKV9NXmgU4iNSU9VVSNpRaq3bFFbTAg/exec';

const MAX_MESSAGE_LENGTH = 500;

export default function Contact({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Party Enquiry',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'sent' | 'error'

  const validateField = (name, value) => {
    const trimmed = value.trim();
    switch (name) {
      case 'name':
        if (!trimmed) return 'Please enter your name.';
        if (trimmed.length < 2) return 'Name must be at least 2 characters.';
        return '';
      case 'email':
        if (!trimmed) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'message':
        if (!trimmed) return 'Please share a few details about your event.';
        if (trimmed.length < 10) {
          return 'Message must be at least 10 characters.';
        }
        if (value.length > MAX_MESSAGE_LENGTH) {
          return `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
        }
        return '';
      default:
        return '';
    }
  };

  const validateAll = () => {
    const nextErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });
    return !Object.values(nextErrors).some(Boolean);
  };

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValue =
      name === 'message' ? value.slice(0, MAX_MESSAGE_LENGTH) : value;

    setFormData((prev) => ({ ...prev, [name]: nextValue }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, nextValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAll()) return;

    setStatus('submitting');

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('sent');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('Apps Script error:', result.message);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
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
    setTouched({});
    setErrors({});
    setStatus('idle');
  };

  const socialLinks = [
    {
      platform: 'WhatsApp Chat',
      handle: '+254 780 979 777',
      desc: 'Instant replies for bookings & rush setups',
      href: 'https://wa.me/254780979777',
      badge: 'Fastest Response',
    },
    {
      platform: 'Instagram',
      handle: '@staxxhyper.events',
      desc: 'Explore daily setup reels & theme inspiration',
      href: 'https://instagram.com/staxxhyper.events',
      badge: 'Visual Gallery',
    },
    {
      platform: 'TikTok',
      handle: '@staxxevents.kids',
      desc: 'Behind-the-scenes magic & bouncy castle walkthroughs',
      href: 'https://tiktok.com/@staxxevents.kids',
      badge: 'Video Reels',
    },
    {
      platform: 'Facebook',
      handle: 'Staxx Hyper Kids Events',
      desc: 'Parent reviews, event albums & community updates',
      href: 'https://facebook.com/staxxhyperkidsevents',
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
    <div className="min-h-screen bg-[#0F2A2A] pt-24 font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E] md:pt-32">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      `}</style>

      <div className="mx-auto max-w-[1360px] px-6 md:px-14">
        {/* 1. OVERSIZED EDITORIAL HERO HEADING */}
        <header className="mb-16 border-b border-white/10 pb-12 md:mb-24">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            
          </div>
          <h1 className="font-display-condensed text-[14vw] font-normal leading-[0.9] text-white sm:text-7xl md:text-[7.5rem] lg:text-[9.5rem]">
            Contact us 
          </h1>
          <p className="mt-8 max-w-xl font-mono text-xs leading-relaxed text-[#C7C3C9] md:text-[13px]">
            A unified events, audiovisual production,
            <br />
            décor and party-supplies brand.
          </p>
        </header>

        {/* 2. MAIN TWO-COLUMN EDITORIAL SPLIT */}
        <section className="grid grid-cols-1 gap-16 pb-24 lg:grid-cols-12 lg:gap-12">
          {/* LEFT COLUMN: Monospaced Direct Contact Details & Quick Actions */}
          <div className="space-y-10 font-mono text-xs leading-relaxed text-[#C7C3C9] lg:col-span-5">
            {/* Email */}
            <div className="space-y-1">
              <a
                href="mailto:staxxhyperkids@gmail.com"
                className="block text-sm text-white no-underline transition-colors hover:text-[#F5D033]"
              >
                staxxhyperkids@gmail.com
              </a>
              <p className="text-[11px] text-[#9E9A9F]">
                Replies within 2 hours
              </p>
            </div>

            {/* Phones */}
            <div className="space-y-1">
              <a
                href="tel:+254780979777"
                className="block text-sm text-white no-underline transition-colors hover:text-[#F5D033]"
              >
                +254 (0) 780 979 777
              </a>
              <a
                href="tel:+254780979777"
                className="block text-sm text-white no-underline transition-colors hover:text-[#F5D033]"
              >
                +254 (0) 780 979 777
              </a>
              <p className="text-[11px] text-[#9E9A9F]">
                Mon &ndash; Sun: 8:00 AM &ndash; 8:00 PM EAT
              </p>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <p className="text-sm text-white">
                Commerce House
                <br />
                Westlands, Nairobi
              </p>
              <p className="text-[11px] text-[#9E9A9F]">
                Equipment Showroom by Appointment
              </p>
            </div>

            {/* Instant Chat & Full Booking Links */}
            <div className="space-y-4  border border-white/15 bg-[#141016] p-7">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#F5D033] uppercase">
                Prefer Instant Chat?
              </p>
              <p className="max-w-xs text-[11px] leading-relaxed text-[#C7C3C9]">
                Skip the email forms and talk immediately with our Nairobi
                dispatch team for same-day equipment check or weekend bookings.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="https://wa.me/254780979777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3  bg-white py-2 pr-2 pl-5 font-sans text-[11px] font-bold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                >
                  <span>Open WhatsApp Chat</span>
                  <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                    &rarr;
                  </span>
                </a>
                <a
                  href="/booking"
                  onClick={(e) => handleLinkClick(e, '/booking')}
                  className="inline-block border-b border-white/40 pb-1 font-mono text-[11px] tracking-[0.06em] text-white no-underline transition-colors hover:border-[#F5D033] hover:text-[#F5D033]"
                >
                  Submit Full Booking Enquiry &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Minimalist Bottom-Border Form with Validation */}
          <div className=" border border-white/15 bg-[#141016] p-8 md:p-12 lg:col-span-7">
            {status === 'sent' ? (
              <div className="space-y-8 pt-2">
                <span className="inline-flex items-center gap-2  bg-white/10 px-3.5 py-1 font-mono text-xs tracking-[0.1em] text-[#F5D033] uppercase">
                  ✓ Message Sent Successfully
                </span>

                <h2 className="font-display-condensed text-4xl font-normal tracking-wide text-white md:text-5xl">
                  Thanks for reaching out,{' '}
                  <span className="text-[#F5D033]">{formData.name}</span>.
                </h2>

                <p className="font-mono text-xs leading-relaxed text-[#C7C3C9] md:text-sm">
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
                    className="group inline-flex cursor-pointer items-center gap-3  bg-white py-2.5 pr-2.5 pl-6 font-sans text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                  >
                    <span>Send Another Message</span>
                    <span className="flex h-7 w-7 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                      &rarr;
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-10">
                <div className="flex items-baseline justify-between border-b border-white/15 pb-4">
                  <h2 className="font-display-condensed text-2xl font-normal tracking-wide text-white md:text-3xl">
                    Drop Us a Note
                  </h2>
                  <span className="font-mono text-[11px] text-[#9E9A9F]">
                    Send a Direct Message
                  </span>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-mono text-xs text-white"
                    >
                      Name <span className="text-[#F5D033]">(required)</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.name && errors.name)}
                      placeholder="e.g. Brenda Wairimu"
                      className={`w-full border-b bg-transparent py-2.5 font-mono text-xs text-white placeholder:text-white/35 transition-colors focus:outline-none ${
                        touched.name && errors.name
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/25 focus:border-[#F5D033]'
                      }`}
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1.5 font-mono text-[11px] text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-mono text-xs text-white"
                    >
                      Email <span className="text-[#F5D033]">(required)</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(touched.email && errors.email)}
                      placeholder="e.g. brenda@example.com"
                      className={`w-full border-b bg-transparent py-2.5 font-mono text-xs text-white placeholder:text-white/35 transition-colors focus:outline-none ${
                        touched.email && errors.email
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/25 focus:border-[#F5D033]'
                      }`}
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1.5 font-mono text-[11px] text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block font-mono text-xs text-white"
                  >
                    Subject
                  </label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full cursor-pointer border-b border-white/25 bg-[#141016] py-2.5 font-mono text-xs text-white transition-colors focus:border-[#F5D033] focus:outline-none"
                  >
                    <option
                      value="General Party Enquiry"
                      className="bg-[#141016] text-white"
                    >
                      General Party Enquiry
                    </option>
                    <option
                      value="Bouncy Castle & Equipment Rental"
                      className="bg-[#141016] text-white"
                    >
                      Bouncy Castle &amp; Equipment Rental
                    </option>
                    <option
                      value="School & Estate Fun Day"
                      className="bg-[#141016] text-white"
                    >
                      School &amp; Estate Fun Day
                    </option>
                    <option
                      value="Custom Theme Design"
                      className="bg-[#141016] text-white"
                    >
                      Custom Theme Design
                    </option>
                    <option
                      value="Vendor & Partnership"
                      className="bg-[#141016] text-white"
                    >
                      Vendor &amp; Partnership
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="contact-message"
                      className="font-mono text-xs text-white"
                    >
                      Message <span className="text-[#F5D033]">(required)</span>
                    </label>
                    <span
                      className={`font-mono text-[11px] ${
                        formData.message.length >= MAX_MESSAGE_LENGTH
                          ? 'text-[#F5D033]'
                          : 'text-[#9E9A9F]'
                      }`}
                    >
                      {formData.message.length}/{MAX_MESSAGE_LENGTH}
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={Boolean(touched.message && errors.message)}
                    placeholder="Tell us about your event date, location in Nairobi, guest count, or equipment needs..."
                    className={`w-full resize-y border-b bg-transparent py-2.5 font-mono text-xs leading-relaxed text-white placeholder:text-white/35 transition-colors focus:outline-none ${
                      touched.message && errors.message
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/25 focus:border-[#F5D033]'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <p className="mt-1.5 font-mono text-[11px] text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-red-400">
                    Something went wrong sending your note. Please try again or
                    reach out via WhatsApp.
                  </p>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex cursor-pointer items-center gap-3  bg-white py-2.5 pr-2.5 pl-7 font-sans text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <span>{status === 'submitting' ? 'SENDING...' : 'SUBMIT'}</span>
                    <span className="flex h-7 w-7 items-center justify-center  bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* 3. SOCIAL CHANNELS & SERVICE ZONES */}
        <section className="border-t border-white/15 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-12 font-mono text-xs md:grid-cols-12">
            {/* Service Zones Column */}
            <div className="space-y-4 md:col-span-4">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#F5D033] uppercase">
                Where We Operate
              </p>
              <p className="text-[11px] leading-relaxed text-[#C7C3C9]">
                Full-service delivery, professional setup, and post-party
                pack-down across Nairobi and neighboring counties.
              </p>
              <ul className="space-y-2 pt-1 text-white">
                {serviceZones.map((zone) => (
                  <li key={zone} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5  bg-[#F5D033]" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Channels Columns */}
            <div className="md:col-span-8">
              <p className="mb-6 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#F5D033] uppercase">
                 Connect With Us Online
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block  border border-white/15 bg-[#141016] p-6 no-underline transition-all duration-200 hover:border-[#F5D033]/70"
                  >
                    <div className="flex items-center justify-between text-[10px] tracking-[0.14em] text-[#9E9A9F] uppercase group-hover:text-white">
                      <span className=" bg-white/10 px-2.5 py-0.5 text-white/85">
                        {soc.badge}
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center  bg-white text-xs text-[#0D0A0E] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#F5D033]">
                        ↗
                      </span>
                    </div>
                    <h3 className="font-display-condensed mt-4 text-2xl font-normal tracking-wide text-white">
                      {soc.platform}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold text-[#F5D033]">
                      {soc.handle}
                    </p>
                    <p className="mt-2 text-[11px] leading-relaxed text-[#C7C3C9] group-hover:text-white">
                      {soc.desc}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. BOLD BRAND WORDMARK FOOTER */}
        <footer className="border-t border-white/15 pt-12 pb-12">
          <div className="overflow-hidden">
            <p className="font-display-condensed text-[13.5vw] font-normal leading-[0.88] text-white select-none sm:text-7xl md:text-[7rem] lg:text-[9rem]">
              Staxx Hyper
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#9E9A9F]">
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="mailto:staxxsounds@proton.me"
                className="border-b border-white/30 pb-0.5 text-white no-underline transition-colors hover:border-[#F5D033] hover:text-[#F5D033]"
              >
                staxxsounds@proton.me
              </a>
              <a
                href="mailto:hyperkidsevents@gmail.com"
                className="border-b border-white/30 pb-0.5 text-white no-underline transition-colors hover:border-[#F5D033] hover:text-[#F5D033]"
              >
                hyperkidsevents@gmail.com
              </a>
            </div>
            <span className="font-semibold text-[#F5D033]">
              Nairobi, Kenya &bull; Staxx Hyper Kids Events
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
