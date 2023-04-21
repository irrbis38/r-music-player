import { createContext, useReducer } from "react";
import { reducer } from "./../reducer";

export const PlayerContext = createContext();

const initialState = {
  isLibraryVisible: false,
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.handleLibraryToggle = () => {
    dispatch({ type: "TOGGLE_LIBRARY_VISIBILITY" });
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};
