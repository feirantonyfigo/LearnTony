import React from 'react';
import './PortfolioPage.css'
import {Container, Row, Col} from 'reactstrap';
import PortfolioItem from '../../components/PortfolioItem/PortfolioItem';
const portfolios =[
  {name: "Tri-Tri", description:"A tile-matching game developed in Swift",
  detailDescription:
  (<div className="productDescription">
  <p>tri-tri is an addicting puzzle game that will train your brain as well as push your logic skills to the limit. Give all your puzzle skills and take this challenge!</p>
  <p>The task is simple - on a beehive-like board, combine chess of different colours or patterns and try your best to eliminate all of them by strategically arranging them following game protocol. There's no requirement for following colour-matching or pattern-matching - just fill the beehive and beat your personal best score.</p>
  <p>
  To make your tri-tri experience more exciting, try out our various special game themes. Plus, there are currently six types of game items, able to save you from failure and maximize game experience, all accessible by in-game currency.Join the game ! Compete - your best record with your friends on Game Center! Share - on Twitter, Facebook, Instagram, Wechat etc. !</p>
  <p>Developers:Tony Hu 胡斐然     Brian Wei 卫力诚     Hailey Li 李晰闻</p>
  <p>2017 HBT Games All Rights Reserved</p>
</div>)
  ,preview:"https://i.ibb.co/SdFBWRM/tri-tri-preview.gif",
  site:"https://itunes.apple.com/ca/app/tri-tri/id1259058860",
carousel:[
  {
    src: 'https://i.ibb.co/RYHMNsr/tritri-1.gif',
    altText: 'Slide 1',
    caption:''
  },
  {
    src: 'https://i.ibb.co/Gnpn2h3/tritri-2.gif',
    altText: 'Slide 2',
    caption:''
  },
  {
    src: 'https://i.ibb.co/0GHJKwW/tritri-3.gif',
    altText: 'Slide 3',
    caption:''
  },
  {
    src: 'https://i.ibb.co/Lg2j3wF/tritri-4.gif',
    altText: 'Slide 4',
    caption:''
  },
  {
    src: 'https://i.ibb.co/BtQPVnG/tritri-5.gif',
    altText: 'Slide 5',
    caption:''
  }
]},

  {name: "Puray", description:"A designed cosmetic goods online shop"
  ,detailDescription:(
    <div className="productDescription"><p>PURAY is the official website for PURAY SPRAY - a moisture skin care product. </p>
    <p>This website was developed first under pure HTML and PHP but introduced to WordPress later.</p></div>
  ),
  preview:"https://i.ibb.co/HGPFBJt/puray-preview.gif",
  site:"https://www.puray.ca",
carousel:[
  {src:'https://i.ibb.co/XzP7HYw/puray-2.jpg',
  altText:'Slide 1',
 caption:''
},
  {
    src: 'https://i.ibb.co/BfYkmzd/puray-4.jpg',
    altText: 'Slide 2',
    caption:''
  },
{src:'  https://i.ibb.co/Cnht5Cx/puray-3.jpg',
altText:'Slide 3',
caption:''
}


]


},
  {name: "LearnTony", description:"Personal website powered by React",
  detailDescription:
  (<div className="productDescription">
  <p>You are viewing it right now!</p>
  <p>LearnTony is my first personal website. </p>
  <p>The whole website is based on React and I learned React from scratch.</p></div>)
  ,preview:"https://i.ibb.co/fY4dN4K/learn-Tony-preview.gif",
  site:"/",
  carousel:[

  ]},
  {name: "Trade-UI", description:"A real time trade search system powered by Angular",
  detailDescription:
  (<div className="productDescription"><p>Trade-UI is a real time open trade search system developed for RBC Capital Markets.</p>
    <p>The system takes in trade data everyday and is able to carry out both past search and future prediction on any open trade.</p>
    <p>Due to legal aggrement, detailed screenshot and website is not available.</p></div>)
  ,
  preview:"https://i.ibb.co/pr3rnM5/trade-ui-preview.gif",
  site:"",
carousel:[

]},
  {name:"Migration",description:"Database migration from Sybase to Oracle",
  detailDescription:(<div className="productDescription"><p>This project is a data migration project from Sybase to Oracle.</p>
  <p>My work consists of unit testing, rewriting of stored procedures and data transfer.</p>
  <p>In addition, I have written a monitor app that recover data lost due to Oracle Clob truncating issue.</p>
  <p>To summarize: </p>
  <p>- Improved migration correctness by 80% by designing test hardness, performing unit tests, debugging and optimizing query plans.</p>
   <p>- Prevented the loss of 1000 GB of data by building multithreading Java program to monitor migration process and to restore lost BLOB data.</p>
   <p> -Slashed average stored procedure's runtime by 60% through query plan analysis, index creation and the use of hint.</p>
</div>)
  ,preview:"https://i.ibb.co/jHTVjr1/migration-preview.gif",
  site:"",
  carousel:[

  ]}
];



class PortfolioPage extends React.Component {
  constructor(props){
    super(props);
    this.PORTFOLIOS = portfolios;
  }
  render() {
    return (
  <div id="PortfolioPage">
  <Container>
  <Row id="PortfolioTitle">
  <Col><h1 className="PageHeader" ><span>P</span><span>O</span><span>R</span><span>T</span><span>F</span>
  <span>O</span><span>L</span><span>I</span><span>O</span></h1></Col>
  </Row>
  <Row id="PortfolioItemsRow">
  {
    this.PORTFOLIOS.map(e=>{
      return <Col xs={6} md={4}><PortfolioItem value={e}/></Col>
    })
  }
  </Row>
  </Container>
  </div>
  );
  }
}

export default PortfolioPage;
