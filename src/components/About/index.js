import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Footer from '../Footer'

import AboutItem from '../AboutItem'
import './index.css'

class About extends Component {
  state = {
    aboutData: [],
    isAboutLoader: true,
  }

  componentDidMount() {
    this.getAboutData()
  }

  getAboutData = async () => {
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

    this.setState({aboutData: formattedData, isAboutLoader: false})
  }

  render() {
    const {isAboutLoader, aboutData} = this.state
    // console.log(aboutData)
    return (
      <div className="about-container">
        <div className="responsive-about-container">
          <h1 className="about-route-heading">About</h1>
          <p className="about-route-text">Last update on march 28th 2021.</p>
          <p className="about-route-vaccine-distribution-heading">
            COVID-19
            <span className="vaccine-about-route-text">
              vaccines be ready for distribution
            </span>
          </p>

          {isAboutLoader ? (
            <div testid="aboutRouteLoader">
              <Loader type="TailSpin" height={50} width={50} color="#00bfff" />
            </div>
          ) : (
            <ul className="about-list-container">
              {aboutData.map(each => (
                <AboutItem key={each.qno} questionDetails={each} />
              ))}
            </ul>
          )}
        </div>
        <Footer />
      </div>
    )
  }
}

export default About
