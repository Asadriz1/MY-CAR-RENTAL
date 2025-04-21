export default function Services() {
  const items = [
    { title: 'Variety of Brands', desc: 'Featuring a diverse selection of exotic and luxury car brands to match your taste.' },
    { title: 'Best Rate Guarantee', desc: 'From weekly to monthly discounts, we offer the best price and guaranteed service.' },
    { title: 'Awesome Support', desc: '24/7 customer support, doorstep delivery, and customized service just for you.' },
  ];
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What's Your Drive?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-12">We're car enthusiasts like you... we'll beat any competitor pricing by 5% on similar vehicle requests.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {items.map((item,i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}