import './index.css'

const NotFound = props => {
  const onClickHomeButton = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-container">
      <img
        className="not-found-image"
        src="https://res.cloudinary.com/dfwdrrxpf/image/upload/v1643869761/Group_7484_ml0yze.png"
        alt="not-found-pic"
      />

      <h1 className="not-found-heading">PAGE NOT FOUND</h1>
      <p className="page-not-found-text">
        we are sorry, the page you requested could not be found
      </p>

      <button
        type="button"
        className="not-found-button"
        onClick={onClickHomeButton}
      >
        Home
      </button>
    </div>
  )
}

export default NotFound
