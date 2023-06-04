import React from 'react'

const HeaderTop = () => {
  return (
    <div className="auth-container">
        <img className='logo' src='https://media.discordapp.net/attachments/1114498895758753802/1114875158281334784/360_F_304659123_Rhav8X4m70sJ1HOBwkI1HWply1Amaxtr.png?width=450&height=450' />
        <div className='auth-links'>
        <a className="auth-link" href="#description-page">
          How To Use
        </a>
        <a className="auth-link" href="/">
          Login
        </a>
        <a className="auth-link" href="/">
          Signup
        </a>
        </div>
      </div>
  )
}

export default HeaderTop