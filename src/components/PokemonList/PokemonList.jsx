import { getPokemonImg } from "../../services/pokemonServices";
import { PokemonListItem } from "./PokemonListItem";

export const PokemonList = (
    { pokemonList, 
        clickHandler = (code)=>{}
    }
) => {
    return (
        <section className="section">
        <div className="wrapper">
            {pokemonList.map(
                (item) => {
                    return (
                        <PokemonListItem
                            key={item.name}
                            name={item.name}
                            code={item.code}
                            url={item.url}
                            {...getPokemonImg(item.name,item.url)
                            }
                            primaryimg={item.primaryImg}
                            imgsprite={item.imgSprite}
                            onClickHandler={clickHandler}
                        />
                        
                    )
                }
            )}
        </div>
    </section>
    )
}