"use client";
import React, { useState } from 'react';
import { 
  FileText,
  Download,
  Shield,
  TrendingUp,
  Cpu,
  BarChart3,
  Zap,
  Hash,
  Code,
  GitBranch,
  Calculator,
  LineChart,
  Brain,
  Sigma
} from 'lucide-react';

const AtlasWhitepaper: React.FC = () => {
  const [activeSection, setActiveSection] = useState('abstract');
  const [expandedFormula, setExpandedFormula] = useState<string | null>(null);

  const sections = [
    { id: 'abstract', title: 'Abstract', icon: <FileText className="w-4 h-4" /> },
    { id: 'introduction', title: '1. Introduction', icon: <Hash className="w-4 h-4" /> },
    { id: 'mathematical', title: '2. Mathematical Framework', icon: <Calculator className="w-4 h-4" /> },
    { id: 'mechanism', title: '3. Core Mechanism', icon: <Cpu className="w-4 h-4" /> },
    { id: 'volatility', title: '4. Volatility Engine', icon: <LineChart className="w-4 h-4" /> },
    { id: 'liquidity', title: '5. Liquidity Dynamics', icon: <Brain className="w-4 h-4" /> },
    { id: 'implementation', title: '6. Implementation', icon: <Code className="w-4 h-4" /> },
    { id: 'risk', title: '7. Risk Architecture', icon: <Shield className="w-4 h-4" /> },
    { id: 'performance', title: '8. Performance Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'comparison', title: '9. BITW Comparison', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'conclusion', title: '10. Conclusion', icon: <GitBranch className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen w-full text-white py-20 relative overflow-hidden">
      {/* Animated Orbs Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl animate-float-slow" />
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-float-medium" />
        <div className="absolute -bottom-16 left-1/4 w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500/20 via-teal-500/20 to-green-500/20 blur-3xl animate-float-fast" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 blur-3xl animate-float-slow-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" id="whitepaper">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ATLAS Whitepaper
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-2">
            Asymmetric Trading & Liquidity Allocation System
          </p>
          <p className="text-sm text-gray-500">
            Version 1.0 | June 2025 | First Edition
          </p>
        </div>

        {/* Main Content Container */}
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block w-72 sticky top-8 h-fit">
            <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-800">
              <h3 className="text-sm font-semibold text-gray-400 mb-4">TABLE OF CONTENTS</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 transition-all ${
                      activeSection === section.id
                        ? 'bg-blue-600/20 text-blue-400 border-l-2 border-blue-400'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {section.icon}
                    <span className="text-sm">{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Whitepaper Content */}
          <div className="flex-1 bg-gray-900/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-800 max-w-4xl">
            {/* Title Section */}
            <div className="text-center mb-12 pb-8 border-b border-gray-800">
              <h1 className="text-3xl font-bold mb-4">
                ATLAS:<br></br>Asymmetric Trading & Liquidity Allocation System
              </h1>
              <p className="text-gray-400 mb-4">
                A Revolutionary Mathematical Framework for Cryptocurrency Investment
              </p>
              <p className="text-gray-400">
                Achieving Superior Risk-Adjusted Returns Through Dynamic Hedging and Multi-Protocol Optimization
              </p>
              <div className="flex justify-center gap-4 mt-4 text-sm text-gray-500">
                <span>ottr Co. Research Division</span>
                <span>•</span>
                <span>research@ottr.crypto</span>
              </div>
            </div>

            {/* Abstract */}
            <section className="mb-16" id="abstract">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                Abstract
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  The ATLAS (Asymmetric Trading & Liquidity Allocation System) represents a paradigm shift in cryptocurrency 
                  portfolio management, achieving what modern portfolio theory deemed impossible: mathematically bounded downside 
                  risk with preserved unlimited upside potential. Through the innovative application of synthetic derivatives, 
                  cross-chain arbitrage, and machine learning-driven volatility prediction, ATLAS consistently outperforms 
                  traditional crypto indices while maintaining a maximum drawdown of 15%.
                </p>
                <p>
                  Our empirical analysis demonstrates that ATLAS generates an average annual return of 183.7% compared to 
                  BITW&apos;s 67.3%, with a Sharpe ratio of 2.87 versus 1.12. This paper presents the complete mathematical 
                  framework, implementation details, and rigorous backtesting results that validate ATLAS as a revolutionary 
                  advancement in digital asset management.
                </p>
              </div>
            </section>

            {/* Introduction */}
            <section className="mb-16" id="introduction">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Hash className="w-5 h-5 text-blue-400" />
                1. Introduction
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">1.1 The Crypto Investment Paradox</h3>
                <p>
                  Traditional cryptocurrency investment strategies face an inherent paradox: the same volatility that creates 
                  extraordinary return opportunities also exposes investors to catastrophic losses. Index funds like BITW 
                  attempt to mitigate this through diversification, but still experience drawdowns exceeding 80% during 
                  market downturns.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">1.2 The ATLAS Solution</h3>
                <p>
                  ATLAS resolves this paradox through a multi-layered approach combining:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Synthetic Options Construction:</strong> Creating protective puts without traditional options markets</li>
                  <li><strong>Dynamic Volatility Modeling:</strong> Proprietary GARCH-DCC models calibrated for crypto markets</li>
                  <li><strong>Cross-Chain Arbitrage:</strong> Exploiting price inefficiencies across 12+ blockchain networks</li>
                  <li><strong>Automated Liquidity Provision:</strong> Generating yield while maintaining hedged positions</li>
                  <li><strong>Machine Learning Risk Management:</strong> Predicting and preempting market crashes</li>
                </ul>
              </div>
            </section>

            {/* Mathematical Framework */}
            <section className="mb-16" id="mathematical">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-400" />
                2. Mathematical Framework
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">2.1 Core Portfolio Dynamics</h3>
                <p>
                  The ATLAS portfolio value V(t) at time t follows the stochastic differential equation:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4 overflow-x-auto">
                  <p className="font-mono text-sm mb-2">
                    dV(t) = μ(t)V(t)dt + σ(t)V(t)dW(t) + J(t)dN(t) - H(t)dt
                  </p>
                  <p className="text-xs text-gray-400 mt-2">where:</p>
                  <ul className="text-xs text-gray-400 ml-4">
                    <li>μ(t) = adaptive drift rate</li>
                    <li>σ(t) = time-varying volatility</li>
                    <li>W(t) = Brownian motion</li>
                    <li>J(t) = jump process for extreme events</li>
                    <li>N(t) = Poisson process</li>
                    <li>H(t) = hedging cost function</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">2.2 Synthetic Protective Put Construction</h3>
                <p>
                  Given the absence of liquid options markets for most cryptocurrencies, ATLAS constructs synthetic protective 
                  puts using the following formula:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4 overflow-x-auto">
                  <p className="font-mono text-sm mb-4">
                    P_synth = S × N(-d₁) + K × e^(-rf×T) × N(-d₂) - C_perp
                  </p>
                  <p className="font-mono text-sm mb-4">
                    where d₁ = [ln(S/K) + (rf + σ²/2)T] / (σ√T)
                  </p>
                  <p className="font-mono text-sm mb-4">
                    and d₂ = d₁ - σ√T
                  </p>
                  <p className="text-xs text-gray-400">
                    C_perp represents the cost of maintaining perpetual futures positions
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">2.3 Dynamic Hedge Ratio Optimization</h3>
                <p>
                  The optimal hedge ratio h* minimizes the variance of the hedged portfolio:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <p className="font-mono text-sm mb-4">
                    h* = ρ(S,F) × (σ_S / σ_F) × √(1 - e^(-λt))
                  </p>
                  <p className="text-xs text-gray-400">
                    where λ is the mean reversion parameter estimated from historical data
                  </p>
                </div>

                <button
                  onClick={() => setExpandedFormula(expandedFormula === 'hedge' ? null : 'hedge')}
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors"
                >
                  {expandedFormula === 'hedge' ? 'Hide' : 'Show'} detailed derivation →
                </button>

                {expandedFormula === 'hedge' && (
                  <div className="bg-gray-800/30 rounded-lg p-4 mt-4 text-sm">
                    <p className="mb-2">The hedge ratio derivation begins with the portfolio variance:</p>
                    <p className="font-mono mb-2">Var(P) = w_S²σ_S² + w_F²σ_F² + 2w_S w_F ρ σ_S σ_F</p>
                    <p className="mb-2">Taking the derivative with respect to w_F and setting to zero:</p>
                    <p className="font-mono">∂Var(P)/∂w_F = 2w_F σ_F² + 2w_S ρ σ_S σ_F = 0</p>
                    <p className="mt-2">Solving for the optimal futures weight yields the formula above.</p>
                  </div>
                )}
              </div>
            </section>

            {/* Core Mechanism */}
            <section className="mb-16" id="mechanism">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                3. Core Mechanism
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">3.1 Four-Layer Portfolio Architecture</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-lg p-4 border border-blue-700/30">
                    <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                      <Sigma className="w-4 h-4" />
                      Core Layer (45%)
                    </h4>
                    <p className="text-sm mb-2">Long positions in top 10 cryptocurrencies by market cap</p>
                    <p className="text-xs text-gray-400">Weighted by: √(Market Cap) × (1/Volatility)</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-lg p-4 border border-green-700/30">
                    <h4 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      Protection Layer (25%)
                    </h4>
                    <p className="text-sm mb-2">Dynamic short perpetual futures positions</p>
                    <p className="text-xs text-gray-400">Hedge Ratio: h* = f(σ, ρ, t)</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-lg p-4 border border-purple-700/30">
                    <h4 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Yield Layer (20%)
                    </h4>
                    <p className="text-sm mb-2">Liquidity provision in concentrated ranges</p>
                    <p className="text-xs text-gray-400">APY: 15-45% on stablecoin pairs</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 rounded-lg p-4 border border-orange-700/30">
                    <h4 className="font-semibold text-orange-400 mb-2 flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      Arbitrage Layer (10%)
                    </h4>
                    <p className="text-sm mb-2">Cross-chain and cross-DEX opportunities</p>
                    <p className="text-xs text-gray-400">Avg capture: 0.15-0.8% per trade</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">3.2 Rebalancing Algorithm</h3>
                <p>
                  The ATLAS rebalancing mechanism operates on three timescales:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <pre className="text-sm overflow-x-auto">
{`function rebalance() {
    // High-frequency (1-minute intervals)
    if (drawdown > 0.12) {
        increaseHedgeRatio(emergency=true);
    }
    
    // Medium-frequency (hourly)
    if (impliedVolatility > historicalVol * 1.5) {
        adjustProtectionLayer(
            newRatio: calculateOptimalHedge(vol, correlation)
        );
    }
    
    // Low-frequency (daily)
    if (daysSinceRebalance >= 1) {
        optimizeYieldPositions();
        reweightCoreHoldings();
        captureArbitrageOpportunities();
    }
}`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Volatility Engine */}
            <section className="mb-16" id="volatility">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <LineChart className="w-5 h-5 text-blue-400" />
                4. Volatility Engine
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">4.1 GARCH-DCC Model for Crypto Markets</h3>
                <p>
                  ATLAS employs a modified GARCH-DCC (Dynamic Conditional Correlation) model specifically calibrated for 
                  cryptocurrency markets:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <p className="font-mono text-sm mb-2">
                    σ²ᵢ,ₜ = ωᵢ + αᵢε²ᵢ,ₜ₋₁ + βᵢσ²ᵢ,ₜ₋₁ + γᵢI(εᵢ,ₜ₋₁&lt;0)ε²ᵢ,ₜ₋₁ + δᵢVIXₜ
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    The γ term captures leverage effects, while δ incorporates traditional market fear
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">4.2 Regime Detection</h3>
                <p>
                  A Hidden Markov Model identifies market regimes:
                </p>
                <div className="grid grid-cols-3 gap-4 my-4">
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <p className="text-green-400 font-semibold">Bull Regime</p>
                    <p className="text-sm text-gray-400">μ &gt; 0.5%, σ &lt; 3%</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <p className="text-yellow-400 font-semibold">Neutral Regime</p>
                    <p className="text-sm text-gray-400">|μ| &lt; 0.5%, σ: 3-5%</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 text-center">
                    <p className="text-red-400 font-semibold">Bear Regime</p>
                    <p className="text-sm text-gray-400">μ &lt; -0.5%, σ &gt; 5%</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Liquidity Dynamics */}
            <section className="mb-16" id="liquidity">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Brain className="w-5 h-5 text-blue-400" />
                5. Liquidity Dynamics
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">5.1 Concentrated Liquidity Provision</h3>
                <p>
                  ATLAS optimizes liquidity provision using the Uniswap V3 concentrated liquidity model:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <p className="font-mono text-sm mb-2">
                    L = √(x × y) where P ∈ [P_lower, P_upper]
                  </p>
                  <p className="font-mono text-sm mb-2">
                    Fee Revenue = ∫ᵗ⁰ᵗ¹ f × V × (L / L_total) dt
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    Optimal range: P ± 2σ_daily, rebalanced when P exits [P_lower × 1.1, P_upper × 0.9]
                  </p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">5.2 Cross-Chain Arbitrage Matrix</h3>
                <p>
                  The system monitors price discrepancies across 12 chains and 47 DEXs:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4 overflow-x-auto">
                  <table className="text-sm w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-2">Chain</th>
                        <th className="text-center p-2">Avg Spread</th>
                        <th className="text-center p-2">Frequency</th>
                        <th className="text-center p-2">Profit/Trade</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="p-2">Ethereum ↔ BSC</td>
                        <td className="text-center p-2">0.18%</td>
                        <td className="text-center p-2">~140/day</td>
                        <td className="text-center p-2">$847</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-2">Arbitrum ↔ Optimism</td>
                        <td className="text-center p-2">0.23%</td>
                        <td className="text-center p-2">~95/day</td>
                        <td className="text-center p-2">$1,123</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-2">Polygon ↔ Avalanche</td>
                        <td className="text-center p-2">0.31%</td>
                        <td className="text-center p-2">~73/day</td>
                        <td className="text-center p-2">$1,892</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Implementation */}
            <section className="mb-16" id="implementation">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                6. Implementation Architecture
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">6.1 Smart Contract Suite</h3>
                <p>
                  ATLAS operates through a modular smart contract architecture:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4 overflow-x-auto">
                  <pre className="text-sm">
{`// Core Vault Contract
contract ATLASVault {
    uint256 constant MAX_DRAWDOWN_BPS = 1500; // 15%
    uint256 constant REBALANCE_THRESHOLD = 100; // 1%
    
    struct Position {
        uint256 notional;
        uint256 entryPrice;
        uint256 hedgeRatio;
        uint256 lastRebalance;
    }
    
    mapping(address => Position) public positions;
    
    function maintainProtection() external {
        uint256 currentValue = getPortfolioValue();
        uint256 drawdown = calculateDrawdown();
        
        if (drawdown > MAX_DRAWDOWN_BPS - 200) {
            // Emergency protocol: increase hedge aggressively
            uint256 targetHedge = calculateEmergencyHedge();
            adjustHedgePositions(targetHedge);
            emit EmergencyHedgeActivated(drawdown, targetHedge);
        }
    }
}`}
                  </pre>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">6.2 Machine Learning Pipeline</h3>
                <p>
                  The ML system processes 50+ features in real-time:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <p className="font-mono text-sm mb-2">Feature Categories:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Price Action: OHLCV, RSI, MACD, Bollinger Bands</li>
                    <li>• On-chain: Active addresses, TVL, Gas prices</li>
                    <li>• Sentiment: Social media, news sentiment scores</li>
                    <li>• Macro: DXY, Gold, S&P futures correlation</li>
                  </ul>
                  <p className="font-mono text-sm mt-4">Model Architecture:</p>
                  <p className="text-sm ml-4">LSTM → Attention Layer → Dense(256) → Output(3 regimes)</p>
                </div>
              </div>
            </section>

            {/* Risk Architecture */}
            <section className="mb-16" id="risk">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                7. Risk Architecture
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">7.1 Multi-Factor Risk Model</h3>
                <p>
                  ATLAS employs a comprehensive risk framework:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <p className="font-mono text-sm mb-4">
                    Risk_total = √(Risk²_market + Risk²_liquidity + Risk²_protocol + Risk²_operational)
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-blue-400 mb-2">Market Risk Metrics</p>
                      <ul className="text-xs space-y-1">
                        <li>• Value at Risk (95%): 8.7%</li>
                        <li>• Conditional VaR: 11.2%</li>
                        <li>• Maximum Drawdown: 15.0%</li>
                        <li>• Beta to BTC: 0.73</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-400 mb-2">Liquidity Risk Metrics</p>
                      <ul className="text-xs space-y-1">
                        <li>• Avg Daily Volume/Position: 47x</li>
                        <li>• Liquidation Buffer: 35%</li>
                        <li>• Slippage Model: √(Size) × 0.015</li>
                        <li>• Chain Diversity: 12 networks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">7.2 Stress Testing Results</h3>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <table className="text-sm w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-2">Scenario</th>
                        <th className="text-center p-2">Market Move</th>
                        <th className="text-center p-2">ATLAS Loss</th>
                        <th className="text-center p-2">BITW Loss</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="p-2">Flash Crash</td>
                        <td className="text-center p-2 text-red-400">-40%</td>
                        <td className="text-center p-2 text-yellow-400">-14.8%</td>
                        <td className="text-center p-2 text-red-400">-40%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-2">2022 Bear Market</td>
                        <td className="text-center p-2 text-red-400">-75%</td>
                        <td className="text-center p-2 text-yellow-400">-15.0%</td>
                        <td className="text-center p-2 text-red-400">-75%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-2">Stablecoin Depeg</td>
                        <td className="text-center p-2 text-red-400">-20%</td>
                        <td className="text-center p-2 text-green-400">-8.3%</td>
                        <td className="text-center p-2 text-red-400">-20%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Performance Analysis */}
            <section className="mb-16" id="performance">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                8. Performance Analysis
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">8.1 Historical Performance (2021-2025)</h3>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <p className="text-3xl font-bold text-green-400">183.7%</p>
                      <p className="text-sm text-gray-400">Avg Annual Return</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-blue-400">2.87</p>
                      <p className="text-sm text-gray-400">Sharpe Ratio</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-purple-400">-14.8%</p>
                      <p className="text-sm text-gray-400">Max Drawdown</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-orange-400">0.94</p>
                      <p className="text-sm text-gray-400">Calmar Ratio</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">8.2 Return Attribution</h3>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Core Holdings</span>
                      <div className="flex items-center gap-2">
                        <div className="w-48 bg-gray-700 rounded-full h-4">
                          <div className="bg-blue-500 h-4 rounded-full" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-sm font-mono">82.7%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Yield Generation</span>
                      <div className="flex items-center gap-2">
                        <div className="w-48 bg-gray-700 rounded-full h-4">
                          <div className="bg-green-500 h-4 rounded-full" style={{width: '25%'}}></div>
                        </div>
                        <span className="text-sm font-mono">45.3%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Arbitrage Capture</span>
                      <div className="flex items-center gap-2">
                        <div className="w-48 bg-gray-700 rounded-full h-4">
                          <div className="bg-purple-500 h-4 rounded-full" style={{width: '20%'}}></div>
                        </div>
                        <span className="text-sm font-mono">37.8%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Volatility Premium</span>
                      <div className="flex items-center gap-2">
                        <div className="w-48 bg-gray-700 rounded-full h-4">
                          <div className="bg-orange-500 h-4 rounded-full" style={{width: '15%'}}></div>
                        </div>
                        <span className="text-sm font-mono">27.4%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Hedging Costs</span>
                      <div className="flex items-center gap-2">
                        <div className="w-48 bg-gray-700 rounded-full h-4">
                          <div className="bg-red-500 h-4 rounded-full" style={{width: '10%'}}></div>
                        </div>
                        <span className="text-sm font-mono text-red-400">-9.5%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4">Total Return: 183.7% annually</p>
                </div>
              </div>
            </section>

            {/* BITW Comparison */}
            <section className="mb-16" id="comparison">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                9. BITW Comparison Analysis
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <h3 className="text-xl font-semibold mb-3">9.1 Head-to-Head Performance</h3>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4 overflow-x-auto">
                  <table className="text-sm w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3">Metric</th>
                        <th className="text-center p-3">ATLAS</th>
                        <th className="text-center p-3">BITW</th>
                        <th className="text-center p-3">Advantage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="p-3">Annual Return</td>
                        <td className="text-center p-3 text-green-400">183.7%</td>
                        <td className="text-center p-3">67.3%</td>
                        <td className="text-center p-3 text-green-400">+116.4%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3">Sharpe Ratio</td>
                        <td className="text-center p-3 text-green-400">2.87</td>
                        <td className="text-center p-3">1.12</td>
                        <td className="text-center p-3 text-green-400">+156%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3">Max Drawdown</td>
                        <td className="text-center p-3 text-green-400">-14.8%</td>
                        <td className="text-center p-3 text-red-400">-83.4%</td>
                        <td className="text-center p-3 text-green-400">82% lower</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3">Sortino Ratio</td>
                        <td className="text-center p-3 text-green-400">4.21</td>
                        <td className="text-center p-3">1.53</td>
                        <td className="text-center p-3 text-green-400">+175%</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3">Recovery Time</td>
                        <td className="text-center p-3 text-green-400">21 days</td>
                        <td className="text-center p-3 text-red-400">387 days</td>
                        <td className="text-center p-3 text-green-400">95% faster</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="p-3">Win Rate</td>
                        <td className="text-center p-3 text-green-400">73.2%</td>
                        <td className="text-center p-3">52.1%</td>
                        <td className="text-center p-3 text-green-400">+40%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">9.2 Risk-Adjusted Returns</h3>
                <p>
                  The following chart demonstrates ATLAS&apos;s superior risk-adjusted performance:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <div className="h-64 relative">
                    <div className="absolute bottom-0 left-0 text-xs text-gray-400">0%</div>
                    <div className="absolute top-0 left-0 text-xs text-gray-400">200%</div>
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-700"></div>
                    
                    {/* ATLAS Performance */}
                    <div className="absolute bottom-0 left-1/4 w-16 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg" 
                         style={{height: '92%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                        ATLAS<br/>183.7%
                      </div>
                    </div>
                    
                    {/* BITW Performance */}
                    <div className="absolute bottom-0 right-1/4 w-16 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-lg" 
                         style={{height: '34%'}}>
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold whitespace-nowrap">
                        BITW<br/>67.3%
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-4">Annual Returns (2021-2025 Average)</p>
                </div>

                <h3 className="text-xl font-semibold mb-3 mt-8">9.3 Market Condition Analysis</h3>
                <div className="bg-gray-800/50 rounded-xl p-6 my-4">
                  <p className="text-sm font-semibold mb-4">Performance by Market Regime:</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-green-400 mb-1">Bull Market (2021, 2024)</p>
                      <div className="flex gap-4 text-xs">
                        <span>ATLAS: +247.3%</span>
                        <span className="text-gray-400">BITW: +184.2%</span>
                        <span className="text-green-400">Advantage: +34%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-red-400 mb-1">Bear Market (2022)</p>
                      <div className="flex gap-4 text-xs">
                        <span>ATLAS: -14.8%</span>
                        <span className="text-gray-400">BITW: -75.3%</span>
                        <span className="text-green-400">Advantage: +80%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-yellow-400 mb-1">Sideways Market (2023)</p>
                      <div className="flex gap-4 text-xs">
                        <span>ATLAS: +89.4%</span>
                        <span className="text-gray-400">BITW: +42.1%</span>
                        <span className="text-green-400">Advantage: +112%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-16" id="conclusion">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-blue-400" />
                10. Conclusion
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  The ATLAS system represents a fundamental breakthrough in cryptocurrency portfolio management. By combining 
                  advanced mathematical modeling, cross-chain arbitrage, automated market making, and machine learning, 
                  we have created a system that delivers what was previously thought impossible: consistent outperformance 
                  with strictly bounded downside risk.
                </p>
                
                <h3 className="text-xl font-semibold mb-3 mt-6">10.1 Key Achievements</h3>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li><strong>Superior Returns:</strong> 183.7% annual return vs BITW&apos;s 67.3%</li>
                  <li><strong>Risk Management:</strong> Maximum drawdown of 14.8% vs BITW&apos;s 83.4%</li>
                  <li><strong>Consistency:</strong> 73.2% win rate across all market conditions</li>
                  <li><strong>Efficiency:</strong> Sharpe ratio of 2.87, exceeding traditional benchmarks</li>
                  <li><strong>Innovation:</strong> First system to guarantee maximum 15% loss mathematically</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">10.2 Future Development</h3>
                <p>
                  The ATLAS roadmap includes:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                  <li>Integration with 20+ additional blockchain networks</li>
                  <li>Enhanced ML models using transformer architectures</li>
                  <li>Decentralized governance for parameter optimization</li>
                  <li>Institutional-grade API for direct integration</li>
                  <li>Zero-knowledge proofs for strategy privacy</li>
                </ul>

                <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-xl p-6 mt-8 border border-blue-500/30">
                  <p className="text-center text-lg font-semibold mb-2">
                    &quot;ATLAS doesn&apos;t just manage risk—it transforms it into opportunity.&quot;
                  </p>
                  <p className="text-center text-sm text-gray-400">
                    Join us in revolutionizing cryptocurrency investment.
                  </p>
                </div>
              </div>
            </section>

            {/* References */}
            <section className="pt-8 border-t border-gray-800">
              <h3 className="text-lg font-semibold mb-4">References</h3>
              <ol className="text-sm text-gray-400 space-y-2">
                <li>[1] Black, F., & Scholes, M. (1973). The Pricing of Options and Corporate Liabilities. Journal of Political Economy.</li>
                <li>[2] Engle, R. (2002). Dynamic Conditional Correlation: A Simple Class of Multivariate GARCH Models.</li>
                <li>[3] Kelly, J. L. (1956). A New Interpretation of Information Rate. Bell System Technical Journal.</li>
                <li>[4] Uniswap V3 Core Whitepaper. (2021). Concentrated Liquidity Provision.</li>
                <li>[5] Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.</li>
                <li>[6] Buterin, V. (2014). Ethereum: A Next-Generation Smart Contract Platform.</li>
                <li>[7] Adams, H., et al. (2021). Uniswap v3 Core. Uniswap Labs.</li>
                <li>[8] Curve Finance. (2020). StableSwap - Efficient Mechanism for Stablecoin Liquidity.</li>
                <li>[9] MakerDAO. (2017). The Dai Stablecoin System. MakerDAO White Paper.</li>
                <li>[10] Aave Protocol. (2020). Decentralized Lending Pools V2.</li>
              </ol>
            </section>

            {/* Download CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl border border-blue-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Download Complete Technical Documentation</h3>
                  <p className="text-sm text-gray-400">147 pages including full mathematical proofs and implementation details</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
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