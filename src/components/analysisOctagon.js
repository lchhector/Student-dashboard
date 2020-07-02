import React from 'react';
import analysis from '../assets/octagon-model.png';
import '../styles/analysisOctagon.css';

const AnalysisOctagon = () => {
  return (
    <div>
      <img src={analysis} alt="analysis report" className="analysis-image"/>
    </div>
  )
}

export default AnalysisOctagon;