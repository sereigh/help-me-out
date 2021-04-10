import React from "react";

const PhotoDisplay = ({ photos }) => {
  return (
    <div className="photo-container">
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo} />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoDisplay;
