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
    const {
      _id,
      name,
      photo,
      zip,
      handy,
      tools,
      projects,
      password,
      email,
    } = this.props.user;
    const {
      showAddProjectForm,
      showAddToolForm,
      showEditUserForm,
    } = this.state;
    const handleGetTargetName = (e) => e.target.name;
    const handleDeleteItem = (itemToDelete, itemArray) => {
      let updatedArray = [];
      itemArray.forEach((item) => {
        if (item !== itemToDelete) {
          updatedArray.push(item);
        }
      });
      return updatedArray;
    };
    const handleAddItem = (itemToAdd, itemArray) => {
      if (itemArray.indexOf(itemToAdd) === -1 && itemToAdd.length > 3) {
        const revisedArray = itemArray.concat(itemToAdd);
        return revisedArray;
      }
    };

    return (
      <div id="user-profile">
        <div className="user-info-pane">
          <UserInfo
            user_id={_id}
            name={name}
            photo={photo}
            zip={zip}
            password={password}
            email={email}
            handy={handy}
            showEditUserForm={showEditUserForm}
            toggleEditUserForm={this.toggleEditUserForm}
            handleGetTargetName={handleGetTargetName}
            handleDeleteItem={handleDeleteItem}
            handleAddItem={handleAddItem}
          />
        </div>
        <div className="user-feed">
          <UserProjects
            user_id={_id}
            projects={projects}
            showAddProjectForm={showAddProjectForm}
            toggleAddProjectForm={this.toggleAddProjectForm}
            handleGetTargetName={handleGetTargetName}
            handleDeleteItem={handleDeleteItem}
            handleAddItem={handleAddItem}
          />
          <UserTools
            user_id={_id}
            tools={tools}
            showAddToolForm={showAddToolForm}
            toggleAddToolForm={this.toggleAddToolForm}
            handleGetTargetName={handleGetTargetName}
            handleDeleteItem={handleDeleteItem}
            handleAddItem={handleAddItem}
          />
        </div>
      </div>
    );
  }
}

export default ProfilePage;
