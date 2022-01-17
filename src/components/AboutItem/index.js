import './index.css'

const AboutItem = props => {
  const {questionDetails} = props

  const {question, answer} = questionDetails

  return (
    <li className="about-list-item">
      <p className="about-question">{question}</p>
      <p className="about-answer">{answer}</p>
    </li>
  )
}

export default AboutItem
