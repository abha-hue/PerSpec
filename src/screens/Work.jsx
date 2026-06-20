import { useEffect, useState } from 'react';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import Ticker from '../components/Ticker';

export default function Work() {
  const [filter, setFilter] = useState('All Projects');

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.project-card img');
      cards.forEach(img => {
        const scrollPos = window.pageYOffset;
        const offsetTop = img.parentElement.offsetTop;
        const diff = scrollPos - offsetTop;
        if (window.innerWidth > 768) {
          img.style.transform = `translateY(${diff * 0.05}px) scale(1.1)`;
        } else {
          img.style.transform = `translateY(0px) scale(1.0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnterCta = () => {
    document.body.style.transition = "background-color 0.5s";
    document.body.style.backgroundColor = "#e5e2e1"; // Light background for inversion
    document.body.style.color = "#131313";
  };

  const handleMouseLeaveCta = () => {
    document.body.style.backgroundColor = "#131313";
    document.body.style.color = "#e5e2e1";
  };

  useEffect(() => {
    return () => {
      // Cleanup body styles on unmount
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.transition = "";
    };
  }, []);

  return (
    <main className="pt-40 transition-colors duration-500">
      {/* Hero Section */}
      <section className="px-margin-desktop max-w-[1440px] mx-auto mb-24">
        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-start-1 col-span-12 md:col-span-8">
            <h1 className="font-display-hero text-display-hero mb-8 uppercase">Selected<br/>Work</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              A curated collection of strategic design and digital solutions that helped our partners redefine their industries.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-margin-desktop max-w-[1440px] mx-auto mb-16 border-b border-outline-variant pb-8">
        <div className="flex flex-wrap items-center gap-8 font-label-mono text-label-mono uppercase tracking-widest">
          {['All Projects', 'Branding', 'Digital Product', 'Campaign', 'Motion'].map((item) => (
            <button 
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item 
                ? "text-tertiary border-b border-tertiary pb-1" 
                : "text-on-surface-variant hover:text-on-surface transition-colors"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid (Asymmetrical Masonry Style) */}
      <section className="px-margin-desktop max-w-[1440px] mx-auto mb-section-gap">
        <div className="grid grid-cols-12 gap-gutter">
          {/* Project 1: Large Vertical */}
          <div className="col-span-12 md:col-span-7 mb-gutter">
            <div className="project-card relative group cursor-pointer overflow-hidden aspect-[4/5] border border-surface-variant">
              <img src={image4} alt="Vanguard" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[800ms] ease-out group-hover:scale-105" />
              <div className="project-overlay absolute inset-0 bg-background/90 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-label-mono text-label-mono text-tertiary mb-4 uppercase tracking-tighter">Branding &amp; Strategy</span>
                <h3 className="font-headline-lg text-headline-lg uppercase mb-2">Vanguard</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Redefining luxury architectural spaces for the digital era.</p>
              </div>
            </div>
          </div>

          {/* Project 2: Square Top Right */}
          <div className="col-span-12 md:col-span-5 md:mt-24 mb-gutter">
            <div className="project-card relative group cursor-pointer overflow-hidden aspect-square border border-surface-variant">
              <img src={image5} alt="Nexus Finance" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[800ms] ease-out group-hover:scale-105" />
              <div className="project-overlay absolute inset-0 bg-background/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-label-mono text-label-mono text-tertiary mb-4 uppercase tracking-tighter">Web Experience</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">Nexus Finance</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">A precision-driven platform for global assets.</p>
              </div>
            </div>
          </div>

          {/* Project 3: Medium Left */}
          <div className="col-span-12 md:col-span-5 mb-gutter md:-mt-12">
            <div className="project-card relative group cursor-pointer overflow-hidden aspect-[3/4] border border-surface-variant">
              <img src={image6} alt="Edition 01" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[800ms] ease-out group-hover:scale-105" />
              <div className="project-overlay absolute inset-0 bg-background/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-label-mono text-label-mono text-tertiary mb-4 uppercase tracking-tighter">Campaign</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">Edition 01</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Visualizing the future of print in a digital world.</p>
              </div>
            </div>
          </div>

          {/* Project 4: Large Horizontal */}
          <div className="col-span-12 md:col-span-7 mb-gutter">
            <div className="project-card relative group cursor-pointer overflow-hidden aspect-[16/9] border border-surface-variant">
              <img src={image7} alt="Pulse" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[800ms] ease-out group-hover:scale-105" />
              <div className="project-overlay absolute inset-0 bg-background/90 p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-label-mono text-label-mono text-tertiary mb-4 uppercase tracking-tighter">Digital Art</span>
                <h3 className="font-headline-lg text-headline-lg uppercase mb-2">Pulse</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">An interactive light installation for Tokyo Design Week.</p>
              </div>
            </div>
          </div>

          {/* Project 5: Small offset */}
          <div className="col-span-12 md:col-start-3 md:col-span-4 mb-gutter">
            <div className="project-card relative group cursor-pointer overflow-hidden aspect-square border border-surface-variant">
              <img src={image8} alt="Kuro" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[800ms] ease-out group-hover:scale-105" />
              <div className="project-overlay absolute inset-0 bg-background/90 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-label-mono text-label-mono text-tertiary mb-4 uppercase tracking-tighter">Visual Identity</span>
                <h3 className="font-headline-md text-headline-md uppercase mb-2">Kuro</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Crafting silence for a premium lifestyle brand.</p>
              </div>
            </div>
          </div>

          {/* Project 6: Full width immersive */}
          <div className="col-span-12 mt-12">
            <div className="project-card relative group cursor-pointer overflow-hidden h-[600px] border border-surface-variant">
              <img src={image9} alt="The Retreat" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[800ms] ease-out group-hover:scale-105" />
              <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-12 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="max-w-2xl">
                  <span className="font-label-mono text-label-mono text-tertiary mb-4 uppercase tracking-tighter">Environmental Design</span>
                  <h3 className="font-display-hero text-[80px] leading-tight uppercase mb-4">The Retreat</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">A holistic branding and spatial project for a secluded mountain sanctuary.</p>
                  <button className="bg-tertiary text-on-tertiary px-8 py-3 font-label-mono text-label-mono uppercase tracking-widest active:scale-95 transition-transform">View Full Case Study</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <Ticker />

      {/* CTA Section */}
      <section className="px-margin-desktop py-section-gap max-w-[1440px] mx-auto text-center">
        <h2 className="font-display-hero text-display-hero mb-12 uppercase tracking-tighter">Your next<br/>bold move.</h2>
        <div className="flex flex-col items-center gap-8">
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            We're ready to partner with brands that aren't afraid of the future. Let's create something that lasts.
          </p>
          <button 
            className="group relative px-12 py-6 bg-transparent border-2 border-primary text-primary font-headline-md text-headline-md uppercase overflow-hidden transition-all duration-500 hover:text-black"
            onMouseEnter={handleMouseEnterCta}
            onMouseLeave={handleMouseLeaveCta}
          >
            <span className="relative z-10">Start a project</span>
            <div className="absolute inset-0 bg-tertiary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </section>
    </main>
  );
}
