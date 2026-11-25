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
    category: 'Bookings & Payments',
    question: 'How far in advance should I make a booking?',
    answer:
      'We recommend booking as early as possible to allow enough time for planning, coordination and preparation. The ideal lead time depends on the scale and requirements of your event. However, you can still reach out for last-minute enquiries, and our team will advise on availability.',
  },
  {
    id: '02',
    category: 'Bookings & Payments',
    question: 'How do your booking and payment arrangements work?',
    answer:
      'Once we understand your event requirements, we provide a quotation outlining the services, equipment and associated costs. A deposit is required to confirm your booking, with the remaining balance payable according to the agreed payment schedule. We accept M-Pesa and bank transfers.',
  },
  {
    id: '03',
    category: 'Services & Planning',
    question: 'What types of events and occasions do you cater for?',
    answer:
      'We provide event solutions for a wide range of occasions, including corporate functions, private celebrations, weddings, social gatherings, church events, school functions, launches and community events. Our services can be tailored to suit the nature and scale of each occasion.',
  },
  {
    id: '04',
    category: 'Services & Planning',
    question: 'Can I hire individual services or request a complete event setup?',
    answer:
      'Absolutely. You can engage us for individual services such as audiovisual production, event equipment hire or décor and styling. Alternatively, we can bring different elements together to deliver a coordinated event setup based on your needs.',
  },
  {
    id: '05',
    category: 'Equipment & Production',
    question: 'What event equipment and production services do you offer?',
    answer:
      'Our offerings include audiovisual equipment, sound systems, lighting, staging, event structures, décor elements and other event essentials. Availability depends on your requirements, event size and technical specifications.',
  },
  {
    id: '06',
    category: 'Equipment & Production',
    question: 'Do you handle delivery, installation and dismantling?',
    answer:
      'Yes. Depending on the services and equipment booked, our team can coordinate transportation, installation, technical setup and dismantling after the event. These arrangements are discussed and included in your quotation.',
  },
  {
    id: '07',
    category: 'Locations & Logistics',
    question: 'Which locations do you serve?',
    answer:
      'We are based in Nairobi and serve clients across Nairobi and surrounding areas. We can also accommodate events in other parts of Kenya, depending on the project scope, logistics and availability. Transport and related arrangements are outlined in your quotation.',
  },
  {
    id: '08',
    category: 'Locations & Logistics',
    question: 'Can you work with our preferred venue or event planner?',
    answer:
      'Certainly. We can work alongside venue management, event planners, coordinators and other service providers to ensure everything comes together smoothly. We are happy to collaborate with your existing team or help coordinate the elements within our scope.',
  },
  {
    id: '09',
    category: 'Customisation & Support',
    question: 'Can your services be customised to fit our budget?',
    answer:
      'Yes. Every event has different requirements, priorities and budgets. We work with you to identify suitable services, equipment and setup options that align with your plans. You can select individual items or combine services into a customised package.',
  },
  {
    id: '10',
    category: 'Customisation & Support',
    question: 'What happens if our event plans or requirements change?',
    answer:
      'We understand that event plans can evolve. If you need to adjust your booking, contact our team as early as possible. We will review the requested changes and advise on availability, scheduling and any additional costs that may apply.',
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
