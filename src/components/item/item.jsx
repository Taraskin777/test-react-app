import "./item.css";

export default function Item(props) {
  const { title, removeItem, id, toggleItem, checked, comments } = props;

  return (
    <li
      className={`item ${checked ? "checked" : ""}`}
      onClick={() => toggleItem(id)}
    >
      <div className="title">{title}</div>
      <div className="counter">{comments ? comments.length : 0}</div>

      <button className="deleteBtn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </li>
  );
}
