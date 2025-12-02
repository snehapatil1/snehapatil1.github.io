import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@email.com",
    href: "mailto:john.doe@email.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/johndoe",
    color: "hover:text-blue-600"
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/johndoe",
    color: "hover:text-gray-800"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/johndoe",
    color: "hover:text-blue-400"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="animate-fade-up">
            <Card className="card-gradient border-none shadow-soft">
              <CardContent className="p-8">
                <h3 className="font-system font-bold text-2xl text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="font-system text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-system focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="font-system text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-system focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="font-system text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-system focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="font-system text-sm font-medium text-foreground mb-2 block">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-system focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                      placeholder="Project Discussion"
                    />
                  </div>
                  
                  <div>
                    <label className="font-system text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground font-system focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark font-system font-semibold py-3 rounded-xl shadow-glow hover:scale-[1.02] transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <div className="card-gradient rounded-2xl p-8 shadow-soft">
                <h3 className="font-system font-bold text-2xl text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center space-x-4 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-200 group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-system text-sm font-medium text-muted-foreground">
                            {info.label}
                          </p>
                          <p className="font-system font-semibold text-foreground">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
              
              <div className="card-gradient rounded-2xl p-8 shadow-soft">
                <h3 className="font-system font-bold text-xl text-foreground mb-6">
                  Follow Me
                </h3>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all duration-200 hover:scale-110 ${social.color}`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};