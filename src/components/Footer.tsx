import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-secondary/30 border-t border-border">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Muhammad <span className="text-gradient">Farvees K</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Web Developer & Business Communicator
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {/* Gmail */}
            <a 
              href="mailto:farveesshan@gmail.com"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary" />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/zaid-muhammad-farvees-7b078b330/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary" />
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/FarveesMuhammad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Farvees K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
