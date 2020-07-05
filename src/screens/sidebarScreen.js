import React from 'react';
import { Sidebar } from '../components/index';
import matchubLogo from '../assets/matchub.png';
import profileImage from '../assets/sampleProfile.jpg';
import ProfileProgressBar from '../components/ProfileProgressBar';
import '../styles/sidebarScreen.scss';

class SidebarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'job-recommendations',
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(selected) {
    this.setState({
      selected,
    });
    const { handleNav } = this.props;
    handleNav(selected);
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="mh-sidebar-container">
        <img src={matchubLogo} alt="MatcHub logo" className="mh-sidebar-container__matchub-logo" />
        <div className="mh-sidebar-container__logo-text">MatcHub</div>
        <div style={{ height: '9vh' }} />
        <Sidebar value={selected} onChange={this._onChange}>
          <Sidebar.Item value="job-recommendations">Job Recommendations</Sidebar.Item>
          <Sidebar.Item value="applications">My Applications</Sidebar.Item>
        </Sidebar>
        <div style={{ height: '25vh' }} />
        <section className="mh-sidebar-container__user-profile">
          <img src={profileImage} alt="Profile pic" className="mh-sidebar-container__user-profile__image" />
          <div>Profile</div>
          <div> <ProfileProgressBar percentage="20" /></div>
          <div>20% completed</div>
        </section>
      </div>
    );
  }
}

export default SidebarScreen;
