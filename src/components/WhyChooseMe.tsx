import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const reasons = [
  {
    title: "Technical + Communication Mix",
    description: "Rare combination of strong coding skills and exceptional client communication abilities"
  },
  {
    title: "Business Understanding",
    description: "I understand how businesses work from my sales experience, not just how to code"
  },
  {
    title: "Professional Client Handling",
    description: "Confident in discussing ideas with companies and handling clients professionally"
  },
  {
    title: "Quick Learner",
    description: "Self-taught everything from scratch - I can pick up any new technology or tool rapidly"
  },
  {
    title: "Reliable & Responsible",
    description: "I take ownership of projects and deliver what I promise, on time"
  },
  {
    title: "Tech Needs Coverage",
    description: "Perfect for consultancy startups - I can handle all technical requirements while you focus on business"
  }
];

const WhyChooseMe = () => {
  return (
    <section id="why-me" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Why Choose <span className="text-gradient">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          What makes me different from other developers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <Card 
              key={idx}
              className="p-6 bg-card border-border hover-lift hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 inline-block">
            <p className="text-lg md:text-xl font-medium mb-2">
              Looking for someone who can bridge the gap between tech and business?
            </p>
            <p className="text-muted-foreground">
              I bring the perfect balance of technical expertise and professional communication
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
