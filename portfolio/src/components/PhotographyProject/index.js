import React from "react";

const PhotographyProject = props => {
  return(
<div className="projectWrapper">
  <div className="projectHeader">
  <img src={`${process.env.PUBLIC_URL}/webProjects/${props.img}.jpg`} alt={props.description} />
  </div>
<div className="projectBody">
  <p>{props.projName}</p>
  <p>{props.shortDescription}</p>
  <a href={`${props.projectLink}`}>Read More</a>
</div>
</div>
  )
}

export default PhotographyProject;

