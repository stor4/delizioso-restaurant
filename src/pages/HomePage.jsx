import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeWelcome from '../components/HomeWelcome'
import HomeMenu from '../components/HomeMenu'
import HomeReservation from '../components/HomeReservation'
import HomeChef from '../components/HomeChef'
import EmptySection from '../components/EmptySection'
import HomeSchedule from '../components/HomeSchedule'

function HomePage() {
  return (
    <main>
        <HomeHero/>
        <HomeWelcome/>
        <HomeMenu/>
        <HomeReservation/>
        <HomeChef/>
        {/* <EmptySection/> */}
        <HomeSchedule/>
    </main>
  )
}

export default HomePage