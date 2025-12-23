import { Button } from "@heroui/react";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  // Apply dark mode class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [isDark]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-white dark:bg-gray-900 transition-colors duration-500 relative">
      {/* Theme Toggle */}
      <div className="absolute top-6 right-6">
        <Button
          isIconOnly
          variant="ghost"
          onPress={() => setIsDark(!isDark)}
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white transition-colors duration-500">
          Hi, I’m <span className="text-primary">Romnick</span> 👋
        </h1>

        <p className="text-xl text-gray-700 dark:text-gray-300 transition-colors duration-500">
          Full-Stack Web Developer specializing in
          <span className="font-semibold"> Laravel & React</span>. I build
          clean, fast, and scalable web applications.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg">View Projects</Button>

          <Button variant="secondary" size="lg">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
