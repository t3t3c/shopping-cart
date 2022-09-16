import { MdShoppingCart } from 'react-icons/md';

export default function ShoppingCart(props) {
  return (
    <div className="Checkout">
      <MdShoppingCart className="shopping-cart" />
      {props.cartItems.length}
    </div>
  );
}
