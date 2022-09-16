import { Link } from 'react-router-dom';
import guitarLogo from '../img/guitar-logo.png';
import ShoppingCart from './ShoppingCart';

export default function Navigation(props) {
  return (
    <nav className="Navigation">
      <Link className="link" to="/">
        <img alt="logo" src={guitarLogo} className="logo" />
      </Link>
      <ul className="nav-links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/shop">
          Shop
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
        <Link className="link" to="/checkout">
          <ShoppingCart cartItems={props.cartItems} />
        </Link>
      </ul>
    </nav>
  );
}
