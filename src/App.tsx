import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      {/* Projects and other sections will go here */}
    </main>
  );
}
