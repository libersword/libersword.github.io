import React from "react";
import illustrationData from "../../data/illustration.json";
import IllustrationProject from "../IllustrationProject";
import './style.css'
import 'react-responsive-modal/styles.css';
import {Modal} from "react-responsive-modal";

class AllIllustration extends React.Component {
  state = {
    projects: [],
    open: false,
    selectedProject: null,
  };

  componentDidMount() {
  let illustrationWork = illustrationData.data;
  this.setState({
    projects: illustrationWork,
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
        <IllustrationProject
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
        <img className = "projectImg" src={project.img} alt="test alt"/>
        <p className = "projectDescription">{project.description}</p>
      </div>
    );
  }
};

render() {
  const { open } = this.state;
  return (
    <div>

      <div className="projectsWrapper">
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

export default AllIllustration;
