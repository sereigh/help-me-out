import React from "react";

const ProjectToolList = (props) => {
  const { toolsAdded, handleDeleteFromProjectToolList } = props;
  return (
    <ul>
      Tools Needed:
      {toolsAdded.map((tool, index) => {
        return (
          <li key={index}>
            {tool}
            <button name={tool} onClick={handleDeleteFromProjectToolList}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectToolList;
