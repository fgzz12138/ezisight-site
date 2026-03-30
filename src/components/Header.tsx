"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

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

            <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                <nav className="mobile-nav-links">
                    <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="/commercial" onClick={() => setMenuOpen(false)}>Commercial</Link>
                    <Link href="/residential" onClick={() => setMenuOpen(false)}>Residential</Link>
                    <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link href="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
                    <Link href="/enquiries" onClick={() => setMenuOpen(false)}>Enquiries</Link>
                </nav>
            </div>
        </header>
    );
}