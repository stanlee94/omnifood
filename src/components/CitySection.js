import React from "react";
import lisbon from "../image/lisbon.jpg";
import berlin from "../image/berlin.jpg";
import london from "../image/london.jpg";
import sanFrancisco from "../image/san-francisco.jpg";

class CitySection extends React.Component {
  state = {
    color: "#e67e22",
    borderBottom: "1px solid #e67e22",
    target: "",
    animation: "",
    opacity: 0,
    isAnimated: false
  };

  onScrolling = (section, animation, distance) => {
    const target = document.querySelector(section);
    if (target.getBoundingClientRect().top < distance) {
      this.setState({
        animation,
        opacity: 1
      });

      setTimeout(() => {
        this.setState({ isAnimated: true });
      }, 2000);
    } else {
      this.setState({ animation: "" });
    }
  };

  handleScroll = () => {
    this.onScrolling("#section-cities", "animated rollIn", 60);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  ionIconStyle = value => {
    const { color, target } = this.state;
    if (target === value) {
      return { color };
    } else {
      return { color: "#e67e22" };
    }
  };

  linkStyle = value => {
    const { color, borderBottom, target } = this.state;
    if (target === value) {
      return { color, borderBottom };
    } else {
      return { color: "#e67e22", borderBottom: "1px solid #e67e22" };
    }
  };

  handleMouseOver = e => {
    this.setState({
      color: "#38A1F3",
      borderBottom: "1px solid transparent",
      target: e.target.id
    });
  };

  handleMouseOut = () => {
    this.setState({
      color: "#e67e22",
      borderBottom: "1px solid #e67e22",
      target: ""
    });
  };

  render() {
    return (
      <section id="section-cities">
        <div className="row">
          <h2>We're currently in these cities</h2>
        </div>

        <div className="row city-boxes">
          <div className="col span-1-of-4 city-box">
            <img id="image1" style={{ opacity: this.state.opacity }} src={lisbon} alt="Lisbon" className={!this.state.isAnimated ? this.state.animation : ''} />
            <h3>Lisbon</h3>
            <div>
              <ion-icon name="people" />
              1600+ happy eaters
            </div>
            <div>
              <ion-icon name="restaurant" />
              60+ top chefs
            </div>
            <div>
              <ion-icon
                style={this.ionIconStyle("@omnifood_lx")}
                name="logo-twitter"
              />
              <a
                id="@omnifood_lx"
                style={this.linkStyle("@omnifood_lx")}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                href="#"
              >
                @omnifood_lx
              </a>
            </div>
          </div>

          <div className="col span-1-of-4 city-box">
            <img id="image2" style={{ opacity: this.state.opacity }} src={sanFrancisco} alt="San Francisco" className={!this.state.isAnimated ? this.state.animation : ''} />
            <h3>San Francisco</h3>
            <div>
              <ion-icon name="people" />
              3700+ happy eaters
            </div>
            <div>
              <ion-icon name="restaurant" />
              60+ top chefs
            </div>
            <div>
              <ion-icon
                style={this.ionIconStyle("@omnifood_sf")}
                name="logo-twitter"
              />
              <a
                id="@omnifood_sf"
                style={this.linkStyle("@omnifood_sf")}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                href="#"
              >
                @omnifood_sf
              </a>
            </div>
          </div>

          <div className="col span-1-of-4 city-box">
            <img id="image3" style={{ opacity: this.state.opacity }} src={berlin} alt="Berlin" className={!this.state.isAnimated ? this.state.animation : ''} />
            <h3>Berlin</h3>
            <div>
              <ion-icon name="people" />
              2300+ happy eaters
            </div>
            <div>
              <ion-icon name="restaurant" />
              110+ top chefs
            </div>
            <div>
              <ion-icon
                style={this.ionIconStyle("@omnifood_berlin")}
                name="logo-twitter"
              />
              <a
                id="@omnifood_berlin"
                style={this.linkStyle("@omnifood_berlin")}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
                href="#"
              >
                @omnifood_berlin
              </a>
            </div>
          </div>

          <div className="col span-1-of-4 city-box">
            <img id="image4" style={{ opacity: this.state.opacity }} src={london} alt="London" className={!this.state.isAnimated ? this.state.animation : ''} />
            <h3>London</h3>
            <div>
              <ion-icon name="people" />
              1200+ happy eaters
            </div>
            <div>
              <ion-icon name="restaurant" />
              50+ top chefs
            </div>
            <div>
              <ion-icon
                style={this.ionIconStyle("@omnifood_london")}
                name="logo-twitter"
              />
              <a
                id="@omnifood_london"
                style={this.linkStyle("@omnifood_london")}
                href="#"
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
              >
                @omnifood_london
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CitySection;
