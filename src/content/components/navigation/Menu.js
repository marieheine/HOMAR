import React, { Component } from "react";
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Button
} from "reactstrap";

export default class Menu extends Component {
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

  render() {
    var littleInline = {
      margin: "1rem",
      // width: "35%",
      marginLeft: "0.2rem",
      boxShadow: "0vw 1vh 5px black",
      alignSelf: "flex-end"
    };

    var littleOverride = {
      paddingLeft: "4vw",
      paddingRight: "4vw"
    };

    return (
      <div style={littleInline}>
        <Button
          style={littleOverride}
          onClick={this.toggleNavbar}
          outline
          color="secondary"
        >
          NAVIGATE
        </Button>
        {/* </NavbarToggler> */}
        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/blog/" onClick={this.toggleNavbar}>
                <h1 className="title menuButton">Blog</h1>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/entity/" onClick={this.toggleNavbar}>
                <h1 className="title menuButton">Entity</h1>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/manifesto/" onClick={this.toggleNavbar}>
                <h1 className="title menuButton">Manifesto</h1>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/outrocuteness" onClick={this.toggleNavbar}>
                <h1 className="title menuButton">Shop [HOT!]</h1>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    );
  }
}
