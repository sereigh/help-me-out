import React from "react";

class AddToolForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tool_name: "",
      tool_photo: "",
      help: false,
      toolsAdded: [],
    };

    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleAddToolToToolList = this.handleAddToolToToolList(this);
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAddToolToToolList() {
    const { toolsAdded } = this.props;
    if (toolsAdded.indexOf(tool_name) === -1) {
      const revisedTools = toolsAdded.concat(tool_name);
      this.setState({
        toolsAdded: revisedTools,
      });
    }
  }
  render() {
    return (
      <div>
        <input type="text" name="tool_name" onChange={this.handleGetFields} />
        <input type="text" name="tool_photo" onChange={this.handleGetFields} />
        <input type="checkbox" name="help" onChange={this.handleGetFields} />
        <button>Add Tool(s)</button>
      </div>
    );
  }
}

export default AddToolForm;
