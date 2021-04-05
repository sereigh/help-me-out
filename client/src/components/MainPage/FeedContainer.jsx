import React from 'react';
import PropTypes from 'prop-types';

const FeedContainer = ({ data }) => (
  <div>
    {data.map((item) => (
      <>
        <span>{item.project_name ? `${item.project_name}` : `${item.tool_name}`}</span>
        <br />
      </>
    ))}
  </div>
);

FeedContainer.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      tool_name: PropTypes.string,
      tool_photos: PropTypes.arrayOf(PropTypes.string),
      tool_owner: PropTypes.string,
      help: PropTypes.bool,
    })),
    PropTypes.arrayOf(PropTypes.shape({
      project_name: PropTypes.string.isRequired,
      project_description: PropTypes.string,
      project_owner: PropTypes.string.isRequired,
      help: PropTypes.bool.isRequired,
      project_photos: PropTypes.arrayOf(PropTypes.string),
    })),
  ]),
};

FeedContainer.defaultProps = {
  data: [{}],
};

export default FeedContainer;
