import React from "react";

const IllustrationProject = props => {
  return(
<div className="projectWrapper">
  <div className="projectHeader">
  <img src={`libersword.github.io/illustrationProjects/${props.thumbnail}.png`} alt='test desc'/>
  </div>
<div className="projectBody">
  <h3 className="projectTitle">{props.projName}</h3>
  <p>{props.shortDescription}</p>
</div>
</div>
  )
}

export default IllustrationProject;

