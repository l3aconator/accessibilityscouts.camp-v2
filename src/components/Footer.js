import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <footer class="footer">
    <div class="container">
      <div class="flex-grid--gutters">
        <div class="col">
          <span class="copyright">
            © {new Date().getFullYear()}, Built with love by Kyle Bacon
          </span>
        </div>
        <div class="col col--custom__footer">
          <Link className="footer--link" to="/about/colophon">
            Colophon »
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
