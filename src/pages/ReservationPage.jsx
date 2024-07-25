import img from '../assets/reservation.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'

function ReservationPage() {
  return (
    <>
    <Header/>
    <main className='reservation'>
        <div className="reservation__container">
            <h3 className='reservation__title-mob'>Book a table</h3>
            <div className="reservation__img">
                <img src={img} alt="image" />
            </div>
            <div className="reservation__form">
                <h3 className='reservation__title'>Book a table</h3>
                <div className='reservation__dropdowns'>
                    <div className="reservation__dropdown">
                        <div className="reservation__dropdown-btn">Date</div>
                        <ul className="reservation__dropdown-list">

                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <div className="reservation__dropdown-btn">Time</div>
                        <ul className="reservation__dropdown-list">
                            
                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <div className="reservation__dropdown-btn">Party size</div>
                        <ul className="reservation__dropdown-list">
                            <li>1-2</li>
                            <li>3-4</li>
                            <li>5-6</li>
                            <li>7-8</li>
                            <li>8+</li>
                        </ul>
                    </div>

                </div>
                <button className='d-btn-secondary'>Book now</button>
            </div> 
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default ReservationPage