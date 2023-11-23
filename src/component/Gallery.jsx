import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Gallery ({ picturesSrc }) {
    let [currentPicture, setCurrentPicture] = useState(0)
    const nbPictures = picturesSrc.length

    function changePicture () {
        setCurrentPicture(currentPicture +1)

        if (currentPicture < 0) {
            setCurrentPicture(currentPicture = nbPictures -1)
        }
        if (currentPicture >= nbPictures -1) {
            setCurrentPicture(currentPicture = 0)
        }
    }

    return (
        <figure className="gallery">
            {/* Arrow left icon */}
            <img src="/image/leftArrow.svg" onClick={changePicture} className="gallery__arrow-left" alt={'flèche de gauche'} />
            
            {/* Picture */}
            <img src={picturesSrc[currentPicture]} className="gallery__image" alt="location" />
            
            {/* Arrow right icon */}
            <img src="/image/rightArrow.svg" className="gallery__arrow-right" alt={'flèche de droite'} />
            
            {/* Image number */}
            <div className="gallery__image-number">
                1/4
            </div>
        </figure>
    )
}

Gallery.propTypes = {
    picturesSrc: PropTypes.array
}