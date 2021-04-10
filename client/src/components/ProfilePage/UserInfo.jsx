import React from "react";
import EditUserInfo from "./EditUserInfo";
import HandyIcon from "../HandyIcon";

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
      <div>
        <span>
          {name}
          <HandyIcon score={handy} />
        </span>
      </div>
      <div>{`Handy Score: ${handy}`}</div>
      <div>{`ZIP Code: ${zip}`}</div>
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
          toggleEditUserForm={toggleEditUserForm}
        />
      )}
    </div>
  );
};

export default UserInfo;
