import Image from 'next/image';
   export default function Blog() {
     const posts = [
       { date: 'December 18, 2023', title: 'How To Rent A Car For A Wedding: Tips To Make Your Special Day Memorable', imgSrc: '/blog1.jpg', link: '#' },
       { date: 'December 15, 2023', title: 'How To Rent A Car For A Successful And Stylish Business Trip', imgSrc: '/blog2.jpg', link: '#' },
       { date: 'December 15, 2023', title: 'How To Enjoy A Romantic & Thrilling Date Night With An Exotic Car Rental', imgSrc: '/blog3.jpg',}
     ];
     return (
       <section id="blog" className="py-20 bg-white px-4">
         <div className="container mx-auto text-center mb-8">
           <h2 className="text-3xl font-bold">Drive VA Blog</h2>
           <p className="text-gray-600">Explore the best tips from Virginia’s top car blog</p>
         </div>
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
           {posts.map((post,i)=>(<div key={i} className="bg-white rounded-xl shadow p-6 text-left"><Image src={post.imgSrc} alt={post.title} width={400} height={200} className="rounded mb-4" /><p className="text-sm text-gray-500">{post.date}</p><h3 className="font-semibold mb-2">{post.title}</h3><a href={post.link} className="text-blue-500 hover:underline">Read more →</a></div>))}
         </div>
       </section>
     );
   }