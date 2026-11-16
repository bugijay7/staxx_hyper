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
    <div className="bg-amber-200 pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-amber-200">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24"
          data-aos="fade-down"
        >
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx-HyperKids Equipment Desk</span>
            <span>Commerce House, Nairobi &bull; Itemized KES Quotations</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Product &amp; Equipment <br />
              <span className="text-neutral-500">Hire Enquiry</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Select the instruments, screens, lighting rigs, marquees, or
              furniture you need. Submit your brief to check stock availability
              and receive a formal KES quotation across six counties.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ENQUIRY FORM & TECHNICAL DESK SIDEBAR */}
      <section className="border-b border-neutral-900/15 bg-amber-200">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Interactive Enquiry Form */}
            <form
              onSubmit={handleSubmit}
              className="border border-neutral-900/15 bg-amber-200 p-8 md:p-12"
              data-aos="fade-up"
            >
              <div className="mb-8 border-b border-neutral-900/15 pb-4">
                <span className="block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  Step 01 &bull; Client &amp; Event Details
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Wanjiku Kamau"
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Company / School / Church (Optional)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="e.g. Safaricom PLC / Private Host"
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0712 345 678"
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Email Address (For Formal PDF Quote)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. events@organization.co.ke"
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Rental Duration (Days)
                  </label>
                  <select
                    name="rentalDays"
                    value={formData.rentalDays}
                    onChange={handleChange}
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
                  >
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7+ Days (Weekly Rate)</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    County *
                  </label>
                  <select
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
                  >
                    {counties.map((county) => (
                      <option key={county} value={county}>
                        {county} County
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                    Venue / Estate / Hotel Name
                  </label>
                  <input
                    type="text"
                    name="venueLocation"
                    value={formData.venueLocation}
                    onChange={handleChange}
                    placeholder="e.g. KICC / Karen / Runda / Naivasha"
                    className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                  Event Category
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none"
                >
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 02: Equipment Checklist */}
              <div className="mt-10 mb-6 border-b border-neutral-900/15 pb-4">
                <span className="block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  Step 02 &bull; Select Equipment &amp; Supplies ({selectedEquipment.length} Selected)
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {equipmentOptions.map((item) => {
                  const isChecked = selectedEquipment.includes(item);
                  return (
                    <label
                      key={item}
                      className={`flex cursor-pointer items-center gap-3 border p-3.5 text-xs transition-colors ${
                        isChecked
                          ? 'border-neutral-900 bg-neutral-900 text-[#f9f9f8]'
                          : 'border-neutral-900/20 bg-amber-200 text-neutral-800 hover:border-neutral-900'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleEquipment(item)}
                        className="h-3.5 w-3.5 accent-neutral-900"
                      />
                      <span className="leading-snug">{item}</span>
                    </label>
                  );
                })}
              </div>

              {/* Step 03: Technical Specifications & Notes */}
              <div className="mt-8">
                <label className="mb-2 block text-[11px] font-medium tracking-[0.12em] text-neutral-900 uppercase">
                  Technical Rider, Dimensions &amp; Custom Notes
                </label>
                <textarea
                  name="equipmentNotes"
                  rows="4"
                  value={formData.equipmentNotes}
                  onChange={handleChange}
                  placeholder="Specify quantities (e.g., 200 Chiavari chairs, 6m x 3m LED wall), venue power access, or load-in times..."
                  className="w-full border border-neutral-900/25 bg-amber-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-500 focus:border-neutral-900 focus:outline-none"
                />
              </div>

              {/* Submit Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-neutral-900/15 pt-8">
                <button
                  type="submit"
                  className="cursor-pointer border border-neutral-900 bg-neutral-900 px-8 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
                >
                  Send Enquiry via WhatsApp &rarr;
                </button>

                <a
                  href="/event-equipment-supplies"
                  onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                  className="border border-neutral-900/25 px-6 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors hover:border-neutral-900"
                >
                  Browse Full Catalog
                </a>
              </div>

              {submitted && (
                <div className="mt-6 border border-neutral-900 bg-amber-200 p-4 text-xs leading-relaxed text-neutral-900">
                  <strong>Enquiry Prepared:</strong> Your equipment list has been
                  formatted for our dispatch desk on WhatsApp (+254 702 443 418).
                  If a new tab did not open automatically,{' '}
                  <a
                    href={buildWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline"
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
              <div className="border border-neutral-900/15 bg-amber-200">
                <div className="aspect-[16/10] w-full overflow-hidden border-b border-neutral-900/15 bg-neutral-200">
                  <img
                    src={Equipmentsetup}
                    alt="Staxx-HyperKids AV production and stage setup"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="mb-2 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                    Direct Dispatch Desk
                  </span>
                  <h2 className="mb-4 text-2xl font-normal tracking-[-0.02em] text-neutral-900">
                    Fast Turnaround on Stock &amp; Pricing
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                    Our equipment warehouse and operations team confirm unit
                    availability, transport logistics, and technician allocation
                    within 2 hours during business hours.
                  </p>

                  <div className="space-y-3 border-t border-neutral-900/15 pt-6 text-xs text-neutral-700">
                    <p>
                      <strong className="tracking-[0.1em] text-neutral-900 uppercase">
                        Head Office:
                      </strong>{' '}
                      Commerce House, Nairobi, Kenya
                    </p>
                    <p>
                      <strong className="tracking-[0.1em] text-neutral-900 uppercase">
                        WhatsApp / Direct Line:
                      </strong>{' '}
                      0702 443 418
                    </p>
                    <p>
                      <strong className="tracking-[0.1em] text-neutral-900 uppercase">
                        Delivery Counties:
                      </strong>{' '}
                      Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a &amp; Kajiado
                    </p>
                  </div>
                </div>
              </div>

              {/* Rental Terms Box */}
              <div className="border border-neutral-900/15 bg-amber-200 p-8">
                <span className="mb-3 block text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                  Standard Hire Terms
                </span>
                <ul className="space-y-3 text-xs leading-relaxed text-neutral-700">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-900" />
                    <span>
                      <strong>Pre-Dispatch Testing:</strong> All pianos, amps,
                      LED walls, and generators undergo full bench testing prior
                      to loading.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-900" />
                    <span>
                      <strong>Crew &amp; Setup:</strong> Quotes include loading,
                      on-site rigging/tuning, and post-event strike by Staxx
                      personnel.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1 w-1 shrink-0 bg-neutral-900" />
                    <span>
                      <strong>Multi-Day Discounts:</strong> Custom tiered KES
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