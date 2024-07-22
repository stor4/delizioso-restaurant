import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import './scss/main.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/about",
      element: <AboutPage/>
    }
  ])

  return (
    <div className='page'>
      <Header/>
        <RouterProvider router={router}/>
      <Footer/>
    </div>
  )
}

export default App
