import { useState, useEffect } from "react";

import "./App.css";

import Comments from "./components/comments/Comments";
import Items from "./components/items/Items";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  console.log(items);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItems();
    }
  };

  const addItems = () => {
    if (inputValue) {
      const newItem = {
        id: Date.now(),
        title: inputValue,
        checked: items.length === 0,
      };

      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, checked: true }
          : item.checked
          ? { ...item, checked: false }
          : item
      )
    );
  };

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const getItemsFromLocalStorage = () => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  useEffect(() => {
    const storedItems = getItemsFromLocalStorage();
    if (storedItems.length > 0) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    const allUnchecked = items.every((item) => !item.checked);

    if (allUnchecked && items.length > 0) {
      const updatedItems = items.map((item, index) =>
        index === 0 ? { ...item, checked: true } : item
      );
      setItems(updatedItems);
    }
    saveItemsToLocalStorage(items);
  }, [items]);

  return (
    <div className="App">
      <div className="content">
        <Items
          handleInput={handleInput}
          handleKeyDown={handleKeyDown}
          addItems={addItems}
          item={inputValue}
          items={items}
          removeItem={removeItem}
          toggleItem={toggleItem}
        />
        <Comments />
      </div>
    </div>
  );
}

export default App;
