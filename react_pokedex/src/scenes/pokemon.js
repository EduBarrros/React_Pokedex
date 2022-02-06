import React from "react";
import { useLocation } from "react-router-dom";

const Pokemon = () => {

    const id  = useLocation();

    console.log(id)
    return(
        <div>
            {`Essa é a pagina do Pokemon de número: ${id}`}
        </div>
    )
}

export default Pokemon;