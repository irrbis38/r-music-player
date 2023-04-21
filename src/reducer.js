export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "TOGGLE_LIBRARY_VISIBILITY":
      return {
        ...state,
        isLibraryVisible: !state.isLibraryVisible,
      };

    default:
      return state;
  }
};
