import React from "react";
import UserProject from "./UserProject.jsx";

const UserProjects = (props) => {
  const { userProjects } = props;
  return (
    <div>
      {userProjects.map((project, index) => (
        <UserProject key={index} project={project} />
      ))}
    </div>
  );
};

export default UserProjects;
