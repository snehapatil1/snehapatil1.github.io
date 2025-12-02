import profileImage from "@/assets/profile-headshot.jpg";

const education = [
  {
    institution: "Stanford University",
    degree: "Master of Science in Computer Science",
    duration: "2016 - 2018",
    description: "Specialized in Machine Learning and Distributed Systems. Thesis on scalable ML algorithms.",
    gpa: "3.9/4.0",
    image: profileImage,
    imageAlt: "Stanford University Campus"
  },
  {
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science in Computer Science",
    duration: "2012 - 2016",
    description: "Major in Computer Science with focus on Software Engineering and Algorithms.",
    gpa: "3.8/4.0",
    image: profileImage,
    imageAlt: "UC Berkeley Campus"
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6 lg:px-8 bg-subtle-gradient section-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Education
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and continuous learning
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Education Image */}
              <div className="full-image-container">
                <img
                  src={edu.image}
                  alt={edu.imageAlt}
                  className="full-image w-full h-48 object-cover"
                />
                <div className="image-overlay" />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  GPA: {edu.gpa}
                </div>
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="font-system font-bold text-xl text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="font-system text-lg text-primary font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <span className="font-system text-sm font-medium text-muted-foreground">
                    {edu.duration}
                  </span>
                </div>
                
                <p className="font-system text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};