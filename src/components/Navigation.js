import React from 'react';
import logoWhite from '../image/logo-white.png'
import logoBlack from '../image/logo.png'

class Navigation extends React.Component {
    state = { style: "test" };

    handleScroll = () => {
        const target = document.querySelector('.section-features');
        if(target.getBoundingClientRect().top < 20) {
            this.setState({ style: 'sticky' });
        } else {
            this.setState({ style: "test" })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    render() {
        return(
            <nav className={this.state.style}>
                <div className="row">
                    <img className="logo" src={logoWhite} alt="Omnifood logo" />
                    <a href="#section-header"><img className="logo-black" src={logoBlack} alt="Omnifood black logo" /></a>
                    <ul className="main-nav">
                        <li><a href="#section-features">Food delivery</a></li>
                        <li><a href="#section-steps">How it works</a></li>
                        <li><a href="#section-cities">Our cities</a></li>
                        <li><a href="#section-signup">Sign up</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navigation;