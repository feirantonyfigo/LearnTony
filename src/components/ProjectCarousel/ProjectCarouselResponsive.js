import React from "react";
import { Carousel } from "react-responsive-carousel";
import './ProjectCarousel.css'

class ProjectCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.items = this.props.items;
  }
   render(){
     return (
       <Carousel  showThumbs={false} emulateTouch showArrows={false} autoPlay>
       {this.items.map(item =>
         <div>
         <img id="slidesImage" src={item.src} alt={item.altText} />
        </div>
       )}
       </Carousel>
     )
   }
}

export default ProjectCarousel;
