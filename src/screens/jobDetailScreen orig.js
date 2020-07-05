import React from 'react';
import companyLogo from '../assets/JR-group.png';
import '../styles/jobDetailScreen.css';
import {
  JobDescription, AnalysisOctagon, Qualifications, BitesizeInfo,
} from '../components/index';

const JobDetailScreen = ({ currentScreen }) => {
  if (currentScreen !== 'job-recommendations') {
    return null;
  }
  return (
    <div className="job-details-screen-container">
      <section className="company-logo-and-name">
        <img src={companyLogo} alt="company logo" className="job-detail-company-logo" />
        <section className="company-name-address-website">
          <div>JR Group</div>
          <div>1600 Amphitheatre Parkway</div>
          <div>www.google.com</div>
        </section>
      </section>
      <BitesizeInfo>3 months</BitesizeInfo>
      <BitesizeInfo>$800 - $1000 </BitesizeInfo>
      <BitesizeInfo>Full time</BitesizeInfo>
      <section className="desc-and-analysis">
        <span className="job-description">
          Job Description
          <JobDescription>
            We are looking for a savvy Data Engineer to join our growing team of analytics experts. The hire will be responsible for expanding and optimizing our data and data pipeline architecture, as well as optimizing data flow and collection for cross functional teams. The ideal candidate is an experienced data pipeline builder and data wrangler who enjoys optimizing data systems and building them from the ground up.
            The Data Engineer will support our software developers, database architects, data analysts and data scientists on data initiatives and will ensure optimal data delivery architecture is consistent throughout ongoing projects. They must be self-directed and comfortable supporting the data needs of multiple teams, systems and products.
            The right candidate will be excited by the prospect of optimizing or even re-designing our company’s data architecture to support our next generation of products and data initiatives.
          </JobDescription>
        </span>
        <span className="analysis-diagram">
          <AnalysisOctagon />
        </span>
      </section>

      <section className="qualifications-section">
        Qualifications
        <Qualifications />
        <div style={{ height: '20px' }} />
        <Qualifications />
      </section>
    </div>
  );
};

export default JobDetailScreen;
