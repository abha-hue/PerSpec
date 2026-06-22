import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t-2 border-outline mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop py-20 w-full max-w-[1440px] mx-auto">
        <div className="col-span-12 md:col-span-6 mb-12 md:mb-0">
          <Link className="font-headline-lg text-headline-lg font-black text-on-surface block mb-8" to="/">Perspec</Link>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
            Strategic creative agency building the brands of tomorrow through intellectual design.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="font-label-mono text-label-mono text-tertiary uppercase mb-6">Social</p>
          <ul className="space-y-4">
            <li><a className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-colors" href="#">Instagram</a></li>
            <li><a className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-colors" href="#">LinkedIn</a></li>
            <li><a className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-colors" href="#">Behance</a></li>
          </ul>
        </div>
        <div className="col-span-6 md:col-span-3">
          <p className="font-label-mono text-label-mono text-tertiary uppercase mb-6">Contact</p>
          <ul className="space-y-4">
            <li><a className="font-label-mono text-label-mono text-on-surface-variant hover:text-tertiary transition-colors" href="mailto:hello@perspec.agency">hello@perspec.agency</a></li>
            <li><p className="font-label-mono text-label-mono text-on-surface-variant">London, UK</p></li>
          </ul>
        </div>
        <div className="col-span-12 border-t border-outline-variant pt-8 mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-mono text-label-mono text-on-surface-variant opacity-60">© 2026 Perspec Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" to="/privacy">Privacy Policy</Link>
            <Link className="font-label-mono text-label-mono text-on-surface-variant hover:text-on-surface transition-colors" to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
