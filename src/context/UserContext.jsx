import { createContext, useReducer } from "react";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

export const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      return { currentUser: action.payload };
    case "ON_LOGOUT":
      localStorage.removeItem("currentUser");
      return { currentUser: null };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
