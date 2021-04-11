/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-underscore-dangle */
import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import ProjectCard from "./ProjectCard";
import ToolCard from "./ToolCard";

class FeedContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleVote = (vote, userID) => {
      if (vote === "up") {
        axios
          .put(`/users/${userID}/handy/up`)
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      } else if (vote === "down") {
        axios
          .put(`/users/${userID}/handy/down`)
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      } else if (vote === "report") {
        axios
          .put(`/users/${userID}/report`)
          // eslint-disable-next-line no-console
          .catch((err) => console.log(err));
      }
    };

    const { user, data } = this.props;

    return (
      <div className="feed">
        <div className="feed-container">
          {data.map((item) =>
            item.tool_name ? (
              <ToolCard
                key={item._id}
                user={user}
                tool={item}
                handleVote={handleVote}
              />
            ) : (
              <ProjectCard
                key={item._id}
                user={user}
                project={item}
                handleVote={handleVote}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

FeedContainer.propTypes = {
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
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        tool_name: PropTypes.string,
        tool_photos: PropTypes.arrayOf(PropTypes.string),
        tool_owner: PropTypes.shape({
          photo: PropTypes.string,
          handy: PropTypes.number,
          _id: PropTypes.string,
          name: PropTypes.string,
          zip: PropTypes.number,
        }),
        help: PropTypes.bool,
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        project_name: PropTypes.string.isRequired,
        project_description: PropTypes.string,
        projectowner: PropTypes.shape({
          photo: PropTypes.string,
          handy: PropTypes.number,
          _id: PropTypes.string,
          name: PropTypes.string,
          zip: PropTypes.number,
        }),
        help: PropTypes.bool.isRequired,
        project_photos: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  ]),
};

FeedContainer.defaultProps = {
  data: [{}],
};

export default FeedContainer;
