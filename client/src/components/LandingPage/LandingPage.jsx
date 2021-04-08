import React from 'react';
import LPProjects from './LPProjects';
import LPExperts from './LPExperts';
import sampleExp from '../../../../server/database/data/sampleTopExperts.json';
import sampleProj from '../../../../server/database/data/sampleRecentProjects.json';
import sampleUser from '../../../../server/database/data/sampleUser.json';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { experts: sampleExp, projects: sampleProj, loginText: '' };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ loginText: 'Sign Up or Login to see more' });
  }
  render() {
    const { projects, experts, loginText } = this.state;
    return (
      <>
        <div>{loginText}</div>
        <h2>Connect with your community(or something like that)</h2>
        <div className="lpFeedContainer">
          <h4 className="lpFeedHeaders">Check out these recent projects</h4>
          <LPProjects projects={projects} onClick={this.onClick} />
          <br />
          <h4 className="lpFeedHeaders">Experts in your area</h4>
          <LPExperts experts={experts} onClick={this.onClick} />
        </div>
      </>
    );
  }
}

export default LandingPage;
