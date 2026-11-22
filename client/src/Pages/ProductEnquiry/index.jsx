import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Equipmentsetup from '../../assets/equipmentsetup.jpeg';

export default function ProductEnquiry({ onNavigate, preselectedProduct }) {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
    eventDate: '',
    rentalDays: '1',
    county: 'Nairobi',
    venueLocation: '',
    eventType: 'Corporate / Gala / Launch',
    equipmentNotes: '',
  });

  const [selectedEquipment, setSelectedEquipment] = useState(
    preselectedProduct ? [preselectedProduct] : ['Yamaha C7 Grand Piano']
  );

  const [submitted, setSubmitted] = useState(false);

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

  const equipmentOptions = [
    'Yamaha C7 Grand Piano',
    'Fender & Marshall Full Band Guitar Rig',
    'Pro Line-Array Sound System',
    'P3 Indoor LED Video Wall',
    'Moving Head Stage Lighting & Wash Rig',
    'Heavy-Duty Aluminum Stage Platform',
    'Clear-Span Marquee Tent (10m / 15m / 20m)',
    'Banquet & Cocktail Event Furniture Suite',
    'Commercial Bouncy Castle / Soft Play Zone',
    'Silent Standby Generator & Power Distribution',
  ];

  const counties = [
    'Nairobi',
    'Kiambu',
    'Nakuru',
    'Machakos',
    "Murang'a",
    'Kajiado',
  ];

  const eventTypes = [
    'Corporate / Gala / Launch',
    'Wedding / Ruracio / Reception',
    'Concert / Live Band Performance',
    'Church Convention / Institutional Event',
    'Kiddie Birthday / Family Celebration',
    'Exhibition / Brand Activation',
  ];

  const toggleEquipment = (item) => {
    setSelectedEquipment((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const whatsappNumber = '254702443418';

  const buildWhatsappUrl = () => {
    const itemsList =
      selectedEquipment.length > 0
        ? selectedEquipment.map((item) => `  - ${item}`).join('\n')
        : '  - Custom Equipment Rider (See notes)';

    const message =
      `Hello Staxx-HyperKids, I would like to submit an Equipment & Product Enquiry:\n\n` +
      `• *Name:* ${formData.fullName || 'Not specified'}\n` +
      `• *Organization / Host:* ${formData.organization || 'Individual / Private'}\n` +
      `• *Phone:* ${formData.phone || 'Not specified'}\n` +
      `• *Event Date:* ${formData.eventDate || 'Flexible / TBC'}\n` +
      `• *Duration:* ${formData.rentalDays} ${Number(formData.rentalDays) === 1 ? 'Day' : 'Days'}\n` +
      `• *County & Venue:* ${formData.county}${formData.venueLocation ? ` (${formData.venueLocation})` : ''}\n` +
      `• *Event Type:* ${formData.eventType}\n\n` +
      `*Requested Equipment / Supplies:*\n${itemsList}\n\n` +
      `${formData.equipmentNotes ? `*Additional Technical Notes:*\n${formData.equipmentNotes}\n\n` : ''}` +
      `Please share availability and an itemized KES quotation.`;

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(buildWhatsappUrl(), '_blank', 'noopener,noreferrer');
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
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <span>Staxx-HyperKids Equipment Desk</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Commerce House, Nairobi &bull; Itemized KES Quotations
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Product &amp; Equipment <br />
              <span className="text-white/65">Hire Enquiry</span>
            </h1>

            <p className=" border border-white/10 bg-transparentp-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Select the instruments, screens, lighting rigs, marquees, or
              furniture you need. Submit your brief to check stock availability
              and receive a formal KES quotation across six counties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ENQUIRY FORM & TECHNICAL DESK SIDEBAR */}
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Interactive Enquiry Form */}
            <form
              onSubmit={handleSubmit}
              className=" border border-white/15 bg-[#141016] p-8 md:p-12"
              data-aos="fade-up"
            >
              <div className="mb-8 border-b border-white/15 pb-4">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Step 01 &bull; Client &amp; Event Details
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Wanjiku Kamau"
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Company / School / Church (Optional)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Safaricom PLC / Private Host"
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0712 345 678"
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Email Address (For Formal PDF Quote)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. events@organization.co.ke"
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Rental Duration (Days)
                  </label>
                  <select
                    name="rentalDays"
                    value={formData.rentalDays}
                    onChange={handleChange}
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                  >
                    <option value="1" className="bg-[#141016] text-white">1 Day</option>
                    <option value="2" className="bg-[#141016] text-white">2 Days</option>
                    <option value="3" className="bg-[#141016] text-white">3 Days</option>
                    <option value="5" className="bg-[#141016] text-white">5 Days</option>
                    <option value="7" className="bg-[#141016] text-white">7+ Days (Weekly Rate)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    County *
                  </label>
                  <select
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                  >
                    {counties.map((county) => (
                      <option key={county} value={county} className="bg-[#141016] text-white">
                        {county} County
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                    Venue / Estate / Hotel Name
                  </label>
                  <input
                    type="text"
                    name="venueLocation"
                    value={formData.venueLocation}
                    onChange={handleChange}
                    placeholder="e.g. KICC / Karen / Runda / Naivasha"
                    className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                  Event Category
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white focus:border-[#F5D033] focus:outline-none"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-[#141016] text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 02: Equipment Checklist */}
              <div className="mt-10 mb-6 border-b border-white/15 pb-4">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Step 02 &bull; Select Equipment &amp; Supplies ({selectedEquipment.length} Selected)
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {equipmentOptions.map((item) => {
                  const isChecked = selectedEquipment.includes(item);
                  return (
                    <label
                      key={item}
                      className={`flex cursor-pointer items-center gap-3  border p-3.5 text-xs font-medium transition-all ${
                        isChecked
                          ? 'border-[#F5D033] bg-[#F5D033] text-[#0D0A0E]'
                          : 'border-white/15 bg-[#1A161D] text-[#D1CDD3] hover:border-white/35 hover:text-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleEquipment(item)}
                        className="h-3.5 w-3.5 accent-[#0D0A0E]"
                      />
                      <span className="leading-snug">{item}</span>
                    </label>
                  );
                })}
              </div>

              {/* Step 03: Technical Specifications & Notes */}
              <div className="mt-8">
                <label className="mb-2 block text-[11px] font-semibold tracking-[0.14em] text-[#C7C3C9] uppercase">
                  Technical Rider, Dimensions &amp; Custom Notes
                </label>
                <textarea
                  name="equipmentNotes"
                  rows="4"
                  value={formData.equipmentNotes}
                  onChange={handleChange}
                  placeholder="Specify quantities (e.g., 200 Chiavari chairs, 6m x 3m LED wall), venue power access, or load-in times..."
                  className="w-full  border border-white/15 bg-[#1C1720] px-4 py-3 text-sm text-white placeholder-[#7C7780] focus:border-[#F5D033] focus:outline-none"
                />
              </div>

              {/* Submit Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/15 pt-8">
                <button
                  type="submit"
                  className="group inline-flex cursor-pointer items-center gap-3  bg-white py-2.5 pr-2.5 pl-6 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase transition-transform duration-200 hover:scale-[1.02] hover:bg-[#F5D033]"
                >
                  <span>Send Enquiry via WhatsApp &rarr;</span>
                  <span className="flex h-7 w-7 items-center justify-center  bg-[#0F2A2A] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </button>

                <a
                  href="/event-equipment-supplies"
                  onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                  className="group inline-flex items-center gap-3  border border-white/25 bg-transparent py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-colors hover:border-white hover:bg-white/10"
                >
                  <span>Browse Full Catalog</span>
                  <span className="flex h-7 w-7 items-center justify-center  bg-white/15 text-xs text-white">
                    &rarr;
                  </span>
                </a>
              </div>

              {submitted && (
                <div className="mt-6  border border-[#F5D033]/50 bg-[#1A161D] p-5 text-xs leading-relaxed text-[#D1CDD3]">
                  <strong className="text-[#F5D033]">Enquiry Prepared:</strong> Your equipment list has been
                  formatted for our dispatch desk on WhatsApp (+254 702 443 418).
                  If a new tab did not open automatically,{' '}
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-white underline hover:text-[#F5D033]"
                  >
                    click here to launch WhatsApp
                  </a>
                  .
                </div>
              )}
            </form>

            {/* Right: Logistics & Dispatch Desk Info */}
            <aside className="space-y-8" data-aos="fade-up" data-aos-delay="150">
              {/* Visual Card */}
              <div className="overflow-hidden  border border-white/15 bg-[#141016]">
                <div className="aspect-[16/11] w-full overflow-hidden border-b border-white/10 bg-[#1B171E]">
                  <img
                    src={Equipmentsetup}
                    alt="Staxx-HyperKids AV production and stage setup"
                    className="h-full w-full object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                    <span>&#10022;</span> Direct Dispatch Desk
                  </span>
                  <h2 className="font-display-condensed mb-4 text-3xl font-normal tracking-wide text-white">
                    Fast Turnaround on Stock &amp; Pricing
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-[#C7C3C9]">
                    Our equipment warehouse and operations team confirm unit
                    availability, transport logistics, and technician allocation
                    within 2 hours during business hours.
                  </p>

                  <div className="space-y-3 border-t border-white/10 pt-6 text-xs text-[#D1CDD3]">
                    <p>
                      <strong className="tracking-[0.12em] text-white uppercase">
                        Head Office:
                      </strong>{' '}
                      Commerce House, Nairobi, Kenya
                    </p>
                    <p>
                      <strong className="tracking-[0.12em] text-white uppercase">
                        WhatsApp / Direct Line:
                      </strong>{' '}
                      0702 443 418
                    </p>
                    <p>
                      <strong className="tracking-[0.12em] text-white uppercase">
                        Delivery Counties:
                      </strong>{' '}
                      Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                    </p>
                  </div>
                </div>
              </div>

              {/* Rental Terms Box */}
              <div className=" border border-white/15 bg-[#141016] p-8">
                <span className="mb-4 block text-[11px] font-bold tracking-[0.16em] text-[#9E9A9F] uppercase">
                  Standard Hire Terms
                </span>
                <ul className="space-y-3.5 text-xs leading-relaxed text-[#D1CDD3]">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0  bg-[#F5D033]" />
                    <span>
                      <strong className="text-white">Pre-Dispatch Testing:</strong> All pianos, amps,
                      LED walls, and generators undergo full bench testing prior
                      to loading.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0  bg-[#F5D033]" />
                    <span>
                      <strong className="text-white">Crew &amp; Setup:</strong> Quotes include loading,
                      on-site rigging/tuning, and post-event strike by Staxx
                      personnel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0  bg-[#F5D033]" />
                    <span>
                      <strong className="text-white">Multi-Day Discounts:</strong> Custom tiered KES
                      rates apply for conferences, festivals, and multi-day
                      exhibitions.
                    </span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
