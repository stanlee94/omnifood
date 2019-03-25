import React from "react";
import ButtonFull from "./ButtonFull";

class Form extends React.Component {
  handleClick = e => {
    e.preventDefault();
  }

  render() {
    return (
      <section>
        <div className="row">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
          <form>

            <div className="name-row">
                <div className="col span-1-of-3">
                    <label for="name">Name</label>
                </div>
                <div className="col span-2-of-3">
                    <input id="name" type="text" placeholder="Your name" required></input>
                </div>
            </div>
            <div className="email-row">
                <div className="col span-1-of-3">
                    <label for="email">Email</label>
                </div>
                <div className="col span-2-of-3">
                    <input id="email" type="email" placeholder="Your email"></input>
                </div>
            </div>

            <div className="find-row">
                <div className="col span-1-of-3">
                    <label for="find-us">How did you find us?</label>
                </div>
                <div className="col span-2-of-3">
                    <select id="find-us" name="find-us">
                        <option value="friends">Friends</option>
                        <option value="search-engine">Search Engine</option>
                        <option value="ads">Advertisement</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="newsletter-row">
                <div className="col span-1-of-3">
                    <label for="news">Newsletter?</label>
                </div>
                <div className="col span-2-of-3">
                    <input id="news" type="checkbox" name="news" checked></input> <span className="checkbox-info">Let's keep in touch!</span>
                </div>
            </div>

            <div className="drop-line-row">
                <div className="col span-1-of-3">
                    <label for="message">Drop us a line</label>
                </div>
                <div className="col span-2-of-3">
                    <textarea id="message" name="message" placeholder="Your message"></textarea>
                </div>
            </div>
            
            <div className="button-row">
                <div className="col span-3-of-3 btn-submit">
                    <ButtonFull section="" onClick={this.handleClick}>Submit</ButtonFull>
                </div>
            </div>

          </form>
        </div>
      </section>
    );
  }
}

export default Form;
