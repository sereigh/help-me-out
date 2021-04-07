import React from 'react';

function ProjectCard(props) {


  // const { name, photo, handy, projects, tools } = props.info;

  const project = props.info;

  /*placeholders*/
  const name = 'placeholder';
  const handy = 1337;

  let projectTools = [];

  if (project.needed_tools) {
    console.log(true)
    projectTools = project.needed_tools.map((tool) => <li>{tool}</li>);
  }

  /*placeholder used for the project owner img since img does not exist in props*/
  const projectOwnerImg = 'https://media.zenfs.com/en/Benzinga/fec49aa7467e3735885162a33b8e83d9';


  /*placeholder used for project photo since the random one is weird*/
  const project_photos = 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib'
  return (

    <div className="feed-card" >
      <div className="project-name">{project.project_name}</div>
      <div className="project-info">
        <div className="project-photo">
          <img src={project_photos}/>
        </div>
        <div className="project-details">
          <span>{project.project_description + 'just typing all of this out so it can fill more content incase someone typed a whole buncha stuff for content'}</span>
          <span>{project.help ? 'This project is in need of assistance' : 'This project does not need any assistance'}</span>
          <ul>
            {projectTools}
          </ul>
        </div>
      </div>
      <div className="project-footer">
        <img className="project-owner-img"src={projectOwnerImg}/>
        <div><span>{name}:</span> <span>{handy}</span></div>
        <button>message</button>
      </div>
    </div>
  )
}

export default ProjectCard;