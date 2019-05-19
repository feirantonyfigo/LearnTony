import React from 'react';
import "./NavBar.css"
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
                  <NavLink href="#AboutPage">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#ExperiencePage">Experience</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#PortfolioPage">Portfolio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#ContactPage">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
}

export default NavBar;
