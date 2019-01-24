import React from 'react'
import { Link } from 'gatsby'

const hover = dataDropdown => {
  const parent = document.querySelector(`.nav--item.nav--item__${dataDropdown}`)
  const dropdown = document.querySelector(`.nav--dropdown__${dataDropdown}`)

  dropdown.classList.add('open')

  if (dropdown.getAttribute('aria-hidden') === true) {
    dropdown.setAttribute('aria-hidden', 'false')
  } else {
    dropdown.setAttribute('aria-hidden', 'false')
  }

  dropdown.addEventListener('mouseenter', () => {
    console.log('enter')
    parent.classList.add('active')
    dropdown.classList.add('open')
  })

  dropdown.addEventListener('mouseleave', () => {
    dropdown.setAttribute('aria-hidden', 'true')
    dropdown.classList.remove('open')
    parent.classList.remove('active')
  })
}

const dehover = dataDropdown => {
  const parent = document.querySelector(`.nav--item.nav--item__${dataDropdown}`)
  const dropdown = document.querySelector(`.nav--dropdown__${dataDropdown}`)
  parent.classList.remove('active')
  dropdown.classList.remove('open')
  dropdown.setAttribute('aria-hidden', 'true')
}

const Header = () => (
  <header className="header">
    <div className="container flex-header">
      <div className="header--logo">
        <Link to="/">
          <img src="/images/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="header--navbar">
        <span className="login-status">
          <span id="js-headerLoginStatus">
            <span className="" id="js-headerLogin">
              <Link to="/register">Create an account »</Link> or{' '}
              <Link to="/login">login »</Link>
            </span>
            <span className="hidden" id="js-headerLogout">
              Welcome <span id="js-username" />!{' '}
              <button id="js-headerLogoutButton" name="logout">
                Logout »
              </button>
            </span>
          </span>
        </span>
        <ul className="nav">
          <li
            className=" nav--item nav--item__sight"
            data-dropdown="sight"
            aria-haspopup="true"
            role="menuitem"
            aria-owns="visionMenu"
            onMouseEnter={() => hover('sight')}
            onMouseLeave={() => dehover('sight')}
          >
            <Link className="nav--wrap" to="/vision">
              <svg
                className="nav--icon nav--icon__sight"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="21"
                viewBox="0 0 40 21"
              >
                <g fillRule="evenodd">
                  <path d="M20.588 11.667c-.325 0-.588-.26-.588-.584 0-.322.263-.583.588-.583.326 0 .588.26.588.583 0 .323-.262.584-.588.584M20 8.167c-1.3 0-2.353 1.044-2.353 2.333 0 1.29 1.054 2.333 2.353 2.333 1.3 0 2.353-1.044 2.353-2.333 0-1.29-1.054-2.333-2.353-2.333" />
                  <path d="M20 16.775c-3.47 0-6.286-2.795-6.286-6.243 0-3.448 2.815-6.244 6.286-6.244 3.47 0 6.286 2.796 6.286 6.244S23.47 16.775 20 16.775m19.04-8C34.855 5.365 26.15.065 20 .065c-6.15 0-14.856 5.3-19.04 8.712-1.302 1.062-1.276 3.045.055 4.072C5.22 16.09 13.875 21 20 21s14.78-4.91 18.985-8.152c1.33-1.027 1.357-3.01.054-4.072" />
                </g>
              </svg>
              <span className="nav--link">Vision</span>
            </Link>
          </li>
          <li
            className=" nav--item nav--item__audio"
            data-dropdown="audio"
            aria-haspopup="true"
            role="menuitem"
            aria-owns="soundMenu"
            onMouseEnter={() => hover('audio')}
            onMouseLeave={() => dehover('audio')}
          >
            <Link className="nav--wrap" to="/sound">
              <svg
                className="nav--icon nav--icon__audio"
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="29"
                viewBox="0 0 33 29"
              >
                <g fillRule="evenodd">
                  <path d="M6.027 7.945H1.84C.823 7.945 0 8.775 0 9.8v8.442c0 1.024.824 1.854 1.84 1.854h4.187l8.22 2.883c1.196.416 2.444-.478 2.444-1.754V6.816c0-1.277-1.246-2.17-2.442-1.753l-8.22 2.882zm19.937 6.075c0-3.78-1.74-7.85-5.564-7.85-1.024 0-1.855.836-1.855 1.87 0 1.03.83 1.868 1.855 1.868 1.265 0 1.855 2.454 1.855 4.113 0 1.66-.59 4.114-1.855 4.114-1.024 0-1.855.837-1.855 1.87 0 1.032.83 1.87 1.855 1.87 3.823 0 5.564-4.07 5.564-7.852" />
                  <path d="M22.66 0c-1.024 0-1.854.837-1.854 1.87 0 1.032.83 1.87 1.854 1.87 4.167 0 5.68 6.147 5.68 10.28 0 4.134-1.513 10.283-5.68 10.283-1.024 0-1.854.837-1.854 1.87 0 1.03.83 1.868 1.854 1.868 6.45 0 9.39-7.265 9.39-14.02C32.05 7.27 29.11 0 22.66 0" />
                </g>
              </svg>
              <span className="nav--link">sound</span>
            </Link>
          </li>
          <li
            className=" nav--item nav--item__touch"
            data-dropdown="touch"
            aria-haspopup="true"
            role="menuitem"
            aria-owns="interactionMenu"
            onMouseEnter={() => hover('touch')}
            onMouseLeave={() => dehover('touch')}
          >
            <Link className="nav--wrap" to="/interaction">
              <svg
                className="nav--icon nav--icon__touch"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="32"
                viewBox="0 0 22 32"
              >
                <path
                  fillRule="evenodd"
                  d="M17.188 14.63v-.918c0-3.327-2.776-6.033-6.188-6.033s-6.188 2.703-6.188 6.03v.917c-.72-1.108-1.145-2.417-1.145-3.823 0-3.942 3.29-7.15 7.333-7.15s7.333 3.208 7.333 7.15c0 1.406-.424 2.715-1.145 3.822M22 11.05C22 4.957 17.065 0 11 0S0 4.957 0 11.05c0 3.79 1.91 7.14 4.813 9.13v9.978c0 1.017.82 1.842 1.833 1.842h8.708c1.013 0 1.834-.825 1.834-1.842V20.18C20.09 18.19 22 14.84 22 11.05"
                />
              </svg>
              <span className="nav--link">Interaction</span>
            </Link>
          </li>
          <li
            className=" nav--item nav--item__about"
            data-dropdown="about"
            aria-haspopup="true"
            role="menuitem"
            aria-owns="aboutMenu"
            onMouseEnter={() => hover('about')}
            onMouseLeave={() => dehover('about')}
          >
            <Link className="nav--wrap" to="/about">
              <svg
                className="nav--icon nav--icon__about"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="34"
                viewBox="0 0 23 34"
              >
                <path
                  fillRule="evenodd"
                  d="M19 24H7V4h12v20zm2.007-24H5.32c-.08 0-.16.015-.238.024C5.004.014 4.926 0 4.845 0H1.993C.893 0 0 .907 0 2.026v24.152c0 1.12.893 2.026 1.993 2.026h2.852c.08 0 .16-.015.237-.025.08.01.157.02.238.02h1.334v3.77c0 .892.575 1.68 1.415 1.94.833.256 1.743-.07 2.23-.815l.25-.378.25.376c.374.572 1.002.9 1.655.9.193 0 .387-.03.58-.088.84-.26 1.414-1.047 1.414-1.94V28.2h6.556c1.1 0 1.993-.907 1.993-2.026V2.027C23 .907 22.105 0 21.005 0z"
                />
              </svg>
              <span className="nav--link">About</span>
            </Link>
          </li>
          <li
            className=" nav--item nav--item__badge"
            data-dropdown="badge"
            aria-haspopup="true"
            role="menuitem"
            aria-owns="badgesMenu"
          >
            <Link className="nav--wrap" to="/badge">
              <svg
                className="nav--icon nav--icon__badge"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path
                  fillRule="evenodd"
                  d="M14 4C8.486 4 4 8.486 4 14s4.486 10 10 10 10-4.486 10-10S19.514 4 14 4m0 24C6.28 28 0 21.72 0 14S6.28 0 14 0s14 6.28 14 14-6.28 14-14 14"
                />
              </svg>
              <span className="nav--link">Badges</span>
            </Link>
          </li>
          <li
            className=" nav--item nav--item__settings"
            data-dropdown="settings"
            aria-haspopup="true"
            role="menuitem"
            aria-owns="settingsMenu"
          >
            <Link
              className="nav--wrap hidden"
              id="js-settingsAuth"
              to="/settings"
            >
              <img
                className="nav--icon__settings"
                src="/user/themes/camp/images/settings.svg"
                alt="Settings Icon"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)

export default Header
