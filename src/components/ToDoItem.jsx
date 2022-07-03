import React, { useState } from "react";

function ToDoItem(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      style={{ textDecoration: clicked ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
