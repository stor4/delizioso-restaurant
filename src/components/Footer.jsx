import twitter from "../assets/twitter.svg"
import insta from "../assets/instagram.svg"
import fb from "../assets/facebook.svg"
import logo from "../assets/logo_footer.svg"

function Footer() {
  return (
    <footer className='footer'>
        <div className="container footer__container">
            <div className="footer__top">
                <div className="footer__col">
                    <a className='footer__logo' href="">
                        <img src={logo} alt="logo" />
                    </a>
                    <p className="footer__text">Viverra gravida morbi egestas facilisis tortor netus non duis tempor. </p>
                    <div className="">
                        <a href="#">
                            <img src={twitter} alt="twitter" />
                        </a>
                        <a href="#">
                            <img src={insta} alt="instagram" />
                        </a>
                        <a href="#">
                            <img src={fb} alt="facebook" />
                        </a>
                    </div>
                </div>
                <div className="footer__col">
                    <p className="footer__col-title">Page</p>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Order online</a>
                        </li>
                        <li>
                            <a href="#">Catering</a>
                        </li>
                        <li>
                            <a href="#">Reservation</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                <p className="footer__col-title">Information</p>
                    <ul>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Testemonials</a>
                        </li>
                        <li>
                            <a href="#">Event</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__col">
                <p className="footer__col-title">Get in touch</p>
                    <ul>
                        <li>
                            <address href="#">3247 Johnson Ave, Bronx, NY<br/> 10463, Amerika Serikat</address>
                        </li>
                        <li>
                            <a href="#">delizioso@gmail.com</a>
                        </li>
                        <li>
                            <a href="#">+123 4567 8901</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="footer__bottom">
                <p>Copyright © 2022 Delizioso</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer