import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {AiFillCloseCircle} from 'react-icons/ai'
import Header from '../Header'
import DistrictItem from '../DistrictItem'

import BarGraphs from '../BarGraphs'

import Footer from '../Footer'
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

class SpecificState extends Component {
  state = {
    specificStateList: [],
    topDistrictsArray: [],
    apiStatus: apiStatusConstants.initial,
    districtsCasesCard: 'districtsConfirmed',
    isNavContent: true,
    standardList: [],
    isInitialCases: true,
  }

  componentDidMount() {
    this.getSpecificStateData()
  }

  onClickCloseButton = () => {
    this.setState(prevState => ({isNavContent: !prevState.isNavContent}))
  }

  showOrHideNavContent = () => {
    this.setState(prevState => ({isNavContent: !prevState.isNavContent}))
  }

  renderDeceasedCases = () => {
    const {standardList} = this.state
    const finalList3 = standardList.map(each => ({
      name: each.name,
      number: each.districtsDeceased,
    }))
    return finalList3
  }

  renderRecoveredCases = () => {
    const {standardList} = this.state
    const finalList2 = standardList.map(each => ({
      name: each.name,
      number: each.districtsRecovered,
    }))
    return finalList2
  }

  renderActiveCases = () => {
    const {standardList} = this.state
    const finalList1 = standardList.map(each => ({
      name: each.name,
      number: each.districtsActive,
    }))
    return finalList1
  }

  renderConfirmedCases = () => {
    const {standardList} = this.state
    const finalList = standardList.map(each => ({
      name: each.name,
      number: each.districtsConfirmed,
    }))
    return finalList
  }

  getFilteredDataAccToVariable = () => {
    const {districtsCasesCard} = this.state

    switch (true) {
      case districtsCasesCard === 'districtsConfirmed':
        return this.renderConfirmedCases()

      case districtsCasesCard === 'districtsActive':
        return this.renderActiveCases()

      case districtsCasesCard === 'districtsRecovered':
        return this.renderRecoveredCases()

      case districtsCasesCard === 'districtsDeceased':
        return this.renderDeceasedCases()

      default:
        return null
    }
  }

  renderFinalDistrictsData = () => {
    const updatedList = this.getFilteredDataAccToVariable()
    console.log(updatedList)

    updatedList.sort((a, b) => {
      if (a.number > b.number) {
        return -1
      }
      if (a.number < b.number) {
        return 1
      }
      return 0
    })
    this.setState({topDistrictsArray: updatedList})
  }

  onClickConfirmedCard = () => {
    this.setState(
      {districtsCasesCard: 'districtsConfirmed', isInitialCases: false},
      this.renderFinalDistrictsData,
    )
  }

  onClickActiveCard = () => {
    this.setState(
      {districtsCasesCard: 'districtsActive', isInitialCases: false},
      this.renderFinalDistrictsData,
    )
  }

  onClickRecoveredCard = () => {
    this.setState(
      {districtsCasesCard: 'districtsRecovered', isInitialCases: false},
      this.renderFinalDistrictsData,
    )
  }

  onClickDeceasedCard = () => {
    this.setState(
      {districtsCasesCard: 'districtsDeceased', isInitialCases: false},
      this.renderFinalDistrictsData,
    )
  }

  getInitialDescendingOrderList = updatedList4 => {
    updatedList4.sort((a, b) => {
      if (a.number > b.number) {
        return -1
      }
      if (a.number < b.number) {
        return 1
      }
      return 0
    })

    return updatedList4
  }

  renderInitialCases = () => {
    const {standardList} = this.state

    const updatedList4 = standardList.map(each => ({
      name: each.name,
      number: each.districtsConfirmed,
    }))

    const initialDescendingOrderList = this.getInitialDescendingOrderList(
      updatedList4,
    )

    return (
      <ul className="initial-ul-container" testid="topDistrictsUnorderedList">
        {initialDescendingOrderList.map(each => (
          <li className="initial-list-item" key={each.name}>
            <p className="initial-count">{each.number}</p>
            <h1 className="initial-name">{each.name}</h1>
          </li>
        ))}
      </ul>
    )
  }

  getSpecificStateData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'

    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      const keyNames = Object.keys(data[stateCode])

      const list2 = []
      const list1 = []

      keyNames.forEach(keyName => {
        if (data[stateCode]) {
          const {total} = data[stateCode]
          const confirmed = total.confirmed ? total.confirmed : 0
          const recovered = total.recovered ? total.recovered : 0
          const tested = total.tested ? total.tested : 0
          const deceased = total.deceased ? total.deceased : 0
          const lastUpdated = data[stateCode].meta.last_updated

          const findingName = statesList.find(
            each => each.state_code === stateCode,
          )

          list2.push({
            stateCode: keyName,
            name:
              findingName !== undefined ? findingName.state_name : 'Unknown',
            confirmed,
            deceased,
            recovered,
            tested,
            lastUpdated,
            active: confirmed - (deceased + recovered),
          })
        }
      })

      const Names = Object.keys(data[stateCode].districts)

      Names.forEach(name => {
        const districtsConfirmed = data[stateCode].districts[name].total
          .confirmed
          ? data[stateCode].districts[name].total.confirmed
          : 0

        const districtsRecovered = data[stateCode].districts[name].total
          .recovered
          ? data[stateCode].districts[name].total.recovered
          : 0
        const districtsDeceased = data[stateCode].districts[name].total.deceased
          ? data[stateCode].districts[name].total.deceased
          : 0

        list1.push({
          name,
          districtsConfirmed,
          districtsRecovered,
          districtsDeceased,
          districtsActive:
            districtsConfirmed - (districtsRecovered + districtsDeceased),
        })
      })

      this.setState({
        specificStateList: list2,
        topDistrictsArray: list1,
        standardList: list1,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  getChangingColor = () => {
    const {districtsCasesCard} = this.state
    let classNames = ''
    switch (true) {
      case districtsCasesCard === 'districtsConfirmed':
        classNames = 'confirmed-cases-class-name'
        break
      case districtsCasesCard === 'districtsRecovered':
        classNames = 'recovered-cases-class-name'
        break
      case districtsCasesCard === 'districtsDeceased':
        classNames = 'deceased-cases-class-name'
        break
      case districtsCasesCard === 'districtsActive':
        classNames = 'active-cases-class-name'
        break
      default:
        return null
    }
    return classNames
  }

  renderSuccessView() {
    const {
      specificStateList,

      districtsCasesCard,

      isNavContent,

      topDistrictsArray,
      isInitialCases,
    } = this.state
    const {
      name,
      lastUpdated,
      tested,
      recovered,
      active,
      confirmed,
      deceased,
    } = specificStateList[0]

    console.log(topDistrictsArray)

    const changingColor = this.getChangingColor()

    return (
      <div className="specific-state-App-container">
        <Header showOrHideNavContent={this.showOrHideNavContent} />
        <div>
          {isNavContent ? (
            ''
          ) : (
            <div className="nav-bar-mobile-container">
              <div classNme="nav-items-container">
                <Link to="/" className="nav-link">
                  <p className="nav-mobile-home-text">Home</p>
                </Link>
                <Link to="/about" className="nav-link">
                  <p className="nav-mobile-home-text">About</p>
                </Link>
              </div>
              <button
                type="button"
                className="close-button-mobile"
                onClick={this.onclickCloseButton}
              >
                <AiFillCloseCircle />
              </button>
            </div>
          )}
        </div>
        <div className="specific-state-container">
          <div className="name-tested-count-container">
            <div className="name-last-updated-container">
              <div className="name-container">
                <h1 className="specific-state-name">{name}</h1>
              </div>
              <p className="last-updated-date">Last updated on {lastUpdated}</p>
            </div>
            <div className="tested-counter">
              <p className="tested-heading">Tested</p>
              <p className="tested-count">{tested}</p>
            </div>
          </div>
          <div
            className="specific-total-cases-container"
            testid="lineChartsContainer"
          >
            <button
              type="button"
              className="container-btn"
              onClick={this.onClickConfirmedCard}
              testid="stateSpecificConfirmedCasesContainer"
            >
              <div className="specific-confirmed-container">
                <p className="specific-state-confirmed-heading">Confirmed</p>
                <div className="confirmed-image">
                  <img
                    src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1636638667/Vectorright_1_jj48g9.png"
                    alt="state specific confirmed cases pic"
                  />
                </div>
                <p className="specific-state-confirmed-count">{confirmed}</p>
              </div>
            </button>

            <button
              type="button"
              className="container-btn"
              onClick={this.onClickActiveCard}
              testid="stateSpecificActiveCasesContainer"
            >
              <div className="specific-active-container">
                <p className="specific-state-active-heading">Active</p>
                <img
                  src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1636638409/protection_1active_yjy72v.png"
                  alt="state specific active cases pic"
                />
                <p className="specific-state-active-count">{active}</p>
              </div>
            </button>
            <button
              type="button"
              className="container-btn"
              onClick={this.onClickRecoveredCard}
              testid="stateSpecificRecoveredCasesContainer"
            >
              <div className="specific-state-recovered-container">
                <p className="specific-state-recovered-heading">Recovered</p>
                <img
                  src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1636639291/recovered_1_glek4z.png"
                  alt="state specific recovered cases pic"
                />
                <p className="specific-state-recovered-count">{recovered}</p>
              </div>
            </button>

            <button
              type="button"
              className="container-btn"
              onClick={this.onClickDeceasedCard}
              testid="stateSpecificDeceasedCasesContainer"
            >
              <div className="specific-state-deceased-container">
                <p className="specific-state-deceased-heading">Deceased</p>
                <img
                  src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1636639364/breathing_1_hst8zn.png"
                  alt="state specific deceased cases pic"
                />
                <p className="specific-state-deceased-count">{deceased}</p>
              </div>
            </button>
          </div>
          <div className="top-districts">
            <h1 className={changingColor}>Top Districts</h1>
            {isInitialCases ? (
              this.renderInitialCases()
            ) : (
              <ul className="districts-list" testid="topDistrictsUnorderedList">
                {topDistrictsArray.map(each => (
                  <DistrictItem key={each.name} districtDetails={each} />
                ))}
              </ul>
            )}
          </div>

          <div className="bar-graphs-container">
            <BarGraphs districtsCasesCard={districtsCasesCard} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  renderFailureView = () => (
    <div className="failure-container-specific">
      <img
        src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1637234267/Group_7485_vqh3vg.png"
        className="failed-img"
        alt="failure view"
      />
      <h1>PAGE NOT FOUND</h1>
      <p className="failure-specific-text">
        We&aposre sorry, the page you requested could not be found please go
        back to the home page
      </p>
      <button type="button" className="failure-button">
        Home
      </button>
    </div>
  )

  renderProgressView = () => (
    <div className="covid-loader-container" testid="stateDetailsLoader">
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
        return this.renderProgressView()
      default:
        return null
    }
  }

  render() {
    return this.renderViews()
  }
}

export default SpecificState
