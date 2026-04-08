# EziSight Smart Living Platform

A full-featured responsive web application built with Next.js, designed to simulate a real-world commercial website for smart home and building automation solutions.

This project focuses on combining modern front-end development with practical business requirements, including product display, enquiry systems, and user interaction flows.

---

## 📌 Project Background

This project was developed as part of my front-end development practice to replicate a real business scenario.

The goal was to build a production-style website that includes:

- Product browsing experience
- Business solution presentation (Commercial / Residential)
- Functional enquiry system with backend integration
- Responsive UI for real users

Unlike simple UI demos, this project simulates real workflows such as customer enquiries and product exploration.

---

## 🛠 Tech Stack

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Custom CSS (no UI framework)

### Backend (Lightweight)
- Next.js API Routes
- Resend (Email API)

### Tools & Libraries
- Lucide-react (icons)
- Vercel (deployment)

---

## ✨ Core Features

### 🛒 1. Product & Shop System

- Dynamic product listing
- Product detail pages
- Image switching (thumbnail interaction)
- Quantity selector logic
- Cart icon with real-time count

📌 Focus:
- Component reuse
- State management (useState)
- UI interaction design

---

### 🏢 2. Commercial & Residential Pages

- Structured business content layout
- Feature highlight sections
- Embedded media (video / images)
- CTA (Call-To-Action) flows

📌 Focus:
- Layout hierarchy
- Real-world content structuring
- UX readability

---

### 📩 3. Enquiry System (Full Flow)

- Form input handling (controlled components)
- API submission via `/api/enquiry`
- Email delivery using Resend
- Success / error UI feedback

📌 Flow:

User → Form → API → Resend → Company Email

📌 Key Implementation:

```ts
await fetch("/api/enquiry", {
  method: "POST",
  body: JSON.stringify(form),
});