import React from 'react'
import { Link } from 'gatsby'

const SecondaryNavigation = () => (
  <section className="secondary--navigation" role="navigation">
    <ul
      className="nav--dropdown nav--dropdown__sight"
      aria-hidden="true"
      role="menu"
      id="visionMenu"
    >
      <div className="nav--dropdown__margin">
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/vision/behind-the-scenes">
            <span className="nav--link">Behind the scenes</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/vision/color-blindness">
            <span className="nav--link">Color Blindness</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/vision/color-contrast">
            <span className="nav--link">Color Contrast</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/vision/typography">
            <span className="nav--link">Typography</span>
          </Link>
        </li>
      </div>
    </ul>

    <ul
      className="nav--dropdown nav--dropdown__audio"
      aria-hidden="true"
      role="menu"
      id="soundMenu"
    >
      <div className="nav--dropdown__margin">
        <li className=" nav--sub-item" role="menuitem">
          <Link
            className="nav--wrap"
            to="/sound/alternatives-audio-visual-content"
          >
            <span className="nav--link">
              Providing alternatives to content with audio
            </span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/sound/screen-readers">
            <span className="nav--link">Screen readers</span>
          </Link>
        </li>
      </div>
    </ul>

    <ul
      className="nav--dropdown nav--dropdown__touch"
      aria-hidden="true"
      role="menu"
      id="interactionMenu"
    >
      <div className="nav--dropdown__margin">
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/interaction/keyboard-support">
            <span className="nav--link">Keyboard support</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/interaction/non-traditional-inputs">
            <span className="nav--link">Non-traditional inputs</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/interaction/visible-interactions">
            <span className="nav--link">Visible Interactions</span>
          </Link>
        </li>
      </div>
    </ul>

    <ul
      className="nav--dropdown nav--dropdown__about"
      aria-hidden="true"
      role="menu"
      id="aboutMenu"
    >
      <div className="nav--dropdown__margin">
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/about/accessibility">
            <span className="nav--link">Accessibility</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/about/colophon">
            <span className="nav--link">Colophon</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/about/deeper-learning">
            <span className="nav--link">Deeper learning</span>
          </Link>
        </li>
        <li className=" nav--sub-item" role="menuitem">
          <Link className="nav--wrap" to="/about/personas-to-think-about">
            <span className="nav--link">Personas to think about</span>
          </Link>
        </li>
      </div>
    </ul>
  </section>
)

export default SecondaryNavigation
