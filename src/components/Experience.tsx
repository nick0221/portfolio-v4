import { Card } from "@heroui/react";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Yamaha Moto Phils",
      period: "Jan 2024 - Present",
      description:
        "Building and maintaining user interfaces using React and Tailwind CSS.",
    },
    {
      role: "Freelance Developer",
      company: "Self-employed",
      period: "2023 - Present",
      description:
        "Completed 4 freelance projects including web apps and portfolio sites.",
    },
    {
      role: "Intern",
      company: "Local Tech Company",
      period: "2022 - 2023",
      description: "Assisted in developing internal tools and dashboards.",
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Experience
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          My professional journey and freelance projects.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-900 shadow-lg transition-colors duration-500"
          >
            <Card.Description>
              <h3 className="text-2xl font-bold text-black dark:text-white">
                {exp.role}
              </h3>
              <span className="text-primary font-medium">{exp.company}</span>
              <span className="block text-gray-500 dark:text-gray-400 text-sm">
                {exp.period}
              </span>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {exp.description}
              </p>
            </Card.Description>
          </Card>
        ))}
      </div>
    </section>
  );
}
