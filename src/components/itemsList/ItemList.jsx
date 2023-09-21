import "./itemlist.css";

import Item from "../item/item";

export default function ItemList(props) {
  const { items, removeItem, toggleItem } = props;

  return (
    <ul className="itemList">
      {items.map((item) => (
        <Item
          key={item.id}
          title={item.title}
          removeItem={removeItem}
          toggleItem={toggleItem}
          {...item}
        />
      ))}
    </ul>
  );
}
