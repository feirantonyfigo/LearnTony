import React from 'react';
import './ExperiencePage.css'
import {Container, Row, Col} from 'reactstrap';
import ExperienceTimeLine from '../../components/ExperienceTimeLine/ExperienceTimeLine'
import ExperienceTimeLineMobile from '../../components/ExperienceTimeLine/ExperienceTimeLineMobile'
class ExperiencePage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      width:window.innerWidth,
      height: window.innerHeight
    };
    this.renderTimeLineDesktop = this.renderTimeLineDesktop.bind(this)
    this.renderTimeLineMobile = this.renderTimeLineMobile.bind(this);
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
  };

  renderTimeLineDesktop(){
    if (this.state.width >=  750) {
        return <ExperienceTimeLine />
    }
  }

  renderTimeLineMobile(){
    if (this.state.width <  750) {
        return <ExperienceTimeLineMobile />
    }
  }
  render() {
    return (
  <div id="ExperiencePage">
  <Container >
  <Row id="ExperienceTitle">
  <Col><h1 id="experienceText" className="PageHeader"><span>E</span><span>X</span><span>P</span><span>E</span><span>R</span>
  <span>I</span><span>E</span><span>N</span><span>C</span><span>E</span></h1></Col>
  </Row>
  <Row id="ExperienceTimeLine">
  <Col>{this.renderTimeLineDesktop()}</Col>
   </Row>
  </Container>
  {this.renderTimeLineMobile()}
  </div>
  );
  }
}

export default ExperiencePage;
