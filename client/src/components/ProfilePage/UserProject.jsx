import React from "react";

const UserProject = ({ project }) => {
  return (
    <div>
      <div>{project.project_name}</div>
      <div>{project.project_description}</div>
      <div>{project.createdAt}</div>
      <button>Ask for Help?</button>
    </div>
  );
};

export default UserProject;
