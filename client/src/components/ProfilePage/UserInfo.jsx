import React from "react";
import EditUserInfo from "./EditUserInfo";

const UserInfo = (props) => {
  const {
    name,
    photo,
    zip,
    handy,
    password,
    email,
    showEditUserForm,
    toggleEditUserForm,
  } = props;
  return (
    <div className="user-info">
      <img src={photo} alt="profile_photo" />
      <div>{name}</div>
      <div>{zip}</div>
      <div>{handy}</div>
      <div>{email}</div>
      {!showEditUserForm && (
        <button onClick={toggleEditUserForm}>Edit Profile</button>
      )}
      {showEditUserForm && (
        <EditUserInfo
          name={name}
          zip={zip}
          photo={photo}
          email={email}
          password={password}
        />
      )}
    </div>
  );
};

export default UserInfo;
