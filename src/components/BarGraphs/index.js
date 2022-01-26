import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import {XAxis, Legend, Tooltip, BarChart, Bar} from 'recharts'

import ConfirmedLineChart from '../ConfirmedLineChart'

import ActiveLineChart from '../ActiveLineChart'

import RecoveredLineChart from '../RecoveredLineChart'

import DeceasedLineChart from '../DeceasedLineChart'

import TestedLineChart from '../TestedLineChart'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class BarGraphs extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    confirmedBarData: [],
    activeBarData: [],
    recoveredBarData: [],
    deceasedBarData: [],
    testedBarData: [],
  }

  componentDidMount() {
    this.getSateWiseGraphsData()
  }

  getSateWiseGraphsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {stateCode} = params

    const apiUrl = 'https://apis.ccbp.in/covid19-timelines-data'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const jsonData = await response.json()

    if (response.ok === true) {
      const datesArray = Object.keys(jsonData[stateCode].dates)

      const confirmedBarGraphData = datesArray.map(date => ({
        resultDate: date,
        count: jsonData[stateCode].dates[date].total.confirmed,
      }))

      const latestUpdatedConfirmedBarData = confirmedBarGraphData.splice(
        confirmedBarGraphData.length - 10,
        confirmedBarGraphData.length,
      )

      const recoveredBarGraphData = datesArray.map(date => ({
        resultDate: date,
        count: jsonData[stateCode].dates[date].total.recovered,
      }))

      const latestUpdatedRecoveredBarGraphData = recoveredBarGraphData.splice(
        recoveredBarGraphData.length - 10,
        recoveredBarGraphData.length,
      )

      const deceasedBarGraphData = datesArray.map(date => ({
        resultDate: date,
        count: jsonData[stateCode].dates[date].total.deceased,
      }))

      const latestUpdatedDeceasedBarGraphsData = deceasedBarGraphData.splice(
        deceasedBarGraphData.length - 10,
        deceasedBarGraphData.length,
      )

      const testedBarGraphData = datesArray.map(date => ({
        resultDate: date,
        count: jsonData[stateCode].dates[date].total.tested,
      }))

      const latestUpdatedTestedBarGraphsData = testedBarGraphData.splice(
        testedBarGraphData.length - 10,

        testedBarGraphData.length,
      )

      /* const vaccineData = datesArray.map(date => ({
        resultDate: date,
        count:
          jsonData[stateCode].dates[date].total.vaccinated1 +
          jsonData[stateCode].dates[date].total.vaccinated2,
      }))

      /* const latestUpdatedVaccinatedData = vaccineData.splice(
        vaccineData.length - 10,
        vaccineData.length,
      )
      */
      const activeBarGraphData = datesArray.map(date => ({
        resultDate: date,
        count:
          jsonData[stateCode].dates[date].total.confirmed -
          (jsonData[stateCode].dates[date].total.recovered +
            jsonData[stateCode].dates[date].total.deceased),
      }))

      const latestUpdatedActiveBarGraphsData = activeBarGraphData.splice(
        activeBarGraphData.length - 10,
        activeBarGraphData.length,
      )

      this.setState({
        apiStatus: apiStatusConstants.success,
        confirmedBarData: latestUpdatedConfirmedBarData,
        activeBarData: latestUpdatedActiveBarGraphsData,
        recoveredBarData: latestUpdatedRecoveredBarGraphData,
        deceasedBarData: latestUpdatedDeceasedBarGraphsData,
        testedBarData: latestUpdatedTestedBarGraphsData,
        // vaccineBarData: latestUpdatedVaccinatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderBarGraphData = () => {
    const {confirmedBarData} = this.state

    const dataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }

    return (
      <>
        <div className="bar-graph-container">
          <BarChart
            width={800}
            height={450}
            data={confirmedBarData}
            margin={{
              top: 5,
            }}
          >
            <XAxis
              tick={{
                stroke: '#9A0E31',
                strokeWidth: 0.5,
                fontSize: 15,
                fontFamily: 'Roboto',
              }}
              dataKey="resultDate"
            />

            <Legend
              wrapperStyle={{
                paddingTop: 20,
                textAlign: 'center',
                fontSize: 12,
                color: '#9A0E31',
                fontFamily: 'Roboto',
              }}
            />
            <Tooltip />
            <Bar
              tickFormatter={dataFormatter}
              dataKey="count"
              fill="#9A0E31"
              name="count"
              radius={[10, 10, 0, 0]}
              label={{
                position: 'top',
                color: '#9A0E31',
                stroke: '#9A0E31',
              }}
            />
          </BarChart>
        </div>

        <div className="bar-chart-mobile-container">
          <BarChart width={300} height={220} data={confirmedBarData}>
            <XAxis
              dataKey="resultDate"
              tick={{
                stroke: '#9A0E31',
                strokeWidth: 0.5,
                fontSize: 15,
                fontFamily: 'Roboto',
              }}
            />

            <Legend
              wrapperStyle={{
                paddingTop: 20,
                textAlign: 'center',
                fontSize: 12,
                color: '#9A0E31',
                fontFamily: 'Roboto',
              }}
            />
            <Tooltip />
            <Bar
              dataKey="count"
              fill="#9A0E31"
              className="bar"
              label={{position: 'top', color: 'white', stroke: '#9A0E31'}}
            />
          </BarChart>
        </div>
      </>
    )
  }

  renderSpreadTrendsData = () => {
    const {
      confirmedBarData,
      deceasedBarData,
      recoveredBarData,
      activeBarData,
      testedBarData,
    } = this.state
    return (
      <div className="daily-spread-trends-container">
        <h1 className="spread-trends-heading">Daily Spread Trends</h1>

        <div testid="lineChartsContainer">
          <ConfirmedLineChart confirmedBarData={confirmedBarData} />
          <ActiveLineChart activeBarData={activeBarData} />
          <RecoveredLineChart recoveredBarData={recoveredBarData} />
          <DeceasedLineChart deceasedBarData={deceasedBarData} />
          <TestedLineChart testedBarData={testedBarData} />
        </div>
      </div>
    )
  }

  renderSuccessView = () => (
    <div>
      {this.renderBarGraphData()}
      {this.renderSpreadTrendsData()}
    </div>
  )

  renderFailureView = () => (
    <div className="failure-graph-data">
      <img
        src="https://res.cloudinary.com/dxv46yb6u/image/upload/v1637234267/Group_7485_vqh3vg.png"
        className="failed-img"
        alt="failure view"
      />
      <h1 className="failure-heading">PAGE NOT FOUND</h1>
      <p className="failure-graph-text">
        We&aposre sorry, the page you requested could not be found please go
        back to the home page
      </p>
      <button type="button" className="failure-button">
        Home
      </button>
    </div>
  )

  renderInProgressView = () => (
    <div className="covid-loader-container" testid="timelinesDataLoader">
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

export default withRouter(BarGraphs)
