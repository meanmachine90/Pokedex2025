import { PokemonStatRow } from './PokemonsStatrow';

export const PokemonStats = ({ pokemonData }) => {
    return (
        <table className="stats_table">
            <thead>
                <tr>
                    <th scope="col" className="col">Stat</th>
                    <th scope="col" className="col"></th>
                    <th scope="col" className="col">Value</th>
                </tr>
            </thead>
            <tbody>
                {pokemonData.stats.map((stat) => (
                    <PokemonStatRow key={stat.stat.name} stat={stat} />
                ))}
            </tbody>
        </table>
    );
};