import React from "react";
import UserProjects from "./UserProjects.jsx";
import UserTools from "./UserTools.jsx";
import UserInfo from "./UserInfo.jsx";
import MiniMap from './MiniMap';
import Inbox from '../Inbox';
import sampleUser from "../../../../server/database/data/sampleUser.json";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditUserForm: false,
      showAddProjectForm: false,
      showAddToolForm: false,
    };

    this.toggleHelp = this.toggleHelp.bind(this);
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
    const { showInbox } = this.props;
    const handleGetTargetName = (e) => e.target.name;
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
            handleAddItem={handleAddItem}
          />
          <MiniMap zipcode={zip} />
        </div>
        <div className="user-feed">
          {showInbox
            ? <Inbox />
            : <>
              <UserProjects
                user_id={_id}
                projects={projects}
                showAddProjectForm={showAddProjectForm}
                toggleAddProjectForm={this.toggleAddProjectForm}
                handleGetTargetName={handleGetTargetName}
                handleAddItem={handleAddItem}
              />
              <UserTools
                user_id={_id}
                tools={tools}
                showAddToolForm={showAddToolForm}
                toggleAddToolForm={this.toggleAddToolForm}
                handleGetTargetName={handleGetTargetName}
                handleAddItem={handleAddItem}
              />
            </>}
        </div>
      </div>
    );
  }
}

export default ProfilePage;
