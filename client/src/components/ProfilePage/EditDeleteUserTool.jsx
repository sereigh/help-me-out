import React from "react";
import EditDeleteToolPhotoList from "./EditDeleteToolPhotoList";

class EditDeleteUserTool extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tool_name: this.props.tool.tool_name,
      tool_photos: this.props.tool.tool_photos,
      tool_photo: "",
      help: this.props.tool.help,
    };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleAddToToolPhotoList = this.handleAddToToolPhotoList.bind(this);
    this.handleDeleteFromToolPhotoList = this.handleDeleteFromToolPhotoList.bind(
      this
    );
    this.handleToggleHelp = this.handleToggleHelp.bind(this);
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddToToolPhotoList() {
    const { tool_photo, tool_photos } = this.state;
    if (tool_photos.indexOf(tool_photo) === -1 && tool_photo.length > 3) {
      const revisedPhotos = tool_photos.concat(tool_photo);
      this.setState({ tool_photos: revisedPhotos });
      let inputField = document.querySelector('input[name="tool_photo"]');
      inputField.value = "";
    }
  }

  handleDeleteFromToolPhotoList(e) {
    const { tool_photos } = this.state;
    let v = e.target.name;
    let updatedPhotos = [];
    tool_photos.forEach((photo) => {
      if (photo !== v) {
        updatedPhotos.push(photo);
      }
    });
    this.setState({ tool_photos: updatedPhotos });
  }

  handleToggleHelp() {
    const { help } = this.state;
    this.setState({ help: !help });
  }
  saveChanges() {
    const { tool_name, tool_photos, help } = this.state;
    let editToolObj = {
      tool_name: tool_name,
      tool_photos: tool_photos,
      help: help,
    };
    console.log(editToolObj);
  }

  render() {
    const { tool, toggleToolEditDelete } = this.props;
    const { tool_photos, tool_name, help } = this.state;
    return (
      <div>
        Tool Name:{" "}
        <input
          type="text"
          name="tool_name"
          value={tool_name}
          onChange={this.handleGetFields}
        />
        {tool_photos.length > 0 && (
          <EditDeleteToolPhotoList
            tool_photos={tool_photos}
            handleDeleteFromToolPhotoList={this.handleDeleteFromToolPhotoList}
          />
        )}
        <input type="text" name="tool_photo" onChange={this.handleGetFields} />
        <button onClick={this.handleAddToToolPhotoList}>Add Photo</button>
        Need Help:{" "}
        <input
          type="checkbox"
          checked={help}
          onChange={this.handleToggleHelp}
        />
        <button onClick={this.saveChanges}>Save Changes</button>
        <button onClick={toggleToolEditDelete}>Cancel</button>
      </div>
    );
  }
}

export default EditDeleteUserTool;
