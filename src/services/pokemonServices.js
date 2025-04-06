import { useState, useEffect } from "react";

export const usePokemonList = (page = 0, limit = 20) => {
  const [data, setData] = useState({
    count: 0,
    results: [],
    next: null,
    previous: null,
  });
  useEffect(() => {
    const urlToFetch = `https://pokeapi.co/api/v2/pokemon/?offset=${
      page * limit
    }&limit=${limit}`;
    fetch(urlToFetch)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return new Promise(() => null);
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error al Carga PokedexAPI", error);
      });
  }, [page, limit, setData]);
  return data;
};


export const usePokemonWithEvolution = (code) => {
    const [pokemonData, setPokemonData] = useState(null);
    const [evolutionChain, setEvolutionChain] = useState([]);
    const [loading, setLoading] = useState(true);
    const [speciesInfo, setSpeciesInfo] = useState(null);
  
    useEffect(() => {
      const urlToFetch = `https://pokeapi.co/api/v2/pokemon/${code}`;
  
      fetch(urlToFetch)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            return Promise.reject("No se encontró el Pokémon");
          }
        })
        .then((data) => {
          setPokemonData(data);
          return fetch(data.species.url);
        })
        .then((speciesRes) => speciesRes.json())
        .then((speciesData) => {
          const nickname = speciesData.genera.find(
            (g) => g.language.name === "en"
          )?.genus;
  
          const extraInfo = {
            nickname,
            base_happiness: speciesData.base_happiness,
            capture_rate: speciesData.capture_rate,
            color: speciesData.color?.name,
            habitat: speciesData.habitat?.name,
            growth_rate: speciesData.growth_rate?.name,
            flavor_text_entries: speciesData.flavor_text_entries,
          };
  
          setSpeciesInfo(extraInfo);
          return fetch(speciesData.evolution_chain.url);
        })
        .then((evoRes) => evoRes.json())
        .then((evoData) => {
          const chain = [];
  
          const fetchAllEvolutions = (node, callback) => {
            const name = node.species.name;
  
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
              .then((pokeRes) => pokeRes.json())
              .then((pokeData) => {
                chain.push({
                  name: name,
                  image:
                    pokeData.sprites.other["official-artwork"].front_default,
                });
  
                if (node.evolves_to.length > 0) {
                  let pending = node.evolves_to.length;
                  node.evolves_to.forEach((child) => {
                    fetchAllEvolutions(child, () => {
                      pending--;
                      if (pending === 0) callback();
                    });
                  });
                } else {
                  callback();
                }
              });
          };
  
          fetchAllEvolutions(evoData.chain, () => {
            setEvolutionChain(chain);
            setLoading(false);
          });
        })
        .catch((err) => {
          console.error("Error al obtener detalles:", err);
          setLoading(false);
        });
    }, [code]);
  
    return { pokemonData, evolutionChain, speciesInfo, loading };
  };

export const getPokemonImg = (pokemonName, pokemonUrl) => {
  let pokemonCode = pokemonUrl.split("/").splice(-2, 1)[0] || "";

  const primaryUrl = `https://play.pokemonshowdown.com/sprites/ani/${pokemonName}.gif`;
  const fallbackUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCode}.png`;

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png
  return {
    code: pokemonCode,
    pokename: pokemonName,
    primaryImg: primaryUrl,
    imgSprite: fallbackUrl,
  };
};

export const getTypeImage = ( url) => {
    let pokemonCode = url.split("/").slice(-2, -1)[0] || "";
  
    const typeUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/${pokemonCode}.png`;

    return {
        imageType : typeUrl,
    };
  };