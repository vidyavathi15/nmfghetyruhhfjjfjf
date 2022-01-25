import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import StateItem from '../StateItem'
import './index.css'

const StateWiseDetails = props => {
  const {countryData, changeToAscendingOrder, changeToDescendingOrder} = props
  const onClickDescendingButton = () => {
    changeToDescendingOrder()
  }

  const onClickAscendingButton = () => {
    changeToAscendingOrder()
  }

  return (
    <div className="state-table-header" testid="stateWiseCovidDataTable">
      <div className="state-name-icon-container">
        <div className="state-or-ut-icon">
          <p className="state-or-ut-heading">States/UT</p>
          <button
            type="button"
            className="order-buttons"
            testid="ascendingSort"
            onClick={onClickAscendingButton}
          >
            <FcGenericSortingAsc className="sort-icons" />
          </button>
          <button
            type="button"
            className="order-buttons"
            testid="descendingSort"
            onClick={onClickDescendingButton}
          >
            <FcGenericSortingDesc className="sort-icons" />
          </button>
        </div>

        <p className="table-heading1">Confirmed</p>
        <p className="table-heading1">Active</p>
        <p className="table-heading1">Recovered</p>
        <p className="table-heading1">Deceased</p>
        <p className="table-heading1">Population</p>
      </div>
      <hr />

      <ul>
        {countryData.map(each => (
          <StateItem key={each.stateCode} stateDetails={each} />
        ))}
      </ul>
    </div>
  )
}

export default StateWiseDetails
