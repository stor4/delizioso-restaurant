import Footer from '../components/Footer'
import Header from '../components/Header'
import Map from '../components/Map'

function ContactPage() {
  return (
    <>
    <Header/>
    <main className='contactPage'>
        <div className="container contactPage__container">
            <div className="contactPage__form">
                <h1>Contact us</h1>
                <p className="contactPage__desc">We love hearing from our customers. Feel free to share your experience or ask any questions you may have.</p>
                <form action="">
                    <div className="">
                        <input placeholder='First name' className='d-input' type="text" />
                        <input placeholder='Last name'className='d-input' type="text" />
                        <input placeholder='Email address' className='d-input' type="text" />
                        <input placeholder='Subject' className='d-input' type="text" />
                    </div>
                    <textarea className='d-textarea' placeholder='Message' name="" id=""></textarea>
                    <button className="d-btn-secondary">Submit</button>
                </form>
            </div>
            <div className="contactPage__map">
                <Map/>
            </div>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default ContactPage