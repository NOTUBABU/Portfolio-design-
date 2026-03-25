import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Startup Founder",
    review: "Pritam delivered an exceptional web application for our startup. His attention to detail and clean code practices truly set him apart. Highly recommended!",
    rating: 5,
  },
  {
    name: "Ananya Sharma",
    role: "Product Manager",
    review: "Working with Pritam was a fantastic experience. He understood our requirements perfectly and delivered a responsive, polished product ahead of schedule.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Tech Lead",
    review: "Impressive skills for a fresher! Pritam's MERN stack expertise and willingness to learn made him an invaluable team member during our project.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    role: "UI/UX Designer",
    review: "Pritam brought my designs to life with pixel-perfect accuracy. His frontend skills and eye for detail made collaboration seamless and enjoyable.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Testimonials That Speak to
            <br />
            <span className="gradient-text">My Results</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Don't just take my word for it — here's what people say about working with me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card-hover p-8 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.review}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
