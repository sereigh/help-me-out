import React from "react";
import UserProject from "./UserProject.jsx";
import AddProjectForm from "./AddProjectForm.jsx";

const UserProjects = (props) => {
  const {
    userProjects,
    toggleAddItemForm,
    toggleHelp,
    addProfileItem,
    deleteProfileItem,
    putProfileItem,
    showAddProjectForm,
  } = props;
  return (
    <div>
      {userProjects.map((project, index) => (
        <UserProject
          key={index}
          project={project}
          toggleHelp={toggleHelp}
          addProfileItem={addProfileItem}
          deleteProfileItem={deleteProfileItem}
          putProfileItem={putProfileItem}
        />
      ))}

      {!showAddProjectForm && (
        <button
          onClick={() => {
            toggleAddItemForm("project");
          }}
        >
          Add Project
        </button>
      )}
      {showAddProjectForm && <AddProjectForm />}
    </div>
  );
};

export default UserProjects;
