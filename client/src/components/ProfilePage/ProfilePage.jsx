import React from "react";
import UserProjects from "./UserProjects.jsx";
import UserTools from "./UserTools.jsx";
import UserInfo from "./UserInfo.jsx";
import sampleUser from "../../../../server/database/data/sampleUser.json";
// import postProjects from "../../../../server/routes/projects/postProjects";
// import deleteProjects from "../../../../server/routes/projects/deleteProjects";
// import putProjects from "../../../../server/routes/projects/putProjects";
// import postTools from "../../../../server/routes/tools/postTools";
// import deleteTools from "../../../../server/routes/tools/postTools";
// import putTools from "../../../../server/routes/tools/putTools";
// import putUsers from "../../../../server/routes/users/putUser";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userInfo: {}, userTools: {}, userProjects: {} };

    this.toggleHelp = this.toggleHelp.bind(this);
    this.addProfileItem = this.addProfileItem.bind(this);
    this.deleteProfileItem = this.deleteProfileItem.bind(this);
    this.putProfileItemItem = this.putProfileItem.bind(this);
  }

  toggleHelp() {}

  addProfileItem() {}

  deleteProfileItem() {}

  putProfileItem() {}
  //testing only!
  componentDidMount() {
    const sampleUserInfo = sampleUser;
    this.setState({
      userInfo: {
        name: sampleUserInfo.name,
        zip: sampleUserInfo.zip,
        handy: sampleUserInfo.handy,
        photo: sampleUserInfo.photo || null,
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
          <UserProjects
            userProjects={userProjects}
            toggleHelp={this.toggleHelp}
            addProfileItem={this.addProfileItem}
            deleteProfileItem={this.deleteProfileItem}
            putProfileItem={this.putProfileItem}
          />
          <UserTools userTools={userTools} />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProfilePage;
