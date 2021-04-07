import React from "react";
import UserProject from "./UserProject.jsx";
import AddProjectForm from "./AddProjectForm.jsx";

const UserProjects = (props) => {
  const { projects, toggleAddProjectForm, showAddProjectForm } = props;
  return (
    <div>
      {projects.map((project) => (
        <UserProject key={project._id} project={project} />
      ))}

      {!showAddProjectForm && (
        <button onClick={toggleAddProjectForm}>Add Project</button>
      )}
      {showAddProjectForm && <AddProjectForm toggleAddProjectForm={toggleAddProjectForm}/>}
    </div>
  );
};

export default UserProjects;
