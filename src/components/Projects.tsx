import { Card } from "@/components/ui/card";
import { ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const placeholderProjects = [
    {
      title: "E-Commerce",
      description: "Full-featured ecommerce website with user management, product catalog, and analytics",
      tech: ["Python", "Django", "Postgres", "React"],
      size: "large",
      video: "public/projectVideos/amrithaProject.mp4",
      live: "https://www.amrithaheritage.com/",
      code: ""
    },
    {
      title: "E-Commerce Admin Panel",
      description: "Admin panel with proper analytics and user management",
      tech: ["Python", "bcrypt"],
      size: "medium",
      image: "/projectThumbnails/adminamritha.png",
      live: "https://admin.lapoelectioncart.com/",
      code: ""
    },
    {
      title: "Business Portfolio",
      tech: ["Node.js", "Express", "MongoDB"],
      size: "medium",
      image: "/projectThumbnails/electioncart.png",
      live: "https://www.lapoelectioncart.com/",
      code: ""
    },
    {
      title: "REST API Service",
      description: "RESTful API with CRUD operations and middleware integration",
      tech: ["HTML", "CSS", "JavaScript"],
      size: "small",
      image: "/projectThumbnails/opendoor.png",
      live: "https://opendooreducations.com/",
      code: ""
    },
    {
      title: "A full ecommerce website",
      description: "Banckend and frontend with full package",
      tech: ["Node.js","Mongo DB","EJS"],
      size: "small",
      image: "/projectThumbnails/hamdSofas.png",
      live: "https://www.hamdsofas.shop/user/home",
      code: ""
    },
    {
      title: "Python Mini Projects",
      description: "Collection of Python scripts for automation and data processing",
      tech: ["Python"],
      size: "small",
      image: "/projectThumbnails/adminamritha.png",
      live: "https://example.com/python-mini",
      code: "https://github.com/your/python-mini"
    }
  ];

  const fallbackImage = "https://via.placeholder.com/1200x800?text=Project+Image";

  return (
    <>
      <style>{`
        .project-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
          z-index: 1;
        }

        .project-content {
          position: relative;
          z-index: 2;
          padding: 1.5rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          color: white;
        }

        .project-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .project-description {
          min-height: 48px;
          display: block;
        }
      `}</style>

      <section id="projects" className="py-24 px-4">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A showcase of web applications, dashboards, and functional systems I've built
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
            {placeholderProjects.map((project, idx) => (
              <Card
                key={idx}
                className={`project-card group relative overflow-hidden bg-card border-border hover-lift hover:border-primary/50 transition-all ${
                  project.size === "large"
                    ? "md:col-span-2 md:row-span-2"
                    : project.size === "medium"
                    ? "md:row-span-1"
                    : ""
                }`}
              >
                <div className="project-image-container">
                  {project.video ? (
                    <video
                      src={project.video}
                      className="project-image"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={project.image || fallbackImage}
                      alt={project.title}
                      className="project-image"
                    />
                  )}
                </div>

                <div className="project-overlay" />

                <div className="project-content">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex gap-2">

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
                          >
                            <ExternalLink className="w-4 h-4 text-white" />
                          </a>
                        )}

                        {project.code && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
                          >
                            <Code className="w-4 h-4 text-white" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="project-description text-white/80 text-sm mb-6 leading-relaxed">
                      {project.description || ""}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20" />
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 italic">
            More projects coming soon. Each project represents real-world solutions with clean code and functionality.
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
