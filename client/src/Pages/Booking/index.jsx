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
            <span>Staxx Events &amp; Production</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Date Reservation &bull; Instant Quote Enquiry
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Event Booking <br />
              <span className="text-white/65">&amp; Enquiry</span>
            </h1>

            <p className=" border border-white/10 bg-transparentp-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Lock in your event date across any occasion—from corporate galas
              and weddings to concerts, church conventions, and private
              celebrations. Our producers confirm availability within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
          <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> How Reservations Work
          </span>
          <p className="max-w-2xl text-xs leading-relaxed text-[#C7C3C9] md:text-right md:text-sm">
            No upfront payment required to submit an enquiry. Once we verify your
            date, venue logistics, and technical requirements, a 40% deposit
            secures your production slot.
          </p>
        </div>
      </section>

      {/* 3. MAIN BOOKING FORM & SUMMARY GRID */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Form Column */}
            <div className="lg:col-span-8">
              {submitted ? (
                <div className="space-y-8  border border-[#F5D033]/60 bg-[#141016] p-8 md:p-14">
                  <div className="inline-flex items-center gap-2  bg-[#F5D033] px-4 py-1 text-[11px] font-bold tracking-[0.14em] text-[#0D0A0E] uppercase">
                    <span>✓ Enquiry Received</span>
                  </div>

                  <h2 className="font-display-condensed text-3xl font-normal leading-tight text-white md:text-5xl">
                    We&apos;ve Got Your Event Details,{' '}
                    <span className="text-white/65">
                      {formData.clientName || 'Valued Client'}!
                    </span>
                  </h2>

                  <p className="text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                    Our lead event producer is reviewing availability for{' '}
                    <strong className="font-semibold text-white">
                      {formData.eventDate || 'your selected date'}
                    </strong>{' '}
                    at{' '}
                    <strong className="font-semibold text-white">
                      {formData.location || 'Nairobi'}
                    </strong>{' '}
                    and will reach out via WhatsApp or email within 24 hours with
                    your itemized KES quotation.
                  </p>

                  <div className="space-y-3  border border-white/10 bg-[#1A161D] p-6 text-xs tracking-[0.06em] text-[#D1CDD3]">
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-2.5">
                      <span className="tracking-[0.14em] text-[#9E9A9F] uppercase">
                        Event Sector:
                      </span>
                      <span className="text-right font-medium text-white">
                        {formData.eventSector}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-2.5">
                      <span className="tracking-[0.14em] text-[#9E9A9F] uppercase">
                        Production Tier:
                      </span>
                      <span className="text-right font-medium text-white">
                        {formData.packageTier}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-2.5">
                      <span className="tracking-[0.14em] text-[#9E9A9F] uppercase">
                        Design Concept:
                      </span>
                      <span className="text-right font-medium text-white">
                        {formData.theme}
                      </span>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-white/10 pb-2.5">
                      <span className="tracking-[0.14em] text-[#9E9A9F] uppercase">
                        Guest Attendance:
                      </span>
                      <span className="text-right font-medium text-white">
                        {formData.guestCount}
                      </span>
                    </div>
                    {formData.addOns.length > 0 && (
                      <div className="flex justify-between gap-4 pt-1">
                        <span className="tracking-[0.14em] text-[#9E9A9F] uppercase">
                          Add-Ons:
                        </span>
                        <span className="text-right font-medium text-[#F5D033]">
                          {formData.addOns.join(', ')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer  border border-white/25 bg-transparent px-6 py-3.5 text-xs font-semibold tracking-[0.14em] text-white uppercase transition-colors hover:border-white hover:bg-white/10"
                    >
                      Modify Enquiry
                    </button>
                    <a
                      href="/"
                      onClick={(e) => handleLinkClick(e, '/')}
                      className="group inline-flex items-center gap-3  bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                    >
                      <span>Return Home &rarr;</span>
                      <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-12  border border-white/15 bg-[#141016] p-8 md:p-12"
                >
                  {/* Step 01: Client Contact Details */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <h2 className="font-display-condensed text-2xl font-normal tracking-wide text-white md:text-3xl">
                        Client / Organization Contact Details
                      </h2>
                      <span className=" border border-white/15 bg-[#1A161D] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#F5D033] uppercase">
                        [ 01 / 03 ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Contact Name / Organization *
                        </label>
                        <input
                          type="text"
                          name="clientName"
                          required
                          value={formData.clientName}
                          onChange={handleChange}
                          placeholder="e.g. Brenda Akinyi / Apex Ltd"
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +254 712 345 678"
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. brenda@example.com"
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 02: Event Logistics & Sector */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <h2 className="font-display-condensed text-2xl font-normal tracking-wide text-white md:text-3xl">
                        Event Sector &amp; Logistics
                      </h2>
                      <span className=" border border-white/15 bg-[#1A161D] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#F5D033] uppercase">
                        [ 02 / 03 ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Event Sector *
                        </label>
                        <select
                          name="eventSector"
                          value={formData.eventSector}
                          onChange={handleChange}
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                        >
                          {eventSectors.map((sector) => (
                            <option key={sector} value={sector} className="bg-[#141016] text-white">
                              {sector}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Event Title / Occasion
                        </label>
                        <input
                          type="text"
                          name="eventName"
                          value={formData.eventName}
                          onChange={handleChange}
                          placeholder="e.g. Annual AGM Gala / Wanjiku & Brian Wedding"
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Preferred Event Date *
                        </label>
                        <input
                          type="date"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Start Time
                        </label>
                        <input
                          type="time"
                          name="eventTime"
                          value={formData.eventTime}
                          onChange={handleChange}
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Venue / Location *
                        </label>
                        <input
                          type="text"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. KICC, Serena Hotel, Karen, Runda..."
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Estimated Guest Attendance
                        </label>
                        <select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                        >
                          <option className="bg-[#141016] text-white">Up to 30 Guests</option>
                          <option className="bg-[#141016] text-white">50 - 100 Guests</option>
                          <option className="bg-[#141016] text-white">100 - 250 Guests</option>
                          <option className="bg-[#141016] text-white">250 - 500 Guests</option>
                          <option className="bg-[#141016] text-white">500 - 1,000+ Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 03: Package, Theme & Add-ons */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/15 pb-4">
                      <h2 className="font-display-condensed text-2xl font-normal tracking-wide text-white md:text-3xl">
                        Production Package, Concept &amp; Add-Ons
                      </h2>
                      <span className=" border border-white/15 bg-[#1A161D] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[#F5D033] uppercase">
                        [ 03 / 03 ]
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Select Production Package
                        </label>
                        <select
                          name="packageTier"
                          value={formData.packageTier}
                          onChange={handleChange}
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                        >
                          {packageOptions.map((pkg) => (
                            <option key={pkg} value={pkg} className="bg-[#141016] text-white">
                              {pkg}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                          Select Design Concept
                        </label>
                        <select
                          name="theme"
                          value={formData.theme}
                          onChange={handleChange}
                          className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                        >
                          {themeOptions.map((thm) => (
                            <option key={thm} value={thm} className="bg-[#141016] text-white">
                              {thm}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Optional Add-Ons Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
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
                              className={`flex cursor-pointer items-center justify-between gap-3  border p-3.5 text-left transition-all ${
                                checked
                                  ? 'border-[#F5D033] bg-[#F5D033] text-[#0D0A0E]'
                                  : 'border-white/15 bg-[#1A161D] text-[#D1CDD3] hover:border-white/35 hover:text-white'
                              }`}
                            >
                              <span className="text-xs font-semibold leading-snug">
                                {addon.label}
                              </span>
                              <span
                                className={`shrink-0  px-2.5 py-0.5 text-[10px] font-bold tracking-[0.08em] uppercase ${
                                  checked
                                    ? 'bg-[#0F2A2A] text-[#F5D033]'
                                    : 'bg-white/10 text-[#9E9A9F]'
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
                      <label className="block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                        Special Requirements, Technical Rider or Venue Notes
                      </label>
                      <textarea
                        name="notes"
                        rows="4"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Tell us about staging dimensions, power access, branding guidelines, dress code, or specific scheduling constraints..."
                        className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3.5 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer items-center justify-between  bg-white py-2.5 pr-2.5 pl-7 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase transition-transform duration-200 hover:scale-[1.01] hover:bg-[#F5D033]"
                  >
                    <span>Submit Event Booking Enquiry &rarr;</span>
                    <span className="flex h-8 w-8 items-center justify-center  bg-[#0F2A2A] text-sm text-white transition-transform duration-200 group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Live Summary & Direct Contact Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-4">
              {/* Live Enquiry Summary Card */}
              <div className="space-y-6  border border-white/15 bg-[#141016] p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                    [ Live Summary ]
                  </span>
                  <span className=" bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
                    KES
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                      Event Sector
                    </span>
                    <p className="mt-0.5 font-medium text-white">
                      {formData.eventSector}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                      Selected Package
                    </span>
                    <p className="mt-0.5 font-medium text-[#F5D033]">
                      {formData.packageTier}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                      Design Concept
                    </span>
                    <p className="mt-0.5 font-normal text-[#D1CDD3]">
                      {formData.theme}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                    <div>
                      <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                        Date
                      </span>
                      <p className="mt-0.5 text-white">
                        {formData.eventDate || 'Not set yet'}
                      </p>
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                        Guests
                      </span>
                      <p className="mt-0.5 text-white">
                        {formData.guestCount}
                      </p>
                    </div>
                  </div>

                  {formData.addOns.length > 0 && (
                    <div className="border-t border-white/10 pt-4">
                      <span className="mb-2 block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                        Selected Add-Ons ({formData.addOns.length})
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#F5D033]">
                        {formData.addOns.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span>✓</span>
                            <span className="text-white/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Instant WhatsApp & Direct Help Card (Light Editorial Banner Style) */}
              <div className="space-y-5  bg-[#EDEDED] p-8 text-[#0D0A0E]">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
                  [ Need Fast Confirmation? ] <span className="text-[#D4A800]">&#10022;</span>
                </span>
                <h3 className="font-display-condensed text-2xl font-normal leading-tight text-[#0D0A0E]">
                  Planning an Urgent Event This Week?
                </h3>
                <p className="text-xs leading-relaxed text-[#0D0A0E]/80">
                  Chat directly with our Nairobi production team on WhatsApp for
                  rapid date checks, venue assessments, and rush schedules.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between  bg-[#0F2A2A] py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform hover:scale-[1.02]"
                  >
                    <span>Chat on WhatsApp</span>
                    <span className="flex h-6 w-6 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="/party-packages"
                    onClick={(e) => handleLinkClick(e, '/party-packages')}
                    className="flex w-full items-center justify-between  border border-[#0D0A0E]/25 bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors hover:border-[#0D0A0E]"
                  >
                    <span>Compare All KES Packages</span>
                    <span className="flex h-6 w-6 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
                      &rarr;
                    </span>
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
