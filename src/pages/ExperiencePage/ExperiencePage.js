import React from 'react';
import './ExperiencePage.css'
import {Container, Row, Col} from 'reactstrap';
import ExperienceTimeLine from '../../components/ExperienceTimeLine/ExperienceTimeLine'
class ExperiencePage extends React.Component {
  render() {
    return (
  <div id="ExperiencePage">
  <Container>
  <Row id="ExperienceTitle">
  <Col><h1 id="experienceText" className="floating textRotate"><span>E</span><span>X</span><span>P</span><span>E</span><span>R</span>
  <span>I</span><span>E</span><span>N</span><span>C</span><span>E</span></h1></Col>
  </Row>
  <Row>
  <Col><ExperienceTimeLine/></Col>
   </Row>
  </Container>
  </div>
  );
  }
}

export default ExperiencePage;
