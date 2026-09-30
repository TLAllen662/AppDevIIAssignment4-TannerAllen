import { Link } from 'react-router-dom'
import './Header.css'

function Header({ storeName, cartCount }) {
  return (
    <header>
      <h1>{storeName}</h1>
      <nav aria-label="Main navigation">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <Link to="/cart" className="cart-container">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </header>
  )
}

export default Header
