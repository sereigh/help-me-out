import React from "react";
import UserProject from "./UserProject.jsx";

const UserProjects = (props) => {
  const { userProjects } = props;
  return (
    <div>
      {userProjects.map((index) => (
        <UserProject key={index} />
      ))}
    </div>
  );
};

export default UserProjects;
