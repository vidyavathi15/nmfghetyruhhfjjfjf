import './index.css'

const FaqItem = props => {
  const {faqDetails} = props
  const {banner} = faqDetails
  return (
    <li className="faq-item">
      <p className="facts-name">{banner}</p>
    </li>
  )
}

export default FaqItem
