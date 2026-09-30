import ProductCard from '../components/ProductCard'

function ProductsPage({ products, addToCart }) {
  return (
    <>
      <h1>ComponentCorner Products</h1>
      <section id="products" className="product-grid" aria-label="Featured products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </section>
    </>
  )
}

export default ProductsPage