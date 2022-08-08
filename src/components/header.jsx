import React from 'react'

function Header( {text, bgColor, textColor} ) {
    const instantStyle = {
        backgroundColor: bgColor,
        color: textColor
    }
    return (
        <header style={instantStyle}>
            <div className="container">
                <h3>{text}</h3>
            </div>
        </header>
    )
}

//default props
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.3)',
    textColor: '#fff98'
}

export default Header