import React from 'react';

function ToolCard({ tool }) {



  const { tool_name, tool_photos } = tool;
  const { name, photo, handy } = tool.tool_owner;
  return (
    <div className="tool-card">
      <div className="user-name-and-score-div">
        <div className="tool-user-avatar-div"><img className="tool-avatar-img" src={photo} alt={name} /></div>
        <div className="tool-user-name-div">{name}</div>
        <div className="tool-handy-div">
          <div className="tool-handy-emblem">EMBLEM</div>
          <div>{handy}</div>
        </div>
      </div>
      <div className="tool-name-image-and-message-div">
        <div className="tool-name-div">{tool_name}</div>
        <div className="tool-image-div"><img className="tool-card-tool-img" src={tool_photos[0]} alt={tool_name} /></div>
        <div className="message-button-div"><button type="button">message</button></div>
      </div>
    </div>
  );
}


export default ToolCard;