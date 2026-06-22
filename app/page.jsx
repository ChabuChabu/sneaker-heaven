import Link from "next/link";
import { products } from "./data/products";

const featuredProducts = products.slice(4, 7);

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Fresh pairs, simple checkout</p>
          <h1>Find sneakers that match your everyday stride.</h1>
          <p>
            Browse a growing collection of classic kicks, runners, trail shoes,
            and bold statement pairs. The shop is simple, fast, and ready for
            Vercel.
          </p>

          <div className="hero-actions">
            <Link className="primary-link" href="/shop">
              Shop Collection
            </Link>
            <Link className="secondary-link" href="/about">
              Learn About Us
            </Link>
          </div>
        </div>

        <div className="hero-image" aria-label="Featured sneaker image">
          <img src="/images/cloud-steps.png" alt="Cloud Steps sneakers" />
        </div>
      </section>

      <section className="preview-section" aria-labelledby="featured-title">
        <div className="section-heading">
          <p className="eyebrow">New arrivals</p>
          <h2 id="featured-title">Featured pairs</h2>
        </div>

        <div className="preview-grid">
          {featuredProducts.map((product) => (
            <article className="preview-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <span>{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
