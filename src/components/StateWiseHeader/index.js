import {FcGenericSortingAsc, FcGenericSortingDesc} from 'react-icons/fc'
import './index.css'

const StateWiseHeader = () => {
  const onClickDescendingButton = () => {}

  const onClickAscendingButton = () => {}

  return (
    <div className="state-table-header">
      <div className="state-or-ut-icon">
        <p className="state-or-ut-heading">State/UT</p>
        <button type="button" className="order-buttons">
          <FcGenericSortingAsc
            className="sort-icons"
            onClick={onClickAscendingButton}
          />
        </button>
        <button type="button" className="order-buttons">
          <FcGenericSortingDesc
            className="sort-icons"
            onClick={onClickDescendingButton}
          />
        </button>
      </div>
      <ul className="cases-table-headings">
        <li className="table-heading1">Confirmed</li>
        <li className="table-heading1">Active</li>
        <li className="table-heading1">Recovered</li>
        <li className="table-heading1">Deceased</li>
        <li className="table-heading1">Population</li>
      </ul>
    </div>
  )
}

export default StateWiseHeader
