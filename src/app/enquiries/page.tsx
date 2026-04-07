"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function EnquiriesPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <main className="enquiries-page">
            <Header />

            {/* Hero */}
            <section className="enquiries-hero">
                <div className="container enquiries-hero-inner">
                    <p className="enquiries-eyebrow">CONTACT</p>
                    <h1>Enquiries</h1>
                    <p className="enquiries-hero-text">
                        Tell us a little about your project, enquiry, or requirements and our
                        team will get back to you soon.
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="enquiries-section">
                <div className="container enquiries-grid">
                    <div className="enquiries-copy">
                        <p className="section-kicker">ENQUIRIES</p>
                        <h2>Let’s Start the Conversation</h2>
                        <p>
                            Whether you are enquiring about smart building systems, residential
                            solutions, or project support, send us your details below and we will
                            respond as soon as possible.
                        </p>
                    </div>

                    <div className="enquiries-card">
                        <form className="enquiries-form" onSubmit={handleSubmit}>
                            <div className="enquiries-field">
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

                            <div className="enquiries-field">
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

                            <div className="enquiries-field">
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

                            <div className="enquiries-field">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    placeholder="Type your message here..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <button type="submit" className="enquiries-submit">
                                {status === "loading" ? "Submitting..." : "Submit"}
                            </button>

                            {status === "success" && (
                                <p className="enquiries-status success">✅ Thanks for submitting!</p>
                            )}

                            {status === "error" && (
                                <p className="enquiries-status error">❌ Something went wrong. Please try again.</p>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Visit Us Section */}
            <section className="visit-section">
                <div className="container visit-grid">
                    <div className="visit-info">
                        <p className="section-kicker">VISIT US</p>
                        <h2>Visit Us</h2>

                        <div className="visit-block">
                            <h3>Address</h3>
                            <p>U24, 456 St Kilda Rd, Melbourne, Victoria 3004, Australia</p>
                        </div>

                        <div className="visit-block">
                            <h3>Opening Hours</h3>
                            <ul className="visit-hours">
                                <li>
                                    <span>Mon - Fri</span>
                                    <span>8:00 am – 8:00 pm</span>
                                </li>
                                <li>
                                    <span>Saturday</span>
                                    <span>9:00 am – 7:00 pm</span>
                                </li>
                                <li>
                                    <span>Sunday</span>
                                    <span>9:00 am – 9:00 pm</span>
                                </li>
                            </ul>
                        </div>

                        <div className="visit-block">
                            <h3>Contact</h3>
                            <p>(03) 9880 2368</p>
                            <p>info@ezisight.com.au</p>
                        </div>
                    </div>

                    <div className="visit-map-card">
                        <iframe
                            title="EziSight location map"
                            src="https://www.google.com/maps?q=U24,%20456%20St%20Kilda%20Rd,%20Melbourne,%20Victoria%203004,%20Australia&z=15&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}