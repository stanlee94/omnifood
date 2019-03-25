import React from 'react';
import ButtonFull from './ButtonFull';
import ButtonGhost from './ButtonGhost';
import SignUpBox from './SignUpBox';

class SignUpSection extends React.Component {
    state = { animation: '', isAnimated: false }

    onScrolling = (section, animation, distance) => {
      const target = document.querySelector(section);
      if (target.getBoundingClientRect().top < distance) {
        this.setState({
          animation
        });
  
        setTimeout(() => {
          this.setState({ isAnimated: true });
        }, 1000);
      } else {
        this.setState({ animation: "" });
      }
    };
  
    handleScroll = () => {
      this.onScrolling(".section-signup", "animated bounce", 100);
    };
  
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }

    render() {
        return(
            <section className="section-signup" id="section-signup">
                <div className="row">
                    <h2>Start eating healthy today</h2>
                </div>
                <div className="row">
                    <div className={!this.state.isAnimated ? this.state.animation : '' }>
                        <SignUpBox 
                            subscription="Premium"
                            price="399$"
                            per="month"
                            subtitle="That’s only 13.30$ per meal"
                            item1="1 meal every day"
                            item2="Order 24/7"
                            item3="Access to newest creations"
                            item4="Free delivery"
                            buttonFull={true}
                            buttonText="Sign up now"
                        />
                    </div>
                    
                    <SignUpBox 
                        subscription="Pro"
                        price="149$"
                        per="month"
                        subtitle="That’s only 14.90$ per meal"
                        item1="1 meal 10 days/month"
                        item2="Order 24/7"
                        item3="Access to newest creations"
                        item4="Free delivery"
                        buttonFull={false}
                        buttonText="Sign up now"
                    />
                    
                    <SignUpBox 
                        subscription="Starter"
                        price="19$"
                        per="meal"
                        subtitle="No discount on your meal!"
                        item1="1 meal"
                        item2="Order from 8 am to 12 pm"
                        item3=""
                        item4="Free delivery"
                        buttonFull={false}
                        buttonText="Sign up now"
                    />

                </div>
            </section>
        );
    }
}

export default SignUpSection;