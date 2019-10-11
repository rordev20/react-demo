import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html">
          <i className="fas fa-code">
          </i> Project Logo Here
        </a>
      </h1>
      <form className="example serach-form" action="">
        <input type="text" name="search2" className="form-control"></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>

    </nav>
  )
}

export default Navbar;