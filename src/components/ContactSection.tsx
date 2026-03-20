import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Send, Linkedin, MessageCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_tvx2ys3",
        "template_i7a5bss",
        { user_name: form.name, user_email: form.email, message: form.message },
        "8TuRRQKO3_NHJgaPy"
      );
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactLinks = [
    { href: "tel:6238053614", icon: Phone, label: "Phone", value: "6238053614", color: "bg-primary/10 text-primary" },
    { href: "mailto:asteltom0@gmail.com", icon: Mail, label: "Email", value: "asteltom0@gmail.com", color: "bg-accent/10 text-accent" },
    { href: "https://www.linkedin.com/in/asteltom/", icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", color: "bg-primary/10 text-primary", external: true },
    { href: "https://wa.me/916238053614?text=Hi%20I%20am%20interested%20in%20HealOps", icon: MessageCircle, label: "WhatsApp", value: "Message us on WhatsApp", color: "bg-green-500/10 text-green-500", external: true },
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Book a Free <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Start automating your cloud infrastructure today with HealOps.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 block"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, x: 8, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center`}
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring" }}
                >
                  <link.icon size={22} />
                </motion.div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
            style={{ transformPerspective: 1000 }}
          >
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="bg-muted/50 border-border transition-all duration-300 focus:shadow-glow-sm"
                required
              />
            </motion.div>
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-muted/50 border-border transition-all duration-300 focus:shadow-glow-sm"
              required
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-muted/50 border-border min-h-[120px] transition-all duration-300 focus:shadow-glow-sm"
              required
            />
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button type="submit" className="w-full gap-2" disabled={loading}>
                {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                {loading ? "Sending..." : "Start Free Consultation"}
              </Button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
