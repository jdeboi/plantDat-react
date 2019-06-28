import React from 'react';
import { NavLink } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';

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

  render() {


    return (
        <div>
          <Navbar className="plantColor" dark>
            <NavbarBrand href="/" className="mr-auto">Plant Dat</NavbarBrand>
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
            <Nav navbar>
              <NavItem>
                <NavLink exact to="/login" className="nav-link" activeStyle={this.active}>
                  Login
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <NavItem>
                <NavLink exact to="/register" className="nav-link" activeStyle={this.active}>
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
    );
  }


}

export default HeaderNav
