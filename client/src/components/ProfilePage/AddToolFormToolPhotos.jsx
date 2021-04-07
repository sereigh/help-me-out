import React from "react";

const AddToolFormToolPhotos = (props) => {
  const { tool_photos, handleDeleteToolPhoto } = props;
  return tool_photos.map((tool_photo, index) => {
    return (
      <div key={index}>
        <img src={tool_photo} />
        <button onClick={handleDeleteToolPhoto} name={tool_photo}>
          X
        </button>
      </div>
    );
  });
};

export default AddToolFormToolPhotos;
