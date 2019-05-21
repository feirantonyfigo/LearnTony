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
setDefaultProps({
    bounce: true,
    visibleClassName: 'appear',
    percent: 10
});

class AppAssembler extends React.Component {
  constructor(props){
    super(props);
    this.state={
      scrollerControl:{
        color:"black",
        visibility:false,
        nextPage:""
      }
    };
    this.ExperiencePageTracker = this.ExperiencePageTracker.bind(this);
    this.LandingPageTracker = this.LandingPageTracker.bind(this);
    this.AboutPageTracker = this.AboutPageTracker.bind(this);
    this.PortfolioPageTracker = this.PortfolioPageTracker.bind(this);
    this.ContactPageTracker = this.ContactPageTracker.bind(this);
    this.getScrollerControl = this.getScrollerControl.bind(this);
  }

  LandingPageTracker(isVisible){
      this.setState({
        scrollerControl:{
          color:"black",
          visibility: !isVisible,
          nextPage:"ExperiencePage"
        }
      });
      console.log("LandingPage is now",isVisible?"visible":"invisible");
  }

getScrollerControl(){
  return this.state.scrollerControl;
}
  AboutPageTracker(isVisible){
    console.log("About Page is now",isVisible?"visible":"invisible");
  }

ExperiencePageTracker(isVisible){
  if(isVisible){
    this.setState({
        scrollerControl:{
          color:"white",
          visibility:true,
          nextPage:"PortfolioPage"
        }
    });
  }else{
    this.setState({
        scrollerControl:{
          color:"black",
          visibility:true,
        nextPage:"ExperiencePage"
        }
    });
  }
  console.log("ExperiencePageTracker is now",isVisible?"visible":"invisible");
}

PortfolioPageTracker(isVisible){
  if(isVisible){
    this.setState({
        scrollerControl:{
          color:"black",
          visibility:true,
          nextPage:"ContactPage"
        }
    });
  }else{
    this.setState({
        scrollerControl:{
          color:"white",
          visibility:true,
          nextPage:"PortfolioPage"
        }
    });
  }
    console.log("PortfolioPage is now",isVisible?"visible":"invisible");
}

ContactPageTracker(isVisible){
  if(isVisible){
    this.setState({
        scrollerControl:{
          color:"black",
          visibility:false,
          nextPage:""
        }
    });
  }else{
    this.setState({
        scrollerControl:{
          color:"black",
          visibility:true,
          nextPage:"ContactPage"
        }
    });
  }
}

createDynamicScroller(){
if(this.state.scrollerControl.visibility){
  //console.log(this.state.scrollerControl.visibility);
  return   <DynamicScroller color={this.state.scrollerControl.color}  cb={this.getScrollerControl}/ >
}
}
  render(){
    return (
      <div className="AppAssembler">
      <div className="NavBar" id="NavBar"><NavBar /></div>
      <VisibilitySensor onChange={this.LandingPageTracker}>
      <div className="LandingPage" id="LandingPage"><LandingPage /> </div>
      </VisibilitySensor>
      <OnVisible bounce={true} onChange={this.AboutPageTracker}>
      <div className="AboutPage" id="AboutPage"><AboutPage /></div>
      </OnVisible>
      <OnVisible  bounce={true} onChange={this.ExperiencePageTracker}>
      <div className="ExperiencePage" id="ExperiencePage"><ExperiencePage/></div>
      </OnVisible>
      <OnVisible  bounce={true} onChange={this.PortfolioPageTracker}>
      <div className="PortfolioPage" id="PortfolioPage"><PortfolioPage/></div>
      </OnVisible>
        <OnVisible  bounce={true} onChange={this.ContactPageTracker}>
      <div className="ContactPage" id="ContactPage"><ContactPage/></div>
      </OnVisible>
      <div className="Footer" id="Footer"><Footer /></div>
      <div className="DynamicScroller" id="DynamicScroller" >{this.createDynamicScroller()}</div>
      </div>
    );
  }
}


export default AppAssembler;
