// Component
import Background from '../component/Background'
import Details from '../component/Details'

export default function About () {
    // For Details component
    const classBorderRadius = 'border-radius-max'
    const urlPicture = '/image/about_background.jpg'
    const relableTitle = 'Fiable'
    const respectTitle = 'Respect'
    const serviceTitle = 'Service'
    const securityTitle = 'Sécurité'

    const relableText = 
    `Les annonces postées sur Kasa garantissent une fiabilité totale. 
    Les photos sont conformes aux logements, et toutes les informations 
    sont régulièrement vérifiées par nos équipes.`

    const respectText = 
    `La bienveillance fait partie des valeurs fondatrices de Kasa.
    Tout comportement discriminatoire ou de perturbation du voisinage 
    entraînera une exclusion de notre plateforme.`

    const serviceText = 
    `La bienveillance fait partie des valeurs fondatrices de Kasa.
    Tout comportement discriminatoire ou de perturbation du voisinage 
    entraînera une exclusion de notre plateforme.`

    const securityText =
    `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
    que pour les voyageurs, chaque logement correspond aux critères 
    de sécurité établis par nos services. En laissant une note aussi 
    bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
    que les standarts sont bien respectés. Nous organisons également des 
    ateliers sur la sécurité domestique pour nos hôtes.`

    return (
        <>
            <main className="about">
                <Background imagePath={urlPicture}/>
                <div className="about__main-details-container">
                    <div className="about__main-details-container__details-container">
                        <Details borderRadiusMax={classBorderRadius} detailsTitle={relableTitle} textDescription={relableText}>
                            <div className="informations__description">
                                {relableText}
                            </div>
                        </Details>
                    </div>

                    <div className="about__main-details-container__details-container">
                        <Details borderRadiusMax={classBorderRadius} detailsTitle={respectTitle} textDescription={respectText}>
                            <div className="informations__description">
                                {respectText}
                            </div>
                        </Details>
                    </div>

                    <div className="about__main-details-container__details-container">
                        <Details borderRadiusMax={classBorderRadius} detailsTitle={serviceTitle} textDescription={serviceText}>
                            <div className="informations__description">
                                {serviceText}
                            </div>
                        </Details>
                    </div>

                    <div className="about__main-details-container__details-container">
                        <Details borderRadiusMax={classBorderRadius} detailsTitle={securityTitle} textDescription={securityText}>
                            <div className="informations__description">
                                {securityText}
                            </div>
                        </Details>
                    </div>
                </div>
            </main>
        </>
    )
}