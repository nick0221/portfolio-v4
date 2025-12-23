import { Card, CardFooter, Button, Chip } from "@heroui/react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio v4",
      description:
        "My personal portfolio built with React, Tailwind, and HeroUI.",
      tech: ["React", "Tailwind CSS", "HeroUI"],
      live: "#",
      github: "#",
    },
    {
      title: "Laravel E-commerce",
      description:
        "A full-featured e-commerce platform using Laravel and MySQL.",
      tech: ["Laravel", "PHP", "MySQL"],
      live: "#",
      github: "#",
    },
    {
      title: "Task Manager App",
      description: "A productivity app built with React and Firebase.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          My Projects
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Some of the projects I’ve worked on recently.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-500"
          >
            <Card.Description>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech, i) => (
                  <Chip key={i} variant="secondary" className="px-3 mt-4">
                    {tech}
                  </Chip>
                ))}
              </div>
            </Card.Description>
            <CardFooter className="flex justify-between mt-4">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <Button size="sm">Live Demo</Button>
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  GitHub
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
