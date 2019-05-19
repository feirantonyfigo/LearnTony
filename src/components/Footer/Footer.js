import React from 'react';
import {Container,Col,Row} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faFacebookSquare,faInstagram} from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
class Footer extends React.Component {
  render() {
    return( <footer id="footer">
        <Container>
        <Row id="ContactRow">
        <Col xs={6} md={3}>
        <a href="https://www.linkedin.com/in/feiran-hu-tony" className="socialIcon"><FontAwesomeIcon icon={faLinkedin}
        size="2x" color="white" / ></a>
        </Col>
        <Col xs={6} md={3}>
        <a href="https://github.com/feirantonyfigo" className="socialIcon"><FontAwesomeIcon icon={faGithub} size="2x"color="white"   /></a>
        </Col>
        <Col xs={6} md={3}>
        <a href="https://www.facebook.com/profile.php?id=100009287697329" className="socialIcon"><FontAwesomeIcon icon={faFacebookSquare} size="2x"color="white"   /></a>
        </Col>
        <Col xs={6} md={3}>
        <a href="https://www.instagram.com/feiran.hu" className="socialIcon"><FontAwesomeIcon icon={faInstagram} size="2x"color="white"   /></a>
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
