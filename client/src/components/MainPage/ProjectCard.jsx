/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import MessageButton from '../MessageButton';
// import HandyIcon from '../HandyIcon';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: props.project.favorited,
    };

    this.handleVote = this.handleVote.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  handleVote(vote) {
    const { project } = this.props;
    if (vote === 'up') {
      axios.post(`/users/${project.project_owner._id}/handy/up`)
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    } else if (vote === 'down') {
      axios.post(`/users/${project.project_owner._id}/handy/down`)
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    } else if (vote === 'report') {
      axios.post(`/users/${project.project_owner._id}/report`)
        // eslint-disable-next-line no-console
        .catch((err) => console.log(err));
    }
  }

  toggleFavorite() {
    const { favorited } = this.state;

    // Insert axios route to toggle favorite status of this project in the database

    this.setState({
      favorited: !favorited,
    });
  }

  render() {
    const { user, project } = this.props;
    const { favorited } = this.state;
    const tools = project.needed_tools;

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
              {tools ? tools.map((tool) => <li key={tools.indexOf(tool)}>{tool}</li>) : []}
            </ul>
          </div>
        </div>
        <div className="project-footer">
          {/* <HandyIcon score={project.project_owner.handy} /> */}
          <img className="project-owner-img" src={project.project_owner.photo} alt="avatar" />
          <div>
            <span>{`${project.project_owner.name}: ${project.project_owner.handy}`}</span>
            <button type="button" onClick={() => this.handleVote('up')}>Upvote</button>
            <button type="button" onClick={() => this.handleVote('down')}>Downvote</button>
            <button type="button" onClick={() => this.handleVote('report')}>Report</button>
            <button type="button" onClick={this.toggleFavorite}>{favorited ? 'Favorite' : 'Not favorite'}</button>
            <MessageButton user={user} otherUser={project.project_owner} />
          </div>
        </div>
      </div>
    );
  }
}

ProjectCard.propTypes = {
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
  project: PropTypes.shape({
    project_name: PropTypes.string,
    project_description: PropTypes.string,
    project_owner: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      handy: PropTypes.number,
      photo: PropTypes.string,
    }),
    help: PropTypes.bool,
    favorited: PropTypes.bool,
    project_photos: PropTypes.arrayOf(PropTypes.string),
    needed_tools: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
