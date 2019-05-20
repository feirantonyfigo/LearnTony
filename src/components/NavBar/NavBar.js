import React from 'react';
import "./NavBar.css"
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <Navbar color="dark" dark expand="md" sticky="top" className="navBar">
          <Container>
            <NavbarBrand href="/">
              <span>LearnTony</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink><Link
                                  activeClass=""
                                  to="AboutPage"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  >
                                About
                              </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link
                                activeClass=""
                                to="ExperiencePage"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                >
                              Experience
                            </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link
                                activeClass=""
                                to="PortfolioPage"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                >
                              Portfolio
                            </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link
                                activeClass=""
                                to="ContactPage"
                                spy={true}
                                smooth={true}
                                offset={-50}
                                duration={500}
                                >
                              Contact
                            </Link>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
}

export default NavBar;
