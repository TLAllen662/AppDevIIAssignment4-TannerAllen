import CartItem from '../components/CartItem'

function CartPage({ products, removeFromCart }) {
  const cartTotal = products.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <section id="cart" className="cart-section" aria-label="Shopping cart">
      <h2>Your Cart</h2>
      {products.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {products.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
        </div>
      )}
      {products.length > 0 && (
        <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
      )}
    </section>
  )
}

export default CartPage