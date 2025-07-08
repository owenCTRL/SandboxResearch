"use client";
import { 
  FileText,
  Shield,
  Cpu,
  BarChart,
  Hash,
  Code,
  Calculator,
  LineChart,
  Brain,
} from 'lucide-react';

const AtlasWhitepaper: React.FC = () => {
  return (
    <div className="min-h-screen w-full text-white p-10 relative overflow-hidden">
      {/* Animated Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-800/10 via-indigo-800/10 to-blue-900/10 blur-3xl animate-float-slow" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-blue-900/10 via-blue-800/10 to-indigo-900/10 blur-3xl animate-float-medium" />
        <div className="absolute -bottom-16 left-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-sky-900/10 via-blue-800/10 to-cyan-900/10 blur-3xl animate-float-fast" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-indigo-900/10 via-blue-800/10 to-sky-900/10 blur-3xl animate-float-slow-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-900/5 via-blue-800/5 to-indigo-900/5 blur-3xl animate-pulse-slow" />
      </div>

      <div className="flex-box bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 max-w-6xl ml-auto mr-auto text-gray-300 space-y-20 mb-30" id="whitepaper">
        {/* Title Section */}
        <div className="text-center border-b border-gray-800">
          <h1 className="text-4xl font-bold text-white leading-snug">
            Engineering Victory:<br />Designing Clear Paths to Strategic Success
          </h1>
          <p className="text-gray-400 mt-4 text-lg">
            Predictive Modeling and Strategic Framework for Dominance in Complex Environments
          </p>
          <div className="flex justify-center gap-4 mt-6 mb-6 text-sm text-gray-500">
            <span>Sandbox Research</span>
            <span>•</span>
            <span>v1.0 | July 2025</span>
          </div>
        </div>

        {/* Abstract */}
        <section id="abstract" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <FileText className="w-5 h-5" /> Abstract
          </h2>
          <p>
            In modern strategic arenas – whether political campaigns, business markets, or crypto finance – complexity and conflicting information often create the illusion of chaos. This “fog” echoes Clausewitz: “war is the realm of uncertainty.” Without clarity, most participants lose sight of their objectives.
          </p>
          <p>
            Deliberate design cuts through that fog. With clear maps and engineered choices, leaders identify attainable targets and safe routes. Sun Tzu’s principle applies: “If you know the enemy and know yourself, you need not fear the result of a hundred battles.” Strategic design replaces improvisation with certainty.
          </p>
        </section>

        {/* 1. The Victory Stack */}
        <section id="introduction" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <Hash className="w-5 h-5" /> 1. The Victory Stack
          </h2>
          <p>
            Imagine strategy as a pyramid – the “Victory Stack.” Like Maslow’s hierarchy, each layer builds on the last: from situational awareness to tactical advantages, culminating in precision execution.
          </p>
          <p>
            Secure the base (e.g., capital preservation, logistics), then build mid-layers (alliances, predictive tactics), and finally execute. Sun Tzu noted: “All men can see these tactics whereby I conquer, but what none can see is the strategy.” The Stack makes that strategy visible and replicable.
          </p>
        </section>

        {/* 2. The Edge Funnel */}
        <section id="mathematical" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <Calculator className="w-5 h-5" /> 2. The Edge Funnel
          </h2>
          <p>
            In any field, only a few actions yield massive results. The “Edge Funnel” focuses energy on those high-leverage moves. It eliminates waste and channels effort toward dominant strategies – the ones that win regardless of opposition.
          </p>
          <p>
            In game theory, such strategies lead to Nash equilibria: conditions no rival can disrupt. Designing around that principle transforms complexity into predictability.
          </p>
        </section>

        {/* 3. Controlled Chaos */}
        <section id="mechanism" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <Cpu className="w-5 h-5" /> 3. Controlled Chaos
          </h2>
          <p>
            Chaos isn’t a flaw – it’s a feature. “Controlled Chaos” converts randomness into power. Taleb&apos;s antifragility teaches us not to predict every shock, but to design systems that improve with volatility.
          </p>
          <p>
            This means embedding feedback loops: hedges during crises, optionality during spikes, and adaptability under fire. Turbulence then becomes part of the strategy, not a disruption of it.
          </p>
        </section>

        {/* 4. Game Theory */}
        <section id="volatility" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <LineChart className="w-5 h-5" /> 4. Game Theory & Machiavellian Strategy
          </h2>
          <p>
            Game theory structures the battlefield. Strategies like tit-for-tat and dominant plays can guide opponents into predictable behavior. Machiavellian design isn’t manipulation—it’s architecture: building incentives so that adversaries reinforce your path.
          </p>
          <p>
            With properly structured payoffs, every rational actor “chooses” to help you win.
          </p>
        </section>

        {/* 5. Behavioral Edges */}
        <section id="liquidity" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <Brain className="w-5 h-5" /> 5. Behavioral & Cognitive Edges
          </h2>
          <p>
            People aren&apos;t rational. Kahneman’s dual-system theory and Thaler’s nudges show us how to steer decisions with subtle design. Make the best move the obvious one – the path of least resistance.
          </p>
          <p>
            This is not coercion; it&apos;s alignment. Frame choices and environments so that victory is not just possible – it’s inevitable.
          </p>
        </section>

        {/* 6. ATLAS Mechanisms */}
        <section id="implementation" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <Code className="w-5 h-5" /> 6. ATLAS Mechanisms
          </h2>
          <p>
            ATLAS is not theory; it&apos;s application. It embeds the Victory Stack and Edge Funnel in code. Volatility engines rebalance weight. Synthetic options hedge losses. Momentum is captured. Chaos is harnessed.
          </p>
          <p>
            Backtests show significantly better performance than passive indices – not because of luck, but because of design. Like a well-planned campaign, ATLAS wins before it begins.
          </p>
        </section>

        {/* 7. Strategic Implementation */}
        <section id="risk" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <Shield className="w-5 h-5" /> 7. Implementation
          </h2>
          <p>
            Victory demands action. Begin by defining your own Victory Stack. Clarify objectives. Identify Edge Funnels – where small moves yield big wins. Design Chaos Controls. And layer in feedback: so each move is measured and reinforced.
          </p>
          <p>
            Most importantly, align your team. Incentivize them to climb the stack. Make the right move simple, the win inevitable.
          </p>
        </section>

        {/* 8. Conclusion */}
        <section id="performance" className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
            <BarChart className="w-5 h-5" /> 8. Conclusion
          </h2>
          <p>
            Victory is not magic. It’s math, psychology, structure. It’s engineering. Every layer of this framework – from strategy to incentives – is a building block. And when built with precision, the result is not just success, but repeatable, scalable dominance.
          </p>
          <p className="text-green-400 font-semibold italic text-center mt-10">
            “Victorious warriors win first and then go to war.”<br />–Sun Tzu
          </p>
        </section>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -60px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.95); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 30px) scale(1.05); }
          50% { transform: translate(20px, -50px) scale(0.95); }
          75% { transform: translate(-30px, -20px) scale(1.1); }
        }

        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0) scale(1); }
          20% { transform: translate(40px, -30px) scale(1.1); }
          40% { transform: translate(-20px, 40px) scale(0.9); }
          60% { transform: translate(30px, 20px) scale(1.05); }
          80% { transform: translate(-40px, -40px) scale(0.95); }
        }

        @keyframes float-slow-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 60px) scale(0.95); }
          66% { transform: translate(40px, -40px) scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 15s ease-in-out infinite;
        }

        .animate-float-fast {
          animation: float-fast 10s ease-in-out infinite;
        }

        .animate-float-slow-reverse {
          animation: float-slow-reverse 25s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AtlasWhitepaper;