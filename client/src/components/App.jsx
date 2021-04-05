import React from 'react';

import LandingPage from './LandingPage';
import Inbox from './Inbox';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <LandingPage />
        <Inbox />
      </div>
    );
  }
}

export default App;
