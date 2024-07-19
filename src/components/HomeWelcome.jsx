import welcome from '../assets/hero_welcome.png'

function HomeWelcome() {
  return (
    <div className='homeWelcome'>
        <div className="homeWelcome__bg"></div>
        <div className="container homeWelcome__container">
            <img src={welcome} alt="hero" />
            <div className="homeWelcome__info">
                <p className="homeWelcome__title">
                    Welcome to <span>deliziose</span>
                </p>
                <p className="homeWelcome__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam 
                </p>
                <button className="d-btn-secondary homeWelcome__btn">See our menu</button>
            </div>
        </div>
    </div>
  )
}

export default HomeWelcome