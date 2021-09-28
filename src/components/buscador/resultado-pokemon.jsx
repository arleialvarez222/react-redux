import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {

    const buscador = useSelector(state => state.buscador);
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={12}>
                    <Typography component="h4" variant="h5">
                        Resultado: 
                    </Typography>
                </Grid>
                {buscador.loading && <Grid item xs={12} md={12}>
                    <Typography component="h4" variant="h6">
                        Buscando... 
                    </Typography>
                </Grid>}
                {buscador.pokemon.length >= 1 && <Grid item xs={12} md={12}>
                    <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />
                    <span>{buscador.pokemon[0].name}</span>
                </Grid>}
                { buscador.error !== '' && <Grid item xs={12} md={12}>
                    <span>Error</span>
                </Grid> }
            </Grid>
        </div>
    )
}

export default ResultadoPokemon;
