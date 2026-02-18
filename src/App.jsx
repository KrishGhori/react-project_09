import { createContext, useState } from "react";
import "./App.css";
import ChaildA from "./Components/ChaildA";



export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  const [username, setUsername] = useState("Krish");

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, username, setUsername }}>
      <div id="container" className={theme}>
        <ChaildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
