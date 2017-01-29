import React, { PropTypes } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <div>{this.props.message}</div>
        <Footer/>
      </div>
    )
  }
}

Layout.propTypes = {
  message: React.PropTypes.string.isRequired
};

export default Layout;
