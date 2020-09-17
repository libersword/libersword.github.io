import React from "react";
import illustrationData from "../../data/illustration.json";
import IllustrationProject from "../IllustrationProject";

const illustrationWork = illustrationData.data;

const AllIllustration = () => {
  return (
    <div className="illustrationProjects">
      {illustrationWork.map((work) => (
        <IllustrationProject
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

export default AllIllustration;
