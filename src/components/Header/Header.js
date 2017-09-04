import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarCollapsed: false
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      navbarCollapsed: nextProps.collapseOn <= this.navbar.clientHeight
    })
  }

  render() {
    return (
      <header>
        <nav
          className={`navbar ${this.state.navbarCollapsed && 'navbar-collapsed'}`}
          ref={(navbar) => { this.navbar = navbar; }}
        >
          <span className="header-name">TIPI</span>
          <ul className="menu">
            <li className="menu-item">HOME</li>
            <li className="menu-item">WHAT WE DO</li>
            <li className="menu-item">OUR APPROACH</li>
            <li className="menu-item">WHO WE ARE</li>
            <li className="menu-item">CONTACT US</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;