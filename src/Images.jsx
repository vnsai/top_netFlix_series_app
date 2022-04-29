import React from "react";

const Images=(props) => {
    let {imgSRC} = props 
    return (<img src={imgSRC} alt={props.alt} className="card__img" />)
}

export default Images;