import React, { useEffect, useRef } from 'react';
import MathJax from 'mathjax';

interface MathVisualizerProps {
  equation: string;
}

const MathVisualizer: React.FC<MathVisualizerProps> = ({ equation }) => {
  const mathContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mathContainerRef.current) {
      MathJax.typesetPromise([mathContainerRef.current]);
    }
  }, [equation]);

  return (
    <div ref={mathContainerRef}>
      <p>{`\\(${equation}\\)`}</p>
    </div>
  );
};

export default MathVisualizer;
