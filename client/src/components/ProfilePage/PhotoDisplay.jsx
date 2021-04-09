import React from "react";

const PhotoDisplay = ({ photos }) => {
  return (
    <container className="photo-container">
      {photos.map((photo, index) => {
        return (
          <div key={index}>
            <img src={photo} />
          </div>
        );
      })}
    </container>
  );
};

export default PhotoDisplay;
