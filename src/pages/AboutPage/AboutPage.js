import React from 'react';
import './AboutPage.css'
import {Container, Row, Col} from 'reactstrap';
import FrontEndChart from '../../components/FrontEndChart/FrontEndChart'
import BackEndChart from  '../../components/BackEndChart/BackEndChart';
import ProgrammingLanguageChart from  '../../components/ProgrammingLanguageChart/ProgrammingLanguageChart';

class AboutPage extends React.Component {
  render() {
    return (
      <div id="AboutPage">
      <Container>
      <Row id="AboutTitle">
      <Col><h1 id="aboutText" className="floating textRotate"><span>A</span><span>B</span><span>O</span><span>U</span><span>T</span></h1></Col>
      </Row>
      <Row id="IntroductionRow">
      <Col><img src={require('../../assets/image/selfie.gif')} alt="selfie" id="selfie" /> </Col>
      <Col>
      <div id="selfIntro">
      <div id="quote"><blockquote><p className="quotation">
  "Jarvis, sometimes you gotta run before you can walk."</p>
  <cite > - Tony Stark</cite>  </blockquote></div>
     <div id="selfIntroText">
     <p>
     I am a <span className="highlight">Full Stack</span> developer in practice. I have huge passion towards life and anything related to computer.
     </p>
     <p>I built this site from <span className="highlight">scratch</span>.
     By scratch, I mean absolutely from scratch without no knowledge of React before and had so much <span className="highlight">fun</span> along the way.</p>
     <p>I am a statistic person so I believe the best way to show you who I am is to show you by <span className="highlight">graphs</span>.</p>
     </div>
  </div>
      </Col>
      </Row>
      <Row id="StrengthRowImage">
      <Col></Col>
      <Col> </Col>
      <Col>  </Col>
      </Row>
      <Row id="StrengthRowText">
      <Col><span id="strengthTab"> Front End </span></Col>
      <Col> <span id="strengthTab">Back End</span> </Col>
      <Col> <span id="strengthTab">Programming Languages</span> </Col>
      </Row>
      <Row id="StrengthCharts">
      <Col><FrontEndChart/></Col>
      <Col><BackEndChart/></Col>
      <Col><ProgrammingLanguageChart/></Col>
      </Row>
      </Container>
        </div>
  );
  }
}

export default AboutPage;
