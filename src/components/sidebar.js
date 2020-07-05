import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = ({ children, value, onChange }) => (
  <div>
    {React.Children.map(children, (child) => (
      React.cloneElement(child, {
        onClick: onChange,
        currentValue: value,
      })
    ))}
  </div>
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Sidebar;
