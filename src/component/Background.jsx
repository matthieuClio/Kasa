import PropTypes from 'prop-types'

export default function Background ({ title, imagePath }) {
    return (
        <figure className="image-container">
          <h1 className="image-container__title">{title}</h1>
          <img src={imagePath} className="image-container__image" />
          <div className="image-container__background"></div>
        </figure>
    )
}

// Define the props type
Background.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string
}
