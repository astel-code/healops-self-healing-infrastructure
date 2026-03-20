import { motion } from "framer-motion";
import { Activity, AlertTriangle, Cpu, Cloud, CheckCircle, ArrowRight } from "lucide-react";

const pipelineSteps = [
  { icon: Activity, label: "Application", sub: "Your app" },
  { icon: Activity, label: "Metrics", sub: "Data collection" },
  { icon: AlertTriangle, label: "Prometheus", sub: "Monitoring" },
  { icon: AlertTriangle, label: "Alert", sub: "Alertmanager" },
  { icon: Cpu, label: "HealOps Engine", sub: "Python + AWS" },
  { icon: Cloud, label: "AWS Actions", sub: "Auto remediation" },
  { icon: CheckCircle, label: "Recovery", sub: "System restored" },
];

const SolutionSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Our <span className="gradient-text">Solution</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          HealOps combines monitoring, alerting, and automation into a single self-healing system.
        </p>
      </motion.div>

      {/* Pipeline Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-card p-6 md:p-10 overflow-x-auto"
      >
        <div className="flex items-center justify-start md:justify-center gap-2 md:gap-3 min-w-[700px]">
          {pipelineSteps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-3">
              <motion.div
                className="flex flex-col items-center text-center w-20 md:w-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${i === 4 ? "bg-primary/20 text-primary shadow-glow-sm" : "bg-muted text-muted-foreground"}`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon size={20} />
                </motion.div>
                <span className="text-xs font-medium">{step.label}</span>
                <span className="text-[10px] text-muted-foreground">{step.sub}</span>
              </motion.div>
              {i < pipelineSteps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <ArrowRight size={16} className="text-muted-foreground flex-shrink-0" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {[
          { title: "Monitoring", desc: "Prometheus collects real-time metrics from your infrastructure.", color: "border-primary/30" },
          { title: "Alerts", desc: "Alertmanager triggers smart notifications based on thresholds.", color: "border-accent/30" },
          { title: "Automation", desc: "Python + AWS APIs execute remediation scripts automatically.", color: "border-primary/30" },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{
              scale: 1.04,
              rotateY: 5,
              transition: { duration: 0.25 },
            }}
            style={{ transformPerspective: 800 }}
            className={`glass-card p-6 border-l-2 ${item.color}`}
          >
            <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
