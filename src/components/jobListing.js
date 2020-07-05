import React from 'react';
import PropTypes from 'prop-types';
import '../styles/jobListing.scss';

const JobListing = ({ children, value, onChange }) => {
  return (
    <div className="job-listing">
      {React.Children.map(children, (child) => (
        React.cloneElement(child, {
          onClick: onChange,
          currentValue: value,
        })
      ))}
    </div>
  );
};

JobListing.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

JobListing.defaultProps = {
  value: null,
}

export default JobListing;
