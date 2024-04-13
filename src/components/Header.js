import React from "react";

function Header({onDarkModeClick}){

    return(
        <header>
            <h1>Notes</h1>
            <button onClick={onDarkModeClick}>Dark Mode</button>
        </header>
    )
}

export default Header