import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand-link" href="/">
        <span>Sneaker Heaven</span>
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
