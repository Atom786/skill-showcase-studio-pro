
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Dev<span className="text-foreground">Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              // Replace with actual resume download or link
              alert("Resume download would start here");
            }}
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection("about")}
              className="nav-link py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="nav-link py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="nav-link py-2"
            >
              Contact
            </button>
            <a
              href="#"
              className="nav-link py-2"
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                // Replace with actual resume download or link
                alert("Resume download would start here");
              }}
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
