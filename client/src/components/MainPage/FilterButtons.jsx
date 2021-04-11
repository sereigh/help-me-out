import React from "react";
import PropTypes from "prop-types";

const FilterButtons = ({ currentFilter, handleFilter }) => (
  <>
    <button
      className={`filter ${currentFilter === "home" ? "selected" : ""}`}
      type="button"
      onClick={() => handleFilter("home")}
    >
      Home
    </button>
    <button
      className={`filter ${currentFilter === "giveHelp" ? "selected" : ""}`}
      type="button"
      onClick={() => handleFilter("giveHelp")}
    >
      Give Help
    </button>
    <button
      className={`filter ${currentFilter === "getHelp" ? "selected" : ""}`}
      type="button"
      onClick={() => handleFilter("getHelp")}
    >
      Get Help
    </button>
    <button
      className={`filter ${currentFilter === "favorites" ? "selected" : ""}`}
      type="button"
      onClick={() => handleFilter("favorites")}
    >
      Favorites
    </button>
  </>
);

FilterButtons.propTypes = {
  currentFilter: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default FilterButtons;
