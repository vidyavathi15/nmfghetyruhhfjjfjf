import './index.css'

const CountryWideCasesCardGroup = props => {
  const {countryData} = props

  const getDeceasedCases = () => {
    const objectOfDeceased = countryData.map(each => each.deceased)
    const totalDeceased = objectOfDeceased.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )
    return totalDeceased
  }

  const getRecoveredCases = () => {
    const objectRecovered = countryData.map(each => each.recovered)
    const totalRecovered = objectRecovered.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )
    return totalRecovered
  }

  const getActiveCases = () => {
    const objectActive = countryData.map(each => each.active)
    const totalActive = objectActive.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )
    return totalActive
  }

  const getConfirmedCases = () => {
    const objectConfirmed = countryData.map(each => each.confirmed)
    const totalConfirmed = objectConfirmed.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    )
    return totalConfirmed
  }

  const countryWideConfirmedCases = getConfirmedCases(countryData)
  const countryWideActiveCases = getActiveCases(countryData)
  const countryWideRecoveredCases = getRecoveredCases(countryData)
  const countryWideDeceasedCases = getDeceasedCases(countryData)

  return (
    <div className="total-cases-card-container">
      <div className="confirmed-container">
        <p className="confirmed-cases-text-heading">Confirmed</p>
        <img src="" alt="" />
        <p className="confirmed-total-cases-count">
          {countryWideConfirmedCases}
        </p>
      </div>

      <div className="active-container">
        <p className="active-cases-text-heading">Active</p>
        <img src="" alt="" />
        <p className="active-total-cases-count">{countryWideActiveCases}</p>
      </div>

      <div className="recovered-container">
        <p className="recovered-cases-text-heading">Recovered</p>
        <img src="" alt="" />
        <p className="recovered-total-cases-count">
          {countryWideRecoveredCases}
        </p>
      </div>

      <div className="deceased-container">
        <p className="deceased-cases-text-heading">Deceased</p>
        <img src="" alt="" />
        <p className="deceased-total-cases-count">{countryWideDeceasedCases}</p>
      </div>
    </div>
  )
}

export default CountryWideCasesCardGroup
