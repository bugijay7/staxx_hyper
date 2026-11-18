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
    <div className="bg-white pt-20 font-sans text-teal-900 antialiased md:pt-24">
      {/* 1. BREADCRUMB & HEADER */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div
          className="mx-auto max-w-[1440px] px-6 pt-8 pb-12 md:px-10 md:pt-12 md:pb-16"
          data-aos="fade-down"
        >
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <div className="flex items-center gap-3">
              <a
                href="/event-equipment-supplies"
                onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                className="underline hover:text-teal-900"
              >
                &larr; Back to Equipment Catalog
              </a>
              <span>&bull;</span>
              <span>{product.category}</span>
            </div>
            <span>Item ID: {product.id || 'EQ-01'}</span>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* Left: Image Gallery */}
            <div className="space-y-4" data-aos="fade-up">
              <div className="aspect-[16/11] w-full overflow-hidden border border-neutral-900/15 bg-neutral-200">
                <img
                  src={images[activeImage]}
                  alt={product.title}
                  className="h-full w-full object-cover grayscale transition-all duration-500"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4">
                {images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-[16/11] cursor-pointer overflow-hidden border transition-all ${
                      activeImage === idx
                        ? 'border-neutral-900 opacity-100'
                        : 'border-neutral-900/25 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info & Rental Configurator */}
            <div
              className="flex flex-col justify-between border border-neutral-900/15 bg-white p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <span className="mb-3 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                  Professional Equipment Hire
                </span>
                <h1 className="mb-4 text-3xl font-normal tracking-[-0.02em] leading-tight text-teal-900 md:text-4xl">
                  {product.title}
                </h1>

                <div className="mb-6 flex items-baseline gap-3 border-b border-neutral-900/15 pb-6">
                  <span className="text-3xl font-normal tracking-[-0.03em] text-teal-900">
                    {product.price || `KES ${basePrice.toLocaleString()} / day`}
                  </span>
                  <span className="text-xs tracking-[0.1em] text-neutral-500 uppercase">
                    Includes Delivery &amp; Setup in Nairobi
                  </span>
                </div>

                <p className="mb-8 text-base leading-relaxed text-neutral-700">
                  {product.desc}
                </p>

                {/* Specs List */}
                <div className="mb-8 space-y-3 border-t border-neutral-900/15 pt-6">
                  <h3 className="text-xs font-medium tracking-[0.14em] text-teal-900 uppercase">
                    Technical Specifications:
                  </h3>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {(product.specs || [
                      'Concert Grand 7\'6"',
                      'Gloss Ebony Finish',
                      'Includes adjustable artist bench & on-site tuning',
                    ]).map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 bg-neutral-900" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Configurator */}
                <div className="space-y-6 border-t border-neutral-900/15 pt-6">
                  <div>
                    <label className="mb-2 block text-xs font-medium tracking-[0.12em] text-teal-900 uppercase">
                      Rental Duration (Days):
                    </label>
                    <div className="flex items-center gap-4">
                      {[1, 2, 3, 7].map((days) => (
                        <button
                          key={days}
                          type="button"
                          onClick={() => setRentalDays(days)}
                          className={`cursor-pointer border px-4 py-2 text-xs tracking-[0.12em] uppercase transition-all ${
                            rentalDays === days
                              ? 'border-neutral-900 bg-neutral-900 text-[#f9f9f8]'
                              : 'border-neutral-900/25 bg-white text-teal-900 hover:border-neutral-900'
                          }`}
                        >
                          {days} {days === 1 ? 'Day' : 'Days'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-900/15 pt-4">
                    <span className="text-xs font-medium tracking-[0.12em] text-teal-900 uppercase">
                      Dedicated On-Site Technician / Sound Engineer
                    </span>
                    <input
                      type="checkbox"
                      checked={includeTechnician}
                      onChange={(e) => setIncludeTechnician(e.target.checked)}
                      className="h-4 w-4 cursor-pointer accent-neutral-900"
                    />
                  </div>
                </div>
              </div>

              {/* Total & WhatsApp Booking Action */}
              <div className="mt-10 border-t border-neutral-900/15 pt-6">
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase">
                    Estimated Total ({rentalDays} {rentalDays === 1 ? 'Day' : 'Days'}):
                  </span>
                  <span className="text-2xl font-normal tracking-[-0.02em] text-teal-900">
                    KES {totalPrice.toLocaleString()}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#f9f9f8] bg-white py-4 text-center text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors hover:bg-transparent hover:text-[#f9f9f8]"
                >
                  Book This Equipment on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. RELATED ITEMS / CATALOG CROSS-SELL */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="mb-12 flex items-center justify-between border-b border-neutral-900/15 pb-6">
            <div>
              <span className="mb-2 block text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
                Complementary Gear
              </span>
              <h2 className="text-3xl font-normal tracking-[-0.02em] text-teal-900">
                Frequently Rented Together
              </h2>
            </div>
            <a
              href="/event-equipment-supplies"
              onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
              className="text-xs font-medium tracking-[0.14em] text-teal-900 uppercase underline hover:opacity-65"
            >
              View All Catalog &rarr;
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
                className="group border border-neutral-900/15 bg-white p-6 transition-colors duration-200 hover:border-neutral-900"
              >
                <div className="mb-4 aspect-[16/11] w-full overflow-hidden bg-neutral-200">
                  <img
                    src={rel.img}
                    alt={rel.title}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-103 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mb-2 text-lg font-normal text-teal-900">
                  {rel.title}
                </h3>
                <div className="flex items-center justify-between border-t border-neutral-900/15 pt-4">
                  <span className="text-xs font-medium tracking-[0.1em] text-teal-900">
                    {rel.price}
                  </span>
                  <a
                    href="/event-equipment-supplies"
                    onClick={(e) => handleLinkClick(e, '/event-equipment-supplies')}
                    className="text-[10px] tracking-[0.14em] text-gray-900 uppercase underline hover:text-teal-900"
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
      <section className="bg-teal-900 text-[#f9f9f8]">
        <div
          className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Professional Logistics &amp; Crew
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Ready to Secure This Equipment for Your Event Date?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Our technical logistics team at Commerce House, Nairobi coordinates
              delivery, precision tuning, sound engineering, and strike across
              Nairobi, Kiambu, Nakuru, Machakos, Murang&rsquo;a, and Kajiado.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-white px-7 py-4 text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Proceed to Booking &rarr;
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Speak with an Engineer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}