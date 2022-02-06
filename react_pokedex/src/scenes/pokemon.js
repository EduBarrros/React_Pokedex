import React from "react";
import { useParams } from "react-router-dom";

const Pokemon = () => {

    const pokemonId  = useParams();

    console.log(pokemonId)
    return(
        <div>
            {`Essa é a pagina do Pokemon de número: ${pokemonId.pokemonId}`}
        </div>
    )
}

export default Pokemon;