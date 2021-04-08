import React from "react";
import UserTool from "./UserTool";
import AddToolForm from "./AddToolForm.jsx";

const UserTools = (props) => {
  const { user_id, tools, toggleAddToolForm, showAddToolForm } = props;
  return (
    <div>
      {tools.map((tool, index) => (
        <UserTool key={index} tool={tool} user_id={user_id} />
      ))}
      {!showAddToolForm && (
        <button onClick={toggleAddToolForm}>Add Tool</button>
      )}
      {showAddToolForm && <AddToolForm user_id={user_id} />}
    </div>
  );
};

export default UserTools;
