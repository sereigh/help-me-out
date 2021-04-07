import React from "react";
import AddToolFormToolPhotos from "./AddToolFormToolPhotos";

class AddToolForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tool_name: "",
      tool_photo: "",
      help: false,
      tool_photos: [],
    };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleAddToolToToolList = this.handleAddToolToToolList.bind(this);
    this.handleToggleHelp = this.handleToggleHelp.bind(this);
    this.handleAddToolPhoto = this.handleAddToolPhoto.bind(this);
    this.handleDeleteToolPhoto = this.handleDeleteToolPhoto.bind(this);
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleToggleHelp() {
    const { help } = this.state;
    this.setState({ help: !help });
  }

  handleAddToolPhoto() {
    const { tool_photo, tool_photos } = this.state;
    if (tool_photos.indexOf(tool_photos) === -1) {
      const revisedToolPhotos = tool_photos.concat(tool_photo);
      this.setState({ tool_photo: "", tool_photos: revisedToolPhotos });
    }
  }

  handleDeleteToolPhoto(e) {
    const { tool_photos } = this.state;
    let v = e.target.name;
    let updatedToolPhotos = [];
    tool_photos.forEach((photo) => {
      if (photo !== v) {
        updatedToolPhotos.push(photo);
      }
    });
    this.setState({ tool_photos: updatedToolPhotos });
  }

  handleAddToolToToolList() {
    const { tool_name, tool_photos, help } = this.state;
    let newUserToolObj = {
      tool_name: tool_name,
      tool_photos: tool_photos,
      help: help,
    };
    console.log(newUserToolObj);
  }
  render() {
    const { tool_photos } = this.state;
    return (
      <div>
        Tool Name:{" "}
        <input type="text" name="tool_name" onChange={this.handleGetFields} />
        {tool_photos.length && (
          <AddToolFormToolPhotos
            key={tool_photos.length}
            tool_photos={tool_photos}
            handleDeleteToolPhoto={this.handleDeleteToolPhoto}
          />
        )}
        Tool Photo:{" "}
        <input type="text" name="tool_photo" onChange={this.handleGetFields} />
        <button onClick={this.handleAddToolPhoto}>Add Tool Photo</button>
        Need Help: <input type="checkbox" onChange={this.handleToggleHelp} />
        <button onClick={this.handleAddToolToToolList}>Add Tool(s)</button>
      </div>
    );
  }
}

export default AddToolForm;
