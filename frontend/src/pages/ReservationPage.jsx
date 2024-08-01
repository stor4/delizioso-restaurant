import img from '../assets/reservation.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useRef, useEffect } from 'react'
import { useGetReservationDatesQuery, useGetReservationTimeQuery } from '../api'

function ReservationPage() {
    const [datesOpen, setDatesOpen] = useState(false)
    const [timesOpen, setTimesOpen] = useState(false)
    const [peopleOpen, setPeopleOpen] = useState(false)
    const [inputDate, setInputDate] = useState('Date')
    const [inputTime, setInputTime] = useState('Time')
    const [inputPeople, setInputPeople] = useState('Party size')

    const {data: dates, error: datesError, isLoading: datesLoading} = useGetReservationDatesQuery()
    const {data: times, error, timesError, isLoading: timesLoading} = useGetReservationTimeQuery(inputDate === 'Date' ? '' : inputDate)

    const dropdownRef = useRef(null)
    const buttonRef = useRef(null)

    // const dropdownClass = `reservation__dropdown-list${openDates}`

    const setDate = (item) => {
        setInputDate(item)
        setDatesOpen(!datesOpen)
    }

    const setTime = (item) => {
        setInputTime(item)
        setTimesOpen(!timesOpen)
    }

    const setPeople = (item) => {
        setInputPeople(item)
        setPeopleOpen(!peopleOpen)
    }

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && 
            !dropdownRef.current.contains(event.target) &&
            buttonRef.current &&
            !buttonRef.current.contains(event.target)
        ) {
            setDatesOpen(false)
            setTimesOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    useEffect(() => {
        console.log(times)

    }, [times])
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
                        <div ref={buttonRef} className="reservation__dropdown-btn" onClick={() => setDatesOpen(!datesOpen)}>{inputDate}</div>
                        <ul ref={dropdownRef} style={{display: datesOpen ? 'block' : 'none'}} className="reservation__dropdown-list">
                            {dates && dates?.map((item, key) => (
                                <li className='reservation__dropdown-item' key={key} onClick={() => setDate(item)}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <div ref={buttonRef} className="reservation__dropdown-btn" onClick={() => setTimesOpen(!timesOpen)}>{inputTime}</div>
                        <ul ref={dropdownRef} style={{display: timesOpen ? 'block' : 'none'}} className="reservation__dropdown-list">
                            {times && times.length > 0 ? (
                            times.map((item, key) => (
                                <li className='reservation__dropdown-item' key={key} onClick={() => setTime(item)}>{item}</li>
                            ))
                            ) : (
                                <li className='reservation__dropdown-item'>{times.length === 0 ? 'Choose date first' : 'No available slots'}</li>
                            )}
                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <div ref={buttonRef} className="reservation__dropdown-btn" onClick={() => setPeopleOpen(!peopleOpen)}>Party size</div>
                        <ul ref={dropdownRef} style={{display: peopleOpen ? 'block' : 'none'}} className="reservation__dropdown-list">
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.value)}>1-2</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.value)}>3-4</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.value)}>5-6</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.value)}>7-8</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.value)}>8+</li>
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