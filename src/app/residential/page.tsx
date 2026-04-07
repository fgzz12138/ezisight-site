"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type SlideItem = {
    image: string;
    alt: string;
    title: string;
    subtitle?: string;
};

type ResidentialTile =
    | {
        type: "image";
        image: string;
        alt: string;
    }
    | {
        type: "slider";
        slides: SlideItem[];
    }
    | {
        type: "content";
        title: string;
        text: string;
        href: string;
    };

function ResidentialImageSlider({ slides }: { slides: SlideItem[] }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3200);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="res-tile res-tile-slider">
            <div className="res-slider-track">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`res-slider-slide ${index === current ? "is-active" : ""}`}
                    >
                        <img src={slide.image} alt={slide.alt} />
                        <div className="res-slider-caption">
                            <h3>{slide.title}</h3>
                            {slide.subtitle && <p>{slide.subtitle}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <div className="res-slider-indicator">
                {current + 1}/{slides.length}
            </div>
        </div>
    );
}

const residentialTiles: ResidentialTile[] = [
    {
        type: "image",
        image: "/images/residential-1.avif",
        alt: "Smart home products",
    },
    {
        type: "content",
        title: "Products",
        text: "Smart technology devices provide you with a smart life. Discover more about the smart products here!",
        href: "/products",
    },
    {
        type: "slider",
        slides: [
            {
                image: "/images/residential-5.avif",
                alt: "Residential smart home project 1",
                title: "Jinke Bocui Blue Bay",
                subtitle: "Jinke Bocui Blue Bay",
            },
            {
                image: "/images/residential-6.avif",
                alt: "Residential smart home project 2",
                title: "Agile Clear Water Bay Project",
                subtitle: "Agile Clear Water Bay Project",
            },
            {
                image: "/images/residential-4.avif",
                alt: "Residential smart home project 3",
                title: "Huahong Blue City Spring Breeze Nanxi",
                subtitle: "Huahong Blue City Spring Breeze Nanxi",
            },
        ],
    },
    {
        type: "content",
        title: "Projects",
        text: "Have a look at the smart home projects.",
        href: "/projects",
    },
    {
        type: "content",
        title: "Contact",
        text: "If you would like to discuss your own smart house design, please feel free to call us. We are happy to talk with you!",
        href: "/contact",
    },
    {
        type: "image",
        image: "/images/residential-2.avif",
        alt: "Customer support consultant",
    },
    {
        type: "content",
        title: "FAQs",
        text: "If you have any questions about the smart home or us, please visit the FAQs page.",
        href: "/faqs",
    },
    {
        type: "image",
        image: "/images/residential-3.avif",
        alt: "FAQ and consultation",
    },
];

export default function ResidentialPage() {
    return (
        <main className="residential-page">
            <Header />

            <section className="residential-main-hero">
                <div className="residential-main-hero-overlay" />
                <div className="container residential-main-hero-inner">
                    <div className="residential-main-hero-content">
                        <h1>Smart Home Automation</h1>

                        <div className="residential-main-hero-actions">
                            <a href="/products" className="residential-main-hero-btn">
                                Shop Now
                            </a>
                            <a
                                href="/contact"
                                className="residential-main-hero-btn secondary"
                            >
                                Subscribe
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="residential-tiles-section">
                <div className="residential-tiles-grid">
                    {residentialTiles.map((item, index) => {
                        if (item.type === "image") {
                            return (
                                <div className="res-tile res-tile-image" key={index}>
                                    <img src={item.image} alt={item.alt} />
                                </div>
                            );
                        }

                        if (item.type === "slider") {
                            return <ResidentialImageSlider key={index} slides={item.slides} />;
                        }

                        return (
                            <article className="res-tile res-tile-content" key={index}>
                                <div className="res-tile-content-inner">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                    <a href={item.href} className="res-tile-link">
                                        View &gt;
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </main>
    );
}