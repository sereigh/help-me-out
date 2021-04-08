import React from "react";
import axios from "axios";
import EditDeleteUserProject from "./EditDeleteUserProject";

class UserProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showProjectEditDelete: false };

    this.formattedDate = this.formattedDate.bind(this);
    this.toggleProjectEditDelete = this.toggleProjectEditDelete.bind(this);
    this.toggleHelp = this.toggleHelp.bind(this);
  }
  formattedDate(date) {
    return new Date(date).toLocaleDateString();
  }

  toggleHelp() {
    console.log("toggleHelp");
  }

  toggleProjectEditDelete() {
    const { showProjectEditDelete } = this.state;
    this.setState({ showProjectEditDelete: !showProjectEditDelete });
  }

  render() {
    const { project } = this.props;
    const { showProjectEditDelete } = this.state;
    const formattedDate = this.formattedDate(project.createdAt);
    return (
      <div>
        {!showProjectEditDelete && (
          <div>
            <div>{project.project_name}</div>
            <div>{project.project_description}</div>
            <div>{formattedDate}</div>
            <div>
              Need Help: <input type="checkbox" onChange={this.toggleHelp} />
              <button onClick={this.toggleProjectEditDelete}>
                Edit/Delete Project
              </button>
            </div>
          </div>
        )}
        {showProjectEditDelete && (
          <EditDeleteUserProject
            project={project}
            formattedDate={formattedDate}
            toggleProjectEditDelete={this.toggleProjectEditDelete}
          />
        )}
      </div>
    );
  }
}

export default UserProject;
