import React from 'react'
import { Link } from 'gatsby'
import '../scss/styles.scss'

import Header from './Header'
import SecondaryNavigation from './SecondaryNavigation'
import Footer from './Footer'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    return (
      <div style={{ marginLeft: `auto`, marginRight: `auto` }}>
        <Header />
        <SecondaryNavigation />
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
