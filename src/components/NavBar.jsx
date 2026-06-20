import { Link, useLocation } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) => 
    `font-label-mono text-label-mono transition-colors duration-200 ${
      isActive(path) 
        ? 'text-primary font-bold border-b-2 border-primary pb-1' 
        : 'text-on-surface font-medium hover:text-tertiary'
    }`;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline-variant">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto w-full">
        <Link to="/" className="font-headline-md text-headline-md font-bold tracking-tighter text-on-background">
          Perspec
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          <Link to="/work" className={linkClass('/work')}>Work</Link>
          <Link to="/services" className={linkClass('/services')}>Services</Link>
          <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
        </div>
        <Link to="/contact" className="px-6 py-2 border-2 border-primary text-primary font-label-mono text-label-mono hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary active:scale-95 transition-all duration-200">
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
