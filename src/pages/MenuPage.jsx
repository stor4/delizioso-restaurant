import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeMenu from '../components/HomeMenu'

function MenuPage() {
  return (
    <>
        <Header/>
        <main className='menu'>
            <div className="menu__container">
                <h1>Menu</h1>
                <HomeMenu/>
            </div>  
        </main>
        <Footer/>
    </>
  )
}

export default MenuPage