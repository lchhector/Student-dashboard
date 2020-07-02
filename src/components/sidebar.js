import React from 'react';

const Sidebar = ({ children, value, onChange }) => (
  <div>
    {React.Children.map(children, child => (
      React.cloneElement(child, {
        onClick: onChange,
        currentValue: value,
      })
    ))
  }
  </div>
);

export default Sidebar;
