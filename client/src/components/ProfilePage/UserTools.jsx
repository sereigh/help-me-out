import React from "react";
import UserTool from "./UserTool";

const UserTools = (props) => {
  const { userTools } = props;
  return (
    <div>
      {userTools.map((tool, index) => {
        <UserTool tool={tool} />;
      })}
    </div>
  );
};

export default UserTools;
