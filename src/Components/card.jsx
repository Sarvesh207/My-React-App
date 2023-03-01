import React from "react";
import Avator from "./Avatar";

function Card({name,...props}){
    return(
        <div>
            <Avator/>
            <h2>Name: {name}</h2>
            <p>Email: {props.email}</p>
        </div>
    )
}

export default Card;