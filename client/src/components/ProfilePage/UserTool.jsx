import React from "react";
import EditDeleteUserTool from "./EditDeleteUserTool";

class UserTool extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showToolEditDelete: false };

    this.toggleToolEditDelete = this.toggleToolEditDelete.bind(this);
  }

  toggleToolEditDelete() {
    const { showToolEditDelete } = this.state;
    this.setState({ showToolEditDelete: !showToolEditDelete });
  }
  render() {
    const { tool, user_id } = this.props;
    const { showToolEditDelete } = this.state;
    return (
      <div>
        {!showToolEditDelete && (
          <div>
            <div>{tool.tool_name}</div>
            <img src={tool.tool_photos[0]} />
            {tool.help ? <div>Need Help!</div> : <div>No Help</div>}
            <button onClick={this.toggleToolEditDelete}>
              Edit/Delete Tool
            </button>
          </div>
        )}
        {showToolEditDelete && (
          <EditDeleteUserTool
            user_id={user_id}
            tool={tool}
            toggleToolEditDelete={this.toggleToolEditDelete}
          />
        )}
      </div>
    );
  }
}

export default UserTool;
