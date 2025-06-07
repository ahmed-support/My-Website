
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
                <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center text-8xl font-heading text-primary">
                  AS
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent animate-pulse"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left slide-up">
            <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-primary">Ahmed S. Abdi</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
              An aspiring IT Support Technician with hands-on experience in troubleshooting, 
              networking basics, and end-user support through home labs and real-world situations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToExperience}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 text-lg"
              >
                Explore My Work
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg"
                asChild
              >
                <a href="mailto:ugaaska320@gmail.com">Get In Touch</a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">2+</div>
                <div className="text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/60">Lab Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-heading font-bold text-primary">6+</div>
                <div className="text-sm text-foreground/60">Tools & Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
