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
    <div id="user-info">
      <img className="user-photo" src={photo} alt="profile_photo" />
      <div>{name}</div>
      <div>{`Current ZIP Code: ${zip}`}</div>
      <div>{`Handy Score: ${handy}`}</div>
      <div>{email}</div>
      {!showEditUserForm && (
        <button className="edit-user-info-button" onClick={toggleEditUserForm}>Edit Profile</button>
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
