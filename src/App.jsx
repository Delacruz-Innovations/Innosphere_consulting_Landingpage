import React, { useState } from 'react';
import VariationOne from './components/variations/VariationOne';
import VariationTwo from './components/variations/VariationTwo';
import VariationThree from './components/variations/VariationThree';
import CinematicEntrance from './components/CinematicEntrance';

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  // Variation 3 is the chosen cinematic entrance.
  // Variation 1 & 2 logic remains inside CinematicEntrance.jsx for future use.

  return (
    <div className="relative min-h-screen">
      {showEntrance && (
        <CinematicEntrance
          type={3}
          onComplete={() => setShowEntrance(false)}
        />
      )}

      <VariationThree />

      {/* 
        To use other variations, simply swap the component above with:
        <VariationOne /> or <VariationTwo />
      */}
    </div>
  );
}

export default App;
