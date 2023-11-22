import PropTypes from 'prop-types'

export default function Thumbnail ({ coverImage, title }) {
    return (
        <figure className="thumbnail">
            <img src={coverImage} className="thumbnail__image"/>
            <div className="thumbnail__title">
                {title}
            </div>
        </figure>
    )
}

Thumbnail.propTypes = {
    coverImage: PropTypes.string,
    title: PropTypes.string
}