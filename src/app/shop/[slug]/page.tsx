import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products } from "../../../data/product";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function Page({ params }: Props) {
    const { slug } = await params;

    const product = products.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Header />

            <main className="product-detail-page">
                <div className="shop-container">
                    <div className="detail-breadcrumb-row">
                        <p className="shop-breadcrumb">
                            <Link href="/">Home</Link> / <Link href="/shop">All Products</Link> / {product.name}
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
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="detail-main-img"
                                />
                            </div>

                            <div className="product-thumbs">
                                {product.gallery.map((img, index) => (
                                    <div key={index} className="product-thumb">
                                        <Image
                                            src={img}
                                            alt={`${product.name} ${index + 1}`}
                                            fill
                                            className="detail-thumb-img"
                                        />
                                    </div>
                                ))}
                            </div>

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
                                    <button type="button">−</button>
                                    <span>1</span>
                                    <button type="button">+</button>
                                </div>
                            </div>

                            <button className="detail-add-btn">Add to Cart</button>

                            <div className="accordion-wrap">
                                <div className="accordion-item open">
                                    <div className="accordion-header">
                                        <span>MODEL</span>
                                        <span>—</span>
                                    </div>
                                    <div className="accordion-content">
                                        <p>{product.model}</p>
                                    </div>
                                </div>

                                <div className="accordion-item open">
                                    <div className="accordion-header">
                                        <span>PARAMETER</span>
                                        <span>—</span>
                                    </div>
                                    <div className="accordion-content">
                                        <div className="parameter-list">
                                            {product.parameters.map((item, index) => (
                                                <p key={index}>{item}</p>
                                            ))}
                                        </div>
                                    </div>
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