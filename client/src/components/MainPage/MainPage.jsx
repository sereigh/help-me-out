import React from 'react';
import PropTypes from 'prop-types';

import sampleData from '../../../../server/database/data/sampleFeed.json';

import ProfileCard from './ProfileCard';
import FilterButtons from './FilterButtons';
// import Messages from './Messages';
import FeedContainer from './FeedContainer';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 'home',
      data: sampleData,
      displayedData: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    this.handleFilter('home');
  }

  handleFilter(filter) {
    const { user } = this.props;
    const { data } = this.state;

    if (filter === 'home') {
      let feed = [];

      for (let i = 0; i < data.length; i += 1) {
        feed = feed.concat(data[i].projects);
        feed = feed.concat(data[i].tools);
      }

      this.setState({
        currentFilter: 'home',
        displayedData: feed.sort((a,b) => (
          new Date(b.updatedAt) - new Date(a.updatedAt)
        )),
      });
    } else if (filter === 'giveHelp') {
      let feed = [];

      for (let i = 0; i < data.length; i += 1) {
        feed = feed.concat(data[i].projects);
      }

      this.setState({
        currentFilter: 'giveHelp',
        displayedData: feed,
      });
    } else if (filter === 'getHelp') {
      let feed = [];

      for (let i = 0; i < data.length; i += 1) {
        feed = feed.concat(data[i].tools);
      }

      this.setState({
        currentFilter: 'getHelp',
        displayedData: feed,
      });
    } else if (filter === 'favorites') {
      const feed = [];

      for (let i = 0; i < data.length; i += 1) {
        for (let j = 0; j < data[i].projects.length; j += 1) {
          const project = data[i].projects[j];
          for (let k = 0; k < user.favorites.length; k += 1) {
            if (user.favorites[k]._id === project._id) {
              feed.push(data[i].projects[j]);
              break;
            }
          }
        }
      }

      this.setState({
        currentFilter: 'favorites',
        displayedData: feed,
      });
    }
  }

  render() {
    const { user } = this.props;
    const { currentFilter, displayedData } = this.state;

    return (
      <div>
        <ProfileCard user={user} />
        <FilterButtons handleFilter={this.handleFilter} />
        {/* <Messages /> */}
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
    favorites: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default MainPage;
