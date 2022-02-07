import React, { useEffect, useState } from "react";
import { TextField, AppBar, Toolbar, Grid, Card, CardContent, CardMedia, CircularProgress, Typography } from '@material-ui/core';
import { makeStyles, alpha } from '@material-ui/core/styles';
import { toFirstCharUppercase } from "../constants";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SearchRounded } from "@material-ui/icons";
import Pokedex_Title from '../assets/Pokedex_Title.svg';

const useStyles = makeStyles((theme) => ({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px"
    },

    cardMedia: {
        margin: "auto"
    },

    cardContent: {
        textAlign: "center"
    },

    searchContainer: {
        display: "flex",
        backgroundColor: alpha(theme.palette.common.white, 0.50),
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "5px",
        marginBottom: "5px",
        borderRadius: "10px",
        marginLeft: "20px"
    },

    searchIcon: {
        alignSelf: "flex-end",
        marginBottom: "5px",
    },

    searchInput: {
        width: "150px",
        margin: "5px",
    },

    title: {
        margin: "auto",
        width: "650px"
    }

}));

const Pokedex = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState({});
    const [filter, setFilter] = useState("");

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
            .then(function (response) {
                const { data } = response;
                const { results } = data;
                const newPokemonData = {};
                results.forEach((pokemon, index) => {
                    newPokemonData[index + 1] = {
                        id: index + 1,
                        name: pokemon.name,
                        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1
                            }.png`,
                    };
                });
                setPokemonData(newPokemonData);
            });
    }, [])

    const getPokemonCards = (pokemonId) => {
        console.log(pokemonData[`${pokemonId}`])
        const { id, name, sprite } = pokemonData[pokemonId];
        return (
            <Grid item xs={3} key={pokemonId}>
                <Card onClick={() => navigate(`/${pokemonId}`)}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={sprite}
                        style={{ width: "130px", height: "130px" }}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <div className={classes.searchContainer}>
                        <SearchRounded className={classes.searchIcon} />
                        <TextField
                            onChange={handleSearchChange}
                            className={classes.searchInput}
                            label="Pokemon"
                            variant="standard"
                        />
                    </div>
                    <div className={classes.title}>
                        <img src={Pokedex_Title} />
                    </div>
                </Toolbar>
            </AppBar>
            {
                pokemonData
                    ?
                    (
                        <Grid container spacing={2} className={classes.pokedexContainer}>
                            {
                                Object.keys(pokemonData).map((pokemonId) => pokemonData[pokemonId].name.includes(filter) && getPokemonCards(pokemonId))
                            }
                        </Grid>
                    )
                    :
                    (
                        <CircularProgress />
                    )
            }

        </>
    )
}

export default Pokedex;