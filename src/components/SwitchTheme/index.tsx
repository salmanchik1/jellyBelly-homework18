import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  const currentTheme = useContext(ThemeContext);

  const handleClick = () => {
    currentTheme?.setTheme(currentTheme.theme === "light" ? "dark" : "light");
  };
  const themeSymbol = currentTheme?.theme === "light" ? "☀️" : "🌙";
  return <a onClick={handleClick}>{themeSymbol}</a>;
};

export default SwitchTheme;
