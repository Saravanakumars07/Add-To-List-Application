import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const trimmed = item.trim();
    if (trimmed === "") return;

    setItems([...items, trimmed]);
    setItem("");
  };

  const handleRemove = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Add Items to List</h1>

        <div className="row">
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button type="button" onClick={handleAdd}>
            Add
          </button>
        </div>

        {items.length === 0 ? (
          <p className="empty">No items yet. Add your first one!</p>
        ) : (
          <ul className="list">
            {items.map((it, index) => (
              <li key={index}>
                <span>{it}</span>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;