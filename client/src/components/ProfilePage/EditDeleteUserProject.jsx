import React from "react";
import axios from "axios";
import EditDeleteProjectPhotos from "./EditDeleteProjectPhotos";

class EditDeleteUserProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: this.props.project.project_name,
      project_description: this.props.project.project_description,
      project_photos: this.props.project.project_photos,
      needed_tools: this.props.project.needed_tools,
      help: this.props.project.help,
    };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleAddToPhotoList = this.handleAddToPhotoList.bind(this);
    this.handleDeleteFromProjectPhotoList = this.handleDeleteFromProjectPhotoList.bind(
      this
    );
    this.handleToggleHelp = this.handleToggleHelp.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  handleGetFields(e) {
    const { project_name, project_description, project_photos } = this.state;
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddToPhotoList() {
    const { project_photo, project_photos } = this.state;
    if (
      project_photos.indexOf(project_photo) === -1 &&
      project_photo.length > 3
    ) {
      const revisedPhotos = project_photos.concat(project_photo);
      this.setState({ project_photos: revisedPhotos });
      let inputField = document.querySelector('input[name="project_photo"]');
      inputField.value = "";
    }
  }

  handleDeleteFromProjectPhotoList(e) {
    const { project_photos } = this.state;
    let v = e.target.name;
    let updatedPhotos = [];
    project_photos.forEach((photo) => {
      if (photo !== v) {
        updatedPhotos.push(photo);
      }
    });
    this.setState({ project_photos: updatedPhotos });
  }

  handleToggleHelp() {
    const { help } = this.state;
    this.setState({ help: !help });
  }

  saveChanges() {
    const { user_id } = this.props;
    const { _id } = this.props.project;
    const {
      project_name,
      project_description,
      project_photos,
      help,
      needed_tools,
    } = this.state;
    let editProjectObj = {
      project_name: project_name,
      project_description: project_description,
      project_photos: project_photos,
      needed_tools: needed_tools || [],
      help: help,
    };
    console.log(editProjectObj, _id, user_id);
    axios
      .put(`/users/${user_id}/projects/${_id}`, editProjectObj)
      .then((response) => {
        console.log("project put");
      })
      .catch((err) => {
        throw err;
      });
  }

  deleteProject() {
    const { user_id } = this.props;
    const { _id } = this.props.project;
    axios
      .delete(`/users/${user_id}/projects/${_id}`)
      .then(() => {
        console.log("project deleted");
      })
      .catch((err) => {
        throw err;
      });
    console.log("delete");
  }

  render() {
    const { project, formattedDate, toggleProjectEditDelete } = this.props;
    const {
      project_name,
      project_description,
      project_photos,
      help,
    } = this.state;
    return (
      <div>
        Project Name:{" "}
        <input
          type="text"
          name={project_name}
          value={project.project_name}
          onChange={this.handleGetFields}
        />
        Project Description:{" "}
        <input
          type="text"
          value={project.project_description}
          onChange={this.handleGetFields}
        />
        {project_photos.length > 0 && (
          <EditDeleteProjectPhotos
            key={project_photos.length}
            project_photos={project_photos}
            handleDeleteFromProjectPhotoList={
              this.handleDeleteFromProjectPhotoList
            }
          />
        )}
        Project Photos:{" "}
        <input
          type="text"
          name="project_photo"
          onChange={this.handleGetFields}
        />
        <button onClick={this.handleAddToPhotoList}>Add Photo</button>
        Need Help:{" "}
        <input
          type="checkbox"
          checked={help}
          onChange={this.handleToggleHelp}
        />
        <div>
          <button onClick={this.saveChanges}>Save Changes</button>
          <button onClick={toggleProjectEditDelete}>Cancel</button>
          <button onClick={this.deleteProject}>Delete Project</button>
        </div>
      </div>
    );
  }
}

export default EditDeleteUserProject;
