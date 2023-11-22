import { useLoaderData, useParams } from "react-router-dom"

// Component
import Gallery from '../component/Gallery'
import Tags from "../component/Tag"

// Script
import getAccomodation from '../script/getAccomodation'

export default function Accomodation () {
    // Data (logements.json)
    const data = useLoaderData()

    // Url parameter
    const {accomodationId} = useParams()

    // Specific data
    const specificData = getAccomodation(data, accomodationId)

    return (
        <main className="accomodation">
            <Gallery picturesSrc={specificData.pictures} />

            <div className="accomodation__informations">
                <section style={{border:'2px solid blue'}}>
                    <h1>{specificData.title}</h1>

                    <div className="accomodation__informations__location">
                        {specificData.location}
                    </div>

                    {specificData.tags.map((element) => (
                        <Tags key={`${specificData.id}-${element}`} tagsList={element} />
                    ))}
                </section>

                <div>
                    Test
                </div>
            </div>
        </main>
    )
}