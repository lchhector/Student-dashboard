import React from 'react';
import '../styles/applicationsItemInfo.css';

const ApplicationsItemInfo = ({
  value, currentSelection, children,
}) => (
    <div
      className="applications-item-info"
      style={(currentSelection === value) ? {} : { display: 'none' }}
    >
      <div>
        {children}
      </div>
    </div>
  );

export default ApplicationsItemInfo;
