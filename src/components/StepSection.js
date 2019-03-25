import React from "react";
import iPhoneImage from "../image/app-iPhone.png";
import appStore from "../image/download-app.svg";
import playStore from "../image/download-app-android.png";

class StepSection extends React.Component {
  state = { animation: '', isAnimated: false, opacity: 0}

  onScrolling = (section, animation, distance) => {
    const target = document.querySelector(section);
    if (target.getBoundingClientRect().top < distance) {
      this.setState({
        animation,
        opacity: 1
      });

      setTimeout(() => {
        this.setState({ isAnimated: true });
      }, 1000);
    } else {
      this.setState({ animation: "" });
    }
  };

  handleScroll = () => {
    this.onScrolling(".section-steps", "animated slideInUp", 50);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <section className="section-steps" id="section-steps">
        <div className="row">
          <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>

        <div className="row">
          <div className="col span-1-of-2 step-box">
            <img
              style={{ opacity: this.state.opacity }}
              src={iPhoneImage}
              alt="Omnifood on iPhone"
              className={`omni-iphone ${!this.state.isAnimated ? this.state.animation : ""}`}
            />
          </div>

          <div className="col span-1-of-2 step-box">
            <div className="work-steps">
              <div>1</div>
              <p>
                Choose the subscription plan that best fits your needs and sign
                up today.
              </p>
            </div>

            <div className="work-steps">
              <div>2</div>
              <p>
                Order your delicious meal using our mobile app or website. Or
                you can even call us!
              </p>
            </div>

            <div className="work-steps">
              <div>3</div>
              <p>
                Enjoy your meal after less than 20 minutes. See you the next
                time!
              </p>
            </div>

            <div className="buttons">
              <a href="#" className="btn-app">
                <img src={appStore} alt="App store download button" />
              </a>
              <a href="#" className="btn-app">
                <img src={playStore} alt="Play store download button" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StepSection;
