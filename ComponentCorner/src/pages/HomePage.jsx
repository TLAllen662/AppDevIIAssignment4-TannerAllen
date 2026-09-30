import Hero from '../components/Hero'
import './HomePage.css'

function HomePage() {
  return (
    <>
      <Hero
        title="Smart components for modern shopping"
        subtitle="Find thoughtful tools and resources for building better digital experiences."
        ctaText="Explore products"
      />
      <section className="home-intro" aria-label="Why shop with us">
        <h2>Why Shop with Us?</h2>
        <p>
          ComponentCorner curates high-quality tech accessories that make everyday work and life
          easier. We hand-pick every product for reliability, value, and design.
        </p>
        <ul className="home-intro__list">
          <li>Fast, free shipping on every order</li>
          <li>30-day hassle-free returns</li>
          <li>Friendly support from real people</li>
        </ul>
      </section>
    </>
  )
}

export default HomePage