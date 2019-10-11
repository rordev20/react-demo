import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code">
          </i> Project Logo Here
        </Link>
      </h1>
      <form className="example serach-form" action="">
        <input type="text" name="search2" className="form-control"></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
      <ul>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;