import Footer from '../components/Footer'
import Header from '../components/Header'

function ContactPage() {
  return (
    <>
    <Header/>
    <main className='contactPage'>
        <div className="container contactPage__container">
            <div className="contactPage__form">
                <h1></h1>
                <p className="contactPage__desc"></p>
                <form action="" className="contactPage____form">
                    <div className="">
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <textarea name="" id=""></textarea>
                    <button className="d-btn-secondary">Submit</button>
                </form>
            </div>
            <div className="contactPage__map">

            </div>
        </div>
    </main>
    <Footer/>
    </>
  )
}

export default ContactPage