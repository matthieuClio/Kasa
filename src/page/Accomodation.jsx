import { useLoaderData, useParams } from 'react-router-dom'

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

    // Specific data
    const specificData = getAccomodation(data, accomodationId)
    const ratingNumber = parseInt(specificData.rating)

    return (
        <main className="accomodation">
            <Gallery picturesSrc={specificData.pictures} />

            {/* Accomodation */}
            <div className="accomodation__informations">
                <section style={{border:'2px solid blue'}}>
                    {/* Main title */}
                    <h1>{specificData.title}</h1>

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
                <div style={{border: '2px solid blue'}}>
                    {/* User profile */}
                    <div className="accomodation__informations__user">
                        {specificData.host.name}
                        <img src={specificData.host.picture} className="accomodation__informations__user__image" alt="profil utilisateur" />
                    </div>
                    
                    {/* Rating */}
                    {renderRating(ratingNumber)}
                </div>
            </div>

            {/* Acoomodation details */}
            <div className="accomodation__main-details-container">
                <div className="accomodation__main-details-container__details-container">
                    <Details detailsTitle={'Description'}>
                        <div className="informations__description">
                            {specificData.description}
                        </div>
                    </Details>
                </div>
                
                <div className="accomodation__main-details-container__details-container">
                    <Details detailsTitle={'Équipement'}>
                        {(specificData.equipments.map((element, index) => (
                            <div key={`${element}-${index}`} className="informations__equipements">
                                {element}
                            </div>
                        )))}
                    </Details>
                </div>
            </div>
        </main>
    )
}