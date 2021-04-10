import React from "react";

const ProjectToolList = (props) => {
  const { needed_tools, handleDeleteFromProjectToolList } = props;
  return (
    <ul>
      {needed_tools.map((tool, index) => {
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
