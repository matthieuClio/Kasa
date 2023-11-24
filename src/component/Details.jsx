import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Details ({ detailsTitle, textDescription, equipments }) {
    const [isActive, setIsActive] = useState(false)

    function animation () {
        setIsActive(current => !current)
    }

    return (
        <>
            <div className="details-container">
                {/* Title */}
                <div className={isActive?'details-container__contain detail-container-contain-animation':'details-container__contain'}>
                    {detailsTitle}
                    <img 
                        src="/image/arrow-up.svg" 
                        onClick={animation} 
                        className={isActive?'details-container__contain__icon details-container-icon-animation':'details-container__contain__icon'} 
                    />
                </div>

                {/* Container */}
                <div className={isActive?'details-container__informations details-container-information-animation': 'details-container__informations'}>
                    {
                        // Show textDescription if have it
                        textDescription?
                        (<div className="details-container__informations__description">
                            {textDescription}
                        </div>):
                        // Else show equipement
                        (equipments.map((element, index) => (
                            <div key={`${element}-${index}`} className="details-container__informations__equipements">
                                {element}
                            </div>
                        )))
                    }
                </div>
            </div>
        </>
    )
}

Details.propTypes = {
    detailsTitle: PropTypes.string,
    textDescription: PropTypes.string,
    equipments: PropTypes.array
}