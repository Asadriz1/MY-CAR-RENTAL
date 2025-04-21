// components/Navbar.tsx
import Link from 'next/link';
import { FiPhone, FiShoppingCart } from 'react-icons/fi';

export default function Navbar() {
  const sections = ['fleet', 'services', 'about', 'contact'];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo with thick white underline */}
        <div className="text-2xl font-bold text-white border-b-4 border-white pb-1">
          FERRGATTI
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          {sections.map(sec => (
            <li key={sec}>
              <Link href={`#${sec}`} className="hover:underline capitalize">
                {sec}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className="flex items-center space-x-4">
          {/* Call Us */}
          <a href="tel:+1234567890" className="flex items-center text-white">
            <FiPhone className="mr-2 w-5 h-5" />
            Call Us: (234) 567-8901
          </a>

          {/* Book Instantly button */}
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            BOOK INSTANTLY {'>'}
          </button>

          {/* Shopping Cart Icon */}
          <FiShoppingCart className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}

/*
Make sure to install:

npm install react-icons
*/
