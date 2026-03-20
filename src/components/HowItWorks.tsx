import { motion } from "framer-motion";
import { Radar, Brain, Wrench, ArrowRight } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const steps = [
  { icon: Radar, title: "Detect", description: "Continuous monitoring using advanced metrics to catch issues instantly.", color: "text-primary" },
  { icon: Brain, title: "Decide", description: "Smart analysis of system behavior to determine the right fix.", color: "text-accent" },
  { icon: Wrench, title: "Fix", description: "Automatic recovery using scripts and AWS services — no human needed.", color: "text-primary" },
];

const Card3D = ({ children, delay }: { children: React.ReactNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60, rotateY: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{
      rotateY: 8,
      rotateX: -5,
      scale: 1.04,
      transition: { duration: 0.3 },
    }}
    style={{ transformPerspective: 1200, transformStyle: "preserve-3d" }}
  >
    {children}
  </motion.div>
);

const HowItWorks = () => {
  const { ref, y } = useParallax(0.15);

  return (
    <section id="how-it-works" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            How <span className="gradient-text">HealOps</span> Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Three simple steps to autonomous infrastructure.</p>
        </motion.div>

        <motion.div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4" style={{ y }}>
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-4 md:gap-4">
              <Card3D delay={i * 0.2}>
                <div className="glass-card-hover p-8 text-center w-64 group">
                  <motion.div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-muted mb-4 ${step.color}`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon size={28} />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </Card3D>
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                >
                  <ArrowRight className="hidden md:block text-muted-foreground" size={24} />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
