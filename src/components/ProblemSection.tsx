import { motion } from "framer-motion";
import { DollarSign, Users, Bell, Clock } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";

const problems = [
  { icon: DollarSign, text: "Downtime costs money" },
  { icon: Users, text: "DevOps teams are overloaded" },
  { icon: Bell, text: "Alerts don't fix issues" },
  { icon: Clock, text: "Manual recovery is slow" },
];

const ProblemSection = () => {
  const { ref, y } = useParallax(0.1);

  return (
    <section className="section-padding bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            The Problem with <span className="gradient-text">Traditional Systems</span>
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" style={{ y }}>
          {problems.map((p, i) => (
            <motion.div
              key={p.text}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.12, duration: 0.5, type: "spring" }}
              whileHover={{
                scale: 1.06,
                rotateX: -5,
                rotateY: 5,
                transition: { duration: 0.25 },
              }}
              style={{ transformPerspective: 800 }}
              className="glass-card p-6 text-center"
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 text-destructive mb-4"
                whileHover={{ rotate: -15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <p.icon size={24} />
              </motion.div>
              <p className="font-medium">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-heading font-semibold">
            Most systems alert you. <span className="gradient-text">HealOps fixes the problem.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
