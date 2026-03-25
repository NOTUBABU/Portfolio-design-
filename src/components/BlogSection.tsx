import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    title: "Building Scalable APIs with Node.js and Express",
    date: "Mar 15, 2026",
    image: blog1,
    category: "Backend",
  },
  {
    title: "Modern UI Design Principles for Web Developers",
    date: "Mar 10, 2026",
    image: blog2,
    category: "Design",
  },
  {
    title: "REST API Best Practices Every Developer Should Know",
    date: "Mar 5, 2026",
    image: blog3,
    category: "API",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              From my <span className="gradient-text">blog post</span>
            </h2>
          </div>
          <a href="#blog" className="gradient-btn text-sm px-6 py-2 mt-4">
            View All
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card-hover overflow-hidden group cursor-pointer"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-3 left-3 text-xs px-3 py-1 rounded-full bg-primary/90 text-primary-foreground font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                  <Calendar size={12} />
                  {post.date}
                </div>
                <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read More <ArrowUpRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
