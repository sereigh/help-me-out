import React from "react";

const AddProjectFormPhotos = (props) => {
  const { project_photos, handleDeleteFromProjectPhotoList } = props;
  return (
    <ul>
      {project_photos.map((photo, index) => {
        return (
          <li key={index}>
            <img src={photo} />
            <button onClick={handleDeleteFromProjectPhotoList} name={photo}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default AddProjectFormPhotos;
