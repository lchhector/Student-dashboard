import React from 'react';
import './App.css';
import { SidebarScreen, JobListingScreen, JobDetailsScreen, ApplicationsScreen } from './screens/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 'job-recommendations',
    };
    this._handleNavgiation = this._handleNavgiation.bind(this);
  }

  _handleNavgiation(value) {
    this.setState({
      currentScreen: value,
    });
  }

  render() {
    const { currentScreen } = this.state;
    return (
      <div id="full-container" >
        <div id="wrapper">
          <body id="layout-3-parts">
            <aside className="side-bar">
              <SidebarScreen handleNav={this._handleNavgiation} />
            </aside>
            {/* ====================================== */}
            {(currentScreen === 'job-recommendations')
              && (
                <section id="content-container">
                  <section id="middle-container">
                    <JobDetailsScreen currentScreen={currentScreen} />
                  </section>
                  <section id="right-container">
                    <JobListingScreen currentScreen={currentScreen} />
                  </section>
                </section>
              )}
            {/* ====================================== */}

            {(currentScreen === 'applications')
              && (
                <section id="applications-content-container">
                  <ApplicationsScreen currentScreen={currentScreen} />
                </section>
              )}
          </body>
        </div>
      </div>
    );
  }
}

export default App;
