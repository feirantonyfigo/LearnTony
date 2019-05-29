import React from 'react';
import './PortfolioItem.css';
import { Button } from 'reactstrap';
import ProjectModal from '../../components/ProjectModal/ProjectModal'
import Slide from 'react-reveal/Slide';
class PortfolioItem extends React.Component {
  constructor(props){
    super(props);
    this.Portofolio = this.props.value;
    this.handleMouseHoverIn = this.handleMouseHoverIn.bind(this);
    this.handleMouseHoverOut= this.handleMouseHoverOut.bind(this);
    this.updateModal = this.updateModal.bind(this);
    this.state = {isHovering: false, modalOut:false};
    this.updateHover = this.updateHover.bind(this);
  }
  handleMouseHoverIn() {
  this.setState({isHovering:true});
  //console.log(this.state);
  }
  handleMouseHoverOut() {
    if(!this.state.modalOut){
          this.setState({isHovering:false});
    }

  //console.log(this.state);
  }
  generate_image(srcPath){
return (<img src={srcPath} alt='PortfolioItem'/>);
  }


  generate_mask(){
    if (this.state.isHovering){
      //console.log(this.state.isHovering);
      return this.create_mask_block();
    }
  }

updateModal(modalStatus){
  this.setState({modalOut: modalStatus});
}

updateHover(){
  this.setState({isHovering:false});
}

  create_mask_block(){
    //<Button color="info" id="learn-more-button">Learn More</Button>{' '}
    return (
      <div id="PortfolioItem-mask">
      <div id="text-mask">
      <Slide top>
      <h4 id="project-name">{this.Portofolio.name}</h4>
      <p id="project-description">{this.Portofolio.description}</p>
      </Slide>
      <Slide bottom>
       <ProjectModal  projectDetails={this.Portofolio}  updateHover={this.updateHover} updateModal={this.updateModal}/>
       </Slide>
      </div>
      <div id="outer-mask">
      <img src={require("../../assets/image/mask.png")}/>
      </div>
      </div>
    )
  }
  render() {
    return (
      <div id="PortfolioItem" onMouseEnter={this.handleMouseHoverIn} onMouseLeave={this.handleMouseHoverOut}>
      <div id="PortfolioItem-base">{this.generate_image(this.Portofolio.preview)}
      {this.generate_mask()}
      </div>
      </div>
  );
  }
}

export default PortfolioItem;
