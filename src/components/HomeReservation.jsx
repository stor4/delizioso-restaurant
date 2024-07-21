import reservation from "../assets/home_reservation1.png"

function HomeReservation() {
  return (
    <div className='homeReservation'>
    <div className="homeReservation__bg"></div>
    <div className="container homeReservation__container">
        <img src={reservation} alt="hero" />
        <div className="homeReservation__info">
            <p className="homeReservation__title">
                Let's reserve<br/><span> a table</span>
            </p>
            <p className="homeReservation__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies ne<br/> quam 
            </p>
            <button className="d-btn-secondary homeReservation__btn">Reservation</button>
        </div>
    </div>
</div>
  )
}

export default HomeReservation