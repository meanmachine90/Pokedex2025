import { useParams } from "react-router";

import { Loading } from "../components/Loading";
import { usePokemonWithEvolution } from '../services/pokemonServices';
import { PokemonPokedexDetails } from "../components/PokemonList/PokemonPokedexDetails";
import { PokemonStats } from "../components/PokemonList/PokemonStats";
import { PokemonEvolutionLine } from "../components/PokemonList/PokemonEvolutionLine";
import { PokemonAddCollection } from "../components/PokemonList/PokemonAddCollection";

export const Details = () => {
    const { pokeid } = useParams();
    const { pokemonData, evolutionChain, loading, speciesInfo } = usePokemonWithEvolution(pokeid);

    if (loading || !pokemonData) return <p>Cargando...</p>;

    return (

        <div className="pokecontainer">
            <div className="pokebackground">
                <h1 >{pokemonData.name}</h1>
                <div className="pokemon">
                <div className="relative inline-block">
                    <img className="pokeimg" src={pokemonData.sprites.other["official-artwork"].front_default} alt={pokemonData.name} />
                    <section className="absolute top-1 right-1">
                        <PokemonAddCollection
                            Pokecod={pokeid}
                            imgSprite={pokemonData.sprites.front_default}
                            name={pokemonData.name}
                            url=''
                        />
                    </section>
                </div>
                    <PokemonPokedexDetails pokemonData={pokemonData} pokeid={pokeid} speciesInfo={speciesInfo} />
                </div>
                <div className="relative overflow-x-auto">
                    <h3 className="text-xl font-semibold mb-2">Estadísticas</h3>
                    <PokemonStats pokemonData={pokemonData} pokeid={pokeid} />
                    <PokemonEvolutionLine pokemonData={pokemonData} evolutionChain={evolutionChain} />
                </div>
            </div>
            {console.log(pokemonData)}
        </div>
    );
};
