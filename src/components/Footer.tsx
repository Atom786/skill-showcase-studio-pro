
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-primary">
              Dev<span className="text-foreground">Portfolio</span>
            </a>
            <p className="text-muted-foreground mt-2">
              Building exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-muted-foreground flex items-center">
              Designed & Built with <Heart className="h-4 w-4 text-primary mx-1" /> 
              {currentYear}
            </p>
            
            <div className="mt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>{" "}
              &bull;{" "}
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
