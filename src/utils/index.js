/* eslint-disable consistent-return */

const pkmnNbFromGen = (gen) => {
  switch (gen) {
    case 1:
      return [1, 151];
    case 2:
      return [152, 251];
    case 3:
      return [252, 386];
    case 4:
      return [387, 493];
    case 5:
      return [494, 649];
    default:
      break;
  }
};

const getRandomNumber = (a, b) => Math.floor((Math.random() * (a - b)) + a);

export { pkmnNbFromGen, getRandomNumber };
