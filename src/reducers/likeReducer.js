export const likeReducer = (state, action) => {
  // console.log("history reducer working!!")
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
