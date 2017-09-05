import React, { Component } from "react";
import "./App.css";
import Header from "components/Header/Header";
import Typed from "typed.js";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldNavbarCollapse: false
    };
  }

  updateNavbarCollapse() {
    this.setState({
      shouldNavbarCollapse:
        this.services.getBoundingClientRect().top <=
        this.header.navbar.clientHeight
    });
  }

  componentDidMount() {
    const typedOptions = {
      strings: ["idea", "product", "service", "app", "team"],
      typeSpeed: 60,
      fadeOut: true,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 200,
      loop: true
    };
    this.typedText = new Typed(".typed-text", typedOptions);

    document.addEventListener(
      "scroll",
      _.throttle(this.updateNavbarCollapse, 200).bind(this)
    );
  }

  componentWillUnmount() {
    this.typedText.destroy();
  }

  render() {
    return (
      <div className="App">
        <Header
          navbarCollapsed={this.state.shouldNavbarCollapse}
          ref={header => {
            this.header = header;
          }}
        />
        <section className="home">
          <div className="home-container">
            <div className="home-illustration" />
            <div className="home-content">
              <div className="home-copy">
                <p className="copy-paragraph">We help you</p>
                <p className="copy-paragraph">create value</p>
                <p className="copy-paragraph">with your</p>
                <span className="typed-text" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="services"
          ref={services => {
            this.services = services;
          }}
        />
      </div>
    );
  }
}

export default App;
