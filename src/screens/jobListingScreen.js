import React from 'react';
import { JobListing } from '../components/index';

class JobListingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'job-1',
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(selected) {
    this.setState({
      selected,
    });
    console.log('123');
  }

  render() {
    const { selected } = this.state;
    const { currentScreen } = this.props;
    if (currentScreen !== 'job-recommendations') {
      return null;
    }
    const jobsDatabase = [
      {
        id: 1,
        name: 'Business Development Intern 1',
        company: 'JR Group',
        country: 'Singapore',
        jobDescription: 'xyz',
      },
      {
        id: 2,
        name: 'Intern 2',
        company: 'JR Group',
        country: 'Singapore',
        jobDescription: 'abc',
      },
      {
        id: 3,
        name: 'Fulltime 3',
        company: 'JR Group',
        country: 'Singapore',
        jobDescription: 'def',
      },
      {
        id: 4,
        name: 'Partime 4',
        company: 'JR Group',
        country: 'Singapore',
        jobDescription: 'ghi',
      },
      {
        id: 5,
        name: 'Freelance 5',
        company: 'JR Group',
        country: 'Singapore',
        jobDescription: 'jkl',
      },
    ];

    return (
      <>
        <JobListing value={selected} onChange={this._onChange}>
          <JobListing.entry value="job-reco"> Data Intern</JobListing.entry>
          <JobListing.entry value="applications"> Google software engineer</JobListing.entry>
          <JobListing.entry value="apple"> Business Development Intern </JobListing.entry>
          <JobListing.entry value="orange"> Sales Management Executive </JobListing.entry>
          <JobListing.entry value="pear"> Financial Management Trainee </JobListing.entry>
        </JobListing>
      </>
    )
  }

}

export default JobListingScreen;
