import { usePokemonWithEvolution } from "../../services/pokemonServices";

export const PokemonEvolutionLine = ({ evolutionChain }) => {
    return (
        
        <div className="flex items-center justify-center flex-wrap gap-4 p-16">
            {evolutionChain.map((evo, index) => (
                <div key={evo.name} className="text-center">
                    <div className="flex items-center">
                        <img src={evo.image} alt={evo.name} className="mx-auto" width="128px" height="128px" />
                        {index < evolutionChain.length - 1 && <span className="text-2xl ml-2"><svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
                        </svg>
                        </span>}
                    </div>
                    <p className="capitalize">{evo.name}</p>
                </div>
            ))}
        </div>
    );
}