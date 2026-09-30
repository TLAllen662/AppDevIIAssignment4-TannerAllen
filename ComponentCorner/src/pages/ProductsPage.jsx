import ProductCard from '../components/ProductCard'

function ProductsPage({ products, onAddToCart }) {
  return (
    <section id="products" className="product-grid" aria-label="Featured products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  )
}

export default ProductsPage