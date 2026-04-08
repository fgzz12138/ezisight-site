"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegisterPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.fullName.trim()) {
            setError("Please enter your full name.");
            return;
        }

        if (!form.email.trim()) {
            setError("Please enter your email.");
            return;
        }

        if (form.password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (form.password !== form.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        // Temporary front-end only flow for Milestone 3
        setTimeout(() => {
            setLoading(false);
            setSuccess("Account created successfully. Redirecting to login...");
            router.push("/login");
        }, 800);
    }

    return (
        <div className="register-page-wrap">
            <Header />

            <main className="register-page">
                <div className="register-container">
                    <div className="register-card">
                        <p className="register-eyebrow">CREATE ACCOUNT</p>
                        <h1>Register</h1>
                        <p className="register-intro">
                            Create an account for faster checkout and future order access.
                        </p>

                        <form className="register-form" onSubmit={handleSubmit}>
                            <div className="register-field">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder="Enter your full name"
                                    value={form.fullName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="register-field">
                                <label htmlFor="email">Email</label>
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

                            <div className="register-field">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Create a password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="register-field">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm your password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {error && <p className="register-error">{error}</p>}
                            {success && <p className="register-success">{success}</p>}

                            <button
                                type="submit"
                                className="register-submit-btn"
                                disabled={loading}
                            >
                                {loading ? "Creating Account..." : "Create Account"}
                            </button>
                        </form>

                        <p className="register-footer-text">
                            Already have an account? <Link href="/login">Login here</Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}