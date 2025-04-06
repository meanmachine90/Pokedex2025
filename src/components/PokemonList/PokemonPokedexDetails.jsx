import { PokemonDetailRow } from './PokemonDetailRow';
import { PokemonTypeBadge } from './PokemonTypeBadge';

export const PokemonPokedexDetails = ({ pokemonData, pokeid, speciesInfo }) => {
    const formattedId = String(pokeid).padStart(5, '0');
    const heightMeters = pokemonData.height / 10;
    const totalInches = heightMeters * 39.3701;
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    const weightKg = pokemonData.weight / 10;
    const weightLbs = (weightKg * 2.20462).toFixed(1);

    return (
        <div className="relative overflow-x-auto w-full">
            <table className="table-auto w-full">
                <tbody>
                    <PokemonDetailRow label="National Number" value={`#${formattedId}`} />

                    <tr className="border-b border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                            Types
                        </th>
                        <td className="px-6 py-4">
                            <div className="flex justify-stretch">
                                {pokemonData.types.map(t => (
                                    <PokemonTypeBadge key={t.type.name} type={t.type} />
                                ))}
                            </div>
                        </td>
                    </tr>

                    <PokemonDetailRow label="Species" value={speciesInfo.nickname} />
                    <PokemonDetailRow label="Height" value={`${heightMeters.toFixed(1)} m (${feet}′${inches}″)`} />
                    <PokemonDetailRow label="Weight" value={`${weightKg.toFixed(1)} kg (${weightLbs} lbs)`} />
                    <PokemonDetailRow label="Base Happiness" value={speciesInfo.base_happiness} />
                    <PokemonDetailRow label="Capture Rate" value={speciesInfo.capture_rate} />
                    <PokemonDetailRow label="Color" value={speciesInfo.color} />
                    <PokemonDetailRow label="Habitat" value={speciesInfo.habitat} />
                    <PokemonDetailRow label="Growth Rate" value={speciesInfo.growth_rate} />
                    <tr className="border-b border-gray-200">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                            Cry
                        </th>
                        <td className="px-6 py-4">
                            <audio controls autoPlay className="w-full">
                                <source src={pokemonData.cries.latest} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};