import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Services from './screens/Services';
import Work from './screens/Work';
import './index.css';

gsap.registerPlugin(ScrollTrigger);

function ScrollProgress() {
  const progressBarRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (progressBarRef.current) {
          gsap.to(progressBarRef.current, { 
            scaleX: self.progress, 
            duration: 0.1, 
            ease: "power1.out",
            overwrite: "auto" 
          });
        }
      }
    });

    ScrollTrigger.refresh();

    return () => {
      st.kill();
    }
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-surface-container-high z-[100]">
      <div ref={progressBarRef} className="h-full bg-tertiary origin-left scale-x-0"></div>
    </div>
  );
}

function PageMetadata() {
  const location = useLocation();

  useEffect(() => {
    let title = "Perspec | Redefining Perspectives";
    let desc = "Perspec is a strategic creative design agency building the brands of tomorrow through intellectual design, visual identity systems, digital ecosystems, and complex web experiences.";

    switch (location.pathname) {
      case "/":
        title = "Perspec | Redefining Perspectives";
        break;
      case "/services":
        title = "Capabilities & Services | Perspec";
        desc = "Discover our comprehensive brand ecosystem services: WhatsApp & email automation, visual identity design, headless CMS, and custom React applications.";
        break;
      case "/work":
        title = "Selected Works | Perspec";
        desc = "A curated collection of design and digital solutions, including branding, web experiences, campaigns, visual identities, and spatial design.";
        break;
      case "/contact":
        title = "Start a Project | Perspec";
        desc = "Partner with us to create unconventional brand experiences. Submit a project inquiry and let's build the future together.";
        break;
      default:
        break;
    }

    document.title = title;
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", desc);
    }
  }, [location]);

  return null;
}

function CursorLight() {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      // Use GSAP's quickTo for highly performant mouse tracking
      const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.6, ease: "power3" });
      const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.6, ease: "power3" });

      const handleMouseMove = (e) => {
        xTo(e.clientX);
        yTo(e.clientY);
      };

      window.addEventListener("mousemove", handleMouseMove);
      
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-[250px] h-[250px] bg-tertiary/15 rounded-full blur-[60px] pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 mix-blend-screen hidden lg:block"
      style={{ willChange: "transform" }}
    ></div>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollProgress />
        <PageMetadata />
        <CursorLight />
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
