import { motion } from "framer-motion";
import { Sparkles, Brain, CloudCog, BarChart3 } from "lucide-react";

const visions = [
  { icon: Brain, title: "AI-Based Root Cause Analysis", desc: "Leverage machine learning to pinpoint exactly why failures occur." },
  { icon: Sparkles, title: "Smart Decision Engine", desc: "Predict and prevent issues before they happen." },
  { icon: CloudCog, title: "Multi-Cloud Support", desc: "Extend self-healing across AWS, GCP, and Azure." },
  { icon: BarChart3, title: "Real-Time Analytics Dashboard", desc: "Full visibility into your infrastructure health and trends." },
];

const FutureVisionSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          The <span className="gradient-text">Future</span> of HealOps
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">What we're building next.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {visions.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, rotateY: i % 2 === 0 ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              scale: 1.04,
              rotateY: 6,
              rotateX: -3,
              boxShadow: "0 0 30px -5px hsl(var(--glow-secondary) / 0.3)",
              transition: { duration: 0.25 },
            }}
            style={{ transformPerspective: 1000 }}
            className="glass-card-hover p-6 flex gap-4 items-start"
          >
            <motion.div
              className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-1"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <v.icon size={20} />
            </motion.div>
            <div>
              <h3 className="font-heading font-semibold mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FutureVisionSection;
