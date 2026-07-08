import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Ticker from '../components/Ticker';
import image1 from '../assets/image1.webp';
import image2 from '../assets/image2.webp';
import image3 from '../assets/image3.webp';
import heroBg from '../assets/hero-bg.webp';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Hero Entrance Animations
      gsap.fromTo(".hero-animate",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" }
      );

      // 2. Project Cards Fade/Slide Up on Scroll
      const cards = gsap.utils.toArray('.project-card-animate');
      cards.forEach((card) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      // 3. Philosophy Section Reveals
      gsap.fromTo(".philosophy-animate",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".philosophy-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 4. Capability Rows Reveal
      gsap.fromTo(".capability-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".capabilities-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 5. CTA Section Scale/Fade Reveal
      gsap.fromTo(".cta-animate",
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-12" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex flex-col justify-center items-center px-margin-mobile md:px-margin-desktop overflow-hidden">
        {/* Cinematic Video/Image Background */}
        <div className="absolute inset-0 z-0">
          <img alt="Cinematic atmospheric background" className="w-full h-full object-cover grayscale brightness-50" src={heroBg} />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center max-w-[1200px] flex flex-col items-center">
          <p className="font-label-mono text-label-mono text-tertiary uppercase tracking-widest mb-8 hero-animate">Strategic Creative Agency</p>
          <h1 className="font-display-hero text-[64px] md:text-display-hero leading-[1] text-on-background mb-12 flex flex-col items-center hero-animate">
            <span className="block">Redefining</span>
            <span className="text-outline italic font-light">Perspectives</span>
          </h1>
          <p className="max-w-xl font-body-lg text-body-lg text-on-surface mb-12 mx-auto hero-animate">
            We blend analytical rigor with radical creativity to build brands that don't just exist—they command attention through intellectual design.
          </p>
          <Link to="/contact" className="px-12 py-6 border-2 border-tertiary text-tertiary font-headline-md text-headline-md flex items-center justify-center gap-4 hover:bg-tertiary hover:text-on-tertiary transition-all duration-500 active:scale-95">
            Collaborate <span className="material-symbols-outlined text-[40px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* Ticker Section */}
      <Ticker />

      {/* Featured Work Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-background">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="font-label-mono text-label-mono text-outline mb-4 block uppercase tracking-widest">Selected Works</span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">Impact by Design</h2>
          </div>
          <Link to="/work" className="hidden md:flex items-center gap-2 font-label-mono text-label-mono text-on-surface hover:text-tertiary transition-colors">
            View All Projects <span className="material-symbols-outlined">arrow_outward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Project 1 */}
          <div className="md:col-span-8 group cursor-pointer project-card-animate">
            <div className="relative aspect-[16/9] overflow-hidden border border-outline-variant mb-6">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={image1} alt="Project 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Omni Labs</h3>
                <p className="font-label-mono text-label-mono text-outline uppercase">Brand Identity / Digital Experience</p>
              </div>
              <span className="font-label-mono text-label-mono text-outline">2023</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="md:col-span-4 mt-0 md:mt-32 group cursor-pointer project-card-animate">
            <div className="relative aspect-[4/5] overflow-hidden border border-outline-variant mb-6">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={image2} alt="Project 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-2">Verve Magazine</h3>
            <p className="font-label-mono text-label-mono text-outline uppercase">Editorial / Creative Direction</p>
          </div>

          {/* Project 3 */}
          <div className="md:col-span-6 md:col-start-4 mt-0 md:mt-16 group cursor-pointer project-card-animate">
            <div className="relative aspect-[3/2] overflow-hidden border border-outline-variant mb-6">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img src={image3} alt="Project 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
            </div>
            <h3 className="font-headline-md text-headline-md mb-2">Eon Automotive</h3>
            <p className="font-label-mono text-label-mono text-outline uppercase">Product Strategy / WebGL Experience</p>
          </div>
        </div>
      </section>

      {/* Agency Philosophy */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest philosophy-section">
        <div className="max-w-[1000px] mx-auto text-center md:text-left">
          <span className="font-label-mono text-label-mono text-tertiary mb-8 block uppercase tracking-widest philosophy-animate">Our Philosophy</span>
          <blockquote className="font-headline-lg text-[32px] md:text-headline-lg leading-[1.1] text-on-surface mb-12 philosophy-animate">
            "We don't just solve problems; we dismantle the <span className="italic text-outline">obvious</span> to find the <span className="text-tertiary">essential</span>. Creativity is a strategic weapon, not a decoration."
          </blockquote>
          <div className="flex flex-col md:flex-row items-center gap-8 philosophy-animate">
            <div className="w-16 h-[2px] bg-tertiary"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              At Perspec, we believe that the most powerful brands are those that challenge convention. Our approach is rooted in deep research, intellectual curiosity, and a relentless pursuit of the extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4 mb-12 md:mb-0">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-md uppercase sticky top-32">How we <br />Elevate</h2>
          </div>
          <div className="md:col-span-8 divide-y divide-outline-variant capabilities-grid">
            {/* Service 1 */}
            <div className="py-12 flex flex-col md:flex-row justify-between group hover:pl-4 transition-all duration-300 capability-row">
              <div className="flex gap-8 items-start mb-6 md:mb-0">
                <span className="font-label-mono text-label-mono text-tertiary">01</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-4 uppercase group-hover:text-tertiary transition-colors">Branding &amp; Identity</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Developing core narratives, visual languages, and brand architectures that resonate in a crowded marketplace.</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-tertiary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
              </div>
            </div>
            {/* Service 2 */}
            <div className="py-12 flex flex-col md:flex-row justify-between group hover:pl-4 transition-all duration-300 capability-row">
              <div className="flex gap-8 items-start mb-6 md:mb-0">
                <span className="font-label-mono text-label-mono text-tertiary">02</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-4 uppercase group-hover:text-tertiary transition-colors">Digital Ecosystems</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Crafting seamless, high-performance digital products and immersive WebGL experiences that convert.</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-tertiary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
              </div>
            </div>
            {/* Service 3 */}
            <div className="py-12 flex flex-col md:flex-row justify-between group hover:pl-4 transition-all duration-300 capability-row">
              <div className="flex gap-8 items-start mb-6 md:mb-0">
                <span className="font-label-mono text-label-mono text-tertiary">03</span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-4 uppercase group-hover:text-tertiary transition-colors">Creative Direction</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-md">Strategic oversight of campaigns, editorial photography, and motion design to ensure aesthetic cohesion.</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-[48px] text-outline group-hover:text-tertiary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>center_focus_strong</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop border-t border-outline-variant cta-section">
        <div className="bg-tertiary p-margin-mobile md:p-24 text-on-tertiary flex flex-col md:flex-row justify-between items-center gap-12 group cta-animate">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg leading-tight uppercase text-center md:text-left">
            Start a <br />New Perspective
          </h2>
          <Link to="/contact" className="w-full md:w-auto h-24 px-12 border-2 border-on-tertiary font-headline-md text-headline-md flex items-center justify-center gap-4 hover:bg-on-tertiary hover:text-tertiary transition-all duration-500">
            Collaborate <span className="material-symbols-outlined text-[40px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
