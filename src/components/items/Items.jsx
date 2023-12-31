import { useRef } from "react";

import "./items.css";

import ItemList from "../itemsList/ItemList";

export default function Items(props) {
  const { item, items, addItems, handleInput, handleKeyDown, removeItem, toggleItem } =
    props;

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

      {items.length > 0 && <ItemList items={items} removeItem={removeItem} toggleItem={toggleItem} />}
      
    </div>
  );
}
