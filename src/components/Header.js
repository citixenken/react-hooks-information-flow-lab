import React from "react";

function Header({ isDarkMode, onDarkModeClick }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
        {/* {onDarkModeClick ? "Dark" : "Light"} Mode */}
      </button>
    </header>
  );
}

export default Header;
