// pages/_app.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Head from 'next/head';
import store from '../src/redux/stores/store';
import '../styles/globals.css';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/top.png" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Mulish:ital,wght@0,300;0,400;0,600;0,700;1,400;1,700&family=Roboto+Condensed:wght@700&display=swap" 
          rel="stylesheet"
        />
      </Head>
      
      {loading ? (
        // Show loader while loading is true
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<Image src="/loader.gif" alt="Loading..."  width={200} height={200} />
        </div>
      ) : (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )}
    </>
  );
}

export default MyApp;
