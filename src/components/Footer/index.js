import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import {VscGithubAlt} from 'react-icons/vsc'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="covid-19-heading">
      COVID19
      <span className="india-heading">INDIA</span>
    </h1>
    <p className="footer-text">
      we stand with everyone fighting on the front lines
    </p>
    <div className="icons-container">
      <a href="https://github.com/" className="github-link">
        <VscGithubAlt className="icon-sizes" />
      </a>
      <a
        className="instagram-link"
        href="https://www.instagram.com/accounts/login/?"
      >
        <FiInstagram className="icon-sizes" />
      </a>
      <a href="https://twitter.com/i/flow/login" className="github-link">
        <FaTwitter className="icon-sizes" />
      </a>
    </div>
  </div>
)

export default Footer
