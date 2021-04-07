import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  let projectTools = [];

  if (project.needed_tools) {
    projectTools = project.needed_tools.map((tool) => <li>{tool}</li>);
  }

  return (
    <div className="feed-card">
      <div className="project-name">{project.project_name}</div>
      <div className="project-info">
        <div className="project-photo">
          <img src={project.project_photos[0]} alt="project" />
        </div>
        <div className="project-details">
          <span>{`${project.project_description} just typing all of this out so it can fill more content incase someone typed a whole buncha stuff for content`}</span>
          <span>{project.help ? 'This project is in need of assistance' : 'This project does not need any assistance'}</span>
          <ul>
            {projectTools}
          </ul>
        </div>
      </div>
      <div className="project-footer">
        <img className="project-owner-img" src={project.project_owner.photo} alt="avatar" />
        <div>
          <span>{`${project.project_owner.name}: `}</span>
          <span>{project.project_owner.handy}</span>
        </div>
        <button type="button">message</button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    project_name: PropTypes.string,
    project_description: PropTypes.string,
    project_owner: PropTypes.shape({
      name: PropTypes.string,
      handy: PropTypes.number,
      photo: PropTypes.string,
    }),
    help: PropTypes.bool,
    project_photos: PropTypes.arrayOf(PropTypes.string),
    needed_tools: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
