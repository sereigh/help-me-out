/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from './ProjectCard';
import ToolCard from './ToolCard';

const FeedContainer = ({ user, currentFilter, data }) => {
  let title = '';

  if (currentFilter === 'home') {
    title = 'Home';
  } else if (currentFilter === 'giveHelp') {
    title = 'Give Help';
  } else if (currentFilter === 'getHelp') {
    title = 'Get Help';
  } else if (currentFilter === 'favorites') {
    title = 'Favorites';
  }

  return (
    <div>
      <div>{title}</div>
      {data.map((item) => (
        <div key={item._id}>
          {item.project_name ? <ProjectCard user={user} project={item} /> : <ToolCard tool={item} />}
        </div>
      ))}
    </div>
  );
};

FeedContainer.propTypes = {
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
    favorites: PropTypes.objectOf(PropTypes.bool),
  }).isRequired,
  currentFilter: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
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
    })),
    PropTypes.arrayOf(PropTypes.shape({
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
    })),
  ]),
};

FeedContainer.defaultProps = {
  data: [{}],
};

export default FeedContainer;
