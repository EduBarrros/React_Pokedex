import React from "react";

const Pokemon = (props) => {
    return(
        <div>
            {`Essa é a pagina do Pokemon de número: ${props.pokemonId}`}
        </div>
    )
}

export default Pokemon;