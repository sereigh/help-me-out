import React from "react";
import PropTypes from "prop-types";
import { GiGearHammer } from "react-icons/gi";

const HandyIcon = ({ score, usedIn }) => {
  usedIn = usedIn || "";
  let handyStatus = "handy-none" + usedIn;
  if (score < 10) handyStatus = "handy-bronze" + usedIn;
  else if (score < 25) handyStatus = "handy-silver" + usedIn;
  else if (score < 50) handyStatus = "handy-gold" + usedIn;
  else handyStatus = "handy-platinum" + usedIn;
  return (
    <span className={handyStatus}>
      <GiGearHammer />
    </span>
  );
};

HandyIcon.defaultProps = {
  score: 0,
};

HandyIcon.propTypes = {
  score: PropTypes.number,
};

export default HandyIcon;
