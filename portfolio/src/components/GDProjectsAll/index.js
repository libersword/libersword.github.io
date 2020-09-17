import React from "react";
import gdData from "../../data/graphicdesign.json";
import GDProjects from "../GDProjects";

const gdWork = gdData.data;

const AllGD = () => {
  return (
    <div className="gdProjects">
      {gdWork.map((work) => (
        <GDProjects
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

export default AllGD;
