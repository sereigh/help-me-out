import React from "react";

const UserTool = ({ tool }) => {
  return (
    <div>
      <div>{tool.tool_name}</div>
      <img src={tool.tool_photos[0]} />
      <div>Need Help: {tool.help}</div>
    </div>
  );
};

export default UserTool;
