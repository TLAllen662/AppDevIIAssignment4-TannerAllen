import CartItem from '../components/CartItem'

function CartPage({ cart, cartTotal, onRemoveFromCart }) {
  return (
    <section id="cart" className="cart-section" aria-label="Shopping cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onRemove={onRemoveFromCart} />
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
      )}
    </section>
  )
}

export default CartPage