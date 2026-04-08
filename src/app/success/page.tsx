import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SuccessPage() {
    return (
        <div className="success-page-wrap">
            <Header />

            <main className="success-page">
                <div className="success-container">
                    <div className="success-card">
                        <p className="success-eyebrow">ORDER CONFIRMED</p>
                        <h1>Order Placed Successfully</h1>
                        <p className="success-text">
                            Thank you for your order. Your checkout flow has been completed.
                        </p>

                        <div className="success-actions">
                            <Link href="/shop" className="success-btn primary">
                                Back to Shop
                            </Link>
                            <Link href="/" className="success-btn secondary">
                                Go Home
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}