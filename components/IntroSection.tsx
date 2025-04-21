import React from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export default function IntroSection() {
  return (
    <section className={`py-20 bg-white px-4 ${poppins.className}`} id="intro">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">
          FERRGATTI EXOTICS — Your Premier Supercar Experience
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Experience automotive excellence with Fergatti Exotics. From the breathtaking roar of a Lamborghini to the refined power of a Rolls-Royce, our curated fleet delivers unmatched performance and luxury.<br/>
          Whether you’re seeking the adrenaline rush of a high-speed drive or the elegance of a chauffeur-led experience, our vehicles are maintained to the highest standards for your safety and comfort.<br/>
          Explore scenic byways through Virginia’s rolling hills, navigate Maryland’s historic roads, or make an impression in Washington, D.C.—each journey becomes a statement of sophistication and style.<br/>
          Our expert team is dedicated to crafting personalized itineraries, ensuring seamless pickups, drop-offs, and tailored service to meet your every need.<br/>
          At Fergatti Exotics, we believe that driving is more than transportation—it’s an art form. Elevate your next adventure with our premier supercar experience.<br/>
        </p>
        <button className="mt-6 px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500">
          BOOK NOW
        </button>
      </div>
    </section>
  );
}
