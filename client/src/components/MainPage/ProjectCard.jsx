/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { VscReport } from 'react-icons/vsc';

import MessageButton from '../MessageButton';
import HandyIcon from '../HandyIcon';

class ProjectCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: props.project.favorited,
    };

    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  toggleFavorite() {
    const { favorited } = this.state;

    // Insert axios route to toggle favorite status of this project in the database

    this.setState({
      favorited: !favorited,
    });
  }

  render() {
    const { user, project, handleVote } = this.props;
    const { favorited } = this.state;
    const tools = project.needed_tools;

    const faveHeartStyle = favorited ? <BsHeartFill onClick={this.toggleFavorite} size={28} className="project-img-heart" /> : <BsHeart onClick={this.toggleFavorite} size={28} className="project-img-heart" />;

    const faveButton = favorited ? <div className="card-footer-button" onClick={this.toggleFavorite}><BsHeartFill /> Favorite </div> :
    <div className="card-footer-button" onClick={this.toggleFavorite}><BsHeart /> Not favorite</div>
    // const favorited = this.state.favorited ? <div className="project-footer-button">Unfavorite

    return (
      <div className="project-card">
        <div className="project-name-div">{project.project_name}</div>
        <div className="project-info">
          <div className="project-photo-div">
            {faveHeartStyle}
            <img src={project.project_photos[0]} alt="project" />
          </div>
          <div className="project-details">
            <span className="project-description">{`${project.project_description} just typing all of this out so it can fill more content incase someone typed a whole buncha stuff for content`}</span>
            <span>{project.help ? 'This project is in need of assistance' : 'This project does not need any assistance'}</span>
            <ul className="needed-tools">
              {tools ? tools.map((tool) => <li key={tools.indexOf(tool)}>{tool}</li>) : []}
            </ul>
          </div>
        </div>
        <div className="project-footer">
          <img className="project-owner-img" src={project.project_owner.photo} alt="avatar" />
          <div className="project-footer-name-div">
            <HandyIcon score={project.project_owner.handy} usedIn="-project-footer" />
            <div className="project-footer-name-div"><span>{`${project.project_owner.name}: ${project.project_owner.handy}`}</span></div>
          </div>
          <div className="card-footer-buttons-div">
            <div className="card-footer-button" onClick={() => handleVote('up', project.project_owner._id)}><FaRegThumbsUp />Upvote</div>
            <div className="card-footer-button" onClick={() => handleVote('down', project.project_owner._id)}><FaRegThumbsDown />Downvote</div>
            {faveButton}
            <MessageButton user={user} otherUser={project.project_owner} usedIn="card-footer-button" />
            <div className="card-footer-button" onClick={() => handleVote('report', project.project_owner._id)}><VscReport />Report</div>

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
    password: PropTypes.string,
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
