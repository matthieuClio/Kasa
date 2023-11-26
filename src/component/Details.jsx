import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Details ({ borderRadiusMax, detailsTitle, textDescription, equipments }) {
    const [isActive, setIsActive] = useState(false)

    function animation () {
        setIsActive(current => !current)
    }

    return (
        <>
            {/* <div className="details-container"> */}
                {/* Title */}
                <div className={isActive?'contain detail-contain-animation':'contain ' + borderRadiusMax}>
                    {detailsTitle}
                    <img 
                        src="/image/arrow-up.svg" 
                        onClick={animation} 
                        className={isActive?'contain__icon details-icon-animation':'contain__icon'} 
                    />
                </div>

                {/* Container */}
                <div className={isActive?'informations details-information-animation': 'informations'}>
                    {
                        // Show textDescription if have it
                        textDescription?
                        (<div className="informations__description">
                            {textDescription}
                        </div>):
                        // Else show equipement
                        (equipments.map((element, index) => (
                            <div key={`${element}-${index}`} className="informations__equipements">
                                {element}
                            </div>
                        )))
                    }
                </div>
            {/* </div> */}
        </>
    )
}

Details.propTypes = {
    borderRadiusMax: PropTypes.string,
    detailsTitle: PropTypes.string,
    textDescription: PropTypes.string,
    equipments: PropTypes.array
}