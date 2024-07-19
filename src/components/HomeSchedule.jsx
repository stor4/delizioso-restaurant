import React from 'react'

function HomeSchedule() {
  return (
    <div className='homeSchedule'>
        <div className="container homeSchedule__container">
            <div className="homeSchedule__bg">
            <p className="homeSchedule__title">we are open from</p>
            <p className="homeSchedule__days">Monday-Sunday</p>
            <p className="homeSchedule__time">
                <span>Launch : Mon-Sun : 11:00am-02:00pm</span>
                <span>Dinner : sunday : 04:00pm-08:00pm</span>
                <span>04:00pm-09:00pm</span>

            </p>
            <div className="homeSchedule__btns">
                <button className="d-btn-secondary homeSchedule__order">Order now</button>
                <button className="d-btn-secondary homeSchedule__reservation">Reservation</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSchedule