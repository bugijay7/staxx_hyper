import React, { useState, useEffect } from 'react';

export default function Blog({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    if (!activePost) return;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActivePost(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePost]);

  const handleLinkClick = (e, path) => {
    if (e.metaKey || e.ctrlKey || e.button === 1) return;
    if (onNavigate) {
      e.preventDefault();
      setActivePost(null);
      onNavigate(path);
    }
  };

  const blogPosts = [
    {
      id: '01',
      title: '10 Best Outdoor Kids’ Birthday Venues & Picnic Parks in Nairobi',
      category: 'Venues & Spaces',
      readTime: '5 Min Read',
      date: 'November 2026',
      excerpt:
        'From Karura Forest picnic glades and Paradise Lost in Kiambu to Karen gardens and Arboretum lawns—where to host an unforgettable bouncy castle party.',
      img: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
      content: [
        'Nairobi’s year-round mild weather makes outdoor garden and park birthdays a favorite for Kenyan parents. When choosing a venue, always check three essentials: flat lawn space for anchoring commercial bouncy castles, reliable power access (or space for a silent backup generator), and clean washroom proximity.',
        'Top picks include Karura Forest (KFEET grounds) for nature-loving kids, Paradise Lost in Kiambu for boat rides and lakeside picnics, and private estate clubhouses in Karen, Runda, and Lavington where our Staxx setup crew can arrive early for full balloon and backdrop installation.',
      ],
    },
    {
      id: '02',
      title: 'How to Plan a Stress-Free Birthday on a Realistic KES Budget',
      category: 'Planning & Budgets',
      readTime: '6 Min Read',
      date: 'October 2026',
      excerpt:
        'Smart ways Kenyan parents allocate funds across decor, inflatables, kids’ bites (samosas, mini-burgers & bhajias), and party favors without overspending.',
      img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
      content: [
        'A memorable children’s birthday doesn’t require an unlimited budget—it requires smart prioritization. Kids remember active fun (bouncy castles, face painting, and piñatas) far more than elaborate adult centerpieces.',
        'Allocate roughly 40% of your budget to entertainment and inflatables, 30% to kid-friendly Kenyan party favorites (crispy beef samosas, mini sausages, fries, cupcakes, and fresh passion juice), and 30% to one high-impact photo backdrop and balloon garland.',
      ],
    },
    {
      id: '03',
      title: 'Afro-Royal Safari Themes: Celebrating Heritage at Kids’ Parties',
      category: 'Theme Inspiration',
      readTime: '4 Min Read',
      date: 'October 2026',
      excerpt:
        'Swap generic imported plastic decor for bold Kitenge runners, woven Maasai shields, djembe drumming circles, and savannah animal props.',
      img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
      content: [
        'More Kenyan parents are embracing Afro-inspired celebrations that feel vibrant, authentic, and deeply personal. Rich ochre, emerald green, and golden yellow balloon garlands pair effortlessly with Kitenge fabric table runners and woven sisal baskets.',
        'Add an interactive djembe drumming session where every child gets a mini drum, alongside lion and elephant face painting, for an energetic cultural celebration that photographs beautifully.',
      ],
    },
    {
      id: '04',
      title: 'Apartment Clubhouse Party Hacks for Kilimani, Kileleshwa & Westlands',
      category: 'Venues & Spaces',
      readTime: '5 Min Read',
      date: 'September 2026',
      excerpt:
        'Short on sprawling lawn space? Here is how to fit soft play arenas, magic shows, popcorn carts, and 3D backdrops into apartment rooftops and clubhouses.',
      img: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=900&q=80',
      content: [
        'Hosting in an apartment clubhouse or covered rooftop terrace doesn’t mean sacrificing the "wow" factor. Compact padded soft play zones, mini castle bouncers, and sailboard backdrops are engineered specifically for indoor and semi-covered urban spaces.',
        'Remember to notify your estate management 48 hours ahead for delivery gate passes and confirm lift dimensions for backdrop panels—our Staxx logistics team handles the rest.',
      ],
    },
    {
      id: '05',
      title: 'Rainy Season Backup Plans: Hosting During March–May & November Rains',
      category: 'Planning & Budgets',
      readTime: '4 Min Read',
      date: 'September 2026',
      excerpt:
        'Don’t let an afternoon Nairobi downpour spoil the fun. Discover waterproof marquee tents, indoor silent discos, and flexible weather rescheduling.',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80',
      content: [
        'In Nairobi and the highlands, bright sunny mornings can quickly turn into crisp afternoon showers during the long and short rains. Always pair outdoor lawn setups with clear-span waterproof marquee tents and carpeted flooring.',
        'Even better, line up indoor-friendly entertainment like comedy magic shows, puppet theatre, cupcake decorating stations, and kids’ LED silent discos so the energy stays sky-high rain or shine.',
      ],
    },
    {
      id: '06',
      title: 'School Fun Days & Estate Family Carnivals: A Complete Checklist',
      category: 'School & Estate Events',
      readTime: '7 Min Read',
      date: 'August 2026',
      excerpt:
        'Organizing a term-end school fun day or estate festival for 60 to 150 kids? Use our safety, generator, crowd-flow, and concession checklist.',
      img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=900&q=80',
      content: [
        'Large school and estate events succeed when kids are grouped by age: dedicated padded toddler zones for ages 1–4, medium bouncy castles for ages 5–8, and giant inflatable obstacle courses for ages 9–13.',
        'Always include a silent standby generator for continuous blower power, dedicated safety attendants on every inflatable, and high-output popcorn and slush machines to keep queues moving fast.',
      ],
    },
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-white pt-20 font-sans text-neutral-900 antialiased md:pt-24">
      {/* 1. HERO HEADER */}
      <section className="border-b border-neutral-900/15 bg-[#f9f9f8]">
        <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 md:px-10 md:pt-12 md:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900/15 pb-4 text-[11px] tracking-[0.14em] text-neutral-500 uppercase">
            <span>Staxx Events Journal</span>
            <span>
              Nairobi Party Guides &bull; KES Budget Tips &bull; Local Venues
            </span>
          </div>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
            <h1 className="text-4xl font-normal tracking-[-0.03em] leading-[1.06] text-neutral-900 sm:text-6xl lg:text-[4.5rem]">
              Blog &amp; Kenyan <br />
              <span className="text-neutral-500">party ideas</span>
            </h1>

            <p className="text-base leading-relaxed text-neutral-600 md:text-lg lg:border-l lg:border-neutral-900/15 lg:pl-10">
              Practical party planning guides written for Kenyan parents, PTA
              committees, and estate organizers&mdash;covering Nairobi venues,
              rainy-season backups, Afro-inspired themes, and smart KES budgets.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER STRIP */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-10 md:py-10">
          <span className="text-[11px] font-medium tracking-[0.14em] text-neutral-500 uppercase">
            Browse Topics ({filteredPosts.length})
          </span>

          <div className="flex flex-wrap gap-6 md:gap-8">
            {[
              'All',
              'Venues & Spaces',
              'Planning & Budgets',
              'Theme Inspiration',
              'School & Estate Events',
            ].map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={isSelected}
                  className={`cursor-pointer border-b pb-1 text-xs tracking-[0.14em] uppercase transition-all duration-200 ${
                    isSelected
                      ? 'border-neutral-900 font-medium text-neutral-900'
                      : 'border-transparent text-neutral-400 hover:text-neutral-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BLOG POSTS GRID */}
      <section className="border-b border-neutral-900/15 bg-white">
        <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setActivePost(post)}
                className="group flex cursor-pointer flex-col justify-between border border-neutral-900/15 bg-[#f9f9f8] transition-colors duration-200 hover:bg-white"
              >
                <div>
                  {/* Top Index & Category Plate */}
                  <div className="flex items-center justify-between border-b border-neutral-900/15 px-6 py-3 text-[10px] tracking-[0.14em] text-neutral-500 uppercase">
                    <span className="font-medium text-neutral-900">
                      Issue {post.id}
                    </span>
                    <span>{post.category}</span>
                  </div>

                  {/* Image Frame */}
                  <div className="aspect-[16/10] w-full overflow-hidden border-b border-neutral-900/15 bg-neutral-100">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 md:p-8">
                    <div className="mb-3 flex items-center gap-2 text-[11px] tracking-[0.12em] text-neutral-400 uppercase">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="mb-3 text-xl font-normal tracking-[-0.015em] leading-snug text-neutral-900 transition-opacity duration-200 group-hover:opacity-70">
                      {post.title}
                    </h2>

                    <p className="text-sm leading-relaxed text-neutral-600">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer Trigger */}
                <div className="border-t border-neutral-900/15 bg-white px-6 py-4 md:px-8">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePost(post);
                    }}
                    className="cursor-pointer bg-transparent text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase transition-opacity group-hover:opacity-65"
                  >
                    Read Full Guide &rarr;
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLE READER MODAL */}
      {activePost && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePost.title}
          onClick={() => setActivePost(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/85 p-4 backdrop-blur-xs md:p-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden border border-neutral-900/20 bg-[#f9f9f8] text-neutral-900"
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between border-b border-neutral-900/15 bg-white px-6 py-4 text-[11px] tracking-[0.14em] uppercase">
              <div className="flex flex-wrap items-center gap-2 text-neutral-500">
                <strong className="font-medium text-neutral-900">
                  {activePost.category}
                </strong>
                <span>&bull;</span>
                <span>{activePost.readTime}</span>
                <span>&bull;</span>
                <span>{activePost.date}</span>
              </div>

              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="cursor-pointer bg-transparent py-1 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase transition-opacity hover:opacity-55"
              >
                Close &times;
              </button>
            </div>

            {/* Scrollable Article Content */}
            <div className="overflow-y-auto">
              <div className="aspect-[16/8] w-full overflow-hidden border-b border-neutral-900/15 bg-neutral-200">
                <img
                  src={activePost.img}
                  alt={activePost.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="space-y-6 bg-white p-6 md:p-10">
                <h3 className="text-2xl font-normal tracking-[-0.02em] leading-snug text-neutral-900 md:text-3xl">
                  {activePost.title}
                </h3>

                <div className="space-y-4 text-base leading-relaxed text-neutral-600">
                  {activePost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Modal Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-900/15 bg-[#f9f9f8] px-6 py-4">
              <a
                href="/booking"
                onClick={(e) => handleLinkClick(e, '/booking')}
                className="border border-neutral-900 bg-neutral-900 px-5 py-3 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-neutral-900"
              >
                Plan This Party With Staxx &rarr;
              </a>
              <a
                href="/party-packages"
                onClick={(e) => handleLinkClick(e, '/party-packages')}
                className="border border-neutral-900/25 bg-white px-5 py-3 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:border-neutral-900"
              >
                Compare KES Packages
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. BOTTOM CTA */}
      <section className="bg-neutral-900 text-[#f9f9f8]">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 px-6 py-20 md:px-10 md:py-28 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[11px] tracking-[0.14em] text-neutral-400 uppercase">
              Need Local Advice?
            </span>
            <h2 className="mb-5 text-3xl font-normal tracking-[-0.02em] leading-[1.12] md:text-5xl">
              Not Sure Which Venue or Package Fits Best?
            </h2>
            <p className="text-base leading-relaxed text-neutral-300">
              Our Nairobi party planners know the exact layout, power rules, and
              lawn dimensions of estates, parks, and clubhouses across the city.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/booking"
              onClick={(e) => handleLinkClick(e, '/booking')}
              className="border border-[#f9f9f8] bg-[#f9f9f8] px-7 py-4 text-xs font-medium tracking-[0.14em] text-neutral-900 uppercase no-underline transition-colors duration-200 hover:bg-transparent hover:text-[#f9f9f8]"
            >
              Talk to a Party Planner &rarr;
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#f9f9f8]/30 bg-transparent px-7 py-4 text-xs font-medium tracking-[0.14em] text-[#f9f9f8] uppercase no-underline transition-colors duration-200 hover:border-[#f9f9f8]"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}