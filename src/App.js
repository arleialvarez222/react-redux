import { Grid, Card, CardContent, CardActions, } from '@mui/material';
import React from 'react';
import './App.css';
import CantidadPokemon from './components/cantidad-pokemon';
import ComprarPokemon from './components/comprar-pokemon';
import pokemon from './img/pokemons.webp';
//import pokemon from './img/pokemon.jpg'
import store from './redux/store'
import { Provider } from 'react-redux';
import BuscadorPokemon from './components/buscador/buscador-pokemon';
import ResultadoPokemon from './components/buscador/resultado-pokemon';


function App() {

  console.log(store.getState());

  return (
    <Provider store={store}>
      <Grid container direction="row" justifyContent="center" alignItems="center" className="divPrincipal">
        <Grid item md={3} >
        <Card md={{ maxWidth: 400 }}>
            <CardContent>
              <img src={pokemon} alt="pokemon" className="imgPrincipal" />
              <Grid>
                <CantidadPokemon/>
              </Grid>
            </CardContent>
          <CardActions>
            <ComprarPokemon/>
          </CardActions>
        </Card>
        <Grid container>
          <BuscadorPokemon/>
        </Grid>
        <Grid container>
          <ResultadoPokemon/>
        </Grid>
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
