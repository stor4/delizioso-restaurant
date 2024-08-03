import img from '../assets/reservation.svg'
import emoji from '../assets/emoji.png'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useRef, useEffect } from 'react'
import { useGetReservationDatesQuery, useGetReservationTimeQuery, usePostReservationMutation } from '../api'

function ReservationPage() {
    const [datesOpen, setDatesOpen] = useState(false)
    const [timesOpen, setTimesOpen] = useState(false)
    const [peopleOpen, setPeopleOpen] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [inputDate, setInputDate] = useState('Date')
    const [inputTime, setInputTime] = useState('Time')
    const [inputPeople, setInputPeople] = useState('Party size')
    const [inputName, setInputName] = useState('')
    const [inputNumber, setInputNumber] = useState('')
    const [isReserved, setIsReserved] = useState(false)

    const {data: dates, error: datesError, isLoading: datesLoading} = useGetReservationDatesQuery()
    const {data: times, error, timesError, isLoading: timesLoading} = useGetReservationTimeQuery(inputDate === 'Date' ? '' : inputDate)
    const [postReservation, {data: reservationData, error: reservationError, isLoading: reservationLoading}] = usePostReservationMutation()

    const dropdownRefs = [useRef(null), useRef(null), useRef(null)];
    const buttonRefs = [useRef(null), useRef(null), useRef(null)];

    const setDate = (item) => {
        setInputDate(item)
        setDatesOpen(false)
        console.log(item)
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
        dropdownRefs.forEach((ref, index) => {
            if (ref.current && !ref.current.contains(event.target) && buttonRefs[index].current && !buttonRefs[index].current.contains(event.target)) {
                if (index === 0) setDatesOpen(false);
                if (index === 1) setTimesOpen(false);
                if (index === 2) setPeopleOpen(false);
            }
        });
    };

    const handleDisabled = () => {
        if (inputDate !== 'Date' && inputTime !== 'Time' && inputPeople !== 'Party size' && inputName.length >= 2 && inputNumber.length <= 10) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const submit = async (e) => {
        e.preventDefault()

        try {
            const result = await postReservation({
                date: inputDate,
                time: inputTime,
                people: inputPeople,
                customerPhone: inputNumber,
                customerName: inputName

            }).unwrap()

            console.log('Reservation successful:', result);
            setIsReserved(true)
        } catch (err) {
            console.error('Failed to make a reservation:', err);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    useEffect(() => {
        handleDisabled();
    }, [inputDate, inputTime, inputPeople, inputName, inputNumber]);
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
                        <div ref={buttonRefs[0]} className="reservation__dropdown-btn" onClick={() => setDatesOpen(!datesOpen)}>{inputDate}</div>
                        <ul ref={dropdownRefs[0]} style={{display: datesOpen ? 'block' : 'none'}} className="reservation__dropdown-list">
                            {dates && dates?.map((item, key) => (
                                <li className='reservation__dropdown-item' key={key} onClick={() => setDate(item)}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <div ref={buttonRefs[1]} className="reservation__dropdown-btn" onClick={() => setTimesOpen(!timesOpen)}>{inputTime}</div>
                        <ul ref={dropdownRefs[1]} style={{display: timesOpen ? 'block' : 'none'}} className="reservation__dropdown-list">
                            {times && times.length > 0 ? (
                            times.map((item, key) => (
                                <li className='reservation__dropdown-item' key={key} onClick={() => setTime(item)}>{item}</li>
                            ))
                            ) : (
                                <li className='reservation__dropdown-item'>{times && times.length === 0 ? 'Choose date first' : 'No available slots'}</li>
                            )}
                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <div ref={buttonRefs[2]} className="reservation__dropdown-btn" onClick={() => setPeopleOpen(!peopleOpen)}>{inputPeople}</div>
                        <ul ref={dropdownRefs[2]} style={{display: peopleOpen ? 'block' : 'none'}} className="reservation__dropdown-list">
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.innerText)}>1-2</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.innerText)}>3-4</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.innerText)}>5-6</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.innerText)}>7-8</li>
                            <li className='reservation__dropdown-item' onClick={(e) => setPeople(e.target.innerText)}>8+</li>
                        </ul>
                    </div>
                    <div className="reservation__dropdown">
                        <input value={inputNumber} maxLength={10} onChange={(e) => setInputNumber(e.target.value.replace(/\D/g, ''))} pattern="\d*" placeholder='Phone number' inputMode='numeric' type="text" className="d-input" />
                    </div>
                    <div className="reservation__dropdown">
                        <input value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder='Name (optional)' type="text" className="d-input" />
                    </div>
                </div>
                <button disabled={disabled}  onClick={(e) => submit(e)} className='d-btn-secondary'>Book now</button>
            </div> 
        </div>
        <div style={{display: isReserved ? 'block' : ''}} className="reservation__success">
            <div className="reservation__success-bg"></div>
            <div className="reservation__success-msg">
                <img src={emoji} alt="success" />
                <p>Your table successfuly reserved!</p>
                {reservationData && (
                    <>
                    <p>Date: {new Date(reservationData.date).toLocaleDateString("ru-RU")}</p>
                    <p>Time: {reservationData.time}</p>
                    <p>Name: {reservationData.customerName}</p>
                    <p>Phone number: {reservationData.customerPhone}</p>
                    <p>People: {reservationData.people}</p>
                    </>
                )
                }
                <button className='d-btn-primary'>Back to home page</button>
            </div>

        </div>
    </main>
    <Footer/>
    </>
  )
}

export default ReservationPage