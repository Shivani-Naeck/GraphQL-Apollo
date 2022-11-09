import logo from './logo.svg';
import './App.css';

import { useQuery } from '@apollo/client';
import { GET_GEN_3 } from "./gql/Query";

function App() {
  
    const { loading, error, data } = useQuery(GET_GEN_3);
    console.log(data);

    return (
      <div className="App">
        <header className="App-header">
          {loading ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div>
              {data.pokemon_v2_pokemonspecies.map((pokemon) => {
                return (
                  <p>
                    {pokemon.id} {pokemon.name}
                  </p>
                );
              })}
            </div>
          )}
        </header>
      </div>
    );

}

export default App;
