import PropTypes from 'prop-types'

export default function Gallery ({ picturesSrc }) {
    return (
        <figure className="gallery">
            <img src="/image/leftArrow.svg" className="gallery__arrow-left"/>
            <img src={picturesSrc[0]} alt="location" className="gallery__image" />
            <img src="/image/rightArrow.svg" className="gallery__arrow-right"/>
            {/* <span>Icon</span> */}
            1/4
        </figure>
    )
}

Gallery.propTypes = {
    picturesSrc: PropTypes.array
}