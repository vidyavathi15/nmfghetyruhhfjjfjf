import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const {showOrHideNavContent} = props

      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onClickMobileHomeButton = () => {
        showOrHideNavContent()
      }

      const onClickThemeButton = () => {
        toggleTheme()
      }

      return (
        <nav className="header-container">
          <Link to="/" className="title-link">
            <h1 className="covid-19-heading">
              COVID19
              <span className="india-heading">INDIA</span>
            </h1>
          </Link>
          <button
            type="button"
            className="add-button"
            onClick={onClickMobileHomeButton}
          >
            <img
              src="https://res.cloudinary.com/dfwdrrxpf/image/upload/v1642922943/add-to-queue_1_3_gpo0fh.png"
              alt="mobile-icon"
            />
          </button>
          <div className="theme-and-link-container">
            <button
              type="button"
              className="theme-button"
              onClick={onClickThemeButton}
            >
              <img className="theme-img" src={themeUrl} alt="theme" />
            </button>

            <ul className="nav-items-list">
              <li className="link-item">
                <Link to="/" className="route-link">
                  Home
                </Link>
              </li>
              <li className="link-item">
                <Link className="route-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
