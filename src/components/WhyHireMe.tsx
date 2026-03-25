import { motion } from "framer-motion";
import { ArrowRight, Code, Users, FolderKanban } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { icon: FolderKanban, value: "3+", label: "Projects Completed" },
  { icon: Users, value: "5+", label: "Happy Clients" },
  { icon: Code, value: "1000+", label: "Lines of Code" },
];

const WhyHireMe = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border-2 border-primary/20">
              <img
                src={profilePhoto}
                alt="Pritam Ghosh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why <span className="gradient-text">Hire Me?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I bring fresh perspectives, up-to-date technical skills, and an
              unwavering commitment to writing clean, maintainable code. With
              hands-on internship experience at Euphoria GNX, I've built
              real-world applications and honed my problem-solving abilities.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-4 text-center"
                >
                  <stat.icon className="text-primary mx-auto mb-2" size={24} />
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="gradient-btn inline-flex items-center gap-2">
              Hire Me <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
