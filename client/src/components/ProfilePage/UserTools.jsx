import React from "react";
import UserTool from "./UserTool";
import AddToolForm from "./AddToolForm.jsx";

const UserTools = (props) => {
  const {
    userTools,
    addProfileItem,
    deleteProfileItem,
    putProfileItem,
    toggleAddItemForm,
    showAddToolForm,
  } = props;
  return (
    <div>
      {userTools.map((tool, index) => (
        <UserTool key={index} tool={tool} />
      ))}
      {!showAddToolForm && (
        <button onClick={() => toggleAddItemForm("tool")}>Add Tool</button>
      )}
      {showAddToolForm && <AddToolForm />}
    </div>
  );
};

export default UserTools;
