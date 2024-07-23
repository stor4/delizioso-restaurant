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
