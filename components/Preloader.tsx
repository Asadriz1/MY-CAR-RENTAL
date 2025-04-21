// components/Preloader.tsx
import { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import animationData from '../animations/Animation.json';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

interface PreloaderProps {
  children: ReactNode;
}

export default function Preloader({ children }: PreloaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
        <div className="relative pb-40">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Drive VA Logo"
            width={500}
            height={500}
          />
          {/* Overlay Lottie animation on logo */}
          <div className="absolute inset-0 flex items-end justify-center">
            <div className="w-48 h-48">
              <Lottie animationData={animationData} loop />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

/*
Ensure:
- Animation.json placed under /animations,
- lottie-react installed: npm install lottie-react
*/
