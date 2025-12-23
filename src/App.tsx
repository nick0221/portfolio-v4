import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      {/* Projects and other sections will go here */}
    </main>
  );
}
