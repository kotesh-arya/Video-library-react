export const videoReducer = (videoState, action) => {
  switch (action.type) {
    case "UPDATE_VIDEOS":
      return {
        ...videoState,
        videoList: action.payload,
      };

    default:
      return videoState;
  }
};
