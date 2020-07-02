import React from 'react';
import { Sidebar } from '../components/index';

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
      <>
        <div style={{ height: '20vh' }} />
        <Sidebar value={selected} onChange={this._onChange} >
          <Sidebar.item value="job-recommendations">Job Recommendations</Sidebar.item>
          <Sidebar.item value="applications">My Applications</Sidebar.item>
        </Sidebar>
      </>
    );
  }
}

export default SidebarScreen;
