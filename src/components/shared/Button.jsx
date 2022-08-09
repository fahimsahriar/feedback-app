
function Button ({children, version, type, isDisabled}) {
    return (
        <button type={type}
            className={`btn btn-${version}`} 
            disabled={isDisabled}

        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: 'secondary',
    type: 'button',
    isDisabled: false
}
export default Button;