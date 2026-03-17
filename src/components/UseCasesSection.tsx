import { motion } from "framer-motion";
import { Globe, ShoppingCart, Code2, Rocket } from "lucide-react";

const cases = [
  { icon: Globe, title: "SaaS Platforms", desc: "Keep your SaaS running 24/7 with zero manual intervention." },
  { icon: ShoppingCart, title: "E-commerce Websites", desc: "Never lose a sale due to infrastructure downtime." },
  { icon: Code2, title: "APIs & Microservices", desc: "Ensure every microservice stays healthy and responsive." },
  { icon: Rocket, title: "Startups without DevOps", desc: "Get enterprise-grade reliability without a DevOps team." },
];

const UseCasesSection = () => (
  <section id="use-cases" className="section-padding">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Built for <span className="gradient-text">Your Use Case</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cases.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card-hover p-8 flex gap-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <c.icon size={26} />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-lg mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default UseCasesSection;
