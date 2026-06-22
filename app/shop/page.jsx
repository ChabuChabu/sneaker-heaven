"use client";

import { useMemo, useState } from "react";
import { products } from "../data/products";

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export default function ShopPage() {
  const [cart, setCart] = useState({});

  const cartItems = useMemo(
    () =>
      products
        .filter((product) => cart[product.id])
        .map((product) => ({
          ...product,
          quantity: cart[product.id],
        })),
    [cart],
  );

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const cartLabel = `${cartCount} ${cartCount === 1 ? "item" : "items"}`;

  function addToCart(productId) {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] || 0) + 1,
    }));
  }

  function decreaseQuantity(productId) {
    setCart((currentCart) => {
      const currentQuantity = currentCart[productId] || 0;

      if (currentQuantity <= 1) {
        const nextCart = { ...currentCart };
        delete nextCart[productId];
        return nextCart;
      }

      return {
        ...currentCart,
        [productId]: currentQuantity - 1,
      };
    });
  }

  function removeFromCart(productId) {
    setCart((currentCart) => {
      const nextCart = { ...currentCart };
      delete nextCart[productId];
      return nextCart;
    });
  }

  function clearCart() {
    setCart({});
  }

  return (
    <main className="shop-layout">
      <section className="products-section" aria-labelledby="products-title">
        <div className="section-heading">
          <p className="eyebrow">Featured collection</p>
          <h1 id="products-title">Shop sneakers</h1>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <div>
                  <span className="product-tag">{product.tag}</span>
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                </div>

                <div className="product-actions">
                  <strong>{formatCurrency(product.price)}</strong>
                  <button type="button" onClick={() => addToCart(product.id)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="cart-panel" id="cart" aria-labelledby="cart-title">
        <div className="cart-heading">
          <div>
            <p className="eyebrow">Your bag</p>
            <h2 id="cart-title">Shopping Cart</h2>
          </div>
          <span>{cartLabel}</span>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart">
            Your cart is empty. Add a pair and it will appear here.
          </p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />

                  <div className="cart-item-details">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{formatCurrency(item.price)} each</p>
                    </div>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        aria-label={`Decrease ${item.name} quantity`}
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        aria-label={`Increase ${item.name} quantity`}
                        onClick={() => addToCart(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <div>
                <span>Subtotal</span>
                <strong>{formatCurrency(cartTotal)}</strong>
              </div>
              <button type="button" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </aside>
    </main>
  );
}
