import React from "react";
import ProjectToolList from "./ProjectToolList.jsx";

class AddProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: "",
      project_description: "",
      needed_tools: "",
      needHelp: false,
      toolsAdded: [],
    };
    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleToggleNeedHelp = this.handleToggleNeedHelp.bind(this);
    this.handleAddToProjectToolList = this.handleAddToolToProjectToolList.bind(
      this
    );
    this.handleDeleteFromProjectToolList = this.handleDeleteFromProjectToolList.bind(
      this
    );
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleToggleNeedHelp() {
    const { needHelp } = this.state;
    this.setState({ needHelp: !needHelp });
  }

  handleAddToolToProjectToolList() {
    const { needed_tools, toolsAdded } = this.state;
    if (toolsAdded.indexOf(needed_tools) === -1) {
      const revisedTools = toolsAdded.concat(needed_tools);
      this.setState({
        toolsAdded: revisedTools,
      });
    }
  }
  handleDeleteFromProjectToolList(e) {
    const { toolsAdded } = this.state;
    let v = e.target.name;
    let updatedTools = [];
    toolsAdded.forEach((tool) => {
      if (tool !== v) {
        updatedTools.push(tool);
      }
    });
    this.setState({ toolsAdded: updatedTools });
  }
  render() {
    const { toolsAdded } = this.state;
    return (
      <div>
        Project Name:{" "}
        <input
          type="text"
          name="project_name"
          onChange={this.handleGetFields}
        />
        Project Description:{" "}
        <input
          type="text"
          name="project_description"
          onChange={this.handleGetFields}
        />
        {toolsAdded.length && (
          <ProjectToolList
            key={toolsAdded.length}
            toolsAdded={toolsAdded}
            handleAddToProjectToolList={this.handleAddToolToProjectToolList}
            handleDeleteFromProjectToolList={
              this.handleDeleteFromProjectToolList
            }
          />
        )}
        <input
          type="text"
          name="needed_tools"
          onChange={this.handleGetFields}
        />
        <button onClick={this.handleAddToolToProjectToolList}>Add Tool</button>
        Need Help?:{" "}
        <input type="checkbox" onChange={this.handleToggleNeedHelp} />
      </div>
    );
  }
}

export default AddProjectForm;
