import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const learningResources = [
    {
      name: "Professor Messer's CompTIA A+ Course",
      type: "Video Course",
      status: "In Progress"
    },
    {
      name: "Jason Dion's Practice Exams",
      type: "Practice Tests",
      status: "Active"
    },
    {
      name: "Home Lab Documentation",
      type: "Hands-on Practice",
      status: "Ongoing"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-accent font-semibold text-base mb-2">WHAT DRIVES ME</p>
            <p className="text-foreground/70 text-lg">
              My journey into IT support and continuous learning path
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="slide-up">
              <h3 className="font-heading font-semibold text-2xl mb-6">My IT Journey</h3>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  My transition into IT support began through real-world problem-solving experiences. 
                  While working in various roles, I consistently found myself drawn to troubleshooting 
                  technical issues and helping colleagues with their IT challenges.
                </p>
                <p>
                  This natural inclination led me to formalize my learning through structured courses 
                  and hands-on lab practice. I believe that the best way to learn IT is through 
                  practical application, which is why I've set up a home lab environment to simulate 
                  real-world scenarios.
                </p>
                <p>
                  My goal is to become a certified IT Support Technician who can provide reliable, 
                  efficient technical support while continuously expanding my knowledge in networking, 
                  system administration, and emerging technologies.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href="#" target="_blank">Download Resume</a>
                </Button>
                <Button 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="#" target="_blank">View Lab Tracker</a>
                </Button>
              </div>
            </div>

            <div className="slide-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="font-heading font-semibold text-2xl mb-6">Learning Resources</h3>
              
              <div className="space-y-4">
                {learningResources.map((resource, index) => (
                  <Card key={index} className="bg-card border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{resource.name}</h4>
                          <p className="text-sm text-foreground/60">{resource.type}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          resource.status === "In Progress" ? "bg-yellow-500/20 text-yellow-500" :
                          resource.status === "Active" ? "bg-primary/20 text-primary" :
                          "bg-green-500/20 text-green-500"
                        }`}>
                          {resource.status}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-card border border-primary/20 rounded-lg">
                <h4 className="font-heading font-semibold text-lg mb-3 text-primary">Current Focus</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    CompTIA A+ certification preparation
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Advanced PowerShell scripting
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    Network troubleshooting methodologies
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
