import React from 'react';
import MathVisualizer from './MathVisualizer';
import '../styles/components.css'; // Adjust the import path

const App: React.FC = () => {
  const equation = "E = mc^2";

  return (
    <div className="App">
      <h1>Math Equation Visualizer</h1>
      <MathVisualizer equation={equation} />
    </div>
  );
};

export default App;
