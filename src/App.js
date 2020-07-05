import React from 'react';
import './App.scss';
import {
  SidebarScreen, JobListingScreen, JobDetailsScreen, ApplicationsScreen,
} from './screens/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'job-recommendations',
      currentJobSelection: null,
    };
    this._handleNavgiation = this._handleNavgiation.bind(this);
    this._handleJobSelection = this._handleJobSelection.bind(this);
  }

  _handleNavgiation(value) {
    this.setState({
      currentScreen: value,
    });
  }

  _handleJobSelection(value) {
    this.setState({
      currentJobSelection: value,
    });
  }

  render() {
    const { currentScreen, currentJobSelection } = this.state;
    return (
      <div className="mh-dashboard">
        <aside className="mh-dashboard__side-bar col-2 phone-sidebar">
          <SidebarScreen handleNav={this._handleNavgiation} />
        </aside>

        {(currentScreen === 'job-recommendations')
          && (
            <>
              <section style={(currentJobSelection) ? {} : { display: 'none' }} className="mh-dashboard__middle-container col-6 phone-job-details">
                <JobDetailsScreen currentJobSelection={currentJobSelection} />
              </section>
              <section style={(currentJobSelection) ? {} : { width: '83.33%' }} className="mh-dashboard__right-container col-4 phone-job-listing">
                <JobListingScreen
                  handleJobSelection={this._handleJobSelection}
                  currentJobSelection={currentJobSelection}
                />
              </section>
            </>
          )}

        {(currentScreen === 'applications')
          && (
            <section className="mh-dashboard__applications-container col-10">
              <ApplicationsScreen currentScreen={currentScreen} />
            </section>
          )}
      </div>
    );
  }
}

export default App;
