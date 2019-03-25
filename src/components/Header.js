import React from 'react';
import Navigation from './Navigation';
import ButtonGhost from './ButtonGhost';
import ButtonFull from './ButtonFull';

class Header extends React.Component {
    componentDidMount() {
        console.log(document.querySelector('.section-features').getBoundingClientRect().top);
    }
    
    render() {
        return(
            <header id="section-header">
                <Navigation />
                <div className="hero-text-box">
                    <h1>Goodbye junk food. <br /> Hello super healthy meals.</h1>
                    <ButtonFull section='#section-signup'>I'm hungry</ButtonFull>
                    <ButtonGhost section='#section-features'>Show me more</ButtonGhost>
                </div>
            </header>
        )
    }
}

export default Header;
