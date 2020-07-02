import React, { Children } from 'react';
import '../styles/bitesizeInfo.css';

const BiteSizeInfo = ({ children }) => {
  return (
    <div className="bitesize-info">
      <span>
      {children}
      </span>
    </div>
  )
}

export default BiteSizeInfo;