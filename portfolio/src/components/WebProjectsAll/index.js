import React from "react";
import webData from "../../data/webdesign.json";
import WebProject from "../WebProjects";
import './style.css'
import 'react-responsive-modal/styles.css';
import {Modal} from "react-responsive-modal";

class AllWeb extends React.Component {
  state = {
    projects: [],
    open: false,
    selectedProject: null,
  };

  componentDidMount() {
    let webWork = webData.data;

    this.setState({
      projects: webWork,
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
          <WebProject
            thumbnail={work.thumbnail}
            img={work.img}
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
        <div className="modalInternal">
          <h1 className = "projectTitle">{project.projName}</h1>
          <img className ="projectImg" src={`${process.env.PUBLIC_URL}/webProjects/${project.img}.png`} alt='test desc'/>
          <p className = "projectDescription">{project.description}</p>
          <div class="projectLinks">
          <a href={project.projectLink} target ="_blank" rel="noopener noreferrer" className = "projectLink">Deployed Project</a>
          <a href={project.githubRepo} target ="_blank" rel="noopener noreferrer" className = "githubLink">Github Repo</a>
          </div>
        </div>
      );
    }
  };

  render() {
    const { open } = this.state;
    return (
      <div>
          {/* <h2 className ="projectTitle">Web</h2> */}
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

export default AllWeb;
