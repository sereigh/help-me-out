import React from "react";

const EditPhotoDisplay = ({ photos, deleteFunction, handleGetTargetName }) => {
  return (
    <container>
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo} />
            <button
              onClick={(e) => {
                let target = handleGetTargetName(e);
                deleteFunction(target);
              }}
              name={photo}
            >
              X
            </button>
          </div>
        );
      })}
    </container>
  );
};

export default EditPhotoDisplay;
