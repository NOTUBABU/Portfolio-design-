import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border section-padding py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="text-2xl font-bold gradient-text">Pritam</a>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs leading-relaxed">
              MERN Stack Developer passionate about building modern, scalable web applications.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Portfolio", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { Icon: Github, href: "https://github.com/NOTUBABU" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/pritam-ghosh-7967782a7" },
                { Icon: Twitter, href: "https://x.com/Notubabu001" },
                { Icon: Instagram, href: "https://www.instagram.com/notubabu_01?igsh=MWNjOXV2bXY0eHl4NA==" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pritam Ghosh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
