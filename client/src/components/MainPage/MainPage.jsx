/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';

import sampleData from '../../../../server/database/data/sampleFeed.json';

import ProfileCard from './ProfileCard';
import FilterButtons from './FilterButtons';
import FeedContainer from './FeedContainer';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 'home',
      home: [],
      projects: [],
      tools: [],
      favorites: [],
    };

    this.getRelevantInfo = this.getRelevantInfo.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.getRelevantInfo();
    // setInterval(this.getRelevantInfo, 20000);
  }

  handleFilter(filter) {
    this.setState({
      currentFilter: filter,
    });
  }

  getRelevantInfo() {
    this.filterData(sampleData);
    // const { user } = this.props;

    // axios.get(`/users/${user._id}/relevant`)
    //   .then((results) => this.filterData(results.data))
    //   // eslint-disable-next-line no-console
    //   .catch((err) => console.log(err));
  }

  filterData(data) {
    const { user } = this.props;

    let home = [];
    const tools = data.getHelp;
    const projects = [];
    const favorites = [];

    for (let i = 0; i < data.giveHelp.length; i += 1) {
      let favorited = false;
      if (user.favorites && user.favorites[data.giveHelp[i]._id]) {
        favorited = true;
        const project = Object.create(data.giveHelp[i]);
        project.favorited = true;
        home.push(project);
        favorites.push(project);
        projects.push(project);
      }
      if (!favorited) {
        home.push(data.giveHelp[i]);
        projects.push(data.giveHelp[i]);
      }
    }

    home = home.concat(data.getHelp);

    this.setState({
      home: home.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
      projects: projects.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
      tools: tools.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
      favorites: favorites.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
    });
  }

  render() {
    const { user } = this.props;

    const {
      currentFilter,
      home,
      projects,
      tools,
      favorites,
    } = this.state;

    let displayedData = [];

    if (currentFilter === 'home') {
      displayedData = home;
    } else if (currentFilter === 'giveHelp') {
      displayedData = projects;
    } else if (currentFilter === 'getHelp') {
      displayedData = tools;
    } else if (currentFilter === 'favorites') {
      displayedData = favorites;
    }

    return (
      <div className="main-page">
        <div className="main-page-left">
          <ProfileCard user={user} />
          <FilterButtons handleFilter={this.handleFilter} />
          <div className="chatbox-container" id="chatbox-mount" />
        </div>
        <FeedContainer user={user} currentFilter={currentFilter} data={displayedData} />
      </div>
    );
  }
}

MainPage.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
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
};

export default MainPage;
