import React from 'react';
import '../styles/jobListing.css';

const JobListing = ({ children, value, onChange, style }) => {
  return (
    <div className="job-listing">
      {React.Children.map(children, child => (
        React.cloneElement(child, {
          onClick: onChange,
          currentValue: value,
        })
      ))
    }
    </div>
  );
};

 

export default JobListing;
