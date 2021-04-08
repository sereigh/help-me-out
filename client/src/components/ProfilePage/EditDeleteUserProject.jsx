import React from "react";

class EditDeleteUserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: this.props.project.project_name,
      project_description: this.props.project_description,
    };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  handleGetFields(e) {
    const { project_name, project_description } = this.state;
    this.setState({ [e.target.name]: e.target.value });
  }

  saveChanges() {}

  render() {
    const { project, formattedDate, toggleProjectEditDelete } = this.props;
    const { project_name, project_description } = this.state;
    return (
      <div>
        Project Name:{" "}
        <input type="text" name={project_name} value={project.project_name} />
        Project Description:{" "}
        <input type="text" value={project.project_description} />
        <div>{formattedDate}</div>
        <div>
          <button onClick={this.saveChanges}>Save Changes</button>
          <button onClick={toggleProjectEditDelete}>Cancel</button>
        </div>
      </div>
    );
  }
}

export default EditDeleteUserProject;
