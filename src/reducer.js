export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_LIBRARY_VISIBILITY":
      return {
        ...state,
        isLibraryVisible: !state.isLibraryVisible,
      };
    case "TOGGLE_PLAY":
      return {
        ...state,
        isPlay: !state.isPlay,
      };

    default:
      return state;
  }
};
