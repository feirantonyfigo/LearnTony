import React from 'react';
import SkillBar from 'react-skillbars';
const skills = [
  {type: "C", level: 70},
  {type: "C++", level: 80},
  {type:"Java",level:80},
  {type:"Python",level:90},
  {type:"Swfit",level:75},
  {type:"Verilog",level:75},
  {type:"Assembly Language", level:65},
];
const colors = {
  "bar": "#EE82EE",
  "title": {
    "text": "#fff",
    "background": "#DA70D6"
  }
}

class ProgrammingLanguageChart extends React.Component{
  render() {
    return (
      <SkillBar skills={skills} colors={colors} animationDuration={1000}/>
    );
  }
}

export default ProgrammingLanguageChart;
