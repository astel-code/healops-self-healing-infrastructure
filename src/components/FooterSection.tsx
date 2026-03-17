import { Github, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-heading font-bold gradient-text mb-1">HealOps</h3>
          <p className="text-sm text-muted-foreground">Autonomous Infrastructure for Modern Applications</p>
        </div>

        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#home" className="hover:text-foreground transition-colors">Home</a>
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </div>

        <div className="flex gap-4">
          {[Github, Twitter, Linkedin].map((Icon, i) => (
            <a key={i} href="#" className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} HealOps. All rights reserved.
      </div>
    </div>
  </footer>
);

export default FooterSection;
