import React from "react";

const IllustrationProject = props => {
  return(
<div className="projectWrapper">
  <div className="projectHeader">
  <img src={`${process.env.PUBLIC_URL}/illustrationProjects/${props.thumbnail}.jpg`} alt='test desc'/>
  {/* <img src={`${process.env.PUBLIC_URL}/webProjects/${props.img}.jpg`} alt={props.description} /> */}
  </div>
<div className="projectBody">
  <h3 className="projectTitle">{props.projName}</h3>
  <p>{props.shortDescription}</p>
</div>
</div>
  )
}

export default IllustrationProject;

