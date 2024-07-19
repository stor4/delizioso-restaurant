import React from 'react'
import cart from '../assets/cartIcon.svg'

function HeaderCart() {
  return (
    <div className='headerCart'>
        <div className="headerCart__container">
            <img src={cart} alt="cart" />
            <span>3</span>
        </div>
    </div>
  )
}

export default HeaderCart