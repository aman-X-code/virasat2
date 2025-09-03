'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const router = useRouter();

  const handleLoadingComplete = () => {
    router.push('/home');
  };

  useEffect(() => {
    // Fallback in case the loading screen takes too long or fails
    const timer = setTimeout(() => {
      router.push('/home');
    }, 5000); // 5 seconds timeout

    return () => clearTimeout(timer);
  }, [router]);

  return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
}