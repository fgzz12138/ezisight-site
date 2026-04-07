import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "@/data/product";

export default function ShopPage() {
    return (
        <>
            <Header />

            <main className="shop-page">
                <section className="shop-hero">
                    <div className="shop-container">
                        <p className="shop-breadcrumb">Home / Shop</p>
                        <h1 className="shop-title">All Products</h1>
                        <p className="shop-subtitle">
                            Explore our product range across smart control, sensors, hubs, and security solutions.
                        </p>
                    </div>
                </section>

                <section className="shop-content">
                    <div className="shop-container shop-layout">
                        <aside className="shop-sidebar">
                            <h3>Filter by</h3>

                            <div className="shop-filter-block">
                                <h4>Product Type</h4>
                                <ul>
                                    <li>HUB</li>
                                    <li>SENSOR</li>
                                    <li>DOOR LOCK</li>
                                    <li>CAMERA</li>
                                    <li>POE</li>
                                </ul>
                            </div>

                            <div className="shop-filter-block">
                                <h4>Price</h4>
                                <p>A$40 — A$1,875</p>
                            </div>
                        </aside>

                        <div className="shop-main">
                            <div className="shop-toolbar">
                                <p>{products.length} products</p>
                                <div className="shop-sort">Sort by: Recommended</div>
                            </div>

                            <div className="product-grid">
                                {products.map((product) => (
                                    <div className="product-card" key={product.slug}>
                                        <Link href={`/shop/${product.slug}`} className="product-image-wrap">
                                            <div className="product-image-box">
                                                <Image
                                                    src={product.image}
                                                    alt={product.name}
                                                    fill
                                                    className="product-image primary-image"
                                                />
                                                <Image
                                                    src={product.hoverImage}
                                                    alt={`${product.name} hover`}
                                                    fill
                                                    className="product-image hover-image"
                                                />
                                                <div className="quick-view">Quick View</div>
                                            </div>
                                        </Link>

                                        <div className="product-card-body">
                                            <Link href={`/shop/${product.slug}`} className="product-name">
                                                {product.name}
                                            </Link>
                                            <div className="product-divider" />
                                            <p className="product-price">${product.price.toFixed(2)}</p>

                                            <Link href={`/shop/${product.slug}`} className="product-btn">
                                                Add to Cart
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}