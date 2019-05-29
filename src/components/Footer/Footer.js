import React from 'react';
import {Container,Col,Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookSquare,faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons'
import { Link, animateScroll as scroll } from "react-scroll";
import './Footer.css'
class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = { width:window.innerWidth, height: window.innerHeight, iconsize: "2x" };
    this.updateWindowDimensions();
  }
  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
  //console.log(this.state.width);
}
componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimensions);
  //console.log(this.state.width);
}
updateWindowDimensions = () => {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
  if (this.state.width <   750) {
    this.setState({ iconsize: "1x" });
  }else{
    this.setState({ iconsize: "2x" });
  }
};
  render() {
    return( <footer id="footer">
        <Container>
        <Row id="scrollTopRow">
        <Col><div id="ScollTop" style={{marginTop:"-2%"}}>
        <Link
        activeClass=""
        to="LandingPage"
        spy={true}
        smooth={true}
        offset={0}
        duration={900}
        ><FontAwesomeIcon icon={faArrowCircleUp}
        size="1x" color="white" id="ScrollTopButton" / ></Link></div></Col>
        </Row>
        <Row id="ContactRow">
        <Col xs={6} md={3}>
        <a href="https://www.linkedin.com/in/feiran-hu-tony" className="socialIcon"><FontAwesomeIcon icon={faLinkedin}
         size={this.state.iconsize}color="white" / ></a>
        </Col>
        <Col xs={6} md={3}>
        <a href="https://github.com/feirantonyfigo" className="socialIcon"><FontAwesomeIcon icon={faGithub}
         size={this.state.iconsize} color="white"   /></a>
        </Col>
        <Col xs={6} md={3}>
        <a href="https://www.facebook.com/profile.php?id=100009287697329" className="socialIcon"><FontAwesomeIcon
         icon={faFacebookSquare}  size={this.state.iconsize} color="white"   /></a>
        </Col>
        <Col xs={6} md={3}>
        <a href="https://www.instagram.com/feiran.hu" className="socialIcon"><FontAwesomeIcon icon={faInstagram}
         size={this.state.iconsize} color="white"   /></a>
        </Col>
        </Row>
        <Row id="copyrightRow">
        <Col>
        <span id="copyright">Tony Hu <span style={{color:'rgb(216,40,169)'}}>&copy;</span>2019</span>
        </Col>
        </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
