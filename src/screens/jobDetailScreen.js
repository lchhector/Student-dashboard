import React from 'react';
import PropTypes from 'prop-types';
import companyLogo from '../assets/visa.png';
import '../styles/jobDetailScreen.scss';
// import {
//   JobDescription, AnalysisOctagon, Qualifications, BitesizeInfo,
// } from '../components/index';

const JobDetailScreen = ({ currentJobSelection }) => {
  // still need to dynamically render base on job selection!
  return (
    <div className="mh-job-details-container">
      <section className="mh-job-details-container__company-logo-details">
        <img src={companyLogo} alt="company logo" className="mh-job-details-container__company-logo-details__logo" />
        <div className="mh-job-details-container__company-logo-details__details">
          <div>Visa</div>
          <div>1600 Amphitheatre Parkway</div>
          <div>www.visa.com</div>
        </div>
      </section>

      <div className="mh-job-details-container__info-apply">
        3 months &nbsp;|&nbsp; $1000 &nbsp;|&nbsp; full-time
        <span className="hover-cursor-pointer">
          <button type="button" className="mh-job-details-container__info-apply__apply-btn">Apply</button>
        </span>

      </div>
      <br />

      <section className="mh-job-details-container__job-desc">
        <hr />
        Job Description <br />
        <li>
          We are looking for a savvy Data Engineer to join our growing team of analytics experts ...
        </li>
        <li>
          The Data Engineer will support our software developers, database architects, data analyst ...
        </li>
      </section>
      <hr />

      <section className="mh-job-details-container__qualifications">
        Qualifications
        <li>Investment Research</li>
        <li>Investment Management</li>
        <li>Investment Banking</li>
        <hr />
        {/* <div>
          <div>Preferred qualifications:</div>
          <li>Experience in social analytics. Experience with building/maintaining processes to proactively/reactively manage user sentiment across social platforms. Knowledge of social media monitoring/listening tools.</li>
          <li>Experience in working with statistical analysis and data mining software.</li>
          <li>Experience in working with statistical analysis and data mining software.</li>
        </div> */}
      </section>

      <section>
        <span className="mh-job-details-container__traits-title">
          <div className="mh-job-details-container__traits-title__header">
            Company Desired Traits
          </div>
          <div className="mh-job-details-container__traits-title__header">
            Your Traits
          </div>
        </span>

        <div className="mh-job-details-container__traits">
          <div className="mh-job-details-container__traits__company">
            <div>Conscientiousness</div>
            <div className="conscientiousness-bar-company" />
            <div>Flexibility</div>
            <div className="flexibility-bar-company" />
          </div>
          <div className="mh-job-details-container__traits__user">
            <div>Conscientiousness</div>
            <div className="conscientiousness-bar-user" />
            <div>Flexibility</div>
            <div className="flexibility-bar-user" />
          </div>
        </div>
        <hr />
      </section>

      <section>
        <label htmlFor="personalised-message">Personalised Message</label><br />
        <textarea className="mh-job-details-container__personalised-message" />
        <hr />
      </section>
    </div>
  );
};

JobDetailScreen.propTypes = {
  currentJobSelection: PropTypes.string,
};

JobDetailScreen.defaultProps = {
  currentJobSelection: null,
}

export default JobDetailScreen;
