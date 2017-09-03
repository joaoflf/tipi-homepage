import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Typed from 'typed.js';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapseOn: 1000
    }
  }

  updateCollapseOnCoordinate() {
    this.setState({
      collapseOn: this.services.getBoundingClientRect().top
    })
  }

  componentDidMount() {
    const typedOptions = {
      strings: ['idea', 'product', 'service', 'app', 'team'],
      typeSpeed: 60,
      fadeOut: true,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 200,
      loop: true
    };
    this.typedText = new Typed('.typed-text', typedOptions);

    document.addEventListener('scroll', _.throttle(this.updateCollapseOnCoordinate, 200).bind(this));
  }

  componentWillUnmount() {
    this.typedText.destroy();
  }

  render() {
    return (
      <div className="App">
        <Header collapseOn={this.state.collapseOn} />
        <section className="home">
          <div className="home-container">
            <div className="home-illustration">
            </div>
            <div className="home-content">
              <div className="home-copy">
                <p className="copy-paragraph">We help you</p>
                <p className="copy-paragraph">create value</p>
                <p className="copy-paragraph">with your</p>
                <span className="typed-text"></span>
              </div>
            </div>
          </div>
        </section>
        <section
          className="services"
          ref={(services) => { this.services = services; }}
        >
        </section>
      </div>
    );
  }
}

export default App;
