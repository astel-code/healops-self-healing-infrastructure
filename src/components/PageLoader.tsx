import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Spinning ring */}
            <motion.div
              className="w-16 h-16 rounded-full border-4 border-muted border-t-primary"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            {/* Logo text */}
            <motion.h1
              className="text-2xl font-heading font-bold gradient-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              HealOps
            </motion.h1>
            {/* Loading bar */}
            <div className="w-48 h-1 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
