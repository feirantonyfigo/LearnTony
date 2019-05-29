import React from 'react';
import SkillBar from 'react-skillbars';

class SkillChart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      skills: this.props.skills,
      animationDuration:this.props.animationDuration
    }
  }
  render() {
    return (
      <SkillBar skills={this.state.skills}  colors={{
        "bar": "#3498db",
        "title": {
          "text": "#fff",
          "background": "#2980b9"
        }
      }} animationDuration={this.state.animationDuration}/>
    );
  }
}

export default SkillChart;
