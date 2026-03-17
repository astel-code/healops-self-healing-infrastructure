import { motion } from "framer-motion";
import { Radar, Brain, Wrench, ArrowRight } from "lucide-react";

const steps = [
  { icon: Radar, title: "Detect", description: "Continuous monitoring using advanced metrics to catch issues instantly.", color: "text-primary" },
  { icon: Brain, title: "Decide", description: "Smart analysis of system behavior to determine the right fix.", color: "text-accent" },
  { icon: Wrench, title: "Fix", description: "Automatic recovery using scripts and AWS services — no human needed.", color: "text-primary" },
];

const HowItWorks = () => (
  <section id="how-it-works" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          How <span className="gradient-text">HealOps</span> Works
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Three simple steps to autonomous infrastructure.</p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-center gap-4 md:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-card-hover p-8 text-center w-64"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4 ${step.color}`}>
                <step.icon size={28} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowRight className="hidden md:block text-muted-foreground" size={24} />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
