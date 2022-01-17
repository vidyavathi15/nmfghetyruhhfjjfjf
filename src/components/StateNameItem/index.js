import {BiChevronRightSquare} from 'react-icons/bi'

import './index.css'

const StateNameItem = props => {
  const {stateDetails} = props

  const {stateName, stateCode} = stateDetails

  return (
    <li className="state-list-item">
      <h1 className="state-list-item-name">{stateName}</h1>

      <div className="state-list-item-code">
        <p className="state-code">{stateCode}</p>
        <BiChevronRightSquare className="right-arrow" />
      </div>
    </li>
  )
}

export default StateNameItem
