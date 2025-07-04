
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Download, Star, Users, Award } from "lucide-react";
const HeroSection = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl floating-shape"></div>
        <div className="absolute top-40 left-10 w-24 h-24 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-lg floating-shape-delayed"></div>
        <div className="absolute bottom-40 right-40 w-40 h-40 bg-gradient-to-br from-primary/15 to-accent/15 rounded-2xl rotate-45 blur-2xl floating-shape"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,188,156,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,188,156,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Hero Content */}
          <div className="order-2 lg:order-1 space-y-8 slide-up">
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl leading-tight">
                <span className="block text-foreground">Hello, I'm</span>
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  Ahmed S. Abdi
                </span>
                <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground mt-4">
                  IT Support Technician
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Aspiring IT Support Technician with hands-on experience in troubleshooting, 
                networking basics, and end-user support through home labs and real-world situations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToExperience} size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 py-6 text-lg rounded-2xl group transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25">
                Explore My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-2xl border-2 hover:bg-accent/10 hover:border-accent transition-all duration-300 group">
                <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
              <Card className="p-4 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">2+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/20 rounded-lg">
                    <Star className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">5+</div>
                    <div className="text-sm text-muted-foreground">Lab Projects</div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 backdrop-blur border-border/50 hover:bg-card/80 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">50+</div>
                    <div className="text-sm text-muted-foreground">Issues Resolved</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Profile Section with Gradient Border */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="relative flex items-center justify-center">
                {/* Gradient border container */}
                <div
                  className="w-80 h-80 md:w-96 md:h-96 rounded-3xl p-[5px] bg-gradient-to-tr from-green-400 via-yellow-400 to-primary shadow-xl"
                  style={{
                    boxShadow: "0 6px 36px 0 rgba(26,188,156,0.08), 0 1.5px 12px 0 rgba(255,165,0,0.08)",
                  }}
                >
                  {/* The actual profile image container with a white background */}
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                    <img
                      src={`${import.meta.env.BASE_URL}lovable-uploads/profile-picture.jpg`}
                      alt="Ahmed S. Abdi"
                      className="rounded-2xl object-cover object-center w-full h-full border-0"
                      style={{ background: "#fff" }}
                    />
                  </div>
                </div>
                {/* Only one floating Card at bottom-left */}
                <Card className="absolute -bottom-6 -left-6 p-4 bg-card/90 backdrop-blur border-border/50 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-foreground">CompTIA A+</div>
                      <div className="text-sm text-muted-foreground">In Progress</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
