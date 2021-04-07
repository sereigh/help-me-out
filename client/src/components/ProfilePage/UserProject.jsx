import React from "react";
import axios from 'axios';

const UserProject = ({ project }) => {
  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString();
  };

  const toggleHelp = (bool) => {
    console.log('toggleHelp');
  }

  return (
    <div>
      <div>{project.project_name}</div>
      <div>{project.project_description}</div>
      <div>{formattedDate(project.createdAt)}</div>
      <div>
        Need Help: <input type="checkbox" onChange={toggleHelp}/>
      </div>
    </div>
  );
};

export default UserProject;
