import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const { theme, toggleTheme, username, setUsername } = useContext(ThemeContext);

  return (
    <div className="card">
      <h4>Level C</h4>

      <p>Current Theme: {theme}</p>
      <p>User: {username}</p>

      <button className="btn" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <button
        className="btn secondary"
        onClick={() => setUsername("Developer")}
      >
        Change Name
      </button>
    </div>
  );
};

export default ChildC;
