// pages/index.tsx
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

// Dynamically load sections after the hero
const IntroSection = dynamic(() => import('@/components/IntroSection'), { ssr: false });
const Collection   = dynamic(() => import('@/components/Collection'),   { ssr: false });
const Fleet        = dynamic(() => import('@/components/Fleet'),        { ssr: false });
const Services     = dynamic(() => import('@/components/Services'),     { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const Cta          = dynamic(() => import('@/components/Cta'),          { ssr: false });

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

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
      </main>
      <Footer />
    </div>
  );
}
