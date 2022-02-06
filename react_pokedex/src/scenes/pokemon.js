import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography, Link, Button, CircularProgress } from '@material-ui/core';
import { toFirstCharUppercase } from "../constants";
import axios from "axios";

const Pokemon = () => {

    const pokemonId = useParams();
    const [pokemon, setPokemon] = useState(undefined)
    const navigate = useNavigate();

    console.log(pokemonId)
    console.log(pokemon)

    useEffect(() => {
        axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId.pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
    }, [pokemonId.pokemonId])

    const generatePokemonJsx = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon;
        console.log(id)
        const fullImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        const { front_default } = sprites;

        return (
            <>
                <Typography variant="h1">
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default} />
                </Typography>
                <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} />
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
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJsx(pokemon)}
            {pokemon === false && <Typography> Pokemon not found</Typography>}

            {pokemon !== undefined && (
                <Button variant="contained" onClick={() => navigate("/")}>
                    back to pokedex
                </Button>
            )}
        </>
    );
}

export default Pokemon;