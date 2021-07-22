import React from "react";
import PropTypes from "prop-types";
import HandyIcon from "../HandyIcon";

const ProfileCard = ({ user }) => (
  <div className="profile-card">
    <img className="avatar" src={user.photo} alt="avatar" />
    <div>
      <span>
        {user.name}
        <HandyIcon score={user.handy} />
      </span>
    </div>
    <div className="handy-score">{`Handy Score: ${user.handy}`}</div>
    <div>{`ZIP Code: ${user.zip}`}</div>
  </div>
);

ProfileCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    password: PropTypes.string,
    photo: PropTypes.string,
    handy: PropTypes.number.isRequired,
    report: PropTypes.number.isRequired,
    tools: PropTypes.arrayOf(
      PropTypes.shape({
        tool_name: PropTypes.string,
        tool_photos: PropTypes.arrayOf(PropTypes.string),
        tool_owner: PropTypes.string,
        help: PropTypes.bool,
      })
    ),
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        project_name: PropTypes.string.isRequired,
        project_description: PropTypes.string,
        project_owner: PropTypes.string.isRequired,
        help: PropTypes.bool.isRequired,
        project_photos: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    favorites: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
};

export default ProfileCard;
