import React from 'react';
import SkillBar from 'react-skillbars';
const skills = [
  {type: "React", level: 70},
  {type: "Angular", level: 60},
  {type:"CSS",level:55},
  {type:"HTML",level:80},
  {type:"JavaScript",level:80},
  {type:"Photoshop",level:60},
  {type:"UI Design", level:60},
];
const colors = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
}

class FrontEndChart extends React.Component{
  render() {
    return (
      <SkillBar skills={skills} colors={colors} animationDuration={1000}/>
    );
  }
}

export default FrontEndChart;
