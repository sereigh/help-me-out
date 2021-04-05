import React from 'react';

import data from '../../../../server/database/data/sampleFeed.json';

// import ProfileCard from './ProfileCard';
// import FilterButtons from './FilterButtons';
// import Messages from './Messages';
import FeedContainer from './FeedContainer';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
    };
  }

  render() {
    const { user } = this.props;
    const { data } = this.state;

    return (
      <div>
        <ProfileCard user={user} />
        <FilterButtons />
        <Messages />
        <FeedContainer data={data} />
      </div>
    );
  }
}

export default MainPage;
