import React from 'react';
import { FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa';
import { VscReport } from 'react-icons/vsc';

import HandyIcon from '../HandyIcon';
import MessageButton from '../MessageButton';

function ToolCard({ tool, user, handleVote }) {



  const { tool_name, tool_photos } = tool;
  const { name, photo, handy } = tool.tool_owner;
  return (
    <div className="tool-card">
      <div className="user-name-and-score-div">
        <div className="tool-user-avatar-div"><img className="tool-avatar-img" src={photo} alt={name} /></div>
        <div className="tool-user-name-div">{name}</div>
        <div className="tool-handy-div">
          {/* <div className="tool-handy-emblem"> */}
            <HandyIcon score={handy} usedIn={'-tools'} />
          {/* </div> */}
          <div>{handy}</div>
        </div>
      </div>
      <div className="tool-name-image-and-message-div">
        <div className="tool-name-div">{tool_name}</div>
        <div className="tool-image-div"><img className="tool-card-tool-img" src={tool_photos[0]} alt={tool_name} /></div>
        <div className="card-footer-buttons-div">
          <div className="card-footer-button" onClick={() => handleVote('report', tool.tool_name._id)} ><FaRegThumbsUp />Upvote</div>
          <div className="card-footer-button" onClick={() => handleVote('report', tool.tool_name._id)} ><FaRegThumbsDown />Downvote</div>
          <MessageButton user={user} otherUser={tool.tool_owner} usedIn="card-footer-button" />
          <div className="card-footer-button" onClick={() => handleVote('report', tool.tool_name._id)} ><VscReport />Report</div>
        </div>
      </div>
    </div>
  );
}
// onClick={() => handleVote('report', project.project_owner._id)}


export default ToolCard;