import NavbarDemo from "@/components/resizable-navbar-demo";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0d0a18]">
      <NavbarDemo />

      {/* Hero placeholder */}
      <section
        id="home"
        className="flex flex-1 items-center justify-center min-h-[80vh] px-6"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Abdullah Siddique
          </h1>
          <p className="text-neutral-400 text-lg tracking-widest uppercase text-sm">
            Full Stack Developer
          </p>
        </div>
      </section>
    </main>
  );
}
