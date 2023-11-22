import PropTypes from 'prop-types'

export default function Rating ({ srcUrl }) {
    return (
        <img src={srcUrl} className="rating-icon" alt="étoile" />
    )
}

Rating.propTypes = {
    srcUrl: PropTypes.string
}