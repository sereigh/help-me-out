import React from 'react';

import LandingPage from './LandingPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <LandingPage />
      </div>
    );
  }
}

export default App;
