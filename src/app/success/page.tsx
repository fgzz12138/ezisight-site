"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clearCart } from "@/lib/cart";

export default function SuccessPage() {
  const [status, setStatus] = useState<"loading" | "paid" | "failed">(
    "loading"
  );

  useEffect(() => {
    const verifyPayment = async () => {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");

      if (!sessionId) {
        setStatus("failed");
        return;
      }

      const res = await fetch(`/api/checkout/session?session_id=${sessionId}`);
      const data = await res.json();

      if (data.payment_status === "paid") {
        clearCart();
        window.dispatchEvent(new Event("cartUpdated"));
        setStatus("paid");
      } else {
        setStatus("failed");
      }
    };

    verifyPayment();
  }, []);

  return (
    <div className="success-page-wrap">
      <Header />

      <main className="success-page">
        <div className="success-container">
          <div className="success-card">
            <p className="success-eyebrow">
              {status === "loading" && "VERIFYING PAYMENT"}
              {status === "paid" && "ORDER CONFIRMED"}
              {status === "failed" && "PAYMENT NOT VERIFIED"}
            </p>

            <h1>
              {status === "loading" && "Verifying your payment..."}
              {status === "paid" && "Order Placed Successfully"}
              {status === "failed" && "Payment Verification Failed"}
            </h1>

            <p className="success-text">
              {status === "loading" &&
                "Please wait while we confirm your payment."}
              {status === "paid" &&
                "Thank you for your order. Your payment has been completed."}
              {status === "failed" &&
                "We could not verify this payment. Please contact support if you were charged."}
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
