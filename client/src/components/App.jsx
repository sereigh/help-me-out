import React from "react";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";

import LandingPage from "./LandingPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <ProfilePage />
        <LandingPage />
      </div>
    );
  }
}

export default App;
