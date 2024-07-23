import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeWelcome from '../components/HomeWelcome'
import HomeMenu from '../components/HomeMenu'
import HomeReservation from '../components/HomeReservation'
import HomeChef from '../components/HomeChef'
import EmptySection from '../components/EmptySection'
import HomeSchedule from '../components/HomeSchedule'
import Header from '../components/Header'
import Footer from "../components/Footer"

function HomePage() {
  return (
    <>
    <Header/>
      <main>
        <HomeHero/>
        <HomeWelcome/>
        <HomeMenu/>
        <HomeReservation/>
        <HomeChef/>
        {/* <EmptySection/> */}
        <HomeSchedule/>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage