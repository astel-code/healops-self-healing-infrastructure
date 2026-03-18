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
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
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

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Book a Free <span className="gradient-text">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Start automating your cloud infrastructure today with HealOps.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">
            <a href="tel:6238053614" className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Phone size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">6238053614</p>
              </div>
            </a>
            <a href="mailto:asteltom0@gmail.com" className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Mail size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">asteltom0@gmail.com</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/asteltom/" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Linkedin size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium">Connect on LinkedIn</p>
              </div>
            </a>
            <a href="https://wa.me/916238053614" target="_blank" rel="noopener noreferrer" className="glass-card p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300 block">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                <MessageCircle size={22} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">WhatsApp</p>
                <p className="font-medium">Message us on WhatsApp</p>
              </div>
            </a>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-muted/50 border-border"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-muted/50 border-border"
              required
            />
            <Textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-muted/50 border-border min-h-[120px]"
              required
            />
            <Button type="submit" className="w-full gap-2">
              <Send size={16} /> Start Free Consultation
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
