import Header from "../components/layout/Header";
import About from "../components/sections/About";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <About />
        <section id="experience" className="min-h-screen flex items-center justify-center bg-muted/50 scroll-mt-20 md:scroll-mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">Experience section coming soon...</p>
          </div>
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center bg-background scroll-mt-20 md:scroll-mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">Projects section coming soon...</p>
          </div>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center bg-muted/50 scroll-mt-20 md:scroll-mt-24">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">Contact section coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
