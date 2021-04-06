import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({ user }) => (
  <div>
    <img src={user.photo} alt="avatar" />
    <div>{user.name}</div>
    <div>{`Current ZIP Code: ${user.zip}`}</div>
  </div>
);

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    password: PropTypes.string.isRequired,
    photo: PropTypes.string,
    handy: PropTypes.number.isRequired,
    report: PropTypes.number.isRequired,
    tools: PropTypes.arrayOf(PropTypes.shape({
      tool_name: PropTypes.string,
      tool_photos: PropTypes.arrayOf(PropTypes.string),
      tool_owner: PropTypes.string,
      help: PropTypes.bool,
    })),
    projects: PropTypes.arrayOf(PropTypes.shape({
      project_name: PropTypes.string.isRequired,
      project_description: PropTypes.string,
      project_owner: PropTypes.string.isRequired,
      help: PropTypes.bool.isRequired,
      project_photos: PropTypes.arrayOf(PropTypes.string),
    })),
    favorites: PropTypes.arrayOf(PropTypes.shape({
      favorite_name: PropTypes.string,
      favorite_description: PropTypes.string,
      favorite_owner: PropTypes.string,
      favorite_handy: PropTypes.number,
      favorite_photo: PropTypes.string,
      favorite_photos: PropTypes.arrayOf(PropTypes.string),
    })),
  }).isRequired,
};

export default ProfileCard;
