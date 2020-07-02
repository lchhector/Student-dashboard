import React from 'react';
import '../styles/sidebarItem.css';
import Colors from '../constants/Colors';

const SidebarItem = ({
  value, onClick, currentValue, children,
}) => (
  <button className="sidebar-item"
    onClick={() => onClick(value)}
    style={(currentValue === value ) ? {backgroundColor: Colors.lightblue} : {}}
  >
    <div>
      {children}
    </div>
  </button>
);

export default SidebarItem;
