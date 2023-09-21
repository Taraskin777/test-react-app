import "./item.css";

export default function Item(props) {
  const { title, removeItem, id, toggleItem, checked, comments } = props;

  return (
    <li
      className={`item ${checked ? "checked" : ""}`}
      onClick={() => toggleItem(id)}
    >
      <div>{title}</div>
      {comments ? comments.length : 0}
      <button onClick={() => removeItem(id)}>Delete</button>
    </li>
  );
}
