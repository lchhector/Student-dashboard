import React from 'react';
import '../styles/jobDescription.css';

const JobDescription = ({ children }) => {
  return (
    <div className="job-description-container">
      {children}
    </div>
  )
}

export default JobDescription;
