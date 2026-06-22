import Link from "next/link";

export const metadata = {
  title: "About | Sneaker Heaven",
  description: "Learn more about Sneaker Heaven.",
};

export default function AboutPage() {
  return (
    <main className="content-page">
      <section className="about-hero">
        <p className="eyebrow">About Sneaker Heaven</p>
        <h1>Simple shopping for people who just love good sneakers.</h1>
        <p>
          Sneaker Heaven started as a small static page and is now a functional
          Next.js storefront. The goal is still the same: show great products
          clearly and make adding them to a cart feel effortless.
        </p>
      </section>

      <section className="values-grid" aria-label="What we care about">
        <article>
          <h2>Curated Pairs</h2>
          <p>
            The collection mixes everyday classics, runners, retro courts, and
            trail-ready styles so shoppers can compare different looks quickly.
          </p>
        </article>

        <article>
          <h2>Clear Experience</h2>
          <p>
            Product cards, prices, cart quantities, and totals stay visible and
            easy to understand across desktop and mobile screens.
          </p>
        </article>

        <article>
          <h2>Built To Deploy</h2>
          <p>
            The project uses standard Next.js routes and local assets, so it can
            be deployed to Vercel without extra services.
          </p>
        </article>
      </section>

      <section className="about-cta">
        <h2>Ready to pick a pair?</h2>
        <Link className="primary-link" href="/shop">
          Go To Shop
        </Link>
      </section>
    </main>
  );
}
