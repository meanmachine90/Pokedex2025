import { getTypeImage } from "../../services/pokemonServices";


export const PokemonTypeBadge = ({ type }) => {
    return (
        <div key={type.name}>
            <img
                src={getTypeImage(type.url).imageType}
                alt={type.name}
                width="90px"
                height="80px"
            />
        </div>
    );
};