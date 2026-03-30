import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutHighlight from "@/components/AboutHighlight";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="home-page">
      <Header />
      <Hero />
      <About />
      <AboutHighlight />
      <Footer />
    </main>
  );
}