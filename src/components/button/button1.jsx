import { useState } from "react";

export function Button1() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={handleClick}>Clicked {count} times.</button>
      <button onClick={handleClick}>Clicked {count} times.</button>
    </>
  );
}
