// import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Fashion Fuxion",
    description:
      "A responsive fashion e-commerce platform where users can browse products, view product details, filter by categories, manage cart items, and adjust product quantities.",
    image: "/projects/fashion.png",
    tags: ["React", "Tailwind CSS", "Context API"],
    link: "https://fashion-fuxion.vercel.app/",
    github: "https://github.com/Victoza/FashionFuxion",
  },

  {
    title: "Agric Premium",
    description:
      "A responsive agricultural services platform designed to showcase farming products and services, with product listings, service information, appointment booking, articles, and accessible user interfaces.",
    image: "/projects/agrip.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://agric-premium.vercel.app/",
    github: "https://github.com/Victoza/AgricPremium",
  },

  {
    title: "Movie Land",
    description:
      "A movie discovery website that allows users to browse and explore movies through a clean, responsive interface.",
    image: "/projects/movieland.png",
    tags: ["React", "API Integration", "Tailwind CSS"],
    link: "https://movie-land-self.vercel.app/",
    github: "https://github.com/Victoza/MovieLand",
  },

  {
    title: "Odore Perla",
    description:
      "A modern perfume brand landing page designed to showcase fragrances through an elegant, responsive interface with product highlights, reviews, and clear calls to action.",
    image: "/projects/odore.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://odore.vercel.app/",
    github: "https://github.com/Victoza/Odore",
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
                  <div className="hidden lg:flex absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 gap-4 transition-opacity duration-300 items-center justify-center">
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
                <div className="flex lg:hidden gap-3 p-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg text-sm"
                  >
                    View Project
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/20 text-white rounded-lg text-sm"
                  >
                    GitHub
                  </a>
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
