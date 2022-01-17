import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="title-container">
      <Link to="/" className="title-link">
        <h1 className="covid-19-heading">
          COVID19
          <span className="india-heading">INDIA</span>
        </h1>
      </Link>
    </div>
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

export default Header
