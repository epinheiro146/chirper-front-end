import React from "react";

const Chirp = props => {
    return (
        <div class='card'>
            <h3 class='card-title'>{props.username}</h3>
            <h1 class='card-body'>{props.message}</h1>
        </div>
    );
}

export default Chirp;