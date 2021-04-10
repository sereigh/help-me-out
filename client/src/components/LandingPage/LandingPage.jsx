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
      <div className="landing-page">
        <div>{loginText}</div>
        <h2>Community Projects</h2>
        <div className="lpProjectsContainer">
          {/* <h4 className="lpFeedHeaders">Check out these recent projects</h4> */}
          <LPProjects projects={projects} onClick={this.onClick} />
        </div>
        <h2>Community Experts</h2>
        <div className="lpExpertsContainer">
          {/* <h4 className="lpFeedHeaders">Experts in your area</h4> */}
          <LPExperts experts={experts} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default LandingPage;
