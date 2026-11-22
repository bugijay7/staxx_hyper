import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Guitarrig from '../../assets/guitarrig.jpg';
import Lighting from '../../assets/lighting.jpg';
import Piano from '../../assets/piano.jpg';
import Soundsystem from '../../assets/soundsystem.jpg';

export default function IndividualProduct({ onNavigate, productData }) {
  const [activeImage, setActiveImage] = useState(0);
  const [rentalDays, setRentalDays] = useState(1);
  const [includeTechnician, setIncludeTechnician] = useState(true);

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

  const product = productData || {
    id: 'eq-01',
    title: 'Yamaha C7 Grand Piano',
    category: 'Band & Audio',
    priceNumeric: 45000,
    price: 'KES 45,000 / day',
    desc: 'Concert-grade acoustic grand piano delivered, tuned on-site, and calibrated for professional indoor or outdoor gala performances.',
    specs: ['Concert Grand 7\'6"', 'Gloss Ebony Finish', 'Includes adjustable artist bench & on-site tuning'],
    images: [
      'Piano',
      'Piano',
      'Piano',
    ],
  };

  const images = product.images || [
    product.img || 'Piano',
    'Piano',
    'Piano',
  ];

  const basePrice = product.priceNumeric || 45000;
  const techFee = includeTechnician ? 5000 : 0;
  const totalPrice = basePrice * rentalDays + techFee;

  // Kenyan format with country code 254 (0702443418 -> 254702443418)
  const whatsappNumber = '254702443418';
  const whatsappMessage = encodeURIComponent(
    `Hello Staxx-HyperKids, I would like to book the following equipment:\n\n` +
      `• *Equipment:* ${product.title} (${product.id || 'EQ-01'})\n` +
      `• *Category:* ${product.category}\n` +
      `• *Duration:* ${rentalDays} ${rentalDays === 1 ? 'Day' : 'Days'}\n` +
      `• *On-Site Technician:* ${includeTechnician ? 'Yes (+KES 5,000)' : 'No'}\n` +
      `• *Estimated Total:* KES ${totalPrice.toLocaleString()}\n\n` +
      `Please confirm availability for my event date.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#0D0A0E] pt-20 font-sans text-white antialiased selection:bg-[#F5D033] selection:text-[#0D0A0E] md:pt-24">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        .font-display-condensed {
          font-family: 'Anton', Impact, 'Arial Narrow', sans-serif;
          letter-spacing: 0.01em;
          text-transform: uppercase;
        }
      `}</style>

      {/* 1. BREADCRUMB & HEADER */}
      <section className="border-b border-white/10 bg-[#0D0A0E]">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16"
          data-aos="fade-down"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-4 text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
            <div className="flex items-center gap-3">
              <a
                href="/event-equipment-supplies"
                onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                className="text-white no-underline transition-colors hover:text-[#F5D033]"
              >
                &larr; Back to Equipment Catalog
              </a>
              <span className="text-white/30">&bull;</span>
              <span className="text-[#F5D033]">{product.category}</span>
            </div>
            <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white">
              Item ID: {product.id || 'EQ-01'}
            </span>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: Image Gallery */}
            <div className="space-y-4" data-aos="fade-up">
              <div className="aspect-[16/11] w-full overflow-hidden rounded-3xl border border-white/10 bg-[#1B171E]">
                <img
                  src={images[activeImage]}
                  alt={product.title}
                  className="h-full w-full object-cover transition-all duration-500"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-[16/11] cursor-pointer overflow-hidden rounded-2xl border-2 bg-[#1B171E] transition-all ${
                      activeImage === idx
                        ? 'border-[#F5D033] opacity-100'
                        : 'border-white/10 opacity-55 hover:border-white/40 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info & Rental Configurator */}
            <div
              className="flex flex-col justify-between rounded-3xl border border-white/15 bg-[#141016] p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                  <span>&#10022;</span> Professional Equipment Hire
                </span>
                <h1 className="font-display-condensed mb-4 text-3xl font-normal leading-[0.98] tracking-wide text-white md:text-5xl">
                  {product.title}
                </h1>

                <div className="mb-6 flex flex-wrap items-baseline gap-3 border-b border-white/10 pb-6">
                  <span className="font-display-condensed text-3xl font-normal text-white md:text-4xl">
                    {product.price || `KES ${basePrice.toLocaleString()} / day`}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium tracking-[0.12em] text-[#D1CDD3] uppercase">
                    Includes Delivery &amp; Setup in Nairobi
                  </span>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
                  {product.desc}
                </p>

                {/* Specs List */}
                <div className="mb-8 space-y-3 border-t border-white/10 pt-6">
                  <h3 className="text-xs font-bold tracking-[0.16em] text-white uppercase">
                    Technical Specifications:
                  </h3>
                  <ul className="space-y-2.5 text-sm text-[#D1CDD3]">
                    {(product.specs || [
                      'Concert Grand 7\'6"',
                      'Gloss Ebony Finish',
                      'Includes adjustable artist bench & on-site tuning',
                    ]).map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5D033]" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Configurator */}
                <div className="space-y-6 border-t border-white/10 pt-6">
                  <div>
                    <label className="mb-3 block text-xs font-bold tracking-[0.14em] text-[#C7C3C9] uppercase">
                      Rental Duration (Days):
                    </label>
                    <div className="flex flex-wrap items-center gap-3">
                      {[1, 2, 3, 7].map((days) => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setRentalDays(days)}
                          className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all ${
                            rentalDays === days
                              ? 'bg-[#F5D033] text-[#0D0A0E]'
                              : 'border border-white/20 bg-[#1A161D] text-white hover:border-white'
                          }`}
                        >
                          {days} {days === 1 ? 'Day' : 'Days'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#1A161D] p-4">
                    <span className="text-xs font-semibold tracking-[0.12em] text-white uppercase">
                      Dedicated On-Site Technician / Sound Engineer
                    </span>
                    <input
                      type="checkbox"
                      checked={includeTechnician}
                      onChange={(e) => setIncludeTechnician(e.target.checked)}
                      className="h-4 w-4 cursor-pointer accent-[#F5D033]"
                    />
                  </div>
                </div>
              </div>

              {/* Total & WhatsApp Booking Action */}
              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="mb-6 flex items-baseline justify-between">
                  <span className="text-xs font-medium tracking-[0.14em] text-[#9E9A9F] uppercase">
                    Estimated Total ({rentalDays} {rentalDays === 1 ? 'Day' : 'Days'}):
                  </span>
                  <span className="font-display-condensed text-3xl font-normal text-[#F5D033]">
                    KES {totalPrice.toLocaleString()}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between rounded-full bg-white py-2.5 pr-2.5 pl-6 text-xs font-bold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform duration-200 hover:scale-[1.01] hover:bg-[#F5D033]"
                >
                  <span>Book This Equipment on WhatsApp &rarr;</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D0A0E] text-xs text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RELATED ITEMS / CATALOG CROSS-SELL */}
      <section className="border-b border-white/10 bg-[#0D0A0E]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 border-b border-white/15 pb-6 sm:flex-row sm:items-end">
            <div>
              <span className="mb-2 block text-[11px] font-medium tracking-[0.16em] text-[#9E9A9F] uppercase">
                Complementary Gear
              </span>
              <h2 className="font-display-condensed text-3xl font-normal text-white md:text-5xl">
                Frequently Rented Together <span className="text-[#F5D033]">&#10022;</span>
              </h2>
            </div>
            <a
              href="/event-equipment-supplies"
              onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
              className="group inline-flex items-center gap-3 self-start rounded-full bg-white py-2 pr-2 pl-5 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-transform hover:scale-[1.02] hover:bg-[#F5D033] sm:self-auto"
            >
              <span>View All Catalog &rarr;</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0D0A0E] text-xs text-white">
                &rarr;
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: 'Fender & Marshall Full Band Guitar Rig',
                price: 'KES 25,000 / day',
                img: Guitarrig,
              },
              {
                title: 'Pro Line-Array Sound System',
                price: 'KES 55,000 / day',
                img: Soundsystem,
              },
              {
                title: 'Moving Head Stage Lighting & Wash Rig',
                price: 'KES 35,000 / day',
                img: Lighting,
              },
            ].map((rel, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border border-white/15 bg-[#141016] p-5 transition-all duration-200 hover:border-[#F5D033]/70"
              >
                <div className="mb-4 aspect-[16/11] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#1B171E]">
                  <img
                    src={rel.img}
                    alt={rel.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display-condensed mb-3 text-2xl font-normal tracking-wide text-white transition-colors group-hover:text-[#F5D033]">
                  {rel.title}
                </h3>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-xs font-semibold tracking-[0.1em] text-[#F5D033]">
                    {rel.price}
                  </span>
                  <a
                    href="/event-equipment-supplies"
                    onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                    className="rounded-full border border-white/20 px-3.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-white uppercase no-underline transition-colors hover:border-white hover:bg-white hover:text-[#0D0A0E]"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="bg-[#0D0A0E] px-6 py-16 md:px-10 md:py-24">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 rounded-3xl bg-[#EDEDED] px-8 py-14 text-[#0D0A0E] md:px-14 md:py-20 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
              Professional Logistics &amp; Crew <span className="text-[#D4A800]">&#10022;</span>
            </span>
            <h2 className="font-display-condensed mb-5 text-4xl font-normal leading-[0.96] text-[#0D0A0E] md:text-6xl">
              Ready to Secure This Equipment for Your Event Date?
            </h2>
            <p className="text-sm leading-relaxed text-[#0D0A0E]/80 md:text-base">
              Our technical logistics team at Commerce House, Nairobi coordinates
              delivery, precision tuning, sound engineering, and strike across
              Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a, and Kajiado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="group inline-flex items-center gap-3 rounded-full bg-[#0D0A0E] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Proceed to Booking &rarr;</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs text-[#0D0A0E]">
                &rarr;
              </span>
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="group inline-flex items-center gap-3 rounded-full border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
            >
              <span>Speak with an Engineer</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D0A0E] text-xs text-white">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}