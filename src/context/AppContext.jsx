import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  toggle: false,
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_TOGGLE":
      return { ...state, toggle: !state.toggle };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
