import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useParallax } from "@/hooks/useParallax";

const stats = [
  { value: 99.9, suffix: "%", label: "Uptime Reliability" },
  { value: 85, suffix: "%", label: "Downtime Reduction" },
  { value: 10, suffix: "x", label: "Faster Recovery" },
  { value: 60, suffix: "%", label: "Lower DevOps Costs" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.round(current * 10) / 10);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-heading font-bold gradient-text">
      {suffix === "%" && value === 99.9 ? count.toFixed(1) : Math.round(count)}{suffix}
    </div>
  );
};

const BusinessValueSection = () => {
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
            Real <span className="gradient-text">Business Impact</span>
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-6" style={{ y }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 50, scale: 0.85 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.08,
                rotateY: 8,
                boxShadow: "0 0 40px -5px hsl(var(--glow-primary) / 0.3)",
                transition: { duration: 0.3 },
              }}
              style={{ transformPerspective: 1000 }}
              className="glass-card p-8 text-center"
            >
              <AnimatedCounter value={s.value} suffix={s.suffix} />
              <p className="text-sm text-muted-foreground mt-3">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessValueSection;
