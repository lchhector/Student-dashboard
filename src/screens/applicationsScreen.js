import React from 'react';
import { Applications } from '../components/index';
import '../styles/applicationsScreen.scss';
import fbIcon from '../assets/facebook.png';
import appleIcon from '../assets/apple.png';
import googleIcon from '../assets/google.png';

class ApplicationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(value) {
    this.setState({
      selected: value,
    });
  }

  render() {
    const { selected } = this.state;
    return (
      <div className="mh-application-container">
        <header className="mh-application-container__header-text">Your Applications (3)</header>
        <table className="mh-application-container__table-head">
          <tbody>
            <tr>
              <th className="mh-application-container__table-head__cell">Company</th>
              <th className="mh-application-container__table-head__cell">Role</th>
              <th className="mh-application-container__table-head__cell">Employment Type</th>
              <th className="mh-application-container__table-head__cell">Status</th>
            </tr>
          </tbody>
        </table>
        <Applications value={selected} onChange={this._onChange}>
          <Applications.Item value="apple" name="Apple" icon={appleIcon} role="Software Engineer" emType="Full-time" status="Pending">
            <Applications.Item.Info>show more info</Applications.Item.Info>
          </Applications.Item>
          <Applications.Item value="google" name="Google" icon={googleIcon} role="Marketing" emType="Part-time" status="Pending">
            <Applications.Item.Info> show more info</Applications.Item.Info>
          </Applications.Item>
          <Applications.Item value="facebook" name="Facebook" icon={fbIcon} role="Data Intern" emType="Full-time" status="Pending">
            <Applications.Item.Info> show more info </Applications.Item.Info>
          </Applications.Item>
        </Applications>
        <div style={{ height: '20px' }} />
      </div>
    );
  }
}

export default ApplicationsScreen;
