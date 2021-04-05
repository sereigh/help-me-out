import React from 'react';
import PropTypes from 'prop-types';

class FilterButtons extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   selectedFilter: 'home',
    // };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(filter) {
    const { handleFilter } = this.props;

    handleFilter(filter);
    // this.setState({
    //   selectedFilter: filter,
    // });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.handleClick('home')}>Home</button>
        <button type="button" onClick={() => this.handleClick('giveHelp')}>Give Help</button>
        <button type="button" onClick={() => this.handleClick('getHelp')}>Get Help</button>
        <button type="button" onClick={() => this.handleClick('favorites')}>Favorites</button>
      </div>
    );
  }
}

FilterButtons.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterButtons;
