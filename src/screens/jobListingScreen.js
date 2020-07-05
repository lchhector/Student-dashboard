import React from 'react';
import PropTypes from 'prop-types';
import { JobListing } from '../components/index';
import '../styles/jobListingScreen.scss';

// eslint-disable-next-line react/prefer-stateless-function
class JobListingScreen extends React.Component {
  render() {
    const { handleJobSelection, currentJobSelection } = this.props;
    return (
      <>
        <div className="mh-job-listing-header" />
        <JobListing value={currentJobSelection} onChange={handleJobSelection}>
          <JobListing.Entry value="job-reco"> Data Intern</JobListing.Entry>
          <JobListing.Entry value="applications"> Google software engineer</JobListing.Entry>
          <JobListing.Entry value="apple"> Business Development Intern </JobListing.Entry>
          <JobListing.Entry value="orange"> Sales Management Executive </JobListing.Entry>
          <JobListing.Entry value="banana"> Sales Management Executive </JobListing.Entry>
          <JobListing.Entry value="chilli"> Sales Management Executive </JobListing.Entry>
        </JobListing>
        <div style={{ height: '25px' }} />
      </>
    )
  }
}

JobListingScreen.propTypes = {
  handleJobSelection: PropTypes.func.isRequired,
  currentJobSelection: PropTypes.string,
};

JobListingScreen.defaultProps = {
  currentJobSelection: null,
};

export default JobListingScreen;

// const jobsDatabase = [
//   {
//     id: 1,
//     name: 'Business Development Intern 1',
//     company: 'JR Group',
//     country: 'Singapore',
//     jobDescription: 'xyz',
//   },
//   {
//     id: 2,
//     name: 'Intern 2',
//     company: 'JR Group',
//     country: 'Singapore',
//     jobDescription: 'abc',
//   },
//   {
//     id: 3,
//     name: 'Fulltime 3',
//     company: 'JR Group',
//     country: 'Singapore',
//     jobDescription: 'def',
//   },
//   {
//     id: 4,
//     name: 'Partime 4',
//     company: 'JR Group',
//     country: 'Singapore',
//     jobDescription: 'ghi',
//   },
//   {
//     id: 5,
//     name: 'Freelance 5',
//     company: 'JR Group',
//     country: 'Singapore',
//     jobDescription: 'jkl',
//   },
// ];
