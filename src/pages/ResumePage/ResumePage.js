import React from 'react';
import './ResumePage.css'
class ResumePage extends React.Component {
constructor(props){
  super(props);
  this.state = {
    width:window.innerWidth,
    height: window.innerHeight,
    className:""
  };
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
  this.setState({ className: "" });
}else{
  this.setState({ className: "resumeDesktop" });
}
};

render(){
  return  (
  <div className="ResumePage">
<img src={require("../../assets/image/Resume.png")} id="resume"  className={this.state.className}/>
  </div>
);
}

}

export default ResumePage;
