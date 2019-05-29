import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'
import './DynamicScroller.css';
import {Container, Row,Col} from 'reactstrap';
import Slide from 'react-reveal/Slide';

class DynamicScroller extends React.Component {
  constructor(props){
    super(props);
    this.state = { width:window.innerWidth, height: window.innerHeight, iconsize: "" };
    this.updateWindowDimensions();
    this.getScrollerControl=this.props.cb;
  }
  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
  if (this.state.width <   750) {
    this.setState({ iconsize: "3x" });
  }else{
    this.setState({ iconsize: "4x" });
  }
  };

  createIcon(){
    var scrollerControl = this.getScrollerControl();
    var color = scrollerControl.color;
    var nextPage = scrollerControl.nextPage;
    //console.log("color is",color);
    return (<Link
    activeClass=""
    to={nextPage}
    spy={true}
    smooth={true}
    offset={0}
    duration={900}
    ><FontAwesomeIcon icon={faChevronDown}
      size={this.state.iconsize} color={color}  id="ScrollToNext" / >
    </Link>)
  }
  render(){
    return (
      <div id="DynamicScroller">
            <Slide bottom>
              {this.createIcon()}
            </Slide>
      </div>
    )
  }
}

export default DynamicScroller;
