import hero from '../assets/hero.png'

function HomeHero() {
  return (
    <div className='homeHero'>
        <div className="container homeHero__container">
            <div className="homeHero__info">
              <p className="homeHero__sub">Restauran</p>
              <h1>Italian 
                <br />
                Cuisine
              </h1>
              <p className='homeHero__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aut sint assumenda dignissimos<br/> qui et.</p>
              <div className="homeHero__btns">
                 <button className='d-btn-secondary homeHero__order'>Order now</button>
                 <button className='d-btn-primary homeHero__reservation'>Reservation</button>
              </div>
            </div>
            <img src={hero} alt="hero" />
        </div>
    </div>
  )
}

export default HomeHero