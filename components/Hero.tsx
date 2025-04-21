// components/Hero.tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      {/* Full‑screen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlayed content */}
      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Premium Car Rentals in Virginia
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white drop-shadow">
          Driven by passion, tailored to your adventure.
        </p>
        <a
          href="#fleet"
          className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition"
        >
          Explore Our Fleet
        </a>
      </div>

      {/* Scroll‑down indicator */}
      <div className="absolute bottom-6 right-6 animate-bounce text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
