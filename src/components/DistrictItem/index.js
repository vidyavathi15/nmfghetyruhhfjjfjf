import './index.css'

const DistrictItem = props => {
  const {districtDetails} = props
  const {name, number} = districtDetails

  return (
    <li className="each-district-list-item">
      <p className="confirmed-count">{number}</p>
      <p className="district-item">{name}</p>
    </li>
  )
}

export default DistrictItem
