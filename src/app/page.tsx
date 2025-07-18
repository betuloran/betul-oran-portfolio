import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <section id="about" className="min-h-screen bg-muted/50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">About</h2>
            <p className="text-muted-foreground">About section coming soon...</p>
          </div>
        </section>
        <section id="experience" className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-muted-foreground">Experience section coming soon...</p>
          </div>
        </section>
        <section id="projects" className="min-h-screen bg-muted/50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">Projects section coming soon...</p>
          </div>
        </section>
        <section id="contact" className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">Contact section coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
