import {Component} from 'react'

import statesList from '../Home'

class SpecificState extends Component {
  state = {specificStateList: []}

  componentDidMount() {
    this.getSpecificStateData()
  }

  getStateData = data => {
    const resultList = []

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
        resultList.push({
          stateCode: keyName,
          name: statesList.find(state => state.state_code === keyName)
            .state_name,
          confirmed,
          deceased,
          recovered,
          tested,
          population,
          active: confirmed - (deceased + recovered),
        })
      }
    })
    return resultList
  }

  getSpecificStateData = async () => {
    const apiUrl = 'https://apis.ccbp.in/covid19-state-wise-data'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const formattedData = this.getStateData(data, statesList)

    this.setState({specificStateList: formattedData})
  }

  render() {
    const {specificStateList} = this.state

    console.log(specificStateList)

    return (
      <div className="specific-state-container">
        <div className="responsive-container">{}</div>
      </div>
    )
  }
}

export default SpecificState
