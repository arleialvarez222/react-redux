import { Grid, TextField, Button } from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscador-action';

const BuscadorPokemon = () => {

    const dispatch = useDispatch();
    const [pokemon_name, set_Pokemon_name] = useState('mewtwo');

    return (
        <div className="divBuscador">
            <Grid container spacing={2} className="gridBuscador">
                <Grid item xs={12} md={12}>
                    <TextField
                        value={pokemon_name}
                        type="search"
                        margin="dense"
                        variant="outlined"
                        label="Buscar Pokemon"
                        fullWidth
                        onChange={ (event) => {set_Pokemon_name(event.target.value)}}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth  onClick={() => {dispatch(fetchPokemon(pokemon_name))}}> 
                        Enviar 
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default BuscadorPokemon;
