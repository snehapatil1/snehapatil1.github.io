import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built for scalability with microservices architecture.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Machine learning platform that processes large datasets to provide actionable insights with interactive visualizations and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Real-time Chat Application",
    description: "Scalable messaging platform with end-to-end encryption, file sharing, and video calling capabilities supporting thousands of concurrent users.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Socket.io", "MongoDB", "WebRTC"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform using blockchain technology to ensure election integrity and provide real-time result tracking.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
    technologies: ["Solidity", "Web3.js", "React", "IPFS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and technical expertise across various domains
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-gradient rounded-2xl overflow-hidden shadow-soft hover-lift animate-fade-up group ${
                project.featured ? 'lg:col-span-1' : 'lg:col-span-1'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-system font-bold text-xl text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-primary" />
                    </a>
                  </div>
                </div>
                
                <p className="font-system text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="font-system text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};