import React, { useState } from 'react';

export default function Booking({ onNavigate }) {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    phone: '',
    eventName: '',
    eventSector: 'Corporate & Business Events',
    eventDate: '',
    eventTime: '14:00',
    location: '',
    guestCount: '50 - 100 Guests',
    packageTier: 'Hyper Deluxe Experience (KES 62,000)',
    theme: 'Afro-Royal & Savannah Gala',
    addOns: [],
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const eventSectors = [
    'Corporate & Business Events',
    'Weddings & Engagements',
    'Birthdays & Private Celebrations',
    "Children's Parties & Events",
    'Concerts & Live Entertainment',
    'Church & Religious Events',
    'Educational & Institutional Events',
    'Exhibitions & Promotional Events',
  ];

  const packageOptions = [
    'Mini Sparkle Box (KES 18,500)',
    'Junior Adventure Pack (KES 35,000)',
    'Hyper Deluxe Experience (KES 62,000)',
    'Grand Carnival Extravaganza (KES 98,000)',
    'Ultimate Royal VIP Bash (KES 155,000)',
    'Custom Production / Full-Scale Event',
  ];

  const themeOptions = [
    'Afro-Royal & Savannah Gala',
    'Cinematic Red Carpet & Gala',
    'Enchanted Botanical & Garden Banquet',
    'Galactic Neon & Cosmic Nightclub',
    'Custom Event Concept (Describe Below)',
  ];

  const addOnOptions = [
    { label: 'Extra Staging & AV Lighting Rig', price: 'KES 25,000' },
    { label: 'Clear-Span Marquee Tent & Flooring', price: 'KES 35,000' },
    { label: 'Professional Live Band / DJ Setup', price: 'KES 18,000' },
    { label: 'Professional Photography & Videography', price: 'KES 25,000' },
    { label: 'Custom Branded Press Wall & Backdrop', price: 'KES 15,000' },
    { label: 'Silent Generator Power Backup (Standby)', price: 'KES 12,000' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddOnToggle = (label) => {
    setFormData((prev) => {
      const exists = prev.addOns.includes(label);
      return {
        ...prev,
        addOns: exists
          ? prev.addOns.filter((item) => item !== label)
          : [...prev.addOns, label],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-white pt-20 font-sans text-[#16232A] antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#16232A]/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Events &amp; Production</span>
            <span>Date Reservation &bull; Instant Quote Enquiry</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-[#16232A] sm:text-6xl lg:text-[4.5rem]">
              Event Booking <br />
              <span className="text-neutral-500">&amp; Enquiry</span>
            </h1>

            <p className="text-base leading-relaxed text-[#16232A] md:text-sm lg:border-l lg:border-[#16232A]/15 lg:pl-10">
              Lock in your event date across any occasion—from corporate galas
              and weddings to concerts, church conventions, and private
              celebrations. Our producers confirm availability within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="shrink-0 text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
            How Reservations Work
          </span>
          <p className="max-w-2xl text-sm leading-relaxed text-[#16232A] md:text-right">
            No upfront payment required to submit an enquiry. Once we verify your
            date, venue logistics, and technical requirements, a 40% deposit
            secures your production slot.
          </p>
        </div>
      </section>

      {/* 3. MAIN BOOKING FORM & SUMMARY GRID */}
      <section className="border-b border-[#16232A]/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Form Column */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="space-y-8 border border-[#16232A] bg-white p-8 md:p-14">
                  <div className="inline-flex items-center gap-2 border border-[#16232A]/30 px-3.5 py-1 text-[11px] tracking-[0.14em] text-[#16232A] uppercase">
                    <span>✓ Enquiry Received</span>
                  </div>

                  <h2 className="text-3xl font-normal tracking-[-0.02em] leading-tight text-[#16232A] md:text-4xl">
                    We&apos;ve Got Your Event Details,{' '}
                    <span className="text-neutral-500">
                      {formData.clientName || 'Valued Client'}!
                    </span>
                  </h2>

                  <p className="text-base leading-relaxed text-[#16232A]">
                    Our lead event producer is reviewing availability for{' '}
                    <strong className="font-medium text-[#16232A]">
                      {formData.eventDate || 'your selected date'}
                    </strong>{' '}
                    at{' '}
                    <strong className="font-medium text-[#16232A]">
                      {formData.location || 'Nairobi'}
                    </strong>{' '}
                    and will reach out via WhatsApp or email within 24 hours with
                    your itemized KES quotation.
                  </p>

                  <div className="space-y-3 border border-[#16232A]/15 bg-white p-6 text-xs tracking-[0.06em] text-neutral-700">
                    <div className="flex justify-between gap-4 border-b border-[#16232A]/10 pb-2.5">
                      <span className="tracking-[0.12em] text-neutral-400 uppercase">
                        Event Sector:
                      </span>
                      <span className="text-right font-medium text-[#16232A]">
                        {formData.eventSector}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-[#16232A]/10 pb-2.5">
                      <span className="tracking-[0.12em] text-neutral-400 uppercase">
                        Production Tier:
                      </span>
                      <span className="text-right font-medium text-[#16232A]">
                        {formData.packageTier}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-[#16232A]/10 pb-2.5">
                      <span className="tracking-[0.12em] text-neutral-400 uppercase">
                        Design Concept:
                      </span>
                      <span className="text-right font-medium text-[#16232A]">
                        {formData.theme}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-[#16232A]/10 pb-2.5">
                      <span className="tracking-[0.12em] text-neutral-400 uppercase">
                        Guest Attendance:
                      </span>
                      <span className="text-right font-medium text-[#16232A]">
                        {formData.guestCount}
                      </span>
                    </div>
                    {formData.addOns.length > 0 && (
                      <div className="flex justify-between gap-4 pt-1">
                        <span className="tracking-[0.12em] text-neutral-400 uppercase">
                          Add-Ons:
                        </span>
                        <span className="text-right font-medium text-[#16232A]">
                          {formData.addOns.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer border border-[#16232A] px-6 py-3.5 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase transition-colors hover:bg-[#075056] hover:text-[#E4EEF0]"
                    >
                      Modify Enquiry
                    </button>
                    <a
                      href="/"
                      onClick={(e) => handleLinkClick(e, '/')}
                      className="border border-[#E4EEF0] bg-white px-6 py-4 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors hover:bg-transparent hover:text-[#E4EEF0]"
                    >
                      Return Home &rarr;
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-12 border border-[#16232A]/15 bg-white p-8 md:p-12"
                >
                  {/* Step 01: Client Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#16232A]/15 pb-4">
                      <h2 className="text-xl font-medium tracking-[-0.01em] text-[#16232A] md:text-2xl">
                        Client / Organization Contact Details
                      </h2>
                      <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                        [ 01 / 03 ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Contact Name / Organization *
                        </label>
                        <input
                          type="text"
                          name="clientName"
                          required
                          value={formData.clientName}
                          onChange={handleChange}
                          placeholder="e.g. Brenda Akinyi / Apex Ltd"
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] placeholder-neutral-400 focus:border-[#16232A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +254 712 345 678"
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] placeholder-neutral-400 focus:border-[#16232A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. brenda@example.com"
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] placeholder-neutral-400 focus:border-[#16232A] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 02: Event Logistics & Sector */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#16232A]/15 pb-4">
                      <h2 className="text-xl font-medium tracking-[-0.01em] text-[#16232A] md:text-2xl">
                        Event Sector &amp; Logistics
                      </h2>
                      <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                        [ 02 / 03 ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Event Sector *
                        </label>
                        <select
                          name="eventSector"
                          value={formData.eventSector}
                          onChange={handleChange}
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] focus:border-[#16232A] focus:outline-none"
                        >
                          {eventSectors.map((sector) => (
                            <option key={sector} value={sector}>
                              {sector}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Event Title / Occasion
                        </label>
                        <input
                          type="text"
                          name="eventName"
                          value={formData.eventName}
                          onChange={handleChange}
                          placeholder="e.g. Annual AGM Gala / Wanjiku & Brian Wedding"
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] placeholder-neutral-400 focus:border-[#16232A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Preferred Event Date *
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] focus:border-[#16232A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Start Time
                        </label>
                        <input
                          type="time"
                          name="eventTime"
                          value={formData.eventTime}
                          onChange={handleChange}
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] focus:border-[#16232A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Venue / Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. KICC, Serena Hotel, Karen, Runda..."
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] placeholder-neutral-400 focus:border-[#16232A] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Estimated Guest Attendance
                        </label>
                        <select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] focus:border-[#16232A] focus:outline-none"
                        >
                          <option>Up to 30 Guests</option>
                          <option>50 - 100 Guests</option>
                          <option>100 - 250 Guests</option>
                          <option>250 - 500 Guests</option>
                          <option>500 - 1,000+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 03: Package, Theme & Add-ons */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-[#16232A]/15 pb-4">
                      <h2 className="text-xl font-medium tracking-[-0.01em] text-[#16232A] md:text-2xl">
                        Production Package, Concept &amp; Add-Ons
                      </h2>
                      <span className="text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                        [ 03 / 03 ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Select Production Package
                        </label>
                        <select
                          name="packageTier"
                          value={formData.packageTier}
                          onChange={handleChange}
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] focus:border-[#16232A] focus:outline-none"
                        >
                          {packageOptions.map((pkg) => (
                            <option key={pkg} value={pkg}>
                              {pkg}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                          Select Design Concept
                        </label>
                        <select
                          name="theme"
                          value={formData.theme}
                          onChange={handleChange}
                          className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] focus:border-[#16232A] focus:outline-none"
                        >
                          {themeOptions.map((thm) => (
                            <option key={thm} value={thm}>
                              {thm}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Optional Add-Ons Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                        Optional Production Add-Ons (Select Any)
                      </label>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {addOnOptions.map((addon) => {
                          const checked = formData.addOns.includes(addon.label);
                          return (
                            <button
                              type="button"
                              key={addon.label}
                              onClick={() => handleAddOnToggle(addon.label)}
                              aria-pressed={checked}
                              className={`flex cursor-pointer items-center justify-between gap-3 border p-3.5 text-left transition-all ${
                                checked
                                  ? 'border-[#16232A] bg-[#075056] text-[#E4EEF0]'
                                  : 'border-[#16232A]/15 bg-white text-neutral-700 hover:border-[#16232A]/40'
                              }`}
                            >
                              <span className="text-xs font-medium leading-snug">
                                {addon.label}
                              </span>
                              <span
                                className={`shrink-0 text-[11px] font-medium tracking-[0.08em] uppercase ${
                                  checked ? 'text-[#E4EEF0]' : 'text-neutral-500'
                                }`}
                              >
                                + {addon.price}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Special Notes */}
                    <div className="space-y-2 pt-2">
                      <label className="block text-[11px] font-medium tracking-[0.14em] text-[#16232A] uppercase">
                        Special Requirements, Technical Rider or Venue Notes
                      </label>
                      <textarea
                        name="notes"
                        rows="4"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about staging dimensions, power access, branding guidelines, dress code, or specific scheduling constraints..."
                        className="w-full border border-[#16232A]/20 bg-white px-4 py-3.5 text-sm text-[#16232A] placeholder-neutral-400 focus:border-[#16232A] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer border border-[#E4EEF0] bg-white py-4 text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#E4EEF0]"
                  >
                    Submit Event Booking Enquiry &rarr;
                  </button>
                </form>
              )}
            </div>

            {/* Right Live Summary & Direct Contact Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-4">
              {/* Live Enquiry Summary Card */}
              <div className="space-y-6 border border-[#16232A]/15 bg-white p-8">
                <div className="flex items-center justify-between border-b border-[#16232A]/15 pb-4">
                  <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                    [ Live Summary ]
                  </span>
                  <span className="text-[11px] tracking-[0.12em] text-neutral-500 uppercase">
                    KES
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                      Event Sector
                    </span>
                    <p className="mt-0.5 font-medium text-[#16232A]">
                      {formData.eventSector}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                      Selected Package
                    </span>
                    <p className="mt-0.5 font-medium text-[#16232A]">
                      {formData.packageTier}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                      Design Concept
                    </span>
                    <p className="mt-0.5 font-normal text-neutral-700">
                      {formData.theme}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-[#16232A]/10 pt-4">
                    <div>
                      <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                        Date
                      </span>
                      <p className="mt-0.5 text-[#16232A]">
                        {formData.eventDate || 'Not set yet'}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                        Guests
                      </span>
                      <p className="mt-0.5 text-[#16232A]">
                        {formData.guestCount}
                      </p>
                    </div>
                  </div>

                  {formData.addOns.length > 0 && (
                    <div className="border-t border-[#16232A]/10 pt-4">
                      <span className="mb-1.5 block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                        Selected Add-Ons ({formData.addOns.length})
                      </span>
                      <ul className="space-y-1 text-xs text-neutral-700">
                        {formData.addOns.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span>✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Instant WhatsApp & Direct Help Card */}
              <div className="space-y-5 border border-[#16232A] bg-[#075056] p-8 text-[#E4EEF0]">
                <span className="block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                  [ Need Fast Confirmation? ]
                </span>
                <h3 className="text-xl font-normal tracking-[-0.01em] leading-snug">
                  Planning an Urgent Event This Week?
                </h3>
                <p className="text-xs leading-relaxed text-neutral-300">
                  Chat directly with our Nairobi production team on WhatsApp for
                  rapid date checks, venue assessments, and rush schedules.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-[#E4EEF0] bg-white py-4 text-center text-xs font-medium tracking-[0.14em] text-[#16232A] uppercase no-underline transition-colors hover:bg-transparent hover:text-[#E4EEF0]"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="/party-packages"
                    onClick={(e) => handleLinkClick(e, '/party-packages')}
                    className="block w-full border border-[#E4EEF0]/30 bg-transparent py-4 text-center text-xs font-medium tracking-[0.14em] text-[#E4EEF0] uppercase no-underline transition-colors hover:border-[#E4EEF0]"
                  >
                    Compare All KES Packages
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