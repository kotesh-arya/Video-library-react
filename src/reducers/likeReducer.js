export const likeReducer = (state, action) => {
  switch (action.type) {
    case "LIKED_VIDEOS":
      return {
        ...state,
        likedVideos: action.payload,
      };
    default:
      return state;
  }
};
