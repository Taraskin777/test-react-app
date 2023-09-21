import "./itemlist.css";

import Item from "../item/item";

export default function ItemList(props) {
  const { items, removeItem } = props;

  return (
    <ul className="itemList">
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          removeItem={removeItem}
          {...item}
        />
      ))}
    </ul>
  );
}
