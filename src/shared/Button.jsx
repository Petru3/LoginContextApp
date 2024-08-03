import PropTypes from 'prop-types'

function Button({text, handleFunction}) {
    return (
        <button
            onClick={handleFunction}
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleFunction: PropTypes.func.isRequired
}

export default Button
