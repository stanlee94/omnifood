import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <footer className="section-footer">
                <div className="row rel pad">
                    <ul className="footer-nav">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">iOS App</a></li>
                        <li><a href="#">Android App</a></li>
                    </ul>
                    <ul class="social">
                        <li><a className="facebook" href="#"><ion-icon name="logo-facebook"></ion-icon></a></li>
                        <li><a className="twitter" href="#"><ion-icon name="logo-twitter"></ion-icon></a></li>
                        <li><a className="googleplus" href="#"><ion-icon name="logo-googleplus"></ion-icon></a></li>
                        <li><a className="instagram" href="#"><ion-icon name="logo-instagram"></ion-icon></a></li>
                    </ul>

                    <p>Copyright &copy; 2018 by Raver Design Sdn. Bhd. <br /> All right reserved.</p>
                </div>
            </footer>
        );
    }
}

export default Footer;


