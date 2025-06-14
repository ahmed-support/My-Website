import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({
  activeSection
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{
    id: "home",
    label: "Home"
  }, {
    id: "experience",
    label: "Experience"
  }, {
    id: "projects",
    label: "Lab Projects"
  }, {
    id: "tools",
    label: "Tools"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "contact",
    label: "Contact"
  }];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg border-b border-border" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Clean Logo Implementation */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => scrollToSection("home")}
              aria-label="Go to Home"
              className="group p-2 bg-transparent border-none focus:outline-none hover:bg-background/50 rounded-2xl transition-all duration-200"
            >
              <img
                src="/lovable-uploads/a082b239-4de5-4747-be4d-5ab07e936499.png"
                alt="infrazemix logo IZ"
                className="h-14 w-auto md:h-16 object-contain transition-all duration-200 group-hover:scale-105 drop-shadow-sm"
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                  maxWidth: "none"
                }}
              />
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-200 hover:text-primary font-medium ${activeSection === item.id ? "text-primary" : "text-foreground/70"}`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full">
              Download CV
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button className="text-foreground hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
