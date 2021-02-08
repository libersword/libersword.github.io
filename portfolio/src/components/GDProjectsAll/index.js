import React from "react";
import gdData from "../../data/graphicdesign.json";
import GDProjects from "../GDProjects";
import "./style.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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
            thumbnail={work.thumbnail}
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
          <h1 className="projectTitle">{project.projName}</h1>
          <div className="gallery">
            <img
              className="projectImg"
              src={`${process.env.PUBLIC_URL}/graphicDesignProjects/${project.img}.png`}
              alt="Full size alt"
            />
            <img
              className="projectImg"
              src={`${process.env.PUBLIC_URL}/graphicDesignProjects/${project.secondimg}.png`}
              alt="Full size alt"
            />
          </div>
          <p className="projectDescription">{project.description}</p>
          <p className="techUsed">{project.techUsed}</p>
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
        <Modal />
        <Modal
          className="projectsModal"
          open={open}
          onClose={this.onCloseModal}
          center
        >
          <div>{this.renderModal()}</div>
        </Modal>
      </div>
    );
  }
}

export default AllGD;
