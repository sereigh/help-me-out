import React from "react";

const ProjectPhotos = (props) => {
  const { project_photos } = props;
  return (
    <ul>
      {project_photos.map((photo, index) => {
        return (
          <li key={index}>
            <img src={photo} />
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectPhotos;
