import React from 'react';
import { NavLink } from "react-router-dom";
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faUser } from '@fortawesome/free-solid-svg-icons';

class HeaderNav extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  active = {
    fontWeight: "bold"
  };


  iconPadding = {
    paddingRight: "5px",
    paddingLeft: "10px"
  };

  loginStyle = {
    color: "white",
    paddingRight:"10px"
  }

  buttonStyle = {
    paddingRight: "20px"
  }

  render() {


    return (
      <div>
        <Navbar className="plantColor" dark>
          <NavbarBrand href="/" className="mr-auto">Plant Dat</NavbarBrand>
          <NavLink exact to="/login" style={this.loginStyle}>
            Login
          </NavLink>
          <NavLink exact to="/logout" style={this.loginStyle}>
            Logout
          </NavLink>
          <NavLink exact to="/register" activeStyle={this.active} style={this.buttonStyle}>
            <button className="btn-sm btn btn-outline-light" >
              {/*<FontAwesomeIcon icon={faUser} />
              <span style={this.iconPadding}>Sign Up</span>*/
              }
              Sign Up
            </button>
          </NavLink>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink exact to="/" className="nav-link" activeStyle={this.active}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link" activeStyle={this.active}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/resources" activeStyle={this.active}>
                  Resources
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>


        </Navbar>
      </div>
    );
  }


}

export default HeaderNav
