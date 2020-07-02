import React from 'react';
import '../styles/ProgressBar.css';
import propTypes from 'prop-types';

const ProgressBar = (props) => {
  const { percentage } = props;
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="filler-bar" style={{ width: `${percentage}%` }} />
      </div>
      <div className="percent-text">{percentage}%</div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: propTypes.number,
};

export default ProgressBar;
