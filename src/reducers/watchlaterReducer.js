export const watchlaterReducer = (state, action) => {
  switch (action.type) {
    case "WATCH_LATER":
      return {
        ...state,
        watchLater: action.payload,
      };
    default:
      return state;
  }
};
