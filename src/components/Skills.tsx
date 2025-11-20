import { Code2, Wrench, Users, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    icon: Code2,
    title: "Web Development",
    skills: [
      "HTML, CSS, JavaScript",
      "Node.js & Express.js",
      "MongoDB",
      "EJS Templating",
      "MVC Architecture",
      "REST API Creation",
      "Git Version Control",
      "Deployment & Hosting",
      "Responsive Design"
    ]
  },
  {
    icon: Wrench,
    title: "Other Technical Skills",
    skills: [
      "Python Basics + Projects",
      "Linux Fundamentals",
      "Hardware Troubleshooting",
      "Software Installation",
      "System Diagnostics",
      "Technical Problem-Solving"
    ]
  },
  {
    icon: Users,
    title: "Professional Strengths",
    skills: [
      "Excellent Communication",
      "Client Requirement Analysis",
      "Convincing & Negotiation",
      "Relationship Building",
      "Sales Experience",
      "Team Coordination",
      "Technical Translation",
      "Customer Handling"
    ]
  },
  {
    icon: GraduationCap,
    title: "Currently Learning",
    skills: [
      "AI Tools & Integration",
      "Advanced JavaScript Patterns",
      "Modern Frameworks",
      "Cloud Services"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A comprehensive blend of technical abilities and professional skills
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card 
                key={idx}
                className="p-6 bg-card border-border hover-lift hover:border-primary/50 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <li 
                      key={skillIdx}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
