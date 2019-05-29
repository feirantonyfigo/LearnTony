import React from 'react'
import './ProjectModal.css'
import Popup from 'reactjs-popup'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel"
class ProjectModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.projectDetails = this.props.projectDetails;
    //console.log(this.projectDetails);
    this.toggle = this.toggle.bind(this);
    this.closeAndClear=this.closeAndClear.bind(this)
    this.createViewSite = this.createViewSite.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.props.updateModal(!this.state.modal);
  }
closeAndClear(){
  this.setState(prevState => ({
    modal: !prevState.modal
  }));
  this.props.updateHover();
  this.props.updateModal(!this.state.modal);
}
createViewSite(){
if(this.projectDetails.site){
  return (<Button color="primary" onClick={this.toggle}  href={this.projectDetails.site}>View Site</Button>);
}
}
  render() {
    return (
      <div>
      <Button color="info" id="learn-more-button"  onClick={this.toggle}>Learn More</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle} id="ModalHeader">{this.projectDetails.name}</ModalHeader>
          <ModalBody>
          <div id="projectDetailImage">
          <ProjectCarousel items={this.projectDetails.carousel}/>
          </div>
          <div id="projectDetailDescription"></div>
          <p>
          {this.projectDetails.detailDescription}
          </p>
          </ModalBody>
          <ModalFooter>
          {this.createViewSite()}
            <Button color="secondary" onClick={this.closeAndClear}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProjectModal;
