import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="rounded-2xl border border-tertiary py-5 flex flex-col gap-4 items-center md:flex-row md:justify-center">
      <img src="/assets/icons/Icon.svg" alt="decor" className="md:hidden" />
      <a href="#" className="font-satoshi text-sm font-light">
        Privacy Policy
      </a>
      <img src="/assets/icons/Icon.svg" alt="decor" className="hidden md:block" />
      <a href="#" className="font-satoshi text-sm font-light">
        Terms & Conditions
      </a>
      <img src="/assets/icons/Icon.svg" alt="decor" className="hidden md:block" />
      <Link to="/contact" className="font-satoshi text-sm font-light">
        Contact Us
      </Link>
      <img src="/assets/icons/Icon.svg" alt="decor" className="md:hidden" />
    </footer>
  );
}
