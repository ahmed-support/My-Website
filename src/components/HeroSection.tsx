
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden hero-gradient">
      {/* Floating geometric shapes inspired by reference */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orange circle */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-accent/20 rounded-full floating-shape"></div>
        
        {/* Smaller accent shapes */}
        <div className="absolute top-40 left-10 w-24 h-24 bg-primary/30 rounded-full floating-shape-delayed"></div>
        <div className="absolute bottom-40 right-40 w-20 h-20 bg-accent/30 rounded-lg rotate-45 floating-shape"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/20 rounded-full floating-shape-delayed"></div>
        
        {/* Small decorative dots */}
        <div className="absolute top-60 right-60 w-4 h-4 bg-accent rounded-full"></div>
        <div className="absolute top-80 right-80 w-3 h-3 bg-primary rounded-full"></div>
        <div className="absolute bottom-60 left-60 w-4 h-4 bg-accent rounded-full"></div>
        
        {/* Curved lines inspired by reference */}
        <svg className="absolute top-32 right-32 w-24 h-24 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 100 100">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 20 Q 50 50 80 20" />
        </svg>
        
        <svg className="absolute bottom-32 left-32 w-20 h-20 text-accent/40" fill="none" stroke="currentColor" viewBox="0 0 100 100">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 80 Q 50 10 90 80" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content - Left Side */}
          <div className="order-2 lg:order-1 text-left slide-up">
            <div className="mb-4">
              <span className="text-accent font-semibold text-lg">WELCOME TO MY PORTFOLIO</span>
            </div>
            
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Hello, I'm{" "}
              <br />
              <span className="text-primary">Ahmed S. Abdi</span>
              <br />
              An <span className="text-accent">IT Support</span>
              <br />
              <span className="text-accent">Technician</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Aspiring IT Support Technician with hands-on experience in troubleshooting, 
              networking basics, and end-user support through home labs and real-world situations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToExperience}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg rounded-full"
              >
                Explore My Work
              </Button>
              
              <Button 
                variant="ghost" 
                size="lg"
                className="text-primary hover:bg-primary/10 px-8 py-3 text-lg rounded-full flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Intro
              </Button>
            </div>

            {/* Experience badge */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-accent">2+</span>
                <span>Years Experience</span>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-primary">5+</span>
                <span>Lab Projects</span>
              </div>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/b0b94c67-e38a-4c9d-a720-371565d17a66.png" 
                    alt="Ahmed S. Abdi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                {/* Floating experience badge */}
                <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-accent">2+</span>
                    <div className="text-xs text-muted-foreground">
                      <div>Years</div>
                      <div>Experience</div>
                    </div>
                  </div>
                </div>
                
                {/* Customer avatars */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-3 shadow-xl border border-border">
                  <div className="flex -space-x-2 mb-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-card flex items-center justify-center text-xs text-primary-foreground font-semibold">A</div>
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-card flex items-center justify-center text-xs text-accent-foreground font-semibold">H</div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-card flex items-center justify-center text-xs text-white font-semibold">+</div>
                  </div>
                  <div className="text-xs text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
