import Rating from "../component/Rating"

export default function renderRating (ratingNumber) {
    // For component Rating (prop)
    const starActive = '/image/star-active.svg'
    const starInactive = '/image/star-inactive.svg'
    
    // Other
    let count = 0
    let ratingArray = []
    const maxRating = 5

    // Generate stars active/inactive
    while (maxRating > count) {
        if (ratingNumber > count) {
            ratingArray.push(<Rating key={`${ratingNumber}-${count}`} srcUrl={starActive} />)
        } else {
            ratingArray.push(<Rating key={`${ratingNumber}-${count}`} srcUrl={starInactive} />)
        }
        count++
    }
    return ratingArray
}