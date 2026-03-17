import { motion } from "framer-motion";
import { RotateCcw, TrendingUp, HardDrive, AlertCircle, HeartPulse, Undo2, FileSearch } from "lucide-react";

const features = [
  { icon: RotateCcw, title: "Auto Restart Services", desc: "Automatically restart Docker containers and systemd services." },
  { icon: TrendingUp, title: "Smart Auto Scaling", desc: "Scale EC2/ECS resources based on real-time demand." },
  { icon: HardDrive, title: "Disk Cleanup Automation", desc: "Free up disk space automatically before it causes outages." },
  { icon: AlertCircle, title: "Alert-Based Auto Fix", desc: "Turn alerts into actions with intelligent remediation." },
  { icon: HeartPulse, title: "Health Check Recovery", desc: "Detect and recover unhealthy instances instantly." },
  { icon: Undo2, title: "Auto Rollback", desc: "Automatically rollback failed deployments to last stable version." },
  { icon: FileSearch, title: "Log-Based Anomaly Detection", desc: "Detect anomalies in logs and trigger preventive fixes." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-muted/30">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Powerful <span className="gradient-text">Features</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">Everything you need for autonomous infrastructure management.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-card-hover p-6 group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon size={22} />
            </div>
            <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
