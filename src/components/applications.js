import React from 'react';
import '../styles/applications.css';

const Applications = ({ children, value, onChange }) => (
  <div className="application-listing">
    {React.Children.map(children, child => (
      React.cloneElement(child, {
        onClick: onChange,
        currentValue: value,
      })
    ))
  }
  </div>
);

export default Applications;
