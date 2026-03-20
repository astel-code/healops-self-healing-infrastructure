import { motion } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div>
          <h3 className="text-xl font-heading font-bold gradient-text mb-1">HealOps</h3>
          <p className="text-sm text-muted-foreground">Autonomous Infrastructure for Modern Applications</p>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          {["Home", "Features", "Contact"].map((label) => (
            <motion.a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="hover:text-foreground transition-colors"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {label}
            </motion.a>
          ))}
        </div>

        <div className="flex gap-4">
          {[Github, Twitter, Linkedin].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HealOps. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
