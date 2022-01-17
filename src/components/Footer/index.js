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
      <VscGithubAlt className="icon-sizes" />
      <FiInstagram className="icon-sizes" />
      <FaTwitter className="icon-sizes" />
    </div>
  </div>
)

export default Footer
