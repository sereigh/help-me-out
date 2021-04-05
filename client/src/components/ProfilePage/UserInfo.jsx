import React from "react";

const UserInfo = (props) => {
  return (
    <div>
      <div>{props.userInfo.name}</div>
      <div>{props.userInfo.zip}</div>
      <div>{props.userInfo.handy}</div>
    </div>
  );
};

export default UserInfo;
