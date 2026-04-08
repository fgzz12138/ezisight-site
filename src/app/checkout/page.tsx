"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { clearCart, getCart } from "@/lib/cart";
import { CartItem } from "@/types/cart";

export default function CheckoutPage() {
    const router = useRouter();
    const [cart, setCart] = useState<CartItem[]>([]);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postcode: "",
        country: "Australia",
    });

    useEffect(() => {
        setCart(getCart());
    }, []);

    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        clearCart();
        router.push("/success");
    };

    return (
        <div className="checkout-page-wrap">
            <Header />

            <main className="checkout-page">
                <div className="checkout-container">
                    <h1>Checkout</h1>

                    <div className="checkout-layout">
                        <form className="checkout-form" onSubmit={handleSubmit}>
                            <h2>Contact Details</h2>

                            <input
                                type="text"
                                placeholder="Full Name"
                                value={form.fullName}
                                onChange={(e) =>
                                    setForm({ ...form, fullName: e.target.value })
                                }
                                required
                            />

                            <input
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={(e) =>
                                    setForm({ ...form, phone: e.target.value })
                                }
                            />

                            <h2>Shipping Address</h2>

                            <input
                                type="text"
                                placeholder="Address"
                                value={form.address}
                                onChange={(e) =>
                                    setForm({ ...form, address: e.target.value })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="City"
                                value={form.city}
                                onChange={(e) =>
                                    setForm({ ...form, city: e.target.value })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="State"
                                value={form.state}
                                onChange={(e) =>
                                    setForm({ ...form, state: e.target.value })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Postcode"
                                value={form.postcode}
                                onChange={(e) =>
                                    setForm({ ...form, postcode: e.target.value })
                                }
                                required
                            />

                            <input
                                type="text"
                                placeholder="Country"
                                value={form.country}
                                onChange={(e) =>
                                    setForm({ ...form, country: e.target.value })
                                }
                                required
                            />

                            <button type="submit" className="checkout-submit-btn">
                                Place Order
                            </button>
                        </form>

                        <aside className="checkout-summary">
                            <h2>Order Summary</h2>

                            {cart.length === 0 ? (
                                <p className="checkout-empty-text">Your cart is empty.</p>
                            ) : (
                                <>
                                    {cart.map((item) => (
                                        <div key={item.slug} className="checkout-summary-item">
                                            <div>
                                                <p className="checkout-summary-name">{item.name}</p>
                                                <p className="checkout-summary-qty">
                                                    {item.quantity} × ${item.price.toFixed(2)}
                                                </p>
                                            </div>
                                            <p className="checkout-summary-line-total">
                                                ${(item.quantity * item.price).toFixed(2)}
                                            </p>
                                        </div>
                                    ))}

                                    <hr />

                                    <div className="checkout-total-row">
                                        <span>Total</span>
                                        <strong>${subtotal.toFixed(2)}</strong>
                                    </div>
                                </>
                            )}
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}