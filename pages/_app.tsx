import '@/styles/globals.css';
   import type { AppProps } from 'next/app';
   import Preloader from '@/components/Preloader';

   export default function App({ Component, pageProps }: AppProps) {
     return (
       <Preloader>
         <Component {...pageProps} />
       </Preloader>
     );
   }