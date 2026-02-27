import React, { useState } from 'react';
import VariationOne from './components/variations/VariationOne';
import VariationTwo from './components/variations/VariationTwo';
import VariationThree from './components/variations/VariationThree';

function App() {
  const [activeVariation, setActiveVariation] = useState('v1');

  return (
    <div className="relative min-h-screen">
      {/* Variation Toggle UI */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] bg-white/95 backdrop-blur-xl p-1.5 rounded-full shadow-xl border border-slate-200 flex gap-1 items-center font-sans print:hidden">
        <button
          onClick={() => setActiveVariation('v1')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeVariation === 'v1' ? 'bg-blue-900 text-white shadow-md shadow-blue-900/30' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
        >
          V1: Classic Enterprise
        </button>
        <button
          onClick={() => setActiveVariation('v2')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeVariation === 'v2' ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/30' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
        >
          V2: Modern Founder
        </button>
        <button
          onClick={() => setActiveVariation('v3')}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeVariation === 'v3' ? 'bg-black text-white shadow-md shadow-black/30' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
        >
          V3: Editorial Grid
        </button>
      </div>

      {/* Render Active Variation */}
      {activeVariation === 'v1' && <VariationOne />}
      {activeVariation === 'v2' && <VariationTwo />}
      {activeVariation === 'v3' && <VariationThree />}
    </div>
  );
}

export default App;
