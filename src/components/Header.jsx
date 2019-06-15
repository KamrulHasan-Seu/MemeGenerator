import React from 'react'
import mainlogo from './Trollface.png'
function Header() {
    return (
        <div className="header"> 
            <header>
            <img src={mainlogo} alt="Problem?"/>
            <p>Meme Genrator</p>
            </header>
        </div>
    )
}

export default Header
