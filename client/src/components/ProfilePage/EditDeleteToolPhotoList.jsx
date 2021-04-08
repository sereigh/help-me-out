import React from "react";

const EditDeleteToolPhotoList = (props) => {
  const { tool_photos, handleDeleteFromToolPhotoList } = props;
  return (
    <ul>
      {tool_photos.map((photo, index) => {
        return (
          <li key={index}>
            <img src={photo} />
            <button name={photo} onClick={handleDeleteFromToolPhotoList}>
              X
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default EditDeleteToolPhotoList;
