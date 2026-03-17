import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ChatbotIcon = () => (
  <motion.button
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-glow hover:scale-110 transition-transform"
    onClick={() => window.open("#contact", "_self")}
    aria-label="Chat with us"
  >
    <MessageCircle size={24} />
  </motion.button>
);

export default ChatbotIcon;
