// React
// import { useEffect } from 'react'

// Navigation
import { useLoaderData, useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import ErrorPage from './ErrorPage'

// Component
import Gallery from '../component/Gallery'
import Tags from '../component/Tag'
import Details from '../component/Details'

// Script
import getAccomodation from '../script/getAccomodation'
import renderRating from '../script/renderRating'

export default function Accomodation () {
    // Data (logements.json)
    const data = useLoaderData()

    // Url parameter
    const { accomodationId } = useParams()

    // Navigation
    // const navigate = useNavigate()

    // Defined specific data
    const specificData = getAccomodation(data, accomodationId)

    // useEffect(() => {
    //     // Redirect user in the case where there is no specific data
    //     if (!specificData) {
    //         navigate('error-page')
    //     }
    // })

    // Convert rating in int type
    const ratingNumber = parseInt(specificData.rating)

    // For Details component
    const classMinHeight = 'details-information-animation-height-min'

    // In the case there is specific data
    return specificData ? (
        <main className="accomodation">
            <Gallery picturesSrc={specificData.pictures} />

            {/* Accomodation */}
            <div className="accomodation__informations">
                <section>
                    {/* Main title */}
                    <h1 className="accomodation__informations__title">{specificData.title}</h1>

                    {/* Location */}
                    <div className="accomodation__informations__location">
                        {specificData.location}
                    </div>

                    {/* Tags */}
                    {specificData.tags.map((element) => (
                        <Tags key={`${specificData.id}-${element}`} tagsList={element} />
                    ))}
                </section>

                {/* User */}
                <div className="accomodation__informations__container">
                    {/* User profile */}
                    <div className="accomodation__informations__container__user">
                        {specificData.host.name}
                        <img src={specificData.host.picture} className="accomodation__informations__container__user__image" alt="profil utilisateur" />
                    </div>
                    
                    {/* Rating */}
                    <div className="accomodation__informations__container__rating">
                        {renderRating(ratingNumber)}
                    </div>
                </div>
            </div>

            {/* Acoomodation details */}
            <div className="accomodation__main-details-container">
                <div className="accomodation__main-details-container__details-container">
                    <Details heightAnimation={classMinHeight} detailsTitle={'Description'}>
                        <div className="informations__description">
                            {specificData.description}
                        </div>
                    </Details>
                </div>
                
                <div className="accomodation__main-details-container__details-container">
                    <Details heightAnimation={classMinHeight} detailsTitle={'Équipement'}>
                        {(specificData.equipments.map((element, index) => (
                            <div key={`${element}-${index}`} className="informations__equipements">
                                {element}
                            </div>
                        )))}
                    </Details>
                </div>
            </div>
        </main>
    ) : <ErrorPage />
}