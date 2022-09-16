import getItems from './components/getItems';

function Item(props) {
  const { item, addToCart } = props;
  function handleClick() {
    return addToCart(item);
  }
  return (
    <div className="Item">
      <img alt={item.name} src={item.img} />
      <div className="description">
        <p>{item.name}</p>
        <p>{`${item.price},00 $`}</p>
        <button onClick={handleClick}>Add To Cart</button>
      </div>
    </div>
  );
}

export default function Shop(props) {
  function addToCart(item) {
    props.addToCart(item);
  }
  const items = getItems();
  return (
    <div className="Shop">
      <div className="shop-gallery">
        {items.map((item) => {
          return <Item item={item} addToCart={addToCart} key={item.name} />;
        })}
      </div>
    </div>
  );
}
