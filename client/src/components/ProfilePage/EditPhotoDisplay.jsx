import React from "react";
import hf from './helperFunctions';

const EditPhotoDisplay = ({ photos, deleteFunction}) => {
  return (
    <container>
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo} />
            <button
              onClick={(e) => {
                let target = hf.handleGetTargetName(e);
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
