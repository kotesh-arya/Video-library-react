export const videoReducer = (videoState, action) => {
  // console.log(action.type);

  switch (action.type) {
    case "UPDATE_VIDEOS":
      // console.log(action.payload);
      return {
        ...videoState,
        videoList: action.payload,
      };
 
    default:
      return videoState;
  }
};
