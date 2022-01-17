import CountryCard from '../CountryCard'

// import CountryListItem from '../CountryListItem'

import './index.css'

const StateTable = props => {
  const getArrayOfObjects = (fetchedDetails, statesList) => {
    const list1 = []
    const keyNames = Object.keys(fetchedDetails)

    keyNames.forEach(keyName => {
      if (fetchedDetails[keyName]) {
        const {total} = fetchedDetails[keyName]
        const confirmed = total.confirmed ? total.confirmed : 0
        const deceased = total.deceased ? total.deceased : 0
        const recovered = total.recovered ? total.recovered : 0
        const tested = total.tested ? total.tested : 0
        const population = fetchedDetails[keyName].meta.population
          ? fetchedDetails[keyName].meta.population
          : 0
        list1.push({
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

    return list1
  }

  /*   const getConfirmedCases = arrayOfStates => {
    const confirmedCases = arrayOfStates.map(each => each.confirmed)
    const totalConfirmed = confirmedCases.reduce((a, b) => a + b)
    return totalConfirmed
  }

  const getActiveCases = arrayOfStates => {
    const activeCases = arrayOfStates.map(each => each.active)
    const totalActive = activeCases.reduce((a, b) => a + b)
    return totalActive
  }

 / const getRecoveredCases = arrayOfStates => {
    const recovered = arrayOfStates.map(each => each.recovered)
    const totalRecovered = recovered.reduce((a, b) => a + b)
    return totalRecovered
  }

 // const getDeceasedCases = arrayOfStates => {
    const deceasedCases = arrayOfStates.map(each => each.each.deceased)
    const totalDeceased = deceasedCases.reduce((a, b) => a + b)
    return totalDeceased
  } */

  const {fetchedDetails, statesList} = props

  const arrayOfStates = getArrayOfObjects(fetchedDetails, statesList)

  console.log(arrayOfStates)

  /* const totalConfirmed = getConfirmedCases(arrayOfStates)
  const totalActiveCases = getActiveCases(arrayOfStates)
  const totalRecoveredCases = getRecoveredCases(arrayOfStates)
  const totalDeceasedCases = getDeceasedCases(arrayOfStates) */

  return (
    <div className="state-wise-data-container">
      <div className="total-cases-list-container">
        <CountryCard
        /* confirmed={totalConfirmed}
          recovered={totalRecoveredCases}
          deceased={totalDeceasedCases}
          active={totalActiveCases} */
        />
      </div>
    </div>
  )
}

export default StateTable
