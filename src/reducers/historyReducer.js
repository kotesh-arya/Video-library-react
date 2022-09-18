export const historyReducer = (state, action) => {
  // console.log("history reducer working!!")
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
