import React from 'react';
import ProjectsFeedContainer from './MainPage/ProjectsFeedContainer'

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        Main Page
        <ProjectsFeedContainer />
      </div>
    );
  }
}

export default MainPage;
