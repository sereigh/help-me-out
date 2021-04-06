import React from "react";

const UserProject = ({ project }) => {
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <div>
      <div>{project.project_name}</div>
      <div>{project.project_description}</div>
      <div>{formattedDate(project.createdAt)}</div>
      <div>
        Need Help <input type="checkbox" />
      </div>
    </div>
  );
};

export default UserProject;
