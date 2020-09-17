import React from "react";
import webData from "../../data/webdesign.json";
import WebProject from "../WebProjects";

const webWork = webData.data;

const AllWeb = () => {
  return (
    <div className="webProjects">
      {webWork.map((work) => (
        <WebProject
          key={work.id}
          img={work.img}
          description={work.description}
          projName={work.projName}
          shortDescription={work.shortDescription}
          projectLink={work.projectLink}
        />
      ))}
    </div>
  );
};

export default AllWeb;
