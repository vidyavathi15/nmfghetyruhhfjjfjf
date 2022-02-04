import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'
import {AiFillCloseCircle} from 'react-icons/ai'

import CountryWideCasesCardGroup from '../CountryWideCasesCardGroup'

import StateWiseDetails from '../StateWiseDetails'

import Header from '../Header'
import Footer from '../Footer'

import StateNameItem from '../StateNameItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const statesList = [
  {
    state_code: 'AN',
    state_name: 'Andaman and Nicobar Islands',
  },
  {
    state_code: 'AP',
    state_name: 'Andhra Pradesh',
  },
  {
    state_code: 'AR',
    state_name: 'Arunachal Pradesh',
  },
  {
    state_code: 'AS',
    state_name: 'Assam',
  },
  {
    state_code: 'BR',
    state_name: 'Bihar',
  },
  {
    state_code: 'CH',
    state_name: 'Chandigarh',
  },
  {
    state_code: 'CT',
    state_name: 'Chhattisgarh',
  },
  {
    state_code: 'DN',
    state_name: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    state_code: 'DL',
    state_name: 'Delhi',
  },
  {
    state_code: 'GA',
    state_name: 'Goa',
  },
  {
    state_code: 'GJ',
    state_name: 'Gujarat',
  },
  {
    state_code: 'HR',
    state_name: 'Haryana',
  },
  {
    state_code: 'HP',
    state_name: 'Himachal Pradesh',
  },
  {
    state_code: 'JK',
    state_name: 'Jammu and Kashmir',
  },
  {
    state_code: 'JH',
    state_name: 'Jharkhand',
  },
  {
    state_code: 'KA',
    state_name: 'Karnataka',
  },
  {
    state_code: 'KL',
    state_name: 'Kerala',
  },
  {
    state_code: 'LA',
    state_name: 'Ladakh',
  },
  {
    state_code: 'LD',
    state_name: 'Lakshadweep',
  },
  {
    state_code: 'MH',
    state_name: 'Maharashtra',
  },
  {
    state_code: 'MP',
    state_name: 'Madhya Pradesh',
  },
  {
    state_code: 'MN',
    state_name: 'Manipur',
  },
  {
    state_code: 'ML',
    state_name: 'Meghalaya',
  },
  {
    state_code: 'MZ',
    state_name: 'Mizoram',
  },
  {
    state_code: 'NL',
    state_name: 'Nagaland',
  },
  {
    state_code: 'OR',
    state_name: 'Odisha',
  },
  {
    state_code: 'PY',
    state_name: 'Puducherry',
  },
  {
    state_code: 'PB',
    state_name: 'Punjab',
  },
  {
    state_code: 'RJ',
    state_name: 'Rajasthan',
  },
  {
    state_code: 'SK',
    state_name: 'Sikkim',
  },
  {
    state_code: 'TN',
    state_name: 'Tamil Nadu',
  },
  {
    state_code: 'TG',
    state_name: 'Telangana',
  },
  {
    state_code: 'TR',
    state_name: 'Tripura',
  },
  {
    state_code: 'UP',
    state_name: 'Uttar Pradesh',
  },
  {
    state_code: 'UT',
    state_name: 'Uttarakhand',
  },
  {
    state_code: 'WB',
    state_name: 'West Bengal',
  },
]

class Home extends Component {
  state = {
    searchInput: '',

    countryData: [],

    totalConfirmed: 0,

    totalActive: 0,

    totalRecovered: 0,

    totalDeceased: 0,

    apiStatus: apiStatusConstants.initial,
    isNavContent: true,
  }

  componentDidMount() {
    this.getCountryWiseData()
  }

  getCountryWiseData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const homeApiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const options = {
      method: 'GET',
    }

    const response = await fetch(homeApiUrl, options)

    const data = await response.json()

    // console.log(data)
    if (response.ok === true) {
      this.getSuccessView(data)
      this.setState({apiStatus: apiStatusConstants.success})
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchedResultText = countryData => {
    const {searchInput} = this.state
    const filteredList = countryData.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return filteredList
  }

  getSuccessView = data => {
    const list1 = []

    const keyNames = Object.keys(data)

    keyNames.forEach(keyName => {
      if (data[keyName]) {
        const {total} = data[keyName]

        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = data[keyName].meta.population
          ? data[keyName].meta.population
          : 0

        const findStateName = statesList.find(
          each => each.state_code === keyName,
        )

        list1.push({
          stateCode: keyName,
          name:
            findStateName !== undefined ? findStateName.state_name : 'unknown',
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })

    const totalConfirmedList = list1.map(each => each.confirmed)
    const totalConfirmed = totalConfirmedList.reduce((a, b) => a + b)

    const totalActiveList = list1.map(each => each.active)
    const totalActive = totalActiveList.reduce((a, b) => a + b)

    const totalRecoveredList = list1.map(each => each.recovered)
    const totalRecovered = totalRecoveredList.reduce((a, b) => a + b)
    const totalDeceasedList = list1.map(each => each.deceased)
    const totalDeceased = totalDeceasedList.reduce((a, b) => a + b)

    this.setState({
      totalConfirmed,
      totalActive,
      totalRecovered,
      totalDeceased,
      countryData: list1,
    })
  }

  changeToAscendingOrder = () => {
    const {countryData} = this.state

    countryData.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1
      }
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1
      }
      return 0
    })
    this.setState({countryData})
  }

  changeToDescendingOrder = () => {
    const {countryData} = this.state
    countryData.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return -1
      }
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return 1
      }
      return 0
    })

    this.setState({countryData})
  }

  onClickCloseButton = () => {
    console.log(true)

    this.setState({isNavContent: true})
  }

  showOrHideNavContent = () => {
    this.setState(prevState => ({isNavContent: !prevState.isNavContent}))
  }

  renderSuccessView = () => {
    const {
      searchInput,
      totalConfirmed,
      totalActive,
      totalRecovered,
      totalDeceased,
      countryData,
      isNavContent,
    } = this.state

    const searchedResults = this.getSearchedResultText(countryData)

    return (
      <div className="home-container">
        <Header showOrHideNavContent={this.showOrHideNavContent} />
        <div>
          {isNavContent ? (
            ''
          ) : (
            <div className="nav-bar-mobile-container">
              <ul className="nav-items-container">
                <Link to="/" className="nav-link">
                  <li className="nav-mobile-home-text">Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className="nav-mobile-home-text">About</li>
                </Link>
              </ul>
              <button
                type="button"
                className="close-button-mobile"
                onClick={this.onClickCloseButton}
              >
                <AiFillCloseCircle className="close-icon-mobile" />
              </button>
            </div>
          )}
        </div>

        <div className="responsive-container">
          <div className="search-container">
            <BsSearch className="bs-search-icon" size={30} />
            <input
              type="search"
              className="search-input"
              value={searchInput}
              placeholder="Enter the state"
              onChange={this.onChangeSearchInput}
            />
          </div>
          {searchInput === '' ? null : (
            <ul
              className="state-wise-response-list"
              testid="searchResultsUnorderedList"
            >
              {searchedResults.map(each => (
                <StateNameItem key={each.stateCode} stateDetails={each} />
              ))}
            </ul>
          )}

          <CountryWideCasesCardGroup
            totalConfirmed={totalConfirmed}
            totalActive={totalActive}
            totalRecovered={totalRecovered}
            totalDeceased={totalDeceased}
          />

          <StateWiseDetails
            countryData={countryData}
            changeToAscendingOrder={this.changeToAscendingOrder}
            changeToDescendingOrder={this.changeToDescendingOrder}
          />
        </div>
        <Footer />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-home-container">
      <img
        className="failure-image"
        src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1637234267/Group_7485_vqh3vg.png"
        alt="failure view`"
      />
      <h1 className="failure-home-heading">PAGE NOT FOUND</h1>
      <p className="failure-home-text">
        we’re sorry, the page you requested could not be found Please go back to
        the homepage
      </p>
      <button type="button" className="home-failure-btn">
        Home
      </button>
    </div>
  )

  renderInProgressView = () => (
    <div className="covid-loader-container" testid="homeRouteLoader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderViews = () => {
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
    return this.renderViews()
  }
}

export default Home
