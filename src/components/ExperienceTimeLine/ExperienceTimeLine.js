import React from 'react';
import ReactLifeTimeline from 'react-life-timeline';

const experience = [
    {date_start: new Date('1997-03-20'),date_end: new Date('2015-08-30'),title:'Childhood',color:'cyan'},
    {date_start: new Date('2015-09-07'),date_end:new Date('2016-04-30'),title:'University of Toronto: Learning Programming with C',color: '#4cb5f5'},
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
                get_events={this.generate_events.bind(this)}
                />
                </span>
                <div id={'indicators'}>
                        {this.EVENTS.map(e =>
                                <div key={e.color}>
                                        {this.generate_block(e.color)}
                                        <p styple={{display:'inline-block',paddingTop:(window.innerWidth<767?'5px':'0px')}}>{e.title}</p>
                                  </div>
                          )}
                          <div>
                                {this.generate_block('rgb(139,91,51)')}
                                <p styple={{display:'inline-block',paddingTop:(window.innerWidth<767?'5px':'0px')}}>Birthday</p>
                          </div>
                  </div>
      </span>
      </div>
    )
  }
}

export default ExperienceTimeLine;
