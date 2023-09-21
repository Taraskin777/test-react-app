import { useState, useEffect } from "react";

import "./App.css";

import Comments from "./components/comments/Comments";
import Items from "./components/items/Items";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);

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
      saveItemsToLocalStorage([...items, newItem]);
      setInputValue("");
    }
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const toggleItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, checked: true }
          : { ...item, checked: false }
      )
    );
    setSelectedItemId(id);
    localStorage.setItem("selectedItemId", id.toString());
  };

  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  const getItemsFromLocalStorage = () => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  };

  // Функція для додавання коментарів
  const addCommentToItem = (itemId, comment) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, comments: [...(item.comments || []), comment] }
          : item
      )
    );
  };

  useEffect(() => {
    const storedItems = getItemsFromLocalStorage();
    if (storedItems.length > 0) {
      setItems(storedItems);
    }
  }, []);

  useEffect(() => {
    saveItemsToLocalStorage(items);
  }, [items]);

  useEffect(() => {
    const storedSelectedItemId = localStorage.getItem("selectedItemId");
    if (storedSelectedItemId) {
      setSelectedItemId(parseInt(storedSelectedItemId, 10));
    }
  }, []);

  useEffect(() => {
    if (selectedItemId !== null) {
      localStorage.setItem("selectedItemId", selectedItemId.toString());
    }
  }, [selectedItemId]);

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
        <Comments
          selectedItemId={selectedItemId}
          addCommentToItem={addCommentToItem}
          items={items}
        />
      </div>
    </div>
  );
}

export default App;
