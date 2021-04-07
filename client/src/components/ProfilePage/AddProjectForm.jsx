import React from "react";
import ProjectToolList from "./ProjectToolList.jsx";

class AddProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project_name: "",
      project_description: "",
      needed_tool: "",
      help: false,
      needed_tools: []
    };
    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleToggleNeedHelp = this.handleToggleNeedHelp.bind(this);
    this.handleAddToolToProjectToolList = this.handleAddToolToProjectToolList.bind(
      this
    );
    this.handleDeleteFromProjectToolList = this.handleDeleteFromProjectToolList.bind(
      this
    );
    this.handleSubmitNewProject = this.handleSubmitNewProject.bind(this);
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleToggleNeedHelp() {
    const { help } = this.state;
    this.setState({ help: !help });
  }

  handleAddToolToProjectToolList() {
    const {needed_tool, needed_tools} = this.state;
    if (needed_tools.indexOf(needed_tool) === -1) {
      const revisedTools = needed_tools.concat(needed_tool);
      this.setState({
        needed_tools: revisedTools,
      });
    }
  }

  handleDeleteFromProjectToolList(e) {
    const {needed_tools } = this.state;
    let v = e.target.name;
    let updatedTools = [];
    needed_tools.forEach((tool) => {
      if (tool !== v) {
        updatedTools.push(tool);
      }
    });
    this.setState({ needed_tools: updatedTools });
  }

  handleSubmitNewProject(){
    const {project_name, project_description, help, needed_tools} = this.state;
    let requestObj = {project_name: project_name, project_description: project_description, help: help, tools_needed: needed_tools};
    console.log(requestObj);
  }

  render() {
    const { needed_tools } = this.state;
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
        {needed_tools.length > 0 && (
          <ProjectToolList
            needed_tools={needed_tools}
            handleDeleteFromProjectToolList={
              this.handleDeleteFromProjectToolList
            }
          />
        )}
        Needed Tools:
        <input
          type="text"
          name="needed_tool"
          onChange={this.handleGetFields}
        />
        <button onClick={this.handleAddToolToProjectToolList}>Add Tool</button>
        Project Pictures: <div>Project Pictures Here</div>
        Need Help?:{" "}
        <input type="checkbox" onChange={this.handleToggleNeedHelp} />
        <button onClick={this.handleSubmitNewProject}>Add Project</button>
      </div>
    );
  }
}

export default AddProjectForm;
