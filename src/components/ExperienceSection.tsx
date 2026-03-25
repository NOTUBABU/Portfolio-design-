import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-8 border-l-2 border-primary/30"
        >
          {/* Timeline dot */}
          <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary animate-pulse-glow" />

          <div className="glass-card-hover p-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-lg">
                <Briefcase size={20} />
                Euphoria GNX
              </span>
              <span className="glass-card px-3 py-1 text-xs text-muted-foreground">
                Internship
              </span>
            </div>
            <h3 className="text-xl font-semibold mb-2">MERN Stack Developer Intern</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
              <Calendar size={14} />
              <span>6 Months</span>
            </div>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Developed full-stack web applications using MongoDB, Express.js, React, and Node.js
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Built RESTful APIs and integrated third-party services for enhanced functionality
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Collaborated with the design team to implement responsive, pixel-perfect UIs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">▹</span>
                Implemented authentication, authorization, and database optimization strategies
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
