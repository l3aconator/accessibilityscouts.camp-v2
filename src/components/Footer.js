import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="flex-grid--gutters">
        <div className="col">
          <span className="copyright">
            © {new Date().getFullYear()}, Built with love by Kyle Bacon
          </span>
        </div>
        <div className="col col--custom__footer">
          <Link className="footer--link" to="/about/colophon">
            Colophon »
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
