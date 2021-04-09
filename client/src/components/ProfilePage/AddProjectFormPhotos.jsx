import React from "react";

const AddProjectFormPhotos = (props) => {
  const {
    project_photos,
    handleDeleteFromProjectPhotos,
    handleGetTargetName,
  } = props;
  return (
    <ul>
      {project_photos.map((photo, index) => {
        return (
          <li key={index}>
            <img src={photo} />
            <button
              onClick={(e) => {
                let target = handleGetTargetName(e);
                handleDeleteFromProjectPhotos(target);
              }}
              name={photo}
            >
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default AddProjectFormPhotos;
