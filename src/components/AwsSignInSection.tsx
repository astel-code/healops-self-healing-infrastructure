import { motion } from "framer-motion";
import { ExternalLink, Cloud, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AwsSignInSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Access <span className="gradient-text">AWS Console</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Jump straight into your AWS environment — no need to open a separate tab.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1000 }}
        className="glass-card p-8 md:p-12 max-w-3xl mx-auto text-center"
      >
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/15 text-primary mb-6"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Cloud size={36} />
        </motion.div>

        <h3 className="text-2xl font-heading font-semibold mb-3">AWS Management Console</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Sign in to monitor resources, manage services, and configure your infrastructure directly from here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg" className="gap-2 shadow-glow-sm" asChild>
              <a href="https://aws.amazon.com/console/" target="_blank" rel="noopener noreferrer">
                Sign In to AWS Console
                <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://portal.aws.amazon.com/billing/signup" target="_blank" rel="noopener noreferrer">
                Create AWS Account
                <ExternalLink size={16} />
              </a>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {[
            { icon: Shield, text: "Secure SSO login" },
            { icon: Zap, text: "Instant access" },
          ].map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon size={16} className="text-primary" />
              {item.text}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AwsSignInSection;
