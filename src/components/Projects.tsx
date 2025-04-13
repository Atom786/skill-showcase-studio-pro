
import { useState } from "react";
import ProjectCard, { ProjectProps } from "./ProjectCard";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const allProjects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment processing, user authentication, and inventory management.",
      imageUrl: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, with drag-and-drop functionality and team collaboration features.",
      imageUrl: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Redux", "Firebase", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Front End",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with location-based forecasting and interactive maps.",
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "API Integration", "D3.js", "CSS3"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Front End",
    },
    {
      title: "Content Management System",
      description: "A custom CMS for bloggers with rich text editing, SEO tools, and analytics dashboard.",
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#", 
      category: "Full Stack",
    },
    {
      title: "RESTful API Service",
      description: "A scalable REST API for handling data requests with authentication and rate limiting.",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Express", "JWT", "MongoDB"],
      githubUrl: "#",
      category: "Back End",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive charts and graphs for business intelligence with real-time data updates.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "D3.js", "Socket.io", "Material UI"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Data Visualization",
    },
  ];

  const categories = ["All", "Front End", "Back End", "Full Stack", "Data Visualization"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
