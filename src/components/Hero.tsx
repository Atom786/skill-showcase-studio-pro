
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h4 className="text-primary mb-2 animate-fade-in">Hi, my name is</h4>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 animate-fade-in">
            John Doe.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-muted-foreground mb-6 animate-fade-in">
            I build things for the web.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 animate-fade-in">
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex space-x-4 animate-fade-in">
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Replace with actual resume download or link
                  alert("Resume download would start here");
                }}
              >
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-label="Scroll to about section"
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
