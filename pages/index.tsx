import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Fleet from '@/components/Fleet';
import IntroSection from '@/components/IntroSection';
import Collection from '@/components/Collection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <IntroSection />
        <Collection />
        <Fleet />
        <Services />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}