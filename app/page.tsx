'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <main className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
        {/* Ambient lighting effect */}
        <div className="absolute inset-0 bg-gradient-radial from-gray-100/50 via-transparent to-transparent"></div>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
          {/* Floating geometric elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-300/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-gray-300/30 rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-40 bg-gradient-to-b from-gray-400/30 to-transparent"></div>
          
          <div className="text-center max-w-4xl mx-auto">
            {/* Welcome back message */}
            <div className="mb-8 opacity-60">
              <p className="text-sm md:text-base tracking-widest uppercase text-gray-600">
                Welcome to the Experience
              </p>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              VIRASAT
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-8 leading-relaxed">
              Where Innovation Meets Elegance
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Step into a world of refined digital craftsmanship and visionary design.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Enter Experience
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Discover More
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Content Section */}
        <section className="py-20 px-4 relative z-10">
          {/* Section divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Crafted with Precision
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every detail meticulously designed to create extraordinary experiences
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 shadow-lg"></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-700">Pioneering the future with visionary solutions and breakthrough thinking.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mx-auto mb-6 shadow-lg"></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Excellence</h3>
                <p className="text-gray-700">Uncompromising quality that exceeds expectations in every detail.</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl backdrop-blur-sm border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mx-auto mb-6 shadow-lg"></div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
                <p className="text-gray-700">Transforming possibilities into reality through bold imagination.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, gray 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, gray 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </main>
    </>
  );
}