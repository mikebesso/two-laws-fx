import React, {Component} from 'react';
import PropTypes from "prop-types";


import * as Bloomer from 'bloomer';


/*
    Usage:

        <MenuBar homePath="/" homeText="Home">
            <NavBarItem />
        </MenuBar>
*/


class MenuBar extends Component {

    static defaultProps = {
        homePath: "/",
        homeText: "Home"
    }

    static propTypes = {
        homePath: PropTypes.string.isRequired,
        homeText: PropTypes.string.isRequired
    }

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
        <Bloomer.Navbar className="bg-primary text-white" dark expand="md">
          <Bloomer.NavbarBrand href={this.props.homePath}>{this.props.homeText}</Bloomer.NavbarBrand>
          <Bloomer.NavbarToggler onClick={this.toggle} />
          <Bloomer.Collapse isOpen={this.state.isOpen} navbar>
            <Bloomer.Nav className="ml-auto" navbar>
                {this.props.children}
            </Bloomer.Nav>
          </Bloomer.Collapse>
        </Bloomer.Navbar>
    );
  }
}




export default MenuBar;