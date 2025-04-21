import { FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4">
        <div className="space-y-2">
          <h4 className="text-white text-xl font-bold">DRIVE VA</h4>
          <p className="text-sm">Some promotional vehicles shown. Rentals may differ in spec.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Contact Info</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center"><FaPhoneAlt className="mr-2"/> (747) 288-3644 | VA</li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2"/> (480) 660-8883 | Out of State</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2"/> HQ: 14749 Oxnard St, Fairfax, VA 22030</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Virginia</h4>
          <ul className="space-y-1 text-sm">
            <li>Richmond</li>
            <li>Arlington</li>
            <li>Alexandria</li>
            <li>Fairfax</li>
            <li>Reston</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Out Of State</h4>
          <ul className="space-y-1 text-sm">
            <li>Scottsdale</li>
            <li>Phoenix</li>
            <li>Tempe</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">© 2025 Drive VA. All rights reserved.</div>
    </footer>
  );
}