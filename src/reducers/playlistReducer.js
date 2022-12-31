export const playlistReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isPlaylistModalOpen: true,
      };
    case "PLAYLISTS":
      return {
        ...state,
        playlists: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isPlaylistModalOpen: false,
      };
    case "PLAYLIST_VIDEOS":
      return {
        ...state,
        playlistChecked: !state.playlistChecked,
        playlists: state.playlists.map((playlist) =>
          playlist._id === action.payload._id ? action.payload : playlist
        ),
      };

    default:
      return state;
  }
};
