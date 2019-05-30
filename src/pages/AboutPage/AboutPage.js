import React from 'react';
import './AboutPage.css'
import {Container, Row, Col} from 'reactstrap';
import SkillChart from '../../components/SkillChart/SkillChart'
import Slide from 'react-reveal/Slide';
import Scroller from '../../components/Scroller/Scroller'
import ResumePage from '../../pages/ResumePage/ResumePage';
import {Collapse} from 'react-collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDoubleDown,faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'

const backEndSkills = [
  {type: "Oracle", level: 80},
  {type: "Sybase", level: 70},
  {type:"MySQL",level:70},
  {type:"PostgreSQL", level:75},
  {type:"MongoDB",level:75},
  {type:"Migration",level:70},
  {type:"Optimization",level:70}
];

const programmingLanguageSkills = [
  {type: "C", level: 70},
  {type: "C++", level: 80},
  {type:"Java",level:80},
  {type:"Python",level:90},
  {type:"Swfit",level:75},
  {type:"Verilog",level:75},
  {type:"Assembly", level:65},
];
const programmingLanguageColor = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

const frontEndSkills = [
  {type: "React", level: 70},
  {type: "Angular", level: 60},
  {type:"CSS",level:55},
  {type:"HTML",level:80},
  {type:"JavaScript",level:80},
  {type:"Photoshop",level:60},
  {type:"UI Design", level:60},
];

const frontEndColor={
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
};

const backEndColor={
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
}
};

class AboutPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pageCollapsed: false,
      expandIcon: faAngleDoubleDown,
      expandBackgroundColor: "rgb(245,245,245)",
      resumeHintOpacity: 0,
      width:window.innerWidth,
      height: window.innerHeight,
      iconsize: "3x",
      resumeHintText: "RESUME",
      expandButtonTransform:0
    };
    this.expandPage = this.expandPage.bind(this);
    this.handleMouseHoverIn = this.handleMouseHoverIn.bind(this);
    this.handleMouseHoverOut = this.handleMouseHoverOut.bind(this);
    this.updateWindowDimensions();
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
    this.setState({ iconsize: "2x" });
  }else{
    this.setState({ iconsize: "3x" });
  }
  };
  expandPage(){
    var collapsed = this.state.pageCollapsed;
    collapsed = !collapsed;
    if(collapsed){
      this.setState({
        pageCollapsed: collapsed,
        expandIcon: faAngleDoubleDown,
        expandBackgroundColor:"white",
        resumeHintText:"HIDE",
        expandButtonTransform:180
      });
    }else{
      this.setState({
        pageCollapsed: collapsed,
        expandIcon: faAngleDoubleDown,
        expandBackgroundColor:"rgb(245,245,245)",
        resumeHintText:"RESUME",
        expandButtonTransform:0

      });
    }

    console.log(this.state.pageCollapsed);
  }

  handleMouseHoverIn(){
    var collapsed = this.state.pageCollapsed;
    console.log(collapsed);
    this.setState({
      resumeHintOpacity:1,
    });
  }

  handleMouseHoverOut(){
    console.log("hover out");
    this.setState({
      resumeHintOpacity:0
    });
  }
  render() {
    return (
      <div id="AboutPage">
      <Container>
      <Row id="AboutTitle">
      <Col><h1 id="aboutText" className="PageHeader"><span>A</span><span>B</span><span>O</span><span>U</span><span>T</span></h1></Col>
      </Row>
      <Row id="IntroductionRow">
      <Col xs={12} md={6}><Slide left><img src={require('../../assets/image/selfie.png')} alt="selfie" id="selfie" /></Slide> </Col>
      <Col xs={12} md={6}>
      <div id="selfIntro">
      <Slide right>
      <div id="quote"><blockquote><p className="quotation">
  "Jarvis, sometimes you gotta run before you can walk."</p>
  <cite > - Tony Stark</cite>  </blockquote></div>
     <div id="selfIntroText">
     <p>
     I am a <span className="highlight">Back End</span> developer for now and future <span className="highlight">Full Stack</span> developer in practice. I have huge passion towards life and anything related to computer.
     </p>
     <p>I built this site from <span className="highlight">scratch</span>.
     By scratch, I mean absolutely from scratch without any knowledge of React before and had so much <span className="highlight">fun</span> along the way.</p>
     <p>I am a statistic person so I believe the best way to show you who I am is to show you by <span className="highlight">graphs</span>.</p>
     </div>
     </Slide>
  </div>
      </Col>
      </Row>
      </Container>
      <div id="StrengthChartsDiv">
      <Container>
      <Row id="StrengthCharts">
      <Col xs={12} md={4}><Slide bottom><span id="strengthTab"> Front End </span><SkillChart skills={frontEndSkills}  colors={frontEndColor} animationDuration={200}/></Slide></Col>
      <Col xs={12} md={4}> <Slide bottom><span id="strengthTab">Back End</span><SkillChart skills={backEndSkills}  colors={backEndColor} animationDuration={200}/></Slide></Col>
      <Col xs={12} md={4}><Slide bottom><span id="strengthTab">Programming Languages</span>
      <SkillChart skills={programmingLanguageSkills}  colors={programmingLanguageColor} animationDuration={200} />
      </Slide></Col>
      </Row>
      </Container>
      </div>
      <Collapse isOpened={this.state.pageCollapsed}>
        <div className="ResumePage" id="ResumePage"><ResumePage/></div>
      </Collapse>
      <div id="expandButton" style={{backgroundColor:this.state.expandBackgroundColor}}>
      <Container>
      <Row>
      <Col >
    <div id="resumeHint" style={{opacity:this.state.resumeHintOpacity}}>  <Slide left>{this.state.resumeHintText} </Slide></div></Col>
      </Row>
      <Row>
      <Col>  <FontAwesomeIcon icon={faAngleDoubleDown}
        size={this.state.iconsize} color="rgb(99,99,99)"
        onClick={this.expandPage} className={this.state.pageCollapsed?"expandPageButton rotate down":"expandPageButton rotate"}
         onMouseEnter={this.handleMouseHoverIn}
         onMouseLeave={this.handleMouseHoverOut}
         spin={false}/ > </Col>
      </Row>
      </Container>
      </div>
        </div>
  );
  }
}

export default AboutPage;
