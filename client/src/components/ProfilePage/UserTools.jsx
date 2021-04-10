import React from "react";
import UserTool from "./UserTool";
import AddToolForm from "./AddToolForm.jsx";

const UserTools = (props) => {
  const {
    user_id,
    tools,
    toggleAddToolForm,
    showAddToolForm,
    handleGetTargetName,
    handleAddItem,
  } = props;
  return (
    <div id="feed-container">
      {tools.map((tool, index) => (
        <UserTool
          key={index}
          tool={tool}
          user_id={user_id}
          handleGetTargetName={handleGetTargetName}
          handleAddItem={handleAddItem}
        />
      ))}
      {!showAddToolForm && (
        <button onClick={toggleAddToolForm}>Add Tool</button>
      )}
      {showAddToolForm && (
        <AddToolForm
          user_id={user_id}
          toggleAddToolForm={toggleAddToolForm}
          handleGetTargetName={handleGetTargetName}
          handleAddItem={handleAddItem}
        />
      )}
    </div>
  );
};

export default UserTools;
