import {Link} from 'react-router-dom'

import './index.css'

const Header = props => {
  const {showOrHideNavContent} = props

  const onClickMobileHomeButton = () => {
    showOrHideNavContent()
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
    </nav>
  )
}

export default Header
