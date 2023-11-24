import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Gallery ({ picturesSrc }) {
    let [currentPicture, setCurrentPicture] = useState(0)
    const nbPictures = picturesSrc.length

    // Change picture
    // (not in a script file cause of State modification)
    function changePicture (pictureToDisplay) {

        // We are to the first and want go to the last picture
        if (pictureToDisplay < 0) {
            setCurrentPicture(nbPictures -1)

         // We are to the last and want go to the first picture
        } else if (pictureToDisplay > nbPictures -1) {
            setCurrentPicture(0)
        
        // We add or we subtract
        } else {
            setCurrentPicture(pictureToDisplay)
        }
    }

    return (
        <figure className="gallery">
            {/* Arrow left icon */}
            <img src="/image/leftArrow.svg" onClick={() => changePicture(currentPicture -1)} className="gallery__arrow-left" alt={'flèche de gauche'} />
            
            {/* Picture */}
            <img src={picturesSrc[currentPicture]} className="gallery__image" alt="location" />
            
            {/* Arrow right icon */}
            <img src="/image/rightArrow.svg" onClick={() => changePicture(currentPicture +1)} className="gallery__arrow-right" alt={'flèche de droite'} />
            
            {/* Image number */}
            <div className="gallery__image-number">
                {`${currentPicture +1}/${nbPictures}`}
            </div>
        </figure>
    )
}

Gallery.propTypes = {
    picturesSrc: PropTypes.array
}