import {Component} from 'react'
import {AiFillCloseCircle} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'

import Header from '../Header'

import Footer from '../Footer'

import AboutItem from '../AboutItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class About extends Component {
  state = {
    aboutData: [],
    showAndHideNavContent: true,

    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getAboutData()
  }

  getAboutData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const apiUrl = 'https://apis.ccbp.in/covid19-faqs'

    const response = await fetch(apiUrl)

    const fetchedAboutData = await response.json()

    const aboutFaqsData = fetchedAboutData.faq

    const formattedData = aboutFaqsData.map(each => ({
      answer: each.answer,
      qno: each.qno,
      category: each.category,
      question: each.question,
    }))

    this.setState({
      aboutData: formattedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  onClickCloseButton = () => {
    this.setState(prevState => ({
      showAndHideNavContent: !prevState.showAndHideNavContent,
    }))
  }

  showOrHideNavContent = () => {
    this.setState(prevState => ({
      showAndHideNavContent: !prevState.showAndHideNavContent,
    }))
  }

  renderSuccessView = () => {
    const {aboutData, showAndHideNavContent} = this.state
    return (
      <div className="about-app-container">
        <Header showOrHideNavContent={this.showOrHideNavContent} />
        <div>
          {showAndHideNavContent ? (
            ''
          ) : (
            <div className="mobile-nav-content-container">
              <div className="mobile-nav-content-items">
                <Link to="/" className="link-item">
                  <p className="mobile-home-text">Home</p>
                </Link>
                <Link to="/about" className="link-item">
                  <p className="mobile-about-text">About</p>
                </Link>
              </div>

              <button
                type="button"
                className="close-button"
                onClick={this.clickCloseButton}
              >
                <AiFillCloseCircle className="close-icon" />
              </button>
            </div>
          )}
        </div>
        <div className="about-content">
          <h1 className="about-heading">About</h1>
          <p className="last-update">
            Last update on Last update on march 28th 2021.
          </p>
          <p className="distribution-para-about">
            COVID-19 vaccines be ready for distribution
          </p>

          <ul className="faqs-list-container" testid="faqsUnorderedList">
            {aboutData.map(each => (
              <AboutItem key={each.qno} questionDetails={each} />
            ))}
          </ul>
        </div>

        <Footer />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-home-container">
      <img
        className="failure-image-about"
        src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1637234267/Group_7485_vqh3vg.png"
        alt="failure view`"
      />
      <h1 className="failure-home-heading-about">PAGE NOT FOUND</h1>
      <p className="failure-home-text-about">
        we’re sorry, the page you requested could not be found Please go back to
        the homepage
      </p>
      <button type="button" className="about-failure-btn">
        Home
      </button>
    </div>
  )

  renderInProgressView = () => (
    <div className="covid-loader-container" testid="aboutRouteLoader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderInProgressView()
      default:
        return null
    }
  }

  render() {
    return this.renderView()
  }
}

export default About
