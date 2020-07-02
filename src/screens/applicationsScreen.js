import React from 'react';
import { Applications } from '../components/index';
import '../styles/applicationsScreen.css';
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
    const { currentScreen } = this.props;
    const { selected } = this.state;
    if (currentScreen !== 'applications') {
      return null;
    }
    return (
      <div className="application-screen-container">
        <header>Your Applications (5)</header>
        <table>
          <tr className="table-head">
            <th>Company</th>
            <th>Role</th>
            <th>Employment Type</th>
            <th>Status</th>
          </tr>
        </table>
        <Applications value={selected} onChange={this._onChange}>
          <Applications.item value="apple" name="Apple" icon={appleIcon} role="Software Engineer" emType="Full-time" status="Pending">
            <Applications.item.info> show more info</Applications.item.info>
          </Applications.item>
          <Applications.item value="google" name="Google" icon={googleIcon} role="Marketing" emType="Part-time" status="Pending">
            <Applications.item.info> show more info</Applications.item.info>
          </Applications.item>
          <Applications.item value="facebook" name="Facebook" icon={fbIcon} role="Data Intern" emType="Full-time" status="pending">
            <Applications.item.info> show more info </Applications.item.info>
          </Applications.item>
        </Applications>
      </div>
    )
  }
}

export default ApplicationsScreen;