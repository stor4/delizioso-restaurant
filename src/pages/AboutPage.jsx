import img1 from "../assets/about-page-1.svg"
import img2 from "../assets/about-page-2.svg"
import img3 from "../assets/about-page-3.png"

function AboutPage() {
  return (
    <div className="aboutPage">
        <div className="container aboutPage__container">
            <p className="aboutPage__mob-title">
                <span>Our</span> restaurant
            </p>
            <div className="aboutPage__top">
                <div className="aboutPage__top-img">
                    <span></span>
                    <img src={img1} alt="about-img" />
                </div>
                <div className="">
                    <p className="aboutPage__title">
                        <span>Our</span>
                        <br/> 
                        restaurant
                    </p>
                    <p className="aboutPage__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse.
                    </p>
                </div>
            </div>
            <div className="aboutPage__middle">
            <div className="aboutPage__middle-img">
                    <span></span>
                    <img src={img2} alt="about-img" />
                </div>
                <p className="aboutPage__text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
            </div>
            <div className="aboutPage__bottom">
                <img src={img3} alt="about-owner" />
                <div className="">
                    <p className="aboutPage__title">
                        <span>Owner</span> &
                        <br/> 
                        Executive Chef
                    </p>
                    <div className="aboutPage__name">Ismail Marzuki</div>
                    <p className="aboutPage__quote">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AboutPage