import { getRandomNumber } from "../utils";

const middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'GET_POKEMON': {
      const index = getRandomNumber(store.firstNb, store.lastNb)
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then(response) {
          const pkmnImg = response.sprites.other.dream_world.front_default;
        }

      }
      return ()
    }
    default:
      break;
  }
  next(action);
};

export default middleware;

//TODO
