// import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Fashion Fuxion",
    description:
      "An e-commerce platform with ...",
    image: "/projects/fashion.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "An agricultural platform for ....",
    image: "/projects/agrip.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Movie site",
    description:
      "A movie listing site that allows users to discover films.",
    image: "/projects/movieland.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "#",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project,index)=>(
              <div key={index} className="group glass rounded-2xl overflow-hidden animate-fade-in hover:scale-[1.02] transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60"/>

                  {/* Overlay ,come back to this*/}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 gap-4 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm mb-4 max-w-xs">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-primary/20 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 justify-center">
                        <a href={project.link} className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/80 transition-colors">
                          View Project
                        </a>
                        <a href={project.github} className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm hover:bg-white/10 transition-colors">
                          GitHub
                        </a>
                      </div>
                    </div>
                    {/* Content */}
                    {/* <div>
                      <div>
                        <h3>{project.title}</h3>
                      </div>
                      <p>{project.description}</p>
                      <div></div>
                    </div> */}
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            {/* <ArrowUpRight className="w-5 h-5" /> */}
          </AnimatedBorderButton>
        </div>
        </div>
    </section>
  )
}
