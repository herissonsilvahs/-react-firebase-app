import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import brand from '../../assets/images/innovation.svg'

class Navbar extends Component {
  render() {
    return <nav className="navbar">
        <div className="container">
          <Link to="/" className="nav-brand">
            <span>TechPlan</span>
            <img src={brand} />
          </Link>
          <ul className="nav-menu inline">
            <li className="nav-item">
              <NavLink className="nav-link" to="/signin">Sign in</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </nav>;
  }
}

export default Navbar