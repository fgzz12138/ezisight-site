import { CartItem } from "@/types/cart";

const CART_KEY = "shopping_cart";

function emitCartUpdate() {
    if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("cartUpdated"));
    }
}

export function getCart(): CartItem[] {
    if (typeof window === "undefined") return [];

    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return [];

    try {
        return JSON.parse(raw) as CartItem[];
    } catch {
        return [];
    }
}

export function saveCart(cart: CartItem[]) {
    if (typeof window === "undefined") return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    emitCartUpdate();
}

export function addToCart(item: CartItem) {
    const cart = getCart();
    const existingItem = cart.find((cartItem) => cartItem.slug === item.slug);

    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }

    saveCart(cart);
}

export function updateCartItemQuantity(slug: string, quantity: number) {
    const cart = getCart().map((item) =>
        item.slug === slug ? { ...item, quantity } : item
    );

    saveCart(cart.filter((item) => item.quantity > 0));
}

export function removeCartItem(slug: string) {
    const cart = getCart().filter((item) => item.slug !== slug);
    saveCart(cart);
}

export function clearCart() {
    if (typeof window === "undefined") return;
    localStorage.removeItem(CART_KEY);
    emitCartUpdate();
}

export function getCartCount() {
    const cart = getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
}