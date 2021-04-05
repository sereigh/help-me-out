import React from "react";
import MyProjects from "./MyProjects.jsx";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <MyProjects />
      </div>
    );
  }
}

export default ProfilePage;
