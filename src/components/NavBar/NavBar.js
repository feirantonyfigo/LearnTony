import React from 'react';
import "./NavBar.css"
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.stickyProp = this.props.stickyProp;
    this.state = {
      isOpen: false,
      width:window.innerWidth,
      height: window.innerHeight,
      scrollHeight: window.pageYOffset,
      vhPercent: 0,
    };
    this.getNavBarClassName = this.getNavBarClassName.bind(this);
  }

  componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener("resize", this.updateWindowDimensions);
    window.addEventListener("scroll", this.updateWindowScrollLocation);
  }
  componentWillUnmount() {
  window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions = () => {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  updateWindowScrollLocation=()=>{
    this.setState({scrollHeight:window.pageYOffset, vhPercent: window.pageYOffset/window.innerHeight});
    //console.log(this.state.vhPercent);
  }


  toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    getNavBarClassName(){
      console.log(this.state.vhPercent);
      if(this.state.vhPercent >= 1.07 && this.state.vhPercent <= 2){
        return "navBar navBar-closed";
      }else if (this.state.vhPercent>=1.08){
        return "navBar navBar-open";
      }
    }

    render() {
      return (
        <Navbar color="dark" dark expand="md" sticky={"top"}  className={"navBar"}>

          <Container>
            <Link
                              activeClass=""
                              to="LandingPage"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={900}
                              style={{color:"white"}}
                            className="navbar-brand"
                              >
              <span>LearnTony</span> </Link>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
            <nav className="stroke">
              <Nav className="ml-auto" navbar>
                <NavItem><Link
                                  activeClass=""
                                  to="AboutPage"
                                  spy={true}
                                  smooth={true}
                                  offset={-90}
                                  duration={500}
                                  className="nav-link"
                                  >
                                About
                              </Link>
                </NavItem>
                <NavItem><Link
                                activeClass=""
                                to="ExperiencePage"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500}
                                className="nav-link"
                                >
                              Experience
                            </Link>
                </NavItem>
                <NavItem><Link
                                activeClass=""
                                to="PortfolioPage"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500}
                                className="nav-link"
                                >
                              Portfolio
                            </Link>
                </NavItem>
                <NavItem><Link
                                activeClass=""
                                to="ContactPage"
                                spy={true}
                                smooth={true}
                                offset={-90}
                                duration={500}
                                className="nav-link"
                                >
                              Contact
                            </Link>
                </NavItem>
              </Nav>
              </nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
}

export default NavBar;
