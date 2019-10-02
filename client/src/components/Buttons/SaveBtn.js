import React from "react";

function SaveBtn(props) {
    return (
        <div>
            <form action="/saved" method="POST">
                <button className="saveArt" 
                data-id={props.cardId}
                onClick={props.handleSaveArtist}>
                +</button>
            </form>
            <button className="profileButton" >View Profile</button>
        </div>
    )
}

export default SaveBtn;