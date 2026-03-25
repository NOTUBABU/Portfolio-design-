import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_c0kvejq";
const TEMPLATE_ID = "template_r4x4k2b";
const PUBLIC_KEY = "P_Fsl8ZQQSNH7-BcU";

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setStatus("idle");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Have an Awesome Project Idea?
            <br />
            <span className="gradient-text">Let's Discuss</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">babupritam9933@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">India</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-5 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className="gradient-btn inline-flex items-center gap-2 disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
              {status === "success" && (
                <span className="text-green-500 font-medium">Message sent successfully!</span>
              )}
              {status === "error" && (
                <span className="text-red-500 font-medium">Failed to send. Please try again.</span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
