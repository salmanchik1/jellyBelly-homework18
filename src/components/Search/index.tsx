import style from "./style.module.css";
import { ChangeEvent, Dispatch, FC, useState } from "react";

type Props = {
  setFilterValue: Dispatch<React.SetStateAction<string>>
}
const Search: FC<Props> = ({ setFilterValue }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setFilterValue(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className={style.container}>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => handleChange(event)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleClick}>Find</button>
    </div>
  );
};

export default Search;
