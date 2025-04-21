import Image from 'next/image';

interface Vehicle {
  name: string;
  imgSrc: string;
  price: string;
}

export default function Fleet() {
  const vehicles: Vehicle[] = [
    { name: 'Lamborghini Huracán', imgSrc: '/images/lambo.png', price: '$2,500/day' },
    { name: 'Ferrari F8 Tributo', imgSrc: '/images/ferrari.png', price: '$2,200/day' },
    { name: 'Porsche 911 Carrera', imgSrc: '/images/911.png', price: '$1,800/day' },
    { name: 'McLaren 720S', imgSrc: '/images/mclaren.png', price: '$2,300/day' },
    { name: 'Aston Martin DB11', imgSrc: '/images/fleet/aston.png', price: '$1,950/day' },
    { name: 'Rolls-Royce Dawn', imgSrc: '/images/fleet/rolls.png', price: '$3,000/day' },
    { name: 'Bentley Continental', imgSrc: '/images/fleet/bentley.png', price: '$2,400/day' },
    { name: 'Chevrolet Corvette', imgSrc: '/images/corvette.png', price: '$1,200/day' },
    { name: 'BMW M8', imgSrc: '/images/fleet/bmw.png', price: '$1,650/day' },
    { name: 'Mercedes-AMG GT', imgSrc: '/images/fleet/amg.png', price: '$2,100/day' },
    { name: 'Audi R8', imgSrc: '/images/fleet/audi.png', price: '$2,000/day' },
    { name: 'Jaguar F-Type', imgSrc: '/images/fleet/jaguar.png', price: '$1,700/day' },
  ];
  return (
    <section id="fleet" className="py-20 bg-gray-100 px-4">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold">Our Fleet</h2>
        <p className="text-gray-600">Handpicked luxury & exotic vehicles ready for your next journey</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {vehicles.map((v,i) => (
          <div key={i} className="bg-white rounded-xl shadow overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image src={v.imgSrc} alt={v.name} fill className="object-cover" />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">{v.name}</h3>
                <p className="text-blue-500 font-semibold mb-4">From {v.price}</p>
              </div>
              <button className="mt-auto bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition">
                Book Instantly
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}