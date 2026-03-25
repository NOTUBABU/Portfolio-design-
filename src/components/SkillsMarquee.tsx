const skills = [
  "UX Design", "App Design", "Dashboard", "Wireframe", "Web Development",
  "API Design", "React.js", "Node.js", "MongoDB", "Express.js",
  "TypeScript", "Tailwind CSS", "REST APIs", "Git",
];

const SkillsMarquee = () => {
  return (
    <section className="py-10 overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <span
            key={i}
            className="mx-6 text-lg font-semibold text-muted-foreground/40 hover:text-primary transition-colors cursor-default"
          >
            {skill} <span className="text-primary mx-4">+</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsMarquee;
