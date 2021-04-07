import React from "react";
import UserTool from "./UserTool";
import AddToolForm from "./AddToolForm.jsx";

const UserTools = (props) => {
  const { tools, toggleAddToolForm, showAddToolForm } = props;
  return (
    <div>
      {tools.map((tool, index) => (
        <UserTool key={index} tool={tool} />
      ))}
      {!showAddToolForm && (
        <button onClick={toggleAddToolForm}>Add Tool</button>
      )}
      {showAddToolForm && <AddToolForm />}
    </div>
  );
};

export default UserTools;
