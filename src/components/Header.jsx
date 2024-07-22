import React from 'react'
import logo from '../assets/logo.svg'
import HeaderCart from './HeaderCart'
import HeaderUser from './HeaderUser'
import burger from '../assets/burger_btn.svg'

function Header() {
  return (
    <div className='header'>
        <div className="container header__container">
            <div className="header__logo">
                <img src={logo} alt="logo" />

            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <a className='header__link' href="/">Home</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Menu</a>
                    </li>
                    <li>
                        <a className='header__link' href="/about">About us</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Order online</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Reservation</a>
                    </li>
                    <li>
                        <a className='header__link' href="#">Contact us</a>
                    </li>
                </ul>
            </nav>
            <div className="header__user">
                <HeaderCart/>
                <HeaderUser/>
                <button className='header__burger-btn'>
                    <img src={burger} alt="menu" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header