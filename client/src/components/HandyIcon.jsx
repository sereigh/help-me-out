import React from 'react';
import PropTypes from 'prop-types';

const HandyIcon = ({ score }) => {
  let handyStatus = 'handy-none';
  if (score < 10) handyStatus = 'handy-bronze';
  else if (score < 25) handyStatus = 'handy-silver';
  else if (score < 50) handyStatus = 'handy-gold';
  else handyStatus = 'handy-platinum';
  return (
    <div className={handyStatus} />
  );
};

HandyIcon.defaultProps = {
  score: 0,
};

HandyIcon.propTypes = {
  score: PropTypes.number,
};

export default HandyIcon;
