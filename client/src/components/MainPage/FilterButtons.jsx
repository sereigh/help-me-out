import React from 'react';
import PropTypes from 'prop-types';

const FilterButtons = ({ handleFilter }) => (
  <div className="filter-buttons">
    <button type="button" onClick={() => handleFilter('home')}>Home</button>
    <button type="button" onClick={() => handleFilter('giveHelp')}>Give Help</button>
    <button type="button" onClick={() => handleFilter('getHelp')}>Get Help</button>
    <button type="button" onClick={() => handleFilter('favorites')}>Favorites</button>
  </div>
);

FilterButtons.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default FilterButtons;
