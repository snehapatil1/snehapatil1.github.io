import { Shield, Cloud, Code, Database } from "lucide-react";

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    icon: Cloud,
    level: "Professional"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    icon: Cloud,
    level: "Professional"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    icon: Shield,
    level: "Administrator"
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2021",
    icon: Database,
    level: "Associate"
  },
  {
    name: "Meta React Developer",
    issuer: "Meta",
    date: "2021",
    icon: Code,
    level: "Professional"
  },
  {
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    date: "2020",
    icon: Shield,
    level: "Associate"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-8 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Certifications
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-xl p-6 hover-lift animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-system text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="font-system font-bold text-lg text-foreground mb-2">
                  {cert.name}
                </h3>
                
                <p className="font-system text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
                
                <span className="font-system text-xs font-medium text-accent-foreground bg-accent px-2 py-1 rounded-full">
                  {cert.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};