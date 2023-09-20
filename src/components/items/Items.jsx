import { useRef } from "react";

import "./items.css";
import ListItem from "../itemsList/ItemList";

export default function Items(props) {
  const { item, items, addItems, handleInput, handleKeyDown } = props;

  const inputRef = useRef();

  return (
    <div className="itemBox">
      <h1>Items</h1>
      <div className="addItem">
        <input
          type="text"
          required
          className="inputItem"
          value={item}
          placeholder="Type name here..."
          ref={inputRef}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button className="addBtn" onClick={addItems}>
          Add New
        </button>
      </div>
      <ListItem items={items} />
    </div>
  );
}
