function ProductDetailsPage({ product }) {
  if (!product) {
    return <p>Product not found.</p>
  }

  return (
    <section aria-label="Product details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <strong aria-label={`Price: $${product.price.toFixed(2)}`}>
        ${product.price.toFixed(2)}
      </strong>
    </section>
  )
}

export default ProductDetailsPage