import PropTypes from 'prop-types'

export default function Tags ({ tagsList }) {
    return (
        <div className="tags">
            {tagsList}
        </div>
    )
}

Tags.propTypes = {
    tagsList: PropTypes.string
}