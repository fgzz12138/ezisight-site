"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getCart,
    updateCartItemQuantity,
    removeCartItem,
} from "@/lib/cart";
import { CartItem } from "@/types/cart";

export default function CartPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        setCart(getCart());
    }, []);

    const handleQuantityChange = (slug: string, newQuantity: number) => {
        updateCartItemQuantity(slug, newQuantity);
        setCart(getCart());
    };

    const handleRemove = (slug: string) => {
        removeCartItem(slug);
        setCart(getCart());
    };

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <main className="cart-page-wrap">
            <Header />

            <main className="cart-page">
                <div className="cart-container">
                    <h1>Shopping Cart</h1>

                    {cart.length === 0 ? (
                        <div className="cart-empty">
                            <p>Your cart is empty.</p>
                            <Link href="/shop">Continue Shopping</Link>
                        </div>
                    ) : (
                        <div className="cart-layout">
                            <div className="cart-items">
                                {cart.map((item) => (
                                    <div className="cart-item" key={item.slug}>
                                        <div className="cart-item-image">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={120}
                                                height={120}
                                            />
                                        </div>

                                        <div className="cart-item-info">
                                            <h3>{item.name}</h3>
                                            <p>${item.price.toFixed(2)}</p>

                                            <div className="cart-item-actions">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleQuantityChange(item.slug, item.quantity - 1)
                                                    }
                                                >
                                                    -
                                                </button>

                                                <span>{item.quantity}</span>

                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handleQuantityChange(item.slug, item.quantity + 1)
                                                    }
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <p>
                                                Subtotal: ${(item.price * item.quantity).toFixed(2)}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() => handleRemove(item.slug)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <aside className="cart-summary">
                                <h2>Order Summary</h2>
                                <p>Subtotal: ${subtotal.toFixed(2)}</p>

                                <Link href="/checkout" className="cart-checkout-btn">
                                    Proceed to Checkout
                                </Link>
                            </aside>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </main>
    );
}