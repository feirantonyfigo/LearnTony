import React from 'react'
import { StyleRoot } from 'radium'
import "./ExperienceTimeLineMobile.css"
import Timeline from 'react-dual-timeline'

const experience = [
    {counter:1,date: '1997-03-20',title:'Birthday',description:"Tony was born on this date"},
    {counter:2,date:'2015-09-07' ,title:'First Year at University of Toronto',
    description:"Leaning Programming with C and hardware"},
    {counter:3,date:'2016-09-07',title:'Second Year at University of Toronto',description:"Objective Oriented Programming with C++, Assembly, Verilog"},
    {counter:4,date:'2017-05-01',title:"HBT Games",description:"Developed IOS Game Tri-Tri with Team"},
    {counter:5,date:'2017-09-06',title:"Third Year at University of Toronto",
    description:"Operating System, Web, Python, Database"},
    {counter:6,date:'2018-05-07',title:"One Year Internship at RBC Capital Markets IT",description:"Developer Intern"}
  ];


class ExperienceTimeLineMobile extends React.Component {
  render(){
    return (
      <div id="mobileTimeLineContainer">
      <StyleRoot>
      <Timeline activeColor='rgb(255,255,255,1)' lineColor="rgb(245,245,245,0.5)">
        {experience.map(event =>
        <div key={event.date} icon={event.counter}>
          <h1 id="eventTitle">{event.title}</h1>
          <h3 id="eventDate">{event.date}</h3>
          <div id="eventDescription">
          {event.description}
          </div>
        </div>
        )}
      </Timeline>
    </StyleRoot>
    </div>
    )
  }
}

export default ExperienceTimeLineMobile;
