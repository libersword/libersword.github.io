import React from "react";
import photographyData from "../../data/photography.json";
import PhotographyProject from "../PhotographyProject";
import 'react-responsive-modal/styles.css';
import {Modal} from "react-responsive-modal";
import './style.css'

class AllPhotography extends React.Component {
  state = {
    projects: [],
    open: false,
    selectedProject: null,
  };

  componentDidMount() {
    let photographyWork = photographyData.data;

    this.setState({
      projects: photographyWork,
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
          <PhotographyProject
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

export default AllPhotography;
