import React from "react";
import UserProjects from "./UserProjects.jsx";
import UserTools from "./UserTools.jsx";
import UserInfo from "./UserInfo.jsx";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <UserInfo />
        <UserProjects />
        <UserTools />
      </div>
    );
  }
}

export default ProfilePage;
