import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [focusedField, setFocusedField] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Entrance Reveal
      gsap.fromTo(".contact-hero-animate", 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      );

      // 2. Form & Side Contact Info Staggered Reveal on Scroll
      gsap.fromTo(".contact-grid-animate",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-grid-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getLabelClass = (fieldName) =>
    `font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-4 transition-colors duration-300 ${focusedField === fieldName ? 'text-tertiary' : ''}`;

  return (
    <main ref={containerRef}>
      {/* Immersive Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 noise-bg"></div>
        {/* Sophisticated 3D-ish Placeholder */}
        <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full bg-gradient-to-tr from-black via-surface-container-lowest to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tertiary/5 rounded-full blur-[120px]"></div>
        </div>
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop w-full max-w-[1440px]">
          <h1 className="font-display-hero text-[64px] md:text-[160px] leading-[0.9] tracking-tighter hero-text-shadow contact-hero-animate">
            Let's build the <br />
            <span className="italic font-light text-outline">unconventional.</span>
          </h1>
          <div className="mt-12 flex items-center gap-8 contact-hero-animate">
            <div className="h-px w-24 bg-tertiary"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">Transforming bold ideas into architectural digital experiences. Your inquiry starts here.</p>
          </div>
        </div>
        {/* Background Text Decoration */}
        <div className="absolute -bottom-10 -right-20 font-display-hero text-[240px] text-surface-container-lowest opacity-20 pointer-events-none select-none whitespace-nowrap">
          CONTACT CONTACT CONTACT
        </div>
      </section>

      {/* Inquiry & Contact Grid */}
      <section className="bg-background py-section-gap px-margin-mobile md:px-margin-desktop contact-grid-section">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-section-gap lg:gap-gutter">

          {/* Left Side: Architectural Form */}
          <div className="lg:col-span-7 contact-grid-animate">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg mb-4">New Inquiry</h2>
              <div className="h-1 w-20 bg-tertiary"></div>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className={getLabelClass('name')} htmlFor="name">01. Identity</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-4 font-body-lg text-body-lg transition-all placeholder:text-surface-variant/40 outline-none"
                  id="name"
                  name="name"
                  placeholder="Name or Company"
                  type="text"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative group">
                <label className={getLabelClass('email')} htmlFor="email">02. Communication</label>
                <input
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-4 font-body-lg text-body-lg transition-all placeholder:text-surface-variant/40 outline-none"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                  type="email"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative group md:col-span-2">
                <label className={getLabelClass('type')} htmlFor="type">03. Project Scope</label>
                <select
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-4 font-body-lg text-body-lg appearance-none cursor-pointer transition-all outline-none"
                  id="type"
                  name="type"
                  defaultValue=""
                  onFocus={() => setFocusedField('type')}
                  onBlur={() => setFocusedField(null)}
                >
                  <option className="bg-surface" disabled value="">Select Engagement Type</option>
                  <option className="bg-surface" value="brand">Brand Architecture</option>
                  <option className="bg-surface" value="digital">Digital Product Design</option>
                  <option className="bg-surface" value="strategy">Strategic Ecosystems</option>
                </select>
                <div className="absolute right-0 bottom-4 pointer-events-none text-outline">
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>

              <div className="relative group md:col-span-2">
                <label className={getLabelClass('message')} htmlFor="message">04. The Vision</label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-tertiary focus:ring-0 px-0 py-4 font-body-lg text-body-lg transition-all placeholder:text-surface-variant/40 resize-none outline-none"
                  id="message"
                  name="message"
                  placeholder="Describe the unconventional..."
                  rows="3"
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-8">
                <button className="group inline-flex items-center gap-12 bg-on-background text-background px-12 py-8 font-headline-md text-headline-md hover:bg-tertiary hover:text-on-tertiary transition-all duration-500 overflow-hidden relative" type="submit">
                  <span className="relative z-10">Submit Inquiry</span>
                  <span className="material-symbols-outlined relative z-10 transform group-hover:translate-x-4 transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_right_alt</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Sophisticated Contact Details */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-24 border-l border-outline-variant pl-gutter contact-grid-animate">
            <div className="space-y-12">
              <div>
                <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-widest block mb-6">Electronic Mail</span>
                <a className="font-headline-md text-headline-md hover:text-tertiary transition-colors block" href="mailto:hello@perspec.agency">hello@perspec.agency</a>
              </div>
              <div>
                <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-6">Direct Line</span>
                <a className="font-headline-md text-headline-md hover:text-tertiary transition-colors block" href="tel:+1234567890">+1 (234) 567 890</a>
              </div>
            </div>

            <div className="space-y-8">
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block">Physical Base</span>
              <div className="p-8 border border-outline-variant hover:border-tertiary transition-colors group cursor-pointer">
                <p className="font-body-lg text-body-lg mb-8 leading-relaxed">
                  422 Minimalist Way, Suite 101<br />
                  Creative District, NY 10012
                </p>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-mono text-label-mono">40.7128° N, 74.0060° W</span>
                  <span className="material-symbols-outlined group-hover:text-tertiary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>
            </div>

            <div>
              <span className="font-label-mono text-label-mono text-on-surface-variant uppercase tracking-widest block mb-8">Global Network</span>
              <div className="grid grid-cols-2 gap-4">
                <a className="border border-outline-variant p-4 font-label-mono text-label-mono hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-all text-center" href="#">Instagram</a>
                <a className="border border-outline-variant p-4 font-label-mono text-label-mono hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-all text-center" href="#">LinkedIn</a>
                <a className="border border-outline-variant p-4 font-label-mono text-label-mono hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-all text-center" href="#">Behance</a>
                <a className="border border-outline-variant p-4 font-label-mono text-label-mono hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-all text-center" href="#">Twitter X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtle Ticker */}
      <section className="py-12 border-y border-outline-variant overflow-hidden bg-surface-container-lowest">
        <div className="inline-flex w-max whitespace-nowrap" style={{ animation: "ticker 30s linear infinite" }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              <span className="font-headline-md text-headline-md opacity-20 hover:opacity-100 transition-opacity uppercase font-black cursor-default">Inquiry</span>
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <span className="font-headline-md text-headline-md opacity-20 hover:opacity-100 transition-opacity uppercase font-black cursor-default">Process</span>
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <span className="font-headline-md text-headline-md opacity-20 hover:opacity-100 transition-opacity uppercase font-black cursor-default">Collaboration</span>
              <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
