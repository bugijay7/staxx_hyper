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
            <span>Staxx Hyper Kids Events</span>
            <span className="inline-flex items-center gap-2">
              <span className="text-[#F5D033]">&#10022;</span> Help Center &bull; Booking, Safety &amp; Logistics
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="font-display-condensed text-4xl font-normal leading-[0.94] text-white sm:text-6xl lg:text-[5.25rem]">
              Frequently Asked <br />
              <span className="text-white/65">Questions</span>
            </h1>

            <p className=" border border-white/10 bg-transparent p-6 text-sm leading-relaxed text-[#C7C3C9] lg:p-7">
              Everything you need to know about booking kids&apos; party setups,
              hiring commercial inflatables, M-Pesa deposits, power backup, and
              rainy-day plans across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER STRIP */}
      <section className="border-b border-white/15 bg-[#141016]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-7 md:flex-row md:items-center md:px-10 md:py-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
            <span>&#10022;</span> Filter by Topic ({filteredFaqs.length})
          </span>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer  px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#F5D033] text-[#0D0A0E]'
                      : 'border border-white/15 bg-transparent text-[#9E9A9F] hover:border-white hover:text-white'
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
      <section className="border-b border-white/10 bg-[#0F2A2A]">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
            {/* Left Accordion Column */}
            <div className="space-y-4 lg:col-span-8">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;

                return (
                  <div
                    key={faq.id}
                    className={`overflow-hidden  border transition-all duration-200 ${
                      isOpen
                        ? 'border-[#F5D033]/70 bg-[#141016]'
                        : 'border-white/15 bg-[#141016]/80 hover:border-white/35'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 px-6 py-7 text-left md:px-8"
                    >
                      <div className="space-y-2.5">
                        <div className="flex flex-wrap items-center gap-2 text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                          <span className="font-bold text-[#F5D033]">
                            [ {faq.id} ]
                          </span>
                          <span className="text-white/30">&bull;</span>
                          <span className="text-white/80">{faq.category}</span>
                        </div>

                        <h2 className="text-lg font-medium tracking-[-0.015em] leading-snug text-white md:text-xl">
                          {faq.question}
                        </h2>
                      </div>

                      <span
                        aria-hidden="true"
                        className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center  text-xs font-bold transition-colors duration-200 ${
                          isOpen
                            ? 'bg-[#F5D033] text-[#0D0A0E]'
                            : 'border border-white/20 bg-[#1C1720] text-white'
                        }`}
                      >
                        {isOpen ? '↑' : '↓'}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-8 md:px-8">
                        <div className="border-t border-white/10 pt-5 text-sm leading-relaxed text-[#C7C3C9] md:text-base">
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
              <div className="space-y-6  border border-white/15 bg-[#141016] p-8">
                <div className="border-b border-white/10 pb-4">
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#F5D033] uppercase">
                    <span>&#10022;</span> [ Quick Facts ]
                  </span>
                </div>

                <div className="divide-y divide-white/10 text-sm">
                  <div className="pb-4">
                    <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                      Booking Deposit
                    </span>
                    <p className="mt-1.5 font-medium text-white">
                      40% via M-Pesa or Bank Transfer
                    </p>
                  </div>

                  <div className="py-4">
                    <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                      Setup Arrival Window
                    </span>
                    <p className="mt-1.5 font-medium text-white">
                      2 – 3 Hours Before Party Start
                    </p>
                  </div>

                  <div className="pt-4">
                    <span className="block text-[10px] tracking-[0.16em] text-[#9E9A9F] uppercase">
                      Safety Guarantee
                    </span>
                    <p className="mt-1.5 font-medium text-white">
                      Sanitized Gear + On-Site Attendant
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Support Card */}
              <div className="space-y-5  bg-[#EDEDED] p-8 text-[#0D0A0E]">
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#0D0A0E]/70 uppercase">
                  [ Still Have a Question? ] <span className="text-[#D4A800]">&#10022;</span>
                </span>
                <h3 className="font-display-condensed text-3xl font-normal leading-[1.02] text-[#0D0A0E]">
                  Speak Directly With Our Nairobi Event Team
                </h3>
                <p className="text-xs leading-relaxed text-[#0D0A0E]/80 md:text-sm">
                  Need help measuring lawn space for a giant inflatable or
                  customizing a school fun-day quote? We reply within minutes on
                  WhatsApp.
                </p>
                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between  bg-[#0F2A2A] py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-white uppercase no-underline transition-transform duration-200 hover:scale-[1.01]"
                  >
                    <span>Chat on WhatsApp</span>
                    <span className="flex h-7 w-7 items-center justify-center  bg-white text-xs text-[#0D0A0E]">
                      &rarr;
                    </span>
                  </a>
                  <a
                    href="/booking"
                    onClick={(e) => handleLinkClick(e, '/booking')}
                    className="group flex w-full items-center justify-between  border border-[#0D0A0E]/30 bg-white py-2.5 pr-2.5 pl-6 text-xs font-semibold tracking-[0.14em] text-[#0D0A0E] uppercase no-underline transition-colors duration-200 hover:border-[#0D0A0E]"
                  >
                    <span>Submit Booking Enquiry &rarr;</span>
                    <span className="flex h-7 w-7 items-center justify-center  bg-[#0F2A2A] text-xs text-white">
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
