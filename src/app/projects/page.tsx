"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type GalleryImage = {
    src: string;
    alt: string;
};

type ProductDetail = {
    label: string;
    value: string;
};

type ProductItem = {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    description: string;
    details: ProductDetail[];
    images: GalleryImage[];
    layout: "equal" | "stack";
};

const products: ProductItem[] = [
    {
        id: "product-1",
        label: "Product 1",
        title: "Agile Clear Water Bay",
        subtitle: "High-end resort deployment",
        description:
            "A premium sustainable living deployment showcasing integrated residential systems in a high-end resort environment.",
        details: [
            { label: "Project Name", value: "Agile Clear Water Bay" },
            { label: "Project Address", value: "Hainan Province" },
            { label: "Developer", value: "Agile Real Estate" },
            { label: "Timeline", value: "2008–2018" },
        ],
        layout: "equal",
        images: [
            { src: "/images/project-1-1.avif", alt: "Product 1 image 1" },
            { src: "/images/project-1-2.avif", alt: "Product 1 image 2" },
            { src: "/images/project-1-3.avif", alt: "Product 1 image 3" },
            { src: "/images/project-1-4.avif", alt: "Product 1 image 4" },
        ],
    },
    {
        id: "product-2",
        label: "Product 2",
        title: "Huahong Blue City Spring Breeze Nanxi",
        subtitle: "Lifestyle-focused smart residential project",
        description:
            "A smart residential project combining comfort, automation, security, and environmental control into one connected living experience.",
        details: [
            { label: "Project Name", value: "Huahong Blue City Spring Breeze Nanxi" },
            { label: "Project Address", value: "Wenzhou" },
            { label: "Developer", value: "HUAHONG JIAXIN" },
            { label: "Timeline", value: "2019–2021" },
        ],
        layout: "equal",
        images: [
            { src: "/images/project-2-1.png", alt: "Product 2 image 1" },
            { src: "/images/project-2-2.png", alt: "Product 2 image 2" },
            { src: "/images/project-2-3.png", alt: "Product 2 image 3" },
            { src: "/images/project-2-4.png", alt: "Product 2 image 4" },
        ],
    },
    {
        id: "product-3",
        label: "Product 3",
        title: "Jinke Bocui Blue Bay",
        subtitle: "High-end integrated home control project",
        description:
            "A high-end smart home deployment featuring lighting, security, appliances, and environmental control systems.",
        details: [
            { label: "Project Name", value: "Jinke Bocui Blue Bay" },
            { label: "Project Address", value: "Hangzhou" },
            { label: "Developer", value: "Jinke Real" },
            { label: "Timeline", value: "2020–2022" },
        ],
        layout: "equal",
        images: [
            { src: "/images/project-3-1.avif", alt: "Product 3 image 1" },
            { src: "/images/project-3-2.avif", alt: "Product 3 image 2" },
            { src: "/images/project-3-3.avif", alt: "Product 3 image 3" },
            { src: "/images/project-3-4.avif", alt: "Product 3 image 4" },
        ],
    },
    {
        id: "product-4",
        label: "Product 4",
        title: "Broadacre Constructions",
        subtitle: "Remote site monitoring deployment",
        description:
            "A practical monitoring solution that gives customers remote visibility into project progress, site activity, and security events in real time.",
        details: [
            { label: "Project Name", value: "Broadacre Constructions" },
            { label: "Application", value: "Remote Monitoring" },
            { label: "Key Feature", value: "PTZ Mobile Control" },
            { label: "Alert Type", value: "Video push notification" },
        ],
        layout: "stack",
        images: [
            { src: "/images/project-4-4-1.avif", alt: "Product 4 main image 1" },
            { src: "/images/project-4-4-2.avif", alt: "Product 4 main image 2" },
            { src: "/images/project-4-2.avif", alt: "Product 4 side image 1" },
            { src: "/images/project-4-3.avif", alt: "Product 4 side image 2" },
            { src: "/images/project-4-1.avif", alt: "Product 4 side image 3" },
        ],
    },
];

export default function ProjectsPage() {
    const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
    const [product4Slide, setProduct4Slide] = useState(0);

    const goPrevProduct4 = () => {
        setProduct4Slide((prev) => (prev === 0 ? 1 : 0));
    };

    const goNextProduct4 = () => {
        setProduct4Slide((prev) => (prev === 1 ? 0 : 1));
    };

    return (
        <>
            <Header />

            <main className="usr-projects-page">
                <section className="usr-projects-hero">
                    <div className="usr-projects-container">
                        <p className="usr-projects-eyebrow">PROJECTS</p>
                        <h1>Featured Product Deployments</h1>
                        <p className="usr-projects-intro">
                            A selection of sustainable living and smart deployment projects
                            across premium residential and monitoring environments.
                        </p>
                    </div>
                </section>

                <section className="usr-projects-list-section">
                    <div className="usr-projects-container">
                        <div className="usr-projects-list">
                            {products.map((product) => (
                                <article className="usr-project-block" key={product.id}>
                                    <div className="usr-project-block-grid">
                                        <div className="usr-project-info-card">
                                            <p className="usr-project-label">{product.label}</p>
                                            <h2>{product.title}</h2>
                                            <p className="usr-project-subtitle">{product.subtitle}</p>
                                            <p className="usr-project-description">
                                                {product.description}
                                            </p>

                                            <div className="usr-project-meta">
                                                {product.details.map((item) => (
                                                    <div className="usr-project-meta-row" key={item.label}>
                                                        <span className="usr-project-meta-label">
                                                            {item.label}
                                                        </span>
                                                        <span className="usr-project-meta-value">
                                                            {item.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {product.layout === "equal" ? (
                                            <div className="usr-gallery-layout-equal">
                                                {product.images.map((image, index) => (
                                                    <button
                                                        key={`${product.id}-${index}`}
                                                        type="button"
                                                        className="usr-gallery-equal-tile"
                                                        onClick={() => setLightboxImage(image)}
                                                    >
                                                        <img src={image.src} alt={image.alt} />
                                                    </button>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="usr-gallery-layout-stack">
                                                <div className="usr-gallery-stack-main-wrap">
                                                    <button
                                                        type="button"
                                                        className="usr-gallery-stack-main"
                                                        onClick={() =>
                                                            setLightboxImage(product.images[product4Slide])
                                                        }
                                                    >
                                                        <img
                                                            src={product.images[product4Slide].src}
                                                            alt={product.images[product4Slide].alt}
                                                        />
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="usr-stack-nav usr-stack-nav-prev"
                                                        onClick={goPrevProduct4}
                                                        aria-label="Previous image"
                                                    >
                                                        ‹
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="usr-stack-nav usr-stack-nav-next"
                                                        onClick={goNextProduct4}
                                                        aria-label="Next image"
                                                    >
                                                        ›
                                                    </button>
                                                </div>

                                                <div className="usr-gallery-stack-side">
                                                    {product.images.slice(2, 5).map((image, index) => (
                                                        <button
                                                            key={`${product.id}-side-${index}`}
                                                            type="button"
                                                            className="usr-gallery-stack-small"
                                                            onClick={() => setLightboxImage(image)}
                                                        >
                                                            <img src={image.src} alt={image.alt} />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {lightboxImage && (
                    <div className="usr-lightbox" onClick={() => setLightboxImage(null)}>
                        <div
                            className="usr-lightbox-dialog"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                type="button"
                                className="usr-lightbox-close"
                                onClick={() => setLightboxImage(null)}
                            >
                                ×
                            </button>
                            <img src={lightboxImage.src} alt={lightboxImage.alt} />
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}