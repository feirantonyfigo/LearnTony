import React from 'react';
import './AppAssembler.css';
import NavBar from '../../components/NavBar/NavBar'
import LandingPage from '../../pages/LandingPage/LandingPage';
import AboutPage from '../../pages/AboutPage/AboutPage';
import ExperiencePage from '../../pages/ExperiencePage/ExperiencePage';
import PortfolioPage from '../../pages/PortfolioPage/PortfolioPage';
import ContactPage from '../../pages/ContactPage/ContactPage';
import Footer from '../../components/Footer/Footer';
import DynamicScroller from '../../components/Scroller/DynamicScroller';
import VisibilitySensor from 'react-visibility-sensor';
import OnVisible, { setDefaultProps } from 'react-on-visible';
import Slide from 'react-reveal/Slide';
setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 10
});

class AppAssembler extends React.Component {
  constructor(props){
    super(props);
    this.state={
      width:window.innerWidth,
      height: window.innerHeight,
      scrollHeight: window.pageYOffset,
      scrollerControl:{
        color:"black",
        visibility:false,
        nextPage:"",
      },
      navBarVisibility: false
    };
    this.ExperiencePageTracker = this.ExperiencePageTracker.bind(this);
    this.LandingPageTracker = this.LandingPageTracker.bind(this);
    this.AboutPageNavigationTracker = this.AboutPageNavigationTracker.bind(this);
    this.PortfolioPageTracker = this.PortfolioPageTracker.bind(this);
    this.ContactPageTracker = this.ContactPageTracker.bind(this);
    this.getScrollerControl = this.getScrollerControl.bind(this);
    this.ExperiencePageNavigationTracker = this.ExperiencePageNavigationTracker.bind(this);
    this.PortfolioPageNavigationTracker = this.PortfolioPageNavigationTracker.bind(this);
    this.renderTrueNavBar = this.renderTrueNavBar.bind(this);
  }

  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateWindowScrollLocation);
  }
  componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  updateWindowScrollLocation=()=>{
    this.setState({scrollHeight:window.pageYOffset});
  }

  LandingPageTracker(isVisible){
      this.setState({
        scrollerControl:{
          color:"black",
          visibility: !isVisible,
          nextPage:"AboutPage"
        }
      });
      if(!isVisible){
        //slide down navbar

      }
      console.log("LandingPage is now",isVisible?"visible":"invisible");
  }

getScrollerControl(){
  return this.state.scrollerControl;
}

  AboutPageNavigationTracker(isVisible){
    if(isVisible){
      this.setState({
        scrollerControl: {
            ...this.state.scrollerControl,
            nextPage:"ExperiencePage"
          },
          navBarVisibility: true
        });
    }else{
      this.setState({
        scrollerControl: {
            ...this.state.scrollerControl,
            nextPage:"AboutPage"
          },
          navBarVisibility:false,
        });
    }
    console.log("About Page is now",isVisible?"visible":"invisible");
  }

ExperiencePageTracker(isVisible){

  if(isVisible){
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          color: "white",
          visibility:true,
        }
      });
  }else{
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          color: "black",
          visibility:true,
        }
      });
  }
  //console.log("ExperiencePageTracker is now",isVisible?"visible":"invisible");
}

PortfolioPageTracker(isVisible){
  if(isVisible){
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          color: "black",
          visibility:true,
        }
      });
  }else{
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          color: "white",
          visibility:true,
        }
      });
  }
    //console.log("PortfolioPage is now",isVisible?"visible":"invisible");
}

ContactPageTracker(isVisible){
  if(isVisible){
    this.setState({
        scrollerControl:{
          ...this.state.scrollerControl,
          color:"black",
          visibility:false,
        }
    });
  }else{
    this.setState({
        scrollerControl:{
          ...this.state.scrollerControl,
          color:"black",
          visibility:true,
        }
    });
  }
}

createDynamicScroller(){
if(this.state.scrollerControl.visibility){
  ////console.log(this.state.scrollerControl.visibility);
  return   <DynamicScroller color={this.state.scrollerControl.color}  cb={this.getScrollerControl}/ >
}
}

ExperiencePageNavigationTracker(isVisible){
  if(isVisible){
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          nextPage:"PortfolioPage"
        }
      });
  }else{
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          nextPage:"ExperiencePage"
        }
      });
}
//console.log("ExperiencePageTracker is now",isVisible?"visible":"invisible");
}

PortfolioPageNavigationTracker(isVisible){
  if(isVisible){
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          nextPage:"ContactPage"
        }
      });
  }else{
    this.setState({
      scrollerControl: {
          ...this.state.scrollerControl,
          nextPage:"PortfolioPage"
        }
      });
}
}

createDynamicPercentExperience(){
  if (this.state.width <   750) {
  return 40;
  }else{
  return 70;
  }
}

createDynamicPercentAbout(){
  if (this.state.width <   750) {
  return 38.5;
  }else{
  return 0;
  }
}

renderTrueNavBar(){
  let vhPercent = this.state.scrollHeight / this.state.height;
  console.log(vhPercent);
  if(vhPercent>=1.08){
    return   (<Slide top><NavBar stickyProp="top" /></Slide>);
  }
}

  render(){
    return (
      <div className="AppAssembler">
      <div className="LandingPage" id="LandingPage"><LandingPage /></div>
      <NavBar stickyProp="top" />
      <div className="otherPages">
      <div className="AboutPage" id="AboutPage">  <AboutPage /> </div>
      <div className="ExperiencePage" id="ExperiencePage"><ExperiencePage/></div>
      <div className="PortfolioPage" id="PortfolioPage"><PortfolioPage/></div>
      <div className="ContactPage" id="ContactPage"><ContactPage/></div>
      <div className="Footer" id="Footer"><Footer /></div>
      </div>
      </div>
    );
  }
}


export default AppAssembler;
