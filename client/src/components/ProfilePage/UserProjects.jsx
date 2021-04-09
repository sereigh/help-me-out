import React from "react";
import UserProject from "./UserProject.jsx";
import AddProjectForm from "./AddProjectForm.jsx";

const UserProjects = (props) => {
  const {
    user_id,
    projects,
    toggleAddProjectForm,
    showAddProjectForm,
    handleGetTargetName,
    handleDeleteItem,
    handleAddItem,
  } = props;
  return (
    <div id="user-projects">
      {projects.map((project) => (
        <UserProject
          key={project._id}
          project={project}
          user_id={user_id}
          handleGetTargetName={handleGetTargetName}
          handleDeleteItem={handleDeleteItem}
          handleAddItem={handleAddItem}
        />
      ))}

      {!showAddProjectForm && (
        <button onClick={toggleAddProjectForm}>Add Project</button>
      )}
      {showAddProjectForm && (
        <AddProjectForm
          toggleAddProjectForm={toggleAddProjectForm}
          user_id={user_id}
          handleGetTargetName={handleGetTargetName}
          handleDeleteItem={handleDeleteItem}
          handleAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

export default UserProjects;
