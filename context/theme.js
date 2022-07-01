import React, { useState, useContext } from "react";

//CREA el contexto
const ThemeContext = React.createContext();

//crea un hook para USAR los values del contexto
export function useTheme() {
  return useContext(ThemeContext);
}

//crea el PROVIDER
export function ThemeProvider({ children }) {
  //si theme es true, el modo es claro.
  const [theme, setTheme] = useState(true);
  function changeTheme() {
    setTheme((prevState) => !prevState);
  }
  const value = {
    theme,
    changeTheme,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
