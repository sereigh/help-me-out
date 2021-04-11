import React from "react";

const LPExperts = ({ experts, onClick }) => (
  <div className="tmExpertsContainer">
    {experts.map((exp) => (
      <div onClick={onClick} key={exp._id}>
        <h5>{exp.name}</h5>
        <img src={exp.photo} />
        {!!exp.projects.length && (
          <div>{`Shared ${exp.projects.length} project${
            exp.projects.length > 1 ? "s" : ""
          }`}</div>
        )}
        {!!exp.tools.length && (
          <div>{`Has ${exp.tools.length} tool${
            exp.tools.length !== 1 ? "s" : ""
          }`}</div>
        )}
        <div>{`Handy: ${exp.handy}`}</div>
        <br />
      </div>
    ))}
  </div>
);

export default LPExperts;
