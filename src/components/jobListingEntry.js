import React from 'react';
import Colors from '../constants/Colors';
import '../styles/jobListingEntry.css';
import ProgressBar from './ProgressBar';
import companyLogo from '../assets/JR-group.png';
import locationIcon from '../assets/location.png';

const JobListingEntry = ({
  value, onClick, currentValue, children,
}) => (
    <button className="job-entry-container"
      onClick={() => onClick(value)}
      style={(currentValue === value) ? { backgroundColor: Colors.lightblue } : {}}
    >
      <section className="logo-container">
        <img className="company-logo" src={companyLogo} alt="Company logo" />
      </section>
      <section className="job-text-container">
        <div className="job-title">{children}</div>
        <div className="job-attributes">
          <div>JR Group</div>
          <div>Nature of Company</div>
          <div>3 months</div>
          <span className="company-location"><img className="location-icon" src={locationIcon} alt="Location" />
            <div className="location-text">Singapore</div>
          </span>
        </div>
      </section>
      <aside className="entry-bar"><ProgressBar percentage={80} /></aside>

    </button>
  );

export default JobListingEntry;
