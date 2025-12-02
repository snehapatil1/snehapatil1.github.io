import profileImage from "@/assets/profile-headshot.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const HeroSection = () => {
  useScrollAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16 section-visible">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="font-system font-bold text-5xl lg:text-7xl text-foreground mb-6 text-balance">
              Software Engineer
            </h1>
            
            <p className="font-system text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl text-balance">
              Passionate about creating innovative solutions and building scalable applications 
              that make a difference in people's lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-system font-semibold shadow-glow hover:scale-105 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 border border-border bg-card text-card-foreground rounded-xl font-system font-semibold hover-lift transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Full Image Section */}
          <div className="flex flex-col gap-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="full-image-container glass-transition rounded-2xl overflow-hidden">
              <img
                src={profileImage}
                alt="Professional Software Engineer"
                className="full-image w-full h-96 object-cover"
              />
              <div className="image-overlay" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="full-image-container glass-card rounded-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Working Environment"
                  className="full-image w-full h-32 object-cover opacity-80"
                />
                <div className="image-overlay" />
              </div>
              <div className="full-image-container glass-card rounded-xl overflow-hidden">
                <img
                  src={profileImage}
                  alt="Technology Focus"
                  className="full-image w-full h-32 object-cover opacity-80"
                />
                <div className="image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};