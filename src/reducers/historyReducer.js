export const historyReducer = (state, action) => {
  switch (action.type) {
    case "HISTORY":
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};
