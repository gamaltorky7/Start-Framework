import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Navbar() {




  return <nav className="navbar navbar-expand-lg navbar-light text-white py-3">
  <div className="container">
    <Link className="navbar-brand text-white fs-2 fw-bold" to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto gap-4">
        <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
}
