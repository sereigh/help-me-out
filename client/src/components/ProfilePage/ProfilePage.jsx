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

    this.state = {
      showEditUserForm: false,
      showAddProjectForm: false,
      showAddToolForm: false,
    };

    this.toggleHelp = this.toggleHelp.bind(this);
    this.addProfileItem = this.addProfileItem.bind(this);
    this.toggleEditUserForm = this.toggleEditUserForm.bind(this);
    this.toggleAddProjectForm = this.toggleAddProjectForm.bind(this);
    this.toggleAddToolForm = this.toggleAddToolForm.bind(this);
  }

  toggleEditUserForm() {
    const { showEditUserForm } = this.state;
    this.setState({ showEditUserForm: !showEditUserForm });
  }

  toggleAddProjectForm() {
    const { showAddProjectForm } = this.state;
    this.setState({ showAddProjectForm: !showAddProjectForm });
  }
  toggleAddToolForm() {
    const { showAddToolForm } = this.state;
    this.setState({ showAddToolForm: !showAddToolForm });
  }
  toggleHelp() {}

  addProfileItem(type) {
    if (type === "project") {
      console.log("project");
    }
    if (type === "tool") {
      console.log("tool");
    } else {
      return;
    }
  }
  render() {
    const { name, photo, zip, handy, tools, projects } = this.props.user;
    const {
      showAddProjectForm,
      showAddToolForm,
      showEditUserForm,
    } = this.state;
    return (
      <div>
        <UserInfo
          name={name}
          photo={photo}
          zip={zip}
          handy={handy}
          showEditUserForm={showEditUserForm}
          toggleEditUserForm={this.toggleEditUserForm}
        />
        <UserProjects
          projects={projects}
          showAddProjectForm={showAddProjectForm}
          toggleAddProjectForm={this.toggleAddProjectForm}
        />
        <UserTools
          tools={tools}
          toggleAddToolForm={this.toggleAddToolForm}
          showAddToolForm={showAddToolForm}
        />
      </div>
    );
  }
}

export default ProfilePage;
