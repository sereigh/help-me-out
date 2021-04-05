import React from "react";
import UserProjects from "./UserProjects.jsx";
import UserTools from "./UserTools.jsx";
import UserInfo from "./UserInfo.jsx";
import sampleUser from "../../../../server/database/data/sampleUser.json";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInfo: {}, userTools: {}, userProjects: {} };
  }

  //testing only!
  componentDidMount() {
    const sampleUserInfo = sampleUser;
    this.setState({
      userInfo: {
        name: sampleUserInfo.name,
        zip: sampleUserInfo.zip,
        handy: sampleUserInfo.handy,
      },
      userTools: sampleUserInfo.tools,
      userProjects: sampleUserInfo.projects,
    });
  }
  //testing only!
  render() {
    const { userInfo, userTools, userProjects } = this.state;
    if (userInfo.name) {
      return (
        <div>
          <UserInfo userInfo={userInfo} />
          <UserProjects userProjects={userProjects} />
          <UserTools userTools={userTools} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProfilePage;
