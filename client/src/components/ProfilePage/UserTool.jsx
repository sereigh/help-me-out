import React from "react";

const UserTool = ({ tool }) => {
  return (
    <div>
      <div>{tool.tool_name}</div>
      <div>
        {tool.tool_photos.map((tool_photo, index) => (
          <img key={index} src={tool_photo} />
        ))}
      </div>
    </div>
  );
};

export default UserTool;
