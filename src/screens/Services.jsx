import { useRef } from 'react';
import { Link } from 'react-router-dom';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';

export default function Services() {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const sectionRefs = [ref0, ref1, ref2];

  const handleMouseMove = (e, index) => {
    const section = sectionRefs[index].current;
    if (!section) return;
    const img = section.querySelector('.bg-cover');
    if (!img) return;

    const rect = section.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    img.style.transform = `scale(1.05) translate(${(x - 0.5) * 20}px, ${(y - 0.5) * 20}px)`;
  };

  const handleMouseLeave = (index) => {
    const section = sectionRefs[index].current;
    if (!section) return;
    const img = section.querySelector('.bg-cover');
    if (img) img.style.transform = 'scale(1) translate(0, 0)';
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center px-margin-mobile lg:px-margin-desktop py-12 max-w-[1440px] mx-auto w-full">
        <span className="font-label-mono text-label-mono text-outline block mb-8 uppercase tracking-widest">
          Capabilities
        </span>
        <h1 className="font-display-hero text-[80px] lg:text-[140px] leading-[0.9] text-on-surface mb-12 uppercase tracking-tighter">
          Systematic <br />
          <span className="italic font-light text-outline">Creativity</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-6 md:col-start-7">
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg border-l border-tertiary pl-6">
              We do not believe in aesthetics without architecture. Our services are designed to build comprehensive brand ecosystems—from the foundational narrative to the final pixel. Every touchpoint is engineered for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section
        className="px-margin-desktop max-w-[1440px] mx-auto mb-section-gap"
        id="automation"
      >
        <div
          className="grid grid-cols-12 gap-gutter group"
          ref={ref0}
          onMouseMove={(e) => handleMouseMove(e, 0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 border-t border-outline-variant pt-12">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-tertiary text-4xl service-icon transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                  <h2 className="font-headline-lg text-headline-lg">Automation</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Streamline your workflows and engage customers automatically. We design smart, scalable automation systems across messaging, email, and CRM that save time and drive conversions.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">01</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">WhatsApp Automation</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">02</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">Email Automations</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">03</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">CRM Integrations</span>
                  </li>
                </ul>
                <Link className="inline-block font-label-mono text-label-mono border-2 border-on-surface px-8 py-4 uppercase hover:bg-tertiary hover:border-tertiary hover:text-on-tertiary transition-all duration-300" to="/contact">
                  Work with us
                </Link>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="w-full aspect-square border border-outline-variant p-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-out" style={{ backgroundImage: `url(${image10})` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section
        className="px-margin-desktop max-w-[1440px] mx-auto mb-section-gap"
        id="identity"
      >
        <div
          className="grid grid-cols-12 gap-gutter group"
          ref={ref1}
          onMouseMove={(e) => handleMouseMove(e, 1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 border-t border-outline-variant pt-12">
            <div className="flex flex-col md:flex-row-reverse justify-between gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-tertiary text-4xl service-icon transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>token</span>
                  <h2 className="font-headline-lg text-headline-lg">Identity</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Visual and verbal systems designed to scale. We create rigorous design systems—typography, color theory, grid structures, and tone of voice—that ensure absolute consistency across every medium.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">04</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">Visual Identity Systems</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">05</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">Verbal Identity & Messaging</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">06</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">Art Direction & Photography</span>
                  </li>
                </ul>
                <Link className="inline-block font-label-mono text-label-mono border-2 border-on-surface px-8 py-4 uppercase hover:bg-tertiary hover:border-tertiary hover:text-on-tertiary transition-all duration-300" to="/contact">
                  Work with us
                </Link>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="w-full aspect-square border border-outline-variant p-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-out" style={{ backgroundImage: `url(${image11})` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section
        className="px-margin-desktop max-w-[1440px] mx-auto mb-section-gap"
        id="development"
      >
        <div
          className="grid grid-cols-12 gap-gutter group"
          ref={ref2}
          onMouseMove={(e) => handleMouseMove(e, 2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 border-t border-outline-variant pt-12">
            <div className="flex flex-col md:flex-row justify-between gap-12">
              <div className="md:w-1/2">
                <div className="flex items-center gap-4 mb-8">
                  <span className="material-symbols-outlined text-tertiary text-4xl service-icon transition-transform duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                  <h2 className="font-headline-lg text-headline-lg">Development</h2>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  We write clean, performant code that brings vision to life without compromise. From custom web applications to interactive experiences, our tech stack is chosen for speed and longevity.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">07</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">Headless CMS &amp; React Apps</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">08</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">Complex Animation &amp; WebGL</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="font-label-mono text-label-mono text-tertiary mt-1">09</span>
                    <span className="font-body-md text-body-md border-b border-transparent hover:border-tertiary cursor-default transition-all">E-commerce Infrastructures</span>
                  </li>
                </ul>
                <Link className="inline-block font-label-mono text-label-mono border-2 border-on-surface px-8 py-4 uppercase hover:bg-tertiary hover:border-tertiary hover:text-on-tertiary transition-all duration-300" to="/contact">
                  Work with us
                </Link>
              </div>
              <div className="md:w-1/3 flex items-center justify-center">
                <div className="w-full aspect-square border border-outline-variant p-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div className="w-full h-full bg-cover bg-center transition-transform duration-300 ease-out" style={{ backgroundImage: `url(${image12})` }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-surface-container-low py-section-gap px-margin-desktop border-y border-outline-variant">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="font-label-mono text-label-mono text-tertiary uppercase tracking-[0.3em] mb-6 block">Ready to elevate?</span>
          <h2 className="font-headline-lg text-headline-lg mb-12">Let's build something <br className="hidden md:block" /> that matters.</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a className="font-headline-md text-headline-md font-bold underline decoration-tertiary decoration-4 underline-offset-8 hover:text-tertiary transition-colors" href="mailto:hello@perspec.agency">hello@perspec.agency</a>
            <span className="hidden md:block font-headline-md text-headline-md opacity-20">/</span>
            <span className="font-headline-md text-headline-md font-bold underline decoration-tertiary decoration-4 underline-offset-8 hover:text-tertiary transition-colors cursor-pointer">+1 (234) 567 890</span>
          </div>
        </div>
      </section>
    </main>
  );
}
