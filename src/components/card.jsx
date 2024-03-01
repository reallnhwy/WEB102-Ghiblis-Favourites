import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.img}/>
            <h4>{props.name}</h4>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button>Learn More</button>    
            </a>
            
        </div>
    )
}

export default Card