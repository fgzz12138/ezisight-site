"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
    const [email, setEmail] = useState("test@test.com");
    const [password, setPassword] = useState("123456");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError("");
        setLoading(true);

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
            callbackUrl: "/account",
        });

        setLoading(false);

        if (result?.error) {
            setError("Invalid email or password.");
            return;
        }

        window.location.href = "/account";
    }

    return (
        <div className="login-page-wrap">
            <Header />

            <main className="login-page">
                <div className="login-container">
                    <div className="login-card">
                        <p className="login-eyebrow">ACCOUNT ACCESS</p>
                        <h1>Login</h1>
                        <p className="login-intro">
                            Sign in to access your account page and future order history.
                        </p>

                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="login-field">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="login-field">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            {error && <p className="login-error">{error}</p>}

                            <button type="submit" className="login-submit-btn" disabled={loading}>
                                {loading ? "Signing In..." : "Login"}
                            </button>
                        </form>

                        <p className="login-helper">
                            Test account: <strong>test@test.com</strong> / <strong>123456</strong>
                        </p>

                        <p className="login-footer-text">
                            No account yet? <Link href="/register">Create one later</Link>
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}