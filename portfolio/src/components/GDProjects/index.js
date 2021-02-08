import React from "react";

const GDProject = props => {
  return(
<div className="projectWrapper">
  <div className="projectHeader">
  <img src={`libersword.github.io/graphicDesignProjects/${props.thumbnail}.png`} alt='test desc'/>
  </div>
<div className="projectBody">
  <h3 className="projectTitle">{props.projName}</h3>
  <p>{props.shortDescription}</p>
  </div>
</div>
  )
}

export default GDProject;

