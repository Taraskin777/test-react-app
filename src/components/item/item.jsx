import "./item.css";

export default function Item(props) {
  const { title, removeItem, id, toggleItem, checked } = props;

  return (
    <li className={`item ${checked ? 'checked' : ''}`} onClick={()=>toggleItem(id)}>
      <div>{title}</div>
      <button onClick={() => removeItem(id)}>Delete</button>
    </li>
  );
}
