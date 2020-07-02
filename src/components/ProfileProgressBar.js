import React from 'react';
import './ProfileProgressBar.css';
import propTypes from 'prop-types';

function ProfileProgressBar(props) {
  const { percentage } = props;
  return (
    <div className="profile-progress-bar">
      <div className="profile-filler-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
}

ProfileProgressBar.propTypes = {
  percentage: propTypes.number,
};

export default ProfileProgressBar;
