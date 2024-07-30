import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import actionLogout from '../actions/actionLogout'

function HeaderUser() {
  const authState = useSelector((state) => state.auth)

  useEffect(() => {
    console.log(authState)

  }, [authState])

  const logout = () => {
    actionLogout()
    window.location.reload();
  }

  if (authState?.payload?.username) {
    return (
    <div className='headerUser'>
      <div className="headerUser__container">
        <p>Hello, {authState.payload.username}!</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
    )

  } 
  else {
    return (
      <div className='headerUser'>
          <div className="headerUser__container">
              <a href='/login' className='d-btn-primary headerUser__btn'>Log in</a>
          </div>
      </div>
    )
  }

}

export default HeaderUser