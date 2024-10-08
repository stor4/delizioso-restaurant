import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './scss/main.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import ContactPage from './pages/ContactPage'
import MenuPage from './pages/MenuPage'
import ReservationPage from './pages/ReservationPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/about",
      element: <AboutPage/>
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/contact",
      element: <ContactPage/>
    },
    {
      path: "/menu",
      element: <MenuPage/>
    },
    {
      path: "/reservation",
      element: <ReservationPage/>
    },

  ])

  return (
    <div className='page'>
      {/* <Header/> */}
        <RouterProvider router={router}/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
