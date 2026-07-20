import NavbarDemo from "@/components/resizable-navbar-demo";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0d0a18]">
      <NavbarDemo />
      <Hero />
      <Footer />
    </main>
  );
}
