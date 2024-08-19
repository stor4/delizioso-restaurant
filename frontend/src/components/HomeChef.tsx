import chef1 from '../assets/chef1.png'
import chef2 from '../assets/chef2.png'
import chef3 from '../assets/chef3.png'

export default function HomeChef() {
  return (
    <div className='homeChef'>
        <div className="homeChef__container">
            <p className="homeChef__title">Our greatest chef</p>
            <div className="homeChef__grid">
                <div className="homeChef__card">
                    <img src={chef1} alt="chef" />
                    <p className="homeChef__card-name">Betran Komar</p>
                    <p className="homeChef__card-position">Head chef</p>
                </div>
                <div className="homeChef__card">
                    <img src={chef2} alt="chef" />
                    <p className="homeChef__card-name">Ferry Sauwl</p>
                    <p className="homeChef__card-position">Chef</p>
                </div>
                <div className="homeChef__card">
                    <img src={chef3} alt="chef" />
                    <p className="homeChef__card-name">Iswan Dracho</p>
                    <p className="homeChef__card-position">Chef</p>
                </div>
            </div>
            <button className="d-btn-secondary homeChef__btn">View all</button>
        </div>
    </div>
  )
}
