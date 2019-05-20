//script to control scroll arrow
import React from 'react'
import './Scroller.css'
import { Link, animateScroll as scroll } from "react-scroll";

class Scroller extends React.Component {
  constructor(props){
    super(props);
    this.nextSection = this.props.nextSection;
    this.handleClick=  this.handleClick.bind(this);
    this.color = this.props.color;
  }
  handleClick=event=>{
    event.preventDefault();
  }
  render() {
    return (
      <div id="scrollSection" className="scroll">
      <Link activeClass=""
      to={this.nextSection}
      spy={true}
      smooth={true}
      offset={0}
      duration={500}>
  <a href="aboutPage" onClick={this.handleClick} style={{color:"white"}}id="scrollButton">
  <span></span><span></span><span></span></a>
  </Link>
</div>
  );
  }
}

export default Scroller;
