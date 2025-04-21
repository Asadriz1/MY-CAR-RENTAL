export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="overflow-x-scroll whitespace-nowrap space-x-4 px-4 py-6">
          {[1,2,3,4].map(i => (
            <div key={i} className="inline-block bg-white rounded-xl shadow-lg p-6 w-64">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold mb-2">Client Name</h4>
              <p className="text-yellow-400 mb-2">★★★★★</p>
              <p className="text-gray-600 text-sm">"Amazing experience!"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}