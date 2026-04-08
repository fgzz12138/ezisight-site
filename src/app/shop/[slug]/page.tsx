"use client";

import { useRouter } from "next/navigation";
import { addToCart } from "@/lib/cart";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "../../../data/product";

export default function Page() {
    const params = useParams();
    const slug = params?.slug as string;

    const product = useMemo(
        () => products.find((item) => item.slug === slug),
        [slug]
    );

    if (!product) {
        notFound();
    }

    const galleryImages =
        product.gallery && product.gallery.length > 0
            ? [product.image, ...product.gallery.filter((img) => img !== product.image)]
            : [product.image];

    const [activeImage, setActiveImage] = useState(galleryImages[0]);
    const [quantity, setQuantity] = useState(1);
    const [isModelOpen, setIsModelOpen] = useState(true);
    const [isParameterOpen, setIsParameterOpen] = useState(true);

    const decreaseQty = () => {
        setQuantity((prev) => Math.max(1, prev - 1));
    };

    const increaseQty = () => {
        setQuantity((prev) => prev + 1);
    };

    const router = useRouter();

    const handleAddToCart = () => {
        addToCart({
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
        });

        router.push("/cart");
    };
    return (
        <>
            <Header />

            <main className="product-detail-page">
                <div className="shop-container">
                    <div className="detail-breadcrumb-row">
                        <p className="shop-breadcrumb">
                            <Link href="/">Home</Link> /{" "}
                            <Link href="/shop">All Products</Link> / {product.name}
                        </p>

                        <div className="detail-nav">
                            <Link href="/shop">← Back to Shop</Link>
                        </div>
                    </div>

                    <section className="product-detail-layout">
                        {/* 左边图片区 */}
                        <div className="product-gallery">
                            <div className="product-main-image">
                                <Image
                                    src={activeImage}
                                    alt={product.name}
                                    fill
                                    className="detail-main-img"
                                />
                            </div>

                            {galleryImages.length > 0 && (
                                <div className="product-thumbs">
                                    {galleryImages.map((img, index) => (
                                        <button
                                            type="button"
                                            key={index}
                                            className={`product-thumb ${activeImage === img ? "is-active" : ""}`}
                                            onClick={() => setActiveImage(img)}
                                            aria-label={`View thumbnail ${index + 1}`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${product.name} ${index + 1}`}
                                                fill
                                                className="detail-thumb-img"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}

                            <p className="product-description-bottom">
                                {product.description}
                            </p>
                        </div>

                        {/* 右边信息区 */}
                        <div className="product-info-panel">
                            <h1>{product.name}</h1>
                            <p className="product-sku">SKU: {product.sku}</p>
                            <p className="detail-price">${product.price.toFixed(2)}</p>

                            <div className="quantity-block">
                                <label>Quantity *</label>
                                <div className="qty-box">
                                    <button
                                        type="button"
                                        onClick={decreaseQty}
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <span>{quantity}</span>
                                    <button
                                        type="button"
                                        onClick={increaseQty}
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button className="detail-add-btn" onClick={handleAddToCart} type="button">
                                Add to Cart
                            </button>

                            <div className="accordion-wrap">
                                <div className={`accordion-item ${isModelOpen ? "open" : ""}`}>
                                    <button
                                        type="button"
                                        className="accordion-header"
                                        onClick={() => setIsModelOpen((prev) => !prev)}
                                    >
                                        <span>MODEL</span>
                                        <span className="accordion-icon">
                                            {isModelOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isModelOpen && (
                                        <div className="accordion-content">
                                            <p>{product.model}</p>
                                        </div>
                                    )}
                                </div>

                                <div className={`accordion-item ${isParameterOpen ? "open" : ""}`}>
                                    <button
                                        type="button"
                                        className="accordion-header"
                                        onClick={() => setIsParameterOpen((prev) => !prev)}
                                    >
                                        <span>PARAMETER</span>
                                        <span className="accordion-icon">
                                            {isParameterOpen ? "−" : "+"}
                                        </span>
                                    </button>

                                    {isParameterOpen && (
                                        <div className="accordion-content">
                                            <div className="parameter-list">
                                                {product.parameters.map((item, index) => (
                                                    <p key={index}>{item}</p>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </>
    );
}