import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Learn how to design and implement microservices architecture that can handle millions of requests with proper load balancing and fault tolerance.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop"
  },
  {
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is transforming the way we write code, debug applications, and optimize performance in modern software development.",
    date: "March 8, 2024",
    readTime: "6 min read",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop"
  },
  {
    title: "React Performance Optimization Techniques",
    excerpt: "Comprehensive guide to optimizing React applications for better performance, including code splitting, memoization, and virtual DOM best practices.",
    date: "February 28, 2024",
    readTime: "10 min read",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop"
  },
  {
    title: "Kubernetes in Production: Lessons Learned",
    excerpt: "Real-world insights from deploying and managing Kubernetes clusters in production environments, including common pitfalls and best practices.",
    date: "February 20, 2024",
    readTime: "12 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=300&fit=crop"
  }
];

export const BlogSection = () => {
  return (
    <section id="blog" className="py-20 px-6 lg:px-8 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-system font-bold text-4xl lg:text-5xl text-foreground mb-4">
            Latest Blog Posts
          </h2>
          <p className="font-system text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on software development and technology
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift animate-fade-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-system text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-system text-xs">{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span className="font-system text-xs">{post.readTime}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="font-system font-bold text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="font-system text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-system font-semibold text-sm group-hover:translate-x-1 transition-transform duration-200">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};