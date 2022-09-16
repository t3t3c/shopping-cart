function CartItem(props) {
  function handleChange() {
    props.handleChange();
  }
  const { item } = props;
  return (
    <div className="CartItem">
      <img src={item.img} alt={item.name} />
      <div className="text">
        <p>{item.name}</p>
        <b className="">{`${item.price} $`}</b>
        <p>{`quantiny:`}</p>
        <input value={0} onChange={handleChange} />
      </div>
    </div>
  );
}

export default function Checkout(props) {
  const { cartItems } = props;
  return (
    <div className="Checkout">
      {cartItems.map((item) => {
        return <CartItem item={item} />;
      })}
      <p>in total: {0}</p>
      <button>Pay now</button>
    </div>
  );
}
