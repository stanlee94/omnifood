import React from "react";
import ButtonFull from "./ButtonFull";
import ButtonGhost from "./ButtonGhost";

class SignUpBox extends React.Component {
  state = { boxShadow: '0px 0px 0px' }

  handleClick = e => {
    e.preventDefault();
  }

  handleMouseOver = () => {
      this.setState({ boxShadow: '0 10px 30px rgb(220, 220, 220)' });
  }

  handleMouseOut = () => {
      this.setState({ boxShadow: '0px 0px 0px' });
  }

  render() {
    return (
      <div className="col span-1-of-3">
        <div className="plan" style={this.state} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <div className="top">
            <h3>{this.props.subscription}</h3>
            <p>
              <span>{this.props.price}</span> / {this.props.per}
            </p>
            <p>{this.props.subtitle}</p>
          </div>
          <div className="middle">
            <ul>
              <li>
                <ion-icon name="checkmark" />
                {this.props.item1}
              </li>
              <li>
                <ion-icon name="checkmark" />
                {this.props.item2}
              </li>
              <li>
                <ion-icon name={this.props.subscription === "Starter" ? "close" : "checkmark"} />
                {this.props.item3}
              </li>
              <li>
                <ion-icon name="checkmark" />
                {this.props.item4}
              </li>
            </ul>
          </div>
          <div className="bottom">
            {this.props.buttonFull ? (
              <ButtonFull onClick={this.handleClick} section=''>{this.props.buttonText}</ButtonFull>
            ) : (
              <ButtonGhost onClick={this.handleClick} section=''>{this.props.buttonText}</ButtonGhost>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpBox;
