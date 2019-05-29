import React from 'react';
import ReactLifeTimeline from 'react-life-timeline';
import './ExperienceTimeLine.css'
import {Container, Row, Col } from 'reactstrap';
const experience = [
    {date_start: new Date('1997-03-20'),date_end: new Date('2015-08-30'),title:'Childhood',color:'cyan'},
    {date_start: new Date('2015-09-07'),date_end:new Date('2016-04-30'),title:'University of Toronto: Learning Programming with C, hardware',color: '#4cb5f5'},
    {date_start:new Date('2016-09-07'),date_end:new Date('2017-04-30'),title:'University of Toronto: Objective Oriented Programming with C++, Assembly, Verilog',color:"rgb(154,218,198)"},
    {date_start:new Date('2017-05-01'),date_end:new Date('2017-09-06'),title:"HBT Games: Developed IOS Game Tri-Tri with Team",color:"rgb(138,35,22)"},
    {date_start:new Date('2017-09-06'),date_end:new Date('2018-04-30'),title:"University of Toronto: Operating System, Web, Python, Database",
    color:"rgb(239,142,159)"},
    {date_start:new Date('2018-05-07'),date_end:new Date('2019-04-26'),title:"RBC Capital Markets IT: Developer Intern",color:"rgb(229,213,63)"}
  ];



class ExperienceTimeLine extends React.Component {
  constructor(props){
    super(props);
    this.EVENTS = experience;
  }

  generate_events(cb){
    cb(this.EVENTS);
  }

  generate_block(color){
    return <div style={{width:'15px',height:'15px',background:color,marginTop:'10px',display:(window.innerWidth<767?'':'inline-block'),marginRight:'10px'}} />
  }

  render() {
    return (
      <div id={'Experience'}>
      <span>
              <span id="ReactLifeTimeline">
                <ReactLifeTimeline
                subject_name='Tony Hu'
                birthday={new Date('1997-03-20')}
                get_events={this.generate_events.bind(this) }
                />
                </span>
                <div id={'indicators'}>
                      <Container>
                      <Row>
                        {this.EVENTS.map(e =>
                          <Col>
                                <div key={e.color}>
                                        {this.generate_block(e.color)}
                                        <p styple={{display:'inline-block',paddingTop:(window.innerWidth<767?'5px':'0px')}}>{e.title}</p>
                                  </div>
                              </Col>
                          )}
                          <Col>
                          <div>
                                {this.generate_block('rgb(139,91,51)')}
                                <p styple={{display:'inline-block',paddingTop:(window.innerWidth<767?'5px':'0px')}}>Birthday</p>
                          </div>
                          </Col>
                          </Row>
                          </Container>
                  </div>
      </span>
      </div>
    )
  }
}

export default ExperienceTimeLine;
