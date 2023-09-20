import "./itemlist.css";

import Item from "../item/item";

export default function ItemList(props) {
  const { items } = props;
  console.log(items);

  return (
    <ul className="itemList">
      {items.map((item) => (
        <Item key={item.id} title={item.title} />
      ))}
    </ul>
  );
}
