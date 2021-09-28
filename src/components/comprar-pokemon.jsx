import React from 'react';
import {Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import { buy_pokemon_action, return_pokemon_action } from '../redux/actions/game-shop-action';

const ComprarPokemon = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                <Grid item md={6}>
                    <Button variant="contained" color="primary" onClick={() => {dispatch(buy_pokemon_action(1))}} className="botonesh">
                        Comprar pokemon
                    </Button>
                </Grid>

                <Grid item md={6}>
                    <Button variant="contained" color="primary" onClick={() => {dispatch(return_pokemon_action(1))}} className="h">
                        Regresar pokemon
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ComprarPokemon;

/* const ComprarPokemon = (props) => {
    return (
        <div>
            <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center">
                <Grid item md={12}>
                    <Button variant="contained" color="primary" onClick={() => props.buy_pokemon_action(1)}>
                        Comprar pokemon
                    </Button>
                </Grid>

                <Grid item md={12}>
                    <Button variant="contained" color="primary" onClick={() => props.return_pokemon_action(1)}>
                        Regresar pokemon
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

const mapDispatchToProps = {
  buy_pokemon_action,
  return_pokemon_action  
};

export default connect(null, mapDispatchToProps)(ComprarPokemon); */
