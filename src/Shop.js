import getItems from './components/getItems';

function Item(props) {
  const { item } = props;
  return (
    <div className="Item">
      <p>{item.name}</p>
      <img alt={item.name} src={item.img} />
    </div>
  );
}

export default function Shop() {
  const items = getItems();
  return (
    <div className="Shop">
      {items.map((item) => {
        return <Item item={item} key={item.name} />;
      })}
    </div>
  );
}
