import React from "react";
import { AppBar, Toolbar, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px"
    },
});

const getPokemonCards = () => {
    return (
        <Grid item xs={4}>
            <Card>
                <CardContent>
                    hi
                </CardContent>
            </Card>
        </Grid>
    )
}


const Pokedex = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            <Grid container spacing={2} className={classes.pokedexContainer}>
                {getPokemonCards()}
                {getPokemonCards()}
                {getPokemonCards()}
                {getPokemonCards()}
                {getPokemonCards()}
            </Grid>
        </>
    )
}

export default Pokedex;