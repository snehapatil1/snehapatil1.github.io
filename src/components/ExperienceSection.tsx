const experiences = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    description: "Led development of microservices architecture, mentored junior developers, and implemented CI/CD pipelines that reduced deployment time by 60%.",
    technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"]
  },
  {
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "2020 - 2022",
    description: "Built scalable web applications serving 100k+ users, optimized database queries improving performance by 40%.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GraphQL"]
  },
  {
    company: "StartupTech",
    position: "Software Developer",
    duration: "2018 - 2020",
    description: "Developed MVP products from scratch, collaborated with cross-functional teams to deliver features on tight deadlines.",
    technologies: ["JavaScript", "Express.js", "MongoDB", "Firebase"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 lg:px-8 section-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Work Experience
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions across various industries and technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-gradient rounded-2xl p-8 shadow-soft hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                <div>
                  <h3 className="font-system font-bold text-2xl text-foreground mb-1">
                    {exp.position}
                  </h3>
                  <p className="font-system text-lg text-primary font-semibold">
                    {exp.company}
                  </p>
                </div>
                <span className="font-system text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 lg:mt-0 self-start">
                  {exp.duration}
                </span>
              </div>
              
              <p className="font-system text-muted-foreground mb-6 leading-relaxed">
                {exp.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="font-system text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};