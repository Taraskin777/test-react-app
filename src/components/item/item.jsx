import "./item.css";

export default function Item(props) {
   const {title} = props
  return (
    <li className="item">
      <div>{title}</div>
      <button>Delete</button>
    </li>
  );
}
