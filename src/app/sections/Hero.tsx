"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Timer, Cpu, Trophy, ArrowRight } from 'lucide-react';

interface PerformanceMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const OttrHero: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(0);

  const performanceMetrics: PerformanceMetric[] = [
    { label: 'Industries Served', value: '12+', icon: <Globe className="w-5 h-5" /> },
    { label: 'Avg. Time to Impact', value: '14 Days', icon: <Timer className="w-5 h-5" /> },
    { label: 'Client Win Rate', value: '92%', icon: <Trophy className="w-5 h-5" /> },
    { label: 'Strategy Models Run', value: '3,000+', icon: <Cpu className="w-5 h-5" /> },
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % performanceMetrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [performanceMetrics.length]);

  return (
    <div className="min-h-screen w-full text-white overflow-hidden">
      <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center" id='home'>
        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <div className="mb-16 mt-[10vh] inline-flex items-center justify-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent sm:text-2xl md:text-4xl">Sandbox Research</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-10">
            <span className="block opacity-0 animate-fadeInUp font-bold sm:text-4xl md:text-6xl">
              Build a Strategy That Wins.
            </span>
            <span className="block mt-2 opacity-0 animate-fadeInUp animation-delay-200 font-bold sm:text-4xl md:text-6xl">
              Any Industry.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Any Goal.
              </span>
              <br></br>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 opacity-0 animate-fadeInUp animation-delay-400">
            Winning isn&apos;t luck. It&apos;s strategy.<br></br>
            We build strategies and model outcomes for <span className="text-white font-semibold">politics</span>, <span className="text-white font-semibold">business</span>, and <span className="text-white font-semibold">more.</span><br></br><br />
            <span className="text-2xl inline font-semibold text-white bg-clip-text text-transparent">Test.</span><span className="text-2xl inline font-semibold text-white bg-clip-text text-transparent"> Tweak.</span><span className="text-2xl inline font-semibold bg-gradient-to-r from-green-400 via-teal-400 to-green-400 bg-clip-text text-transparent animate-gradient"> Win.</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-12 opacity-0 animate-fadeInUp animation-delay-500">
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
          <div className="flex flex-col sm:flex-row max-w-[300px] gap-4 justify-center ml-auto mr-auto mb-12 opacity-0 animate-fadeInUp animation-delay-600">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <a href="mailto:owen.ottr@gmail.com" className="relative z-10 flex items-center justify-center">
                Build Your Strategy
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </button>
          </div>
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