import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return(
      <div>
        <ul className="navbar">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    )
  }
}

export default Header;
