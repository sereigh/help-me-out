import React from "react";

class EditDeleteUserProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tool_name: "",
    };
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  saveChanges() {}

  render() {
    const { tool, toggleToolEditDelete } = this.props;
    return (
      <div>
        {" "}
        Tool Name: <input type="text" name="tool_name" value={tool.tool_name} />
        <img src={tool.tool_photos[0]} />
        <button onClick={this.saveChanges}>Save Changes</button>
        <button onClick={toggleToolEditDelete}>Cancel</button>
      </div>
    );
  }
}

export default EditDeleteUserProject;
