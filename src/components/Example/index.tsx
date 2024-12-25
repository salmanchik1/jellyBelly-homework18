import { useRef } from "react";

const Example = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);


  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <input ref={inputRef} type = "text" />
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default Example;
