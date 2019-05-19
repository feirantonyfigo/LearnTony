import React from 'react';
import SkillBar from 'react-skillbars';
const skills = [
  {type: "Oracle", level: 80},
  {type: "Sybase", level: 70},
  {type:"MySQL",level:70},
  {type:"PostgreSQL", level:75},
  {type:"MangoDB",level:75},
  {type:"Migration",level:70},
  {type:"Optimization",level:70}
];

class BackEndChart extends React.Component{
  render() {
    return (
      <SkillBar skills={skills} animationDuration={1000}/>
    );
  }
}

export default BackEndChart;
