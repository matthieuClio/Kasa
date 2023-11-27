import { useState } from 'react'
import PropTypes from 'prop-types'

export default function Details ({ borderRadiusMax, detailsTitle, children }) {
    const [isActive, setIsActive] = useState(false)

    function animation () {
        setIsActive(current => !current)
    }

    return (
        <>
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
                {children}
            </div>
        </>
    )
}

Details.propTypes = {
    borderRadiusMax: PropTypes.string,
    detailsTitle: PropTypes.string,
    children: PropTypes.node
}