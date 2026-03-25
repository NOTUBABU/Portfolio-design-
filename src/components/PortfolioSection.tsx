import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Dashboard Analytics App",
    desc: "A comprehensive analytics dashboard with real-time data visualization, charts, and admin controls built with the MERN stack.",
    image: project1,
    tags: ["React", "Node.js", "MongoDB", "Chart.js"],
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online shopping platform with cart, checkout, payment integration and responsive product catalog.",
    image: project2,
    tags: ["React", "Express", "Stripe", "Tailwind"],
  },
  {
    title: "Social Analytics Dashboard",
    desc: "Social media analytics tool with real-time metrics, engagement tracking, and export capabilities.",
    image: project3,
    tags: ["MERN", "REST API", "Recharts", "JWT"],
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Lets have a look at
              <br />
              my <span className="gradient-text">Portfolio</span>
            </h2>
          </div>
          <a href="#portfolio" className="gradient-btn text-sm px-6 py-2 mt-4">
            View All
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="glass-card-hover overflow-hidden group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <Github size={18} className="text-primary" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center hover:bg-primary/40 transition-colors">
                      <ExternalLink size={18} className="text-primary" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
