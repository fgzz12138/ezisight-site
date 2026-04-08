"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { getCartCount } from "@/lib/cart";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCart = () => {
            setCartCount(getCartCount());
        };

        updateCart();

        window.addEventListener("cartUpdated", updateCart);
        window.addEventListener("storage", updateCart);

        return () => {
            window.removeEventListener("cartUpdated", updateCart);
            window.removeEventListener("storage", updateCart);
        };
    }, []);

    return (
        <header className="site-header">
            <div className="container nav-row">
                <Link href="/" className="logo">
                    Ultimate Sustainable Living
                </Link>

                <nav className="desktop-nav">
                    <Link href="/">Home</Link>
                    <Link href="/commercial">Commercial</Link>
                    <Link href="/residential">Residential</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/shop">Shop</Link>
                    <Link href="/enquiries">Enquiries</Link>
                </nav>

                <div className="nav-actions">
                    <Link href="/account" className="nav-account" aria-label="Account">
                        <User size={22} strokeWidth={1.8} />
                    </Link>

                    <Link href="/cart" className="nav-cart" aria-label="Cart">
                        <ShoppingCart size={22} strokeWidth={1.8} />
                        {cartCount > 0 && (
                            <span className="nav-cart-badge">{cartCount}</span>
                        )}
                    </Link>

                    <button
                        className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                <nav className="mobile-nav-links">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link>
                    <Link href="/residential" onClick={() => setMenuOpen(false)}>Residential</Link>
                    <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                    <Link href="/enquiries" onClick={() => setMenuOpen(false)}>Enquiries</Link>
                    <Link href="/account" onClick={() => setMenuOpen(false)}>Account</Link>
                    <Link href="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
                </nav>
            </div>
        </header>
    );
}