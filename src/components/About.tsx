
import { CheckCircle } from "lucide-react";
import SkillBadge from "./SkillBadge";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", 
    "Express", "Next.js", "HTML/CSS", "Redux", 
    "GraphQL", "REST APIs", "MongoDB", "PostgreSQL", 
    "AWS", "Docker", "Git", "CI/CD"
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg mb-6">
              Hello! I'm a passionate software engineer with expertise in building modern web applications.
              My journey in tech started back in 2018, and I've been in love with coding ever since.
            </p>
            
            <p className="text-lg mb-6">
              I enjoy creating software that solves real-world problems and delivers exceptional user experiences.
              My focus is on writing clean, maintainable code and continuously learning new technologies.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold mb-2">Here are a few technologies I've been working with recently:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {["JavaScript (ES6+)", "React", "Node.js", "TypeScript", "AWS", "MongoDB"].map((item) => (
                  <li key={item} className="flex items-center">
                    <CheckCircle className="text-primary mr-2 h-5 w-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Senior Software Engineer</h4>
                  <p className="text-muted-foreground">Tech Solutions Inc. | 2021 - Present</p>
                  <p className="mt-2">Leading development of web applications using React and Node.js.</p>
                </div>
                
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">Full Stack Developer</h4>
                  <p className="text-muted-foreground">Digital Innovations | 2018 - 2021</p>
                  <p className="mt-2">Built and maintained multiple client projects with JavaScript and PHP.</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4">Education</h3>
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-medium">BSc in Computer Science</h4>
                <p className="text-muted-foreground">University of Technology | 2014 - 2018</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
