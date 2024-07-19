import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import './scss/main.scss'

function App() {

  return (
    <div className='page'>
      <Header/>
        <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
