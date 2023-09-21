import "./item.css";

export default function Item(props) {
  const { title, removeItem, id } = props;

  return (
    <li className="item">
      <div>{title}</div>
      <button onClick={() => removeItem(id)}>Delete</button>
    </li>
  );
}
