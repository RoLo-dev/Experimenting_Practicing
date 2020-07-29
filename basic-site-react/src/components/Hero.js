import React from 'react'

function Hero(props) {
    return(
        <div className="hero">
            <div className="hero-text">
                { props.title && <h1>{ props.title }</h1> }
                { props.subtitle && <h3>{ props.subtitle }</h3> }
            </div>
            <p></p>
        </div>
    )
}

export default Hero;
