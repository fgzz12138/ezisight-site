import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auth, signOut } from "@/auth";

export default async function AccountPage() {
    const session = await auth();

    if (!session?.user) {
        redirect("/login");
    }

    return (
        <div className="account-page-wrap">
            <Header />

            <main className="account-page">
                <div className="account-container">
                    <div className="account-card">
                        <p className="account-eyebrow">MY ACCOUNT</p>
                        <h1>Welcome back</h1>

                        <div className="account-info">
                            <div className="account-info-row">
                                <span>Name</span>
                                <strong>{session.user.name || "User"}</strong>
                            </div>

                            <div className="account-info-row">
                                <span>Email</span>
                                <strong>{session.user.email || "No email"}</strong>
                            </div>
                        </div>

                        <div className="account-actions">
                            <Link href="/shop" className="account-btn secondary">
                                Continue Shopping
                            </Link>

                            <form
                                action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: "/login" });
                                }}
                            >
                                <button type="submit" className="account-btn primary">
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}