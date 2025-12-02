import { Trophy, Award, Star, Target } from "lucide-react";

const awards = [
  {
    title: "Employee of the Year",
    organization: "Tech Innovations Inc.",
    year: "2023",
    description: "Recognized for outstanding contribution to product development and team leadership",
    icon: Trophy
  },
  {
    title: "Best Innovation Award",
    organization: "Digital Solutions Ltd.",
    year: "2022",
    description: "Awarded for developing AI-powered analytics dashboard that increased efficiency by 45%",
    icon: Award
  },
  {
    title: "Hackathon Winner",
    organization: "TechCrunch Disrupt",
    year: "2021",
    description: "First place in blockchain category for developing decentralized finance application",
    icon: Star
  },
  {
    title: "Performance Excellence",
    organization: "StartupTech",
    year: "2020",
    description: "Achieved highest performance rating for consistently delivering high-quality solutions",
    icon: Target
  }
];

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in software development and innovation
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div
                key={index}
                className="card-gradient rounded-2xl p-6 shadow-soft hover-lift animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-system font-bold text-lg text-foreground">
                        {award.title}
                      </h3>
                      <span className="font-system text-sm font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <p className="font-system text-primary font-medium mb-2">
                      {award.organization}
                    </p>
                    <p className="font-system text-sm text-muted-foreground leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};