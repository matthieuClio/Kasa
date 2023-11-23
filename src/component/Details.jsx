import PropTypes from 'prop-types'

export default function Details ({ detailsTitle, textDescription, equipments }) {

    return (
        <>
            <div className="details-container">
                <div className="details-container__contain">
                    {detailsTitle}
                    <img src="/image/arrow-up.svg" className="details-container__contain__icon" />
                </div>

                <div className="details-container__informations">
                    {
                        // Show textDescription if have it
                        textDescription?textDescription:

                        // Else show equipement
                        equipments.map((element, index) => (
                            <div key={`${element}-${index}`} className="details-container__informations__equipements">
                                {element}
                            </div>
                        ))
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