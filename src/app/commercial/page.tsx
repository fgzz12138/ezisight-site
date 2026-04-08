"use client";
import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CommercialPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("success");
            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (err) {
            setStatus("error");
        }
    }

    const [status, setStatus] = useState("idle");

    return (
        <main className="commercial-page">
            <Header />

            {/* Hero */}
            <section className="commercial-hero">
                <div className="commercial-hero-overlay" />
                <div className="container commercial-hero-inner">
                    <div className="commercial-hero-content">
                        <p className="commercial-eyebrow">COMMERCIAL</p>
                        <h1>Smart Building Automation by USR</h1>
                        <p className="commercial-subtitle">
                            Reduce costs, automate operations, and gain real-time insights
                            across your building portfolio.
                        </p>
                        <a
                            href="https://ultimaite-stratarobotics.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="commercial-cta"
                        >
                            Book Consultation
                        </a>
                    </div>
                </div>
            </section>

            {/* Solution Features */}
            <section className="commercial-section">
                <div className="container commercial-grid solution-feature-grid">
                    <div className="commercial-section-title">
                        <h2>SOLUTION FEATURES</h2>

                        <ul className="feature-list">
                            <li>Temporary or permanent installation</li>
                            <li>240V with 2hr battery backup</li>
                            <li>Stand alone, solar with battery (optional)</li>
                            <li>4G wireless internet connectivity</li>
                            <li>SmartPhone/Tablet/PC access and control</li>
                            <li>Wifi Hotspot with 4Gbyte per month included</li>
                        </ul>
                    </div>

                    <div className="solution-video-card">
                        <video
                            className="solution-video"
                            src="/videos/solution-demo.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            controls
                        />
                    </div>
                </div>
            </section>

            {/* Innovative Technology Features */}
            <section className="commercial-section commercial-section-alt">
                <div className="container commercial-grid innovative-grid">

                    {/* 左边 */}
                    <div className="innovative-text">
                        <h2>INNOVATIVE TECHNOLOGY FEATURES</h2>

                        <ul className="feature-list">
                            <li>User defined perimeter surveillance</li>
                            <li>Users notification of intrusion inside set perimeter</li>
                            <li>AI recognition of human person and an animal</li>
                            <li>Flood/Strobe warning light & alarm</li>
                            <li>Recorded message playback upon intrusion detection</li>
                            <li>2 Way Voice Communication</li>
                            <li>Real Time Access to Camera Feed</li>
                        </ul>

                        <p className="feature-note">With AI Box Upgrade:</p>

                        <ul className="feature-list">
                            <li>Facial recognition</li>
                            <li>Fire & smoke detection</li>
                            <li>Safety uniform recognition</li>
                        </ul>
                    </div>

                    {/* 右边图片 */}
                    <div className="innovative-image">
                        <img
                            src="/images/commercial-2.avif"
                            alt="Smart surveillance system"
                        />
                    </div>

                </div>
            </section>
            {/* Smart Home & Office Solutions */}
            <section className="commercial-section smart-solution-section">
                <div className="container smart-solution-shell">
                    <div className="smart-solution-head">
                        <div className="smart-solution-heading">
                            <p className="smart-solution-eyebrow">SMART LIVING</p>
                            <h2>Smart Home &amp; Office Solutions</h2>
                            <p className="smart-solution-intro">
                                Practical smart systems designed to improve comfort, protection, and
                                day-to-day efficiency across homes and workspaces.
                            </p>
                        </div>
                    </div>

                    <div className="smart-solution-showcase">
                        <div className="smart-solution-media smart-solution-media-left">
                            <img
                                src="/images/commercial-3.avif"
                                alt="Smart wall switch system"
                            />
                        </div>

                        <div className="smart-solution-card">
                            <h3>EZISIGHT Smart Home Can:</h3>

                            <ul className="smart-solution-list">
                                <li>Protect your home</li>
                                <li>Save heating and cooling costs</li>
                                <li>Avoid floods from failed appliances</li>
                                <li>and much more!</li>
                            </ul>

                            <div className="card-actions">
                                <Link href="/projects" className="btn-primary">
                                    Learn More
                                </Link>

                                <Link href="/enquiries" className="btn-dark">
                                    Start Now
                                </Link>
                            </div>
                        </div>

                        <div className="smart-solution-media smart-solution-media-right">
                            <img
                                src="/images/commercial-4.avif"
                                alt="Smart home control interface"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className="commercial-section commercial-about">
                <div className="container commercial-grid">
                    <div className="commercial-section-title">
                        <h2>About EziSight</h2>
                    </div>

                    <div className="commercial-section-content">
                        <p>
                            Ezisight is part of the Virtus Group of companies which is an
                            infrastructure specialist.
                        </p>
                        <p>
                            Ezisight provides end to end smart solutions for residential
                            luxury homes, apartments, hotels and commercial buildings.
                            Ezisight is a strategic partner of global companies including,
                            Konke and Uniview.
                        </p>
                        <p>
                            Ezisight operate and have customers in Indonesia, UK and
                            Australia.
                        </p>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="map-shell">
                    <iframe
                        title="Company location map"
                        src="https://www.google.com/maps?q=U24,%20456%20St%20Kilda%20Rd,%20Melbourne,%20Victoria%203004,%20Australia&z=15&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </section>
            <section className="enquiry-section">
                <div className="container enquiry-shell">

                    <div className="enquiry-head">
                        <p className="enquiry-eyebrow">CONTACT</p>
                        <h2>Enquiries</h2>
                        <p className="enquiry-intro">
                            Tell us a little about your project and we will get back to you soon.
                        </p>
                    </div>
                    <form className="enquiry-form" onSubmit={handleSubmit}>
                        <div className="enquiry-field">
                            <label htmlFor="name">Name *</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="enquiry-field">
                            <label htmlFor="email">Email *</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="enquiry-field">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Type the subject"
                                value={form.subject}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="enquiry-field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Type your message here..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="enquiry-submit">
                            {status === "loading" ? "Submitting..." : "Submit"}
                        </button>

                        {status === "success" && (
                            <p style={{ marginTop: "10px" }}>✅ Sent successfully</p>
                        )}

                        {status === "error" && (
                            <p style={{ marginTop: "10px" }}>❌ Something went wrong</p>
                        )}
                    </form>

                </div>
            </section>
            <Footer />
        </main>
    );
}