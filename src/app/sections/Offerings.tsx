"use client";
import React, { useState } from 'react';
import { 
  TrendingUp, 
  Brain, 
  Megaphone, 
  User,
  Eye,
  BarChart2,
  MapPin,
  ShieldCheck,
  Activity,
  Layers,
  Globe,
  Zap
} from 'lucide-react';

interface Offering {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  stats: { label: string; value: string }[];
}

interface BreakdownStep {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const OttrOfferingsSection: React.FC = () => {
  const [activeOffering, setActiveOffering] = useState<string>('strategy-modeling');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const offerings: Offering[] = [
    {
      id: 'strategy-modeling',
      title: 'Strategy Modeling',
      description:
        'Custom-built strategic models for campaigns, companies, and creators—rooted in data, optimized for impact.',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-blue-600 to-cyan-600',
      stats: [
        { label: 'Industries Served', value: '12+' },
        { label: 'Avg. Time to Impact', value: '14 Days' },
      ],
    },
    {
      id: 'decision-systems',
      title: 'Decision Architecture',
      description:
        'We build adaptive frameworks to help leaders, teams, and orgs navigate complexity and win with clarity.',
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: 'from-purple-600 to-pink-600',
      stats: [
        { label: 'Systems Delivered', value: '250+' },
        { label: 'Client Win Rate', value: '92%' },
      ],
    },
    {
      id: 'narrative-design',
      title: 'Narrative & Influence Design',
      description:
        'Messaging, brand, and behavioral strategy that aligns vision with persuasion—across media and culture.',
      icon: <Megaphone className="w-6 h-6" />,
      gradient: 'from-green-600 to-emerald-600',
      stats: [
        { label: 'Campaigns Run', value: '80+' },
        { label: 'Engagement Lift', value: '300%+' },
      ],
    },
    {
      id: 'executive-consulting',
      title: 'Executive Consulting',
      description:
        'One-on-one strategic support for founders, candidates, and decision-makers navigating inflection points.',
      icon: <User className="w-6 h-6" />,
      gradient: 'from-orange-600 to-red-600',
      stats: [
        { label: 'Clients Advised', value: '100+' },
        { label: 'Retention Rate', value: '96%' },
      ],
    },
  ];


  const breakdownSteps: BreakdownStep[] = [
    {
      step: 1,
      title: 'Perception',
      description: 'Clarify the game. Most lose before the first move because they don’t understand what game they’re in. We define the board, the players, and the rules.',
      icon: <Eye className="w-5 h-5" />,
      color: 'bg-indigo-500',
    },
    {
      step: 2,
      title: 'Positioning',
      description: 'Where you sit on the board determines your potential. We reposition brands, narratives, and strategies to create asymmetric leverage.',
      icon: <MapPin className="w-5 h-5" />,
      color: 'bg-indigo-500',
    },
    {
      step: 3,
      title: 'Leverage',
      description: 'With limited moves, high-leverage strategies win. We optimize capital, attention, and timing to produce outsized outcomes.',
      icon: <BarChart2 className="w-5 h-5" />,
      color: 'bg-indigo-500',
    },
    {
      step: 4,
      title: 'Momentum',
      description: 'Good ideas fail without velocity. We design systems that reinforce winning behavior—virality, flywheels, and feedback loops.',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-indigo-500',
    },
    {
      step: 5,
      title: 'Victory',
      description: 'Winning isn’t a final state—it’s a replicable system. We institutionalize winning so it compounds over time.',
      icon: <ShieldCheck className="w-5 h-5" />,
      color: 'bg-green-500',
    },
  ];

  const activeOfferingData = offerings.find(o => o.id === activeOffering);

  return (
    <div className="min-h-screen w-full text-white p-10">
      <div className="max-w-6xl mx-auto mb-30">
        {/* Section Header */}
        <div className="text-center mb-16" id="offerings">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Offerings
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive financial technology solutions powered by cutting-edge AI and blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          {offerings.map((offering) => (
            <div
              key={offering.id}
              className={`relative group cursor-pointer transition-all duration-300 h-full flex flex-col ${
                activeOffering === offering.id ? 'scale-105' : 'hover:scale-105'
              }`}
              onClick={() => setActiveOffering(offering.id)}
              onMouseEnter={() => setHoveredCard(offering.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${offering.gradient} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity`}
              />

              {/* Content container */}
              <div
                className={`relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border flex flex-col justify-between h-full z-10 ${
                  activeOffering === offering.id ? 'border-blue-500' : 'border-gray-800'
                } transition-all duration-300`}
              >
                <div>
                  <div className={`inline-flex p-3 bg-gradient-to-r ${offering.gradient} rounded-xl mb-4`}>
                    {offering.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{offering.description}</p>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4">
                  {offering.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div
                  className={`absolute top-4 right-4 transition-transform duration-300 ${
                    hoveredCard === offering.id ? 'translate-x-1' : ''
                  }`}
                />
              </div>
            </div>
          ))}
        </div>


        {/* Active Offering Detail */}
        {activeOfferingData && (
          <div className="mb-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
            <div className="flex items-center mb-4">
              <div className={`inline-flex p-3 bg-gradient-to-r ${activeOfferingData.gradient} rounded-xl mr-4`}>
                {activeOfferingData.icon}
              </div>
              <h3 className="text-2xl font-bold">{activeOfferingData.title}</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <p className="text-gray-300 mb-4">{activeOfferingData.description}</p>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gray-800 rounded-xl font-semibold hover:bg-gray-700 transition-colors">
                    View Case Studies
                  </button>
                </div>
              </div>
              <div className="bg-black/30 rounded-xl p-6">
                <h4 className="text-sm text-gray-400 mb-4">Performance Metrics</h4>
                {activeOfferingData.stats.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center mb-3">
                    <span className="text-gray-300">{stat.label}</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Breakdown Preview */}
        <div className="relative">
          <div className="text-center mb-12">
            <h2 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-3xl md:text-4xl font-bold mb-4">
              How Winning Works
            </h2>
            <p className="text-xl text-gray-400">
              Mathematical design meets unlimited potential
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
            {/* Left: Breakdown Steps */}
            <div className="space-y-8 flex flex-col">
              {breakdownSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="relative flex gap-4 group"
                  style={{ 
                    opacity: 0,
                    animation: `fadeInLeft 0.5s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center ${step.color}`}>
                      {step.icon}
                    </div>
                    {index < breakdownSteps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-gray-800 -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <Globe className="w-6 h-6" />, value: '30+', label: 'Client Regions Served' },
            { icon: <Activity className="w-6 h-6" />, value: '300+', label: 'Strategic Interventions' },
            { icon: <Layers className="w-6 h-6" />, value: '98%', label: 'Implementation Rate' },
            { icon: <Zap className="w-6 h-6" />, value: '92%+', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 text-center">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default OttrOfferingsSection;