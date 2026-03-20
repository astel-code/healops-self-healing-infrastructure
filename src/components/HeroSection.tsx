import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Zap, Loader2, AlertCircle, Shield, Cpu, Activity, CloudCog, Radar, Wrench } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { simulateHeal, triggerWebhook } from "@/api";

const floatingIcons = [
  { Icon: Shield, className: "top-[15%] left-[10%] animate-float text-primary/20", size: 32 },
  { Icon: Cpu, className: "top-[20%] right-[12%] animate-float-slow text-accent/20", size: 28 },
  { Icon: Activity, className: "bottom-[30%] left-[8%] animate-float-reverse text-primary/15", size: 36 },
  { Icon: CloudCog, className: "top-[40%] right-[6%] animate-float text-accent/15", size: 30, delay: "2s" },
  { Icon: Radar, className: "bottom-[20%] right-[15%] animate-float-slow text-primary/20", size: 24, delay: "1s" },
  { Icon: Wrench, className: "top-[60%] left-[5%] animate-float-reverse text-accent/15", size: 26, delay: "3s" },
];

const HeroSection = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-drift" />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, className, size, delay }, i) => (
        <div key={i} className={`absolute ${className}`} style={{ animationDelay: delay || "0s" }}>
          <Icon size={size} />
        </div>
      ))}

      {/* Orbiting particle ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0">
        <div className="animate-orbit" style={{ animationDuration: "25s" }}>
          <div className="w-2 h-2 rounded-full bg-primary/30 shadow-glow-sm" />
        </div>
        <div className="animate-orbit" style={{ animationDuration: "18s", animationDelay: "5s" }}>
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30 shadow-glow-sm" />
        </div>
        <div className="animate-orbit" style={{ animationDuration: "30s", animationDelay: "10s" }}>
          <div className="w-1 h-1 rounded-full bg-primary/40" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase rounded-full border border-primary/30 bg-primary/10 text-primary">
            Self-Healing Infrastructure
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Your Cloud Should
            <br />
            <span className="gradient-text">Fix Itself.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            HealOps automatically detects issues, analyzes root causes, and fixes your infrastructure in real-time — so you don't need a full DevOps team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base px-8" disabled={loading} onClick={() => handleAction(simulateHeal)}>
              {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
              {loading ? "Processing..." : "Get Started"}
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-border hover:bg-muted" disabled={loading} onClick={() => handleAction(triggerWebhook)}>
              <Zap size={18} /> Trigger Auto-Heal
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-border hover:bg-muted" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              <Calendar size={18} /> Book Free Consultation
            </Button>
          </div>
        </motion.div>

        {/* Error Display */}
        {error && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 max-w-lg mx-auto">
            <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-destructive">
              <AlertCircle size={18} />
              <span className="text-sm">{error}</span>
            </div>
          </motion.div>
        )}

        {/* Result Display */}
        {result && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 max-w-md mx-auto">
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
      </div>
    </section>
  );
};

export default HeroSection;
