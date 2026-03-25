import { motion } from "framer-motion";
import { Globe, Palette, Server, Layers, Smartphone } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Building modern, fast, and scalable web apps using React, Node.js, and MongoDB." },
  { icon: Palette, title: "UI/UX Design", desc: "Crafting beautiful, intuitive interfaces that delight users and drive engagement." },
  { icon: Server, title: "API Development", desc: "Designing robust RESTful APIs with Express.js and proper authentication." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end MERN stack solutions from database to deployment." },
  { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts that look stunning on every device and screen size." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delivering high-quality solutions tailored to your needs with modern technologies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
