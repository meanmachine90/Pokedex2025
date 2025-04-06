import { useLocalStorage } from "../../services/localStorage"
import { Link } from 'react-router';

import notCollected from '../../assets/svg/greyball.svg'
import collected from '../../assets/svg/pokeball.svg';


export const PokemonAddCollection = (
    {
        Pokecod,
        name,
        url,
        imgSprite
    }
) => {
    const [pokeCollection, saveToPokeCollection] = useLocalStorage("mycollection", []);
    const isPokeMonInCollection = pokeCollection?.find(
        (pokemonItem) => {
            return pokemonItem.code === Pokecod;
        }
    );

    const onClickHandler = (e) => {
        const newPokeItem = {
            code: Pokecod,
            name: name,
            url: `https://pokeapi.co/api/v2/pokemon/${Pokecod}/`,
        }
        saveToPokeCollection([...pokeCollection, newPokeItem]);
    }

    if (isPokeMonInCollection) {
        return (
            <>
                <Link to="/my-collection" data-tooltip-target="tooltip-viewcollection"><img src={collected} className="w-[24px] h-[24px]" /></Link>
                <div id="tooltip-viewcollection" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    View Collection
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <button onClick={onClickHandler} data-tooltip-target="tooltip-addtocollection" ><img src={notCollected} className="w-[24px] h-[24px]" /></button>
                <div id="tooltip-addtocollection" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    add to collection
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </>
        )
    }

}