import React, { useState } from 'react';

export default function Faqs({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaqId, setOpenFaqId] = useState('01');

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    }
  };

  const faqs = [
    {
      id: '01',
      category: 'Booking & Payments',
      question: 'How far in advance should I book my child’s birthday party?',
      answer:
        'We recommend booking at least 2 to 3 weeks in advance—especially for peak weekend dates in April, August, and December school holidays. However, if you are planning a last-minute celebration, reach out via WhatsApp and we will check same-week availability for our equipment and setup crews.',
    },
    {
      id: '02',
      category: 'Booking & Payments',
      question: 'How do payments and deposits work in Kenya Shillings (KES)?',
      answer:
        'Once we confirm your date, venue, and itemized KES quote, a 40% deposit secures your booking slot and reserves your custom theme props and inflatables. The remaining 60% balance is payable 48 hours before the event or upon full setup completion on site via M-Pesa Till/Paybill or bank transfer.',
    },
    {
      id: '03',
      category: 'Delivery & Setup',
      question: 'Which areas do you deliver and set up in?',
      answer:
        'Standard delivery, setup, and post-party pack-down are included across Nairobi and surrounding suburbs—including Karen, Runda, Lavington, Kilimani, Kileleshwa, Westlands, Muthaiga, Lang’ata, Syokimau, Ruaka, and Kiambu Road. We also travel to Naivasha, Machakos, Thika, and Mombasa for large bookings with a modest transport allowance.',
    },
    {
      id: '04',
      category: 'Delivery & Setup',
      question: 'How early does your team arrive before the party starts?',
      answer:
        'Our setup crew arrives 2 to 3 hours prior to your guest arrival time (for example, by 8:30 AM for an 11:00 AM party). This gives us plenty of time to anchor and sanitize bouncy castles, assemble 3D backdrops, style balloon garlands, and test concession machines before the first child walks in.',
    },
    {
      id: '05',
      category: 'Safety & Equipment',
      question: 'Are your bouncy castles and soft play arenas sanitized and supervised?',
      answer:
        'Yes—100%. Every inflatable and soft play block is thoroughly washed and disinfected with child-safe, non-toxic sanitizers before and after each event. All commercial bouncy castles and obstacle courses also come with a trained Staxx safety attendant to monitor capacity and keep play safe.',
    },
    {
      id: '06',
      category: 'Safety & Equipment',
      question: 'What happens if there is a power outage or no electricity at our park venue?',
      answer:
        'Bouncy castle blowers and popcorn/cotton candy machines require continuous power. If you are hosting at a public park like Karura Forest or an estate lawn without sockets, we can supply a quiet, fuel-ready standby generator as an affordable add-on so the fun never stops.',
    },
    {
      id: '07',
      category: 'Weather & Customizations',
      question: 'What if it rains on the day of our outdoor garden party?',
      answer:
        'We know Nairobi weather can be unpredictable during the March–May and November rains! You can add waterproof marquee tents to any outdoor booking, relocate the setup indoors into a living room or estate clubhouse, or reschedule your date once at zero penalty with 24 hours’ notice.',
    },
    {
      id: '08',
      category: 'Weather & Customizations',
      question: 'Can we mix and match items or customize a package to fit our budget?',
      answer:
        'Absolutely. While our 5 KES packages cover most party sizes, you can book single items—such as just a bouncy castle, a custom piñata, face painting, or kids’ Chiavari chairs—or swap inclusions to match your exact guest count and budget.',
    },
  ];

  const categories = [
    'All',
    'Booking & Payments',
    'Delivery & Setup',
    'Safety & Equipment',
    'Weather & Customizations',
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-white pt-20 font-sans text-teal-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Hyper Kids Events</span>
            <span>Help Center &bull; Booking, Safety &amp; Logistics</span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-teal-900 sm:text-6xl lg:text-[4.5rem]">
              Frequently Asked <br />
              <span className="text-neutral-500">Questions</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-900 md:text-sm lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Everything you need to know about booking kids&apos; party setups,
              hiring commercial inflatables, M-Pesa deposits, power backup, and
              rainy-day plans across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER STRIP */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            Filter by Topic ({filteredFaqs.length})
          </span>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'border-neutral-900 font-medium text-teal-900'
                      : 'border-transparent text-neutral-400 hover:text-teal-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. ACCORDION FAQ LIST & QUICK HELP SIDEBAR */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Accordion Column */}
            <div className="border-t border-neutral-900/15 lg:col-span-8">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`border-b border-neutral-900/15 transition-colors duration-200 ${
                      isOpen ? 'bg-white' : 'bg-white hover:bg-white/60'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 px-6 py-7 text-left md:px-8"
                    >
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                          <span className="font-medium text-teal-900">
                            [ {faq.id} ]
                          </span>
                          <span>&bull;</span>
                          <span>{faq.category}</span>
                        </div>

                        <h2 className="text-lg font-normal tracking-[-0.015em] leading-snug text-teal-900 md:text-xl">
                          {faq.question}
                        </h2>
                      </div>

                      <span
                        aria-hidden="true"
                        className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border text-xs transition-colors duration-200 ${
                          isOpen
                            ? 'border-neutral-900 bg-neutral-900 text-[#f9f9f8]'
                            : 'border-neutral-900/20 text-teal-900'
                        }`}
                      >
                        {isOpen ? '↑' : '↓'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-8 md:px-8">
                        <div className="border-t border-neutral-900/10 pt-5 text-sm leading-relaxed text-gray-900 md:text-base">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Quick Support Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28 lg:col-span-4">
              {/* Quick Facts Card */}
              <div className="space-y-6 border border-neutral-900/15 bg-white p-8">
                <div className="border-b border-neutral-900/15 pb-4">
                  <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
                    [ Quick Facts ]
                  </span>
                </div>

                <div className="divide-y divide-neutral-900/10 text-sm">
                  <div className="pb-4">
                    <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                      Booking Deposit
                    </span>
                    <p className="mt-1 font-medium text-teal-900">
                      40% via M-Pesa or Bank Transfer
                    </p>
                  </div>

                  <div className="py-4">
                    <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                      Setup Arrival Window
                    </span>
                    <p className="mt-1 font-medium text-teal-900">
                      2 – 3 Hours Before Party Start
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="block text-[10px] tracking-[0.14em] text-neutral-400 uppercase">
                      Safety Guarantee
                    </span>
                    <p className="mt-1 font-medium text-teal-900">
                      Sanitized Gear + On-Site Attendant
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="space-y-5 border border-neutral-900 bg-neutral-900 p-8 text-[#f9f9f8]">
                <span className="block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
                  [ Still Have a Question? ]
                </span>
                <h3 className="text-xl font-normal tracking-[-0.01em] leading-snug">
                  Speak Directly With Our Nairobi Event Team
                </h3>
                <p className="text-xs leading-relaxed text-neutral-300">
                  Need help measuring lawn space for a giant inflatable or
                  customizing a school fun-day quote? We reply within minutes on
                  WhatsApp.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full border border-[#f9f9f8] bg-white py-3.5 text-center text-xs font-medium tracking-[0.14em] text-teal-900 uppercase no-underline transition-colors hover:bg-transparent hover:text-[#f9f9f8]"
                  >
                    Chat on WhatsApp
                  </a>
                  <a
                    href="/booking"
                    onClick={(e) => handleLinkClick(e, '/booking')}
                    className="block w-full border border-[#f9f9f8]/30 bg-transparent py-3 text-center text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors hover:border-[#f9f9f8]"
                  >
                    Submit Booking Enquiry &rarr;
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