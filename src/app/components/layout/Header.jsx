import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return(
      <div>
        <ul className="navbar">
          <li>Home</li>
          <li>News</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    )
  }
}

export default Header;
