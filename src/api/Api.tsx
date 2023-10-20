import { getRandomISODate } from "../utils/dateUtils";

interface RawPokemonData {
  name: string;
  id: number;
  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

const fetchPokemonListWithDetails = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await response.json();

    const pokemonListWithDetails = await Promise.all(
      data.results.map(async (pokemon: { url: RequestInfo | URL }) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonData: RawPokemonData = await pokemonResponse.json();
        return {
          name: pokemonData.name,
          id: pokemonData.id,
          smallImage: pokemonData.sprites.front_default,
          largeImage:
            pokemonData.sprites.other["official-artwork"].front_default,
          date: getRandomISODate(),
        };
      })
    );

    return pokemonListWithDetails;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export { fetchPokemonListWithDetails };
