
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full floating-shape"></div>
        <div className="absolute top-40 left-10 w-20 h-20 bg-primary/20 rounded-lg rotate-45 floating-shape-delayed"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 bg-purple-400/20 rounded-full floating-shape"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-400/20 rounded-lg rotate-12 floating-shape-delayed"></div>
        
        {/* Decorative lines */}
        <svg className="absolute top-32 right-60 w-20 h-20 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        
        <svg className="absolute bottom-32 left-60 w-16 h-16 text-accent/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-2 relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-8xl font-heading text-white relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/b0b94c67-e38a-4c9d-a720-371565d17a66.png" 
                    alt="Ahmed S. Abdi"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Rating badge */}
                <div className="absolute -top-4 -right-4 bg-card rounded-lg p-3 shadow-lg border border-border">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">2+</span>
                    <div className="text-xs text-muted-foreground">
                      <div>Years</div>
                      <div>Experience</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating customer avatars */}
                <div className="absolute -bottom-4 -left-4 bg-card rounded-lg p-2 shadow-lg border border-border">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-primary rounded-full border-2 border-card flex items-center justify-center text-xs text-primary-foreground font-semibold">A</div>
                    <div className="w-8 h-8 bg-accent rounded-full border-2 border-card flex items-center justify-center text-xs text-accent-foreground font-semibold">S</div>
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-card flex items-center justify-center text-xs text-white font-semibold">A</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">Best Customer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-1 text-left slide-up">
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Hello, I'm{" "}
              <br />
              <span className="text-primary">Ahmed S. Abdi</span> An
              <br />
              <span className="text-accent">IT Support Technician</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              Aspiring IT Support Technician with hands-on experience in troubleshooting, 
              networking basics, and end-user support through home labs and real-world situations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToExperience}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-lg rounded-full"
              >
                Get Started
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
