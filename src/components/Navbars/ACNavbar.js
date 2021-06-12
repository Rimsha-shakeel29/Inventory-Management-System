import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "logo.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class ACNavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    document.body.classList.add("white-content");
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="info" expand="md" style={{ height: "80px" }}>
        <div className="logo-img">
              <img src={require('../../assets/img/react-logo.png')} alt="react-logo"  width="30" height="30" />
          </div> 
          <NavbarBrand href="/" style={{  marginLeft: window.innerWidth <= 760 ? 0:70}}>National Highways & Motorway Police</NavbarBrand>
           
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/signup">Sign Up</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/login">Login</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
