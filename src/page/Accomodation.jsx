import { useLoaderData, useParams } from "react-router-dom"

// Component
import Gallery from '../component/Gallery'

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

            <section className="accomodation__informations">
                <div>
                    <h1>{specificData.title}</h1>
                </div>
            </section>
        </main>
    )
}