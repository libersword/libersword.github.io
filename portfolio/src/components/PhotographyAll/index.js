import React from "react";
import photographyData from "../../data/photography.json";
import PhotographyProject from "../PhotographyProject";

const photographyWork = photographyData.data;

const AllPhotography = () => {
  return (
    <div className="photographyProjects">
      {photographyWork.map((work) => (
        <PhotographyProject
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

export default AllPhotography;
