import { Link } from 'react-router-dom';

export default function ShopButton() {
  return (
    <div className="ShopButton">
      <Link to="/shop" className="shop-text">
        Shop guitars
      </Link>
    </div>
  );
}
