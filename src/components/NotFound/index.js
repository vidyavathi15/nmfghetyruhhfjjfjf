import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      src="https://res.cloudinary.com/dfwdrrxpf/image/upload/v1642324717/Vector_5_smnk6x.png"
      alt=""
    />

    <h1 className="not-found-heading">PAGE NOT FOUND</h1>
    <p className="page-not-found-text">
      we’re sorry, the page you requested could not be found Please go back to
      the homepage
    </p>
    <button type="button" className="not-found-button">
      Home
    </button>
  </div>
)

export default NotFound
