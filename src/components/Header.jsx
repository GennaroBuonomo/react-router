import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
  <header>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <ul className="list-unstyled d-flex list-decoration">
            <li className="me-3">
              <NavLink to="/" className="text-decoration-none">HomePage</NavLink>
            </li>
             <li className="me-3">
              <NavLink to="/about-us" className="text-decoration-none">chi Siamo</NavLink>
            </li>
             <li className="me-3">
              <NavLink to="/products" className="text-decoration-none">Prodotti</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
