export default function getAccomodation (data, accomodationId) {
    // Define a varible
    let specificData
    
    // Get the data who match with the accomodationId
    data.forEach((element) => {
        if (element.id === accomodationId) {
            specificData = element
        }
    })

    // Case no specific data
    if (specificData === undefined) {
        specificData = false
    }

    // return the match data
    return specificData
}