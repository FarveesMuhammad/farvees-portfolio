import { Briefcase, ShoppingBag, Laptop } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    icon: Briefcase,
    title: "Freelance Web Developer",
    period: "2024 – 2025",
    description: "Collaborated with friends on website projects, delivering functional solutions",
    highlights: [
      "Built login & signup systems",
      "Created admin panels and dashboards",
      "Developed responsive web pages",
      "Improved understanding of real client needs",
      "Delivered clean, maintainable code"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Sales Employee",
    period: "6 Months at Highlight Business Park",
    description: "Developed strong communication and client handling skills",
    highlights: [
      "Communicated effectively with diverse customers",
      "Built trust and convinced clients",
      "Handled pressure and deadlines",
      "Improved confidence and negotiation",
      "Learned customer psychology"
    ]
  },
  {
    icon: Laptop,
    title: "Computer Hardware & Software Servicing",
    period: "Ongoing Experience",
    description: "Hands-on technical work that enhanced problem-solving abilities",
    highlights: [
      "Installed and repaired systems",
      "Diagnosed technical issues",
      "Explained solutions to non-technical users",
      "Improved customer service skills",
      "Enhanced troubleshooting mindset"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A diverse background combining technical expertise with real-world business experience
        </p>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={idx}
                className="p-6 md:p-8 bg-card border-border hover-lift hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h3 className="text-2xl font-semibold mb-2 md:mb-0">{exp.title}</h3>
                      <span className="text-sm text-muted-foreground px-3 py-1 bg-muted rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.highlights.map((highlight, highlightIdx) => (
                        <li 
                          key={highlightIdx}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
