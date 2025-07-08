"use client";
import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Globe, Timer, Cpu, Coins, Trophy, ArrowRight } from 'lucide-react';

interface TickerItem {
  symbol: string;
  price: string;
  change: number;
  isPositive: boolean;
}

interface PerformanceMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const OttrHero: React.FC = () => {
  const [tickerItems] = useState<TickerItem[]>([
    { symbol: 'BTC/USDT', price: '$68,924', change: 5.67, isPositive: true },
    { symbol: 'ETH/USDT', price: '$3,847', change: 3.21, isPositive: true },
    { symbol: 'SOL/USDT', price: '$187.42', change: -1.24, isPositive: false },
    { symbol: 'AVAX/USDT', price: '$42.18', change: 7.89, isPositive: true },
    { symbol: 'MATIC/USDT', price: '$1.12', change: -0.32, isPositive: false },
    { symbol: 'DOT/USDT', price: '$7.84', change: 2.45, isPositive: true },
    { symbol: 'LINK/USDT', price: '$15.67', change: 4.12, isPositive: true },
    { symbol: 'ADA/USDT', price: '$0.68', change: -2.87, isPositive: false },
  ]);

  const [glowStates, setGlowStates] = useState<{ [key: string]: boolean }>({});
  const [activeMetric, setActiveMetric] = useState(0);

  const performanceMetrics: PerformanceMetric[] = [
    { label: 'Industries Served', value: '12+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Avg. Time to Impact', value: '14 Days', icon: <Timer className="w-5 h-5" /> },
    { label: 'Client Win Rate', value: '92%', icon: <Trophy className="w-5 h-5" /> },
    { label: 'Strategy Models Run', value: '3,000+', icon: <Cpu className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];
    
    tickerItems.forEach((item) => {
      const interval = setInterval(() => {
        setGlowStates(prev => ({
          ...prev,
          [item.symbol]: Math.random() > 0.5
        }));
      }, Math.random() * 2000 + 1000);
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [tickerItems]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % performanceMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [performanceMetrics.length]);

  return (
    <div className="min-h-screen w-full text-white overflow-hidden">
      {/* Stock Ticker */}
      <div className="relative w-full h-16 overflow-hidden" id="home">
        <div className="absolute inset-0"></div>
        <div className="flex h-full">
          <div className="flex animate-scroll">
            {/* Render items twice for seamless loop */}
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <div key={`${item.symbol}-${index}`} className="flex items-center px-6 h-full whitespace-nowrap">
                <Coins className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium mr-2">{item.symbol}</span>
                <span className="text-gray-300 mr-3 font-mono">{item.price}</span>
                <div className="flex items-center">
                  <div 
                    className={`w-2 h-2 rounded-full mr-2 transition-all duration-300 ${
                      item.isPositive ? 'bg-green-500' : 'bg-red-500'
                    } ${
                      glowStates[item.symbol] 
                        ? `shadow-[0_0_10px_${item.isPositive ? '#10b981' : '#ef4444'}]` 
                        : ''
                    }`}
                    style={{
                      boxShadow: glowStates[item.symbol] 
                        ? `0 0 10px ${item.isPositive ? '#10b981' : '#ef4444'}, 0 0 20px ${item.isPositive ? '#10b981' : '#ef4444'}`
                        : 'none'
                    }}
                  />
                  <span className={`font-semibold text-sm ${item.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    {item.isPositive ? '+' : ''}{item.change}%
                  </span>
                  {item.isPositive ? (
                    <TrendingUp className="ml-1 w-3 h-3 text-green-500" />
                  ) : (
                    <TrendingDown className="ml-1 w-3 h-3 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <div className="mb-8 mt-5 inline-flex items-center justify-center">
            <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sandbox Research</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="block opacity-0 animate-fadeInUp font-bold">
              Build a Strategy That Wins.
            </span>
            <span className="block mt-2 opacity-0 animate-fadeInUp animation-delay-200 font-bold">
              Any Industry.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Any Goal.
              </span>
              <br></br>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 opacity-0 animate-fadeInUp animation-delay-400">
            Winning isn&apos;t luck. It&apos;s strategy.<br></br>
            We build strategies and model outcomes for <span className="text-white font-semibold">politics</span>, <span className="text-white font-semibold">business</span>, and <span className="text-white font-semibold">more.</span><br></br>
            <span className="mt-2 block text-white font-semibold">Test. Tweak. Win.</span>
          </p>


          {/* Performance Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0 animate-fadeInUp animation-delay-500">
            {performanceMetrics.map((metric, index) => (
              <div 
                key={metric.label}
                className={`bg-white/5 backdrop-blur-lg rounded-xl p-4 border transition-all duration-500 ${
                  activeMetric === index 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
                    : 'border-white/10'
                }`}
              >
                <div className="flex items-center justify-center mb-2 text-blue-400">
                  {metric.icon}
                </div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <a href="mailto:owen.ottr@gmail.com" className="relative z-10 flex items-center justify-center">
                Build Your Strategy
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm opacity-0 animate-fadeInUp animation-delay-700">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>24/7 Global Services</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>100% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default OttrHero;