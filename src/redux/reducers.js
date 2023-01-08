const initialState = {
  gen: {
    number: null,
    firstNb: null,
    lastNb: null,
  },
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SELECT_GEN':
      return {
        ...state,
        gen: {
          number: action.gen,
          firstNb: action.firstNb,
          lastNb: action.lastNb,
        },
      };
    default:
      return state;
  }
}

export default reducer;
