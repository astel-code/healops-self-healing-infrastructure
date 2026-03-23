import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Loader2, AlertCircle, Shield, Cpu, Activity, CloudCog, Radar, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { simulateHeal, triggerWebhook } from "@/api";

const floatingIcons = [
  { Icon: Shield, className: "top-[15%] left-[10%] animate-float text-primary/70", size: 40 },
  { Icon: Cpu, className: "top-[18%] right-[12%] animate-float-slow text-accent/70", size: 36 },
  { Icon: Activity, className: "bottom-[28%] left-[7%] animate-float-reverse text-primary/60", size: 44 },
  { Icon: CloudCog, className: "top-[45%] right-[5%] animate-float text-accent/60", size: 38, delay: "2s" },
  { Icon: Radar, className: "bottom-[18%] right-[14%] animate-float-slow text-primary/65", size: 34, delay: "1s" },
  { Icon: Wrench, className: "top-[65%] left-[4%] animate-float-reverse text-accent/60", size: 32, delay: "3s" },
  { Icon: Shield, className: "top-[10%] left-[45%] animate-float-slow text-primary/45", size: 24, delay: "4s" },
  { Icon: Cpu, className: "bottom-[12%] left-[30%] animate-float text-accent/50", size: 28, delay: "1.5s" },
];

const HeroSection = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3]);

  const handleAction = async (action: () => Promise<any>) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const data = await action();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </motion.div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/25 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px] animate-drift" />

      {/* Floating icons with parallax */}
      {floatingIcons.map(({ Icon, className, size, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${className}`}
          style={{ animationDelay: delay || "0s" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 200 }}
        >
          <Icon size={size} />
        </motion.div>
      ))}

      {/* Orbiting particle ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        <div className="animate-orbit" style={{ animationDuration: "20s" }}>
          <div className="w-3 h-3 rounded-full bg-primary/50 shadow-glow-sm" />
        </div>
        <div className="animate-orbit" style={{ animationDuration: "14s", animationDelay: "3s" }}>
          <div className="w-2.5 h-2.5 rounded-full bg-accent/50 shadow-glow-sm" />
        </div>
        <div className="animate-orbit" style={{ animationDuration: "26s", animationDelay: "7s" }}>
          <div className="w-2 h-2 rounded-full bg-primary/60 shadow-glow-sm" />
        </div>
      </div>

      <motion.div className="container relative z-10 mx-auto px-4 text-center" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1000 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/30 bg-primary/10 text-primary"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.6)" }}
          >
            Self-Healing Infrastructure
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your Cloud Should
            <br />
            <motion.span
              className="gradient-text inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              Fix Itself.
            </motion.span>
          </motion.h1>

          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            HealOps automatically detects issues, analyzes root causes, and fixes your infrastructure in real-time — so you don't need a full DevOps team.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="gap-2 text-base px-8" disabled={loading} onClick={() => handleAction(simulateHeal)}>
                {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
                {loading ? "Processing..." : "Get Started"}
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-border hover:bg-muted" disabled={loading} onClick={() => handleAction(triggerWebhook)}>
                <Zap size={18} /> Trigger Auto-Heal
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-border hover:bg-muted" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <Calendar size={18} /> Book Free Consultation
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="mt-8 max-w-lg mx-auto">
            <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
              <AlertCircle size={18} />
              <span className="text-sm">{error}</span>
            </div>
          </motion.div>
        )}

        {/* Result Display */}
        {result && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring" }} className="mt-8 max-w-md mx-auto">
            <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm p-6 shadow-lg text-left">
              <h3 className="text-lg font-semibold text-foreground mb-4">Auto-Heal Result</h3>
              <div className="space-y-3">
                {result.issue && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Issue</span>
                    <span className="text-sm font-medium text-foreground">{result.issue}</span>
                  </div>
                )}
                {result.action && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Action</span>
                    <span className="text-sm font-medium text-foreground">{result.action}</span>
                  </div>
                )}
                {result.status && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className={`text-sm font-semibold ${result.status === "success" ? "text-green-500" : "text-red-500"}`}>
                      {result.status}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default HeroSection;
