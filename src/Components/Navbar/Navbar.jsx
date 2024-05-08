import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <header className="header">
            <a href="/" className="logo">Logo</a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Portfolio</a>
                <a href="/">Services</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    </div>
  )
}

export default Navbar