import React from 'react';
import Colors from '../constants/Colors';
import '../styles/applicationsItem.css';

const ApplicationsItem = ({
  value, onClick, currentValue, children, name, icon, role, emType, status,
}) => (
    <>
      <button
        type="button"
        className="application-item"
        onClick={() => onClick(value)}
        style={(currentValue === value) ? { backgroundColor: Colors.lightblue5mh } : {}}
      >
        <table className="applications-table">
          <tbody>
            <tr>
              <td className="td-company">
                <span><img src={icon} alt="company icon" className="applications-company-icon" />{name}</span>
              </td>
              <td className="table-data">{role}</td>
              <td className="table-data">{emType}</td>
              <td className="table-data">{status}</td>
            </tr>
          </tbody>
        </table>
      </button>
      {React.Children.map(children, (child) => (
        React.cloneElement(child, {
          currentSelection: currentValue,
          value,
        })
      ))}
    </>
  );

export default ApplicationsItem;
