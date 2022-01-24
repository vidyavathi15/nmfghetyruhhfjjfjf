import {BiChevronRightSquare} from 'react-icons/bi'

import {Link} from 'react-router-dom'

import './index.css'

const StateNameItem = props => {
  const {stateDetails} = props

  const {name, stateCode} = stateDetails

  return (
    <Link to={`/state/${stateCode}`} className="link-item">
      <li className="state-list-item">
        <h1 className="state-list-item-name">{name}</h1>
        <div className="state-list-item-code">
          <p className="state-code">{stateCode}</p>
          <BiChevronRightSquare className="right-arrow" />
        </div>
      </li>
    </Link>
  )
}

export default StateNameItem
