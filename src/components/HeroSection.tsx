import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding pt-28">
      {/* Background glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6"
          >
            <span className="text-lg">👋</span>
            <span className="text-sm text-muted-foreground">Hello, I'm</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            I'm <span className="gradient-text">Pritam,</span>
            <br />
            <span className="gradient-text">MERN Stack</span> Developer
          </h1>

          <p className="text-muted-foreground text-lg max-w-lg mb-8 leading-relaxed">
            A passionate fresher specializing in building modern, scalable web
            applications with MongoDB, Express, React, and Node.js.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#portfolio" className="gradient-btn inline-flex items-center gap-2">
              Portfolio <ArrowRight size={18} />
            </a>
            <a
              href="/Pritam-Ghosh-Resume.pdf"
              download
              className="px-8 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Download size={18} /> Download CV
            </a>
          </div>

          <div className="flex items-center gap-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="glass-card px-5 py-3 text-center"
            >
              <p className="text-2xl font-bold gradient-text">Fresher</p>
              <p className="text-xs text-muted-foreground">Ready to Build</p>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="glass-card px-5 py-3 text-center"
            >
              <p className="text-2xl font-bold gradient-text">6 Months</p>
              <p className="text-xs text-muted-foreground">Internship</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <img
                src={profilePhoto}
                alt="Pritam Ghosh"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 animate-float">
              <span className="text-primary font-bold">⚡ MERN Stack</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
