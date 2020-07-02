import React from 'react';
import Colors from '../constants/Colors';
import '../styles/applicationsItem.css';

const ApplicationsItem = ({
  value, onClick, currentValue, children, name, icon, role, emType, status
}) => (
  <>
    <button className="application-item"
      onClick={() => onClick(value)}
      style={(currentValue === value ) ? {backgroundColor: Colors.lightblue} : {}}
    >
      <table className="applications-table">
        <tr>
          <td className="td-company">
            <span><img src={icon} alt="company icon" className="applications-company-icon"/>{name}</span>
          </td>
          <td className="td-role">{role}</td>
          <td className="td-emType">{emType}</td>
          <td className="td-status">{status}</td>
        </tr>
      </table>
    </button>
    {React.Children.map(children, child => (
      React.cloneElement(child, {
        currentSelection: currentValue,
        value: value,
      })
    ))}
  </>
);

export default ApplicationsItem;
