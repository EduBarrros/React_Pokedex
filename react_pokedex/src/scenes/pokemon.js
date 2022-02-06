import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MockData from "../mockData";
import { Typography, Link } from '@material-ui/core';
import { toFirstCharUppercase } from "../constants";

const Pokemon = () => {

    const pokemonId = useParams();
    const [pokemon, setPokemon] = useState(MockData[`${pokemonId.pokemonId}`])

    console.log(pokemonId)
    console.log(pokemon)

    const generatePokemonJsx = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        console.log(id)
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <Typography variant="h1">
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default} />
                </Typography>
                <img style={{ width: "300px", height: "300px" }} src={front_default} />
                <Typography variant="h3">Pokemon Info</Typography>
                <Typography>
                    {"Species: "}
                    <Link href={species.url}>{species.name} </Link>
                </Typography>
                <Typography>Height: {height} </Typography>
                <Typography>Weight: {weight} </Typography>
                <Typography variant="h6"> Types:</Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography key={name}> {`${name}`}</Typography>;
                })}
            </>
        )
    }

    return (
        <>
            {generatePokemonJsx()}
        </>
    );
}

export default Pokemon;