import React from 'react';
import '../styles/ProfileProgressBar.css';
import PropTypes from 'prop-types';

function ProfileProgressBar(props) {
  const { percentage } = props;
  return (
    <div className="profile-progress-bar">
      <div className="profile-filler-bar" style={{ width: `${percentage}%` }} />
    </div>
  );
}

ProfileProgressBar.propTypes = {
  percentage: PropTypes.string.isRequired,
};

export default ProfileProgressBar;
