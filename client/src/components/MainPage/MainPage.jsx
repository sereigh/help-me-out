/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';

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

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.filterData(sampleData);
  }

  handleFilter(filter) {
    this.setState({
      currentFilter: filter,
    });
  }

  filterData(data) {
    const { user } = this.props;

    const home = [];
    const projects = [];
    const tools = [];
    const favorites = [];

    for (let i = 0; i < data.length; i += 1) {
      for (let j = 0; j < data[i].projects.length; j += 1) {
        const project = Object.create(data[i].projects[j]);

        project.project_owner = {
          name: data[i].name,
          handy: data[i].handy,
          photo: data[i].photo,
        };

        home.push(project);
        if (project.help) {
          projects.push(project);
        }

        for (let k = 0; k < user.favorites.length; k += 1) {
          if (user.favorites[k]._id === project._id) {
            favorites.push(project);
            break;
          }
        }
      }
      for (let j = 0; j < data[i].tools.length; j += 1) {
        const tool = Object.create(data[i].tools[j]);

        tool.tool_owner = {
          name: data[i].name,
          handy: data[i].handy,
          photo: data[i].photo,
        };

        home.push(tool);
        tools.push(tool);
      }
    }

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
        </div>
        <FeedContainer currentFilter={currentFilter} data={displayedData} />
      </div>
    );
  }
}

MainPage.propTypes = {
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
      _id: PropTypes.string,
      favorite_name: PropTypes.string,
      favorite_description: PropTypes.string,
      favorite_owner: PropTypes.string,
      favorite_handy: PropTypes.number,
      favorite_photo: PropTypes.string,
      favorite_photos: PropTypes.arrayOf(PropTypes.string),
    })),
  }).isRequired,
};

export default MainPage;
