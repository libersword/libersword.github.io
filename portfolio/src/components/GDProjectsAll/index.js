import React from "react";
import gdData from "../../data/graphicdesign.json";
import GDProjects from "../GDProjects";
import './style.css'
import 'react-responsive-modal/styles.css';
import {Modal} from "react-responsive-modal";


class AllGD extends React.Component {
  state = {
    projects: [],
    open: false,
    selectedProject: null,
  };

  componentDidMount() {
  const gdWork = gdData.data;

  this.setState({
    projects: gdWork,
  });
}

onOpenModal = (i) => {
  this.setState({
    open: true,
    selectedProject: i,
  });
};

onCloseModal = () => {
  this.setState({ open: false });
};

renderProjects = () => {
  // console.log(this.state.projects)
  return this.state.projects.map((work, i) => {
    return (
      <div
        className="singleProject"
        key={work.id}
        onClick={() => this.onOpenModal(i)}
      >
        <GDProjects
          img={work.thumbnail}
          description={work.description}
          projName={work.projName}
          shortDescription={work.shortDescription}
        />
      </div>
    );
  });
};
renderModal = () => {
  if (this.state.selectedProject !== null) {
    const project = this.state.projects[this.state.selectedProject];
    console.log(project);
    return (
      <div>
        <h1 className = "projectTitle">{project.projName}</h1>
        <img className = "projectImg" src={project.img} 
        alt="Full size alt" onerror="this.style.display='none'"/>
        <img className = "projectImg" src={project.secondimg} alt="Full size alt" onerror="this.style.display='none'"/>
        <img className = "projectImg" src={project.thirdimg} alt="Full size alt" onerror="this.style.display='none'"/>
        <img className = "projectImg" src={project.fourthimg} alt="Full size alt" onerror="this.style.display='none'"/>
        <p className = "projectDescription">{project.description}</p>
        <p className = "techUsed">{project.techUsed}</p>
      </div>
    );
  }
};

render() {
  const { open } = this.state;
  return (
    <div>
      <div className="projectsWrapper">
      {/* <h2>Graphic Design Projects Coming Soon</h2> */}
        {this.renderProjects()}
      </div>
      <Modal/>
      <Modal className = "projectsModal" open={open} onClose={this.onCloseModal} center>
        <div>{this.renderModal()}</div>
      </Modal>
    </div>
  );
}
}

export default AllGD;
