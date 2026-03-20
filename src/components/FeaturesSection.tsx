import { motion } from "framer-motion";
import { RotateCcw, TrendingUp, HardDrive, AlertCircle, HeartPulse, Undo2, FileSearch } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const features = [
  { icon: RotateCcw, title: "Auto Restart Services", desc: "Automatically restart Docker containers and systemd services." },
  { icon: TrendingUp, title: "Smart Auto Scaling", desc: "Scale EC2/ECS resources based on real-time demand." },
  { icon: HardDrive, title: "Disk Cleanup Automation", desc: "Free up disk space automatically before it causes outages." },
  { icon: AlertCircle, title: "Alert-Based Auto Fix", desc: "Turn alerts into actions with intelligent remediation." },
  { icon: HeartPulse, title: "Health Check Recovery", desc: "Detect and recover unhealthy instances instantly." },
  { icon: Undo2, title: "Auto Rollback", desc: "Automatically rollback failed deployments to last stable version." },
  { icon: FileSearch, title: "Log-Based Anomaly Detection", desc: "Detect anomalies in logs and trigger preventive fixes." },
];

const FeaturesSection = () => {
  const { ref, y } = useParallax(0.12);

  return (
    <section id="features" className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Everything you need for autonomous infrastructure management.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" style={{ y }}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                scale: 1.05,
                rotateY: 6,
                rotateX: -4,
                boxShadow: "0 0 30px -5px hsl(var(--glow-primary) / 0.4)",
                transition: { duration: 0.25 },
              }}
              style={{ transformPerspective: 1000 }}
              className="glass-card-hover p-6 group"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <f.icon size={22} />
              </motion.div>
              <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
