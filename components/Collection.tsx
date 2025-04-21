import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the send icon for reduced bundle size
const FiSend = dynamic(
  () => import('react-icons/fi').then((mod) => mod.FiSend),
  { ssr: false }
);

const cars = [
  { title: 'Porsche', subtitle: 'German Sports Car', imgSrc: '/images/ban1.png' },
  { title: 'Rolls Royce', subtitle: 'Prestigious British Car', imgSrc: '/images/ban2.png' },
  { title: 'Lamborghini', subtitle: 'Italian Supercar', imgSrc: '/images/ban3.png' },
  { title: 'Mustang', subtitle: 'American Muscle', imgSrc: '/images/ban4.png' },
  { title: 'Tesla', subtitle: 'Electric Automobile', imgSrc: '/images/ban5.png' },
  { title: 'BMW', subtitle: 'A German Dream', imgSrc: '/images/ban6.png' },
  { title: 'Mercedes Benz', subtitle: 'Luxury Performance', imgSrc: '/images/ban7.png' },
  { title: 'Chevrolet Corvette', subtitle: 'American Icon', imgSrc: '/images/ban8.png' },
];

export default function Collection() {
  return (
    <section id="collection" className="py-20 bg-gray-50 px-4">
      <div className="container mx-auto text-center mb-6">
        <h2 className="text-5xl font-bold mb-2">Explore Popular Cars</h2>
        <p className="text-gray-600 mb-6">
          From Porsche to Dodge, experience Washington in style with our curated exotic fleet.
        </p>
        <div className="inline-flex bg-black text-white rounded-lg overflow-hidden">
          <button className="px-6 py-2 font-semibold">Our Collection</button>
          <span className="flex items-center px-2 bg-gray-800">
            <FiSend className="w-5 h-5" />
          </span>
          <button className="px-6 py-2 font-semibold">Special Offers</button>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cars.map((car, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48 w-full">
              <Image
                src={car.imgSrc}
                alt={car.title}
                fill
                className="object-cover rounded-t-lg"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg mb-1 inline-block border-b-2 border-black pb-1">
                {car.title}
              </h3>
              <p className="text-gray-500 text-sm">{car.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
