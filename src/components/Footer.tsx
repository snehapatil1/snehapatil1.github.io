import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span className="font-system text-sm">Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span className="font-system text-sm">by a passionate Software Engineer</span>
          </div>
          
          <div className="font-system text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};